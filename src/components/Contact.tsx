"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { useWhatsApp } from "@/context/WhatsAppContext";

export default function Contact() {
  const { t } = useLanguage();
  const { whatsappUrl } = useWhatsApp();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-green-500/10 border border-green-500/20 text-green-400 mb-4">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: WhatsApp CTA + info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* WhatsApp main CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/10 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#25d366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                <FaWhatsapp className="w-9 h-9 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white mb-1">
                  {t.contact.whatsappBtn}
                </div>
                <div className="text-gray-400 text-sm">{t.contact.whatsappDesc}</div>
              </div>
            </a>

            {/* Info cards */}
            {[
              { emoji: "⚡", title: "Hızlı Yanıt", desc: "Ortalama 15 dakika içinde yanıt veriyoruz" },
              { emoji: "🆓", title: "Ücretsiz Danışmanlık", desc: "İlk görüşme tamamen ücretsiz" },
              { emoji: "🔒", title: "Gizlilik Garantisi", desc: "Bilgileriniz 3. taraflarla paylaşılmaz" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gray-900/50 border border-gray-800"
              >
                <div className="text-3xl">{item.emoji}</div>
                <div>
                  <div className="text-white font-semibold">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Ahmet Yılmaz"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="ahmet@sirket.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="+90 555 123 45 67"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  {t.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  {t.contact.form.success}
                </div>
              )}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {t.contact.form.error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.form.submit}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
