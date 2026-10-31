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
            if (!canceled) setHtml(
                res.split('<br>').map((line, i) => `<span class='line-num'>${i + 1}</span><span>${line}</span>`).join('')
            )

            const tokens = (await highlighter).codeToTokens(
                `[type='a'], '[type^='a'] {}`,
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
                <li className='tooltip top' onClick={async () => {
                    await navigator.clipboard.writeText(children);
                    notify('success', {
                        en: 'Copied to clipboard',
                        vi: 'Đã sao chép vào bộ nhớ tạm',
                        fr: 'Copié dans le presse-papiers',
                        it: 'Copiato negli appunti',
                        ko: '클립보드에 복사됨',
                        ja: 'クリップボードにコピーされました',
                        de: 'In die Zwischenablage kopiert',
                        nl: 'Gekopieerd naar het klembord',
                        da: 'Kopieret til udklipsholderen',
                        pt: 'Copiado para a área de transferência',
                        es: 'Copiado al portapapeles',
                        ru: 'Скопировано в буфер обмена',
                    }[language])
                }}>
                    <f-icon icon='clone'/>
                    <span>Copy</span>
                </li>
            </ul>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
    </f-code>
}