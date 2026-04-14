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
                <div name='security/change-password'>
                    <h3>
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
                    </h3>
                    <form>
                        <lang value='en'>Your current password</lang>
                        <lang value='vi'>Mật khẩu hiện tại của bạn</lang>
                        <lang value='fr'>Votre mot de passe actuel</lang>
                        <lang value='it'>La tua password attuale</lang>
                        <lang value='kr'>현재 비밀번호</lang>
                        <lang value='ja'>現在のパスワード</lang>
                        <lang value='de'>Ihr aktuelles Passwort</lang>
                        <lang value='nl'>Uw huidige wachtwoord</lang>
                        <lang value='dk'>Din nuværende adgangskode</lang>
                        <lang value='pt'>A sua senha atual</lang>
                        <lang value='es'>Su contraseña actual</lang>
                        <lang value='ru'>Ваш текущий пароль</lang>
                        <input name='current' type='password' {...{
                            'lang:en-placeholder': 'Enter password',
                            'lang:vi-placeholder': 'Nhập mật khẩu',
                            'lang:fr-placeholder': 'Entrez le mot de passe',
                            'lang:it-placeholder': 'Inserisci la password',
                            'lang:kr-placeholder': '비밀번호를 입력하세요',
                            'lang:ja-placeholder': 'パスワードを入力してください',
                            'lang:de-placeholder': 'Passwort eingeben',
                            'lang:nl-placeholder': 'Voer wachtwoord in',
                            'lang:dk-placeholder': 'Indtast adgangskode',
                            'lang:pt-placeholder': 'Introduza a senha',
                            'lang:es-placeholder': 'Introducir contraseña',
                            'lang:ru-placeholder': 'Введите пароль',
                        }}/>
                        <lang value='en'>Your new password</lang>
                        <lang value='vi'>Mật khẩu mới</lang>
                        <lang value='fr'>Votre nouveau mot de passe</lang>
                        <lang value='it'>La tua nuova password</lang>
                        <lang value='kr'>새로운 비밀번호</lang>
                        <lang value='ja'>新しいパスワード</lang>
                        <lang value='de'>Ihr neues Passwort</lang>
                        <lang value='nl'>Uw nieuwe wachtwoord</lang>
                        <lang value='dk'>Din nye adgangskode</lang>
                        <lang value='pt'>A sua nova senha</lang>
                        <lang value='es'>Su nueva contraseña</lang>
                        <lang value='ru'>Ваш новый пароль</lang>
                        <input name='new' type='password' {...{
                            'lang:en-placeholder': 'Enter password',
                            'lang:vi-placeholder': 'Nhập mật khẩu',
                            'lang:fr-placeholder': 'Entrez le mot de passe',
                            'lang:it-placeholder': 'Inserisci la password',
                            'lang:kr-placeholder': '비밀번호를 입력하세요',
                            'lang:ja-placeholder': 'パスワードを入力してください',
                            'lang:de-placeholder': 'Passwort eingeben',
                            'lang:nl-placeholder': 'Voer wachtwoord in',
                            'lang:dk-placeholder': 'Indtast adgangskode',
                            'lang:pt-placeholder': 'Introduza a senha',
                            'lang:es-placeholder': 'Introducir contraseña',
                            'lang:ru-placeholder': 'Введите пароль',
                        }}/>
                        <lang value='en'>Repeat your new password</lang>
                        <lang value='vi'>Nhập lại mật khẩu mới</lang>
                        <lang value='fr'>Répétez votre nouveau mot de passe</lang>
                        <lang value='it'>Ripeti la tua nuova password</lang>
                        <lang value='kr'>새로운 비밀번호를 다시 입력하세요</lang>
                        <lang value='ja'>新しいパスワードを繰り返し入力してください</lang>
                        <lang value='de'>Wiederholen Sie Ihr neues Passwort</lang>
                        <lang value='nl'>Herhaal uw nieuwe wachtwoord</lang>
                        <lang value='dk'>Gentag din nye adgangskode</lang>
                        <lang value='pt'>Repita a sua nova palavra-passe</lang>
                        <lang value='es'>Repita su nueva contraseña</lang>
                        <lang value='ru'>Повторите ваш новый пароль</lang>
                        <input name='repeat' type='password' {...{
                            'lang:en-placeholder': 'Enter password',
                            'lang:vi-placeholder': 'Nhập mật khẩu',
                            'lang:fr-placeholder': 'Entrez le mot de passe',
                            'lang:it-placeholder': 'Inserisci la password',
                            'lang:kr-placeholder': '비밀번호를 입력하세요',
                            'lang:ja-placeholder': 'パスワードを入力してください',
                            'lang:de-placeholder': 'Passwort eingeben',
                            'lang:nl-placeholder': 'Voer wachtwoord in',
                            'lang:dk-placeholder': 'Indtast adgangskode',
                            'lang:pt-placeholder': 'Introduza a senha',
                            'lang:es-placeholder': 'Introducir contraseña',
                            'lang:ru-placeholder': 'Введите пароль',
                        }}/>
                        <button className='primary'>
                            <lang value='en'>Change</lang>
                            <lang value='vi'>Thay đổi</lang>
                            <lang value='fr'>Changement</lang>
                            <lang value='it'>Modifica</lang>
                            <lang value='kr'>변화</lang>
                            <lang value='ja'>変化</lang>
                            <lang value='de'>Ändern</lang>
                            <lang value='nl'>Wijziging</lang>
                            <lang value='dk'>Forandring</lang>
                            <lang value='pt'>Mudar</lang>
                            <lang value='es'>Cambiar</lang>
                            <lang value='ru'>Изменять</lang>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}