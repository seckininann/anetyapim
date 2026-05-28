"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  TrendingUp,
  Brain,
  Radio,
  Hexagon,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Globe, TrendingUp, Brain, Radio, Hexagon, Server, ShieldCheck, Smartphone];

const cardColors = [
  "from-blue-500/20 to-blue-600/5 hover:from-blue-500/30",
  "from-yellow-500/20 to-yellow-600/5 hover:from-yellow-500/30",
  "from-purple-500/20 to-purple-600/5 hover:from-purple-500/30",
  "from-cyan-500/20 to-cyan-600/5 hover:from-cyan-500/30",
  "from-orange-500/20 to-orange-600/5 hover:from-orange-500/30",
  "from-emerald-500/20 to-emerald-600/5 hover:from-emerald-500/30",
  "from-red-500/20 to-red-600/5 hover:from-red-500/30",
  "from-pink-500/20 to-pink-600/5 hover:from-pink-500/30",
];

const iconColors = [
  "text-blue-400",
  "text-yellow-400",
  "text-purple-400",
  "text-cyan-400",
  "text-orange-400",
  "text-emerald-400",
  "text-red-400",
  "text-pink-400",
];

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${cardColors[i]} border border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-default`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gray-900/80 flex items-center justify-center mb-5 ${iconColors[i]} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
