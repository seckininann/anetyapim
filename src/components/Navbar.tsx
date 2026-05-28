"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { useWhatsApp } from "@/context/WhatsAppContext";

const navLinks = [
  { key: "home", href: "#hero" },
  { key: "services", href: "#services" },
  { key: "portfolio", href: "#portfolio" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const { whatsappUrl } = useWhatsApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#08080f]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center glow-amber">
                <Zap className="w-4 h-4 text-black" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Anet<span className="text-amber-400">Yapım</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right side: lang toggle + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-700 text-gray-300 hover:border-amber-500 hover:text-amber-400 transition-all duration-200"
              >
                {lang === "tr" ? "EN" : "TR"}
              </button>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-amber-500/30 hover:scale-105"
              >
                <FaWhatsapp className="w-4 h-4" />
                {t.nav.contactBtn}
              </a>
            </div>

            {/* Mobile: lang + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleLang}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-gray-700 text-gray-300"
              >
                {lang === "tr" ? "EN" : "TR"}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                aria-label="Menüyü aç"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-72 bg-gray-900 border-l border-gray-800 flex flex-col pt-20 px-6 pb-8">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="py-4 px-4 text-gray-200 hover:text-white hover:bg-gray-800 rounded-xl font-medium transition-colors duration-200 text-lg"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-800">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25d366] hover:bg-[#1fb855] text-white font-bold text-lg transition-colors duration-200"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  {t.nav.contactBtn}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
