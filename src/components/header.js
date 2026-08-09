'use client';

import { useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import FLink from 'Com/link';
import { LanguageContext } from 'Com/language';
import { UserContext } from 'Com/user';
import { ThemeContext } from 'Com/theme';
import Img from 'Com/img';
import useGo from './go';
import logo from 'Pub/foricon-f-logo.png';
import 'Com/utils';
import Join from './join';

export default function Header() {
    let pathname = usePathname();
    let go = useGo();

    let { isDark, setIsDark } = useContext(ThemeContext);
    let user = useContext(UserContext);

    let { lang } = document.documentElement;

    let [ open, setOpen ] = useState(false);

    useEffect(() => {
        addEvLis(document, 'click', ({ target }) =>
            ![
                qSelec('header > ul[name="right"] > :has(f-icon[icon="bars"])'),
                qSelec('header > ul[name="all"]')
            ].some(i => i?.contains(target)) && setOpen(false)
        )
    }, [])

    return (
        <header className='outer-corner'>
            <div>
                <FLink href='/' name='logo'>
                    <Img src={logo} alt='Foricon logo'/>
                </FLink>
                <FLink href='/changelog' name='version'>{webData.verFull}</FLink>
            </div>
            <ul name='center'>{
                [
                    {
                        page: '',
                        en: 'Home',
                        vi: 'Trang chủ',
                        fr: 'Page d\'accueil',
                        it: 'Pagina iniziale',
                        ko: '홈페이지',
                        ja: 'ホームページ',
                        de: 'Startseite',
                        nl: 'Startpagina',
                        dk: 'Hjemmeside',
                        pt: 'Pagina inicial',
                        es: 'Pagina de inicio',
                        ru: 'Дом',
                    }, {
                        page: '/search',
                        en: 'Search',
                        vi: 'Tìm kiếm',
                        fr: 'Recherche',
                        it: 'Ricerca',
                        ko: '찾다',
                        ja: '検索',
                        de: 'Suchen',
                        nl: 'Zoekopdracht',
                        dk: 'Søg',
                        pt: 'Procurar',
                        es: 'Buscar',
                        ru: 'Поиск',
                    }, {
                        page: '/docs',
                        en: 'Docs',
                        vi: 'Tài liệu',
                        fr: 'Documents',
                        it: 'Documenti',
                        ko: '문서',
                        ja: 'ドキュメント',
                        de: 'Dokumente',
                        nl: 'Documenten',
                        dk: 'Dokumenter',
                        pt: 'Documentos',
                        es: 'Documentos',
                        ru: 'Документы',
                    }, {
                        page: '/support',
                        en: 'Support',
                        vi: 'Hỗ trợ',
                        fr: 'Soutien',
                        it: 'Supporto',
                        ko: '지원하다',
                        ja: 'サポート',
                        de: 'Unterstützung',
                        nl: 'Steun',
                        dk: 'Support',
                        pt: 'Apoiar',
                        es: 'Apoyo',
                        ru: 'Поддерживать',
                    }
                ].map(({ page, ...texts }) =>
                    <li key={page}>
                        <FLink href={page || '/'} className={pathname == `/${lang}${page}` && 'active'}>{texts[lang]}</FLink>
                    </li>
                )
            }</ul>
            <ul className='btn-list' name='right'>
                <li className={`tooltip bottom${pathname == '/languages' ? ' active' : ''}`} onClick={() => go('languages')}>
                    <f-icon icon='translate' i-s='outline'></f-icon>
                    <span>{
                        {
                            en: 'Languages',
                            vi: 'Ngôn ngữ',
                            fr: 'Langues',
                            it: 'Le lingue',
                            ko: '언어',
                            ja: '言語',
                            de: 'Sprachen',
                            nl: 'Talen',
                            dk: 'Sprog',
                            pt: 'Línguas',
                            es: 'Idiomas',
                            ru: 'Языки',
                        }[lang]
                    }</span>
                </li>
                <li className={`tooltip bottom${open ? ' active' : ''}`} onClick={() => setOpen(!open)}>
                    <f-icon icon='bars' i-s='outline'></f-icon>
                    <span>{
                        {
                            en: 'All',
                            vi: 'Tất cả',
                            fr: 'Tout',
                            it: 'Tutto',
                            ko: '모두',
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
                    <li
                        className={Join(' ', 'line', user && 'tooltip bottom', (!user || pathname.startsWith('/account')) && 'active')}
                        onClick={() => go(user ? 'account' : 'login')}
                    >
                        {user && <img src={user.doc.avatar}/>}
                        <span>{
                            user?.doc?.name || {
                                en: 'Log in',
                                vi: 'Đăng nhập',
                                fr: 'Se connecter',
                                it: 'Login',
                                ko: '로그인',
                                ja: 'ログイン',
                                de: 'Einloggen',
                                nl: 'Inloggen',
                                dk: 'Log ind',
                                pt: 'Conecte-se',
                                es: 'Acceso',
                                ru: 'Авторизоваться',
                            }[lang]
                        }</span>
                    </li>
                }
            </ul>
            <ul className={`btn-list vertical${open ? ' active' : ''}`} name='all'>
                <li>Foricon Plus</li>
                <li className='line'>{
                    {
                        en: 'Home',
                        vi: 'Trang chủ',
                        fr: 'Page d\'accueil',
                        it: 'Pagina iniziale',
                        ko: '홈페이지',
                        ja: 'ホームページ',
                        de: 'Startseite',
                        nl: 'Startpagina',
                        dk: 'Hjemmeside',
                        pt: 'Pagina inicial',
                        es: 'Pagina de inicio',
                        ru: 'Дом',
                    }[lang]
                }</li>
                <li>{
                    {
                        en: 'Search',
                        vi: 'Tìm kiếm',
                        fr: 'Recherche',
                        it: 'Ricerca',
                        ko: '찾다',
                        ja: '検索',
                        de: 'Suchen',
                        nl: 'Zoekopdracht',
                        dk: 'Søg',
                        pt: 'Procurar',
                        es: 'Buscar',
                        ru: 'Поиск',
                    }[lang]
                }</li>
                <li>{
                    {
                        en: 'Docs',
                        vi: 'Tài liệu',
                        fr: 'Documents',
                        it: 'Documenti',
                        ko: '문서',
                        ja: 'ドキュメント',
                        de: 'Dokumente',
                        nl: 'Documenten',
                        dk: 'Dokumenter',
                        pt: 'Documentos',
                        es: 'Documentos',
                        ru: 'Документы',
                    }[lang]
                }</li>
                <li>{
                    {
                        en: 'Support',
                        vi: 'Hỗ trợ',
                        fr: 'Soutien',
                        it: 'Supporto',
                        ko: '지원하다',
                        ja: 'サポート',
                        de: 'Unterstützung',
                        nl: 'Steun',
                        dk: 'Support',
                        pt: 'Apoiar',
                        es: 'Apoyo',
                        ru: 'Поддерживать',
                    }[lang]
                }</li>
                <li className='line'>Fotorno</li>
                <li>Hub</li>
                <li className={`line${isDark ? ' active' : ''}`} name='dark-toggle' onClick={() => setIsDark(!isDark)}>
                    <div/>
                    <span>
                        {
                            {
                                en: 'Dark mode',
                                vi: 'Chế độ tối',
                                fr: 'Mode sombre',
                                it: 'Modalità scura',
                                ko: '다크 모드',
                                ja: 'ダークモード',
                                de: 'Dunkler Modus',
                                nl: 'Donkere modus',
                                dk: 'Mørk tilstand',
                                pt: 'Modo escuro',
                                es: 'Modo oscuro',
                                ru: 'Темный режим',
                            }[lang]
                        } <span class='key'>Ctrl</span> <span class='key'>B</span>
                    </span>
                </li>
            </ul>
        </header>
    )
}