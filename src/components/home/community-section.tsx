import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

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
    className: "filter brightness-0 invert", // Added filter to make it visible on dark bg
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
    logoUrl: "/images/kalyswap-logo.svg", // Adding KalySwap with logo
    url: "https://kalyswap.io/",
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 place-items-center">
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
          <Button
            size="lg"
            className="bg-amber-500 text-white hover:bg-amber-600 hover-lift border-none"
          >
            Explore Community Channels <ArrowUpRight className="ml-2 h-4 w-4" />
            {/* TODO: Add actual link to community page/discord/telegram */}
          </Button>
        </div>
      </div>
    </section>
  );
}
