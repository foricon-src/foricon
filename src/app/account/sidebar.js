'use client';

import { usePathname } from "next/navigation";

export default function Sidebar() {
    let pathname = usePathname();

    function stateActive(path) {
        path && (path = `/${path}`);
        console.log(pathname, `/account${path}`)
        return pathname == `/account${path}` ? 'active' : '';
    }

    return (
        <ul className='btn-list vertical line-active'>
            <li className='red'>
                <f-icon icon='arrow-right-from-bracket' i-s='outline'></f-icon>
                <lang value='en'>Log out</lang>
                <lang value='vi'>Đăng xuất</lang>
                <lang value='fr'>Se déconnecter</lang>
                <lang value='it'>Esci</lang>
                <lang value='kr'>로그아웃</lang>
                <lang value='ja'>ログアウト</lang>
                <lang value='de'>Ausloggen</lang>
                <lang value='nl'>Uitloggen</lang>
                <lang value='dk'>Log ud</lang>
                <lang value='pt'>Sair</lang>
                <lang value='es'>Finalizar la sesión</lang>
                <lang value='ru'>Выйти</lang>
            </li>
            <li className={`line ${stateActive()}`} onClick={() => go('account')}>
                <f-icon icon='house' i-s='outline'></f-icon>
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
            <li className={stateActive('info')} onClick={() => go('account/info')}>
                <f-icon icon='circle-info' i-s='outline'></f-icon>
                <lang value='en'>Account info</lang>
                <lang value='vi'>Thông tin tài khoản</lang>
                <lang value='fr'>Informations sur le compte</lang>
                <lang value='it'>Informazioni sull&apos;account</lang>
                <lang value='kr'>계정 정보</lang>
                <lang value='ja'>アカウント情報</lang>
                <lang value='de'>Kontoinformationen</lang>
                <lang value='nl'>Rekeninggegevens</lang>
                <lang value='dk'>Kontooplysninger</lang>
                <lang value='pt'>Informações da conta</lang>
                <lang value='es'>Información de la cuenta</lang>
                <lang value='ru'>Информация об аккаунте</lang>
            </li>
            <li className={stateActive('security')} onClick={() => go('account/security')}>
                <f-icon icon='shield' i-s='outline'></f-icon>
                <lang value='en'>Security</lang>
                <lang value='vi'>Bảo mật</lang>
                <lang value='fr'>Sécurité</lang>
                <lang value='it'>Sicurezza</lang>
                <lang value='kr'>보안</lang>
                <lang value='ja'>安全</lang>
                <lang value='de'>Sicherheit</lang>
                <lang value='nl'>Beveiliging</lang>
                <lang value='dk'>Sikkerhed</lang>
                <lang value='pt'>Segurança</lang>
                <lang value='es'>Seguridad</lang>
                <lang value='ru'>Безопасность</lang>
            </li>
            <li className={stateActive('personalization')} onClick={() => go('account/personalization')}>
                <f-icon icon='palette' i-s='outline'></f-icon>
                <lang value='en'>Personalization</lang>
                <lang value='vi'>Cá nhân hóa</lang>
                <lang value='fr'>Personnalisation</lang>
                <lang value='it'>la santità</lang>
                <lang value='kr'>개인화</lang>
                <lang value='ja'>パーソナライゼーション</lang>
                <lang value='de'>Personalisierung</lang>
                <lang value='nl'>Personalisatie</lang>
                <lang value='dk'>Personalisering</lang>
                <lang value='pt'>Personalização</lang>
                <lang value='es'>Personalización</lang>
                <lang value='ru'>Персонализация</lang>
                <span className='badge'>New</span>
            </li>
            <li className={stateActive('package')} onClick={() => go('package')}>
                <f-icon icon='code' i-s='outline'></f-icon><span>Foricon Package</span>
            </li>
        </ul>
    )
}