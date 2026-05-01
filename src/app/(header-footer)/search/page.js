'use client';

import { useEffect, useState, useMemo, useContext } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Ad } from 'Com/ad';
import { LanguageContext } from 'Com/language';
import Code from 'Com/code';
import cssStyle from './page.module.css';
import Initial from './initial';

export default function Search() {
    let router = useRouter();
    let lang = useContext(LanguageContext);
    let searchParams = useSearchParams();

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
    
    let initial = ((params) => {
        if (!params) return {
            search: '',
            family: 'all',
            style: 'all',
            version: 'b2',
            categories: [],
        }
        
        function verify(param) {
            if (param == 'k') return params.get('k') || '';
            if (param == 'f') return {
                regular: 'regular',
                duotone: 'duotone',
            }[params.get('f')] || 'all';
            if (param == 's') return {
                solid: 'solid',
                outline: 'outline'
            }[params.get('s')] || 'all';
            if (param == 'v') return {
                b1: 'b1',
            }[params.get('v')] || 'b2';
            if (param == 'c')
                return (params.get('c')?.split(';') || []).filter(category => webData.categories[category]);
        }
        
        return {
            search: verify('k'),
            family: verify('f'),
            style: verify('s'),
            version: verify('v'),
            categories: verify('c'),
        }
    })(searchParams)
    
    let [ loaded, setLoaded ] = useState(false);
    let [ search, setSearch ] = useState(initial.search);
    let [ family, setFamily ] = useState(initial.family);
    let [ style, setStyle ] = useState(initial.style);
    let [ selectedCategories, selectCategories ] = useState(initial.categories);
    let [ version, setVersion ] = useState(initial.version);
    let [ currentPage, setPage ] = useState(0);
    let [ view, setView ] = useState('large');
    let [ selectedIcon, selectIcon ] = useState(null);
    let [ perPage, setPerPage ] = useState(1);
    
    function formatKeyword(value, reversed) {
        return value.replaceAll(...(reversed ? ['+', ' '] : [' ', '+']));
    }

    let filtered = useMemo(() => {
        let iconSet = version == 'b2' ? webData.iconsB2 : webData.icons;
        if (!iconSet) return [];
    
        return iconSet.flatMap(icon => {
            (
                family == 'all' && style == 'all' ? icon.styles :
                family == 'all' ? [ '', 'duotone/', 'sharp/' ].map(prefix => `${prefix}${style}`) :
                style == 'all' ? [ 'solid', 'outline' ].map(
                    s => `${family == 'regular' ? '' : `${family}/`}${s}`
                ) :
                [ `${family == 'regular' ? '' : `${family}/`}${style}` ]
            )
                .filter(s => icon.styles.includes(s))
                .filter(() => {
                    let normalized = lower(icon.name).replace(/[+-]/g, ' ');
                    return (
                        (
                            normalized.includes(search) || similarity(normalized, search) > 0.65
                        ) && (
                            !selectedCategories.length || selectCategories.every(c => icon.categories.includes(c))
                        )
                    )
                })
                .map(style => ({ icon, style }))
        })
    }, [ loaded, search, family, style, selectedCategories, version ]);
    let currentIcons = useMemo(() => {
        let maxPage = Math.floor(filtered.length / perPage);
        setPage(Math.min(maxPage, currentPage));

        let start = perPage * currentPage;
        return filtered.slice(start, start + perPage);
    }, [ filtered, currentPage, perPage ])
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

        check();
        
        let top = qSelec(false, `.${cssStyle.top}`);
        let top_search = qSelec(false, top, 'input');

        let animating = false;
        let isHovered = false;
        let topPos = `${-top.offsetHeight + 70}px`;
        let lastPos = 0;

        function openTop() {
            if (!isActive(top)) return;
            top.style.top = '20px';
            isHovered = true;
        }
        async function hideTop() {
            if (!isHovered || !isActive(top)) return;
            if (document.activeElement != top_search) {
                top.style.top = topPos;
                top.classList.add(cssStyle.slowTrans);
                isHovered = false;
            }
            await wait(.5);
            top.classList.remove(cssStyle.slowTrans);
        }
        
        addEvLis(window, 'resize', check);
        
        addEvLis(document, 'click', ({ target }) => {
            (![
                qSelec(false, `.${cssStyle.bar}`),
                qSelec(false, `.${cssStyle.results} > .active`)
            ].filter(Boolean).some(i => i.contains(target)) ||
                qSelec(false, `.${cssStyle.bar} > .${cssStyle.categories} > .btn-list`).contains(target)) &&
                selectIcon(null);
            !top.contains(target) && hideTop();
        })
        addEvLis(document, 'scroll', async () => {
            if (animating) return;
            animating = true;
            let calculated = document.documentElement.scrollTop - innerHeight;
            lastPos = calculated;
            if (calculated > 0) {
                activate(top);
                appendData(top.style, {
                    top: topPos,
                    translate: '0 18px',
                })
                if (document.activeElement == top_search) {
                    openTop();
                    top.classList.add(cssStyle.slowTrans);
                    await wait(.5);
                    top.classList.remove(cssStyle.slowTrans);
                }
                else await wait(.2);
            }
            else {
                let waitTime = .5;
                if (isHovered) top.style.top = topPos;
                else waitTime = .2;
                top.style.translate = 0;
                isHovered = false;
                await wait(waitTime);
                inactivate(top);
            }
            animating = false;
        })
        
        addEvLis(top, 'mouseenter', openTop);
        addEvLis(top, 'mouseleave', hideTop);

        addEvLis(fSelect, 'change', () => setVersion(fSelect.value));
    })()}, [])
    useEffect(() => {
        let value = [
            `v=${version}`,
            search && `k=${formatKeyword(search)}`,
            selectedCategories.length && `c=${selectedCategories.join(';')}`,
            `f=${family}`,
            `s=${style}`
        ].filter(Boolean).join('&')
        location.search != value && history.replaceState(null, '', `?${value}`);
    }, [ search, family, style, version, selectedCategories ])
    useEffect(() => { check() }, [ view ])
    useEffect(() => {
        let adsenseContent = elemById('adsense-content');
        adsenseContent && (adsenseContent.style.display = 'none');
    }, [])

    function check() {
        let columns = getComputedStyle(qSelec(false, `.${cssStyle.results}`)).gridTemplateColumns.split(' ').length;
        let rows = Math.floor((view == 'large' ? 150 : view == 'small' ? 300 : 160) / columns);
        let itemsPerPage = columns * rows;
        setPerPage(itemsPerPage);
    }

    return (
        <>
            <div className='modal confirm' id='choose-layers'>
                <div>
                    <h3>{
                        {
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
                        }[lang]
                    }</h3>
                    <p>{
                        {
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
                        }[lang]
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
                            {
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
                            }[lang]
                        }</a>
                        <a href='javascript:void(0)' className='btn primary'>{
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
                        }</a>
                    </div>
                </div>
            </div>
            <div className='banner blue signup'>
                <div>{
                    {
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
                    }[lang]
                }
                    <a href='/p/sign-up.html' className='btn'>{
                        {
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
                        }[lang]
                    }</a>
                </div>
            </div>
            <div className={`outer-corner ${cssStyle.top}`}>
                <label>
                    <f-icon icon='magnifying-glass' i-s='outline'></f-icon>
                    <input value={search} onInput={e => setSearch(e.currentTarget.value)} placeholder={
                        {
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
                        }[lang]
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
                            {
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
                            }[lang]
                        }</li>
                        <li className={family == 'regular' && 'active'} onClick={() => setFamily('regular')}>{
                            {
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
                            }[lang]
                        }</li>
                        <li className={family == 'duotone' && 'active'} onClick={() => setFamily('duotone')}>{
                            {
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
                            }[lang]
                        }</li>
                    </ul>
                    <ul className='btn-list line-active'>
                        <li className={`line${style == 'all' ? ' active' : ''}`} onClick={() => setStyle('all')}>{
                            {
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
                            }[lang]
                        }</li>
                        <li className={style == 'solid' && 'active'} onClick={() => setStyle('solid')}>{
                            {
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
                            }[lang]
                        }</li>
                        <li className={style == 'outline' && 'active'} onClick={() => setStyle('outline')}>{
                            {
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
                            }[lang]
                        }</li>
                    </ul>
                    <ul className='btn-list'>
                        <li className={`chip top`}>
                            <f-icon icon='rectangle-stack'/>
                            <span>{
                                {
                                    en: 'My collection',
                                    vi: 'Bộ sưu tập của tôi',
                                    fr: 'Ma collection',
                                    it: 'La mia collezione',
                                    kr: '내 컬렉션',
                                    ja: '私のコレクション',
                                    de: 'Meine Sammlung',
                                    nl: 'Mijn verzameling',
                                    dk: 'Min samling',
                                    pt: 'A minha coleção',
                                    es: 'Mi colección',
                                    ru: 'Моя коллекция',
                                }[lang]
                            }</span>
                        </li>
                    </ul>
                    <ul className='btn-list line line-active'>
                        <li className={`chip top${view == 'large' ? ' active' : ''}`} onClick={() => setView('large')}>
                            <f-icon icon='grid-4' i-s={view != 'large' && 'outline'}></f-icon>
                            <span>{
                                {
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
                                }[lang]
                            }</span>
                        </li>
                        <li className={`chip top${view == 'small' ? ' active' : ''}`} onClick={() => setView('small')}>
                            <f-icon icon='grid-9' i-s={view != 'small' && 'outline'}></f-icon>
                            <span>{
                                {
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
                                }[lang]
                            }</span>
                        </li>
                        <li className={`chip top${view == 'tiles' ? ' active' : ''}`} onClick={() => setView('tiles')}>
                            <f-icon icon='list' i-s='outline'></f-icon>
                            <span>{
                                {
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
                                }[lang]
                            }</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cssStyle.main}>
                <h5>{
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
                }</h5>
                <h5>{
                    {
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
                    }[lang]
                }
                </h5>
                <ul className={`btn-list vertical ${cssStyle.categories}`}>{
                    Object.entries(categoryCounts)
                        .filter(([ key, { count } ]) => selectedCategories.includes(key) || count > 0)
                        .sort(([ , a ], [ , b ]) => a[lang].localeCompare(b[lang]))
                        .map(([ key, { icon, count, ...lan } ]) => (
                            <li key={key} className={selectedCategories.includes(key) && 'active'} onClick={() => {
                                let arr = [ ...selectedCategories ];
                                let i = arr.indexOf(key);
                                i < 0 ? arr.push(key) : arr.splice(i, 1);
                                selectCategories(arr);
                            }}>
                                <span key={key} dangerouslySetInnerHTML={{
                                    __html: icon + lan[lang]
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
                <h6>{selectedIcon?.name || ''}</h6>
                <div className={cssStyle.code}>
                    <span>
                        {
                            `${{
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
                            }[lang]} `
                        }
                        <f-icon icon='circle-info' onClick={() => notify('info', 'key(Ctrl) + bold(Click) to copy the code')}></f-icon>:
                    </span>
                    <Code nameless={true}>{
                        `<f-icon icon='${selectedIcon?.name}'${
                            [
                                '',
                                selectedIcon?.style == 'solid' ? '' : `i-s='${selectedIcon?.style}'`,
                                version == 'b1' ? 'b1' : ''
                            ].filter(Boolean).join(' ')
                        }></f-icon>`
                    }</Code>
                </div>
                <div className={cssStyle.glyphs}>
                    <span>{
                        {
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
                        }[lang]
                    }</span>
                    <div>
                        <div name='Primary'>{selectedIcon?.glyphs[0]}</div>
                        <div name='Secondary'>{selectedIcon?.glyphs[1]}</div>
                    </div>
                </div>
                <div className={cssStyle.unicodes}>
                    <span>{
                        {
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
                        }[lang]
                    }</span>
                    <div>
                        <div name='Primary'>{selectedIcon?.unicodes[0]}</div>
                        <div name='Secondary'>{selectedIcon?.unicodes[1]}</div>
                    </div>
                </div>
                <div className={cssStyle.categories}>
                    <span>{
                        {
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
                        }[lang]
                    }</span>
                    <ul className='btn-list'>{
                        (selectedIcon?.categories || []).map(category => {
                            let { icon, ...lan } = webData.categories[category];
                            return <li key={category} dangerouslySetInnerHTML={{
                                __html: `${icon}<span>${lan[lang]}</span>`,
                            }} onClick={() => selectCategories([ category ])}/>
                        })
                    }</ul>
                </div>
                <div className={cssStyle.download}>
                    <span>{
                        {
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
                        }[lang]
                    }</span>
                    <ul className='btn-list'>{
                        [ 'SVG', 'PNG', 'WebP' ].map(i => <li key={i} onClick={() => modal(elemById('choose-layers'))}>{i}</li>)
                    }</ul>
                </div>
            </div>
        </>
    )
}