'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './page.css'
import { langValue, Lang } from 'Com/language';

export default function Search() {
    let router = useRouter();

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
        let bar_glyphs = qSelec(false, bar, '#bar_glyphs');
        let bar_glyphs_primary = qSelec(false, bar_glyphs, 'div[name="Primary"]');
        let bar_glyphs_secondary = qSelec(false, bar_glyphs, 'div[name="Secondary"]');
        let bar_unicodes = qSelec(false, bar, '#bar_unicodes');
        let bar_unicodes_primary = qSelec(false, bar_unicodes, 'div[name="Primary"]');
        let bar_unicodes_secondary = qSelec(false, bar_unicodes, 'div[name="Secondary"]');
        let bar_categories = qSelec(false, bar, '#bar_categories > ul');
        let bar_download = qSelec(false, bar, '#bar_download');
        let bar_download_ul = qSelec(false, bar_download, 'ul');
        
        let charNameList = [], isBarOpened = false;
        
        try {
            let res = await fetch('/api/get-glyphs');
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
            go(router, `#v=${top_versions.value}&${top_search.value ? `k=${formatKeyword(top_search.value)}` : ''}${selectedCategories.length ? `${top_search.value ? '&' : ''}c=${selectedCategories.join(';')}` : ''}${top_search.value || selectedCategories.length ? '&' : ''}f=${lower(qSelec(false, top_options_families, '.active').dataset.value)}&s=${lower(qSelec(false, top_options_styles, '.active').dataset.value)}`);
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
                                    go(router, `//foricon-server-side.onrender.com/get-icon/${type}/${name}`, true);
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
                        <Lang value='en'>Select layer(s) to download</Lang>
                        <Lang value='vi'>Chọn (các) lớp để tải xuống</Lang>
                        <Lang value='fr'>Sélectionnez la/les couche(s) à télécharger</Lang>
                        <Lang value='it'>Seleziona il/i layer da scaricare</Lang>
                        <Lang value='kr'>다운로드할 레이어 선택</Lang>
                        <Lang value='ja'>ダウンロードするレイヤーを選択</Lang>
                        <Lang value='de'>Wählen Sie die Ebene(n) zum Herunterladen aus</Lang>
                        <Lang value='nl'>Selecteer laag/lagen om te downloaden</Lang>
                        <Lang value='dk'>Vælg lag til download</Lang>
                        <Lang value='pt'>Selecione camada(s) para download</Lang>
                        <Lang value='es'>Seleccione capa(s) para descargar</Lang>
                        <Lang value='ru'>Выберите слой(и) для загрузки</Lang>
                    </h3>
                    <p>
                        <Lang value='en'>Download selected layer(s) as <b></b></Lang>
                        <Lang value='vi'>Tải xuống lớp đã chọn dưới dạng <b></b></Lang>
                        <Lang value='fr'>Télécharger la/les couche(s) sélectionnée(s) en tant que <b></b></Lang>
                        <Lang value='it'>Scarica il/i layer selezionato/i come <b></b></Lang>
                        <Lang value='kr'>선택한 레이어를 다음 형식으로 다운로드 <b></b></Lang>
                        <Lang value='ja'>選択したレイヤーを次の形式でダウンロード <b></b></Lang>
                        <Lang value='de'>Ausgewählte Ebene(n) herunterladen als <b></b></Lang>
                        <Lang value='nl'>Download geselecteerde laag/lagen als <b></b></Lang>
                        <Lang value='dk'>Download valgte lag som <b></b></Lang>
                        <Lang value='pt'>Baixar camada(s) selecionada(s) como <b></b></Lang>
                        <Lang value='es'>Descargar capa(s) seleccionada(s) como <b></b></Lang>
                        <Lang value='ru'>Скачать выбранный(е) слой(и) как <b></b></Lang>
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
                            <Lang value='en'>Cancel</Lang>
                            <Lang value='vi'>Hủy</Lang>
                            <Lang value='fr'>Annuler</Lang>
                            <Lang value='it'>Cancellare</Lang>
                            <Lang value='kr'>취소</Lang>
                            <Lang value='ja'>キャンセル</Lang>
                            <Lang value='de'>Stornieren</Lang>
                            <Lang value='nl'>Annuleren</Lang>
                            <Lang value='dk'>Ophæve</Lang>
                            <Lang value='pt'>Cancelar</Lang>
                            <Lang value='es'>Cancelar</Lang>
                            <Lang value='ru'>Отмена</Lang>
                        </a>
                        <a href='javascript:void(0)' class='btn primary'>
                            <Lang value='en'>Download</Lang>
                            <Lang value='vi'>Tải xuống</Lang>
                            <Lang value='fr'>Télécharger</Lang>
                            <Lang value='it'>Scaricamento</Lang>
                            <Lang value='kr'>다운로드</Lang>
                            <Lang value='ja'>ダウンロード</Lang>
                            <Lang value='de'>Herunterladen</Lang>
                            <Lang value='nl'>Download</Lang>
                            <Lang value='dk'>Download</Lang>
                            <Lang value='pt'>Transferir</Lang>
                            <Lang value='es'>Descargar</Lang>
                            <Lang value='ru'>Скачать</Lang>
                        </a>
                    </div>
                </div>
            </div>
            {/* <ins class='adsbygoogle' style='display:block' data-ad-client='ca-pub-8532596750508498' data-ad-slot='2221389210' data-ad-format='auto' data-full-width-responsive='true'></ins> */}
            <div class='banner blue signup'>
                <div>
                    <Lang value='en'>Enjoy free icons - sign up to access the entire set!</Lang>
                    <Lang value='vi'>Thưởng thức các biểu tượng miễn phí - đăng ký để truy cập toàn bộ bộ sưu tập</Lang>
                    <Lang value='fr'>Profitez des icônes gratuites - inscrivez-vous pour tout débloquer !</Lang>
                    <Lang value='it'>Goditi le icone gratuite - registrati per accedere all&apos;intera collezione!</Lang>
                    <Lang value='kr'>무료 아이콘을 즐기세요 - 전체 세트를 이용하려면 가입하세요!</Lang>
                    <Lang value='ja'>無料アイコンを楽しもう - 全セットを使うには登録が必要です！</Lang>
                    <Lang value='de'>Kostenlose Icons genießen - registriere dich für das komplette Set!</Lang>
                    <Lang value='nl'>Geniet van gratis iconen - meld je aan om de hele set te gebruiken!</Lang>
                    <Lang value='dk'>Nyd gratis ikoner - tilmeld dig for adgang til hele samlingen!</Lang>
                    <Lang value='pt'>Aproveite os ícones gratuitos - inscreva-se para acessar o conjunto completo!</Lang>
                    <Lang value='es'>Disfruta de iconos gratis - regístrate para acceder al conjunto completo!</Lang>
                    <Lang value='ru'>Наслаждайтесь бесплатными иконками - зарегистрируйтесь для доступа ко всем!</Lang>
                    <a href='/p/sign-up.html' class='btn'>
                        <Lang value='en'>Sign up</Lang>
                        <Lang value='vi'>Đăng ký</Lang>
                        <Lang value='fr'>S&apos;inscrire</Lang>
                        <Lang value='it'>Iscrizione</Lang>
                        <Lang value='kr'>가입하기</Lang>
                        <Lang value='ja'>サインアップ</Lang>
                        <Lang value='de'>Melden Sie sich an</Lang>
                        <Lang value='nl'>Aanmelden</Lang>
                        <Lang value='dk'>Tilmelde</Lang>
                        <Lang value='pt'>Inscrever-se</Lang>
                        <Lang value='es'>Inscribirse</Lang>
                        <Lang value='ru'>Зарегистрироваться</Lang>
                    </a>
                </div>
            </div>
            <div id='top' class='outer-corner'>
                <label>
                    <f-icon icon='magnifying-glass' i-s='outline'></f-icon>
                    <input placeholder={
                        langValue({
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
                <div id='options'>
                    <ul class='btn-list line-active' id='top_options_families'>
                    <li data-value='all'>
                        <Lang value='en'>All</Lang>
                        <Lang value='vi'>Tất cả</Lang>
                        <Lang value='fr'>Tout</Lang>
                        <Lang value='it'>Tutto</Lang>
                        <Lang value='kr'>모두</Lang>
                        <Lang value='ja'>全て</Lang>
                        <Lang value='de'>Alle</Lang>
                        <Lang value='nl'>Alle</Lang>
                        <Lang value='dk'>Alle</Lang>
                        <Lang value='pt'>Tudo</Lang>
                        <Lang value='es'>Todo</Lang>
                        <Lang value='ru'>Все</Lang>
                    </li>
                    <li data-value='regular'>
                        <Lang value='en'>Regular</Lang>
                        <Lang value='vi'>Thường</Lang>
                        <Lang value='fr'>Régulier</Lang>
                        <Lang value='it'>Regolare</Lang>
                        <Lang value='kr'>정기적인</Lang>
                        <Lang value='ja'>通常</Lang>
                        <Lang value='de'>Regulär</Lang>
                        <Lang value='nl'>Normaal</Lang>
                        <Lang value='dk'>Fast</Lang>
                        <Lang value='pt'>Regular</Lang>
                        <Lang value='es'>Regular</Lang>
                        <Lang value='ru'>Обычный</Lang>
                    </li>
                    <li data-value='duotone'>
                        <Lang value='en'>Duotone</Lang>
                        <Lang value='vi'>Duotone</Lang>
                        <Lang value='fr'>Bichromie</Lang>
                        <Lang value='it'>Duotone</Lang>
                        <Lang value='kr'>듀오톤</Lang>
                        <Lang value='ja'>デュオトーン</Lang>
                        <Lang value='de'>Duotone</Lang>
                        <Lang value='nl'>Duotoon</Lang>
                        <Lang value='dk'>Duotone</Lang>
                        <Lang value='pt'>Duotónico</Lang>
                        <Lang value='es'>Duotono</Lang>
                        <Lang value='ru'>Дуотон</Lang>
                    </li>
                    </ul>
                    <ul class='btn-list line-active line' id='top_options_styles'>
                    <li data-value='all'>
                        <Lang value='en'>All</Lang>
                        <Lang value='vi'>Tất cả</Lang>
                        <Lang value='fr'>Tout</Lang>
                        <Lang value='it'>Tutto</Lang>
                        <Lang value='kr'>모두</Lang>
                        <Lang value='ja'>全て</Lang>
                        <Lang value='de'>Alle</Lang>
                        <Lang value='nl'>Alle</Lang>
                        <Lang value='dk'>Alle</Lang>
                        <Lang value='pt'>Tudo</Lang>
                        <Lang value='es'>Todo</Lang>
                        <Lang value='ru'>Все</Lang>
                    </li>
                    <li data-value='solid'>
                        <Lang value='en'>Solid</Lang>
                        <Lang value='vi'>Đặc</Lang>
                        <Lang value='fr'>Solide</Lang>
                        <Lang value='it'>Solido</Lang>
                        <Lang value='kr'>단단한</Lang>
                        <Lang value='ja'>固体</Lang>
                        <Lang value='de'>Solide</Lang>
                        <Lang value='nl'>Stevig</Lang>
                        <Lang value='dk'>Solid</Lang>
                        <Lang value='pt'>Sólido</Lang>
                        <Lang value='es'>Sólido</Lang>
                        <Lang value='ru'>Твердый</Lang>
                    </li>
                    <li data-value='outline'>
                        <Lang value='en'>Outline</Lang>
                        <Lang value='vi'>Đường viền</Lang>
                        <Lang value='fr'>Contour</Lang>
                        <Lang value='it'>Contorno</Lang>
                        <Lang value='kr'>개요</Lang>
                        <Lang value='ja'>概要</Lang>
                        <Lang value='de'>Gliederung</Lang>
                        <Lang value='nl'>Overzicht</Lang>
                        <Lang value='dk'>Omrids</Lang>
                        <Lang value='pt'>Delimitar</Lang>
                        <Lang value='es'>Describir</Lang>
                        <Lang value='ru'>Контур</Lang>
                    </li>
                    </ul>
                    <ul class='btn-list line-active' id='top_options_views'>
                    <li name='large' class='chip top'>
                        <f-icon icon='grid-4'></f-icon>
                        <Lang value='en'>Large icons</Lang>
                        <Lang value='vi'>Biểu tượng lớn</Lang>
                        <Lang value='fr'>Grandes icônes</Lang>
                        <Lang value='it'>Icone grandi</Lang>
                        <Lang value='kr'>큰 아이콘</Lang>
                        <Lang value='ja'>大きなアイコン</Lang>
                        <Lang value='de'>Große Symbole</Lang>
                        <Lang value='nl'>Grote iconen</Lang>
                        <Lang value='dk'>Store ikoner</Lang>
                        <Lang value='pt'>Ícones grandes</Lang>
                        <Lang value='es'>Iconos grandes</Lang>
                        <Lang value='ru'>Большие значки</Lang>
                    </li>
                    <li name='small' class='chip top'>
                        <f-icon icon='grid-9'></f-icon>
                        <Lang value='en'>Small icons</Lang>
                        <Lang value='vi'>Biểu tượng nhỏ</Lang>
                        <Lang value='fr'>Petites icônes</Lang>
                        <Lang value='it'>Piccole icone</Lang>
                        <Lang value='kr'>작은 아이콘</Lang>
                        <Lang value='ja'>小さいアイコン</Lang>
                        <Lang value='de'>Kleine Symbole</Lang>
                        <Lang value='nl'>Kleine iconen</Lang>
                        <Lang value='dk'>Små ikoner</Lang>
                        <Lang value='pt'>Ícones pequenos</Lang>
                        <Lang value='es'>Iconos pequeños</Lang>
                        <Lang value='ru'>Маленькие значки</Lang>
                    </li>
                    <li name='tiles' class='chip top'>
                        <f-icon icon='list' i-s='outline'></f-icon>
                        <Lang value='en'>Tiles</Lang>
                        <Lang value='vi'>Ô gạch</Lang>
                        <Lang value='fr'>Carrelage</Lang>
                        <Lang value='it'>Piastrelle</Lang>
                        <Lang value='kr'>타일</Lang>
                        <Lang value='ja'>タイル</Lang>
                        <Lang value='de'>Fliesen</Lang>
                        <Lang value='nl'>Tegels</Lang>
                        <Lang value='dk'>Fliser</Lang>
                        <Lang value='pt'>Azulejos</Lang>
                        <Lang value='es'>Azulejos</Lang>
                        <Lang value='ru'>Плитка</Lang>
                    </li>
                    </ul>
                </div>
            </div>
            <div id='main'>
                <h5>
                    <Lang value='en'>Categories</Lang>
                    <Lang value='vi'>Thể loại</Lang>
                    <Lang value='fr'>Catégories</Lang>
                    <Lang value='it'>Categorie</Lang>
                    <Lang value='kr'>카테고리</Lang>
                    <Lang value='ja'>カテゴリー</Lang>
                    <Lang value='de'>Kategorien</Lang>
                    <Lang value='nl'>Categorieën</Lang>
                    <Lang value='dk'>Kategorier</Lang>
                    <Lang value='pt'>Categorias</Lang>
                    <Lang value='es'>Categorías</Lang>
                    <Lang value='ru'>Категории</Lang>
                </h5>
                <h5>
                    <Lang value='en'>Showing <span></span> results</Lang>
                    <Lang value='vi'>Đang hiển thị <span></span> kết quả</Lang>
                    <Lang value='fr'>Affichage de <span></span> résultats</Lang>
                    <Lang value='it'>Visualizzazione di <span></span> risultati</Lang>
                    <Lang value='kr'><span></span> 개의 결과 표시 중</Lang>
                    <Lang value='ja'><span></span> 件の結果を表示</Lang>
                    <Lang value='de'>Zeigt <span></span> ergebnisse</Lang>
                    <Lang value='nl'>Er worden <span></span> resultaten weergegeven</Lang>
                    <Lang value='dk'>Viser <span></span> resultater</Lang>
                    <Lang value='pt'>Mostrando <span></span> resultados</Lang>
                    <Lang value='es'>Mostrando <span></span> resultados</Lang>
                    <Lang value='ru'>Показано <span></span> результата</Lang>
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
                    <Lang value='en'>Code <f-icon icon='circle-info'></f-icon>:</Lang>
                    <Lang value='vi'>Mã <f-icon icon='circle-info'></f-icon>:</Lang>
                    <Lang value='fr'>Code <f-icon icon='circle-info'></f-icon>:</Lang>
                    <Lang value='it'>Codice <f-icon icon='circle-info'></f-icon>:</Lang>
                    <Lang value='kr'>암호 <f-icon icon='circle-info'></f-icon>:</Lang>
                    <Lang value='ja'>コード <f-icon icon='circle-info'></f-icon>:</Lang>
                    <Lang value='de'>Code <f-icon icon='circle-info'></f-icon>:</Lang>
                    <Lang value='nl'>Code <f-icon icon='circle-info'></f-icon>:</Lang>
                    <Lang value='dk'>Kode <f-icon icon='circle-info'></f-icon>:</Lang>
                    <Lang value='pt'>Código <f-icon icon='circle-info'></f-icon>:</Lang>
                    <Lang value='es'>Código <f-icon icon='circle-info'></f-icon>:</Lang>
                    <Lang value='ru'>Код <f-icon icon='circle-info'></f-icon>:</Lang>
                    <code></code>
                </div>
                <div id='bar_glyphs'>
                    <Lang value='en'>Glyphs:</Lang>
                    <Lang value='vi'>Glyph:</Lang>
                    <Lang value='fr'>Glyphes:</Lang>
                    <Lang value='it'>Glifi:</Lang>
                    <Lang value='kr'>글리프:</Lang>
                    <Lang value='ja'>グリフ:</Lang>
                    <Lang value='de'>Glyphen:</Lang>
                    <Lang value='nl'>Tekens:</Lang>
                    <Lang value='dk'>Glyffer:</Lang>
                    <Lang value='pt'>Glifos:</Lang>
                    <Lang value='es'>Glifos:</Lang>
                    <Lang value='ru'>Глифы:</Lang>
                    <div>
                        <div name='Primary'></div>
                        <div name='Secondary'></div>
                    </div>
                </div>
                <div id='bar_unicodes'>
                    <Lang value='en'>Unicodes:</Lang>
                    <Lang value='vi'>Unicode:</Lang>
                    <Lang value='fr'>Unicodes:</Lang>
                    <Lang value='it'>Unicode:</Lang>
                    <Lang value='kr'>유니코드:</Lang>
                    <Lang value='ja'>ユニコード:</Lang>
                    <Lang value='de'>Unicodes:</Lang>
                    <Lang value='nl'>Unicodes:</Lang>
                    <Lang value='dk'>Unicodes:</Lang>
                    <Lang value='pt'>Unicodes:</Lang>
                    <Lang value='es'>Unicodes:</Lang>
                    <Lang value='ru'>Юникоды:</Lang>
                    <div>
                        <div name='Primary'></div>
                        <div name='Secondary'></div>
                    </div>
                </div>
                <div id='bar_categories'>
                    <Lang value='en'>Categories:</Lang>
                    <Lang value='vi'>Thể loại:</Lang>
                    <Lang value='fr'>Catégories:</Lang>
                    <Lang value='it'>Categorie:</Lang>
                    <Lang value='kr'>카테고리:</Lang>
                    <Lang value='ja'>カテゴリー:</Lang>
                    <Lang value='de'>Kategorien:</Lang>
                    <Lang value='nl'>Categorieën:</Lang>
                    <Lang value='dk'>Kategorier:</Lang>
                    <Lang value='pt'>Categorias:</Lang>
                    <Lang value='es'>Categorías:</Lang>
                    <Lang value='ru'>Категории:</Lang>
                    <ul class='btn-list'></ul>
                </div>
                <div id='bar_download'>
                    <Lang value='en'>Download:</Lang>
                    <Lang value='vi'>Tải xuống:</Lang>
                    <Lang value='fr'>Télécharger:</Lang>
                    <Lang value='it'>Scaricamento:</Lang>
                    <Lang value='kr'>다운로드:</Lang>
                    <Lang value='ja'>ダウンロード:</Lang>
                    <Lang value='de'>Herunterladen:</Lang>
                    <Lang value='nl'>Download:</Lang>
                    <Lang value='dk'>Download:</Lang>
                    <Lang value='pt'>Transferir:</Lang>
                    <Lang value='es'>Descargar:</Lang>
                    <Lang value='ru'>Скачать:</Lang>
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