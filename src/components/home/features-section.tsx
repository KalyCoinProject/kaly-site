import { BarChart3, Gavel, Shield, Zap } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-stone-950 to-amber-500/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enterprise-Ready Blockchain Powerhouse
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leveraging HyperLedger Besu, KalyChain delivers unparalleled speed,
            robust security, and decentralized governance for demanding
            enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Speed */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 flex flex-col items-center text-center hover-lift-light">
            <div className="h-16 w-16 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 ring-2 ring-amber-500/30">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Blazing Fast Speed</h3>
            <p className="text-gray-400">
              Experience rapid transactions with our optimized network achieving
              <span className="font-semibold text-amber-400"> 2-second block times</span>,
              ideal for high-throughput applications.
            </p>
          </div>

          {/* Feature 2: Security */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 flex flex-col items-center text-center hover-lift-light">
            <div className="h-16 w-16 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 ring-2 ring-amber-500/30">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
            <p className="text-gray-400">
              Built on <span className="font-semibold text-amber-400">HyperLedger Besu</span>, offering robust, enterprise-grade security features suitable for institutional adoption.
            </p>
          </div>

          {/* Feature 3: Governance */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 flex flex-col items-center text-center hover-lift-light">
            <div className="h-16 w-16 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 ring-2 ring-amber-500/30">
              <Gavel className="h-8 w-8" /> {/* Icon for Governance */}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">On-Chain Governance</h3>
            <p className="text-gray-400">
              Empowering the community with <span className="font-semibold text-amber-400">100% on-chain governance</span> through KalyDAO, ensuring truly decentralized decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple hover effect style (optional, can be added to globals.css if preferred)
const hoverLiftLight = `
  .hover-lift-light {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .hover-lift-light:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(234, 179, 8, 0.1);
  }
`;

// Inject styles (alternative to adding to globals.css)
if (typeof window !== 'undefined') { // Check if running in browser
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = hoverLiftLight;
  document.head.appendChild(styleSheet);
} 