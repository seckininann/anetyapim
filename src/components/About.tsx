"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { useWhatsApp } from "@/context/WhatsAppContext";

export default function About() {
  const { t } = useLanguage();
  const { whatsappUrl } = useWhatsApp();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-2xl bg-[#0f1017] border border-white/5 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

              {/* Stats inside card */}
              <div className="relative grid grid-cols-2 gap-6">
                {[
                  { value: "250+", label: "Kompleks Proje", emoji: "🚀" },
                  { value: "40+", label: "Teknoloji", emoji: "⚡" },
                  { value: "10+", label: "Yıl Deneyim", emoji: "💼" },
                  { value: "24/7", label: "Teknik Destek", emoji: "🛡️" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#08080f] rounded-xl p-5 border border-white/5"
                  >
                    <div className="text-3xl mb-1">{stat.emoji}</div>
                    <div className="text-3xl font-extrabold text-white">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Floating badge */}
              <div className="mt-6 flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <span className="text-xl">🔒</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    NDA Korumalı — Enterprise Grade
                  </div>
                  <div className="text-gray-400 text-xs">
                    Her projede tam gizlilik garantisi
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-4">
              {t.about.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {t.about.title}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-4 leading-relaxed">
              {t.about.subtitle}
            </p>
            <p className="text-gray-500 text-sm sm:text-base mb-8 leading-relaxed">
              {t.about.description}
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-10">
              {t.about.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 text-gray-300 text-sm sm:text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#1fb855] text-white font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105"
            >
              <FaWhatsapp className="w-5 h-5" />
              {t.about.ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
