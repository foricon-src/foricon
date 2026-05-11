import Process from 'Com/process';
import Script from 'next/script';
import { GoogleAdSense } from 'next-google-adsense';
import { LanguageProvider } from 'Com/language';
import './globals.css';
import { ThemeProvider } from 'Com/theme';

export const metadata = {
    title: {
        default: 'Foricon - A fully free icon font library',
        template: '%s | Foricon'
    },
    description: 'Foricon is a free icon font library aimed to provide pure-free assets beautifully made to enhance your UI look within seconds. We also support wide range of icon customization to make our icons perfectly fit into your project!',
    platfrom: 'Vercel (Next.js)',
    icons: { icon: '/foricon-f-fav.png' }
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <link href='//fonts.googleapis.com' rel='preconnect'/>
                <link crossOrigin='' href='//fonts.gstatic.com' rel='preconnect'/>
                <link href='//fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Fira+Code:wght@300..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Kode+Mono:wght@400..700&family=Nova+Mono&family=Sono:wght,MONO@200..800,1&family=Xanh+Mono:ital@0;1' rel='stylesheet'/>
            </head>
            <body>
                <GoogleAdSense client='pub-8532596750508498'/>
                <LanguageProvider>
                    <Script src='/api/import/ud4lP1mhq4XvynG7qUlcsAxi0Q02' strategy='afterInteractive'/>
                    <div id='loading'>
                        <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYgDdhGLSs3mBT3pnVFO51gd7azcbZgGYkc-2az3pyMx1rq6CTlEZDrTjf2tKNC8YZqefBM5xWoUi_st2OOkYdjrzvVlaEf1JV22WE2t8CFDEnSU_dC-ukYMQqg2LY34vwnUjp0nNT9Zi1o0HdtepkzUU4MHnASM25C5V5os-GUDMPCscMM30IcmxKuvw/s1600/loading-b2.gif' alt='Foricon loading logo'/>
                    </div>
                    <div id='toast'/>
                    <ThemeProvider>{
                        children
                    }</ThemeProvider>
                    <Process/>
                </LanguageProvider>
            </body>
        </html>
    );
}
