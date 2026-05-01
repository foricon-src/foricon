'use client';

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { LanguageContext } from 'Com/language';
import usePage from "Pag/(header)/account/use-page";
import 'Pag/sidebar-page.css';
import 'Pag/(header)/account/internal-global.css';
import './page.css';

export default function Page() {
    let router = useRouter();
    let lang = useContext(LanguageContext)

    usePage(() => {})

    return (
        <div name='security'>
            <h3>{
                {
                    en: 'Security & Privacy',
                    vi: 'Bảo mật & Quyền riêng tư',
                    fr: 'Sécurité et confidentialité',
                    it: 'Sicurezza e privacy',
                    kr: '보안 및 개인 정보 보호',
                    ja: 'セキュリティとプライバシー',
                    de: 'Sicherheit und Datenschutz',
                    nl: 'Beveiliging en privacy',
                    dk: 'Sikkerhed og privatliv',
                    pt: 'Segurança e Privacidade',
                    es: 'Seguridad y privacidad',
                    ru: 'Безопасность и конфиденциальность',
                }[lang]
            }</h3>
            <ul className='btn-list vertical large'>
                <li onClick={() => go(router, 'account/security/change-password')}>{
                    {
                        en: 'Change password',
                        vi: 'Thay đổi mật khẩu',
                        fr: 'Changer le mot de passe',
                        it: 'Cambiare la password',
                        kr: '비밀번호 변경',
                        ja: 'パスワードを変更する',
                        de: 'Kennwort ändern',
                        nl: 'Wachtwoord wijzigen',
                        dk: 'Skift adgangskode',
                        pt: 'Alterar a palavra-passe',
                        es: 'Cambiar la contraseña',
                        ru: 'Изменить пароль',
                    }[lang]
                }</li>
                <li onClick={() => go(router, 'account/security/login-history')}>{
                    {
                        en: 'Login history',
                        vi: 'Lịch sử đăng nhập',
                        fr: 'Historique de connexion',
                        it: 'Cronologia degli accessi',
                        kr: '로그인 기록',
                        ja: 'ログイン履歴',
                        de: 'Anmeldeverlauf',
                        nl: 'Aanmeldingsgeschiedenis',
                        dk: 'Loginhistorik',
                        pt: 'Histórico de login',
                        es: 'Historial de inicio de sesión',
                        ru: 'История входов',
                    }[lang]
                }</li>
            </ul>
        </div>
    )
}