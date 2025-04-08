import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { PriceTicker } from "@/components/PriceTicker";
import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold overflow-hidden">
            <img
              src="https://i.imgur.com/qjwCshF.png"
              alt="KalyChain Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-display text-xl font-bold">KalyChain</span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Platform
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Tokenomics
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <Button size="sm" variant="outline" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-bg py-20 md:py-32 flex-grow flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-primary-800/40 to-primary-950/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full">
              <span className="text-amber-200 font-medium text-sm">
                The Future of Finance is Here
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Powering the{" "}
              <span className="text-amber-400">Next Generation</span> of
              Decentralized Finance
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              KalyChain provides institutional-grade infrastructure for the
              future of finance. Secure, scalable, and built for the next
              billion users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-amber-500 text-white hover:bg-amber-600 hover-lift border-none"
              >
                Start Building <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 hover-lift"
              >
                View Documentation
              </Button>
            </div>

            {/* Live Price Ticker */}
            <PriceTicker />

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                <p className="text-3xl font-bold">$1.2B+</p>
                <p className="text-sm text-white/70">Total Value Locked</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                <p className="text-3xl font-bold">12M+</p>
                <p className="text-sm text-white/70">Transactions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                <p className="text-3xl font-bold">120+</p>
                <p className="text-sm text-white/70">Global Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for the demands of modern financial applications with
              security and scalability at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-sm hover-lift">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Process thousands of transactions per second with near-instant
                finality and minimal fees.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-sm hover-lift">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bank-Grade Security</h3>
              <p className="text-muted-foreground">
                Enterprise-level security with multi-layered protection and
                regular security audits.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-sm hover-lift">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Real-time insights and powerful analytics tools to monitor
                performance and optimize operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
