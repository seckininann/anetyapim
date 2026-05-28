"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const categoryColors: Record<string, string> = {
  Fintech: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  "AI/ML": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  IoT: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Web3: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  Enterprise: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "Güvenlik": "bg-red-500/10 text-red-400 border-red-500/30",
  Security: "bg-red-500/10 text-red-400 border-red-500/30",
};

const cardGradients = [
  "from-yellow-500/10 to-yellow-600/5",
  "from-purple-500/10 to-purple-600/5",
  "from-cyan-500/10 to-cyan-600/5",
  "from-orange-500/10 to-orange-600/5",
  "from-blue-500/10 to-blue-600/5",
  "from-red-500/10 to-red-600/5",
  "from-cyan-500/10 to-blue-500/5",
  "from-orange-500/10 to-pink-500/5",
];

type Project = {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  detail: string;
};

export default function Portfolio() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState(t.portfolio.filters[0]);
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = t.portfolio.projects as Project[];
  const filtered =
    activeFilter === t.portfolio.filters[0]
      ? projects
      : projects.filter((p) => p.category === activeFilter);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
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

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {t.portfolio.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setShowAll(false); }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeFilter === filter
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className={`relative rounded-2xl bg-gradient-to-br ${cardGradients[i % 8]} border border-gray-800 hover:border-gray-600 p-6 group transition-all duration-300 hover:shadow-xl hover:shadow-black/30 cursor-pointer`}
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${categoryColors[project.category] || "bg-gray-800 text-gray-400 border-gray-700"}`}>
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs bg-gray-900/80 text-gray-500 border border-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 -rotate-90" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all / less */}
        {filtered.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 hover:border-purple-500 text-gray-300 hover:text-purple-400 font-medium transition-all duration-300 hover:bg-purple-500/10"
            >
              {showAll ? t.portfolio.viewLess : t.portfolio.viewAll}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${categoryColors[selectedProject.category] || "bg-gray-800 text-gray-400 border-gray-700"}`}>
                {selectedProject.category}
              </span>

              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {selectedProject.desc}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                {selectedProject.detail}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
