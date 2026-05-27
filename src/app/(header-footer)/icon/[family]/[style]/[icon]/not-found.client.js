import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { LanguageContext } from 'Com/language';
import { Capital } from 'Com/string-tools';
import cssStyle from './not-found.module.css';

export function NotFound({ family, style, icon, currentIcon }) {
    let router = useRouter();
    let lang = useContext(LanguageContext);

    function format(family, style) {
        return `${Capital(family)} ${Capital(style)}`;
    }

    return (
        <div className={`center-middle ${cssStyle.wrapper}`}>
            <f-icon icon='face-frown' className='auto-line-height'/>
            <h3>{currentIcon ? 'Icon not available' : 'Icon not found'}</h3>
            {
                currentIcon
                    ? <p><b>{icon}</b> icon is not available in <b>{format(family, style)}</b> style</p>
                    : <p>There is no icon named <b>{icon}</b> in our library</p>
            }
            {currentIcon &&
                <>
                    <p>Fortunately, <b>{icon}</b> is available in:</p>
                    <ul className='btn-list'>{
                        currentIcon?.styles.map(i => {
                            let [ a, b ] = i.split('/');
                            let f = b ? a : 'regular';
                            let s = b || a;
                            return <li className='chip top' key={i} onClick={() => go(router, `/icon/${f}/${s}/${icon}`)}>
                                <f-icon icon={icon} i-s={i}/>
                                <span>{format(f, s)}</span>
                            </li>
                        })
                    }</ul>
                </>
            }
            <form action='/search'>
                <label>
                    <f-icon icon='magnifying-glass' i-s='outline'/>
                    <input name='k' placeholder={
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
                </label>
            </form>
        </div>
    )
}