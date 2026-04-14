import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";
import 'Pag/sidebar-page.css';
import 'Pag/account/page.css';

export default function Page() {
    let router = useRouter();

    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <div>
                <div name='security'>
                    <h3>
                        <lang value='en'>Security & Privacy</lang>
                        <lang value='vi'>Bảo mật & Quyền riêng tư</lang>
                        <lang value='fr'>Sécurité et confidentialité</lang>
                        <lang value='it'>Sicurezza e privacy</lang>
                        <lang value='kr'>보안 및 개인 정보 보호</lang>
                        <lang value='ja'>セキュリティとプライバシー</lang>
                        <lang value='de'>Sicherheit und Datenschutz</lang>
                        <lang value='nl'>Beveiliging en privacy</lang>
                        <lang value='dk'>Sikkerhed og privatliv</lang>
                        <lang value='pt'>Segurança e Privacidade</lang>
                        <lang value='es'>Seguridad y privacidad</lang>
                        <lang value='ru'>Безопасность и конфиденциальность</lang>
                    </h3>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'account/security/change-password')}>
                            <lang value='en'>Change password</lang>
                            <lang value='vi'>Thay đổi mật khẩu</lang>
                            <lang value='fr'>Changer le mot de passe</lang>
                            <lang value='it'>Cambiare la password</lang>
                            <lang value='kr'>비밀번호 변경</lang>
                            <lang value='ja'>パスワードを変更する</lang>
                            <lang value='de'>Kennwort ändern</lang>
                            <lang value='nl'>Wachtwoord wijzigen</lang>
                            <lang value='dk'>Skift adgangskode</lang>
                            <lang value='pt'>Alterar a palavra-passe</lang>
                            <lang value='es'>Cambiar la contraseña</lang>
                            <lang value='ru'>Изменить пароль</lang>
                        </li>
                        <li onClick={() => go(router, 'account/security/login-history')}>
                            <lang value='en'>Login history</lang>
                            <lang value='vi'>Lịch sử đăng nhập</lang>
                            <lang value='fr'>Historique de connexion</lang>
                            <lang value='it'>Cronologia degli accessi</lang>
                            <lang value='kr'>로그인 기록</lang>
                            <lang value='ja'>ログイン履歴</lang>
                            <lang value='de'>Anmeldeverlauf</lang>
                            <lang value='nl'>Aanmeldingsgeschiedenis</lang>
                            <lang value='dk'>Loginhistorik</lang>
                            <lang value='pt'>Histórico de login</lang>
                            <lang value='es'>Historial de inicio de sesión</lang>
                            <lang value='ru'>История входов</lang>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}