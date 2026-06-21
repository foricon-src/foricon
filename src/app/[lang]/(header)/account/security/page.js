import PageClient from './page.client';

export function generateMetadata({ params: { lang }}) {
    return {
        title: {
            en: 'Security',
            vi: 'Bảo mật',
            fr: 'Sécurité',
            it: 'Sicurezza',
            kr: '보안',
            ja: 'セキュリティ',
            de: 'Sicherheit',
            nl: 'Beveiliging',
            dk: 'Sikkerhed',
            pt: 'Segurança',
            es: 'Seguridad',
            ru: 'Безопасность',
        }[lang]
    }
}
export default function Page({ params }) {
    return <PageClient lang={params.lang}/>
}