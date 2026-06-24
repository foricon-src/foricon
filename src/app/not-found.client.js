'use client';

import useGo from 'Com/go';
import Search from 'Com/search';
import cssStyle from './not-found.module.css';

export default function PageClient({ lang }) {
    let go = useGo();

    return (
        <div className={`center-middle ${cssStyle.wrapper}`} id='404'>
            <h1 className='auto-line-height'>404</h1>
            <h3>{
                {
                    en: 'Page not found',
                    vi: 'Trang không tìm thấy',
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
            }</h3>
            <p>{
                {
                    en: "Looks like you've wandered off the map",
                    vi: 'Có vẻ bạn đã lang thang tới vùng đất chưa được vẽ trên bản đồ',
                    fr: 'On dirait que vous vous êtes égaré hors de la carte',
                    it: 'Sembra che tu ti sia perso fuori dalla mappa',
                    kr: '지도를 벗어나 길을 잃으신 것 같네요',
                    ja: 'どうやら地図から外れてしまったようですね',
                    de: 'Sieht so aus, als ob Sie die Karte verlassen hätten',
                    nl: 'Het lijkt erop dat je van de kaart bent verdwenen',
                    dk: 'Det ser ud som om, du er faret vild fra kortet',
                    pt: 'Parece que se perdeu do mapa',
                    es: 'Parece que te has salido del mapa',
                    ru: 'Похоже, вы куда-то исчезли с карты',
                }[lang]
            }</p>
            <p>{
                {
                    en: "Don't worry, you can restart from here:",
                    vi: 'Đừng lo, bạn có thể bắt đầu lại từ đây:',
                    fr: "Ne vous inquiétez pas, vous pouvez recommencer à partir d'ici :",
                    it: 'Non preoccuparti, puoi ricominciare da qui:',
                    kr: '걱정하지 마세요, 여기서부터 다시 시작할 수 있습니다:',
                    ja: 'ご安心ください、ここから再開できます:',
                    de: 'Keine Sorge, Sie können von hier aus neu starten:',
                    nl: 'Geen zorgen, je kunt hier opnieuw beginnen:',
                    dk: 'Bare rolig, du kan genstarte herfra:',
                    pt: 'Não se preocupe, pode reiniciar a partir daqui:',
                    es: 'No te preocupes, puedes reiniciar desde aquí:',
                    ru: 'Не волнуйтесь, вы можете начать заново отсюда:',
                }[lang]
            }</p>
            <div>
                <form action='/search'>
                    <Search name='k' placeholder={
                        {
                            en: 'Search for icons...',
                            vi: 'Tìm kiếm biểu tượng...',
                            fr: 'Rechercher des icônes...',
                            it: 'Cerca icone...',
                            kr: '아이콘을 검색하세요...',
                            ja: 'アイコンを検索...',
                            de: 'Suche nach Symbolen...',
                            nl: 'Zoek naar pictogrammen...',
                            dk: 'Søg efter ikoner...',
                            pt: 'Pesquisar ícones...',
                            es: 'Buscar iconos...',
                            ru: 'Поиск значков...',
                        }[lang]
                    }/>
                </form>
                <hr/>
                <ul className='btn-list vertical darker'>
                    <li onClick={() => go()}>
                        <f-icon icon='house'/>
                        <span>{
                            {
                                en: 'Back to Home',
                                vi: 'Trở về trang chủ',
                                fr: "Retour à l'accueil",
                                it: 'Torna alla home',
                                kr: '홈으로 돌아가기',
                                ja: 'ホームに戻る',
                                de: 'Zurück zur Startseite',
                                nl: 'Terug naar de homepage',
                                dk: 'Tilbage til forsiden',
                                pt: 'Voltar à página inicial',
                                es: 'Volver a la página principal',
                                ru: 'Вернуться на главную',
                            }[lang]
                        }</span>
                    </li>
                    <li onClick={() => go('/docs')}>
                        <f-icon icon='file-lines'/>
                        <span>{
                            {
                                en: 'Explore the Docs',
                                vi: 'Khám phá tài liệu',
                                fr: 'Explorez les documents',
                                it: 'Esplora la documentazione',
                                kr: '문서 살펴보기',
                                ja: 'ドキュメントを探索する',
                                de: 'Dokumente erkunden',
                                nl: 'Verken de documentatie',
                                dk: 'Udforsk Dokumenterne',
                                pt: 'Explore os documentos',
                                es: 'Explorar la documentación',
                                ru: 'Изучите документацию',
                            }[lang]
                        }</span>
                    </li>
                    <li onClick={() => history.back()}>
                        <f-icon icon='arrow-left' i-s='outline'/>
                        <span>{
                            {
                                en: 'Previous page',
                                vi: 'Trang trước',
                                fr: 'Page précédente',
                                it: 'Pagina precedente',
                                kr: '이전 페이지',
                                ja: '前のページ',
                                de: 'Vorherige Seite',
                                nl: 'Vorige pagina',
                                dk: 'Forrige side',
                                pt: 'Página anterior',
                                es: 'Página anterior',
                                ru: 'Предыдущая страница',
                            }[lang]
                        }</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}