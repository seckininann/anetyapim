"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface WhatsAppContextType {
  number: string;
  whatsappUrl: string;
  refresh: () => void;
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(
  undefined
);

const DEFAULT = "905551234567";

export function WhatsAppProvider({ children }: { children: React.ReactNode }) {
  const [number, setNumber] = useState<string>(DEFAULT);

  const fetchNumber = async () => {
    try {
      const res = await fetch("/api/whatsapp", { cache: "no-store" });
      const data = await res.json();
      if (data.number) setNumber(data.number);
    } catch {
      // fallback to default
    }
  };

  useEffect(() => {
    fetchNumber();
  }, []);

  return (
    <WhatsAppContext.Provider
      value={{
        number,
        whatsappUrl: `https://wa.me/${number}`,
        refresh: fetchNumber,
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp() {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) throw new Error("useWhatsApp must be used within WhatsAppProvider");
  return ctx;
}
