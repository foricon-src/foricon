import { useRouter } from "next/navigation";
import Sidebar from "Pag/account/sidebar";
import { Lang } from "Com/language";
import 'Pag/sidebar-page.css';
import './page.css';

export default function Page() {
    let router = useRouter();

    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <div>
                <div name='security'>
                    <h3>
                        <Lang value='en'>Security & Privacy</Lang>
                        <Lang value='vi'>Bảo mật & Quyền riêng tư</Lang>
                        <Lang value='fr'>Sécurité et confidentialité</Lang>
                        <Lang value='it'>Sicurezza e privacy</Lang>
                        <Lang value='kr'>보안 및 개인 정보 보호</Lang>
                        <Lang value='ja'>セキュリティとプライバシー</Lang>
                        <Lang value='de'>Sicherheit und Datenschutz</Lang>
                        <Lang value='nl'>Beveiliging en privacy</Lang>
                        <Lang value='dk'>Sikkerhed og privatliv</Lang>
                        <Lang value='pt'>Segurança e Privacidade</Lang>
                        <Lang value='es'>Seguridad y privacidad</Lang>
                        <Lang value='ru'>Безопасность и конфиденциальность</Lang>
                    </h3>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'account/security/change-password')}>
                            <Lang value='en'>Change password</Lang>
                            <Lang value='vi'>Thay đổi mật khẩu</Lang>
                            <Lang value='fr'>Changer le mot de passe</Lang>
                            <Lang value='it'>Cambiare la password</Lang>
                            <Lang value='kr'>비밀번호 변경</Lang>
                            <Lang value='ja'>パスワードを変更する</Lang>
                            <Lang value='de'>Kennwort ändern</Lang>
                            <Lang value='nl'>Wachtwoord wijzigen</Lang>
                            <Lang value='dk'>Skift adgangskode</Lang>
                            <Lang value='pt'>Alterar a palavra-passe</Lang>
                            <Lang value='es'>Cambiar la contraseña</Lang>
                            <Lang value='ru'>Изменить пароль</Lang>
                        </li>
                        <li onClick={() => go(router, 'account/security/login-history')}>
                            <Lang value='en'>Login history</Lang>
                            <Lang value='vi'>Lịch sử đăng nhập</Lang>
                            <Lang value='fr'>Historique de connexion</Lang>
                            <Lang value='it'>Cronologia degli accessi</Lang>
                            <Lang value='kr'>로그인 기록</Lang>
                            <Lang value='ja'>ログイン履歴</Lang>
                            <Lang value='de'>Anmeldeverlauf</Lang>
                            <Lang value='nl'>Aanmeldingsgeschiedenis</Lang>
                            <Lang value='dk'>Loginhistorik</Lang>
                            <Lang value='pt'>Histórico de login</Lang>
                            <Lang value='es'>Historial de inicio de sesión</Lang>
                            <Lang value='ru'>История входов</Lang>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}