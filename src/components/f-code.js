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
                `body {
                    color: blue;
                    transition: transform 2s ease var(--var);
                    animation: fade-in 2s ease infinite both;
                    background: url('https://example.com') no-repeat center/cover;
                }
                :root {
                    --primary: #6366f1;
                    --surface: rgb(30, 30, 40);
                    --spacing: 1.5rem;
                    --radius: 12px;
                }
                @media screen and (min-width: 768px) {
                    .layout {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 2rem;
                    }
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }`,
                {
                    lang: 'css',
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