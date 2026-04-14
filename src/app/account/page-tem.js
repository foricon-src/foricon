/*'use client'

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";
import 'Pag/sidebar-page.css';

export default function Account() {
    let router = useRouter();

    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <div>
                <div name='home'>
                    <div id='main_home_hero'>
                        <div id='main_home_hero_avatar' className='img circle square avatar'></div>
                        <h2 id='main_home_hero_greeting'>Hello</h2>
                    </div>
                    <ul id='main_home_services'>
                        <li name='music' onClick={() => go(router, 'stream-chilzymusic')}>
                            <img height='42' src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsRBUY7vhKuPaXrUxG6BipYVH90Ir-TngNmNkSV9fT5hTVVr2M_80JyG00NJb8CEaxn1cZuIMfWPkeL25ais09c9-zCYs0W6GQQdZIArHMCXl0ZoD6AfUGikFbXhEfBLUXRH5j-x1xeLsBo0xWokoFtGm1nH8uhSEmqJI6r46XlDJzPC-DWbLstQF6DC4/s360/chilzymusic-m.png'/>
                            <h6>Foricon Music</h6>
                        </li>
                        <li name='hub' onClick={() => go(router, 'hub')}>
                            <img height='60' src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgu2RsPztgjhUls5ZfAiJvxJ95dXULPYSARYYoJYP-73-qp6GnkN09zQ7Lohja3UMJhq2Zjv78rM2LUOiKMuiE2ZT0xjPKKDw2CQqp5-r7ippkOzKrNWSXtLlMkcnd9K-z-QHo2o8GMbJnGTXd69U5TXvMKCrZZCb99XZZaOlJ9kcEQqa_EbY5qh3JhK0/s320/foricon-hub.png'/>
                            <h6>Foricon Hub</h6>
                        </li>
                        <li name='fotorno' onClick={() => go(router, 'fortono')}>
                            <img height='60' src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq7qnPl4uWBfAYXhQ5quYi_hauu8gNbUU5HdkXNIZ8Efgcpjh85N0_0JLr2J0oeru8S6p8AQXIfVxJ7k0wDZ1MYNSKEQTbkpBFyWt82XelBk5-63143dbrFddbah2ZS-03q7FND2de7ec3SExU1MiU4C4xp-5ExivgiOAnTBimjh0NQBpSIL_SvzkL4Mg/s250/foricon-fotorno.png'/>
                            <h6>Foricon Fotorno</h6>
                        </li>
                        <li name='media' onClick={() => go(router, 'media')}>
                            <img height='45' src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0AALCOpcZYC2PmsEX18BY8F0TDzQkvPuwkIB_-zWx8I3WAYdUdlkjdpO5IC27eJSABdzKPq1H1CuDC9Ml3XdBadycE5WikWWXVg5a4iZVUrixLR7EW0wDz8CxeLwNa7Zje3nFMUjJz6FKU9ef3KaIMNgxdnDOMFjKol2Wv5mmvIvnQXv58Kukbqlp5pk/s250/foricon-media.png'/>
                            <h6>Foricon Media</h6>
                        </li>
                    </ul>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'pricing')}>
                            <Lang value='en'>Foricon Plus plans</Lang>
                            <Lang value='vi'>Các gói Foricon Plus</Lang>
                            <Lang value='fr'>Forfaits Foricon Plus</Lang>
                            <Lang value='it'>Piani Foricon Plus</Lang>
                            <Lang value='kr'>Foricon Plus 계획</Lang>
                            <Lang value='ja'>Foricon Plusプラン</Lang>
                            <Lang value='de'>Foricon Plus-Pläne</Lang>
                            <Lang value='nl'>Foricon Plus-abonnementen</Lang>
                            <Lang value='dk'>Foricon Plus-planer</Lang>
                            <Lang value='pt'>Planos Foricon Plus</Lang>
                            <Lang value='es'>Planes de Foricon Plus</Lang>
                            <Lang value='ru'>Планы Foricon Plus</Lang>
                        </li>
                        <li className='red'>
                            <Lang value='en'>Remove my account</Lang>
                            <Lang value='vi'>Xoá tài khoản của tôi</Lang>
                            <Lang value='fr'>Supprimer mon compte</Lang>
                            <Lang value='it'>Rimuovi il mio account</Lang>
                            <Lang value='kr'>내 계정 삭제</Lang>
                            <Lang value='ja'>アカウントを削除する</Lang>
                            <Lang value='de'>Mein Konto entfernen</Lang>
                            <Lang value='nl'>Verwijder mijn account</Lang>
                            <Lang value='dk'>Fjern min konto</Lang>
                            <Lang value='pt'>Remover a minha conta</Lang>
                            <Lang value='es'>Eliminar mi cuenta</Lang>
                            <Lang value='ru'>Удалить мой аккаунт</Lang>
                        </li>
                    </ul>
                </div>
                <div name='account-info'>
                    <table>
                        <tr>
                            <td>
                            <Lang value='en'>Avatar</Lang>
                            <Lang value='vi'>Ảnh đại diện</Lang>
                            <Lang value='fr'>Avatar</Lang>
                            <Lang value='it'>L&apos;Avatar</Lang>
                            <Lang value='kr'>화신</Lang>
                            <Lang value='ja'>アバター</Lang>
                            <Lang value='de'>Avatar</Lang>
                            <Lang value='nl'>Avatar</Lang>
                            <Lang value='dk'>Avatar</Lang>
                            <Lang value='pt'>Avatar</Lang>
                            <Lang value='es'>Avatar</Lang>
                            <Lang value='ru'>Аватар</Lang>
                            </td>
                            <td>
                            <div id='main_account-info_avatar' className='img circle square avatar'></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <Lang value='en'>Name</Lang>
                            <Lang value='vi'>Tên</Lang>
                            <Lang value='fr'>Nom</Lang>
                            <Lang value='it'>Nome</Lang>
                            <Lang value='kr'>이름</Lang>
                            <Lang value='ja'>名前</Lang>
                            <Lang value='de'>Name</Lang>
                            <Lang value='nl'>Naam</Lang>
                            <Lang value='dk'>Navn</Lang>
                            <Lang value='pt'>Nome</Lang>
                            <Lang value='es'>Nombre</Lang>
                            <Lang value='ru'>Имя</Lang>
                            </td>
                            <td id='main_account-info_username'>Username123</td>
                        </tr>
                        <tr>
                            <td>
                            <Lang value='en'>Email</Lang>
                            <Lang value='vi'>Email</Lang>
                            <Lang value='fr'>Email</Lang>
                            <Lang value='it'>Email</Lang>
                            <Lang value='kr'>이메일</Lang>
                            <Lang value='ja'>メール</Lang>
                            <Lang value='de'>Email</Lang>
                            <Lang value='nl'>Email</Lang>
                            <Lang value='dk'>Email</Lang>
                            <Lang value='pt'>Email</Lang>
                            <Lang value='es'>Correo electrónico</Lang>
                            <Lang value='ru'>Электронная почта</Lang>
                            </td>
                            <td id='main_account-info_email'>user@example.com</td>
                        </tr>
                        <tr>
                            <td>
                            <Lang value='en'>User ID</Lang>
                            <Lang value='vi'>ID người dùng</Lang>
                            <Lang value='fr'>ID de l&apos;utilisateur</Lang>
                            <Lang value='it'>ID utente</Lang>
                            <Lang value='kr'>사용자 ID</Lang>
                            <Lang value='ja'>ユーザーID</Lang>
                            <Lang value='de'>Benutzer-ID</Lang>
                            <Lang value='nl'>Gebruikers-ID</Lang>
                            <Lang value='dk'>Bruger-id</Lang>
                            <Lang value='pt'>ID do utilizador</Lang>
                            <Lang value='es'>ID de usuario</Lang>
                            <Lang value='ru'>ID пользователя</Lang>
                            </td>
                            <td id='main_account-info_uid'>123ABC</td>
                        </tr>
                        <tr>
                            <td>
                            <Lang value='en'>Joining date</Lang>
                            <Lang value='vi'>Ngày tham gia</Lang>
                            <Lang value='fr'>Date d&apos;adhésion</Lang>
                            <Lang value='it'>Data di adesione</Lang>
                            <Lang value='kr'>가입날짜</Lang>
                            <Lang value='ja'>入社日</Lang>
                            <Lang value='de'>Eintrittsdatum</Lang>
                            <Lang value='nl'>Datum van toetreding</Lang>
                            <Lang value='dk'>Tilmeldingsdato</Lang>
                            <Lang value='pt'>Data de adesão</Lang>
                            <Lang value='es'>Fecha de ingreso</Lang>
                            <Lang value='ru'>Дата присоединения</Lang>
                            </td>
                            <td id='main_account-info_joining-date'>21 December, 2023</td>
                        </tr>
                    </table>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'account/info/edit')}>
                            <Lang value='en'>Edit account info</Lang>
                            <Lang value='vi'>Chỉnh sửa thông tin tài khoản</Lang>
                            <Lang value='fr'>Modifier les informations du compte</Lang>
                            <Lang value='it'>Modifica informazioni account</Lang>
                            <Lang value='kr'>계정 정보 편집</Lang>
                            <Lang value='ja'>アカウント情報を編集</Lang>
                            <Lang value='de'>Kontoinformationen bearbeiten</Lang>
                            <Lang value='nl'>Accountgegevens bewerken</Lang>
                            <Lang value='dk'>Rediger kontooplysninger</Lang>
                            <Lang value='pt'>Editar informações da conta</Lang>
                            <Lang value='es'>Editar la información de la cuenta</Lang>
                            <Lang value='ru'>Изменить информацию об аккаунте</Lang>
                        </li>
                    </ul>
                </div>
                <div name='account-info/edit'>
                    <h3>
                        <Lang value='en'>Edit account info</Lang>
                        <Lang value='vi'>Chỉnh sửa thông tin tài khoản</Lang>
                        <Lang value='fr'>Modifier les informations du compte</Lang>
                        <Lang value='it'>Modifica informazioni account</Lang>
                        <Lang value='kr'>계정 정보 편집</Lang>
                        <Lang value='ja'>アカウント情報を編集</Lang>
                        <Lang value='de'>Kontoinformationen bearbeiten</Lang>
                        <Lang value='nl'>Accountgegevens bewerken</Lang>
                        <Lang value='dk'>Rediger kontooplysninger</Lang>
                        <Lang value='pt'>Editar informações da conta</Lang>
                        <Lang value='es'>Editar la información de la cuenta</Lang>
                        <Lang value='ru'>Изменить информацию об аккаунте</Lang>
                    </h3>
                    <form>
                        <Lang value='en'>Avatar</Lang>
                        <Lang value='vi'>Ảnh đại diện</Lang>
                        <Lang value='fr'>Avatar</Lang>
                        <Lang value='it'>L&apos;Avatar</Lang>
                        <Lang value='kr'>화신</Lang>
                        <Lang value='ja'>アバター</Lang>
                        <Lang value='de'>Avatar</Lang>
                        <Lang value='nl'>Avatar</Lang>
                        <Lang value='dk'>Avatar</Lang>
                        <Lang value='pt'>Avatar</Lang>
                        <Lang value='es'>Avatar</Lang>
                        <Lang value='ru'>Аватар</Lang>
                        <input name='avatar'/>
                        <button type='button' className='secondary' id='main_account-info-edit_form_choose-avatar'>Choose from Media</button>
                        <Lang value='en'>Name</Lang>
                        <Lang value='vi'>Tên</Lang>
                        <Lang value='fr'>Nom</Lang>
                        <Lang value='it'>Nome</Lang>
                        <Lang value='kr'>이름</Lang>
                        <Lang value='ja'>名前</Lang>
                        <Lang value='de'>Name</Lang>
                        <Lang value='nl'>Naam</Lang>
                        <Lang value='dk'>Navn</Lang>
                        <Lang value='pt'>Nome</Lang>
                        <Lang value='es'>Nombre</Lang>
                        <Lang value='ru'>Имя</Lang>
                        <input name='name' type='name' maxlength='30' placeholder='John Doe'/>
                        <Lang value='en'>Email</Lang>
                        <Lang value='vi'>Email</Lang>
                        <Lang value='fr'>Email</Lang>
                        <Lang value='it'>Email</Lang>
                        <Lang value='kr'>이메일</Lang>
                        <Lang value='ja'>メール</Lang>
                        <Lang value='de'>Email</Lang>
                        <Lang value='nl'>Email</Lang>
                        <Lang value='dk'>Email</Lang>
                        <Lang value='pt'>Email</Lang>
                        <Lang value='es'>Correo electrónico</Lang>
                        <Lang value='ru'>Электронная почта</Lang>
                        <input name='email' type='email' placeholder='user@example.com'/>
                        <button className='primary'>
                            <Lang value='en'>Save changes</Lang>
                            <Lang value='vi'>Lưu thay đổi</Lang>
                            <Lang value='fr'>Enregistrer les modifications</Lang>
                            <Lang value='it'>Salvare le modifiche</Lang>
                            <Lang value='kr'>변경 사항 저장</Lang>
                            <Lang value='ja'>変更を保存</Lang>
                            <Lang value='de'>Änderungen speichern</Lang>
                            <Lang value='nl'>Wijzigingen opslaan</Lang>
                            <Lang value='dk'>Gem ændringer</Lang>
                            <Lang value='pt'>Guardar alterações</Lang>
                            <Lang value='es'>Guardar cambios</Lang>
                            <Lang value='ru'>Сохранить изменения</Lang>
                        </button>
                    </form>
                </div>
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
                <div name='security/login-history'>
                    <h3>
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
                    </h3>
                    <ul>
                        <button className='primary'>
                            <Lang value='en'>Load more</Lang>
                            <Lang value='vi'>Tải thêm</Lang>
                            <Lang value='fr'>Charger plus</Lang>
                            <Lang value='it'>Carica altro</Lang>
                            <Lang value='kr'>더 보기</Lang>
                            <Lang value='ja'>さらに読み込む</Lang>
                            <Lang value='de'>Mehr laden</Lang>
                            <Lang value='nl'>Meer laden</Lang>
                            <Lang value='dk'>Indlæs mere</Lang>
                            <Lang value='pt'>Carregar mais</Lang>
                            <Lang value='es'>Cargar más</Lang>
                            <Lang value='ru'>Загрузить еще</Lang>
                        </button>
                    </ul>
                </div>
                <div name='personalization'>
                    <form>
                        <Lang value='en'>Codebox&apos;s font</Lang>
                        <Lang value='vi'>Phông chữ của hộp mã</Lang>
                        <Lang value='fr'>Police de caractères de Codebox</Lang>
                        <Lang value='it'>Il carattere di Codebox</Lang>
                        <Lang value='kr'>코드박스의 폰트</Lang>
                        <Lang value='ja'>Codeboxのフォント</Lang>
                        <Lang value='de'>Schriftart von Codebox</Lang>
                        <Lang value='nl'>Het lettertype van Codebox</Lang>
                        <Lang value='dk'>Codebox&apos; skrifttype</Lang>
                        <Lang value='pt'>Fonte Codebox</Lang>
                        <Lang value='es'>Fuente de Codebox</Lang>
                        <Lang value='ru'>Шрифт Codebox</Lang>
                        <f-select name='font'>
                            <text></text>
                            <option-list>
                                <f-option value='cons'>Consolas</f-option>
                                <f-option value='fira'>Fira Code</f-option>
                                <f-option value='scp'>Source Code Pro</f-option>
                                <f-option value='dm'>DM Mono</f-option>
                                <f-option value='nova'>Nova Mono</f-option>
                                <f-option value='xanh'>Xanh Mono</f-option>
                                <f-option value='kode'>Kode Mono</f-option>
                                <f-option value='sono'>Sono</f-option>
                            </option-list>
                        </f-select>
                        <code name='HTML'>{`<div className='box'>
  <!--<p>Hello World!</p>-->
</div>
<script type='module'>
  let a = JSON.parse(localStorage.getItem('a'));
  if (a.length) {
    a.map(i => i == 'data' || i != 'money');
  }
  for (let i in a) {
    a[i] += '_str'
  }
</script>`}</code>
                        <Lang value='en'>Indentation space</Lang>
                        <Lang value='vi'>Khoảng cách thụt dòng</Lang>
                        <Lang value='fr'>Espace d&apos;indentation</Lang>
                        <Lang value='it'>spazio di rientro</Lang>
                        <Lang value='kr'>들여쓰기 공간</Lang>
                        <Lang value='ja'>インデントスペース</Lang>
                        <Lang value='de'>Einrückungsraum</Lang>
                        <Lang value='nl'>Inspringingsruimte</Lang>
                        <Lang value='dk'>Indrykningsafstand</Lang>
                        <Lang value='pt'>Espaço de recuo</Lang>
                        <Lang value='es'>Espacio de indentación</Lang>
                        <Lang value='ru'>Пространство отступа</Lang>
                        <input name='indent' type='range' min='1' max='6' step='1' df-value='2'/>
                        <button className='primary'>
                            <Lang value='en'>Save changes</Lang>
                            <Lang value='vi'>Lưu thay đổi</Lang>
                            <Lang value='fr'>Enregistrer les modifications</Lang>
                            <Lang value='it'>Salvare le modifiche</Lang>
                            <Lang value='kr'>변경 사항 저장</Lang>
                            <Lang value='ja'>変更を保存</Lang>
                            <Lang value='de'>Änderungen speichern</Lang>
                            <Lang value='nl'>Wijzigingen opslaan</Lang>
                            <Lang value='dk'>Gem ændringer</Lang>
                            <Lang value='pt'>Guardar alterações</Lang>
                            <Lang value='es'>Guardar cambios</Lang>
                            <Lang value='ru'>Сохранить изменения</Lang>
                        </button>
                    </form>
                </div>
                <div name='package'>
                    <div id='main_package_pageviews'>
                        <div id='main_package_pageviews_chart'>
                            <div>
                                <Lang value='en'>You have used</Lang>
                                <Lang value='vi'>Bạn đã sử dụng</Lang>
                                <Lang value='fr'>Vous avez utilisé</Lang>
                                <Lang value='it'>Hai utilizzato</Lang>
                                <Lang value='de'>Sie haben</Lang>
                                <Lang value='nl'>U hebt</Lang>
                                <Lang value='dk'>Du har brugt</Lang>
                                <Lang value='pt'>Utilizou</Lang>
                                <Lang value='es'>Has utilizado</Lang>
                                <Lang value='ru'>Вы использовали</Lang>
                                <h4 id='main_package_pageviews_chart_count'></h4>
                                <Lang value='en'>pageviews</Lang>
                                <Lang value='vi'>lượt xem trang</Lang>
                                <Lang value='fr'>pages vues</Lang>
                                <Lang value='it'>visualizzazioni di pagina</Lang>
                                <Lang value='kr'>페이지뷰를 사용했습니다</Lang>
                                <Lang value='ja'>ページビューを使用しました</Lang>
                                <Lang value='de'>Seitenaufrufe verwendet</Lang>
                                <Lang value='nl'>paginaweergaven gebruikt</Lang>
                                <Lang value='dk'>sidevisninger</Lang>
                                <Lang value='pt'>visualizações de página</Lang>
                                <Lang value='es'>páginas vistas</Lang>
                                <Lang value='ru'>просмотров страниц</Lang>
                            </div>
                        </div>
                        <span id='main_package_pageviews_reset'></span>
                        <hr/>
                        <ul className='btn-list'>
                            <li onClick={() => go(router, 'account/package/settings')}>
                                <f-icon icon='gear'></f-icon>
                                <Lang value='en'>Settings</Lang>
                                <Lang value='vi'>Cài đặt</Lang>
                                <Lang value='fr'>Paramètres</Lang>
                                <Lang value='it'>Impostazioni</Lang>
                                <Lang value='kr'>설정</Lang>
                                <Lang value='ja'>設定</Lang>
                                <Lang value='de'>Einstellungen</Lang>
                                <Lang value='nl'>Instellingen</Lang>
                                <Lang value='dk'>Indstillinger</Lang>
                                <Lang value='pt'>Configurações</Lang>
                                <Lang value='es'>Ajustes</Lang>
                                <Lang value='ru'>Настройки</Lang>
                            </li>
                            <li onClick={() => go(router, 'account/package/download')}>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                                <Lang value='en'>Download</Lang>
                                <Lang value='vi'>Tải xuống</Lang>
                                <Lang value='fr'>Télécharger</Lang>
                                <Lang value='it'>Scaricamento</Lang>
                                <Lang value='kr'>다운로드</Lang>
                                <Lang value='ja'>ダウンロード</Lang>
                                <Lang value='de'>Herunterladen</Lang>
                                <Lang value='nl'>Download</Lang>
                                <Lang value='dk'>Download</Lang>
                                <Lang value='pt'>Transferir</Lang>
                                <Lang value='es'>Descargar</Lang>
                                <Lang value='ru'>Скачать</Lang>
                            </li>
                        </ul>
                    </div>
                    <h3>
                        <Lang value='en'>Import</Lang>
                        <Lang value='vi'>Import</Lang>
                        <Lang value='fr'>Importer</Lang>
                        <Lang value='it'>Importare</Lang>
                        <Lang value='kr'>수입</Lang>
                        <Lang value='ja'>輸入</Lang>
                        <Lang value='de'>Import</Lang>
                        <Lang value='nl'>Importeren</Lang>
                        <Lang value='dk'>Importere</Lang>
                        <Lang value='pt'>Importação</Lang>
                        <Lang value='es'>Importar</Lang>
                        <Lang value='ru'>Импорт</Lang>
                    </h3>
                    <p>
                        <Lang value='en'>To import Foricon Package to your site, please copy the code below and paste it into your HTML&apos;s <span className='small-code element'>head</span></Lang>
                        <Lang value='vi'>Để import Foricon Package vào trang web của bạn, vui lòng sao chép mã bên dưới và dán vào thẻ <span className='small-code element'>head</span> của HTML của bạn</Lang>
                        <Lang value='fr'>Pour importer le package Foricon sur votre site, veuillez copier le code ci-dessous et le coller dans votre <span className='small-code element'>head</span> HTML</Lang>
                        <Lang value='it'>Per importare il pacchetto Foricon sul tuo sito, copia il codice sottostante e incollalo nel <span className='small-code element'>head</span> del tuo HTML</Lang>
                        <Lang value='kr'>귀하의 사이트로 Foricon 패키지를 가져오려면 아래 코드를 복사하여 HTML의 <span className='small-code element'>head</span>에 붙여넣으세요.</Lang>
                        <Lang value='ja'>Foricon パッケージをサイトにインポートするには、以下のコードをコピーして HTML の <span className='small-code element'>head</span> に貼り付けてください。</Lang>
                        <Lang value='de'>Um das Foricon-Paket auf Ihre Website zu importieren, kopieren Sie bitte den folgenden Code und fügen Sie ihn in den <span className='small-code element'>head</span> Ihres HTML-Codes ein.</Lang>
                        <Lang value='nl'>Om het Foricon-pakket naar uw site te importeren, kopieert u de onderstaande code en plakt u deze in de <span className='small-code element'>head</span> van uw HTML</Lang>
                        <Lang value='dk'>For at importere Foricon Package til dit websted, skal du kopiere koden nedenfor og indsætte den i din HTMLs <span className='small-code element'>head</span></Lang>
                        <Lang value='pt'>Para importar o pacote Foricon para o seu site, copie o código abaixo e cole-o no <span className='small-code element'>head</span> do seu HTML</Lang>
                        <Lang value='es'>Para importar el paquete Foricon a su sitio, copie el código a continuación y péguelo en el <span className='small-code element'>head</span> de su HTML.</Lang>
                        <Lang value='ru'>Чтобы импортировать пакет Foricon на свой сайт, скопируйте код ниже и вставьте его в <span className='small-code element'>head</span> вашего HTML-кода.</Lang>
                    </p>
                    <code name='HTML'></code>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'docs/styling-icons/basics')}>
                            <Lang value='en'>Guide about customizing icons</Lang>
                            <Lang value='vi'>Hướng dẫn tùy chỉnh biểu tượng</Lang>
                            <Lang value='fr'>Guide sur la personnalisation des icônes</Lang>
                            <Lang value='it'>Guida alla personalizzazione delle icone</Lang>
                            <Lang value='kr'>아이콘 사용자 정의에 대한 가이드</Lang>
                            <Lang value='ja'>アイコンのカスタマイズに関するガイド</Lang>
                            <Lang value='de'>Anleitung zum Anpassen von Symbolen</Lang>
                            <Lang value='nl'>Handleiding voor het aanpassen van pictogrammen</Lang>
                            <Lang value='dk'>Vejledning om tilpasning af ikoner</Lang>
                            <Lang value='pt'>Guia sobre a personalização de ícones</Lang>
                            <Lang value='es'>Guía sobre cómo personalizar iconos</Lang>
                            <Lang value='ru'>Руководство по настройке иконок</Lang>
                        </li>
                    </ul>
                </div>
                <div name='package/settings'>
                    <h3>
                        <Lang value='en'>Package settings</Lang>
                        <Lang value='vi'>Cài đặt gói</Lang>
                        <Lang value='fr'>Paramètres du package</Lang>
                        <Lang value='it'>Impostazioni del pacchetto</Lang>
                        <Lang value='kr'>패키지 설정</Lang>
                        <Lang value='ja'>パッケージ設定</Lang>
                        <Lang value='de'>Paketeinstellungen</Lang>
                        <Lang value='nl'>Pakketinstellingen</Lang>
                        <Lang value='dk'>Pakkeindstillinger</Lang>
                        <Lang value='pt'>Configurações do pacote</Lang>
                        <Lang value='es'>Configuración del paquete</Lang>
                        <Lang value='ru'>Настройки пакета</Lang>
                    </h3>
                    <form>
                        <Lang value='en'>Version</Lang>
                        <Lang value='vi'>Phiên bản</Lang>
                        <Lang value='fr'>Option de rendu</Lang>
                        <Lang value='it'>Opzione di rendering</Lang>
                        <Lang value='kr'>렌더링 옵션</Lang>
                        <Lang value='ja'>レンダリングオプション</Lang>
                        <Lang value='de'>Rendering-Option</Lang>
                        <Lang value='nl'>Rendering-optie</Lang>
                        <Lang value='dk'>Mulighed for gengivelse</Lang>
                        <Lang value='pt'>Opção de renderização</Lang>
                        <Lang value='es'>Opción de renderizado</Lang>
                        <Lang value='ru'>Вариант рендеринга</Lang>
                        <f-select name='versions' multiple required>
                            <text></text>
                            <option-list>
                            <f-option value='b1'>Beta 1.7.5</f-option>
                            <f-option value='b2'>Beta 2+ (TTF)</f-option>
                            <f-option value='b2w2'>Beta 2+ (WOFF2)</f-option>
                            </option-list>
                        </f-select>
                        <Lang value='en'>Rendering option</Lang>
                        <Lang value='vi'>Tùy chọn kết xuất</Lang>
                        <Lang value='fr'>Option de rendu</Lang>
                        <Lang value='it'>Opzione di rendering</Lang>
                        <Lang value='kr'>렌더링 옵션</Lang>
                        <Lang value='ja'>レンダリングオプション</Lang>
                        <Lang value='de'>Rendering-Option</Lang>
                        <Lang value='nl'>Rendering-optie</Lang>
                        <Lang value='dk'>Mulighed for gengivelse</Lang>
                        <Lang value='pt'>Opção de renderização</Lang>
                        <Lang value='es'>Opción de renderizado</Lang>
                        <Lang value='ru'>Вариант рендеринга</Lang>
                        <f-select name='rendering-option'>
                            <text></text>
                            <option-list>
                            <f-option value='performance'>
                                <Lang value='en'>Performance</Lang>
                                <Lang value='vi'>Hiệu suất</Lang>
                                <Lang value='fr'>Performance</Lang>
                                <Lang value='it'>Prestazione</Lang>
                                <Lang value='kr'>성능</Lang>
                                <Lang value='ja'>パフォーマンス</Lang>
                                <Lang value='de'>Leistung</Lang>
                                <Lang value='nl'>Prestatie</Lang>
                                <Lang value='dk'>Ydeevne</Lang>
                                <Lang value='pt'>Desempenho</Lang>
                                <Lang value='es'>Actuación</Lang>
                                <Lang value='ru'>Производительность</Lang>
                            </f-option>
                            <f-option value='precision'>
                                <Lang value='en'>Precision</Lang>
                                <Lang value='vi'>Chính xác</Lang>
                                <Lang value='fr'>Précision</Lang>
                                <Lang value='it'>Precisione</Lang>
                                <Lang value='kr'>정도</Lang>
                                <Lang value='ja'>精度</Lang>
                                <Lang value='de'>Präzision</Lang>
                                <Lang value='nl'>Precisie</Lang>
                                <Lang value='dk'>Præcision</Lang>
                                <Lang value='pt'>Precisão</Lang>
                                <Lang value='es'>Precisión</Lang>
                                <Lang value='ru'>Точность</Lang>
                            </f-option>
                            </option-list>
                        </f-select>
                        <Lang value='en'>Allowed domains</Lang>
                        <Lang value='vi'>Tên miền được phép</Lang>
                        <Lang value='fr'>Domaines autorisés</Lang>
                        <Lang value='it'>Domini consentiti</Lang>
                        <Lang value='kr'>허용된 도메인</Lang>
                        <Lang value='ja'>許可されたドメイン</Lang>
                        <Lang value='de'>Erlaubte Domänen</Lang>
                        <Lang value='nl'>Toegestane domeinen</Lang>
                        <Lang value='dk'>Tilladte domæner</Lang>
                        <Lang value='pt'>Domínios permitidos</Lang>
                        <Lang value='es'>Dominios permitidos</Lang>
                        <Lang value='ru'>Разрешенные домены</Lang>
                        <ul className='btn-list vertical' name='domains'>
                            <li>
                            <f-icon icon='plus' i-s='outline'></f-icon>
                            <Lang value='en'>Add a domain</Lang>
                            <Lang value='vi'>Thêm tên miền</Lang>
                            <Lang value='fr'>Ajouter un domaine</Lang>
                            <Lang value='it'>Aggiungi un dominio</Lang>
                            <Lang value='kr'>도메인 추가</Lang>
                            <Lang value='ja'>ドメインを追加する</Lang>
                            <Lang value='de'>Hinzufügen einer Domäne</Lang>
                            <Lang value='nl'>Een domein toevoegen</Lang>
                            <Lang value='dk'>Tilføj et domæne</Lang>
                            <Lang value='pt'>Adicionar um domínio</Lang>
                            <Lang value='es'>Agregar un dominio</Lang>
                            <Lang value='ru'>Добавить домен</Lang>
                            </li>
                        </ul>
                        <button className='primary'>
                            <Lang value='en'>Save changes</Lang>
                            <Lang value='vi'>Lưu thay đổi</Lang>
                            <Lang value='fr'>Enregistrer les modifications</Lang>
                            <Lang value='it'>Salvare le modifiche</Lang>
                            <Lang value='kr'>변경 사항 저장</Lang>
                            <Lang value='ja'>変更を保存</Lang>
                            <Lang value='de'>Änderungen speichern</Lang>
                            <Lang value='nl'>Wijzigingen opslaan</Lang>
                            <Lang value='dk'>Gem ændringer</Lang>
                            <Lang value='pt'>Guardar alterações</Lang>
                            <Lang value='es'>Guardar cambios</Lang>
                            <Lang value='ru'>Сохранить изменения</Lang>
                        </button>
                    </form>
                </div>
                <div name='package/download'>
                    <h3>
                        <Lang value='en'>Download</Lang>
                        <Lang value='vi'>Tải xuống</Lang>
                        <Lang value='fr'>Télécharger</Lang>
                        <Lang value='it'>Scaricamento</Lang>
                        <Lang value='kr'>다운로드</Lang>
                        <Lang value='ja'>ダウンロード</Lang>
                        <Lang value='de'>Herunterladen</Lang>
                        <Lang value='nl'>Download</Lang>
                        <Lang value='dk'>Download</Lang>
                        <Lang value='pt'>Transferir</Lang>
                        <Lang value='es'>Descargar</Lang>
                        <Lang value='ru'>Скачать</Lang>
                    </h3>
                    <ul>
                        <li>
                            <h6>
                                <Lang value='en'>Font pack</Lang>
                                <Lang value='vi'>Gói phông chữ</Lang>
                                <Lang value='fr'>Pack de polices</Lang>
                                <Lang value='it'>Pacchetto di caratteri</Lang>
                                <Lang value='kr'>폰트 팩</Lang>
                                <Lang value='ja'>フォントパック</Lang>
                                <Lang value='de'>Schriftartenpaket</Lang>
                                <Lang value='nl'>Lettertypepakket</Lang>
                                <Lang value='dk'>Skrifttypepakke</Lang>
                                <Lang value='pt'>Pacote de fontes</Lang>
                                <Lang value='es'>Paquete de fuentes</Lang>
                                <Lang value='ru'>набор шрифтов</Lang>
                            </h6>
                            <span></span>
                            <button className='primary' name='fonts'>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                            </button>
                        </li>
                        <li>
                            <h6>
                                <Lang value='en'>Icon pack</Lang>
                                <Lang value='vi'>Gói biểu tượng</Lang>
                                <Lang value='fr'>Pack d&apos;icônes</Lang>
                                <Lang value='it'>Pacchetto di icone</Lang>
                                <Lang value='kr'>아이콘 팩</Lang>
                                <Lang value='ja'>アイコンパック</Lang>
                                <Lang value='de'>Symbolpaket</Lang>
                                <Lang value='nl'>Pictogrammenpakket</Lang>
                                <Lang value='dk'>Ikonpakke</Lang>
                                <Lang value='pt'>Pacote de ícones</Lang>
                                <Lang value='es'>Paquete de iconos</Lang>
                                <Lang value='ru'>набор иконок</Lang>
                            </h6>
                            <span></span>
                            <button className='btn primary' name='icons'>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}*/