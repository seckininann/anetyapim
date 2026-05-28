"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Phone, CheckCircle2, AlertCircle, LogOut, Zap, Eye, EyeOff } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [currentNumber, setCurrentNumber] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [updateStatus, setUpdateStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [updateMessage, setUpdateMessage] = useState("");

  useEffect(() => {
    if (loggedIn) {
      fetch("/api/whatsapp")
        .then((r) => r.json())
        .then((d) => setCurrentNumber(d.number || ""));
    }
  }, [loggedIn]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    await new Promise((r) => setTimeout(r, 600));

    const res = await fetch("/api/whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number: "000", password }),
    });

    if (res.status === 400) {
      setLoggedIn(true);
    } else if (res.status === 401) {
      setLoginError("Hatalı şifre. Tekrar deneyin.");
    } else {
      setLoggedIn(true);
    }
    setLoginLoading(false);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdateStatus("loading");
    setUpdateMessage("");

    try {
      const res = await fetch("/api/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number: newNumber, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setUpdateStatus("success");
        setUpdateMessage(`Numara başarıyla güncellendi: ${data.number}`);
        setCurrentNumber(data.number);
        setNewNumber("");
      } else {
        setUpdateStatus("error");
        setUpdateMessage(data.error || "Bir hata oluştu.");
      }
    } catch {
      setUpdateStatus("error");
      setUpdateMessage("Sunucu hatası. Lütfen tekrar deneyin.");
    }

    setTimeout(() => setUpdateStatus("idle"), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4 py-12">
      <AnimatePresence mode="wait">
        {!loggedIn ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md"
          >
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Pixel<span className="text-blue-400">Craft</span>
              </span>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-7 h-7 text-blue-400" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Admin Paneli</h1>
                <p className="text-gray-400 text-sm">
                  WhatsApp numarasını yönetmek için giriş yapın
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Şifre
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 pr-12 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Admin şifrenizi girin"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {loginError && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold transition-all duration-300"
                >
                  {loginLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Lock className="w-5 h-5" />
                  )}
                  Giriş Yap
                </button>
              </form>

              <p className="text-center text-gray-600 text-xs mt-6">
                Şifreyi unuttuysanız, .env dosyasındaki ADMIN_PASSWORD değerine bakın.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  Pixel<span className="text-blue-400">Craft</span>{" "}
                  <span className="text-gray-500 font-normal text-sm">Admin</span>
                </span>
              </div>
              <button
                onClick={() => { setLoggedIn(false); setPassword(""); }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-sm"
              >
                <LogOut className="w-4 h-4" />
                Çıkış
              </button>
            </div>

            {/* Current number */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <FaWhatsapp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                    Mevcut WhatsApp Numarası
                  </p>
                  <p className="text-xl font-bold text-white">
                    {currentNumber ? `+${currentNumber}` : "Yükleniyor..."}
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${currentNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                wa.me/{currentNumber} — Test et
              </a>
            </div>

            {/* Update form */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-1">
                Numarayı Güncelle
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Ülke kodu dahil, sadece rakam girin. Örn: <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded text-xs">905551234567</code>
              </p>

              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Yeni WhatsApp Numarası
                  </label>
                  <input
                    type="text"
                    value={newNumber}
                    onChange={(e) => setNewNumber(e.target.value.replace(/\D/g, ""))}
                    required
                    maxLength={15}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors font-mono text-lg tracking-wider"
                    placeholder="905551234567"
                  />
                  <p className="text-gray-600 text-xs mt-1.5">
                    {newNumber.length}/15 karakter
                    {newNumber && (
                      <span className="ml-2 text-gray-400">
                        → wa.me/{newNumber}
                      </span>
                    )}
                  </p>
                </div>

                {updateStatus === "success" && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    {updateMessage}
                  </div>
                )}
                {updateStatus === "error" && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {updateMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={updateStatus === "loading" || !newNumber}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#1fb855] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold transition-all duration-300"
                >
                  {updateStatus === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Güncelleniyor...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="w-5 h-5" />
                      Numarayı Kaydet
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info */}
            <p className="text-center text-gray-600 text-xs mt-6">
              Değişiklikler anında tüm site genelinde geçerli olur.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
