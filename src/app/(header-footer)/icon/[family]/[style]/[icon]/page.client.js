'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { IconContext } from 'Com/icons';
import Code from 'Com/code';
import { NotFound } from './not-found.client';
import cssStyle from './page.module.css';

export default function PageClient({ params }) {
    let { family, style, icon } = JSON.parse(params.value);
    let styleName = [ family == 'duotone' && family, style ].filter(Boolean).join('/');

    let router = useRouter();
    let icons = useContext(IconContext);
    let currentIcon = icons.find(i => i.name == icon);

    return currentIcon ? (
        <div className={cssStyle.main}>
            <h3>{icon}</h3>
            <div>
                <f-icon icon={icon} i-s={styleName}/>
            </div>
            <ul className='btn-list'>
                {currentIcon.styles.includes('solid') && <li onClick={() => go(router, `icon/regular/solid/${icon}`)}>
                    <f-icon icon={icon}/>
                </li>}
                {currentIcon.styles.includes('outline') && <li onClick={() => go(router, `icon/regular/outline/${icon}`)}>
                    <f-icon icon={icon} i-s='outline'/>
                </li>}
                {currentIcon.styles.includes('duotone-solid') && <li onClick={() => go(router, `icon/duotone/solid/${icon}`)}>
                    <f-icon icon={icon} i-s='duotone/solid'/>
                </li>}
                {currentIcon.styles.includes('duotone-outline') && <li onClick={() => go(router, `icon/duotone/outline/${icon}`)}>
                    <f-icon icon={icon} i-s='duotone/outline'/>
                </li>}
            </ul>
            <Code>{`<f-icon icon='${icon}' i-s='${styleName}'></f-icon>`}</Code>
        </div>
    ) : <NotFound family={family} style={style} icon={icon}/>;
}