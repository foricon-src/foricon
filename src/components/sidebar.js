'use client';

import { usePathname } from "next/navigation";
import { GetLang } from "./language";
import { GoPage } from "./sidebar-page-transition";
import { useRouter } from "next/navigation";

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
    let router = useRouter();

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
                    onClick={e => { isActive(e.currentTarget) && (action ? action() : GoPage(router, path)) }}
                >
                    <f-icon icon={name} i-s={page == undefined || keepState ? 'outline' : stateActive(path, true)}/>
                    <span>{text || GetLang(texts)}</span>
                    {badge && <span className='badge'>{GetLang(badge)}</span>}
                </li>
            })}
        </ul>
    )
}