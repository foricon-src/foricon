import Script from 'next/script';
import { GoogleAdSense } from 'next-google-adsense';
import Loading from 'Com/loading';
import Process from 'Com/process';
import Providers from './providers';
import './globals.css';

export const metadata = {
    title: {
        default: 'Foricon - A fully free icon font library (Beta 3.0 Preview)',
        template: '%s | Foricon (Beta 3.0 Preview)'
    },
    description: 'Foricon is a free icon font library aimed to provide pure-free assets beautifully made to enhance your UI look within seconds. We also support wide range of icon customization to make our icons perfectly fit into your project!',
    platfrom: 'Vercel (Next.js)',
    icons: { icon: '/foricon-f-fav.png' }
}

export default function RootLayout({ children }) {
    return (
        <html>
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
