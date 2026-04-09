'use client';
import { useEffect } from 'react';

export default function GetLang() {
    useEffect(() => {
        let html = document.documentElement;
        let storedLang = localStorage.getItem('language');
        let visited = sessionStorage.getItem('visited') == 'true';
        
        storedLang && html.setAttribute('lang', storedLang);
        !visited && (async () => {
            try {
                let res = await(await fetch('https://ipinfo.io/json')).json();

                let lang = {
                    VN: 'vi', FR: 'fr', IT: 'it', KR: 'kr',
                    JP: 'ja', DE: 'de', NL: 'nl', DK: 'dk',
                    PT: 'pt', ES: 'es', RU: 'ru',
                }[res.country] || 'en';
                
                html.setAttribute('lang', lang);
                
                localStorage.setItem('language', lang);
                sessionStorage.setItem('visited', true);
            }
            catch (err) {
                console.error('IP info error:', err)
            }
        })()
    }, [])
    
    return null;
}