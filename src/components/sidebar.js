'use client';

import { usePathname } from "next/navigation";
import { GetLang } from "./language";
import { GoPage } from "./sidebar-page-transition";

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

    function stateActive(path = '', isIcon) {
        return pathname.startsWith(path)
            ? isIcon ? 'solid' : 'active'
            : isIcon ? 'outline' : '';
    }

    return (
        <ul className='btn-list vertical line-active'>
            {...items.map(item => {
                let { page, text, texts, action, hasLine, icon: { name, keepState } } = item;
                let path = `/${home}${page ? `/${page}` : ''}`;
                return <li className={`${hasLine && 'line'} ${page && stateActive(path)}`} onClick={() => action || GoPage(path)}>
                    <f-icon icon={name} i-s={keepState ? 'outline' : stateActive(path, true)}/>
                    <span>{text || GetLang(texts)}</span>
                </li>
            })}
        </ul>
    )
}