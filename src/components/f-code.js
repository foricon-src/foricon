'use client';

import { highlighter, theme } from './highlighter';
import { useContext, useEffect, useState } from 'react';
import { Lower } from './string-tools';
import { UserContext } from './user';

export default function Code({ children, codeLang = 'HTML' }) {
    let { user } = useContext(UserContext);
    let { indent } = user?.doc.personalization || 0;

    let [ html, setHtml ] = useState('');
    let [ expanded, setExpanded ] = useState(true);

    let { lang } = document.documentElement;

    useEffect(() => {
        let canceled = false;

        (async () => {
            let res = (await highlighter).codeToHtml(children, {
                lang: Lower(codeLang),
                theme: theme.name,
                structure: 'inline',
            })
            if (!canceled) setHtml(
                res.split('<br>').map((line, i) => {
                    let match = line.match(/^<span\b[^>]*>(\s*)(.*)$/);
                    if (!match) return `<span class='line-num'>${i + 1}</span><span>${line}</span>`;

                    let [ , space, rest ] = match;
                    let chunks = space.match(new RegExp(`.{1,${indent}}`, 'g')) || [];
                    console.log(`<span class='line-num'>${i + 1}</span><span>${
                        chunks.join('<span class="line">│</span>') + rest
                    }</span>`)
                    return `<span class='line-num'>${i + 1}</span><span>${
                        chunks.join('<span class="line">│</span>') + rest
                    }</span>`
                }).join('')
            )

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
                <li className='tooltip bottom' onClick={() => setExpanded(!expanded)}>
                    <f-icon icon='chevron-up' i-s='outline' f-rotate={!expanded && '180'}/>
                    <span>{
                        {
                            en: [ 'Expand', 'Collapse'],
                            vi: [ 'Mở rộng', 'Thu gọn' ],
                            fr: [ 'Développer', 'Effondrement' ],
                            it: [ 'Espandere', 'Crollo' ],
                            ko: [ '확장하다', '무너지다' ],
                            ja: [ '拡大する', '崩壊' ],
                            de: [ 'Expandieren', 'Zusammenbruch' ],
                            nl: [ 'Uitbreiden', 'Instorten' ],
                            da: [ 'Udvide', 'Bryde sammen' ],
                            pt: [ 'Expandir', 'Colapso' ],
                            es: [ 'Expandir', 'Colapsar' ],
                            ru: [ 'Расширять', 'Крах' ],
                        }[lang][expanded ? 1 : 0]
                    }</span>
                </li>
                <li className='tooltip bottom' onClick={async () => {
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
        <div className={expanded && 'active'} dangerouslySetInnerHTML={{ __html: html }}/>
    </f-code>
}