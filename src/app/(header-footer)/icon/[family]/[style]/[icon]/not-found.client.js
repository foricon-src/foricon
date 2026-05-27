import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { LanguageContext } from 'Com/language';
import { Capital } from 'Com/string-tools';
import cssStyle from './not-found.module.css';

export function NotFound({ iconName, family, style, styleExist, icon }) {
    let router = useRouter();
    let lang = useContext(LanguageContext);
    let styleName = `${Capital(family)} ${Capital(style)}`;

    return (
        <div className={`center-middle ${cssStyle.wrapper}`}>
            <f-icon icon='face-frown' className='auto-line-height'/>
            <h3>{styleExist ? 'Icon not available' : 'Icon not found'}</h3>
            {
                !styleExist
                    ? <p><b>{iconName}</b> icon is not available in <b>{styleName}</b> style</p>
                    : <p>There is no icon named <b>{iconName}</b> in our library so far</p>
            }
            {!styleExist &&
                <>
                    <p>Fortunately, <b>{iconName}</b> is available in:</p>
                    <ul className='btn-list'>{
                        icon?.styles.map(i => {
                            let [ a, b ] = i.split('/');
                            let f = b ? a : 'regular';
                            let s = b || a;
                            return <li key={i} onClick={() => go(router, `/icon/${f}/${s}/${iconName}`)}>
                                <f-icon icon={iconName} i-s={i}/>
                                <span>{i}</span>
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