'use client';

import { useRouter } from "next/navigation";
import Sidebar from "Pag/account/sidebar";
import { GetLang } from 'Com/language';
import 'Pag/sidebar-page.css';
import 'Pag/interal-global.css'
import './page.css';

export default function Page() {
    let router = useRouter();

    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <div>
                <div name='security/change-password'>
                    <h3>{
                        GetLang({
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
                        })
                    }</h3>
                    <form>
                        <span>{
                            GetLang({
                                en: 'Your current password',
                                vi: 'Mật khẩu hiện tại của bạn',
                                fr: 'Votre mot de passe actuel',
                                it: 'La tua password attuale',
                                kr: '현재 비밀번호',
                                ja: '現在のパスワード',
                                de: 'Ihr aktuelles Passwort',
                                nl: 'Uw huidige wachtwoord',
                                dk: 'Din nuværende adgangskode',
                                pt: 'A sua senha atual',
                                es: 'Su contraseña actual',
                                ru: 'Ваш текущий пароль',
                            })
                        }</span>
                        <input name='current' type='password' placeholder={
                            GetLang({
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
                        <span>{
                            GetLang({
                                en: 'Your new password',
                                vi: 'Mật khẩu mới',
                                fr: 'Votre nouveau mot de passe',
                                it: 'La tua nuova password',
                                kr: '새로운 비밀번호',
                                ja: '新しいパスワード',
                                de: 'Ihr neues Passwort',
                                nl: 'Uw nieuwe wachtwoord',
                                dk: 'Din nye adgangskode',
                                pt: 'A sua nova senha',
                                es: 'Su nueva contraseña',
                                ru: 'Ваш новый пароль',
                            })
                        }</span>
                        <input name='new' type='password' placeholder={
                            GetLang({
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
                        <span>{
                            GetLang({
                                en: 'Repeat your new password',
                                vi: 'Nhập lại mật khẩu mới',
                                fr: 'Répétez votre nouveau mot de passe',
                                it: 'Ripeti la tua nuova password',
                                kr: '새로운 비밀번호를 다시 입력하세요',
                                ja: '新しいパスワードを繰り返し入力してください',
                                de: 'Wiederholen Sie Ihr neues Passwort',
                                nl: 'Herhaal uw nieuwe wachtwoord',
                                dk: 'Gentag din nye adgangskode',
                                pt: 'Repita a sua nova palavra-passe',
                                es: 'Repita su nueva contraseña',
                                ru: 'Повторите ваш новый пароль',
                            })
                        }</span>
                        <input name='repeat' type='password' placeholder={
                            GetLang({
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
                        <button className='primary'>{
                            GetLang({
                                en: 'Change',
                                vi: 'Thay đổi',
                                fr: 'Changement',
                                it: 'Modifica',
                                kr: '변화',
                                ja: '変化',
                                de: 'Ändern',
                                nl: 'Wijziging',
                                dk: 'Forandring',
                                pt: 'Mudar',
                                es: 'Cambiar',
                                ru: 'Изменять',
                            })
                        }</button>
                    </form>
                </div>
            </div>
        </div>
    )
}