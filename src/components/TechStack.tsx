"use client";

import { motion } from "framer-motion";

const row1 = [
  { name: "Next.js", color: "text-white" },
  { name: "React", color: "text-cyan-400" },
  { name: "TypeScript", color: "text-blue-400" },
  { name: "Tailwind CSS", color: "text-teal-400" },
  { name: "Three.js", color: "text-green-400" },
  { name: "Framer Motion", color: "text-purple-400" },
  { name: "GraphQL", color: "text-pink-400" },
  { name: "WebSocket", color: "text-yellow-400" },
  { name: "Next.js", color: "text-white" },
  { name: "React", color: "text-cyan-400" },
  { name: "TypeScript", color: "text-blue-400" },
  { name: "Tailwind CSS", color: "text-teal-400" },
  { name: "Three.js", color: "text-green-400" },
  { name: "Framer Motion", color: "text-purple-400" },
  { name: "GraphQL", color: "text-pink-400" },
  { name: "WebSocket", color: "text-yellow-400" },
];

const row2 = [
  { name: "Node.js", color: "text-green-400" },
  { name: "Python", color: "text-yellow-300" },
  { name: "Rust", color: "text-orange-400" },
  { name: "Go", color: "text-cyan-300" },
  { name: "PostgreSQL", color: "text-blue-300" },
  { name: "Redis", color: "text-red-400" },
  { name: "Docker", color: "text-blue-400" },
  { name: "Kubernetes", color: "text-blue-500" },
  { name: "Node.js", color: "text-green-400" },
  { name: "Python", color: "text-yellow-300" },
  { name: "Rust", color: "text-orange-400" },
  { name: "Go", color: "text-cyan-300" },
  { name: "PostgreSQL", color: "text-blue-300" },
  { name: "Redis", color: "text-red-400" },
  { name: "Docker", color: "text-blue-400" },
  { name: "Kubernetes", color: "text-blue-500" },
];

const row3 = [
  { name: "TensorFlow", color: "text-orange-400" },
  { name: "Web3.js", color: "text-orange-300" },
  { name: "Solidity", color: "text-gray-300" },
  { name: "MQTT", color: "text-purple-300" },
  { name: "AWS", color: "text-yellow-400" },
  { name: "Ethereum", color: "text-indigo-400" },
  { name: "InfluxDB", color: "text-pink-400" },
  { name: "GPT-4", color: "text-green-300" },
  { name: "TensorFlow", color: "text-orange-400" },
  { name: "Web3.js", color: "text-orange-300" },
  { name: "Solidity", color: "text-gray-300" },
  { name: "MQTT", color: "text-purple-300" },
  { name: "AWS", color: "text-yellow-400" },
  { name: "Ethereum", color: "text-indigo-400" },
  { name: "InfluxDB", color: "text-pink-400" },
  { name: "GPT-4", color: "text-green-300" },
];

function MarqueeRow({ items, reverse = false }: { items: { name: string; color: string }[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden py-1.5">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: reverse ? ["0%", "50%"] : ["-50%", "0%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-sm font-medium whitespace-nowrap ${item.color}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
            {item.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-16 overflow-hidden border-y border-gray-800/50 bg-gray-900/10">
      <div className="text-center mb-8">
        <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
          40+ Teknoloji — Hiçbir Sistem Çok Karmaşık Değil
        </span>
      </div>
      <div className="space-y-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
        <MarqueeRow items={row3} />
      </div>
    </section>
  );
}
