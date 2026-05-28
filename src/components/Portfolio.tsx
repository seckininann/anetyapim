"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const projectGradients = [
  "from-blue-600 to-purple-700",
  "from-emerald-500 to-teal-700",
  "from-orange-500 to-red-600",
  "from-pink-500 to-rose-700",
  "from-violet-500 to-indigo-700",
  "from-cyan-500 to-blue-600",
];

const projectPatterns = ["🛍️", "🏢", "📱", "📈", "🎨", "📣"];

export default function Portfolio() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
            {t.portfolio.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.portfolio.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div
                className={`relative h-48 bg-gradient-to-br ${projectGradients[i]} flex items-center justify-center overflow-hidden`}
              >
                <span className="text-6xl">{projectPatterns[i]}</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100" />
                </div>
              </div>

              {/* Info */}
              <div className="p-5 bg-gray-900">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3.5 rounded-xl border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:bg-blue-500/10">
            {t.portfolio.viewAll}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
