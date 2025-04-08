import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format currency with 2 decimal places or more if needed
export function formatCurrency(
  amount: number,
  maximumFractionDigits = 6,
): string {
  // For very small values, show more decimal places
  const minDigits = amount < 0.01 ? 4 : 2;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maximumFractionDigits,
  }).format(amount);
}

// CoinMarketCap API response types
export interface CoinMarketCapQuote {
  price: number;
  volume_24h: number;
  percent_change_24h: number;
  market_cap: number;
}

export interface CoinMarketCapData {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: CoinMarketCapQuote;
  };
}

export interface CoinMarketCapResponse {
  data: {
    [key: string]: CoinMarketCapData;
  };
  status: {
    error_code: number;
    error_message: string | null;
  };
}

// CoinGecko API response types
export interface CoinGeckoMarketData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  total_volume: number;
  image: string;
}

const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';
const COIN_ID = 'kalycoin'; // CoinGecko's ID for KalyChain/KalyCoin

// Fallback data for when API fails
const FALLBACK_DATA: CoinMarketCapData = {
  id: 0,
  name: "KalyCoin",
  symbol: "KLC",
  quote: {
    USD: {
      price: 0.0348,
      volume_24h: 5678901,
      percent_change_24h: 5.67,
      market_cap: 42800000,
    },
  },
};

// Rate limiting - CoinMarketCap Basic plan limits
let lastApiCall = 0;
const API_CALL_MINIMUM_INTERVAL = 120000; // 2 minutes (30 calls per hour to be safe)

// Cache the last response to avoid unnecessary API calls
let cachedResponse: {
  data: CoinMarketCapData | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0,
};

const CACHE_DURATION = 300000; // 5 minutes cache

// Format market cap in millions/billions with proper rounding
export function formatMarketCap(value: number): string {
  if (!value || value === 0) return '$0.00';
  
  // Handle very small values
  if (value < 1000) {
    return formatCurrency(value);
  }
  
  // Format in K/M/B with proper rounding
  if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(2)}B`;
  }
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(2)}K`;
  }
  
  return formatCurrency(value);
}

/**
 * Fetches cryptocurrency data from CoinMarketCap API via our server route
 * @param symbol The cryptocurrency symbol (e.g., "KLC")
 * @returns Promise with the cryptocurrency data
 */
export async function fetchCryptoData(
  symbol: string = "KLC",
): Promise<CoinMarketCapData | null> {
  try {
    const now = Date.now();

    // Check cache first
    if (cachedResponse.data && (now - cachedResponse.timestamp) < CACHE_DURATION) {
      console.debug('Using cached data from', new Date(cachedResponse.timestamp).toLocaleTimeString());
      return cachedResponse.data;
    }

    // Rate limiting check
    const timeSinceLastCall = now - lastApiCall;
    if (timeSinceLastCall < API_CALL_MINIMUM_INTERVAL) {
      console.debug(`Rate limit: ${Math.round(timeSinceLastCall/1000)}s since last call, minimum interval is ${API_CALL_MINIMUM_INTERVAL/1000}s`);
      return cachedResponse.data || FALLBACK_DATA;
    }

    lastApiCall = now;

    // Call our server-side API route
    console.debug('Fetching fresh data from API...');
    const response = await fetch(
      `/api/crypto?symbol=${encodeURIComponent(symbol)}`,
      {
        headers: {
          'Accept': 'application/json',
        },
        cache: 'no-store', // Disable caching to ensure fresh data
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data) {
      console.warn('No data returned from API, using cached or fallback data');
      return cachedResponse.data || FALLBACK_DATA;
    }

    // Update cache
    cachedResponse = {
      data,
      timestamp: now,
    };

    console.debug('Received fresh data at', new Date().toLocaleTimeString());
    return data;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return cachedResponse.data || FALLBACK_DATA;
  }
}
