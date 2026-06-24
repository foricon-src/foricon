// middleware.js
import { NextResponse } from 'next/server';

const allowedLanguages = [
    'en', 'vi', 'fr', 'it', 'kr', 'ja', 'de', 'nl', 'dk', 'pt', 'es', 'ru'
]

const countryToLang = {
    VN: 'vi', FR: 'fr', IT: 'it', KR: 'kr',
    JP: 'ja', DE: 'de', NL: 'nl', DK: 'dk',
    PT: 'pt', ES: 'es', RU: 'ru',
}

export async function middleware(req) {
    let { pathname } = req.nextUrl;
    let firstSegment = pathname.split('/')[1];

    function setHeader(res, lang) {
        res.headers.set('f-lang', lang);
        return res;
    }

    if (allowedLanguages.includes(firstSegment)) return setHeader(NextResponse.next(), firstSegment);

    let lang = 'en';

    try {
        let ip = req.ip ?? req.headers.get('x-forwarded-for')?.split(',')[0];
        if (ip) {
            let res = await fetch(`https://ipinfo.io/${ip}?token=${process.env.IPINFO_TOKEN}`);
            let data = await res.json();

            let country = data.country;
            let mappedLang = countryToLang[country];

            mappedLang && allowedLanguages.includes(mappedLang) && (lang = mappedLang);
        }
    }
    catch (err) { console.error('ipinfo error:', err) };

    let url = req.nextUrl.clone();
    url.pathname = `/${lang}${pathname}`;
    return setHeader(NextResponse.redirect(url, 308), lang);
}
export const config = {
    // matcher: '/:path*'
    matcher: [ '/((?!_next|api|static|public|favicon.ico).*)' ],
}