'use client';

import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { LanguageContext } from 'Com/language';
import { GoPage } from 'Com/sidebar-page-transition';
import useGo from 'Com/go';
import Join from './join';

/**
 * Creates a sidebar
 * @param {{
 *   items: Array,
 *   home: string,
 * }} param0
 */
export default function SidebarComponent({ items, home }) {
    let pathname = usePathname();
    let go = useGo();

    let { lang } = document.documentElement;
    let sliced = pathname.slice(4);

    function stateActive(path, isIcon) {
        let [ pathSegs, slicedSegs ] = [ path.split('/'), sliced.split('/') ];
        
        return (!pathSegs[1] ? !slicedSegs[1]  : slicedSegs[1] == pathSegs[1])
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
                    className={Join(' ', hasLine && 'line', page != undefined && stateActive(path), className)}
                    onClick={() => sliced != path && (action ? action() : GoPage(go, path))}
                >
                    <f-icon icon={name} i-s={page == undefined || keepState ? 'outline' : stateActive(path, true)}/>
                    <span>{text || texts[lang]}</span>
                    {badge && <span className='badge'>{badge[lang]}</span>}
                </li>
            })}
        </ul>
    )
}