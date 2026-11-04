'use client';

import { highlighter, theme } from './highlighter';
import { useContext, useEffect, useState } from 'react';
import { Lower } from './string-tools';
import { UserContext } from './user';

export default function Code({ children, codeLang = 'HTML' }) {
    let { user } = useContext(UserContext);
    let { indent } = user?.doc.personalization || 0;

    let [ html, setHtml ] = useState('');

    let { lang } = document.documentElement;

    useEffect(() => {
        let canceled = false;

        (async () => {
            let res = (await highlighter).codeToHtml(children, {
                lang: Lower(codeLang),
                theme: theme.name,
                structure: 'inline',
            })
            if (!canceled) {
                let lastDepth = 0;
                setHtml(
                    res.split('<br>').map((line, i) => {
                        if (!line || /^\s*$/.test(line)) {
                            let chunks = Array.from({ length: lastDepth }, () => ' '.repeat(indent));
                            return `<span class='line-num'>${i + 1}</span><span>${
                                chunks.join('<span class="line">│</span>')
                            }</span>`;
                        }

                        let match = line.match(/^(<span\b[^>]*>)(\s*)(.*)$/);
                        if (!match) return `<span class='line-num'>${i + 1}</span><span>${line}</span>`;

                        let [ , span, space, rest ] = match;
                        let chunks = [ '', ...(space.match(new RegExp(`.{1,${indent}}`, 'g')) || []) ];
                        lastDepth = chunks.length;

                        return `<span class='line-num'>${i + 1}</span><span>${
                            span + chunks.join('<span class="line">│</span>') + rest
                        }</span>`
                    }).join('')
                )
            }

            // const tokens = (await highlighter).codeToTokens(
            //     `[type='a'], '[type^='a'] {}`,
            //     {
            //         lang: 'css',
            //         theme: 'Foricon',
            //         includeExplanation: true,
            //     }
            // );
            // console.log(tokens)
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
                <li onClick={async () => {
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
                    }[lang])
                }}>
                    <f-icon icon='clone'/>
                    <span>{
                        {
                            en: 'Copy',
                            vi: 'Sao chép',
                            fr: 'Copie',
                            it: 'Copia',
                            ko: '복사',
                            ja: 'コピー',
                            de: 'Kopie',
                            nl: 'Kopiëren',
                            da: 'Kopi',
                            pt: 'Cópia',
                            es: 'Copiar',
                            ru: 'Копировать',
                        }[lang]
                    }</span>
                </li>
            </ul>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
    </f-code>
}