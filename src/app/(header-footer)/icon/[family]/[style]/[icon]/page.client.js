'use client';

import { useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconContext } from 'Com/icons';
import { LanguageContext } from 'Com/language';
import GetFamilyAndStyle from 'Com/get-family-n-style';
import Code from 'Com/code';
import { Capital } from 'Com/string-tools';
import useGo from 'Com/go';
import Join from 'Com/join';
import { NotFound } from './not-found.client';
import cssStyle from './page.module.css';
import { Range } from 'Com/range';

export default function PageClient({ params }) {
    let { family, style, icon } = JSON.parse(params.value);
    let styleName = [ family == 'duotone' && family, style ].filter(Boolean).join('/');

    let router = useRouter();
    let go = useGo();
    let icons = useContext(IconContext);
    let lang = useContext(LanguageContext);

    let [ isDropdownOpened, setIsDropdownOpened ] = useState(false);
    let [ priColor, setPriColor ] = useState('');
    let [ secColor, setSecColor ] = useState('');
    let [ priOpacity, setPriOpacity ] = useState('');
    let [ secOpacity, setSecOpacity ] = useState('');
    let [ scale, setScale ] = useState('');
    let [ size, setSize ] = useState('');
    let [ rotate, setRotate ] = useState('');
    let [ useFRotate, setUseFRotate ] = useState(false);
    let [ animation, setAnimation ] = useState('');
    let [ animationSpeed, setAnimationSpeed ] = useState('');

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
            <div className={cssStyle.title}>
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
                    <li className='tooltip top line' onClick={() => {
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
                    <li className='tooltip top' onClick={() => {
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
                    <li className='tooltip top'>
                        <f-icon icon='bookmark'/>
                        <span>{
                            (
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
                                } :
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
                                }
                            )[lang]
                        }</span>
                    </li>
                </ul>
            </div>
            <div className={cssStyle.main}>
                <div className={cssStyle.top}>
                    <h6>{
                        {
                            en: 'Categories',
                            vi: 'Thể loại',
                            fr: 'Catégories',
                            it: 'Categorie',
                            kr: '카테고리',
                            ja: 'カテゴリー',
                            de: 'Kategorien',
                            nl: 'Categorieën',
                            dk: 'Kategorier',
                            pt: 'Categorias',
                            es: 'Categorías',
                            ru: 'Категории',
                        }[lang]
                    }</h6>
                    <ul className='btn-list'>{
                        currentIcon.categories.map(category => {
                            let { icon, ...texts } = webData.categories[category];
                            return <li key={category} dangerouslySetInnerHTML={{
                                __html: `${icon}<span>${texts[lang]}</span>`,
                            }} onClick={() => go(`search?c=${category}`)}/>
                        })
                    }</ul>
                </div>
                <div className={cssStyle.left}>
                    <ul className='btn-list darker'>
                        {
                            currentIcon.styles.map(i => {
                                let { f, s } = GetFamilyAndStyle(i);
                                let f2 = f == 'regular' ? '' : f;
                                let str = `icon/${f}/${s}/${icon}`;

                                router.prefetch(`/${str}`);

                                return <li
                                    key={i}
                                    className={`tooltip top${family == f && style == s ? ' active' : ''}`}
                                    onClick={() => go(str, 'replace')}
                                >
                                    <f-icon icon={icon} i-s={(f2 ? `${f2}/` : '') + s} className='auto-line-height'/>
                                    <span>{`${Capital(f)} ${Capital(s)}`}</span>
                                </li>
                            })
                        }
                    </ul>
                    <div className='center-middle'>
                        <f-icon
                            icon={icon}
                            i-s={styleName}
                            style={{
                                '--primary-color': priColor,
                                '--secondary-color': secColor,
                                '--primary-opacity': priOpacity,
                                '--secondary-opacity': secOpacity,
                            }}
                            scale={scale}
                            size={size}
                            f-rotate={rotate}
                            animation={Join('-', animation, !!animationSpeed && animationSpeed)}
                            className='auto-line-height'
                        />
                    </div>
                </div>
                <div className={cssStyle.right}>
                    <Code>{
                        `<f-icon icon='${icon}'${Join(
                            ' ',
                            '',
                            styleName != 'solid' && `i-s='${styleName}'`,
                            scale && `scale='${scale}'`,
                            size && `size=${size}`,
                            rotate && `${useFRotate ? 'f-' : ''}rotate='${rotate}'`,
                            animation && `animation='${Join('-', animation, !!animationSpeed && animationSpeed)}'`,
                            [ priColor, priOpacity, secColor, secOpacity ].some(i => i != '') && `style='${
                                Join(
                                    '; ',
                                    priColor && `--primary-color: ${priColor}`,
                                    priOpacity && `--primary-opacity: ${priOpacity}`,
                                    secColor && `--secondary-color: ${secColor}`,
                                    secOpacity && `--secondary-opacity: ${secOpacity}`,
                                )
                            }'`
                        )}></f-icon>`
                    }</Code>
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
                <div className={cssStyle.bottom + (isDropdownOpened ? ' active' : '')}>
                    <div onClick={() => setIsDropdownOpened(!isDropdownOpened)}>
                        <h6>{
                            {
                                en: 'Customize',
                                vi: 'Tùy chỉnh',
                                fr: 'Personnaliser',
                                it: 'Personalizzare',
                                kr: '맞춤 설정',
                                ja: 'カスタマイズ',
                                de: 'Anpassen',
                                nl: 'Aanpassen',
                                dk: 'Tilpas',
                                pt: 'Personalizar',
                                es: 'Personalizar',
                                ru: 'Настроить',
                            }[lang]
                        }</h6>
                        <f-icon icon='chevron-right' i-s='outline' f-rotate={isDropdownOpened && '90'}/>
                    </div>
                    <div>
                        {family == 'duotone' && <>
                            <div>
                                <span>{
                                    {
                                        en: 'Color',
                                        vi: 'Màu',
                                        fr: 'Échelle',
                                        it: 'Scala',
                                        kr: '규모',
                                        ja: '規模',
                                        de: 'Skala',
                                        nl: 'Schaal',
                                        dk: 'Skala',
                                        pt: 'Balança',
                                        es: 'Escala',
                                        ru: 'Шкала',
                                    }[lang]
                                }</span>
                                <div>
                                    <input type='color' value={priColor} onInput={e => setPriColor(e.currentTarget.value)}/>
                                    <input type='color' value={secColor} onInput={e => setSecColor(e.currentTarget.value)}/>
                                </div>
                                <ul className='btn-list darker'>
                                    <li onClick={() => {
                                        setPriColor('');
                                        setSecColor('');
                                    }}>
                                        <f-icon icon='rotate-right' i-s='outline'/>
                                        <span>{
                                            {
                                                en: 'Reset',
                                                vi: 'Đặt lại',
                                                fr: 'Réinitialiser',
                                                it: 'Reset',
                                                kr: '다시 놓기',
                                                ja: 'リセット',
                                                de: 'Zurücksetzen',
                                                nl: 'Reset',
                                                dk: 'Nulstil',
                                                pt: 'Reiniciar',
                                                es: 'Reiniciar',
                                                ru: 'Перезагрузить',
                                            }[lang]
                                        }</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <span>{
                                    {
                                        en: 'Opacity',
                                        vi: 'Độ trong suốt',
                                        fr: 'Échelle',
                                        it: 'Scala',
                                        kr: '규모',
                                        ja: '規模',
                                        de: 'Skala',
                                        nl: 'Schaal',
                                        dk: 'Skala',
                                        pt: 'Balança',
                                        es: 'Escala',
                                        ru: 'Шкала',
                                    }[lang]
                                }</span>
                                <Range value={priOpacity || 1} onInput={e => setPriOpacity(e.currentTarget.value)} max={1} step={.01}/>
                                <Range value={secOpacity || .4} onInput={e => setSecOpacity(e.currentTarget.value)} max={1} step={.01}/>
                                <ul className='btn-list darker'>
                                    <li onClick={() => {
                                        setPriOpacity('');
                                        setSecOpacity('');
                                    }}>
                                        <f-icon icon='rotate-right' i-s='outline'/>
                                        <span>{
                                            {
                                                en: 'Reset',
                                                vi: 'Đặt lại',
                                                fr: 'Réinitialiser',
                                                it: 'Reset',
                                                kr: '다시 놓기',
                                                ja: 'リセット',
                                                de: 'Zurücksetzen',
                                                nl: 'Reset',
                                                dk: 'Nulstil',
                                                pt: 'Reiniciar',
                                                es: 'Reiniciar',
                                                ru: 'Перезагрузить',
                                            }[lang]
                                        }</span>
                                    </li>
                                </ul>
                            </div>
                        </>}
                        <div>
                            <span>{
                                {
                                    en: 'Scale',
                                    vi: 'Tỉ lệ',
                                    fr: 'Échelle',
                                    it: 'Scala',
                                    kr: '규모',
                                    ja: '規模',
                                    de: 'Skala',
                                    nl: 'Schaal',
                                    dk: 'Skala',
                                    pt: 'Balança',
                                    es: 'Escala',
                                    ru: 'Шкала',
                                }[lang]
                            }</span>
                            <ul className='btn-list darker'>{
                                [ 'xsmaller', 'smaller', '', 'larger', 'xlarger' ].map(i => (
                                    <li key={i} onClick={() => setScale(i)} className={scale == i && 'active'}>{
                                        i || <f-icon icon='empty-set' i-s='outline'/>
                                    }</li>
                                ))
                            }</ul>
                        </div>
                        <div>
                            <span>{
                                {
                                    en: 'Size',
                                    vi: 'Kích thước',
                                    fr: 'Taille',
                                    it: 'Misurare',
                                    kr: '크기',
                                    ja: 'サイズ',
                                    de: 'Größe',
                                    nl: 'Maat',
                                    dk: 'Størrelse',
                                    pt: 'Tamanho',
                                    es: 'Tamaño',
                                    ru: 'Размер',
                                }[lang]
                            }</span>
                            <ul className='btn-list darker'>{
                                [ 'smallest', 'smaller', 'small', '', 'large', 'larger', 'largest' ].map(i => (
                                    <li key={i} onClick={() => setSize(i)} className={size == i && 'active'}>{
                                        i || <f-icon icon='empty-set' i-s='outline'/>
                                    }</li>
                                ))
                            }</ul>
                        </div>
                        <div>
                            <span>{
                                {
                                    en: 'Rotate',
                                    vi: 'Xoay',
                                    fr: 'Tourner',
                                    it: 'Ruotare',
                                    kr: '회전하다',
                                    ja: '回転',
                                    de: 'Drehen',
                                    nl: 'Draaien',
                                    dk: 'Rotere',
                                    pt: 'Girar',
                                    es: 'Girar',
                                    ru: 'Повернуть',
                                }[lang]
                            }</span>
                            <ul className='btn-list darker'>{
                                [ '', '90', '180', '270', 'flip-x', 'flip-y' ].map(i => (
                                    <li key={i} onClick={() => setRotate(i)} className={rotate == i && 'active'}>{
                                        i || <f-icon icon='empty-set' i-s='outline'/>
                                    }</li>
                                ))
                            }</ul>
                            <label>
                                <input type='checkbox' onChange={e => setUseFRotate(e.currentTarget.checked)}/>
                                <div className='checkmark'/>
                                <span>Use <span className='small-code'>f-rotate</span></span>
                            </label>
                        </div>
                        <div>
                            <span>{
                                {
                                    en: 'Animation',
                                    vi: 'Hoạt ảnh',
                                    fr: 'Animation',
                                    it: 'Animazione',
                                    kr: '생기',
                                    ja: 'アニメーション',
                                    de: 'Animation',
                                    nl: 'Animatie',
                                    dk: 'Animation',
                                    pt: 'Animação',
                                    es: 'Animación',
                                    ru: 'Анимация',
                                }[lang]
                            }</span>
                            <ul className='btn-list darker'>{
                                [
                                    '',
                                    'ltfade', 'fade', 'hvfade', 'ulfade',
                                    'smbeat', 'beat', 'bgbeat', 'fadebeat',
                                    'spin', 'spin-reverse',
                                    'flip-x', 'flip-y', 'flip-xy',
                                ].map(i => (
                                    <li key={i} onClick={() => setAnimation(i)} className={animation == i && 'active'}>{
                                        i || <f-icon icon='empty-set' i-s='outline'/>
                                    }</li>
                                ))
                            }</ul>
                        </div>
                        <div>
                            <span>{
                                {
                                    en: 'Animation speed',
                                    vi: 'Tốc độ hoạt ảnh',
                                    fr: "Vitesse d'animation",
                                    it: 'Velocità di animazione',
                                    kr: '애니메이션 속도',
                                    ja: 'アニメーション速度',
                                    de: 'Animationsgeschwindigkeit',
                                    nl: 'Animatiesnelheid',
                                    dk: 'Animationshastighed',
                                    pt: 'Velocidade da animação',
                                    es: 'Velocidad de animación',
                                    ru: 'скорость анимации',
                                }[lang]
                            }</span>
                            <ul className='btn-list darker'>{
                                [
                                    'xxslow', 'xslow', 'slow', 'semislow',
                                    '',
                                    'semifast', 'fast', 'xfast', 'xxfast',
                                ].map(i => (
                                    <li key={i} onClick={() => setAnimationSpeed(i)} className={animationSpeed == i && 'active'}>{
                                        i || <f-icon icon='empty-set' i-s='outline'/>
                                    }</li>
                                ))
                            }</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        : <NotFound family={family} style={style} icon={icon} currentIcon={currentIcon}/>;
}