'use client';

import { useContext, useMemo } from 'react';
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
    let currentIcon = useMemo(() => icons?.b2.find(i => i.name == icon), [ icons, icon ]);
    
    return currentIcon && currentIcon.styles.includes(styleName) ? (
        <div className={cssStyle.main}>
            <h3>{icon}</h3>
            <div>
                <div className={`center-middle ${cssStyle.iconView}`}>
                    <f-icon icon={icon} i-s={styleName} className='auto-line-height'/>
                </div>
                <div>
                    <ul className='btn-list darker'>
                        {
                            currentIcon.styles.map(i => {
                                let [ a, b ] = i.split('/');
                                let f = b ? a : '';
                                let f2 = f || 'regular';
                                let s = b || a;

                                return <li
                                    key={i}
                                    className={family == f2 && style == s && 'active'}
                                    onClick={() => go(router, `icon/${f2}/${s}/${icon}`)}
                                >
                                    <f-icon icon={icon} i-s={(f ? `${f}/` : '') + s} className='auto-line-height'/>
                                </li>
                            })
                        }
                    </ul>
                    <Code>{`<f-icon icon='${icon}' i-s='${styleName}'></f-icon>`}</Code>
                    <ul className='btn-list'>{
                        [ 'SVG', 'PNG', 'WebP' ].map(i =>
                            <li key={i}>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline' className='auto-line-height'/>
                                <span>{i}</span>
                            </li>
                        )
                    }</ul>
                </div>
            </div>
        </div>
    ) : <NotFound family={family} style={style} icon={icon}/>;
}