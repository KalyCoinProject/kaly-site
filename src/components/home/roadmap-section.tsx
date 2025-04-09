import { Rocket, Scale, TrendingUp, University, CreditCard, BarChartHorizontal } from "lucide-react";

const roadmapItems = [
  {
    title: "KalySwap V3 & CEX Experience",
    description: "Upgrading KalySwap to UniSwap V3 core, introducing an orderbook model for a CEX-like trading experience on a DEX.",
    icon: BarChartHorizontal,
    status: "Upcoming",
  },
  {
    title: "Regulatory Readiness (KYC)",
    description: "Integrating KYC processes to meet regulatory requirements and facilitate institutional adoption.",
    icon: Scale,
    status: "Upcoming",
  },
  {
    title: "Fiat On-Ramp",
    description: "Enabling users to buy cryptocurrency directly with credit/debit cards through integrated partners.",
    icon: CreditCard,
    status: "Upcoming",
  },
  {
    title: "Lending & Borrowing",
    description: "Introducing decentralized lending and borrowing protocols to expand DeFi capabilities on KalyChain.",
    icon: University, // Using University icon for lending/borrowing/protocols
    status: "Planned",
  },
  {
    title: "Leveraged Trading",
    description: "Offering leveraged trading options within the KalyChain ecosystem for advanced traders.",
    icon: TrendingUp,
    status: "Planned",
  },
  {
    title: "KalyLaunchPad",
    description: "Launching a platform to support and incubate new projects building on the KalyChain network.",
    icon: Rocket,
    status: "Planned",
  },
];

export function RoadmapSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-stone-950 to-amber-500/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Innovating for the Future
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our roadmap outlines key developments to enhance the KalyChain ecosystem, driving innovation in DeFi and enterprise blockchain solutions.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500/30 via-amber-500/70 to-amber-500/30 transform -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Dot on Timeline */}
                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border-2 border-amber-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-125 group-hover:bg-amber-500 shadow-md">
                  <div className="w-3 h-3 bg-amber-400 rounded-full transition-all duration-300 group-hover:bg-white"></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/60 shadow-lg transition-all duration-300 group-hover:border-amber-500/50 group-hover:shadow-amber-500/10">
                  <div className="flex items-center mb-3">
                    <item.icon className="h-6 w-6 text-amber-400 mr-3 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <span
                      className={`ml-auto text-xs font-medium px-2.5 py-0.5 rounded-full ${item.status === "Upcoming"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-purple-500/20 text-purple-300"
                        }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 