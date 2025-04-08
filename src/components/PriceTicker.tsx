"use client";

import React, { useEffect, useState } from "react";
import {
  fetchCryptoData,
  formatCurrency,
  formatMarketCap,
  type CoinMarketCapData,
} from "@/lib/utils";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceTickerProps {
  symbol?: string;
  refreshInterval?: number; // in milliseconds
  className?: string;
}

export function PriceTicker({
  symbol = "KLC",
  refreshInterval = 120000, // Default refresh every 2 minutes to respect API limits
  className,
}: PriceTickerProps) {
  const [cryptoData, setCryptoData] = useState<CoinMarketCapData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = async (showRefreshing = true) => {
    try {
      if (showRefreshing) setIsRefreshing(true);
      setError(null);
      console.debug('Fetching crypto data...');
      const data = await fetchCryptoData(symbol);
      if (!data) throw new Error("Failed to fetch data");
      console.debug('Received crypto data:', data);
      setCryptoData(data);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Error in fetchData:', err);
      setError("Failed to fetch cryptocurrency data");
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData(false);

    // Set up interval for refreshing data
    const intervalId = setInterval(() => fetchData(true), refreshInterval);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [symbol, refreshInterval]);

  // Format the percent change with a + sign for positive values
  const formatPercentChange = (value: number) => {
    const sign = value >= 0 ? "+" : "";
    return `${sign}${value.toFixed(2)}%`;
  };

  // Determine the color class based on the percent change
  const getChangeColorClass = (value: number) => {
    return value >= 0 ? "text-green-400" : "text-red-400";
  };

  return (
    <div className={cn("bg-black/30 backdrop-blur-md rounded-2xl p-6 mb-12 border border-white/10 shadow-xl hover:border-white/20 transition-colors", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center overflow-hidden">
            <span className="font-bold text-white">K</span>
          </div>
          <div>
            <h3 className="font-bold text-white">
              {cryptoData?.name || "KalyCoin"}
            </h3>
            <p className="text-sm text-white/60">{symbol}</p>
          </div>
        </div>
        {lastUpdated && (
          <div className="flex items-center gap-2 text-xs text-white/60">
            <button
              onClick={() => fetchData(true)}
              className={cn(
                "p-1 hover:bg-white/10 rounded-full transition-colors",
                isRefreshing && "animate-spin"
              )}
              disabled={isRefreshing}
              title="Refresh data"
            >
              <RefreshCw size={14} />
            </button>
            <span>Updated {lastUpdated.toLocaleTimeString()}</span>
          </div>
        )}
      </div>

      {error ? (
        <div className="bg-red-500/20 text-white p-4 rounded-xl text-center">
          <p>{error}</p>
          <button
            onClick={() => fetchData(true)}
            className="mt-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-sm transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white animate-pulse">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <div className="h-4 bg-white/10 rounded mb-2 w-20"></div>
            <div className="h-8 bg-white/10 rounded w-32"></div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <div className="h-4 bg-white/10 rounded mb-2 w-20"></div>
            <div className="h-8 bg-white/10 rounded w-32"></div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <div className="h-4 bg-white/10 rounded mb-2 w-20"></div>
            <div className="h-8 bg-white/10 rounded w-32"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors">
            <p className="text-sm text-white/70 mb-1">Current Price</p>
            <p className="text-2xl font-bold">
              {cryptoData ? formatCurrency(cryptoData.quote.USD.price) : "-"}
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors">
            <p className="text-sm text-white/70 mb-1">24h Change</p>
            <p
              className={`text-2xl font-bold ${
                cryptoData
                  ? getChangeColorClass(cryptoData.quote.USD.percent_change_24h)
                  : ""
              }`}
            >
              {cryptoData
                ? formatPercentChange(cryptoData.quote.USD.percent_change_24h)
                : "-"}
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors">
            <p className="text-sm text-white/70 mb-1">Market Cap</p>
            <p className="text-2xl font-bold">
              {cryptoData
                ? formatMarketCap(cryptoData.quote.USD.market_cap)
                : "-"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
