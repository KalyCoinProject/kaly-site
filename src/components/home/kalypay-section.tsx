import { Button } from "@/components/ui/button";
import { ArrowUpRight, CreditCard, Send, ChevronsUp, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function KalyPaySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-amber-900/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6 max-w-[300px]">
              <Image
                src="/images/kalypay-logo.png"
                alt="KalyPay Logo"
                width={475}
                height={442}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '475px'
                }}
                priority
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Complete Payment Solution for the Crypto Era
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              KalyPay is a multi-currency transfer platform designed for fast and secure cross-border money transfers. As an integral part of the KalyChain ecosystem, KalyPay bridges traditional finance with the crypto world through its innovative payment solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-amber-500/20 rounded-lg">
                  <Send className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Fast Transfers</h3>
                  <p className="text-gray-400">Send money worldwide with ultra-fast transaction speeds</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-amber-500/20 rounded-lg">
                  <CreditCard className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Visa Cards</h3>
                  <p className="text-gray-400">Spend your crypto anywhere with KalyPay Visa cards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-amber-500/20 rounded-lg">
                  <ChevronsUp className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Staking Rewards</h3>
                  <p className="text-gray-400">Earn annual rewards by staking KLC tokens</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-amber-500/20 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">KYC Compliant</h3>
                  <p className="text-gray-400">Fully regulated with KYC/AML verification</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-amber-500 text-black hover:bg-amber-400 group"
                asChild
              >
                <a href="https://kalypay.com/" target="_blank" rel="noopener noreferrer">
                  Visit KalyPay <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="bg-white/15 border-amber-400 text-amber-100 hover:bg-white/25 hover:text-white"
                asChild
              >
                <a href="https://play.google.com/store/apps/details?id=com.kalyssi.kalypay" target="_blank" rel="noopener noreferrer">
                  Download Android App
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/card.png"
                alt="KalyPay Card"
                width={600}
                height={375}
                className="object-contain rounded-xl shadow-2xl shadow-amber-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 