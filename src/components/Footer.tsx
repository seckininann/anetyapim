"use client";

import { Zap } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { useWhatsApp } from "@/context/WhatsAppContext";

const navLinks = [
  { key: "home", href: "#hero" },
  { key: "services", href: "#services" },
  { key: "portfolio", href: "#portfolio" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

export default function Footer() {
  const { t } = useLanguage();
  const { whatsappUrl } = useWhatsApp();
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Pixel<span className="text-blue-400">Craft</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {t.footer.description}
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: FaWhatsapp, href: whatsappUrl, color: "hover:text-green-400" },
                { Icon: FaInstagram, href: "#", color: "hover:text-pink-400" },
                { Icon: FaLinkedin, href: "#", color: "hover:text-blue-400" },
                { Icon: FaTwitter, href: "#", color: "hover:text-sky-400" },
              ].map(({ Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 ${color} transition-colors duration-200`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.links}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2">
              {t.services.items.slice(0, 5).map((item, i) => (
                <li key={i}>
                  <span className="text-gray-400 text-sm">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / WhatsApp */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] hover:bg-[#25d366]/20 transition-colors duration-200 text-sm font-medium mb-4"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp&apos;tan Yazın
            </a>
            <p className="text-gray-500 text-xs leading-relaxed">
              Hafta içi 09:00 - 18:00
              <br />
              Hızlı yanıt garantisi
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {year} PixelCraft Agency. {t.footer.rights}
          </p>
          <p>{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
