import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

// Placeholder logos - replace with actual SVGs or optimized images if available
const partners = [
  {
    name: "CoinMarketCap",
    logoUrl: "https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=6377d6f", // Example URL, replace with better source
    url: "https://coinmarketcap.com/currencies/kalycoin/",
  },
  {
    name: "CoinGecko",
    logoUrl: "https://static.coingecko.com/s/coingecko-logo-d13d6bcc0dbfa1336f3ac26fe398ab15361ce5853fa39079c04938e7ae4f10ba.svg", // Example URL
    url: "https://www.coingecko.com/en/coins/kalychain",
  },
  {
    name: "Dex-Trade",
    logoUrl: "https://dex-trade.com/img/logo_color.svg", // Example URL
    url: "https://dex-trade.com/news/klc-will-be-listed-on-dex-trade",
  },
  {
    name: "Chainlist",
    logoUrl: "https://chainlist.org/favicon.ico", // Example URL (using favicon)
    url: "https://chainlist.org/chain/3888",
  },
  {
    name: "HyperLedger Besu",
    logoUrl: "https://www.hyperledger.org/wp-content/uploads/2021/07/Hyperledger_Besu_horizontal.svg", // Example URL
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

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${partner.name}`}
              className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={partner.logoUrl}
                alt={`${partner.name} Logo`}
                className="max-h-full max-w-[150px] object-contain"
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