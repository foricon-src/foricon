'use client';

import { useContext, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { IconContext } from 'Com/icons';
import { LanguageContext } from 'Com/language';
import Code from 'Com/code';
import { Capital } from 'Com/string-tools';
import useGo from 'Com/go';
import { NotFound } from './not-found.client';
import cssStyle from './page.module.css';

export default function PageClient({ params }) {
    let { family, style, icon } = JSON.parse(params.value);
    let styleName = [ family == 'duotone' && family, style ].filter(Boolean).join('/');

    let router = useRouter();
    let go = useGo();
    let icons = useContext(IconContext);
    let lang = useContext(LanguageContext);
    let currentIcon = useMemo(() => icons?.b2.find(i => i.name == icon), [ icons, icon ]);

    let copiedToClipboard = {
        en: 'Copied to clipboard',
        vi: 'Đã sao chép vào bộ nhớ tạm',
        fr: 'Copié dans le presse-papiers',
        it: 'Copiato negli appunti',
        kr: '클립보드에 복사됨',
        ja: 'クリップボードにコピーされました',
        de: 'In die Zwischenablage kopiert',
        nl: 'Gekopieerd naar het klembord',
        dk: 'Kopieret til udklipsholderen',
        pt: 'Copiado para a área de transferência',
        es: 'Copiado al portapapeles',
        ru: 'Скопировано в буфер обмена',
    }[lang]
    
    return !!currentIcon && currentIcon.styles.includes(styleName)
        ? <div className={cssStyle.wrapper}>
            <div className={cssStyle.top}>
                <h3>{icon}</h3>
                <ul className='btn-list'>
                    <li onClick={() => history.back()}>
                        <f-icon icon='chevron-left-small' i-s='outline'/>
                        <span>{
                            {
                                en: 'Back',
                                vi: 'Trở lại',
                                fr: 'Dos',
                                it: 'Indietro',
                                kr: '뒤쪽에',
                                ja: '戻る',
                                de: 'Zurück',
                                nl: 'Rug',
                                dk: 'Tilbage',
                                pt: 'Costas',
                                es: 'Atrás',
                                ru: 'Назад',
                            }[lang]
                        }</span>
                    </li>
                    <li className='chip top line' onClick={() => {
                        navigator.clipboard.writeText(icon);
                        notify('success', copiedToClipboard);
                    }}>
                        <f-icon icon='clone'/>
                        <span>{
                            {
                                en: 'Copy icon name',
                                vi: 'Sao chép tên biểu tượng',
                                fr: "Copier le nom de l'icône",
                                it: "Copia il nome dell'icona",
                                kr: '아이콘 이름 복사',
                                ja: 'アイコン名をコピー',
                                de: 'Symbolnamen kopieren',
                                nl: 'Kopieer pictogramnaam',
                                dk: 'Kopiér ikonnavn',
                                pt: 'Copiar nome do ícone',
                                es: 'Copiar el nombre del icono',
                                ru: 'Скопировать название значка',
                            }[lang]
                        }</span>
                    </li>
                    <li className='chip top' onClick={() => {
                        navigator.clipboard.writeText(location.href);
                        notify('success', copiedToClipboard);
                    }}>
                        <f-icon icon='link' i-s='outline'/>
                        <span>{
                            {
                                en: 'Copy link',
                                vi: 'Sao chép liên kết',
                                fr: 'Copier le lien',
                                it: 'Copia il link',
                                kr: '링크 복사',
                                ja: 'リンクをコピー',
                                de: 'Link kopieren',
                                nl: 'Kopieer link',
                                dk: 'Kopiér link',
                                pt: 'Copiar link',
                                es: 'Copiar enlace',
                                ru: 'Скопировать ссылку',
                            }[lang]
                        }</span>
                    </li>
                    <li className='chip top'>
                        <f-icon icon='bookmark'/>
                        <span>{
                            true ? {
                                en: 'Save',
                                vi: 'Lưu',
                                fr: 'Sauvegarder',
                                it: 'Salva',
                                kr: '구하다',
                                ja: '保存',
                                de: 'Speichern',
                                nl: 'Redden',
                                dk: 'Spare',
                                pt: 'Guardar',
                                es: 'Ahorrar',
                                ru: 'Сохранять',
                            }[lang] :
                            {
                                en: 'Saved',
                                vi: 'Đã lưu',
                                fr: 'Sauvé',
                                it: 'Salvato',
                                kr: '저장됨',
                                ja: '保存済み',
                                de: 'Gespeichert',
                                nl: 'Opgeslagen',
                                dk: 'Gemt',
                                pt: 'Salvo',
                                es: 'Guardado',
                                ru: 'Сохранено',
                            }[lang]
                        }</span>
                    </li>
                </ul>
                <ul className='btn-list'>{
                    currentIcon.categories.map(category => {
                        let { icon, ...texts } = webData.categories[category];
                        return <li key={category} dangerouslySetInnerHTML={{
                            __html: `${icon}<span>${texts[lang]}</span>`,
                        }} onClick={() => go(`search?c=${category}`)}/>
                    })
                }</ul>
            </div>
            <div className={cssStyle.main}>
                <div>
                    <ul className='btn-list darker'>
                        {
                            currentIcon.styles.map(i => {
                                let [ a, b ] = i.split('/');
                                let f = b ? a : '';
                                let f2 = f || 'regular';
                                let s = b || a;
                                let str = `icon/${f2}/${s}/${icon}`;

                                router.prefetch(`/${str}`);

                                return <li
                                    key={i}
                                    className={`chip top ${family == f2 && style == s ? ' active' : ''}`}
                                    onClick={() => go(str, 'replace')}
                                >
                                    <f-icon icon={icon} i-s={(f ? `${f}/` : '') + s} className='auto-line-height'/>
                                    <span>{`${Capital(f2)} ${Capital(s)}`}</span>
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
                        <h6>{
                            {
                                en: 'Unicodes',
                                vi: 'Unicode',
                                fr: 'Unicodes',
                                it: 'Unicode',
                                kr: '유니코드',
                                ja: 'ユニコード',
                                de: 'Unicodes',
                                nl: 'Unicodes',
                                dk: 'Unicodes',
                                pt: 'Unicodes',
                                es: 'Unicodes',
                                ru: 'Юникоды',
                            }[lang]
                        }</h6>
                        <ul className='btn-list'>{
                            currentIcon.unicodes[styleName.replace('/', '-')].split('|').map(i =>
                                <li key={i} onClick={() => {
                                    navigator.clipboard.writeText(i);
                                    notify('success', copiedToClipboard);
                                }}>{i}</li>
                            )
                        }</ul>
                    </div>
                    <div>
                        <h6>{
                            {
                                en: 'Glyphs',
                                vi: 'Glyph',
                                fr: 'Glyphes',
                                it: 'Glifi',
                                kr: '글리프',
                                ja: 'グリフ',
                                de: 'Glyphen',
                                nl: 'Tekens',
                                dk: 'Glyffer',
                                pt: 'Glifos',
                                es: 'Glifos',
                                ru: 'Глифы',
                            }[lang]
                        }</h6>
                        <ul className='btn-list'>{
                            currentIcon.glyphs[styleName.replace('/', '-')].split('').map(i =>
                                <li key={i} onClick={() => {
                                    navigator.clipboard.writeText(i);
                                    notify('success', copiedToClipboard);
                                }}><f-icon>{i}</f-icon></li>
                            )
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
        : <NotFound family={family} style={style} icon={icon} currentIcon={currentIcon}/>;
}