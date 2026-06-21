import { useContext } from 'react';
import { Capital } from 'Com/string-tools';
import useGo from 'Com/go';
import GetFamilyAndStyle from 'Com/get-family-n-style';
import Search from 'Com/search';
import cssStyle from './not-found.module.css';

export function NotFound({ family, style, icon, currentIcon, lang }) {
    let go = useGo();

    function format(family, style) {
        return `${Capital(family)} ${Capital(style)}`;
    }

    return (
        <div className={`center-middle ${cssStyle.wrapper}`}>
            <f-icon icon='face-frown' className='auto-line-height'/>
            <h3>{
                (currentIcon ? {
                    en: 'Style unavailable',
                    vi: 'Kiểu này không khả dụng',
                    fr: 'Style indisponible',
                    it: 'Stile non disponibile',
                    kr: '사용할 수 없는 스타일',
                    ja: 'このスタイルは利用できません',
                    de: 'Stil nicht verfügbar',
                    nl: 'Stijl niet beschikbaar',
                    dk: 'Stilen er ikke tilgængelig',
                    pt: 'Estilo indisponível',
                    es: 'Estilo no disponible',
                    ru: 'Стиль недоступен',
                } : {
                    en: 'Icon not found',
                    vi: 'Không tìm thấy biểu tượng',
                    fr: 'Icône introuvable',
                    it: 'Icona non trovata',
                    kr: '아이콘을 찾을 수 없습니다',
                    ja: 'アイコンが見つかりません',
                    de: 'Symbol nicht gefunden',
                    nl: 'Pictogram niet gevonden',
                    dk: 'Ikonet blev ikke fundet',
                    pt: 'Ícone não encontrado',
                    es: 'Icono no encontrado',
                    ru: 'Значок не найден',
                })[lang]
            }</h3>
            <p dangerouslySetInnerHTML={{
                __html: (currentIcon ? {
                    en: `<b>${icon}</b> is not available in <b>${format(family, style)}</b>`,
                    vi: `<b>${icon}</b> hiện chưa có trong kiểu <b>${format(family, style)}</b>`,
                    fr: `<b>${icon}</b> n'est pas disponible en <b>${format(family, style)}</b>`,
                    it: `<b>${icon}</b> non è disponibile nello stile <b>${format(family, style)}</b>`,
                    kr: `<b>${icon}</b> 아이콘은 <b>${format(family, style)}</b> 스타일로 제공되지 않습니다`,
                    ja: `<b>${icon}</b> は <b>${format(family, style)}</b> スタイルでは利用できません`,
                    de: `<b>${icon}</b> ist im Stil <b>${format(family, style)}</b> nicht verfügbar`,
                    nl: `<b>${icon}</b> is niet beschikbaar in <b>${format(family, style)}</b>`,
                    dk: `<b>${icon}</b> er ikke tilgængelig i <b>${format(family, style)}</b>`,
                    pt: `<b>${icon}</b> não está disponível no estilo <b>${format(family, style)}</b>`,
                    es: `<b>${icon}</b> no está disponible en <b>${format(family, style)}</b>`,
                    ru: `<b>${icon}</b> недоступен в стиле <b>${format(family, style)}</b>`,
                } : {
                    en: `We could not find an icon named <b>${icon}</b>`,
                    vi: `Chúng tôi không tìm thấy biểu tượng nào tên <b>${icon}</b>`,
                    fr: `Nous n'avons trouvé aucune icône nommée <b>${icon}</b>`,
                    it: `Non abbiamo trovato nessuna icona chiamata <b>${icon}</b>`,
                    kr: `<b>${icon}</b>라는 아이콘을 찾을 수 없습니다`,
                    ja: `<b>${icon}</b> という名前のアイコンは見つかりませんでした`,
                    de: `Wir konnten kein Symbol mit dem Namen <b>${icon}</b> finden`,
                    nl: `We konden geen pictogram vinden met de naam <b>${icon}</b>`,
                    dk: `Vi kunne ikke finde et ikon med navnet <b>${icon}</b>`,
                    pt: `Não encontramos nenhum ícone chamado <b>${icon}</b>`,
                    es: `No pudimos encontrar ningún icono llamado <b>${icon}</b>`,
                    ru: `Мы не смогли найти значок с названием <b>${icon}</b>`,
                })[lang]
            }}/>
            {currentIcon && <>
                <p>{
                    {
                        en: 'You can still use it in:',
                        vi: 'Bạn vẫn có thể dùng biểu tượng này với:',
                        fr: "Vous pouvez quand même l'utiliser en :",
                        it: 'Puoi comunque usarla in:',
                        kr: '다음 스타일에서는 계속 사용할 수 있습니다:',
                        ja: '以下のスタイルでは引き続き使用できます:',
                        de: 'Du kannst es weiterhin verwenden in:',
                        nl: 'Je kunt het nog steeds gebruiken in:',
                        dk: 'Du kan stadig bruge det i:',
                        pt: 'Você ainda pode usá-lo em:',
                        es: 'Aún puedes usarlo en:',
                        ru: 'Вы всё ещё можете использовать его в:',
                    }[lang]
                }</p>
                <ul className='btn-list'>{
                    currentIcon?.styles.map(i => {
                        let { f, s } = GetFamilyAndStyle(i);
                        return <li className='tooltip top' key={i} onClick={() => go(`/icon/${f}/${s}/${icon}`)}>
                            <f-icon icon={icon} i-s={i}/>
                            <span>{format(f, s)}</span>
                        </li>
                    })
                }</ul>
            </>}
            <p>{
                (currentIcon ? {
                    en: 'Need something different?',
                    vi: 'Bạn cần một biểu tượng khác?',
                    fr: 'Besoin de quelque chose de différent ?',
                    it: 'Cerchi qualcosa di diverso?',
                    kr: '다른 아이콘이 필요하신가요?',
                    ja: '別のアイコンをお探しですか？',
                    de: 'Suchst du etwas anderes?',
                    nl: 'Op zoek naar iets anders?',
                    dk: 'Leder du efter noget andet?',
                    pt: 'Precisa de algo diferente?',
                    es: '¿Buscas algo diferente?',
                    ru: 'Нужно что-то другое?',
                } : {
                    en: 'Try searching for a similar icon instead:',
                    vi: 'Hãy thử tìm một biểu tượng tương tự:',
                    fr: 'Essayez plutôt de rechercher une icône similaire :',
                    it: 'Prova invece a cercare un’icona simile:',
                    kr: '비슷한 아이콘을 검색해 보세요:',
                    ja: '代わりに似たアイコンを検索してみてください:',
                    de: 'Versuche stattdessen nach einem ähnlichen Symbol zu suchen:',
                    nl: 'Probeer in plaats daarvan naar een vergelijkbaar pictogram te zoeken:',
                    dk: 'Prøv i stedet at søge efter et lignende ikon:',
                    pt: 'Tente procurar um ícone semelhante:',
                    es: 'Prueba a buscar un icono similar:',
                    ru: 'Попробуйте найти похожий значок:',
                })[lang]
            }</p>
            <form action='/search'>
                <Search placeholder={
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
        </div>
    )
}