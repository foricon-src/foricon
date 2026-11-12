'use client';

import { highlighter, theme } from './highlighter';
import { useContext, useEffect, useState } from 'react';
import { Lower } from './string-tools';
import { UserContext } from './user';
import Join from './join';

/**
 * A codebox with syntax highlighting and indent level indicators.
 *
 * @param {Object} props
 * @param {string} [props.codeLang] - Language of the code
 * @returns {JSX.Element}
 */
export default function Code({ children, codeLang = 'HTML', className, ...rest }) {
    let { user } = useContext(UserContext);

    let [ indent, setIndent ] = useState(4);
    let [ html, setHtml ] = useState('');
    let [ expanded, setExpanded ] = useState(true);

    let { lang } = document.documentElement;

    useEffect(() => {
        let canceled = false;
        let indentation = ' '.repeat(indent);
        console.log(children);
        (async () => {
            let res = (await highlighter).codeToHtml(children.replaceAll('@ind', indentation), {
                lang: Lower(codeLang),
                theme: theme.name,
                structure: 'inline',
            })
            if (!canceled) {
                let lastDepth = 0;
                setHtml(
                    res.split('<br>').map((line, i) => {
                        let lineNum = `<span class='line-num'>${i + 1}</span>`;
                        let indicator = '<div class="indicator"></div>';

                        if (!line || /^\s*$/.test(line)) {
                            let chunks = [ '', ...Array.from({ length: lastDepth }, () => indentation) ];
                            return `${lineNum}<span class='line'>${chunks.join(indicator)}</span>`;
                        }

                        let match = line.match(/^(<span\b[^>]*>)(\s*)(.*)$/);
                        if (!match) return `${lineNum}<span class='line'>${line}</span>`;

                        let [ , span, space, rest ] = match;
                        let chunks = [ '', ...(space.match(new RegExp(`.{1,${indent}}`, 'g')) || []) ];
                        lastDepth = chunks.length - 1;

                        return `${lineNum}<span class='line'>${span + chunks.join(indicator) + rest}</span>`
                    }).join('')
                )
            }

            // const tokens = (await highlighter).codeToTokens(
            //     children,
            //     {
            //         lang: 'html',
            //         theme: 'Foricon',
            //         includeExplanation: true,
            //     }
            // );
            // console.log(tokens)
        })()

        return () => canceled = true;
    }, [ children ])
    useEffect(() => { user && setIndent(user.doc.personalization) }, [ user ]);

    if (typeof children != 'string') {
        console.error('Content must be a string');
        return;
    }
    if (![ 'JavaScript', 'HTML', 'CSS' ].includes(codeLang)) {
        console.error('Unsupported language');
        return;
    }

    return <f-code className={Join(' ', expanded && 'active', className)} {...rest}>
        <div>
            <span>{codeLang}</span>
            <ul className='btn-list small'>
                <li className='tooltip top' onClick={() => setExpanded(!expanded)}>
                    <f-icon icon='chevron-up' i-s='outline' f-rotate={!expanded && '180'}/>
                    <span>{
                        {
                            en: [ 'Expand', 'Collapse' ],
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