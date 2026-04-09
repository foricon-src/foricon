"use client";
import { useEffect } from "react";

export default function getLang() {
	useEffect(() => {
		// Check if we already have a language stored in localStorage
		const storedLang = localStorage.getItem("preferredLang");
		
		if (storedLang) {
			// Apply stored language immediately
			document.documentElement.setAttribute("lang", storedLang);
		}
		
		// Check if we've already fetched IP info this session
		const fetchedThisSession = sessionStorage.getItem("ipinfoFetched");
		
		if (!fetchedThisSession) {
			fetch("https://ipinfo.io/json")
			.then(res => res.json())
			.then(data => {
				const country = data.country?.toLowerCase();
				const countryLangMap = {
					vn: "vi",
					fr: "fr",
					de: "de",
					jp: "ja",
					us: "en",
				};
				const lang = countryLangMap[country] || "en";
				
				// Apply detected language
				document.documentElement.setAttribute("lang", lang);
				
				// Store in localStorage for future visits
				localStorage.setItem("preferredLang", lang);
				
				// Mark that we've fetched IP info this session
				sessionStorage.setItem("ipinfoFetched", "true");
			})
			.catch(err => console.error("IP info error:", err));
		}
	}, []);
	
	return null;
}