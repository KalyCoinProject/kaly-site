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

/**
 * Fetches cryptocurrency data from CoinMarketCap API
 * @param symbol The cryptocurrency symbol (e.g., "KALY")
 * @returns Promise with the cryptocurrency data
 */
export async function fetchCryptoData(
  symbol: string = "KALY",
): Promise<CoinMarketCapData | null> {
  try {
    // In a real implementation, this would be a server-side API call with proper API key
    // For demo purposes, we're using a mock implementation
    // The API endpoint would be: https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=KALY

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock response for KALY
    if (symbol.toUpperCase() === "KALY") {
      return {
        id: 12345,
        name: "KalyCoin",
        symbol: "KALY",
        quote: {
          USD: {
            price: 0.0348,
            volume_24h: 5678901,
            percent_change_24h: 5.67,
            market_cap: 42800000,
          },
        },
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return null;
  }
}
