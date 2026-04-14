import { useRouter } from "next/navigation";
import Sidebar from "Pag/account/sidebar";
import { langValue, Lang } from "Com/language";
import 'Pag/sidebar-page.css';
import './page.css';

export default function Page() {
    let router = useRouter();

    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <div>
                <div name='security/change-password'>
                    <h3>
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
                    </h3>
                    <form>
                        <Lang value='en'>Your current password</Lang>
                        <Lang value='vi'>Mật khẩu hiện tại của bạn</Lang>
                        <Lang value='fr'>Votre mot de passe actuel</Lang>
                        <Lang value='it'>La tua password attuale</Lang>
                        <Lang value='kr'>현재 비밀번호</Lang>
                        <Lang value='ja'>現在のパスワード</Lang>
                        <Lang value='de'>Ihr aktuelles Passwort</Lang>
                        <Lang value='nl'>Uw huidige wachtwoord</Lang>
                        <Lang value='dk'>Din nuværende adgangskode</Lang>
                        <Lang value='pt'>A sua senha atual</Lang>
                        <Lang value='es'>Su contraseña actual</Lang>
                        <Lang value='ru'>Ваш текущий пароль</Lang>
                        <input name='current' type='password' placeholder={
                            langValue({
                                en: 'Enter password',
                                vi: 'Nhập mật khẩu',
                                fr: 'Entrez le mot de passe',
                                it: 'Inserisci la password',
                                kr: '비밀번호를 입력하세요',
                                ja: 'パスワードを入力してください',
                                de: 'Passwort eingeben',
                                nl: 'Voer wachtwoord in',
                                dk: 'Indtast adgangskode',
                                pt: 'Introduza a senha',
                                es: 'Introducir contraseña',
                                ru: 'Введите пароль',
                            })
                        }/>
                        <Lang value='en'>Your new password</Lang>
                        <Lang value='vi'>Mật khẩu mới</Lang>
                        <Lang value='fr'>Votre nouveau mot de passe</Lang>
                        <Lang value='it'>La tua nuova password</Lang>
                        <Lang value='kr'>새로운 비밀번호</Lang>
                        <Lang value='ja'>新しいパスワード</Lang>
                        <Lang value='de'>Ihr neues Passwort</Lang>
                        <Lang value='nl'>Uw nieuwe wachtwoord</Lang>
                        <Lang value='dk'>Din nye adgangskode</Lang>
                        <Lang value='pt'>A sua nova senha</Lang>
                        <Lang value='es'>Su nueva contraseña</Lang>
                        <Lang value='ru'>Ваш новый пароль</Lang>
                        <input name='new' type='password' placeholder={
                            langValue({
                                en: 'Enter password',
                                vi: 'Nhập mật khẩu',
                                fr: 'Entrez le mot de passe',
                                it: 'Inserisci la password',
                                kr: '비밀번호를 입력하세요',
                                ja: 'パスワードを入力してください',
                                de: 'Passwort eingeben',
                                nl: 'Voer wachtwoord in',
                                dk: 'Indtast adgangskode',
                                pt: 'Introduza a senha',
                                es: 'Introducir contraseña',
                                ru: 'Введите пароль',
                            })
                        }/>
                        <Lang value='en'>Repeat your new password</Lang>
                        <Lang value='vi'>Nhập lại mật khẩu mới</Lang>
                        <Lang value='fr'>Répétez votre nouveau mot de passe</Lang>
                        <Lang value='it'>Ripeti la tua nuova password</Lang>
                        <Lang value='kr'>새로운 비밀번호를 다시 입력하세요</Lang>
                        <Lang value='ja'>新しいパスワードを繰り返し入力してください</Lang>
                        <Lang value='de'>Wiederholen Sie Ihr neues Passwort</Lang>
                        <Lang value='nl'>Herhaal uw nieuwe wachtwoord</Lang>
                        <Lang value='dk'>Gentag din nye adgangskode</Lang>
                        <Lang value='pt'>Repita a sua nova palavra-passe</Lang>
                        <Lang value='es'>Repita su nueva contraseña</Lang>
                        <Lang value='ru'>Повторите ваш новый пароль</Lang>
                        <input name='repeat' type='password' placeholder={
                            langValue({
                                en: 'Enter password',
                                vi: 'Nhập mật khẩu',
                                fr: 'Entrez le mot de passe',
                                it: 'Inserisci la password',
                                kr: '비밀번호를 입력하세요',
                                ja: 'パスワードを入力してください',
                                de: 'Passwort eingeben',
                                nl: 'Voer wachtwoord in',
                                dk: 'Indtast adgangskode',
                                pt: 'Introduza a senha',
                                es: 'Introducir contraseña',
                                ru: 'Введите пароль',
                            })
                        }/>
                        <button className='primary'>
                            <Lang value='en'>Change</Lang>
                            <Lang value='vi'>Thay đổi</Lang>
                            <Lang value='fr'>Changement</Lang>
                            <Lang value='it'>Modifica</Lang>
                            <Lang value='kr'>변화</Lang>
                            <Lang value='ja'>変化</Lang>
                            <Lang value='de'>Ändern</Lang>
                            <Lang value='nl'>Wijziging</Lang>
                            <Lang value='dk'>Forandring</Lang>
                            <Lang value='pt'>Mudar</Lang>
                            <Lang value='es'>Cambiar</Lang>
                            <Lang value='ru'>Изменять</Lang>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}