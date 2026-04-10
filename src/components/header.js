'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'Ass/foricon-f-2.png';
import 'Com/utilities';

export default function Header() {
    const [ open, setOpen ] = useState(false);
    return (
        <header className='outer-cornor'>
            <div>
                <Link href='/' name='logo'>
                    <Image src={logo} alt='Foricon logo'/>
                </Link>
                <Link href='/changelog' name='version'>{webData.verFull}</Link>
            </div>
            <ul name='center'>
                <li>
                    <Link href='/'>
                        <lang value='en'>Home</lang>
                        <lang value='vi'>Trang chủ</lang>
                        <lang value='fr'>Page d&apos;accueil</lang>
                        <lang value='it'>Pagina iniziale</lang>
                        <lang value='kr'>홈페이지</lang>
                        <lang value='ja'>ホームページ</lang>
                        <lang value='de'>Startseite</lang>
                        <lang value='nl'>Startpagina</lang>
                        <lang value='dk'>Hjemmeside</lang>
                        <lang value='pt'>Pagina inicial</lang>
                        <lang value='es'>Pagina de inicio</lang>
                        <lang value='ru'>Дом</lang>
                    </Link>
                </li>
                <li>
                    <Link href='/search'>
                        <lang value='en'>Search</lang>
                        <lang value='vi'>Tìm kiếm</lang>
                        <lang value='fr'>Recherche</lang>
                        <lang value='it'>Ricerca</lang>
                        <lang value='kr'>찾다</lang>
                        <lang value='ja'>検索</lang>
                        <lang value='de'>Suchen</lang>
                        <lang value='nl'>Zoekopdracht</lang>
                        <lang value='dk'>Søg</lang>
                        <lang value='pt'>Procurar</lang>
                        <lang value='es'>Buscar</lang>
                        <lang value='ru'>Поиск</lang>
                    </Link>
                </li>
                <li>
                    <Link href='/docs'>
                        <lang value='en'>Docs</lang>
                        <lang value='vi'>Tài liệu</lang>
                        <lang value='fr'>Documents</lang>
                        <lang value='it'>Documenti</lang>
                        <lang value='kr'>문서</lang>
                        <lang value='ja'>ドキュメント</lang>
                        <lang value='de'>Dokumente</lang>
                        <lang value='nl'>Documenten</lang>
                        <lang value='dk'>Dokumenter</lang>
                        <lang value='pt'>Documentos</lang>
                        <lang value='es'>Documentos</lang>
                        <lang value='ru'>Документы</lang>
                    </Link>
                </li>
                <li>
                    <Link href='/support'>
                        <lang value='en'>Support</lang>
                        <lang value='vi'>Hỗ trợ</lang>
                        <lang value='fr'>Soutien</lang>
                        <lang value='it'>Supporto</lang>
                        <lang value='kr'>지원하다</lang>
                        <lang value='ja'>サポート</lang>
                        <lang value='de'>Unterstützung</lang>
                        <lang value='nl'>Steun</lang>
                        <lang value='dk'>Support</lang>
                        <lang value='pt'>Apoiar</lang>
                        <lang value='es'>Apoyo</lang>
                        <lang value='ru'>Поддерживать</lang>
                    </Link>
                </li>
            </ul>
            <ul className='btn-list' name='right'>
                <li className='chip bottom'>
                    <f-icon icon='translate' i-s='outline'></f-icon>
                    <lang value='en'>Languages</lang>
                    <lang value='vi'>Ngôn ngữ</lang>
                    <lang value='fr'>Langues</lang>
                    <lang value='it'>Le lingue</lang>
                    <lang value='kr'>언어</lang>
                    <lang value='ja'>言語</lang>
                    <lang value='de'>Sprachen</lang>
                    <lang value='nl'>Talen</lang>
                    <lang value='dk'>Sprog</lang>
                    <lang value='pt'>Línguas</lang>
                    <lang value='es'>Idiomas</lang>
                    <lang value='ru'>Языки</lang>
                </li>
                <li className={`chip bottom${open ? ' active' : ''}`} onClick={() => setOpen(!open)}>
                    <f-icon icon='bars' i-s='outline'></f-icon>
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
                <li className='chip bottom line'>
                    <f-icon icon='arrow-right-to-bracket' i-s='outline'></f-icon>
                    <span/>
                </li>
            </ul>
            <ul className={`btn-list vertical${open ? ' active' : ''}`} name='all'>
                <li>Foricon Plus</li>
                <li className='line'>
                    <lang value='en'>Home</lang>
                    <lang value='vi'>Trang chủ</lang>
                    <lang value='fr'>Page d&apos;accueil</lang>
                    <lang value='it'>Pagina iniziale</lang>
                    <lang value='kr'>홈페이지</lang>
                    <lang value='ja'>ホームページ</lang>
                    <lang value='de'>Startseite</lang>
                    <lang value='nl'>Startpagina</lang>
                    <lang value='dk'>Hjemmeside</lang>
                    <lang value='pt'>Pagina inicial</lang>
                    <lang value='es'>Pagina de inicio</lang>
                    <lang value='ru'>Дом</lang>
                </li>
                <li>
                    <lang value='en'>Search</lang>
                    <lang value='vi'>Tìm kiếm</lang>
                    <lang value='fr'>Recherche</lang>
                    <lang value='it'>Ricerca</lang>
                    <lang value='kr'>찾다</lang>
                    <lang value='ja'>検索</lang>
                    <lang value='de'>Suchen</lang>
                    <lang value='nl'>Zoekopdracht</lang>
                    <lang value='dk'>Søg</lang>
                    <lang value='pt'>Procurar</lang>
                    <lang value='es'>Buscar</lang>
                    <lang value='ru'>Поиск</lang>
                </li>
                <li>
                    <lang value='en'>Docs</lang>
                    <lang value='vi'>Tài liệu</lang>
                    <lang value='fr'>Documents</lang>
                    <lang value='it'>Documenti</lang>
                    <lang value='kr'>문서</lang>
                    <lang value='ja'>ドキュメント</lang>
                    <lang value='de'>Dokumente</lang>
                    <lang value='nl'>Documenten</lang>
                    <lang value='dk'>Dokumenter</lang>
                    <lang value='pt'>Documentos</lang>
                    <lang value='es'>Documentos</lang>
                    <lang value='ru'>Документы</lang>
                </li>
                <li>
                    <lang value='en'>Support</lang>
                    <lang value='vi'>Hỗ trợ</lang>
                    <lang value='fr'>Soutien</lang>
                    <lang value='it'>Supporto</lang>
                    <lang value='kr'>지원하다</lang>
                    <lang value='ja'>サポート</lang>
                    <lang value='de'>Unterstützung</lang>
                    <lang value='nl'>Steun</lang>
                    <lang value='dk'>Support</lang>
                    <lang value='pt'>Apoiar</lang>
                    <lang value='es'>Apoyo</lang>
                    <lang value='ru'>Поддерживать</lang>
                </li>
                <li className='line'>Fotorno</li>
                <li>Hub</li>
                <li>Media</li>
                <li>Music</li>
                <li className='line' name='dark-toggle' onClick={toggleTheme}>
                    <div/>
                    <span>
                        <lang value='en'>Dark mode</lang>
                        <lang value='vi'>Chế độ tối</lang>
                        <lang value='fr'>Mode sombre</lang>
                        <lang value='it'>Modalità scura</lang>
                        <lang value='kr'>다크 모드</lang>
                        <lang value='ja'>ダークモード</lang>
                        <lang value='de'>Dunkler Modus</lang>
                        <lang value='nl'>Donkere modus</lang>
                        <lang value='dk'>Mørk tilstand</lang>
                        <lang value='pt'>Modo escuro</lang>
                        <lang value='es'>Modo oscuro</lang>
                        <lang value='ru'>Темный режим</lang>
                        {' '}<span>(<span class='key'>Ctrl</span> + <span class='key'>B</span>)</span>
                    </span>
                </li>
            </ul>
        </header>
    )
}