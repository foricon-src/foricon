import PageClient from './not-found.client';

export function generateMetadata({ params: { lang } }) {
    return {
        title: `404 - ${
            {
                en: 'Page not found',
                vi: 'Không tìm thấy trang',
                fr: 'Page introuvable',
                it: 'Pagina non trovata',
                kr: '페이지를 찾을 수 없습니다',
                ja: 'ページが見つかりません',
                de: 'Seite nicht gefunden',
                nl: 'Pagina niet gevonden',
                dk: 'Siden blev ikke fundet',
                pt: 'Página não encontrada',
                es: 'Página no encontrada',
                ru: 'Страница не найдена',
            }[lang]
        }`,
        robots: { index: false, follow: false },
    }
}
export default function Page({ params }) {
    return <PageClient lang={params.lang}/>;
}