'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'Pub/foricon-f-2.png';
import { Lang } from './language';
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
                    <Link href='/'>
                        <Lang value='en'>Home</Lang>
                        <Lang value='vi'>Trang chủ</Lang>
                        <Lang value='fr'>Page d&apos;accueil</Lang>
                        <Lang value='it'>Pagina iniziale</Lang>
                        <Lang value='kr'>홈페이지</Lang>
                        <Lang value='ja'>ホームページ</Lang>
                        <Lang value='de'>Startseite</Lang>
                        <Lang value='nl'>Startpagina</Lang>
                        <Lang value='dk'>Hjemmeside</Lang>
                        <Lang value='pt'>Pagina inicial</Lang>
                        <Lang value='es'>Pagina de inicio</Lang>
                        <Lang value='ru'>Дом</Lang>
                    </Link>
                </li>
                <li>
                    <Link href='/search'>
                        <Lang value='en'>Search</Lang>
                        <Lang value='vi'>Tìm kiếm</Lang>
                        <Lang value='fr'>Recherche</Lang>
                        <Lang value='it'>Ricerca</Lang>
                        <Lang value='kr'>찾다</Lang>
                        <Lang value='ja'>検索</Lang>
                        <Lang value='de'>Suchen</Lang>
                        <Lang value='nl'>Zoekopdracht</Lang>
                        <Lang value='dk'>Søg</Lang>
                        <Lang value='pt'>Procurar</Lang>
                        <Lang value='es'>Buscar</Lang>
                        <Lang value='ru'>Поиск</Lang>
                    </Link>
                </li>
                <li>
                    <Link href='/docs'>
                        <Lang value='en'>Docs</Lang>
                        <Lang value='vi'>Tài liệu</Lang>
                        <Lang value='fr'>Documents</Lang>
                        <Lang value='it'>Documenti</Lang>
                        <Lang value='kr'>문서</Lang>
                        <Lang value='ja'>ドキュメント</Lang>
                        <Lang value='de'>Dokumente</Lang>
                        <Lang value='nl'>Documenten</Lang>
                        <Lang value='dk'>Dokumenter</Lang>
                        <Lang value='pt'>Documentos</Lang>
                        <Lang value='es'>Documentos</Lang>
                        <Lang value='ru'>Документы</Lang>
                    </Link>
                </li>
                <li>
                    <Link href='/support'>
                        <Lang value='en'>Support</Lang>
                        <Lang value='vi'>Hỗ trợ</Lang>
                        <Lang value='fr'>Soutien</Lang>
                        <Lang value='it'>Supporto</Lang>
                        <Lang value='kr'>지원하다</Lang>
                        <Lang value='ja'>サポート</Lang>
                        <Lang value='de'>Unterstützung</Lang>
                        <Lang value='nl'>Steun</Lang>
                        <Lang value='dk'>Support</Lang>
                        <Lang value='pt'>Apoiar</Lang>
                        <Lang value='es'>Apoyo</Lang>
                        <Lang value='ru'>Поддерживать</Lang>
                    </Link>
                </li>
            </ul>
            <ul className='btn-list' name='right'>
                <li className='chip bottom' onClick={() => go(router, 'languages')}>
                    <f-icon icon='translate' i-s='outline'></f-icon>
                    <Lang value='en'>Languages</Lang>
                    <Lang value='vi'>Ngôn ngữ</Lang>
                    <Lang value='fr'>Langues</Lang>
                    <Lang value='it'>Le lingue</Lang>
                    <Lang value='kr'>언어</Lang>
                    <Lang value='ja'>言語</Lang>
                    <Lang value='de'>Sprachen</Lang>
                    <Lang value='nl'>Talen</Lang>
                    <Lang value='dk'>Sprog</Lang>
                    <Lang value='pt'>Línguas</Lang>
                    <Lang value='es'>Idiomas</Lang>
                    <Lang value='ru'>Языки</Lang>
                </li>
                <li className={`chip bottom${open ? ' active' : ''}`} onClick={() => setOpen(!open)}>
                    <f-icon icon='bars' i-s='outline'></f-icon>
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
                <li className='chip bottom line' onClick={() => go(router, user ? 'account' : 'login')}>
                    <f-icon icon='arrow-right-to-bracket' i-s='outline'></f-icon>
                    <span/>
                </li>
            </ul>
            <ul className={`btn-list vertical${open ? ' active' : ''}`} name='all'>
                <li>Foricon Plus</li>
                <li className='line'>
                    <Lang value='en'>Home</Lang>
                    <Lang value='vi'>Trang chủ</Lang>
                    <Lang value='fr'>Page d&apos;accueil</Lang>
                    <Lang value='it'>Pagina iniziale</Lang>
                    <Lang value='kr'>홈페이지</Lang>
                    <Lang value='ja'>ホームページ</Lang>
                    <Lang value='de'>Startseite</Lang>
                    <Lang value='nl'>Startpagina</Lang>
                    <Lang value='dk'>Hjemmeside</Lang>
                    <Lang value='pt'>Pagina inicial</Lang>
                    <Lang value='es'>Pagina de inicio</Lang>
                    <Lang value='ru'>Дом</Lang>
                </li>
                <li>
                    <Lang value='en'>Search</Lang>
                    <Lang value='vi'>Tìm kiếm</Lang>
                    <Lang value='fr'>Recherche</Lang>
                    <Lang value='it'>Ricerca</Lang>
                    <Lang value='kr'>찾다</Lang>
                    <Lang value='ja'>検索</Lang>
                    <Lang value='de'>Suchen</Lang>
                    <Lang value='nl'>Zoekopdracht</Lang>
                    <Lang value='dk'>Søg</Lang>
                    <Lang value='pt'>Procurar</Lang>
                    <Lang value='es'>Buscar</Lang>
                    <Lang value='ru'>Поиск</Lang>
                </li>
                <li>
                    <Lang value='en'>Docs</Lang>
                    <Lang value='vi'>Tài liệu</Lang>
                    <Lang value='fr'>Documents</Lang>
                    <Lang value='it'>Documenti</Lang>
                    <Lang value='kr'>문서</Lang>
                    <Lang value='ja'>ドキュメント</Lang>
                    <Lang value='de'>Dokumente</Lang>
                    <Lang value='nl'>Documenten</Lang>
                    <Lang value='dk'>Dokumenter</Lang>
                    <Lang value='pt'>Documentos</Lang>
                    <Lang value='es'>Documentos</Lang>
                    <Lang value='ru'>Документы</Lang>
                </li>
                <li>
                    <Lang value='en'>Support</Lang>
                    <Lang value='vi'>Hỗ trợ</Lang>
                    <Lang value='fr'>Soutien</Lang>
                    <Lang value='it'>Supporto</Lang>
                    <Lang value='kr'>지원하다</Lang>
                    <Lang value='ja'>サポート</Lang>
                    <Lang value='de'>Unterstützung</Lang>
                    <Lang value='nl'>Steun</Lang>
                    <Lang value='dk'>Support</Lang>
                    <Lang value='pt'>Apoiar</Lang>
                    <Lang value='es'>Apoyo</Lang>
                    <Lang value='ru'>Поддерживать</Lang>
                </li>
                <li className='line'>Fotorno</li>
                <li>Hub</li>
                <li>Media</li>
                <li>Music</li>
                <li className='line' name='dark-toggle' onClick={toggleTheme}>
                    <div/>
                    <span>
                        <Lang value='en'>Dark mode</Lang>
                        <Lang value='vi'>Chế độ tối</Lang>
                        <Lang value='fr'>Mode sombre</Lang>
                        <Lang value='it'>Modalità scura</Lang>
                        <Lang value='kr'>다크 모드</Lang>
                        <Lang value='ja'>ダークモード</Lang>
                        <Lang value='de'>Dunkler Modus</Lang>
                        <Lang value='nl'>Donkere modus</Lang>
                        <Lang value='dk'>Mørk tilstand</Lang>
                        <Lang value='pt'>Modo escuro</Lang>
                        <Lang value='es'>Modo oscuro</Lang>
                        <Lang value='ru'>Темный режим</Lang>
                        {' '}<span>(<span class='key'>Ctrl</span> + <span class='key'>B</span>)</span>
                    </span>
                </li>
            </ul>
        </header>
    )
}