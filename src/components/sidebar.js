'use client';

import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { LanguageContext } from 'Com/language';
import { GoPage } from 'Com/sidebar-page-transition';
import useGo from 'Com/go';

/**
 * Creates a sidebar
 * @param {{
 *   items: Array,
 *   home: string,
 * }} param0 
 * @returns
 */
export default function SidebarComponent({ items, home }) {
    let pathname = usePathname();
    let lang = useContext(LanguageContext);
    let go = useGo();

    function stateActive(path, isIcon) {
        return pathname.split('/')[2] == path.split('/')[1]
            ? isIcon ? 'solid' : 'active'
            : isIcon ? 'outline' : '';
    }

    return (
        <ul className='btn-list vertical line-active'>
            {items.map(item => {
                let { page, text, texts, action, hasLine, icon: { name, keepState }, badge, className } = item;
                let path = `${home}${page ? `/${page}` : ''}`;
                return <li
                    key={page}
                    className={[ hasLine && 'line', page != undefined && stateActive(path), className ].filter(Boolean).join(' ')}
                    onClick={e => { console.log(action); !isActive(e.currentTarget) && (action ? action() : GoPage(go, path)) }}
                >
                    <f-icon icon={name} i-s={page == undefined || keepState ? 'outline' : stateActive(path, true)}/>
                    <span>{text || texts[lang]}</span>
                    {badge && <span className='badge'>{badge[lang]}</span>}
                </li>
            })}
        </ul>
    )
}