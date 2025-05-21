import React, { createContext, useContext, useState } from "react";
import { translations } from "../locales/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("pt");
  const t = (path) => {
    return path.split(".").reduce(
      (obj, key) => (obj && obj[key] != null ? obj[key] : path),
      translations[lang]
    );
  };
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}