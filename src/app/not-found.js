import { useContext } from 'react';
import cssStyle from './not-found.module.css';
import { LanguageContext } from 'Com/language';

export default function Page() {
    let lang = 'en';

    return (
        <div className={cssStyle.main}>
            <h1>404</h1>
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
                    en: 'What about:',
                    vi: 'Có vẻ bạn đã lang thang tới vùng đất chưa được vẽ trên bản đồ',
                    fr: "Qu'en est-il de :",
                    it: 'Che ne dici di:',
                    kr: '은 어떻게 되느냐:',
                    ja: 'では、次のことはどうでしょうか？',
                    de: 'Was ist mit:',
                    nl: 'Wat vind je van:',
                    dk: 'Hvad med:',
                    pt: 'Que tal:',
                    es: '¿Qué tal si...?',
                    ru: 'А как насчет:',
                }[lang]
            }</p>
            <ul className='btn-list vetical'>
                <li>
                    <f-icon icon='home'/>
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
                <li>
                    <f-icon icon='magnifying-class' i-s='outline'/>
                    <span>{
                        {
                            en: 'Take a look at our icon set',
                            vi: 'Ngó qua bộ biểu tượng của chúng tôi',
                            fr: "Jetez un œil à notre ensemble d'icônes",
                            it: "Dai un'occhiata al nostro set di icone",
                            kr: '저희 아이콘 세트를 살펴보세요',
                            ja: 'アイコンセットをご覧ください',
                            de: 'Werfen Sie einen Blick auf unser Icon-Set',
                            nl: 'Bekijk onze iconenset',
                            dk: 'Tag et kig på vores ikonsæt',
                            pt: 'Conheça o nosso conjunto de ícones',
                            es: 'Echa un vistazo a nuestro conjunto de iconos',
                            ru: 'Взгляните на наш набор иконок',
                        }[lang]
                    }</span>
                </li>
                <li>
                    <f-icon icon='file-lines'/>
                    <span>{
                        {
                            en: 'Learn something new',
                            vi: 'Học cái gì đó mới',
                            fr: 'Apprendre quelque chose de nouveau',
                            it: 'Impara qualcosa di nuovo',
                            kr: '새로운 것을 배우세요',
                            ja: '何か新しいことを学ぶ',
                            de: 'Lerne etwas Neues',
                            nl: 'Leer iets nieuws',
                            dk: 'Lær noget nyt',
                            pt: 'Aprenda algo novo',
                            es: 'Aprende algo nuevo',
                            ru: 'Узнать что-то новое',
                        }[lang]
                    }</span>
                </li>
            </ul>
        </div>
    )
}