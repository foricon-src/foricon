'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { GetLang } from 'Com/language';
import Code from 'Com/code';
import cssStyle from './page.module.css';

export default function Search() {
    let router = useRouter();

    let [ type, setType ] = useState('');

    // useEffect(() => {(async () => {
    //     while (elemById('loading')) await wait();
  
    //     let chooseLayers = elemById('choose-layers');
    //     let chooseLayers_checkboxes = getChild(qSelec(false, chooseLayers, 'div.checkboxes'));
        
    //     let selectedCategories = [];
    //     let timeoutSearch;
    //     let currentView = localStorage.getItem('view') || 'large';
    //     let quickSearch = sessionStorage.getItem('search');
    //     let top = elemById('top');
    //     let top_search = qSelec(false, top, 'input');
    //     let top_versions = qSelec(false, top, 'f-select');
    //     let top_options = qSelec(false, top, '#options');
    //     let top_options_families = qSelec(false, options, '#top_options_families');
    //     let top_options_styles = qSelec(false, options, '#top_options_styles');
    //     let top_options_views = qSelec(false, options, '#top_options_views');
    //     let categories = elemById('categories');
    //     let results = elemById('results');
    //     let pages = elemById('pages');
    //     let bar = elemById('bar');
    //     let bar_code = qSelec(false, bar, 'code');
    //     let bar_glyphs = qSelec(false, bar, '#bar_glyphs');
    //     let bar_glyphs_primary = qSelec(false, bar_glyphs, 'div[name="Primary"]');
    //     let bar_glyphs_secondary = qSelec(false, bar_glyphs, 'div[name="Secondary"]');
    //     let bar_unicodes = qSelec(false, bar, '#bar_unicodes');
    //     let bar_unicodes_primary = qSelec(false, bar_unicodes, 'div[name="Primary"]');
    //     let bar_unicodes_secondary = qSelec(false, bar_unicodes, 'div[name="Secondary"]');
    //     let bar_categories = qSelec(false, bar, '#bar_categories > ul');
    //     let bar_download = qSelec(false, bar, '#bar_download');
    //     let bar_download_ul = qSelec(false, bar_download, 'ul');
        
    //     let charNameList = [], isBarOpened = false;
        
    //     try {
    //         let res = await fetch('/api/get-glyphs');
    //         let icons = await res.json();
    //         charNameList.push(...icons);
    //     }
    //     catch ({ message }) {
    //         notify('error', message);
    //     }
        
    //     if (quickSearch) {
    //         sessionStorage.removeItem('search');
    //         top_search.value = quickSearch;
    //         show();
    //     }
        
    //     function formatKeyword(value, reversed) {
    //         return value.replaceAll(...(reversed ? ['+', ' '] : [' ', '+']));
    //     }
    //     function goLink() {
    //         go(router, `#v=${top_versions.value}&${top_search.value ? `k=${formatKeyword(top_search.value)}` : ''}${selectedCategories.length ? `${top_search.value ? '&' : ''}c=${selectedCategories.join(';')}` : ''}${top_search.value || selectedCategories.length ? '&' : ''}f=${lower(qSelec(false, top_options_families, '.active').dataset.value)}&s=${lower(qSelec(false, top_options_styles, '.active').dataset.value)}`);
    //     }
    //     function show() {
    //         let value = normalize(top_search.value);
    //         let currentStyle = lower(qSelec(false, top_options_styles, '.active').dataset.value);
    //         let currentFamily = lower(qSelec(false, top_options_families, '.active').dataset.value);
    //         let obj = structuredClone(webData.categories);
    //         let style = '', resultCount = 0, children = [];
            
    //         clear(categories, results, pages);
            
    //         function normalize(value) {
    //             return lower(value).replace(/[+-]/g, ' ');
    //         }
    //         function showIcon(icon, style) {
    //             let normalized = normalize(icon.name);
                
    //             if (
    //                 icon.styles.includes(style) &&
    //                 (normalized.includes(value) || similarity(normalized, value) > .65) &&
    //                 (!selectedCategories.length || selectedCategories.every(category => icon.categories.includes(category)))
    //             ) {
    //                 icon.categories.forEach(cate => {
    //                     obj[cate].count = (obj[cate].count || 0) + 1
    //                 })
                    
    //                 let num = Math.ceil(++resultCount / 150);
    //                 let li = newElem('li', `
    //                     <f-icon icon='${icon.name}' i-s='${style}' ${top_versions.value}></f-icon>
    //                     <span>${icon.name}</span>`)
    //                 li.page = num;
    //                 resultCount > 150 && (li.style.display = 'none');
    //                 addEvLis(li, 'click', async () => {
    //                     if (isActive(li)) return;

    //                     isBarOpened && await wait(.2);
    //                     activate(li);
                        
    //                     isBarOpened = true;
                        
    //                     let isB1 = top_versions.value == 'b1';
    //                     let isDuotone = style.startsWith('duotone/');
            
    //                     let { name, categories } = icon;
    //                     let glyphs = icon.glyphs[style.replace('/', '-')];
    //                     let unicodes = icon.unicodes[style.replace('/', '-')].split('|');
            
    //                     clear(bar_categories);
    //                     activate(bar);
                        
    //                     qSelec(false, bar, 'h6').innerText = name;
    //                     qSelec(false, bar, 'f-icon[icon="circle-info"]').onclick = () => notify(
    //                         'info', '<span className="key">Ctrl</span> + <b>Click</b> to copy the code'
    //                     )
    //                     bar_code.innerHTML = formatCode(
    //                         `<f-icon icon='${name}'${style == 'solid' ? '' : ` i-s='${style}'`}${isB1 ? ' b1' : ''}></f-icon>`
    //                     )
    //                     bar_glyphs_primary.innerHTML = glyphs[0];
    //                     bar_unicodes_primary.innerHTML = unicodes[0];
    //                     if (isDuotone) {
    //                         bar_glyphs_secondary.innerText = glyphs[1];
    //                         bar_unicodes_secondary.innerText = unicodes[1];
    //                     }
    //                     else bar_glyphs_secondary.innerText = bar_unicodes_secondary.innerText = '';
    //                     bar_categories.append(
    //                         ...categories.map(cate => {
    //                             let category = webData.categories[cate];
    //                             return newElem('li', `${category.icon}<span>${category[language]}</span>`);
    //                         }).sort((a, b) => a.innerText.localeCompare(b.innerText))
    //                     )
            
    //                     getChild(bar_download_ul).forEach(btn => btn.onclick = ({currentTarget}) => {
    //                         if (isB1) {
    //                             notify('warn', 'This feature does not support Beta 1.x icons');
    //                             return;
    //                         }
    //                         let type = getAttr(currentTarget, 'name');
    //                         setType(currentTarget.innerText);
    //                         isDuotone ? enable(chooseLayers_checkboxes[1]) : disable(chooseLayers_checkboxes[1]);
    //                         modal(chooseLayers, layers =>
    //                             layers.forEach(layer => {
    //                                 let { name } = charNameList.find(i => i.unicode == unicodes[layer == 'pri' ? 0 : 1]);
    //                                 go(router, `//foricon-server-side.onrender.com/get-icon/${type}/${name}`, true);
    //                             })
    //                         )
    //                     })
    //                 })
    //                 results.append(li);
                    
    //                 if (resultCount % 150 - 1 == 0) {
    //                     let li_page = newElem('li');
    //                     num == 1 && activate(li_page);
    //                     li_page.innerText = num;
    //                     addEvLis(li_page, 'click',() =>
    //                         getChild(results).forEach(each => {
    //                             each.style.display = each.page == num ? '' : 'none';
    //                             inactivate(...pages.children);
    //                             activate(li_page);
    //                         })
    //                     )
    //                     pages.append(li_page);
    //                 }
    //             }
    //         }
    //         function getStyles(icon) {
    //             if (currentFamily == 'all' && currentStyle == 'all')
    //                 return icon.styles;
    //             if (currentFamily == 'all')
    //                 return ['', 'duotone/', 'sharp/'].map(prefix => `${prefix}${currentStyle}`);
    //             if (currentStyle == 'all')
    //                 return ['solid', 'outline'].map(
    //                     style => `${currentFamily == 'regular' ? '' : currentFamily + '/'}${style}`
    //                 );
    //             return [`${currentFamily == 'regular' ? '' : currentFamily + '/'}${currentStyle}`];
    //         }
            
    //         let icons = webData[top_versions.value == 'b1' ? 'icons' : 'iconsB2'];
    //         (value ? icons : icons.toSorted(
    //             (a, b) => similarity(b.name, value) - similarity(a.name, value)
    //         )).forEach(icon => getStyles(icon).forEach(style => showIcon(icon, style)));
            
    //         setCount(resultCount);
            
    //         for (let item in obj) {
    //             let li_category = document.createElement('li');
    //             selectedCategories.includes(item) && activate(li_category);
    //             li_category.innerHTML = `<span>${obj[item].icon}${obj[item][language]}</span><span>${abbreviateNumber(obj[item].count || 0)}</span>`;
                
    //             addEvLis(li_category, 'click', () => {
    //                 let i = selectedCategories.indexOf(item);
    //                 i + 1 ? selectedCategories.splice(i, 1) : selectedCategories.push(item);
    //                 goLink();
    //                 show();
    //             });
                
    //             (obj[item].count || isActive(li_category)) && children.push(li_category);
    //         }
    //         children.sort(
    //             (a, b) => qSelec(false, a, 'span').innerText.localeCompare(qSelec(false, b, 'span').innerText)
    //         )
    //         categories.append(...children);
    //     }
        
    //     top_versions.setValue('b2');
    //     location.hash.slice(1).split('&').forEach(each => {
    //         const prefix = each.slice(0, 2);
    //         const value = each.slice(2);
    //         ({
    //             'k=': value => top_search.value = formatKeyword(value, true),
    //             'c=': value => selectedCategories = value.split(';'),
    //             's=': value => getChild(top_options_styles).forEach(style => value == lower(style.dataset.value) && activate(style)),
    //             'f=': value => getChild(top_options_families).forEach(family => value == lower(family.dataset.value) && activate(family)),
    //             'v=': value => value == 'b1' && top_versions.setValue(value)
    //         })[prefix]?.(value);
    //     })
    //     !qSelec(false, top_options_styles, '.active') && activate(top_options_styles.children[0]);
    //     !qSelec(false, top_options_families, '.active') && activate(top_options_families.children[0]);
    //     show();
    //     goLink();
        
    //     let animating = false;
    //     let isHovered = false;
    //     let topPos = `${-top.offsetHeight + 70}px`;
    //     let lastPos = 0;
    //     addEvLis(document, 'click', ({target}) => {
    //         if (!qSelec(false, results, '.active')?.contains(target) && !bar.contains(target) && !chooseLayers.contains(target) && isActive(bar)) {
    //             inactivate(...results.children, bar);
    //             isBarOpened = false;
    //         }
    //         !top.contains(target) && hideTop();
    //     })
    //     addEvLis(document, 'scroll', async () => {
    //         if (animating) return;
    //         animating = true;
    //         let calculated = document.documentElement.scrollTop - window.innerHeight;
    //         lastPos = calculated;
    //         if (calculated > 0) {
    //             activate(top);
    //             appendData(top.style, {
    //                 top: topPos,
    //                 translate: '0 18px',
    //             })
    //             if (document.activeElement == top_search) {
    //                 openTop();
    //                 top.classList.add('slow-trans');
    //                 await wait(.5);
    //                 top.classList.remove('slow-trans');
    //             }
    //             else await wait(.2);
    //         }
    //         else {
    //             let waitTime = .5;
    //             if (isHovered) top.style.top = topPos;
    //             else waitTime = .2;
    //             top.style.translate = 0;
    //             isHovered = false;
    //             await wait(waitTime);
    //             inactivate(top);
    //         }
    //         animating = false;
    //     })
        
    //     addEvLis(
    //         [ bar_glyphs_primary, bar_glyphs_secondary, bar_unicodes_primary, bar_unicodes_secondary ],
    //         'click',
    //         async ({currentTarget}) => {
    //             currentTarget.className = 'copied';
    //             navigator.clipboard.writeText(currentTarget.innerText);
    //             await wait(1);
    //             currentTarget.className = '';
    //         }
    //     )
        
    //     async function openTop() {
    //         if (!isActive(top)) return;
    //         top.style.top = '20px';
    //         isHovered = true;
    //     }
    //     async function hideTop() {
    //         if (!isHovered || !isActive(top)) return;
    //         if (document.activeElement != top_search) {
    //             top.style.top = topPos;
    //             top.classList.add('slow-trans');
    //             isHovered = false;
    //         }
    //         await wait(.5);
    //         top.classList.remove('slow-trans');
    //     }
    //     addEvLis(top, 'mouseenter', openTop);
    //     addEvLis(top, 'mouseleave', hideTop);
    //     addEvLis(top_search, 'input', () => {
    //         clearTimeout(timeoutSearch)
    //         timeoutSearch = setTimeout(show, 250);
    //         goLink();
    //     })
    //     addEvLis(top_versions, 'change', () => {
    //         show();
    //         results.dataset.version = top_versions.value;
    //         goLink();
    //     })
    //     qSelec(true, top_options_styles, 'li').forEach(each => {
    //         addEvLis(each,'click', () => {
    //             inactivate(...top_options_styles.children);
    //             activate(each);
    //             goLink();
    //             show();
    //         })
    //     })
    //     qSelec(true, top_options_families, 'li').forEach(each => {
    //         addEvLis(each, 'click', () => {
    //             inactivate(...top_options_families.children);
    //             activate(each);
    //             goLink();
    //             show();
    //         })
    //     })
    //     qSelec(true, top_options_views, 'li').forEach(each => {
    //         let name = getAttr(each, 'name');
    //         addEvLis(each, 'click', () => {
    //             inactivate(...top_options_views.children);
    //             activate(each);
    //             results.className = name;
    //             localStorage.setItem('view', name);
    //         })
    //         currentView == name && each.click();
    //     })
        
    //     addEvLis(qSelec(false, '#main > h5:first-of-type'), 'click', () => {
    //       let item = qSelec(false, '#main > h5:first-of-type');
    //       window.innerWidth <= 900 && (isActive(item) ? inactivate(item) : activate(item));
    //     })
    // })()}, [])
    
    let perPage = 150;
    
    let initial = (() => {
        if (typeof window == 'undefined') {
            return {
                search: '',
                family: 'all',
                style: 'all',
                version: 'b2',
                categories: [],
            }
        }
      
        const hash = location.hash.slice(1);
        const map = Object.fromEntries(
            hash.split('&').map(p => [ p.slice(0, 2), p.slice(2) ])
        )
      
        return {
            search: map['k='] ?? '',
            family: map['f='] ?? 'all',
            style: map['s='] ?? 'all',
            version: map['v='] ?? 'b2',
            categories: map['c='] ? map['c='].split(';') : [],
        }
    })()

    let [ loaded, setLoaded ] = useState(false);
    let [ search, setSearch ] = useState(initial.search);
    let [ family, setFamily ] = useState(initial.family);
    let [ style, setStyle ] = useState(initial.style);
    let [ selectedCategories, selectCategories ] = useState(initial.categories);
    let [ version, setVersion ] = useState(initial.version);
    let [ currentPage, setPage ] = useState(0);
    let [ view, setView ] = useState('large');
    let [ selectedIcon, selectIcon ] = useState(null);
    
    function formatKeyword(value, reversed) {
        return value.replaceAll(...(reversed ? ['+', ' '] : [' ', '+']));
    }

    let filtered = useMemo(() => {
        let iconSet = version == 'b2' ? webData.iconsB2 : webData.icons;
        if (!iconSet) return [];

        function getStyles(icon) {
            if (family == 'all' && style == 'all')
                return icon.styles;
            if (family == 'all')
                return [ '', 'duotone/', 'sharp/' ].map(prefix => `${prefix}${style}`);
            if (style == 'all')
                return [ 'solid', 'outline' ].map(
                    style => `${family == 'regular' ? '' : `${family}/`}${style}`
                );
            return [ `${family == 'regular' ? '' : `${family}/`}${style}` ];
        }
        function normalize(value) {
            return lower(value).replace(/[+-]/g, ' ');
        }

        return iconSet.flatMap(icon => {
            return getStyles(icon)
                .filter(style => icon.styles.includes(style))
                .filter(() => {
                    const normalized = normalize(icon.name);
                    return (
                        (normalized.includes(search) ||
                            similarity(normalized, search) > 0.65) &&
                        (!selectedCategories.length ||
                            selectedCategories.every(c =>
                                icon.categories.includes(c)
                            ))
                    )
                })
                .map(style => ({ icon, style }))
        })
    }, [ loaded, search, family, style, selectedCategories, version ]);
    let currentIcons = useMemo(() => {
        let start = perPage * currentPage;
        return filtered.slice(start, start + perPage);
    }, [ filtered, currentPage ])
    let categoryCounts = useMemo(() => {
        let cloned = structuredClone(webData.categories);
        filtered.forEach(({ icon: { categories } }) => 
            categories.forEach(c => cloned[c].count = (cloned[c].count || 0) + 1)
        )
        return cloned;
    }, [ filtered ])
    
    useEffect(() => {(async () => {
        let fSelect = qSelec(false, 'f-select');
        while (elemById('loading')) await wait();
        fSelect.setValue(version);
        setLoaded(true);

        let params = [ fSelect, 'change', () => {
            console.log(fSelect.value);
            setVersion(fSelect.value)
        } ];
        addEvLis(...params);
        return () => remvEvLis(...params);
    })()}, [])
    useEffect(() => {
        let hash = `#${
            [
                `v=${version}`,
                search && `k=${formatKeyword(search)}`,
                selectedCategories.length && `c=${selectedCategories.join(';')}`,
                `f=${family}`,
                `s=${style}`
            ].filter(Boolean).join('&')
        }`
        location.hash != hash && history.replaceState(null, '', hash);
    }, [ search, family, style, version, selectedCategories ])

    addEvLis(document, 'click', ({ target }) =>
        (![
            qSelec(false, `.${cssStyle.bar}`),
            qSelec(false, `.${cssStyle.results} > .active`)
        ].filter(Boolean).some(i => i.contains(target)) ||
            qSelec(false, `.${cssStyle.bar} > .${cssStyle.categories} > .btn-list`).contains(target)) &&
            selectIcon(null)
    )

    return (
        <>
            <div className='modal confirm' id='choose-layers'>
                <div>
                    <h3>{
                        GetLang({
                            en: 'Select layer(s) to download',
                            vi: 'Chọn (các) lớp để tải xuống',
                            fr: 'Sélectionnez la/les couche(s) à télécharger',
                            it: 'Seleziona il/i layer da scaricare',
                            kr: '다운로드할 레이어 선택',
                            ja: 'ダウンロードするレイヤーを選択',
                            de: 'Wählen Sie die Ebene(n) zum Herunterladen aus',
                            nl: 'Selecteer laag/lagen om te downloaden',
                            dk: 'Vælg lag til download',
                            pt: 'Selecione camada(s) para download',
                            es: 'Seleccione capa(s) para descargar',
                            ru: 'Выберите слой(и) для загрузки',
                        })
                    }</h3>
                    <p>{
                        GetLang({
                            en: `Download selected layer(s) as ${type}`,
                            vi: `Tải xuống lớp đã chọn dưới dạng ${type}`,
                            fr: `Télécharger la/les couche(s) sélectionnée(s) en tant que ${type}`,
                            it: `Scarica il/i layer selezionato/i come ${type}`,
                            kr: `선택한 레이어를 다음 형식으로 다운로드 ${type}`,
                            ja: `選択したレイヤーを次の形式でダウンロード ${type}`,
                            de: `Ausgewählte Ebene(n) herunterladen als ${type}`,
                            nl: `Download geselecteerde laag/lagen als ${type}`,
                            dk: `Download valgte lag som ${type}`,
                            pt: `Baixar camada(s) selecionada(s) como ${type}`,
                            es: `Descargar capa(s) seleccionada(s) como ${type}`,
                            ru: `Скачать выбранный(е) слой(и) как ${type}`,
                        })
                    }</p>
                    <div className='checkboxes'>
                        <label>
                            <input type='checkbox' value='pri'/><div className='checkmark'></div>Primary
                        </label>
                        <label>
                            <input type='checkbox' value='sec'/><div className='checkmark'></div>Secondary
                        </label>
                    </div>
                    <div>
                        <a href='javascript:void(0)' className='btn secondary'>{
                            GetLang({
                                en: 'Cancel',
                                vi: 'Hủy',
                                fr: 'Annuler',
                                it: 'Cancellare',
                                kr: '취소',
                                ja: 'キャンセル',
                                de: 'Stornieren',
                                nl: 'Annuleren',
                                dk: 'Ophæve',
                                pt: 'Cancelar',
                                es: 'Cancelar',
                                ru: 'Отмена',
                            })
                        }</a>
                        <a href='javascript:void(0)' className='btn primary'>{
                            GetLang({
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
                            })
                        }</a>
                    </div>
                </div>
            </div>
            {/* <ins className='adsbygoogle' style='display:block' data-ad-client='ca-pub-8532596750508498' data-ad-slot='2221389210' data-ad-format='auto' data-full-width-responsive='true'></ins> */}
            <div className='banner blue signup'>
                <div>{
                    GetLang({
                        en: 'Enjoy free icons - sign up to access the entire set!',
                        vi: 'Thưởng thức các biểu tượng miễn phí - đăng ký để truy cập toàn bộ bộ sưu tập',
                        fr: 'Profitez des icônes gratuites - inscrivez-vous pour tout débloquer !',
                        it: 'Goditi le icone gratuite - registrati per accedere all\'intera collezione!',
                        kr: '무료 아이콘을 즐기세요 - 전체 세트를 이용하려면 가입하세요!',
                        ja: '無料アイコンを楽しもう - 全セットを使うには登録が必要です！',
                        de: 'Kostenlose Icons genießen - registriere dich für das komplette Set!',
                        nl: 'Geniet van gratis iconen - meld je aan om de hele set te gebruiken!',
                        dk: 'Nyd gratis ikoner - tilmeld dig for adgang til hele samlingen!',
                        pt: 'Aproveite os ícones gratuitos - inscreva-se para acessar o conjunto completo!',
                        es: 'Disfruta de iconos gratis - regístrate para acceder al conjunto completo!',
                        ru: 'Наслаждайтесь бесплатными иконками - зарегистрируйтесь для доступа ко всем!',
                    })
                }
                    <a href='/p/sign-up.html' className='btn'>{
                        GetLang({
                            en: 'Sign up',
                            vi: 'Đăng ký',
                            fr: 'S\'inscrire',
                            it: 'Iscrizione',
                            kr: '가입하기',
                            ja: 'サインアップ',
                            de: 'Melden Sie sich an',
                            nl: 'Aanmelden',
                            dk: 'Tilmelde',
                            pt: 'Inscrever-se',
                            es: 'Inscribirse',
                            ru: 'Зарегистрироваться',
                        })
                    }</a>
                </div>
            </div>
            <div className={`outer-corner ${cssStyle.top}`}>
                <label>
                    <f-icon icon='magnifying-glass' i-s='outline'></f-icon>
                    <input value={search} onInput={e => setSearch(e.currentTarget.value)} placeholder={
                        GetLang({
                            en: 'Find the perfect icon for your next masterpiece…',
                            vi: 'Tìm biểu tượng hoàn hảo cho kiệt tác tiếp theo của bạn…',
                            fr: "Trouvez l'icône parfaite pour votre prochaine création…",
                            it: "Trova l'icona perfetta per il tuo prossimo capolavoro…",
                            kr: '다음 작품을 위한 완벽한 아이콘을 찾아보세요…',
                            ja: '次の傑作にぴったりのアイコンを見つけましょう…',
                            de: 'Finden Sie das perfekte Icon für Ihr nächstes Meisterwerk…',
                            nl: 'Vind het perfecte icoon voor je volgende meesterwerk…',
                            dk: 'Find det perfekte ikon til dit næste mesterværk…',
                            pt: 'Encontre o ícone perfeito para sua próxima obra-prima…',
                            es: 'Encuentra el icono perfecto para tu próxima obra maestra…',
                            ru: 'Найдите идеальную иконку для вашего следующего шедевра…',
                        })
                    }/>
                </label>
                <f-select>
                    <text></text>
                    <option-list>
                        <f-option value='b2'>Beta 2+</f-option>
                        <f-option value='b1'>Beta 1.7.5</f-option>
                    </option-list>
                </f-select>
                <div className={cssStyle.options}>
                    <ul className='btn-list line-active'>
                        <li className={family == 'all' && 'active'} onClick={() => setFamily('all')}>{
                            GetLang({
                                en: 'All',
                                vi: 'Tất cả',
                                fr: 'Tout',
                                it: 'Tutto',
                                kr: '모두',
                                ja: '全て',
                                de: 'Alle',
                                nl: 'Alle',
                                dk: 'Alle',
                                pt: 'Tudo',
                                es: 'Todo',
                                ru: 'Все',
                            })
                        }</li>
                        <li className={family == 'regular' && 'active'} onClick={() => setFamily('regular')}>{
                            GetLang({
                                en: 'Regular',
                                vi: 'Thường',
                                fr: 'Régulier',
                                it: 'Regolare',
                                kr: '정기적인',
                                ja: '通常',
                                de: 'Regulär',
                                nl: 'Normaal',
                                dk: 'Fast',
                                pt: 'Regular',
                                es: 'Regular',
                                ru: 'Обычный',
                            })
                        }</li>
                        <li className={family == 'duotone' && 'active'} onClick={() => setFamily('duotone')}>{
                            GetLang({
                                en: 'Duotone',
                                vi: 'Duotone',
                                fr: 'Bichromie',
                                it: 'Duotone',
                                kr: '듀오톤',
                                ja: 'デュオトーン',
                                de: 'Duotone',
                                nl: 'Duotoon',
                                dk: 'Duotone',
                                pt: 'Duotónico',
                                es: 'Duotono',
                                ru: 'Дуотон',
                            })
                        }</li>
                    </ul>
                    <ul className='btn-list line-active line'>
                        <li className={style == 'all' && 'active'} onClick={() => setStyle('all')}>{
                            GetLang({
                                en: 'All',
                                vi: 'Tất cả',
                                fr: 'Tout',
                                it: 'Tutto',
                                kr: '모두',
                                ja: '全て',
                                de: 'Alle',
                                nl: 'Alle',
                                dk: 'Alle',
                                pt: 'Tudo',
                                es: 'Todo',
                                ru: 'Все',
                            })
                        }</li>
                        <li className={style == 'solid' && 'active'} onClick={() => setStyle('solid')}>{
                            GetLang({
                                en: 'Solid',
                                vi: 'Đặc',
                                fr: 'Solide',
                                it: 'Solido',
                                kr: '단단한',
                                ja: '固体',
                                de: 'Solide',
                                nl: 'Stevig',
                                dk: 'Solid',
                                pt: 'Sólido',
                                es: 'Sólido',
                                ru: 'Твердый',
                            })
                        }</li>
                        <li className={style == 'outline' && 'active'} onClick={() => setStyle('outline')}>{
                            GetLang({
                                en: 'Outline',
                                vi: 'Đường viền',
                                fr: 'Contour',
                                it: 'Contorno',
                                kr: '개요',
                                ja: '概要',
                                de: 'Gliederung',
                                nl: 'Overzicht',
                                dk: 'Omrids',
                                pt: 'Delimitar',
                                es: 'Describir',
                                ru: 'Контур',
                            })
                        }</li>
                    </ul>
                    <ul className='btn-list line-active'>
                        <li className={`chip top${view == 'large' ? ' active' : ''}`} onClick={() => setView('large')}>
                            <f-icon icon='grid-4'></f-icon>
                            <span>{
                                GetLang({
                                    en: 'Large icons',
                                    vi: 'Biểu tượng lớn',
                                    fr: 'Grandes icônes',
                                    it: 'Icone grandi',
                                    kr: '큰 아이콘',
                                    ja: '大きなアイコン',
                                    de: 'Große Symbole',
                                    nl: 'Grote iconen',
                                    dk: 'Store ikoner',
                                    pt: 'Ícones grandes',
                                    es: 'Iconos grandes',
                                    ru: 'Большие значки',
                                })
                            }</span>
                        </li>
                        <li className={`chip top${view == 'small' ? ' active' : ''}`} onClick={() => setView('small')}>
                            <f-icon icon='grid-9'></f-icon>
                            <span>{
                                GetLang({
                                    en: 'Small icons',
                                    vi: 'Biểu tượng nhỏ',
                                    fr: 'Petites icônes',
                                    it: 'Piccole icone',
                                    kr: '작은 아이콘',
                                    ja: '小さいアイコン',
                                    de: 'Kleine Symbole',
                                    nl: 'Kleine iconen',
                                    dk: 'Små ikoner',
                                    pt: 'Ícones pequenos',
                                    es: 'Iconos pequeños',
                                    ru: 'Маленькие значки',
                                })
                            }</span>
                        </li>
                        <li className={`chip top${view == 'tiles' ? ' active' : ''}`} onClick={() => setView('tiles')}>
                            <f-icon icon='list' i-s='outline'></f-icon>
                            <span>{
                                GetLang({
                                    en: 'Tiles',
                                    vi: 'Ô gạch',
                                    fr: 'Carrelage',
                                    it: 'Piastrelle',
                                    kr: '타일',
                                    ja: 'タイル',
                                    de: 'Fliesen',
                                    nl: 'Tegels',
                                    dk: 'Fliser',
                                    pt: 'Azulejos',
                                    es: 'Azulejos',
                                    ru: 'Плитка',
                                })
                            }</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cssStyle.main}>
                <h5>{
                    GetLang({
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
                    })
                }</h5>
                <h5>{
                    GetLang({
                        en: `Showing ${filtered.length} results`,
                        vi: `Đang hiển thị ${filtered.length} kết quả`,
                        fr: `Affichage de ${filtered.length} résultats`,
                        it: `Visualizzazione di ${filtered.length} risultati`,
                        kr: `${filtered.length} 개의 결과 표시 중`,
                        ja: `${filtered.length} 件の結果を表示`,
                        de: `Zeigt ${filtered.length} ergebnisse`,
                        nl: `Er worden ${filtered.length} resultaten weergegeven`,
                        dk: `Viser ${filtered.length} resultater`,
                        pt: `Mostrando ${filtered.length} resultados`,
                        es: `Mostrando ${filtered.length} resultados`,
                        ru: `Показано ${filtered.length} результата`,
                    })
                }
                </h5>
                <ul className={`btn-list vertical ${cssStyle.categories}`}>{
                    Object.entries(categoryCounts)
                        .filter(([ key, { count } ]) => selectedCategories.includes(key) || count > 0)
                        .map(([ key, { icon, count, ...lang } ]) => (
                            <li key={key} className={selectedCategories.includes(key) && 'active'} onClick={() => {
                                let arr = [ ...selectedCategories ];
                                let i = arr.indexOf(key);
                                i < 0 ? arr.push(key) : arr.splice(i, 1);
                                selectCategories(arr);
                            }}>
                                <span key={key} dangerouslySetInnerHTML={{
                                    __html: icon + GetLang(lang)
                                }}/>
                                <span>{count || 0}</span>
                            </li>
                        ))
                }</ul>
                <div>
                    <ul className={`${cssStyle.results} ${cssStyle[view]}`}>{
                        currentIcons.map(({ icon, style }) => (
                            <li key={`${icon.name} | ${style}`} className={icon.name == selectedIcon?.name && style == selectedIcon?.style && 'active'} onClick={async () => {
                                await wait(.2);
                                selectIcon({
                                    name: icon.name,
                                    style,
                                    glyphs: icon.glyphs[style.replace('/', '-')],
                                    unicodes: icon.unicodes[style.replace('/', '-')].split('|'),
                                    categories: icon.categories,
                                })
                            }}>
                                <f-icon icon={icon.name} i-s={style}{...(() => {
                                    let obj = {};
                                    version == 'b1' && (obj.b1 = '');
                                    return obj;
                                })()}></f-icon>
                                <span>{icon.name}</span>
                            </li>
                        ))
                    }</ul>
                    <ul className={`btn-list line-active top ${cssStyle.pages}`}>{
                        Array.from({ length: Math.ceil(filtered.length / perPage) }).map((_, i) => (
                            <li key={i} onClick={() => setPage(i)} className={currentPage == i && 'active'}>{i + 1}</li>
                        ))
                    }</ul>
                </div>
            </div>
            <div className={cssStyle.bar + (selectedIcon ? ' active' : '')}>
                <h6></h6>
                <div className={cssStyle.code}>
                    <span>{
                        `${GetLang({
                            en: 'Code',
                            vi: 'Mã',
                            fr: 'Code',
                            it: 'Codice',
                            kr: '암호',
                            ja: 'コード',
                            de: 'Code',
                            nl: 'Code',
                            dk: 'Kode',
                            pt: 'Código',
                            es: 'Código',
                            ru: 'Код',
                        })} `
                    }</span>
                    <f-icon icon='circle-info'></f-icon>:
                    <Code nameless={true}>{
                        `<f-icon icon='${selectedIcon?.name}' ${selectedIcon?.style == 'solid' ? '' : `i-s='${selectedIcon?.style}'`}${version == 'b1' ? ' b1' : ''}></f-icon>`
                    }</Code>
                </div>
                <div className={cssStyle.glyphs}>
                    <span>{
                        GetLang({
                            en: 'Glyphs:',
                            vi: 'Glyph:',
                            fr: 'Glyphes:',
                            it: 'Glifi:',
                            kr: '글리프:',
                            ja: 'グリフ:',
                            de: 'Glyphen:',
                            nl: 'Tekens:',
                            dk: 'Glyffer:',
                            pt: 'Glifos:',
                            es: 'Glifos:',
                            ru: 'Глифы:',
                        })
                    }</span>
                    <div>
                        <div name='Primary'>{selectedIcon?.glyphs[0]}</div>
                        <div name='Secondary'>{selectedIcon?.glyphs[1]}</div>
                    </div>
                </div>
                <div className={cssStyle.unicodes}>
                    <span>{
                        GetLang({
                            en: 'Unicodes:',
                            vi: 'Unicode:',
                            fr: 'Unicodes:',
                            it: 'Unicode:',
                            kr: '유니코드:',
                            ja: 'ユニコード:',
                            de: 'Unicodes:',
                            nl: 'Unicodes:',
                            dk: 'Unicodes:',
                            pt: 'Unicodes:',
                            es: 'Unicodes:',
                            ru: 'Юникоды:',
                        })
                    }</span>
                    <div>
                        <div name='Primary'>{selectedIcon?.unicodes[0]}</div>
                        <div name='Secondary'>{selectedIcon?.unicodes[1]}</div>
                    </div>
                </div>
                <div className={cssStyle.categories}>
                    <span>{
                        GetLang({
                            en: 'Categories:',
                            vi: 'Thể loại:',
                            fr: 'Catégories:',
                            it: 'Categorie:',
                            kr: '카테고리:',
                            ja: 'カテゴリー:',
                            de: 'Kategorien:',
                            nl: 'Categorieën:',
                            dk: 'Kategorier:',
                            pt: 'Categorias:',
                            es: 'Categorías:',
                            ru: 'Категории:',
                        })
                    }</span>
                    <ul className='btn-list'>{
                        (selectedIcon?.categories || []).map(category => {
                            let { icon, ...lang } = webData.categories[category];
                            return <li key={category} dangerouslySetInnerHTML={{
                                __html: `${icon}<span>${GetLang(lang)}</span>`,
                            }} onClick={() => selectCategories([ category ])}/>
                        })
                    }</ul>
                </div>
                <div className={cssStyle.download}>
                    <span>{
                        GetLang({
                            en: 'Download:',
                            vi: 'Tải xuống:',
                            fr: 'Télécharger:',
                            it: 'Scaricamento:',
                            kr: '다운로드:',
                            ja: 'ダウンロード:',
                            de: 'Herunterladen:',
                            nl: 'Download:',
                            dk: 'Download:',
                            pt: 'Transferir:',
                            es: 'Descargar:',
                            ru: 'Скачать:',
                        })
                    }</span>
                    <ul className='btn-list'>
                        <li name='svg'>SVG</li>
                        <li name='png'>PNG</li>
                        <li name='webp'>WebP</li>
                    </ul>
                </div>
            </div>
        </>
    )
}