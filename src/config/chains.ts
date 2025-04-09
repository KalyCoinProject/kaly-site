import { defineChain } from 'viem';

export const kalyChainMainnet = defineChain({
  id: 3888,
  name: 'KalyChain MainNet',
  network: 'kalychain',
  nativeCurrency: {
    name: 'KLC',
    symbol: 'KLC',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.kalychain.io/rpc'],
    },
    public: {
      http: ['https://rpc.kalychain.io/rpc'],
    },
  },
  blockExplorers: {
    default: {
      name: 'KalyScan',
      url: 'https://kalyscan.io',
    },
  },
});

export const kalyChainTestnet = defineChain({
  id: 3889,
  name: 'KalyChain TestNet',
  network: 'kalychain-testnet',
  nativeCurrency: {
    name: 'KLC',
    symbol: 'KLC',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://testnetrpc.kalychain.io/rpc'],
    },
    public: {
      http: ['https://testnetrpc.kalychain.io/rpc'],
    },
  },
  blockExplorers: {
    default: {
      name: 'KalyScan Testnet',
      url: 'https://testnet.kalyscan.io',
    },
  },
  testnet: true,
}); 