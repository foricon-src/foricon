'use client';

import { useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LanguageContext } from 'Com/language';
import { UserContext } from 'Com/user';
import { ThemeContext } from 'Com/theme';
import Img from 'Com/img';
import Go from './go';
import logo from 'Pub/foricon-f-logo.png';
import 'Com/utils';

export default function Header() {
    let [ open, setOpen ] = useState(false);
    let pathname = usePathname();
    let router = useRouter();
    let lang = useContext(LanguageContext);
    let { isDark, setIsDark } = useContext(ThemeContext);
    let user = useContext(UserContext);

    useEffect(() => {
        addEvLis(document, 'click', ({ target }) =>
            ![
                qSelec('header > ul[name="right"] > :has(f-icon[icon="bars"])'),
                qSelec('header > ul[name="all"]')
            ].some(i => i?.contains(target)) && setOpen(false)
        )

        qSelecA('header > center > a')?.forEach(each => each.pathname == pathname ? activate(each) : inactivate(each));
    }, [])

    return (
        <header className='outer-corner'>
            <div>
                <Link href='/' name='logo'>
                    <Img src={logo} alt='Foricon logo'/>
                </Link>
                <Link href='/changelog' name='version'>{webData.verFull}</Link>
            </div>
            <ul name='center'>{
                [
                    {
                        path: '/',
                        en: 'Home',
                        vi: 'Trang chủ',
                        fr: 'Page d\'accueil',
                        it: 'Pagina iniziale',
                        kr: '홈페이지',
                        ja: 'ホームページ',
                        de: 'Startseite',
                        nl: 'Startpagina',
                        dk: 'Hjemmeside',
                        pt: 'Pagina inicial',
                        es: 'Pagina de inicio',
                        ru: 'Дом',
                    }, {
                        path: '/search',
                        en: 'Search',
                        vi: 'Tìm kiếm',
                        fr: 'Recherche',
                        it: 'Ricerca',
                        kr: '찾다',
                        ja: '検索',
                        de: 'Suchen',
                        nl: 'Zoekopdracht',
                        dk: 'Søg',
                        pt: 'Procurar',
                        es: 'Buscar',
                        ru: 'Поиск',
                    }, {
                        path: '/docs',
                        en: 'Docs',
                        vi: 'Tài liệu',
                        fr: 'Documents',
                        it: 'Documenti',
                        kr: '문서',
                        ja: 'ドキュメント',
                        de: 'Dokumente',
                        nl: 'Documenten',
                        dk: 'Dokumenter',
                        pt: 'Documentos',
                        es: 'Documentos',
                        ru: 'Документы',
                    }, {
                        path: '/support',
                        en: 'Support',
                        vi: 'Hỗ trợ',
                        fr: 'Soutien',
                        it: 'Supporto',
                        kr: '지원하다',
                        ja: 'サポート',
                        de: 'Unterstützung',
                        nl: 'Steun',
                        dk: 'Support',
                        pt: 'Apoiar',
                        es: 'Apoyo',
                        ru: 'Поддерживать',
                    }
                ].map(({ path, ...texts }) =>
                    <li key={path}>
                        <Link href={path} className={pathname == path && 'active'}>{texts[lang]}</Link>
                    </li>
                )
            }</ul>
            <ul className='btn-list' name='right'>
                <li className={`chip bottom${pathname == '/languages' ? ' active' : ''}`} onClick={() => Go('languages')}>
                    <f-icon icon='translate' i-s='outline'></f-icon>
                    <span>{
                        {
                            en: 'Languages',
                            vi: 'Ngôn ngữ',
                            fr: 'Langues',
                            it: 'Le lingue',
                            kr: '언어',
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
                <li className={`chip bottom${open ? ' active' : ''}`} onClick={() => setOpen(!open)}>
                    <f-icon icon='bars' i-s='outline'></f-icon>
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
                <li className={`chip bottom line${pathname.startsWith('/account') ? ' active' : ''}`} onClick={() => Go(user ? 'account' : 'login')}>
                    {user ? <img src={user.doc.avatar}/> : <f-icon icon='arrow-right-to-bracket' i-s='outline'></f-icon>}
                    <span>{
                        user ? user.doc.name : {
                            en: 'Log in',
                            vi: 'Đăng nhập',
                            fr: 'Se connecter',
                            it: 'Login',
                            kr: '로그인',
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
            </ul>
            <ul className={`btn-list vertical${open ? ' active' : ''}`} name='all'>
                <li>Foricon Plus</li>
                <li className='line'>{
                    {
                        en: 'Home',
                        vi: 'Trang chủ',
                        fr: 'Page d\'accueil',
                        it: 'Pagina iniziale',
                        kr: '홈페이지',
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
                        kr: '찾다',
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
                        kr: '문서',
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
                        kr: '지원하다',
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
                <li>Media</li>
                <li>Music</li>
                <li className={`line${isDark ? ' active' : ''}`} name='dark-toggle' onClick={() => setIsDark(!isDark)}>
                    <div/>
                    <span dangerouslySetInnerHTML={{
                        __html: `${{
                            en: 'Dark mode',
                            vi: 'Chế độ tối',
                            fr: 'Mode sombre',
                            it: 'Modalità scura',
                            kr: '다크 모드',
                            ja: 'ダークモード',
                            de: 'Dunkler Modus',
                            nl: 'Donkere modus',
                            dk: 'Mørk tilstand',
                            pt: 'Modo escuro',
                            es: 'Modo oscuro',
                            ru: 'Темный режим',
                        }[lang]} <span>(<span class='key'>Ctrl</span> + <span class='key'>B</span>)</span>`
                    }}/>
                </li>
            </ul>
        </header>
    )
}