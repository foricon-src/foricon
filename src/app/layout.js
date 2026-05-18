import Process from 'Com/process';
import Script from 'next/script';
import { GoogleAdSense } from 'next-google-adsense';
import { LanguageProvider } from 'Com/language';
import './globals.css';
import { ThemeProvider } from 'Com/theme';
import { UserProvider } from 'Com/user';

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
                <UserProvider>
                    <LanguageProvider>
                        <Script src='/api/import/ud4lP1mhq4XvynG7qUlcsAxi0Q02' strategy='afterInteractive'/>
                        <div id='loading'>
                            <div id='loading_shadow'></div>
                            <div id='loading_bounce'>
                                <div id='loading_spin'></div>
                            </div>
                        </div>
                        <div id='toast'/>
                        <ThemeProvider>{
                            children
                        }</ThemeProvider>
                        <Process/>
                    </LanguageProvider>
                </UserProvider>
            </body>
        </html>
    );
}
