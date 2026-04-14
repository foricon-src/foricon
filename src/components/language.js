"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext(null);
export function Lang({ value, wrapped, children }) {
    let lang = useContext(LanguageContext);
    return lang != value ? null : wrapped ? <span>{children}</span> : children;
}
export function AttrLang(obj) {
    let lang = useContext(LanguageContext);
    return obj[lang];
}
export function LanguageProvider({ children }) {
    const [ language, setLanguage ] = useState(null);
    
    useEffect(() => {(async () => {
        let lang = localStorage.getItem("language");
        
        if (!lang) {
            const res = await fetch("https://ipinfo.io/json");
            const data = await res.json();
            lang = mapCountryToLang(data.country);
            localStorage.setItem("language", lang);
        }
        
        setLanguage(lang);
    })()}, [])
    
    if (!language) return null;
    
    return (
        <LanguageContext.Provider value={language}>
            {children}
        </LanguageContext.Provider>
    )
}