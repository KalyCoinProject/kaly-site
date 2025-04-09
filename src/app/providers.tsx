'use client';

import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { createConfig, http } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { kalyChainMainnet, kalyChainTestnet } from '@/config/chains';

// Define the configuration outside of the component to avoid reinitializaton
const chains = [kalyChainMainnet, kalyChainTestnet] as const;

const config = createConfig({
  chains,
  transports: {
    [kalyChainMainnet.id]: http(kalyChainMainnet.rpcUrls.default.http[0]),
    [kalyChainTestnet.id]: http(kalyChainTestnet.rpcUrls.default.http[0]),
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#f59e0b', // amber-500
            accentColorForeground: 'black',
            borderRadius: 'medium',
          })}
        >
          {mounted && children}
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
} 