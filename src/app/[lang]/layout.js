import Script from 'next/script';
import { GoogleAdSense } from 'next-google-adsense';
import Loading from 'Com/loading';
import Process from 'Com/process';
import AlternativeLanguages from 'Com/alternative-languages';
import '../globals.css';

export function generateMetadata({ params = { lang: 'en' } }) {
    let { lang } = params;
    let pathname = params.segments ? `/${params.segments.join('/')}` : '';

    return {
        title: {
            default: `${
                {
                    en: 'Foricon - A fully free icon font library',
                    vi: 'Foricon - Thư viện biểu tượng miễn phí',
                    fr: "Foricon - Une bibliothèque de polices d'icônes entièrement gratuite",
                    it: 'Foricon - Una libreria di font di icone completamente gratuita',
                    kr: 'Foricon - 완전 무료 아이콘 폰트 라이브러리',
                    ja: 'Foricon - 完全無料のアイコンフォントライブラリ',
                    de: 'Foricon - Eine komplett kostenlose Symbolschriftbibliothek',
                    nl: 'Foricon - Een volledig gratis iconenlettertypebibliotheek',
                    dk: 'Foricon - Et fuldt gratis bibliotek med ikonfonte',
                    pt: 'Foricon - Uma biblioteca de tipos de letra de ícones totalmente gratuita',
                    es: 'Foricon: una biblioteca de fuentes de iconos totalmente gratuita.',
                    ru: 'Foricon - полностью бесплатная библиотека иконочных шрифтов.',
                }[lang]
            } (Beta 3.0 Preview)`,
            template: '%s | Foricon (Beta 3.0 Preview)'
        },
        description: {
            en: 'Foricon is a free icon font library offering elegant, customizable icons to enhance your UI quickly. Professional quality, friendly design - perfect for every project.',
            vi: 'Foricon là thư viện biểu tượng miễn phí cung cấp các biểu tượng chất lượng, khả năng tùy biến cao để nâng cao chất lượng UI của bạn. Chất lượng chuyên nghiệp, thiết kế thân thiện - hoàn hảo cho mọi dự án.',
            fr: "Foricon est une bibliothèque gratuite de polices d'icônes offrant des icônes élégantes et personnalisables pour améliorer rapidement votre interface utilisateur. Qualité professionnelle, design convivial : idéale pour tous vos projets.",
            it: 'Foricon è una libreria di icone gratuita che offre icone eleganti e personalizzabili per migliorare rapidamente la tua interfaccia utente. Qualità professionale, design intuitivo: perfetta per ogni progetto.',
            kr: 'Foricon은 UI를 빠르게 향상시킬 수 있는 세련되고 맞춤 설정 가능한 아이콘을 제공하는 무료 아이콘 폰트 라이브러리입니다. 전문가 수준의 품질과 사용자 친화적인 디자인으로 모든 프로젝트에 적합합니다.',
            ja: 'Foriconは、UIを素早く強化できる、エレガントでカスタマイズ可能なアイコンを提供する無料のアイコンフォントライブラリです。プロフェッショナルな品質と親しみやすいデザインで、あらゆるプロジェクトに最適です。',
            de: 'Foricon ist eine kostenlose Icon-Font-Bibliothek mit eleganten, anpassbaren Icons zur schnellen Verbesserung Ihrer Benutzeroberfläche. Professionelle Qualität, benutzerfreundliches Design – perfekt für jedes Projekt.',
            nl: 'Foricon is een gratis iconenbibliotheek met elegante, aanpasbare iconen waarmee je je gebruikersinterface snel kunt verbeteren. Professionele kwaliteit, gebruiksvriendelijk ontwerp - perfect voor elk project.',
            dk: 'Foricon er et gratis bibliotek med ikonfonte, der tilbyder elegante, brugerdefinerede ikoner, som hurtigt kan forbedre din brugergrænseflade. Professionel kvalitet, brugervenligt design - perfekt til ethvert projekt.',
            pt: 'Foricon é uma biblioteca gratuita de tipos de letra de ícones que oferece ícones elegantes e personalizáveis ​​para melhorar a sua interface de utilizador rapidamente. Qualidade profissional, design intuitivo — perfeito para qualquer projeto.',
            es: 'Foricon es una biblioteca de iconos gratuita que ofrece iconos elegantes y personalizables para mejorar rápidamente tu interfaz de usuario. Calidad profesional, diseño intuitivo: perfecto para cualquier proyecto.',
            ru: 'Foricon — это бесплатная библиотека иконок и шрифтов, предлагающая элегантные, настраиваемые иконки для быстрого улучшения пользовательского интерфейса. Профессиональное качество, удобный дизайн — идеально подходит для любого проекта.',
        }[lang],
        alternates: AlternativeLanguages(pathname),
    }
}
export default function RootLayout({ children }) {
    return children;
}