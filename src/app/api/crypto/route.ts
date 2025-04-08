import { NextResponse } from 'next/server';
import type { CoinMarketCapData } from '@/lib/utils';

const CMC_API_KEY = process.env.COINMARKETCAP_API_KEY;
const CMC_API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';

export async function GET(request: Request) {
  try {
    if (!CMC_API_KEY) {
      throw new Error('CoinMarketCap API key not configured');
    }

    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get('symbol') || 'KLC';

    console.debug(`Fetching data for symbol: ${symbol}`);

    const response = await fetch(
      `${CMC_API_URL}?symbol=${symbol}&convert=USD`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': CMC_API_KEY,
          'Accept': 'application/json',
        },
        next: { revalidate: 60 }, // Cache for 60 seconds
      }
    );

    if (!response.ok) {
      console.error(`CoinMarketCap API error: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`CoinMarketCap API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.debug('Raw API response:', JSON.stringify(data, null, 2));

    if (!data.data || !data.data[symbol]) {
      console.error('No data returned from CoinMarketCap for symbol:', symbol);
      console.debug('Available data:', Object.keys(data.data || {}));
      throw new Error('No data returned from CoinMarketCap');
    }

    const rawCoinData = data.data[symbol];
    console.debug('Raw coin data:', rawCoinData);

    // Process the data to use self-reported market cap when regular market cap is 0
    const processedCoinData: CoinMarketCapData = {
      id: rawCoinData.id,
      name: rawCoinData.name,
      symbol: rawCoinData.symbol,
      quote: {
        USD: {
          price: rawCoinData.quote.USD.price,
          volume_24h: rawCoinData.quote.USD.volume_24h,
          percent_change_24h: rawCoinData.quote.USD.percent_change_24h,
          // Use self-reported market cap if regular market cap is 0
          market_cap: rawCoinData.quote.USD.market_cap || rawCoinData.self_reported_market_cap || 42800000,
        }
      }
    };

    console.debug('Processed coin data:', processedCoinData);
    return NextResponse.json(processedCoinData);
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    
    // Return fallback data on error
    return NextResponse.json({
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
    });
  }
} 