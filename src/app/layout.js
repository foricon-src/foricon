import Script from 'next/script';
import { GoogleAdSense } from 'next-google-adsense';
import Loading from 'Com/loading';
import Process from 'Com/process';
import AlternativeLanguages from 'Com/alternative-languages';
import Providers from './providers';
import './globals.css';

export function generateMetadata({ params = { lang: 'en' } }) {
    let { lang } = params;
    let pathname = params.segments ? `/${params.segments.join('/')}` : '';

    return {
        title: 'Foricon - A fully free icon font library',
        description: 'Foricon is a free icon font library offering elegant, customizable icons to enhance your UI quickly. Professional quality, friendly design - perfect for every project.',
        platfrom: 'Vercel (Next.js)',
        icons: { icon: '/foricon-f-fav.png' },
        alternates: AlternativeLanguages('/'),
    }
}
export default function RootLayout({ children, params }) {
    return (
        <html lang={params.lang}>
            <head>
                <link href='//fonts.googleapis.com' rel='preconnect'/>
                <link crossOrigin='' href='//fonts.gstatic.com' rel='preconnect'/>
                <link href='//fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Fira+Code:wght@300..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Kode+Mono:wght@400..700&family=Nova+Mono&family=Sono:wght,MONO@200..800,1&family=Xanh+Mono:ital@0;1' rel='stylesheet'/>
            </head>
            <body className='cons'>
                <GoogleAdSense client='pub-8532596750508498'/>
                <Providers>
                    <Script src='/api/import/ud4lP1mhq4XvynG7qUlcsAxi0Q02' strategy='afterInteractive'/>
                    <Loading/>
                    <div id='toast'/>
                    {children}
                    <Process/>
                </Providers>
            </body>
        </html>
    )
}