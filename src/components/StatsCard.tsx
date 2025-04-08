'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatsCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatsCard({ value, label, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5"
    >
      <motion.p
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-3xl font-bold"
      >
        {value}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
        className="text-sm text-white/70"
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-24">
      <StatsCard
        value="$1.2B+"
        label="Total Value Locked"
      />
      <StatsCard
        value="12M+"
        label="Transactions"
      />
      <StatsCard
        value="120+"
        label="Global Partners"
      />
    </div>
  );
} 