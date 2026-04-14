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
                <Lang value='en' wrapped>Log out</Lang>
                <Lang value='vi' wrapped>Đăng xuất</Lang>
                <Lang value='fr' wrapped>Se déconnecter</Lang>
                <Lang value='it' wrapped>Esci</Lang>
                <Lang value='kr' wrapped>로그아웃</Lang>
                <Lang value='ja' wrapped>ログアウト</Lang>
                <Lang value='de' wrapped>Ausloggen</Lang>
                <Lang value='nl' wrapped>Uitloggen</Lang>
                <Lang value='dk' wrapped>Log ud</Lang>
                <Lang value='pt' wrapped>Sair</Lang>
                <Lang value='es' wrapped>Finalizar la sesión</Lang>
                <Lang value='ru' wrapped>Выйти</Lang>
            </li>
            <li className={`line ${stateActive()}`} onClick={() => go(router, 'account')}>
                <f-icon icon='house' i-s={stateActive('', true)}></f-icon>
                <Lang value='en'wrapped>Home</Lang>
                <Lang value='vi'wrapped>Trang chủ</Lang>
                <Lang value='fr'wrapped>Page d&apos;accueil</Lang>
                <Lang value='it'wrapped>Pagina iniziale</Lang>
                <Lang value='kr'wrapped>홈페이지</Lang>
                <Lang value='ja'wrapped>ホームページ</Lang>
                <Lang value='de'wrapped>Startseite</Lang>
                <Lang value='nl'wrapped>Startpagina</Lang>
                <Lang value='dk'wrapped>Hjemmeside</Lang>
                <Lang value='pt'wrapped>Pagina inicial</Lang>
                <Lang value='es'wrapped>Pagina de inicio</Lang>
                <Lang value='ru'wrapped>Дом</Lang>
            </li>
            <li className={stateActive('info')} onClick={() => go(router, 'account/info')}>
                <f-icon icon='circle-info' i-s={stateActive('info', true)}></f-icon>
                <Lang value='en' wrapped>Account info</Lang>
                <Lang value='vi' wrapped>Thông tin tài khoản</Lang>
                <Lang value='fr' wrapped>Informations sur le compte</Lang>
                <Lang value='it' wrapped>Informazioni sull&apos;account</Lang>
                <Lang value='kr' wrapped>계정 정보</Lang>
                <Lang value='ja' wrapped>アカウント情報</Lang>
                <Lang value='de' wrapped>Kontoinformationen</Lang>
                <Lang value='nl' wrapped>Rekeninggegevens</Lang>
                <Lang value='dk' wrapped>Kontooplysninger</Lang>
                <Lang value='pt' wrapped>Informações da conta</Lang>
                <Lang value='es' wrapped>Información de la cuenta</Lang>
                <Lang value='ru' wrapped>Информация об аккаунте</Lang>
            </li>
            <li className={stateActive('security')} onClick={() => go(router, 'account/security')}>
                <f-icon icon='shield' i-s={stateActive('security', true)}></f-icon>
                <Lang value='en' wrapped>Security</Lang>
                <Lang value='vi' wrapped>Bảo mật</Lang>
                <Lang value='fr' wrapped>Sécurité</Lang>
                <Lang value='it' wrapped>Sicurezza</Lang>
                <Lang value='kr' wrapped>보안</Lang>
                <Lang value='ja' wrapped>安全</Lang>
                <Lang value='de' wrapped>Sicherheit</Lang>
                <Lang value='nl' wrapped>Beveiliging</Lang>
                <Lang value='dk' wrapped>Sikkerhed</Lang>
                <Lang value='pt' wrapped>Segurança</Lang>
                <Lang value='es' wrapped>Seguridad</Lang>
                <Lang value='ru' wrapped>Безопасность</Lang>
            </li>
            <li className={stateActive('personalization')} onClick={() => go(router, 'account/personalization')}>
                <f-icon icon='palette' i-s={stateActive('personalization', true)}></f-icon>
                <Lang value='en' wrapped>Personalization</Lang>
                <Lang value='vi' wrapped>Cá nhân hóa</Lang>
                <Lang value='fr' wrapped>Personnalisation</Lang>
                <Lang value='it' wrapped>la santità</Lang>
                <Lang value='kr' wrapped>개인화</Lang>
                <Lang value='ja' wrapped>パーソナライゼーション</Lang>
                <Lang value='de' wrapped>Personalisierung</Lang>
                <Lang value='nl' wrapped>Personalisatie</Lang>
                <Lang value='dk' wrapped>Personalisering</Lang>
                <Lang value='pt' wrapped>Personalização</Lang>
                <Lang value='es' wrapped>Personalización</Lang>
                <Lang value='ru' wrapped>Персонализация</Lang>
                <span className='badge'>New</span>
            </li>
            <li className={stateActive('package')} onClick={() => go(router, 'account/package')}>
                <f-icon icon='code' i-s='outline'></f-icon><span>Foricon Package</span>
            </li>
        </ul>
    )
}