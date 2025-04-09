import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format currency with proper decimal places and commas
export function formatCurrency(value: number): string {
  if (!value || value === 0) return '$0.00';
  
  // For values less than 1 cent, show more decimal places
  if (value < 0.01) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 6,
      maximumFractionDigits: 6,
    }).format(value);
  }
  
  // For values less than $1, show 4 decimal places
  if (value < 1) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    }).format(value);
  }
  
  // For values $1 and above, show 2 decimal places
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

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

// Fallback data for when API fails
const FALLBACK_DATA: CoinMarketCapData = {
  id: 0,
  name: "KalyChain",
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

export interface CoinMarketCapData {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      percent_change_24h: number;
      market_cap: number;
    };
  };
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
