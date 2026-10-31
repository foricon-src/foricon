'use client';

import { highlighter, theme } from './highlighter';
import { useEffect, useState } from 'react';
import { Lower } from './string-tools';

export default function Code({ children, codeLang = 'HTML' }) {
    let [ html, setHtml ] = useState('');

    useEffect(() => {
        let canceled = false;

        (async () => {
            let res = (await highlighter).codeToHtml(children, {
                lang: Lower(codeLang),
                theme: theme.name,
                structure: 'inline',
            })
            if (!canceled) setHtml(res);

            const tokens = (await highlighter).codeToTokens(
                `let a = 1
                a += 1
                b = 1
                b.prop = 2
                b?.prop = 2
                !b = 2`,
                {
                    lang: 'javascript',
                    theme: 'Foricon',
                    includeExplanation: true,
                }
            );
            console.log(tokens)
        })()

        return () => canceled = true;
    }, [ children ])

    if (typeof children != 'string') {
        console.error('Content must be a string');
        return;
    }
    if (![ 'JavaScript', 'HTML', 'CSS' ].includes(codeLang)) {
        console.error('Unsupported language');
        return;
    }

    return <f-code>
        <div>
            <span>{codeLang}</span>
            <ul className='btn-list small'>
                <li className='tooltip top'>
                    <f-icon icon='clone'/>
                    <span>Copy</span>
                </li>
            </ul>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
    </f-code>
}