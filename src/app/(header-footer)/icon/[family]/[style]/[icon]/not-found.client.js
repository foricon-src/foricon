import { useContext } from 'react';
import { LanguageContext } from 'Com/language';
import cssStyle from './not-found.module.css';

export function NotFound({ icon, styleName, iconExist, styleExist }) {
    let lang = useContext(LanguageContext);

    return (
        <div className={`center-middle ${cssStyle.wrapper}`}>
            <f-icon icon='face-frown' className='auto-line-height'/>
            <h3>{styleExist ? 'Icon not available' : 'Icon not found'}</h3>
            {
                !styleExist
                    ? <p><b>{icon}</b> icon is not available in <b>{styleName}</b></p>
                    : <p>There is no icon named <b>{icon}</b> in our library so far</p>
            }
            <form action='/search'>
                <label onFocus={e => e.currentTarget.style.width = '400px'}>
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