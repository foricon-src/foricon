'use client';

import { highlighter } from './highlighter';
import { useEffect, useState } from 'react';

export default async function Code({ children, codeLang = 'html' }) {
    if (typeof children != 'string') {
        console.error('Content must be a string');
        return;
    }
    if (![ 'javascript', 'html', 'css' ].includes(codeLang)) {
        console.error('Unsupported language');
        return;
    }

    let [ html, setHtml ] = useState('');

    useEffect(() => {
        let canceled = false;

        (async () => {
            let res = await highlighter.codeToHtml(children, {
                lang: codeLang,
                theme: theme.name,
            })
            if (!canceled) setHtml(res);
        })()

        return () => canceled = true;
    }, [ children ])

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