import PageClient from './page.client';

export function generateMetadata({ params: { lang }}) {
    return {
        title: {
            en: 'Info',
            vi: 'Thông tin',
            fr: 'Infos',
            it: 'Info',
            kr: '정보',
            ja: '情報',
            de: 'Info',
            nl: 'Info',
            dk: 'Info',
            pt: 'Informações',
            es: 'Información',
            ru: 'Инфо',
        }[lang]
    }   
}

export default function Page({ params }) {
    return <PageClient lang={params.lang}/>
}