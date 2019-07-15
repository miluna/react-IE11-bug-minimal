import React, { useState, useEffect } from 'react';

export const LanguageContext = React.createContext({
  language: "",
  updateLanguage: (lang) => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLang] = useState("");
  const updateLanguage = (lang) => setLang(lang);


  return (
    <LanguageContext.Provider value={{ language: () => language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
