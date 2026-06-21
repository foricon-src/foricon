import PageClient from './page.client';

export function generateMetadata({ params: { lang }}) {
    return {
        title: {
            en: 'Personalization',
            vi: 'Cá nhân hóa',
            fr: 'Personnalisation',
            it: 'Personalizzazione',
            kr: '개인화',
            ja: 'パーソナライズ',
            de: 'Personalisierung',
            nl: 'Personalisatie',
            dk: 'Personalisering',
            pt: 'Personalização',
            es: 'Personalización',
            ru: 'Персонализация',
        }[lang]
    }  
}

export default function Page({ params }) {
    return <PageClient lang={params.lang}/>
}