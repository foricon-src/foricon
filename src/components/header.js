'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'Pub/foricon-f-2.png';
import { useLang } from 'Com/language';
import 'Com/utils';

export default function Header() {
    let [ open, setOpen ] = useState(false);
    let router = useRouter();

    return (
        <header className='outer-corner'>
            <div>
                <Link href='/' name='logo'>
                    <Image src={logo} alt='Foricon logo'/>
                </Link>
                <Link href='/changelog' name='version'>{webData.verFull}</Link>
            </div>
            <ul name='center'>
                <li>
                    <Link href='/'>{
                        useLang({
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
                        })
                    }</Link>
                </li>
                <li>
                    <Link href='/search'>{
                        useLang({
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
                        })
                    }</Link>
                </li>
                <li>
                    <Link href='/docs'>{
                        useLang({
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
                        })
                    }</Link>
                </li>
                <li>
                    <Link href='/support'>{
                        useLang({
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
                        })
                    }</Link>
                </li>
            </ul>
            <ul className='btn-list' name='right'>
                <li className='chip bottom' onClick={() => go(router, 'languages')}>
                    <f-icon icon='translate' i-s='outline'></f-icon>
                    <span>{
                        useLang({
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
                        })
                    }</span>
                </li>
                <li className={`chip bottom${open ? ' active' : ''}`} onClick={() => setOpen(!open)}>
                    <f-icon icon='bars' i-s='outline'></f-icon>
                    <span>{
                        useLang({
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
                    }</span>
                </li>
                <li className='chip bottom line' onClick={() => go(router, user ? 'account' : 'login')}>
                    <f-icon icon='arrow-right-to-bracket' i-s='outline'></f-icon>
                    <span/>
                </li>
            </ul>
            <ul className={`btn-list vertical${open ? ' active' : ''}`} name='all'>
                <li>Foricon Plus</li>
                <li className='line'>{
                    useLang({
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
                    })
                }</li>
                <li>{
                    useLang({
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
                    })
                }</li>
                <li>{
                    useLang({
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
                    })
                }</li>
                <li>{
                    useLang({
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
                    })
                }</li>
                <li className='line'>Fotorno</li>
                <li>Hub</li>
                <li>Media</li>
                <li>Music</li>
                <li className='line' name='dark-toggle' onClick={toggleTheme}>
                    <div/>
                    <span dangerouslySetInnerHTML={{
                        __html: `${useLang({
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
                        })} <span>(<span class='key'>Ctrl</span> + <span class='key'>B</span>)</span>`
                    }}/>
                </li>
            </ul>
        </header>
    )
}