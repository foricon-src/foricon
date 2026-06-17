'use client';

import { useEffect, useState, useMemo, useContext, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Ad } from 'Com/ad';
import GetFamilyAndStyle from 'Com/get-family-n-style';
import { LanguageContext } from 'Com/language';
import { UserContext } from 'Com/user';
import { IconContext } from 'Com/icons';
import { Capital, Lower, Similarity } from 'Com/string-tools';
import Code from 'Com/code';
import Search from 'Com/search';
import Join from 'Com/join';
import useGo from 'Com/go';
import cssStyle from './page.module.css';
import { input } from 'framer-motion/client';

export default function PageClient() {
    let router = useRouter();
    let go = useGo();
    let lang = useContext(LanguageContext);
    let searchParams = useSearchParams();
    let user = useContext(UserContext);
    let iconSet = useContext(IconContext);

    let [ type, setType ] = useState('');
    
    let topRef = useRef();
    let inputRef = useRef();
    let fSelectRef = useRef();
    
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

    let [ inSaved, setInSaved ] = useState(false);
    let [ view, setView ] = useState(localStorage.getItem('view') || 'large');
    let [ sortOpt, setSortOpt ] = useState('ascending');
    let [ searchSortOpt, setSearchSortOpt ] = useState('bestMatch');

    let [ search, setSearch ] = useState(initial.search);
    let [ family, setFamily ] = useState(initial.family);
    let [ style, setStyle ] = useState(initial.style);
    let [ selectedCategories, selectCategories ] = useState(initial.categories);
    let [ version, setVersion ] = useState(initial.version);

    let [ page, setPage ] = useState(0);
    let [ tick, setTick ] = useState(0);

    let [ selectedIcon, selectIcon ] = useState(null);
    let [ width, setWidth ] = useState(innerWidth);

    let filtered = useMemo(() => {
        if (!iconSet) return [];
        
        let icons = iconSet[version];
    
        return icons
            .sort(({ name: a }, { name: b }) => {
                let value = search ? searchSortOpt : sortOpt;
                let [ x, y ] = value == 'descending' ? [ b, a ] : [ a, b ];
                return value == 'bestMatch'
                    ? Similarity(b, search) - Similarity(a, search)
                    : x.localeCompare(y)
            })
            .filter(({ name, categories }) => {
                let normalized = Lower(name).replace(/[+-]/g, ' ');
                return (
                    (
                        normalized.includes(search) || Similarity(normalized, search) > 0.65
                    ) && (
                        !selectedCategories.length || selectedCategories.every(c => categories.includes(c))
                    )
                ) && (!inSaved || user.doc.savedIcons.some(i => i.name == name))
            })
            .flatMap(icon => {
                return (
                    family == 'all' && style == 'all' ? icon.styles :
                    family == 'all' ? [ '', 'duotone/', 'sharp/' ].map(i => `${i}${style}`) :
                    style == 'all' ? [ 'solid', 'outline' ].map(
                        i => `${family == 'regular' ? '' : `${family}/`}${i}`
                    ) :
                    [ `${family == 'regular' ? '' : `${family}/`}${style}` ]
                ).filter(i => icon.styles.includes(i)).map(style => ({ icon, style }))
            })
    }, [
        user,
        search, family, style, selectedCategories, version,
        inSaved, sortOpt, searchSortOpt,
    ])
    let columns = useMemo(
        () => iconSet ? getComputedStyle(qSelec(`.${cssStyle.results}`)).gridTemplateColumns.split(' ').length : 1
        [ width, tick ]
    )
    let perPage = useMemo(() => {
        let rows = Math.floor(
            (view == 'large' ? 150 : view == 'small' ? 300 : 160) / columns
        )
        return columns * rows;
    }, [ columns ])
    let currentPage = Math.min(Math.floor(filtered.length / perPage), page);
    let currentIcons = useMemo(() => {
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

    let sortOpts = {
        ascending: {
            icon: {
                name: 'arrow-down-a-z',
                isOutline: true,
            },
            en: 'Ascending',
            vi: 'Tăng dần',
            fr: 'Ascendant',
            it: 'Ascendente',
            kr: '상승',
            ja: '上昇',
            de: 'Aufsteigend',
            nl: 'Stijgend',
            dk: 'Stigende',
            pt: 'Ascendente',
            es: 'Ascendente',
            ru: 'Восходящий',
        },
        descending: {
            icon: {
                name: 'arrow-down-z-a',
                isOutline: true,
            },
            en: 'Descending',
            vi: 'Giảm dần',
            fr: 'Descendant',
            it: 'Discendente',
            kr: '하강',
            ja: '下降',
            de: 'Absteigend',
            nl: 'Dalend',
            dk: 'Faldende',
            pt: 'Descendente',
            es: 'Descendente',
            ru: 'нисходящий',
        },
        bestMatch: {
            icon: { name: 'sparkle' },
            en: 'Best match',
            vi: 'Phù hợp nhất',
            fr: 'Meilleure correspondance',
            it: 'Miglior abbinamento',
            kr: '최적의 매치',
            ja: 'ベストマッチ',
            de: 'Beste Übereinstimmung',
            nl: 'Beste match',
            dk: 'Bedste match',
            pt: 'Melhor combinação',
            es: 'Mejor coincidencia',
            ru: 'Лучший матч',
        },
    }
    let viewOpts = [
        {
            icon: 'grid-4',
            value: 'large',

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
        },
        {
            icon: 'grid-9',
            value: 'small',
            
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
        },
        {
            icon: 'list',
            value: 'tiles',
            
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
        }
    ].map(({ icon, value, ...texts }) =>
        <li
            key={value}
            className={Join(' ', width > 900 && 'chip top', view == value && 'active')}
            onClick={() => setView(value)}
        >
            <f-icon icon={icon} i-s={icon == 'list' && 'outline'}></f-icon>
            <span>{texts[lang]}</span>
        </li>
    )
    
    function updateTick() {
        setTick(tick + 1);
    }
    function formatKeyword(value, reversed) {
        return value.replaceAll(...(reversed ? [ '+', ' ' ] : [ ' ', '+' ]));
    }
    function check() {
        setWidth(innerWidth);
    }
    function dynamic(dropdown, values, variable, func) {
        return width > 900
            ? <>
                <li className={Join(' ', variable == 'all' && 'active', width < 1100 && 'chip top')} onClick={() => func('all')}>
                    {width < 1100 && <f-icon icon='empty-set' i-s='outline'/>}
                    <span>{
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
                    }</span>
                </li>
                {
                    values.map(({ icon: { name, style }, value }) => {
                        return <li key={value} className={Join(' ', variable == value && 'active', width < 1100 && 'chip top')} onClick={() => func(value)}>
                            {width < 1100 && <f-icon icon={name} i-s={style}/>}
                            <span>{Capital(value)}</span>
                        </li>
                    })
                }
            </>
            : <li>
                <f-icon icon={dropdown.icon}/>
                <span>{dropdown.title}</span>
                <ul className='btn-list vertical'>
                    <li className={variable == 'all' && 'active'} onClick={() => func('all')}>
                        {width < 1100 && <f-icon icon='empty-set' i-s='outline'/>}
                        <span>{
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
                        }</span>
                    </li>
                    {
                        values.map(({ icon: { name, style }, value }) => {
                            return <li key={value} className={variable == value && 'active'} onClick={() => func(value)}>
                                <f-icon icon={name} i-s={style}/>
                                <span>{Capital(value)}</span>
                            </li>
                        })
                    }
                </ul>
            </li>
    }
    
    useEffect(() => {(async () => {
        let top = topRef.current;
        let { offsetTop, offsetHeight } = top;
        let fSelect = fSelectRef.current;
        fSelect.setValue(version);
        setLoaded(true);

        check();
        
        addEvLis(window, 'resize', check);
        addEvLis(document, 'scroll',
            () => window.scrollY >= offsetTop + offsetHeight - 18 ? activate(top) : deactivate(top)
        )

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
    useEffect(() => {
        let manager = evLisMan(
            document,
            'keyup',
            ({ key }) => key == '/' && inputRef.current.focus({ preventScroll: true }),
            true,
        )
        return () => manager.remv();
    }, [])
    useEffect(() => { localStorage.setItem('view', view) }, [ view ]);
    useEffect(() => {(async () => {
        await wait();
        updateTick();
    })()}, [ view ])
    useEffect(() => { globalThis[user ? 'enable' : 'disable'](elemById('save')) }, [ user ]);
    useEffect(() => {
        if (!selectedIcon) return;
        let { f, s } = GetFamilyAndStyle(selectedIcon.style);
        router.prefetch(`icon/${f}/${s}/${selectedIcon.name}`);
    }, [ selectedIcon ])

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
                        {selectedIcon?.style.startsWith('duotone-') && <label>
                            <input type='checkbox' value='sec'/><div className='checkmark'></div>Secondary
                        </label>}
                    </div>
                    <div>
                        <button className='secondary'>{
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
                        }</button>
                        <button className='primary'>{
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
                        }</button>
                    </div>
                </div>
            </div>
            {!user && <div className='banner blue'>
                {
                    {
                        en: 'Enjoy free icons - sign up to access the entire set!',
                        vi: 'Tận hưởng các biểu tượng miễn phí - đăng ký để truy cập toàn bộ bộ sưu tập',
                        fr: "Profitez d'icônes gratuites - inscrivez-vous pour accéder à l'ensemble complet !",
                        it: "Approfitta delle icone gratuite: registrati per accedere all'intero set!",
                        kr: '무료 아이콘을 즐겨보세요! 가입하시면 전체 아이콘을 이용하실 수 있습니다!',
                        ja: '無料アイコンをお楽しみください！登録すると全セットにアクセスできます！',
                        de: 'Sichern Sie sich kostenlose Icons - melden Sie sich an, um Zugriff auf das gesamte Set zu erhalten!',
                        nl: 'Geniet van gratis iconen - meld je aan om toegang te krijgen tot de volledige set!',
                        dk: 'Nyd gratis ikoner - tilmeld dig for at få adgang til hele sættet!',
                        pt: '¡Disfruta de iconos gratuitos! Regístrate para acceder al conjunto completo.',
                        es: 'Desfrute de ícones gratuitos - registe-se para aceder ao conjunto completo!',
                        ru: 'Наслаждайтесь бесплатными иконками — зарегистрируйтесь, чтобы получить доступ ко всему набору!',
                    }[lang]
                }
                <a href='/signup' className='btn'>{
                    {
                        en: 'Sign up',
                        vi: 'Đăng ký',
                        fr: "S'inscrire",
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
            </div>}
            <div ref={topRef} className={`outer-corner ${cssStyle.top}`}>
                <Search ref={inputRef} value={search} onInput={e => setSearch(e.currentTarget.value)} placeholder={
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
                <f-select ref={fSelectRef}>
                    <text></text>
                    <option-list>
                        <f-option value='b2'>Beta 2+</f-option>
                        <f-option value='b1'>Beta 1.7.5</f-option>
                    </option-list>
                </f-select>
                <div className={cssStyle.options}>
                    <ul className='btn-list line-active'>{
                        dynamic(
                            {
                                icon: 'folders',
                                title: {
                                    en: 'Families',
                                    vi: 'Bộ biểu tượng',
                                    fr: 'Familles',
                                    it: 'Famiglie',
                                    kr: '아이콘 세트',
                                    ja: 'アイコンセット',
                                    de: 'Familien',
                                    nl: 'Families',
                                    dk: 'Familier',
                                    pt: 'Famílias',
                                    es: 'Familias',
                                    ru: 'Семейства',
                                }[lang],
                            },
                            [
                                {
                                    icon: { name: 'square' },
                                    value: 'regular',
                                },
                                {
                                    icon: { name: 'clone', style: 'duotone/solid' },
                                    value: 'duotone',
                                },
                            ],
                            family, setFamily
                        )
                    }</ul>
                    <ul className='btn-list line line-active'>{
                        dynamic(
                            {
                                icon: 'brush',
                                title: {
                                    en: 'Styles',
                                    vi: 'Kiểu',
                                    fr: 'Styles',
                                    it: 'Stili',
                                    kr: '스타일',
                                    ja: 'スタイル',
                                    de: 'Stile',
                                    nl: 'Stijlen',
                                    dk: 'Stilarter',
                                    pt: 'Estilos',
                                    es: 'Estilos',
                                    ru: 'Стили',
                                }[lang],
                            },
                            [
                                {
                                    icon: { name: 'circle' },
                                    value: 'solid',
                                },
                                {
                                    icon: { name: 'bars', style: 'outline' },
                                    value: 'outline',
                                },
                            ],
                            style, setStyle
                        )
                    }</ul>
                    <ul className='btn-list'>
                        <li className={`chip top`}>
                            <f-icon icon='palette'/>
                            <span>{
                                {
                                    en: 'Add colors',
                                    vi: 'Thêm màu',
                                    fr: 'Ajouter des couleurs',
                                    it: 'Aggiungi i colori',
                                    kr: '색상을 추가하세요',
                                    ja: '色を加える',
                                    de: 'Füge Farben hinzu',
                                    nl: 'Voeg kleuren toe',
                                    dk: 'Tilføj farver',
                                    pt: 'Adicionar cores',
                                    es: 'Añade colores',
                                    ru: 'Добавить цвета',
                                }[lang]
                            }</span>
                        </li>
                        <li className={`chip top`}>
                            <f-icon
                                icon={sortOpts[search ? searchSortOpt : sortOpt].icon.name}
                                i-s={sortOpts[search ? searchSortOpt : sortOpt].icon.isOutline && 'outline'}
                            />
                            <span>{
                                {
                                    en: 'Sort',
                                    vi: 'Sắp xếp',
                                    fr: 'Trier',
                                    it: 'Ordinare',
                                    kr: '종류',
                                    ja: '選別',
                                    de: 'Sortieren',
                                    nl: 'Soort',
                                    dk: 'Sortere',
                                    pt: 'Ordenar',
                                    es: 'Clasificar',
                                    ru: 'Сортировка',
                                }[lang]
                            }</span>
                            <ul className='btn-list vertical'>{
                                Object.keys(sortOpts).slice(0, search ? 3 : 2).map(i => {
                                    let { icon, ...texts } = sortOpts[i];
                                    return <li
                                        key={i}
                                        className={(search ? searchSortOpt : sortOpt) == i && 'active'}
                                        onClick={() => search ? setSearchSortOpt(i) : setSortOpt(i)}
                                    >
                                        <f-icon icon={icon.name} i-s={icon.isOutline && 'outline'}/>
                                        <span>{texts[lang]}</span>
                                    </li>
                                })
                            }</ul>
                        </li>
                        <li
                            id='save'
                            className={`chip top${inSaved ? ' active' : ''}`}
                            onClick={() => setInSaved(!inSaved)}
                        >
                            <f-icon icon='bookmark'/>
                            <span>{
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
                    <ul className='btn-list line line-active'>
                        {width <= 900 ? <li>
                            <f-icon icon='eye'/>
                            <span>{
                                {
                                    en: 'Views',
                                    vi: 'Chế độ xem',
                                    fr: 'Vues',
                                    it: 'Visualizzazioni',
                                    kr: '보기',
                                    ja: '表示',
                                    de: 'Ansichten',
                                    nl: 'Weergaven',
                                    dk: 'Visninger',
                                    pt: 'Visualizações',
                                    es: 'Vistas',
                                    ru: 'Виды',
                                }[lang]
                            }</span>
                            <ul className='btn-list vertical'>{viewOpts}</ul>
                        </li> : viewOpts}
                        <li className='chip top line'>
                            <f-icon icon='gear'></f-icon>
                            <span>{
                                {
                                    en: 'Settings',
                                    vi: 'Cài đặt',
                                    fr: 'Paramètres',
                                    it: 'Impostazioni',
                                    kr: '설정',
                                    ja: '設定',
                                    de: 'Einstellungen',
                                    nl: 'Instellingen',
                                    dk: 'Indstillinger',
                                    pt: 'Configurações',
                                    es: 'Ajustes',
                                    ru: 'Настройки',
                                }[lang]
                            }</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cssStyle.main}>
                <h5 onClick={({ currentTarget }) => isActive(currentTarget) ? deactivate(currentTarget) : activate(currentTarget)}>{
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
                <div className={`${cssStyle.categories} ${cssStyle.scrollBottom}`}>
                    <ul className='btn-list vertical' onScroll={({ currentTarget }) => {
                        let { scrollTop, scrollHeight, clientHeight, parentNode } = currentTarget;
                        parentNode.classList[scrollTop == 0 ? 'remove' : 'add'](cssStyle.scrollTop);
                        parentNode.classList[scrollTop + clientHeight == scrollHeight ? 'remove' : 'add'](cssStyle.scrollBottom);
                    }}>{
                        Object.entries(categoryCounts)
                            .filter(([ key, { count } ]) => selectedCategories.includes(key) || count > 0)
                            .sort(([ , a ], [ , b ]) => a[lang].localeCompare(b[lang]))
                            .map(([ key, { icon, count, ...texts } ]) => (
                                <li key={key} className={selectedCategories.includes(key) && 'active'} onClick={() => {
                                    let arr = [ ...selectedCategories ];
                                    let i = arr.indexOf(key);
                                    i < 0 ? arr.push(key) : arr.splice(i, 1);
                                    selectCategories(arr);
                                }}>
                                    <span key={key} dangerouslySetInnerHTML={{
                                        __html: icon + texts[lang]
                                    }}/>
                                    <span>{count || 0}</span>
                                </li>
                            ))
                    }</ul>
                </div>
                <div className={cssStyle.results}>
                    <ul className={`${cssStyle.grid} ${cssStyle[view]}`}>{
                        currentIcons.map(({ icon, style }) => (
                            <li
                                key={`${icon.name} | ${style}`}
                                className={icon.name == selectedIcon?.name && style == selectedIcon?.style && 'active'}
                                onClick={async () => {
                                    let replaced = style.replace('/', '-');
                                    await wait(.2);
                                    selectIcon({
                                        name: icon.name,
                                        style,
                                        glyphs: icon.glyphs[replaced],
                                        unicodes: icon.unicodes[replaced].split('|'),
                                        categories: icon.categories,
                                    })
                                }
                            }>
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
                        (() => {
                            let length = Math.ceil(filtered.length / perPage);
                            let arr = Array.from({ length }).map((_, i) => (
                                <li key={i} onClick={() => setPage(i)} className={currentPage == i && 'active'}>{i + 1}</li>
                            ))
                            let limited = Math.min(Math.max(2, page), length - 3);

                            return [
                                page > 0 && <li key='prev' onClick={() => setPage(page - 1)}>
                                    <f-icon icon='chevron-left-small' i-s='outline'/>
                                    <span>{
                                        {
                                            en: 'Prev',
                                            vi: 'Trước',
                                            fr: 'Précédent',
                                            it: 'Precedente',
                                            kr: '이전의',
                                            ja: '前の',
                                            de: 'Vorherige',
                                            nl: 'Vorig',
                                            dk: 'Tidligere',
                                            pt: 'Anterior',
                                            es: 'Previo',
                                            ru: 'Предыдущий',
                                        }[lang]
                                    }</span>
                                </li>,
                                ...(arr.length > 5 ? [
                                    arr[0],
                                    limited > 2 && <li key='dots1' style={{ pointerEvents: 'none' }}>...</li>,
                                    ...arr.slice(limited - 1, limited + 2),
                                    limited < length - 3 && <li key='dots2' style={{ pointerEvents: 'none' }}>...</li>,
                                    arr[length - 1],
                                ] : arr),
                                page < length - 1 && <li key='next' onClick={() => setPage(page + 1)}>
                                    <span>{
                                        {
                                            en: 'Next',
                                            vi: 'Sau',
                                            fr: 'Suivant',
                                            it: 'Prossimo',
                                            kr: '다음',
                                            ja: '次',
                                            de: 'Nächste',
                                            nl: 'Volgende',
                                            dk: 'Næste',
                                            pt: 'Seguinte',
                                            es: 'Próximo',
                                            ru: 'Следующий',
                                        }[lang]
                                    }</span>
                                    <f-icon icon='chevron-right-small' i-s='outline'/>
                                </li>
                            ]
                        })()
                    }</ul>
                </div>
            </div>
            <div className={cssStyle.bar + (selectedIcon ? ' active' : '')}>
                <div>
                    <h6>{selectedIcon?.name}</h6>
                    <span>
                        <f-icon icon='bookmark' i-s='outline'/>
                        {
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
                        }
                    </span>
                    <span onClick={({ ctrlKey }) => {
                        let { f, s } = GetFamilyAndStyle(selectedIcon.style)
                        go(`icon/${f}/${s}/${selectedIcon.name}`, ctrlKey && 'new tab');
                    }}>
                        <f-icon icon='arrow-up-right-from-square-2' i-s='outline'/>
                        {
                            {
                                en: 'More details',
                                vi: 'Thêm chi tiết',
                                fr: 'Plus de détails',
                                it: 'Maggiori dettagli',
                                kr: '자세한 내용',
                                ja: '詳細はこちら',
                                de: 'Weitere Details',
                                nl: 'Meer details',
                                dk: 'Flere detaljer',
                                pt: 'Mais detalhes',
                                es: 'Más detalles',
                                ru: 'Более подробная информация',
                            }[lang]
                        }
                    </span>
                </div>
                <div className={cssStyle.code}>
                    <span>
                        {
                            `${
                                    {
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
                                }[lang]
                            } `
                        }
                        <f-icon icon='circle-info' onClick={() => notify('info', 'key(Ctrl) + bold(Click) to copy the code')}></f-icon>:
                    </span>
                    <Code nameless={true}>{
                        `<f-icon icon='${selectedIcon?.name}'${
                            [
                                '',
                                selectedIcon?.style != 'solid' && `i-s='${selectedIcon?.style}'`,
                                version == 'b1' && 'b1',
                            ].filter(i => typeof i == 'string').join(' ')
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
                            let { icon, ...texts } = webData.categories[category];
                            return <li key={category} dangerouslySetInnerHTML={{
                                __html: `${icon}<span>${texts[lang]}</span>`,
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
                        [ 'SVG', 'PNG', 'WebP' ].map(i =>
                            <li key={i} onClick={() => {
                                setType(i);
                                modal(elemById('choose-layers'), null, null, true);
                            }}>{i}</li>
                        )
                    }</ul>
                </div>
            </div>
        </>
    )
}