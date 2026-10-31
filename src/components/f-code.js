'use client';

import { highlighter, theme } from './highlighter';
import { useEffect, useState } from 'react';

export default function Code({ children, codeLang = 'html' }) {
    let [ html, setHtml ] = useState('');

    useEffect(() => {
        let canceled = false;

        (async () => {
            let res = (await highlighter).codeToHtml(children, {
                lang: codeLang,
                theme: theme.name,
                structure: 'inline',
            })
            if (!canceled) setHtml(res);

            const tokens = (await highlighter).codeToTokens(
                `const app = document.querySelector("#app");
            const button = document.querySelector("button");
            
            button?.addEventListener("click", event => {
                event.a.preventDefault();
            });`,
                {
                    lang: 'javascript',
                    theme: 'Foricon',
                    includeExplanation: true,
                }
            );
        })()

        return () => canceled = true;
    }, [ children ])

    if (typeof children != 'string') {
        console.error('Content must be a string');
        return;
    }
    if (![ 'javascript', 'html', 'css' ].includes(codeLang)) {
        console.error('Unsupported language');
        return;
    }

    return <f-code>
        <div>
            <span></span>
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