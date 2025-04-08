"use client";

import React, { useEffect, useState } from "react";
import {
  fetchCryptoData,
  formatCurrency,
  type CoinMarketCapData,
} from "@/lib/utils";
import { RefreshCw } from "lucide-react";

interface PriceTickerProps {
  symbol?: string;
  refreshInterval?: number; // in milliseconds
}

export function PriceTicker({
  symbol = "KLC",
  refreshInterval = 60000, // Default refresh every minute
}: PriceTickerProps) {
  const [cryptoData, setCryptoData] = useState<CoinMarketCapData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCryptoData(symbol);
      setCryptoData(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError("Failed to fetch cryptocurrency data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // Set up interval for refreshing data
    const intervalId = setInterval(fetchData, refreshInterval);

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

  // Format market cap in millions/billions
  const formatMarketCap = (value: number) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(1)}B`;
    }
    return `${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 mb-12 border border-white/10 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center overflow-hidden">
            <img
              src="https://i.imgur.com/qjwCshF.png"
              alt="KalyCoin"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-white">KalyCoin (KLC)</h3>
        </div>

        {lastUpdated && (
          <div className="flex items-center gap-2 text-xs text-white/60">
            <button
              onClick={fetchData}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
              disabled={loading}
              title="Refresh data"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            </button>
            <span>Updated {lastUpdated.toLocaleTimeString()}</span>
          </div>
        )}
      </div>

      {error ? (
        <div className="bg-red-500/20 text-white p-4 rounded-xl text-center">
          <p>{error}</p>
          <button
            onClick={fetchData}
            className="mt-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-sm transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : loading && !cryptoData ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 animate-pulse"
            >
              <div className="h-4 bg-white/20 rounded mb-2 w-20"></div>
              <div className="h-8 bg-white/20 rounded w-24"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <p className="text-sm text-white/70 mb-1">Current Price</p>
            <p className="text-2xl font-bold">
              {cryptoData
                ? formatCurrency(cryptoData.quote.USD.price)
                : "$0.0348"}
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <p className="text-sm text-white/70 mb-1">24h Change</p>
            <p
              className={`text-2xl font-bold ${cryptoData ? getChangeColorClass(cryptoData.quote.USD.percent_change_24h) : "text-green-400"}`}
            >
              {cryptoData
                ? formatPercentChange(cryptoData.quote.USD.percent_change_24h)
                : "+5.67%"}
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <p className="text-sm text-white/70 mb-1">Market Cap</p>
            <p className="text-2xl font-bold">
              {cryptoData
                ? formatMarketCap(cryptoData.quote.USD.market_cap)
                : "$42.8M"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
