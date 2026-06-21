"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { dbFirestore } from "./firebase";
import { usePathname } from "next/navigation";

export const LanguageContext = createContext(null);
export function LanguageProvider({ children }) {
    let [ lang, setLanguage ] = useState(null);
    let pathname = usePathname();
    
    useEffect(() => {(async () => {
        let language = pathname.split('/')[1];
        document.documentElement.lang = language;
        setLanguage(language);
    })()}, [])
    
    if (!lang) return null;
    
    return (
        <LanguageContext.Provider value={lang}>{
            children
        }</LanguageContext.Provider>
    )
}