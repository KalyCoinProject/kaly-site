import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

// Use local logos where available
const partners = [
  {
    name: "CoinMarketCap",
    logoUrl: "/images/cmc-logo.svg", // Using local SVG
    url: "https://coinmarketcap.com/currencies/kalycoin/",
  },
  {
    name: "CoinGecko",
    logoUrl: "/images/coingecko-logo.svg", // Using local SVG
    url: "https://www.coingecko.com/en/coins/kalychain",
  },
  {
    name: "Dex-Trade",
    logoUrl: "/images/dextrade-logo.svg", // Using local SVG
    url: "https://dex-trade.com/news/klc-will-be-listed-on-dex-trade",
  },
  {
    name: "Chainlist",
    logoUrl: "/images/chainlist-logo.svg", // Using local SVG
    url: "https://chainlist.org/chain/3888",
  },
  {
    name: "HyperLedger Besu",
    logoUrl: "/images/besu-logo.svg", // Updated to local SVG
    url: "https://besu.hyperledger.org/",
  },
  // Add more partners/listings if needed
];

export function CommunitySection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted & Recognized
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            KalyChain is recognized by leading platforms and built with trusted enterprise technology.
          </p>
        </div>

        {/* Adjusted Grid Layout & Removed Filters */}
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-10 md:gap-16 place-items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${partner.name}`}
              className="flex items-center justify-center h-20 w-full opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={partner.logoUrl}
                alt={`${partner.name} Logo`}
                className="h-12 w-auto object-contain"
              />
            </a>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-white mb-4">Join Our Growing Community</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Connect with developers, users, and enthusiasts in the KalyChain ecosystem.
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