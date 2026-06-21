import PageClient from './page.client';

export function generateMetadata({ params: { lang }}) {
    return {
        title: {
            en: 'Download',
            vi: 'Tải xuống',
            fr: 'Télécharger',
            it: 'Scaricamento',
            kr: '다운로드',
            ja: 'ダウンロード',
            de: 'Herunterladen',
            nl: 'Download',
            dk: 'Download',
            pt: 'Transferir',
            es: 'Descargar',
            ru: 'Скачать',
        }[lang]
    }   
}

export default function Page({ params }) {
    return <PageClient lang={params.lang}/>
}