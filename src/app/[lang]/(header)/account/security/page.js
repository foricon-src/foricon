import PageClient from './page.client';

export function generateMetadata({ params: { lang }}) {
    return {
        title: {
            en: 'Security',
            vi: 'Bảo mật',
            fr: 'Sécurité',
            it: 'Sicurezza',
            ko: '보안',
            ja: 'セキュリティ',
            de: 'Sicherheit',
            nl: 'Beveiliging',
            da: 'Sikkerhed',
            pt: 'Segurança',
            es: 'Seguridad',
            ru: 'Безопасность',
        }[lang]
    }
}
export default function Page() {
    return <PageClient/>
}