"use client";

import React, { createContext, useContext, useState } from "react";
import tr from "@/locales/tr";
import en from "@/locales/en";

type Language = "tr" | "en";
type Translations = typeof tr;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("tr");

  const t = lang === "tr" ? tr : en;

  const toggleLang = () => {
    setLang((prev) => (prev === "tr" ? "en" : "tr"));
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
