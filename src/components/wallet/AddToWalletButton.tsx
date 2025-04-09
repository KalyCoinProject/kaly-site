'use client';

import { Button } from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { kalyChainMainnet, kalyChainTestnet } from '@/config/chains';
import { toast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

interface AddToWalletButtonProps {
  chainType?: 'mainnet' | 'testnet';
  variant?: 'default' | 'small';
}

export function AddToWalletButton({ 
  chainType = 'mainnet',
  variant = 'default' 
}: AddToWalletButtonProps) {

  // Simple variant just shows the Connect button
  if (variant === 'small') {
    return (
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
        }) => {
          const ready = mounted;
          const connected = ready && account && chain;
          const targetChainId = chainType === 'mainnet' ? kalyChainMainnet.id : kalyChainTestnet.id;
          const isOnRightChain = chain?.id === targetChainId;

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <Button
                      size="sm"
                      className="bg-amber-500 text-black hover:bg-amber-600"
                      onClick={openConnectModal}
                    >
                      Connect Wallet
                    </Button>
                  );
                }

                if (!isOnRightChain) {
                  return (
                    <Button
                      size="sm"
                      className="bg-amber-500 text-black hover:bg-amber-600"
                      onClick={openChainModal}
                    >
                      Switch Network
                    </Button>
                  );
                }

                return (
                  <Button
                    size="sm"
                    className="bg-amber-500/20 text-amber-100 border border-amber-500/50 hover:bg-amber-500/30"
                    onClick={openAccountModal}
                  >
                    {account.displayName}
                  </Button>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    );
  }

  // Default variant shows the full ConnectButton
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-lg font-medium text-white mb-2">
        {chainType === 'mainnet' ? 'Connect to KalyChain' : 'Connect to TestNet'}
      </h3>
      <ConnectButton 
        chainStatus="icon" 
        showBalance={false}
        accountStatus="address"
      />
    </div>
  );
}