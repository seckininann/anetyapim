"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useWhatsApp } from "@/context/WhatsAppContext";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppFloat() {
  const { whatsappUrl } = useWhatsApp();
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingBtn}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366] shadow-lg shadow-green-500/40 hover:scale-110 transition-transform duration-300"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] ping-slow opacity-60" />
        <span className="absolute inset-0 rounded-full bg-[#25d366] ping-slow opacity-40" style={{ animationDelay: "0.75s" }} />

        {/* Icon */}
        <FaWhatsapp className="relative w-7 h-7 text-white z-10" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-gray-700 shadow-xl">
          {t.floatingBtn}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 border-r border-t border-gray-700 rotate-45" />
        </span>
      </a>
    </motion.div>
  );
}
