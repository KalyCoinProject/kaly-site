import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const ecosystemApps = [
  {
    name: "KalyDAO",
    description: "Decentralized governance for the KalyChain ecosystem.",
    url: "https://dao.kalychain.io",
    icon: "🏛️", // Placeholder icon
  },
  {
    name: "KalySwap",
    description: "Trade assets on the premier DEX built on KalyChain.",
    url: "https://kalyswap.io/",
    icon: "🔄", // Placeholder icon
  },
  {
    name: "KalyBridge",
    description: "Seamlessly bridge assets between KalyChain and other networks.",
    url: "https://bridge.kalychain.io/",
    icon: "🌉", // Placeholder icon
  },
  {
    name: "KalyScan",
    description: "Explore blocks, transactions, and addresses on KalyChain.",
    url: "https://kalyscan.io/",
    icon: "🔍", // Placeholder icon
  },
  {
    name: "KalyPay",
    description: "Mobile wallet and payment solution for the Kaly ecosystem.",
    url: "https://kalypay.com/",
    icon: "📱", // Placeholder icon
  },
  {
    name: "KalyChain Docs",
    description: "Comprehensive documentation for developers and users.",
    url: "https://docs.kalychain.io/",
    icon: "📚", // Placeholder icon
  },
];

export function EcosystemSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore the KalyChain Ecosystem
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the growing suite of applications and services powered by
            KalyChain's robust infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecosystemApps.map((app) => (
            <Card
              key={app.name}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white flex flex-col transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="text-3xl">{app.icon}</div> {/* Basic icon */}
                <CardTitle className="text-xl font-bold">{app.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-gray-400 mb-6">{app.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-auto w-full border-amber-500 text-amber-400 hover:bg-amber-500/10 hover:text-amber-300 group"
                  asChild
                >
                  <a href={app.url} target="_blank" rel="noopener noreferrer">
                    Visit {app.name}{" "}
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 