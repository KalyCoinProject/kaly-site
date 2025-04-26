import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { FaDiscord, FaTelegram, FaGithub, FaTwitter } from "react-icons/fa";
import { AddToWalletButton } from "@/components/wallet/AddToWalletButton";
import Image from "next/image";

// Use logos with text for all partners
const partners: { name: string; logoUrl: string; url: string; className?: string }[] = [
  {
    name: "CoinMarketCap",
    logoUrl: "/images/coinmarketcap-seeklogo.png", // Using logo with text
    url: "https://coinmarketcap.com/currencies/kalycoin/",
  },
  {
    name: "CoinGecko",
    logoUrl: "/images/coingecko-seeklogo.png", // Using logo with text
    url: "https://www.coingecko.com/en/coins/kalychain",
  },
  {
    name: "Dex-Trade",
    logoUrl: "/images/dex-trade-logo.svg", // This is the correct logo
    url: "https://dex-trade.com/news/klc-will-be-listed-on-dex-trade",
    className: "filter brightness-0 invert scale-150 transform", // Made logo larger
  },
  {
    name: "Chainlist",
    logoUrl: "/images/chainlist.png", // Using logo with text
    url: "https://chainlist.org/chain/3888",
  },
  {
    name: "HyperLedger Besu",
    logoUrl: "/images/besu-logo.svg", // Using logo with text
    url: "https://besu.hyperledger.org/",
    className: "filter brightness-0 invert", // Added filter to make it visible on dark bg
  },
  {
    name: "KalySwap",
    logoUrl: "/images/kalyswap-logo.png", // Adding KalySwap with logo
    url: "https://kalyswap.io/",
  },
  {
    name: "ChangeNOW",
    logoUrl: "/images/changenow-logo.svg",
    url: "https://changenow.io",
    className: "filter brightness-0 invert", // Make it visible on dark bg
  },
  {
    name: "WhiteBIT",
    logoUrl: "/images/whitebit-logo.svg",
    url: "https://whitebit.com/trade/KLC-USDT?type=spot&tab=open-orders",
    className: "filter brightness-0 invert", // Make it visible on dark bg
  },
  {
    name: "Alchemy Pay",
    logoUrl: "/images/alchemy-logo.svg",
    url: "https://alchemypay.org/",
    className: "filter brightness-0 invert", // Make it visible on dark bg
  },
  {
    name: "Guarda",
    logoUrl: "/images/guarda-logo.svg",
    url: "https://guarda.com/",
    className: "filter brightness-0 invert", // Make it visible on dark bg
  },
];

export function CommunitySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-500/20 via-black to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted & Recognized
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            KalyChain is recognized by leading platforms and built with trusted
            enterprise technology.
          </p>
        </div>

        {/* Updated Grid Layout for Logos with Text */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 place-items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${partner.name}`}
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-white/5 transition-all duration-300 w-full max-w-[200px] border border-amber-500/20"
            >
              <div className="h-16 flex items-center justify-center mb-3 bg-amber-500/5 p-2 rounded-lg w-full">
                <img
                  src={partner.logoUrl}
                  alt={`${partner.name} Logo`}
                  className={`max-h-16 w-auto object-contain ${partner.className || ""}`}
                />
              </div>
              <span className="text-amber-100 text-sm font-medium text-center">
                {partner.name}
              </span>
            </a>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Join Our Growing Community
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Connect with developers, users, and enthusiasts in the KalyChain
            ecosystem.
          </p>
          
          {/* For Developers section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">For Developers</h3>
            <div className="flex flex-col items-center gap-4 mb-6">
              <p className="text-gray-400 mb-2">Connect to TestNet</p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center">
                  <Button
                    size="lg"
                    className="bg-amber-600 text-white hover:bg-amber-700 hover-lift border-none flex items-center gap-2"
                    asChild
                  >
                    <a href="#" onClick={(e) => { 
                      e.preventDefault(); 
                      const connectButton = document.querySelector('[data-testid="rk-connect-button"]');
                      if (connectButton instanceof HTMLElement) {
                        connectButton.click();
                      }
                    }}>
                      <div className="bg-white rounded-full p-1 flex items-center justify-center mr-1">
                        <Image src="/images/metamask.png" alt="MetaMask" width={20} height={20} />
                      </div>
                      <span>Connect Wallet</span>
                    </a>
                  </Button>
                </div>
                
                <div className="flex flex-col items-center">
                  <Button
                    size="lg"
                    className="bg-amber-600 text-white hover:bg-amber-700 hover-lift border-none flex items-center gap-2"
                    asChild
                  >
                    <a href="https://testnet.kalyscan.io/" target="_blank" rel="noopener noreferrer">
                      <div className="bg-white rounded-full p-1 flex items-center justify-center mr-1">
                        <Image src="/images/klc.png" alt="KLC" width={20} height={20} />
                      </div>
                      <span>TestNet Explorer</span>
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Hidden actual wallet button for functionality */}
              <div className="hidden">
                <AddToWalletButton chainType="testnet" />
              </div>
            </div>
          </div>
          
          <Button
            size="lg"
            className="bg-amber-500 text-white hover:bg-amber-600 hover-lift border-none"
            asChild
          >
            <a href="https://discord.gg/4fDuS3cBJw" target="_blank" rel="noopener noreferrer">
              Explore Community Channels <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          
          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="https://discord.gg/4fDuS3cBJw"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 transition-all duration-300"
              aria-label="Join our Discord"
            >
              <FaDiscord className="h-6 w-6" />
            </a>
            <a
              href="https://t.me/+yj8Ae9lNXmg1Yzkx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 transition-all duration-300"
              aria-label="Join our Telegram"
            >
              <FaTelegram className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/KalyCoinProject"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 transition-all duration-300"
              aria-label="View our GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/KalyChain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 transition-all duration-300"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
