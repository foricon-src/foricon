'use client';

import { useContext, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { IconContext } from 'Com/icons';
import { LanguageContext } from 'Com/language';
import Code from 'Com/code';
import { NotFound } from './not-found.client';
import cssStyle from './page.module.css';

export default function PageClient({ params }) {
    let { family, style, icon } = JSON.parse(params.value);
    let styleName = [ family == 'duotone' && family, style ].filter(Boolean).join('/');

    let router = useRouter();
    let icons = useContext(IconContext);
    let lang = useContext(LanguageContext);
    let currentIcon = useMemo(() => icons?.b2.find(i => i.name == icon), [ icons, icon ]);
    
    return currentIcon && currentIcon.styles.includes(styleName) ? (
        <div className={cssStyle.main}>
            <div className={cssStyle.top}>
                <h3>{icon}</h3>
                <ul className='btn-list'>{
                    currentIcon.categories.map(category => {
                        let { icon, ...texts } = webData.categories[category];
                        return <li key={category} dangerouslySetInnerHTML={{
                            __html: `${icon}<span>${texts[lang]}</span>`,
                        }} onClick={() => go(router, `search?c=${category}`)}/>
                    })
                }</ul>
            </div>
            <div>
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
                    <div className='center-middle'>
                        <f-icon icon={icon} i-s={styleName} className='auto-line-height'/>
                    </div>
                </div>
                <div>
                    <Code>{`<f-icon icon='${icon}'${styleName == 'solid' ? '' : ` i-s='${styleName}'`}></f-icon>`}</Code>
                    <div>
                        <h6>Unicodes</h6>
                        <ul className='btn-list'>{
                            currentIcon.unicodes[styleName].split('|').map(i => <li key={i}>{i}</li>)
                        }</ul>
                    </div>
                    <div>
                        <h6>Glyphs</h6>
                        <ul className='btn-list'>{
                            currentIcon.glyphs[styleName].split('').map(i => <li key={i}>{i}</li>)
                        }</ul>
                    </div>
                    <div>
                        <h6>{
                            {
                                en: 'Download',
                                vi: 'Tải xuống',
                                fr: 'Télécharger',
                                it: 'Scaricamento',
                                kr: '다운로드',
                                ja: 'ダウンロード',
                                de: 'Herunterladen',
                                nl: 'Download',
                                dk: 'Download',
                                pt: 'Transferir',
                                es: 'Descargar',
                                ru: 'Скачать',
                            }[lang]
                        }</h6>
                        <ul className='btn-list'>{
                            [ 'SVG', 'PNG', 'WebP' ].map(i => <li key={i}>{i}</li>)
                        }</ul>
                    </div>
                </div>
            </div>
        </div>
    ) : <NotFound family={family} style={style} icon={icon}/>;
}