'use client';

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Lang } from "Com/language";

export default function Sidebar() {
    let pathname = usePathname();
    let router = useRouter();

    function stateActive(path = '', isIcon) {
        path && (path = `/${path}`);
        return pathname == `/account${path}`
            ? isIcon ? 'solid' : 'active'
            : isIcon ? 'outline' : '';
    }

    return (
        <ul className='btn-list vertical line-active'>
            <li className='red'>
                <f-icon icon='arrow-right-from-bracket' i-s='outline'></f-icon>
                <Lang value='en'>Log out</Lang>
                <Lang value='vi'>Đăng xuất</Lang>
                <Lang value='fr'>Se déconnecter</Lang>
                <Lang value='it'>Esci</Lang>
                <Lang value='kr'>로그아웃</Lang>
                <Lang value='ja'>ログアウト</Lang>
                <Lang value='de'>Ausloggen</Lang>
                <Lang value='nl'>Uitloggen</Lang>
                <Lang value='dk'>Log ud</Lang>
                <Lang value='pt'>Sair</Lang>
                <Lang value='es'>Finalizar la sesión</Lang>
                <Lang value='ru'>Выйти</Lang>
            </li>
            <li className={`line ${stateActive()}`} onClick={() => go(router, 'account')}>
                <f-icon icon='house' i-s={stateActive('', true)}></f-icon>
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
            <li className={stateActive('info')} onClick={() => go(router, 'account/info')}>
                <f-icon icon='circle-info' i-s={stateActive('info', true)}></f-icon>
                <Lang value='en'>Account info</Lang>
                <Lang value='vi'>Thông tin tài khoản</Lang>
                <Lang value='fr'>Informations sur le compte</Lang>
                <Lang value='it'>Informazioni sull&apos;account</Lang>
                <Lang value='kr'>계정 정보</Lang>
                <Lang value='ja'>アカウント情報</Lang>
                <Lang value='de'>Kontoinformationen</Lang>
                <Lang value='nl'>Rekeninggegevens</Lang>
                <Lang value='dk'>Kontooplysninger</Lang>
                <Lang value='pt'>Informações da conta</Lang>
                <Lang value='es'>Información de la cuenta</Lang>
                <Lang value='ru'>Информация об аккаунте</Lang>
            </li>
            <li className={stateActive('security')} onClick={() => go(router, 'account/security')}>
                <f-icon icon='shield' i-s={stateActive('security', true)}></f-icon>
                <Lang value='en'>Security</Lang>
                <Lang value='vi'>Bảo mật</Lang>
                <Lang value='fr'>Sécurité</Lang>
                <Lang value='it'>Sicurezza</Lang>
                <Lang value='kr'>보안</Lang>
                <Lang value='ja'>安全</Lang>
                <Lang value='de'>Sicherheit</Lang>
                <Lang value='nl'>Beveiliging</Lang>
                <Lang value='dk'>Sikkerhed</Lang>
                <Lang value='pt'>Segurança</Lang>
                <Lang value='es'>Seguridad</Lang>
                <Lang value='ru'>Безопасность</Lang>
            </li>
            <li className={stateActive('personalization')} onClick={() => go(router, 'account/personalization')}>
                <f-icon icon='palette' i-s={stateActive('personalization', true)}></f-icon>
                <Lang value='en'>Personalization</Lang>
                <Lang value='vi'>Cá nhân hóa</Lang>
                <Lang value='fr'>Personnalisation</Lang>
                <Lang value='it'>la santità</Lang>
                <Lang value='kr'>개인화</Lang>
                <Lang value='ja'>パーソナライゼーション</Lang>
                <Lang value='de'>Personalisierung</Lang>
                <Lang value='nl'>Personalisatie</Lang>
                <Lang value='dk'>Personalisering</Lang>
                <Lang value='pt'>Personalização</Lang>
                <Lang value='es'>Personalización</Lang>
                <Lang value='ru'>Персонализация</Lang>
                <span className='badge'>New</span>
            </li>
            <li className={stateActive('package')} onClick={() => go(router, 'account/package')}>
                <f-icon icon='code' i-s='outline'></f-icon><span>Foricon Package</span>
            </li>
        </ul>
    )
}