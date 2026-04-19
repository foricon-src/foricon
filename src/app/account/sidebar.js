'use client';

import { usePathname } from "next/navigation";
import { GetLang } from 'Com/language';
import { signOut } from "firebase/auth";
import { auth } from "Com/firebase";
import { GoPage } from "Com/sidebar-page-transition";
import SidebarComponent from "Com/sidebar";

export default function Sidebar() {
    let pathname = usePathname();

    function stateActive(path = '', isIcon) {
        return (pathname.split('/')[2] || '') == path
            ? isIcon ? 'solid' : 'active'
            : isIcon ? 'outline' : '';
    }

    return (
        // <ul className='btn-list vertical line-active'>
        //     <li className='red' onClick={async () => {
        //         try {
        //             await signOut(auth);
        //             location.reload();
        //         }
        //         catch ({ message }) {
        //             notify('error', message)
        //         }
        //     }}>
        //         <f-icon icon='arrow-right-from-bracket' i-s='outline'></f-icon>
        //         <span>{
        //             GetLang({
        //             })
        //         }</span>
        //     </li>
        //     <li className={`line ${stateActive()}`} onClick={() => GoPage('account')}>
        //         <f-icon icon='house' i-s={stateActive('', true)}></f-icon>
        //         <span>{
        //             GetLang({
        //                 en: 'Home',
        //                 vi: 'Trang chủ',
        //                 fr: "Page d'accueil",
        //                 it: 'Pagina iniziale',
        //                 kr: '홈페이지',
        //                 ja: 'ホームページ',
        //                 de: 'Startseite',
        //                 nl: 'Startpagina',
        //                 dk: 'Hjemmeside',
        //                 pt: 'Pagina inicial',
        //                 es: 'Pagina de inicio',
        //                 ru: 'Дом',
        //             })
        //         }</span>
        //     </li>
        //     <li className={stateActive('info')} onClick={() => GoPage('account/info')}>
        //         <f-icon icon='circle-info' i-s={stateActive('info', true)}></f-icon>
        //         <span>{
        //             GetLang({
        //                 en: 'Account info',
        //                 vi: 'Thông tin tài khoản',
        //                 fr: 'Informations sur le compte',
        //                 it: "Informazioni sull'account",
        //                 kr: '계정 정보',
        //                 ja: 'アカウント情報',
        //                 de: 'Kontoinformationen',
        //                 nl: 'Rekeninggegevens',
        //                 dk: 'Kontooplysninger',
        //                 pt: 'Informações da conta',
        //                 es: 'Información de la cuenta',
        //                 ru: 'Информация об аккаунте',
        //             })
        //         }</span>
        //     </li>
        //     <li className={stateActive('security')} onClick={() => GoPage('account/security')}>
        //         <f-icon icon='shield' i-s={stateActive('security', true)}></f-icon>
        //         <span>{
        //             GetLang({
        //                 en: 'Security',
        //                 vi: 'Bảo mật',
        //                 fr: 'Sécurité',
        //                 it: 'Sicurezza',
        //                 kr: '보안',
        //                 ja: '安全',
        //                 de: 'Sicherheit',
        //                 nl: 'Beveiliging',
        //                 dk: 'Sikkerhed',
        //                 pt: 'Segurança',
        //                 es: 'Seguridad',
        //                 ru: 'Безопасность',
        //             })
        //         }</span>
        //     </li>
        //     <li className={stateActive('personalization')} onClick={() => GoPage('account/personalization')}>
        //         <f-icon icon='palette' i-s={stateActive('personalization', true)}></f-icon>
        //         <span>{
        //             GetLang({
        //                 en:'Personalization',
        //                 vi:'Cá nhân hóa',
        //                 fr:'Personnalisation',
        //                 it:'la santità',
        //                 kr:'개인화',
        //                 ja:'パーソナライゼーション',
        //                 de:'Personalisierung',
        //                 nl:'Personalisatie',
        //                 dk:'Personalisering',
        //                 pt:'Personalização',
        //                 es:'Personalización',
        //                 ru:'Персонализация',
        //             })
        //         }</span>
        //         <span className='badge'>{
        //             GetLang({
        //                 en:'New',
        //                 vi:'Mới',
        //                 fr:'Nouveau',
        //                 it:'Nuovo',
        //                 kr:'새로운',
        //                 ja:'新しい',
        //                 de:'Neu',
        //                 nl:'Nieuw',
        //                 dk:'Ny',
        //                 pt:'Novo',
        //                 es:'Nuevo',
        //                 ru:'Новый',
        //             })
        //         }</span>
        //     </li>
        //     <li className={stateActive('package')} onClick={() => GoPage('account/package')}>
        //         <f-icon icon='code' i-s='outline'></f-icon><span>Foricon Package</span>
        //     </li>
        // </ul>
        <SidebarComponent home='account' items={[
            {
                actions: async () => {
                    try {
                        await signOut(auth);
                        location.reload();
                    }
                    catch ({ message }) {
                        notify('error', message)
                    }
                },
                icon: { name: 'arrow-right-from-bracket' },
                className: 'red',
                texts: {
                    en: 'Log out',
                    vi: 'Đăng xuất',
                    fr: 'Se déconnecter',
                    it: 'Esci',
                    kr: '로그아웃',
                    ja: 'ログアウト',
                    de: 'Ausloggen',
                    nl: 'Uitloggen',
                    dk: 'Log ud',
                    pt: 'Sair',
                    es: 'Finalizar la sesión',
                    ru: 'Выйти',
                },
            },
            {
                page: '',
                icon: { name: 'house' },
                hasLine: true,
                texts: {
                    en: 'Home',
                    vi: 'Trang chủ',
                    fr: "Page d'accueil",
                    it: 'Pagina iniziale',
                    kr: '홈페이지',
                    ja: 'ホームページ',
                    de: 'Startseite',
                    nl: 'Startpagina',
                    dk: 'Hjemmeside',
                    pt: 'Pagina inicial',
                    es: 'Pagina de inicio',
                    ru: 'Дом',
                }
            },
            {
                page: 'info',
                icon: { name: 'circle-info' },
                texts: {
                    en: 'Account info',
                    vi: 'Thông tin tài khoản',
                    fr: 'Informations sur le compte',
                    it: "Informazioni sull'account",
                    kr: '계정 정보',
                    ja: 'アカウント情報',
                    de: 'Kontoinformationen',
                    nl: 'Rekeninggegevens',
                    dk: 'Kontooplysninger',
                    pt: 'Informações da conta',
                    es: 'Información de la cuenta',
                    ru: 'Информация об аккаунте',
                }
            },
            {
                page: 'security',
                icon: { name: 'shield' },
                texts: {
                    en: 'Security',
                    vi: 'Bảo mật',
                    fr: 'Sécurité',
                    it: 'Sicurezza',
                    kr: '보안',
                    ja: '安全',
                    de: 'Sicherheit',
                    nl: 'Beveiliging',
                    dk: 'Sikkerhed',
                    pt: 'Segurança',
                    es: 'Seguridad',
                    ru: 'Безопасность',
                }
            },
            {
                page: 'personalization',
                icon: { name: 'palette' },
                texts: {
                    en:'Personalization',
                    vi:'Cá nhân hóa',
                    fr:'Personnalisation',
                    it:'la santità',
                    kr:'개인화',
                    ja:'パーソナライゼーション',
                    de:'Personalisierung',
                    nl:'Personalisatie',
                    dk:'Personalisering',
                    pt:'Personalização',
                    es:'Personalización',
                    ru:'Персонализация',
                },
                badge: {
                    en:'New',
                    vi:'Mới',
                    fr:'Nouveau',
                    it:'Nuovo',
                    kr:'새로운',
                    ja:'新しい',
                    de:'Neu',
                    nl:'Nieuw',
                    dk:'Ny',
                    pt:'Novo',
                    es:'Nuevo',
                    ru:'Новый',
                }
            },
            {
                page: 'package',
                icon: { name: 'code', keepState: true },
                text: 'Foricon Package',
            }
        ]}/>
    )
}