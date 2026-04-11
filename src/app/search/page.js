'use client';

import { useEffect } from 'react';
import './page.css'

export default function Search() {
    useEffect(() => {(async () => {
        while (elemById('loading')) await wait();
  
        let chooseLayers = elemById('choose-layers');
        let chooseLayers_b = qSelec(false, chooseLayers, 'b');
        let chooseLayers_checkboxes = getChild(qSelec(false, chooseLayers, 'div.checkboxes'));
        
        let selectedCategories = [];
        let timeoutSearch;
        let currentView = localStorage.getItem('view') || 'large';
        let quickSearch = sessionStorage.getItem('search');
        let top = elemById('top');
        let top_search = qSelec(false, top, 'input');
        let top_versions = qSelec(false, top, 'f-select');
        let top_options = qSelec(false, top, '#options');
        let top_options_families = qSelec(false, options, '#top_options_families');
        let top_options_styles = qSelec(false, options, '#top_options_styles');
        let top_options_views = qSelec(false, options, '#top_options_views');
        let categories = elemById('categories');
        let results = elemById('results');
        let pages = elemById('pages');
        let bar = elemById('bar');
        let bar_code = qSelec(false, bar, 'code');
        let bar_glyphs = qSelec(false, bar, 'div#bar_glyphs');
        let bar_glyphs_primary = qSelec(false, bar_glyphs, 'div[name="Primary"]');
        let bar_glyphs_secondary = qSelec(false, bar_glyphs, 'div[name="Secondary"]');
        let bar_unicodes = qSelec(false, bar, 'div#bar_unicodes');
        let bar_unicodes_primary = qSelec(false, bar_unicodes, 'div[name="Primary"]');
        let bar_unicodes_secondary = qSelec(false, bar_unicodes, 'div[name="Secondary"]');
        let bar_categories = qSelec(false, bar, 'div#bar_categories > ul');
        let bar_download = qSelec(false, bar, 'div#bar_download');
        let bar_download_ul = qSelec(false, bar_download, 'ul');
        
        let charNameList = [], isBarOpened = false;
        
        try {
            // let res = await fetch(`//foricon-server-side.onrender.com/get-font/2/ttf`);
            // let src = await res.text();
            // opentype.load(src, (err, font) => {
            //     if (err) {
            //         notify('error', err.message);
            //         console.error('Font could not be loaded:', err);
            //     }
            //     else
            //         for (let [, char] of Object.entries(font.glyphs.glyphs)) {
            //             let { name } = char;
            //             let unicode = (char.unicode || 0).toString(16).padStart(4, '0');
            //             let glyph = String.fromCharCode(char.unicode);
            //             charNameList.push({ name, unicode });
            //         }
            // })
            let res = await fetch('//foricon-server-side.onrender.com/get-glyphs');
            let icons = await res.json();
            charNameList.push(...icons);
        }
        catch ({ message }) {
            notify('error', message);
        }
        
        if (quickSearch) {
            sessionStorage.removeItem('search');
            top_search.value = quickSearch;
            show();
        }
        
        function formatKeyword(value, reversed) {
            return value.replaceAll(...(reversed ? ['+', ' '] : [' ', '+']));
        }
        function goLink() {
            go(`#v=${top_versions.value}&${top_search.value ? `k=${formatKeyword(top_search.value)}` : ''}${selectedCategories.length ? `${top_search.value ? '&' : ''}c=${selectedCategories.join(';')}` : ''}${top_search.value || selectedCategories.length ? '&' : ''}f=${lower(qSelec(false, top_options_families, '.active').dataset.value)}&s=${lower(qSelec(false, top_options_styles, '.active').dataset.value)}`);
        }
        function show() {
            let value = normalize(top_search.value);
            let currentStyle = lower(qSelec(false, top_options_styles, '.active').dataset.value);
            let currentFamily = lower(qSelec(false, top_options_families, '.active').dataset.value);
            let obj = structuredClone(webData.categories);
            let style = '', resultCount = 0, children = [];
            
            clear(categories, results, pages);
            
            function normalize(value) {
                return lower(value).replace(/[+-]/g, ' ');
            }
            function showIcon(icon, style) {
                let normalized = normalize(icon.name);
                
                if (
                    icon.styles.includes(style) &&
                    (normalized.includes(value) || similarity(normalized, value) > .65) &&
                    (!selectedCategories.length || selectedCategories.every(category => icon.categories.includes(category)))
                ) {
                    icon.categories.forEach(cate => {
                        obj[cate].count = (obj[cate].count || 0) + 1
                    })
                    
                    let num = Math.ceil(++resultCount / 150);
                    let li = newElem('li', `
                        <f-icon icon='${icon.name}' i-s='${style}' ${top_versions.value}></f-icon>
                        <span>${icon.name}</span>`)
                    li.page = num;
                    resultCount > 150 && (li.style.display = 'none');
                    addEvLis(li, 'click', async () => {
                        if (isActive(li)) return;

                        isBarOpened && await wait(.2);
                        activate(li);
                        
                        isBarOpened = true;
                        
                        let isB1 = top_versions.value == 'b1';
                        let isDuotone = style.startsWith('duotone/');
            
                        let { name, categories } = icon;
                        let glyphs = icon.glyphs[style.replace('/', '-')];
                        let unicodes = icon.unicodes[style.replace('/', '-')].split('|');
            
                        clear(bar_categories);
                        activate(bar);
                        
                        qSelec(false, bar, 'h6').innerText = name;
                        qSelec(false, bar, 'f-icon[icon="circle-info"]').onclick = () => notify(
                            'info', '<span class="key">Ctrl</span> + <b>Click</b> to copy the code'
                        )
                        bar_code.innerHTML = formatCode(
                            `<f-icon icon='${name}'${style == 'solid' ? '' : ` i-s='${style}'`}${isB1 ? ' b1' : ''}></f-icon>`
                        )
                        bar_glyphs_primary.innerHTML = glyphs[0];
                        bar_unicodes_primary.innerHTML = unicodes[0];
                        if (isDuotone) {
                            bar_glyphs_secondary.innerText = glyphs[1];
                            bar_unicodes_secondary.innerText = unicodes[1];
                        }
                        else bar_glyphs_secondary.innerText = bar_unicodes_secondary.innerText = '';
                        bar_categories.append(
                            ...categories.map(cate => {
                            let category = webData.categories[cate];
                            return newElem('li', `${category.icon}<span>${category[language]}</span>`);
                            }).sort((a, b) => a.innerText.localeCompare(b.innerText))
                        )
            
                        getChild(bar_download_ul).forEach(btn => btn.onclick = ({currentTarget}) => {
                            if (isB1) {
                            notify('warn', 'This feature does not support Beta 1.x icons');
                            return;
                            }
                            let type = getAttr(currentTarget, 'name');
                            chooseLayers_b.innerText = currentTarget.innerText;
                            isDuotone ? enable(chooseLayers_checkboxes[1]) : disable(chooseLayers_checkboxes[1]);
                            modal(chooseLayers, layers =>
                            layers.forEach(layer => {
                                let { name } = charNameList.find(i => i.unicode == unicodes[layer == 'pri' ? 0 : 1]);
                                go(`//foricon-server-side.onrender.com/get-icon/${type}/${name}`, true);
                            })
                            )
                        })
                    })
                    results.append(li);
                    
                    if (resultCount % 150 - 1 == 0) {
                        let li_page = newElem('li');
                        num == 1 && activate(li_page);
                        li_page.innerText = num;
                        addEvLis(li_page, 'click',() =>
                            getChild(results).forEach(each => {
                                each.style.display = each.page == num ? '' : 'none';
                                inactivate(...pages.children);
                                activate(li_page);
                            })
                        )
                        pages.append(li_page);
                    }
                }
            }
            function getStyles(icon) {
                if (currentFamily == 'all' && currentStyle == 'all')
                    return icon.styles;
                if (currentFamily == 'all')
                    return ['', 'duotone/', 'sharp/'].map(prefix => `${prefix}${currentStyle}`);
                if (currentStyle == 'all')
                    return ['solid', 'outline'].map(
                        style => `${currentFamily == 'regular' ? '' : currentFamily + '/'}${style}`
                    );
                return [`${currentFamily == 'regular' ? '' : currentFamily + '/'}${currentStyle}`];
            }
            
            let icons = webData[top_versions.value == 'b1' ? 'icons' : 'iconsB2'];
            (value ? icons : icons.toSorted(
                (a, b) => similarity(b.name, value) - similarity(a.name, value)
            )).forEach(icon => getStyles(icon).forEach(style => showIcon(icon, style)));
            
            qSelec(false, `#main > h5 > lang[value='${language}'] > span`).innerText = resultCount;
            
            for (let item in obj) {
                let li_category = document.createElement('li');
                selectedCategories.includes(item) && activate(li_category);
                li_category.innerHTML = `<span>${obj[item].icon}${obj[item][language]}</span><span>${abbreviateNumber(obj[item].count || 0)}</span>`;
                
                addEvLis(li_category, 'click', () => {
                    let i = selectedCategories.indexOf(item);
                    i + 1 ? selectedCategories.splice(i, 1) : selectedCategories.push(item);
                    goLink();
                    show();
                });
                
                (obj[item].count || isActive(li_category)) && children.push(li_category);
            }
            children.sort(
                (a, b) => qSelec(false, a, 'span').innerText.localeCompare(qSelec(false, b, 'span').innerText)
            )
            categories.append(...children);
        }
        
        top_versions.setValue('b2');
        location.hash.slice(1).split('&').forEach(each => {
            const prefix = each.slice(0, 2);
            const value = each.slice(2);
            ({
                'k=': value => top_search.value = formatKeyword(value, true),
                'c=': value => selectedCategories = value.split(';'),
                's=': value => getChild(top_options_styles).forEach(style => value == lower(style.dataset.value) && activate(style)),
                'f=': value => getChild(top_options_families).forEach(family => value == lower(family.dataset.value) && activate(family)),
                'v=': value => value == 'b1' && top_versions.setValue(value)
            })[prefix]?.(value);
        })
        !qSelec(false, top_options_styles, '.active') && activate(top_options_styles.children[0]);
        !qSelec(false, top_options_families, '.active') && activate(top_options_families.children[0]);
        show();
        goLink();
        
        let animating = false;
        let isHovered = false;
        let topPos = `${-top.offsetHeight + 70}px`;
        let lastPos = 0;
        addEvLis(document, 'click', ({target}) => {
            if (!qSelec(false, results, '.active')?.contains(target) && !bar.contains(target) && !chooseLayers.contains(target) && isActive(bar)) {
                inactivate(...results.children, bar);
                isBarOpened = false;
            }
            !top.contains(target) && hideTop();
        })
        addEvLis(document, 'scroll', async () => {
            if (animating) return;
            animating = true;
            let calculated = document.documentElement.scrollTop - window.innerHeight;
            let triggerOpen = lastPos < calculated;
            lastPos = calculated;
            if (calculated > 0) {
                activate(top);
                appendData(top.style, {
                top: topPos,
                translate: '0 18px',
                })
                if (document.activeElement == top_search) {
                openTop();
                top.classList.add('slow-trans');
                await wait(.5);
                top.classList.remove('slow-trans');
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
        
        addEvLis(
            [ bar_glyphs_primary, bar_glyphs_secondary, bar_unicodes_primary, bar_unicodes_secondary ],
            'click',
            async ({currentTarget}) => {
                currentTarget.className = 'copied';
                navigator.clipboard.writeText(currentTarget.innerText);
                await wait(1);
                currentTarget.className = '';
            }
        )
        
        async function openTop() {
            if (!isActive(top)) return;
            top.style.top = '20px';
            isHovered = true;
        }
        async function hideTop() {
            if (!isHovered || !isActive(top)) return;
            if (document.activeElement != top_search) {
                top.style.top = topPos;
                top.classList.add('slow-trans');
                isHovered = false;
            }
            await wait(.5);
            top.classList.remove('slow-trans');
        }
        addEvLis(top, 'mouseenter', openTop);
        addEvLis(top, 'mouseleave', hideTop);
        addEvLis(top_search, 'input', () => {
            clearTimeout(timeoutSearch)
            timeoutSearch = setTimeout(show, 250);
            goLink();
        })
        addEvLis(top_versions, 'change', () => {
            show();
            results.dataset.version = top_versions.value;
            goLink();
        })
        qSelec(true, top_options_styles, 'li').forEach(each => {
            addEvLis(each,'click', () => {
                inactivate(...top_options_styles.children);
                activate(each);
                goLink();
                show();
            })
        })
        qSelec(true, top_options_families, 'li').forEach(each => {
            addEvLis(each, 'click', () => {
                inactivate(...top_options_families.children);
                activate(each);
                goLink();
                show();
            })
        })
        qSelec(true, top_options_views, 'li').forEach(each => {
            let name = getAttr(each, 'name');
            addEvLis(each, 'click', () => {
                inactivate(...top_options_views.children);
                activate(each);
                results.className = name;
                localStorage.setItem('view', name);
            })
            currentView == name && each.click();
        })
        
        addEvLis(qSelec(false, '#main > h5:first-of-type'), 'click', () => {
          let item = qSelec(false, '#main > h5:first-of-type');
          window.innerWidth <= 900 && (isActive(item) ? inactivate(item) : activate(item));
        })
    })()}, [])

    return (
        <>
            <div class='modal confirm' id='choose-layers'>
                <div>
                    <h3>
                        <lang value='en'>Select layer(s) to download</lang>
                        <lang value='vi'>Chọn (các) lớp để tải xuống</lang>
                        <lang value='fr'>Sélectionnez la/les couche(s) à télécharger</lang>
                        <lang value='it'>Seleziona il/i layer da scaricare</lang>
                        <lang value='kr'>다운로드할 레이어 선택</lang>
                        <lang value='ja'>ダウンロードするレイヤーを選択</lang>
                        <lang value='de'>Wählen Sie die Ebene(n) zum Herunterladen aus</lang>
                        <lang value='nl'>Selecteer laag/lagen om te downloaden</lang>
                        <lang value='dk'>Vælg lag til download</lang>
                        <lang value='pt'>Selecione camada(s) para download</lang>
                        <lang value='es'>Seleccione capa(s) para descargar</lang>
                        <lang value='ru'>Выберите слой(и) для загрузки</lang>
                    </h3>
                    <p>
                        <lang value='en'>Download selected layer(s) as <b></b></lang>
                        <lang value='vi'>Tải xuống lớp đã chọn dưới dạng <b></b></lang>
                        <lang value='fr'>Télécharger la/les couche(s) sélectionnée(s) en tant que <b></b></lang>
                        <lang value='it'>Scarica il/i layer selezionato/i come <b></b></lang>
                        <lang value='kr'>선택한 레이어를 다음 형식으로 다운로드 <b></b></lang>
                        <lang value='ja'>選択したレイヤーを次の形式でダウンロード <b></b></lang>
                        <lang value='de'>Ausgewählte Ebene(n) herunterladen als <b></b></lang>
                        <lang value='nl'>Download geselecteerde laag/lagen als <b></b></lang>
                        <lang value='dk'>Download valgte lag som <b></b></lang>
                        <lang value='pt'>Baixar camada(s) selecionada(s) como <b></b></lang>
                        <lang value='es'>Descargar capa(s) seleccionada(s) como <b></b></lang>
                        <lang value='ru'>Скачать выбранный(е) слой(и) как <b></b></lang>
                    </p>
                    <div class='checkboxes'>
                        <label>
                            <input type='checkbox' value='pri'/><div class='checkmark'></div>Primary
                        </label>
                        <label>
                            <input type='checkbox' value='sec'/><div class='checkmark'></div>Secondary
                        </label>
                    </div>
                    <div>
                        <a href='javascript:void(0)' class='btn secondary'>
                            <lang value='en'>Cancel</lang>
                            <lang value='vi'>Hủy</lang>
                            <lang value='fr'>Annuler</lang>
                            <lang value='it'>Cancellare</lang>
                            <lang value='kr'>취소</lang>
                            <lang value='ja'>キャンセル</lang>
                            <lang value='de'>Stornieren</lang>
                            <lang value='nl'>Annuleren</lang>
                            <lang value='dk'>Ophæve</lang>
                            <lang value='pt'>Cancelar</lang>
                            <lang value='es'>Cancelar</lang>
                            <lang value='ru'>Отмена</lang>
                        </a>
                        <a href='javascript:void(0)' class='btn primary'>
                            <lang value='en'>Download</lang>
                            <lang value='vi'>Tải xuống</lang>
                            <lang value='fr'>Télécharger</lang>
                            <lang value='it'>Scaricamento</lang>
                            <lang value='kr'>다운로드</lang>
                            <lang value='ja'>ダウンロード</lang>
                            <lang value='de'>Herunterladen</lang>
                            <lang value='nl'>Download</lang>
                            <lang value='dk'>Download</lang>
                            <lang value='pt'>Transferir</lang>
                            <lang value='es'>Descargar</lang>
                            <lang value='ru'>Скачать</lang>
                        </a>
                    </div>
                </div>
            </div>
            {/* <ins class='adsbygoogle' style='display:block' data-ad-client='ca-pub-8532596750508498' data-ad-slot='2221389210' data-ad-format='auto' data-full-width-responsive='true'></ins> */}
            <div class='banner blue signup'>
                <div>
                    <lang value='en'>Enjoy free icons - sign up to access the entire set!</lang>
                    <lang value='vi'>Thưởng thức các biểu tượng miễn phí - đăng ký để truy cập toàn bộ bộ sưu tập</lang>
                    <lang value='fr'>Profitez des icônes gratuites - inscrivez-vous pour tout débloquer !</lang>
                    <lang value='it'>Goditi le icone gratuite - registrati per accedere all&apos;intera collezione!</lang>
                    <lang value='kr'>무료 아이콘을 즐기세요 - 전체 세트를 이용하려면 가입하세요!</lang>
                    <lang value='ja'>無料アイコンを楽しもう - 全セットを使うには登録が必要です！</lang>
                    <lang value='de'>Kostenlose Icons genießen - registriere dich für das komplette Set!</lang>
                    <lang value='nl'>Geniet van gratis iconen - meld je aan om de hele set te gebruiken!</lang>
                    <lang value='dk'>Nyd gratis ikoner - tilmeld dig for adgang til hele samlingen!</lang>
                    <lang value='pt'>Aproveite os ícones gratuitos - inscreva-se para acessar o conjunto completo!</lang>
                    <lang value='es'>Disfruta de iconos gratis - regístrate para acceder al conjunto completo!</lang>
                    <lang value='ru'>Наслаждайтесь бесплатными иконками - зарегистрируйтесь для доступа ко всем!</lang>
                    <a href='/p/sign-up.html' class='btn'>
                        <lang value='en'>Sign up</lang>
                        <lang value='vi'>Đăng ký</lang>
                        <lang value='fr'>S&apos;inscrire</lang>
                        <lang value='it'>Iscrizione</lang>
                        <lang value='kr'>가입하기</lang>
                        <lang value='ja'>サインアップ</lang>
                        <lang value='de'>Melden Sie sich an</lang>
                        <lang value='nl'>Aanmelden</lang>
                        <lang value='dk'>Tilmelde</lang>
                        <lang value='pt'>Inscrever-se</lang>
                        <lang value='es'>Inscribirse</lang>
                        <lang value='ru'>Зарегистрироваться</lang>
                    </a>
                </div>
            </div>
            <div id='top' class='outer-corner'>
                <label>
                    <f-icon icon='magnifying-glass' i-s='outline'></f-icon>
                    <input {...{
                        'lang:en-placeholder': 'Find the perfect icon for your next masterpiece…',
                        'lang:vi-placeholder': 'Tìm biểu tượng hoàn hảo cho kiệt tác tiếp theo của bạn…',
                        'lang:fr-placeholder': "Trouvez l'icône parfaite pour votre prochaine création…",
                        'lang:it-placeholder': "Trova l'icona perfetta per il tuo prossimo capolavoro…",
                        'lang:kr-placeholder': '다음 작품을 위한 완벽한 아이콘을 찾아보세요…',
                        'lang:ja-placeholder': '次の傑作にぴったりのアイコンを見つけましょう…',
                        'lang:de-placeholder': 'Finden Sie das perfekte Icon für Ihr nächstes Meisterwerk…',
                        'lang:nl-placeholder': 'Vind het perfecte icoon voor je volgende meesterwerk…',
                        'lang:dk-placeholder': 'Find det perfekte ikon til dit næste mesterværk…',
                        'lang:pt-placeholder': 'Encontre o ícone perfeito para sua próxima obra-prima…',
                        'lang:es-placeholder': 'Encuentra el icono perfecto para tu próxima obra maestra…',
                        'lang:ru-placeholder': 'Найдите идеальную иконку для вашего следующего шедевра…',
                    }}/>
                </label>
                <f-select>
                    <text></text>
                    <option-list>
                    <f-option value='b2'>Beta 2+</f-option>
                    <f-option value='b1'>Beta 1.7.5</f-option>
                    </option-list>
                </f-select>
                <div id='options'>
                    <ul class='btn-list line-active' id='top_options_families'>
                    <li data-value='all'>
                        <lang value='en'>All</lang>
                        <lang value='vi'>Tất cả</lang>
                        <lang value='fr'>Tout</lang>
                        <lang value='it'>Tutto</lang>
                        <lang value='kr'>모두</lang>
                        <lang value='ja'>全て</lang>
                        <lang value='de'>Alle</lang>
                        <lang value='nl'>Alle</lang>
                        <lang value='dk'>Alle</lang>
                        <lang value='pt'>Tudo</lang>
                        <lang value='es'>Todo</lang>
                        <lang value='ru'>Все</lang>
                    </li>
                    <li data-value='regular'>
                        <lang value='en'>Regular</lang>
                        <lang value='vi'>Thường</lang>
                        <lang value='fr'>Régulier</lang>
                        <lang value='it'>Regolare</lang>
                        <lang value='kr'>정기적인</lang>
                        <lang value='ja'>通常</lang>
                        <lang value='de'>Regulär</lang>
                        <lang value='nl'>Normaal</lang>
                        <lang value='dk'>Fast</lang>
                        <lang value='pt'>Regular</lang>
                        <lang value='es'>Regular</lang>
                        <lang value='ru'>Обычный</lang>
                    </li>
                    <li data-value='duotone'>
                        <lang value='en'>Duotone</lang>
                        <lang value='vi'>Duotone</lang>
                        <lang value='fr'>Bichromie</lang>
                        <lang value='it'>Duotone</lang>
                        <lang value='kr'>듀오톤</lang>
                        <lang value='ja'>デュオトーン</lang>
                        <lang value='de'>Duotone</lang>
                        <lang value='nl'>Duotoon</lang>
                        <lang value='dk'>Duotone</lang>
                        <lang value='pt'>Duotónico</lang>
                        <lang value='es'>Duotono</lang>
                        <lang value='ru'>Дуотон</lang>
                    </li>
                    </ul>
                    <ul class='btn-list line-active line' id='top_options_styles'>
                    <li data-value='all'>
                        <lang value='en'>All</lang>
                        <lang value='vi'>Tất cả</lang>
                        <lang value='fr'>Tout</lang>
                        <lang value='it'>Tutto</lang>
                        <lang value='kr'>모두</lang>
                        <lang value='ja'>全て</lang>
                        <lang value='de'>Alle</lang>
                        <lang value='nl'>Alle</lang>
                        <lang value='dk'>Alle</lang>
                        <lang value='pt'>Tudo</lang>
                        <lang value='es'>Todo</lang>
                        <lang value='ru'>Все</lang>
                    </li>
                    <li data-value='solid'>
                        <lang value='en'>Solid</lang>
                        <lang value='vi'>Đặc</lang>
                        <lang value='fr'>Solide</lang>
                        <lang value='it'>Solido</lang>
                        <lang value='kr'>단단한</lang>
                        <lang value='ja'>固体</lang>
                        <lang value='de'>Solide</lang>
                        <lang value='nl'>Stevig</lang>
                        <lang value='dk'>Solid</lang>
                        <lang value='pt'>Sólido</lang>
                        <lang value='es'>Sólido</lang>
                        <lang value='ru'>Твердый</lang>
                    </li>
                    <li data-value='outline'>
                        <lang value='en'>Outline</lang>
                        <lang value='vi'>Đường viền</lang>
                        <lang value='fr'>Contour</lang>
                        <lang value='it'>Contorno</lang>
                        <lang value='kr'>개요</lang>
                        <lang value='ja'>概要</lang>
                        <lang value='de'>Gliederung</lang>
                        <lang value='nl'>Overzicht</lang>
                        <lang value='dk'>Omrids</lang>
                        <lang value='pt'>Delimitar</lang>
                        <lang value='es'>Describir</lang>
                        <lang value='ru'>Контур</lang>
                    </li>
                    </ul>
                    <ul class='btn-list line-active' id='top_options_views'>
                    <li name='large' class='chip top'>
                        <f-icon icon='grid-4'></f-icon>
                        <lang value='en'>Large icons</lang>
                        <lang value='vi'>Biểu tượng lớn</lang>
                        <lang value='fr'>Grandes icônes</lang>
                        <lang value='it'>Icone grandi</lang>
                        <lang value='kr'>큰 아이콘</lang>
                        <lang value='ja'>大きなアイコン</lang>
                        <lang value='de'>Große Symbole</lang>
                        <lang value='nl'>Grote iconen</lang>
                        <lang value='dk'>Store ikoner</lang>
                        <lang value='pt'>Ícones grandes</lang>
                        <lang value='es'>Iconos grandes</lang>
                        <lang value='ru'>Большие значки</lang>
                    </li>
                    <li name='small' class='chip top'>
                        <f-icon icon='grid-9'></f-icon>
                        <lang value='en'>Small icons</lang>
                        <lang value='vi'>Biểu tượng nhỏ</lang>
                        <lang value='fr'>Petites icônes</lang>
                        <lang value='it'>Piccole icone</lang>
                        <lang value='kr'>작은 아이콘</lang>
                        <lang value='ja'>小さいアイコン</lang>
                        <lang value='de'>Kleine Symbole</lang>
                        <lang value='nl'>Kleine iconen</lang>
                        <lang value='dk'>Små ikoner</lang>
                        <lang value='pt'>Ícones pequenos</lang>
                        <lang value='es'>Iconos pequeños</lang>
                        <lang value='ru'>Маленькие значки</lang>
                    </li>
                    <li name='tiles' class='chip top'>
                        <f-icon icon='list' i-s='outline'></f-icon>
                        <lang value='en'>Tiles</lang>
                        <lang value='vi'>Ô gạch</lang>
                        <lang value='fr'>Carrelage</lang>
                        <lang value='it'>Piastrelle</lang>
                        <lang value='kr'>타일</lang>
                        <lang value='ja'>タイル</lang>
                        <lang value='de'>Fliesen</lang>
                        <lang value='nl'>Tegels</lang>
                        <lang value='dk'>Fliser</lang>
                        <lang value='pt'>Azulejos</lang>
                        <lang value='es'>Azulejos</lang>
                        <lang value='ru'>Плитка</lang>
                    </li>
                    </ul>
                </div>
            </div>
            <div id='main'>
                <h5>
                    <lang value='en'>Categories</lang>
                    <lang value='vi'>Thể loại</lang>
                    <lang value='fr'>Catégories</lang>
                    <lang value='it'>Categorie</lang>
                    <lang value='kr'>카테고리</lang>
                    <lang value='ja'>カテゴリー</lang>
                    <lang value='de'>Kategorien</lang>
                    <lang value='nl'>Categorieën</lang>
                    <lang value='dk'>Kategorier</lang>
                    <lang value='pt'>Categorias</lang>
                    <lang value='es'>Categorías</lang>
                    <lang value='ru'>Категории</lang>
                </h5>
                <h5>
                    <lang value='en'>Showing <span></span> results</lang>
                    <lang value='vi'>Đang hiển thị <span></span> kết quả</lang>
                    <lang value='fr'>Affichage de <span></span> résultats</lang>
                    <lang value='it'>Visualizzazione di <span></span> risultati</lang>
                    <lang value='kr'><span></span> 개의 결과 표시 중</lang>
                    <lang value='ja'><span></span> 件の結果を表示</lang>
                    <lang value='de'>Zeigt <span></span> ergebnisse</lang>
                    <lang value='nl'>Er worden <span></span> resultaten weergegeven</lang>
                    <lang value='dk'>Viser <span></span> resultater</lang>
                    <lang value='pt'>Mostrando <span></span> resultados</lang>
                    <lang value='es'>Mostrando <span></span> resultados</lang>
                    <lang value='ru'>Показано <span></span> результата</lang>
                </h5>
                <ul class='btn-list vertical' id='categories'></ul>
                <div>
                    <ul id='results'></ul>
                    <ul class='btn-list line-active top' id='pages'></ul>
                </div>
            </div>
            <div id='bar'>
                <h6></h6>
                <div id='bar_code'>
                    <lang value='en'>Code <f-icon icon='circle-info'></f-icon>:</lang>
                    <lang value='vi'>Mã <f-icon icon='circle-info'></f-icon>:</lang>
                    <lang value='fr'>Code <f-icon icon='circle-info'></f-icon>:</lang>
                    <lang value='it'>Codice <f-icon icon='circle-info'></f-icon>:</lang>
                    <lang value='kr'>암호 <f-icon icon='circle-info'></f-icon>:</lang>
                    <lang value='ja'>コード <f-icon icon='circle-info'></f-icon>:</lang>
                    <lang value='de'>Code <f-icon icon='circle-info'></f-icon>:</lang>
                    <lang value='nl'>Code <f-icon icon='circle-info'></f-icon>:</lang>
                    <lang value='dk'>Kode <f-icon icon='circle-info'></f-icon>:</lang>
                    <lang value='pt'>Código <f-icon icon='circle-info'></f-icon>:</lang>
                    <lang value='es'>Código <f-icon icon='circle-info'></f-icon>:</lang>
                    <lang value='ru'>Код <f-icon icon='circle-info'></f-icon>:</lang>
                    <code></code>
                </div>
                <div id='bar_glyphs'>
                    <lang value='en'>Glyphs:</lang>
                    <lang value='vi'>Glyph:</lang>
                    <lang value='fr'>Glyphes:</lang>
                    <lang value='it'>Glifi:</lang>
                    <lang value='kr'>글리프:</lang>
                    <lang value='ja'>グリフ:</lang>
                    <lang value='de'>Glyphen:</lang>
                    <lang value='nl'>Tekens:</lang>
                    <lang value='dk'>Glyffer:</lang>
                    <lang value='pt'>Glifos:</lang>
                    <lang value='es'>Glifos:</lang>
                    <lang value='ru'>Глифы:</lang>
                    <div>
                        <div name='Primary'></div>
                        <div name='Secondary'></div>
                    </div>
                </div>
                <div id='bar_unicodes'>
                    <lang value='en'>Unicodes:</lang>
                    <lang value='vi'>Unicode:</lang>
                    <lang value='fr'>Unicodes:</lang>
                    <lang value='it'>Unicode:</lang>
                    <lang value='kr'>유니코드:</lang>
                    <lang value='ja'>ユニコード:</lang>
                    <lang value='de'>Unicodes:</lang>
                    <lang value='nl'>Unicodes:</lang>
                    <lang value='dk'>Unicodes:</lang>
                    <lang value='pt'>Unicodes:</lang>
                    <lang value='es'>Unicodes:</lang>
                    <lang value='ru'>Юникоды:</lang>
                    <div>
                        <div name='Primary'></div>
                        <div name='Secondary'></div>
                    </div>
                </div>
                <div id='bar_categories'>
                    <lang value='en'>Categories:</lang>
                    <lang value='vi'>Thể loại:</lang>
                    <lang value='fr'>Catégories:</lang>
                    <lang value='it'>Categorie:</lang>
                    <lang value='kr'>카테고리:</lang>
                    <lang value='ja'>カテゴリー:</lang>
                    <lang value='de'>Kategorien:</lang>
                    <lang value='nl'>Categorieën:</lang>
                    <lang value='dk'>Kategorier:</lang>
                    <lang value='pt'>Categorias:</lang>
                    <lang value='es'>Categorías:</lang>
                    <lang value='ru'>Категории:</lang>
                    <ul class='btn-list'></ul>
                </div>
                <div id='bar_download'>
                    <lang value='en'>Download:</lang>
                    <lang value='vi'>Tải xuống:</lang>
                    <lang value='fr'>Télécharger:</lang>
                    <lang value='it'>Scaricamento:</lang>
                    <lang value='kr'>다운로드:</lang>
                    <lang value='ja'>ダウンロード:</lang>
                    <lang value='de'>Herunterladen:</lang>
                    <lang value='nl'>Download:</lang>
                    <lang value='dk'>Download:</lang>
                    <lang value='pt'>Transferir:</lang>
                    <lang value='es'>Descargar:</lang>
                    <lang value='ru'>Скачать:</lang>
                    <ul class='btn-list'>
                        <li name='svg'>SVG</li>
                        <li name='png'>PNG</li>
                        <li name='webp'>WebP</li>
                    </ul>
                </div>
            </div>
        </>
    )
}