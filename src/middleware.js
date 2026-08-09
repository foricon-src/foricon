// middleware.js
import { NextResponse } from 'next/server';

const allowedLanguages = [
    'en', 'vi', 'fr', 'it', 'ko', 'ja', 'de', 'nl', 'dk', 'pt', 'es', 'ru'
]

const countryToLang = {
    VN: 'vi', FR: 'fr', IT: 'it', KR: 'ko',
    JP: 'ja', DE: 'de', NL: 'nl', DK: 'dk',
    PT: 'pt', ES: 'es', RU: 'ru',
}

export async function middleware(req) {
    let { pathname } = req.nextUrl;
    let segments = pathname.split('/');

    function setHeader(res, lang, pathname) {
        res.headers.set('f-lang', lang);
        res.headers.set('f-pathname', pathname);
        return res;
    }

    if (allowedLanguages.includes(segments[1])) return setHeader(NextResponse.next(), segments[1], segments.slice(2).join('/'));

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
    return setHeader(NextResponse.redirect(url), lang, pathname.slice(1));
}
export const config = {
    matcher: [ '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)' ],
}