"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { dbFirestore } from "./firebase";

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
            let { country, ip } = await(await fetch("https://ipinfo.io/json")).json();

            lang = {
                VN: 'vi', FR: 'fr', IT: 'it', KR: 'kr',
                JP: 'ja', DE: 'de', NL: 'nl', DK: 'dk',
                PT: 'pt', ES: 'es', RU: 'ru',
            }[country] || 'en';

            localStorage.setItem('language', lang);
            localStorage.setItem('country', country);
                
            if (!['14.187', '113.23', '27.2', '118.69'].some(i => ip.startsWith(i))) {
                let { userAgent } = navigator;
                let browserName =
                    userAgent.indexOf('OPR') + 1 ? 'Opera' :
                    userAgent.indexOf('Edg') + 1 ? 'Microsoft Edge' :
                    userAgent.indexOf('MSIE') + 1 ? 'Microsoft Internet Explorer' :
                    userAgent.indexOf('Chrome') + 1 ? 'Chrome' :
                    userAgent.indexOf('Safari') + 1 ? 'Safari' :
                    userAgent.indexOf('Firefox') + 1 ? 'Firefox' : 'Other';
                
                let today = getUTC();
                let stats = (await getDoc(doc(dbFirestore, 'statistics', 'item'))).data();
                stats.visits[today] ||= {
                    browsers: {},
                    countries: {},
                }
                
                function update(obj, key) {
                    obj[key] = (obj[key] || 0) + 1;
                }
                let { browsers, countries } = stats.visits[today];
                update(browsers, browserName);
                update(countries, res.country);
                
                await setDoc(doc(dbFirestore, 'statistics', 'item'), stats);
            }
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