'use client';

import Code from 'Com/code';
import cssStyle from './page.module.css';

export default function PageClient({ params }) {
    let { family, style, icon } = JSON.parse(params.value);
    let styleName = [ family == 'duotone' && family, style ].filter(Boolean).join('/');

    return (
        <div className={cssStyle.main}>
            <h1>{icon}</h1>
            <div>
                <f-icon icon={icon} i-s={styleName}/>
            </div>
            <ul className='btn-list'>
                <li>
                    <f-icon icon={icon}/>
                </li>
                <li>
                    <f-icon icon={icon} i-s='outline'/>
                </li>
                <li>
                    <f-icon icon={icon} i-s='duotone/solid'/>
                </li>
                <li>
                    <f-icon icon={icon} i-s='duotone/outline'/>
                </li>
            </ul>
            <Code>{`<f-icon icon=${icon} i-s='${styleName}'`}</Code>
        </div>
    )
}