'use client'

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";
import 'Pag/sidebar-page.css';

export default function Page() {
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
                            <lang value='en'>Foricon Plus plans</lang>
                            <lang value='vi'>Các gói Foricon Plus</lang>
                            <lang value='fr'>Forfaits Foricon Plus</lang>
                            <lang value='it'>Piani Foricon Plus</lang>
                            <lang value='kr'>Foricon Plus 계획</lang>
                            <lang value='ja'>Foricon Plusプラン</lang>
                            <lang value='de'>Foricon Plus-Pläne</lang>
                            <lang value='nl'>Foricon Plus-abonnementen</lang>
                            <lang value='dk'>Foricon Plus-planer</lang>
                            <lang value='pt'>Planos Foricon Plus</lang>
                            <lang value='es'>Planes de Foricon Plus</lang>
                            <lang value='ru'>Планы Foricon Plus</lang>
                        </li>
                        <li className='red'>
                            <lang value='en'>Remove my account</lang>
                            <lang value='vi'>Xoá tài khoản của tôi</lang>
                            <lang value='fr'>Supprimer mon compte</lang>
                            <lang value='it'>Rimuovi il mio account</lang>
                            <lang value='kr'>내 계정 삭제</lang>
                            <lang value='ja'>アカウントを削除する</lang>
                            <lang value='de'>Mein Konto entfernen</lang>
                            <lang value='nl'>Verwijder mijn account</lang>
                            <lang value='dk'>Fjern min konto</lang>
                            <lang value='pt'>Remover a minha conta</lang>
                            <lang value='es'>Eliminar mi cuenta</lang>
                            <lang value='ru'>Удалить мой аккаунт</lang>
                        </li>
                    </ul>
                </div>
                <div name='account-info'>
                    <table>
                        <tr>
                            <td>
                            <lang value='en'>Avatar</lang>
                            <lang value='vi'>Ảnh đại diện</lang>
                            <lang value='fr'>Avatar</lang>
                            <lang value='it'>L&apos;Avatar</lang>
                            <lang value='kr'>화신</lang>
                            <lang value='ja'>アバター</lang>
                            <lang value='de'>Avatar</lang>
                            <lang value='nl'>Avatar</lang>
                            <lang value='dk'>Avatar</lang>
                            <lang value='pt'>Avatar</lang>
                            <lang value='es'>Avatar</lang>
                            <lang value='ru'>Аватар</lang>
                            </td>
                            <td>
                            <div id='main_account-info_avatar' className='img circle square avatar'></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <lang value='en'>Name</lang>
                            <lang value='vi'>Tên</lang>
                            <lang value='fr'>Nom</lang>
                            <lang value='it'>Nome</lang>
                            <lang value='kr'>이름</lang>
                            <lang value='ja'>名前</lang>
                            <lang value='de'>Name</lang>
                            <lang value='nl'>Naam</lang>
                            <lang value='dk'>Navn</lang>
                            <lang value='pt'>Nome</lang>
                            <lang value='es'>Nombre</lang>
                            <lang value='ru'>Имя</lang>
                            </td>
                            <td id='main_account-info_username'>Username123</td>
                        </tr>
                        <tr>
                            <td>
                            <lang value='en'>Email</lang>
                            <lang value='vi'>Email</lang>
                            <lang value='fr'>Email</lang>
                            <lang value='it'>Email</lang>
                            <lang value='kr'>이메일</lang>
                            <lang value='ja'>メール</lang>
                            <lang value='de'>Email</lang>
                            <lang value='nl'>Email</lang>
                            <lang value='dk'>Email</lang>
                            <lang value='pt'>Email</lang>
                            <lang value='es'>Correo electrónico</lang>
                            <lang value='ru'>Электронная почта</lang>
                            </td>
                            <td id='main_account-info_email'>user@example.com</td>
                        </tr>
                        <tr>
                            <td>
                            <lang value='en'>User ID</lang>
                            <lang value='vi'>ID người dùng</lang>
                            <lang value='fr'>ID de l&apos;utilisateur</lang>
                            <lang value='it'>ID utente</lang>
                            <lang value='kr'>사용자 ID</lang>
                            <lang value='ja'>ユーザーID</lang>
                            <lang value='de'>Benutzer-ID</lang>
                            <lang value='nl'>Gebruikers-ID</lang>
                            <lang value='dk'>Bruger-id</lang>
                            <lang value='pt'>ID do utilizador</lang>
                            <lang value='es'>ID de usuario</lang>
                            <lang value='ru'>ID пользователя</lang>
                            </td>
                            <td id='main_account-info_uid'>123ABC</td>
                        </tr>
                        <tr>
                            <td>
                            <lang value='en'>Joining date</lang>
                            <lang value='vi'>Ngày tham gia</lang>
                            <lang value='fr'>Date d&apos;adhésion</lang>
                            <lang value='it'>Data di adesione</lang>
                            <lang value='kr'>가입날짜</lang>
                            <lang value='ja'>入社日</lang>
                            <lang value='de'>Eintrittsdatum</lang>
                            <lang value='nl'>Datum van toetreding</lang>
                            <lang value='dk'>Tilmeldingsdato</lang>
                            <lang value='pt'>Data de adesão</lang>
                            <lang value='es'>Fecha de ingreso</lang>
                            <lang value='ru'>Дата присоединения</lang>
                            </td>
                            <td id='main_account-info_joining-date'>21 December, 2023</td>
                        </tr>
                    </table>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'account/info/edit')}>
                            <lang value='en'>Edit account info</lang>
                            <lang value='vi'>Chỉnh sửa thông tin tài khoản</lang>
                            <lang value='fr'>Modifier les informations du compte</lang>
                            <lang value='it'>Modifica informazioni account</lang>
                            <lang value='kr'>계정 정보 편집</lang>
                            <lang value='ja'>アカウント情報を編集</lang>
                            <lang value='de'>Kontoinformationen bearbeiten</lang>
                            <lang value='nl'>Accountgegevens bewerken</lang>
                            <lang value='dk'>Rediger kontooplysninger</lang>
                            <lang value='pt'>Editar informações da conta</lang>
                            <lang value='es'>Editar la información de la cuenta</lang>
                            <lang value='ru'>Изменить информацию об аккаунте</lang>
                        </li>
                    </ul>
                </div>
                <div name='account-info/edit'>
                    <h3>
                        <lang value='en'>Edit account info</lang>
                        <lang value='vi'>Chỉnh sửa thông tin tài khoản</lang>
                        <lang value='fr'>Modifier les informations du compte</lang>
                        <lang value='it'>Modifica informazioni account</lang>
                        <lang value='kr'>계정 정보 편집</lang>
                        <lang value='ja'>アカウント情報を編集</lang>
                        <lang value='de'>Kontoinformationen bearbeiten</lang>
                        <lang value='nl'>Accountgegevens bewerken</lang>
                        <lang value='dk'>Rediger kontooplysninger</lang>
                        <lang value='pt'>Editar informações da conta</lang>
                        <lang value='es'>Editar la información de la cuenta</lang>
                        <lang value='ru'>Изменить информацию об аккаунте</lang>
                    </h3>
                    <form>
                        <lang value='en'>Avatar</lang>
                        <lang value='vi'>Ảnh đại diện</lang>
                        <lang value='fr'>Avatar</lang>
                        <lang value='it'>L&apos;Avatar</lang>
                        <lang value='kr'>화신</lang>
                        <lang value='ja'>アバター</lang>
                        <lang value='de'>Avatar</lang>
                        <lang value='nl'>Avatar</lang>
                        <lang value='dk'>Avatar</lang>
                        <lang value='pt'>Avatar</lang>
                        <lang value='es'>Avatar</lang>
                        <lang value='ru'>Аватар</lang>
                        <input name='avatar'/>
                        <button type='button' className='secondary' id='main_account-info-edit_form_choose-avatar'>Choose from Media</button>
                        <lang value='en'>Name</lang>
                        <lang value='vi'>Tên</lang>
                        <lang value='fr'>Nom</lang>
                        <lang value='it'>Nome</lang>
                        <lang value='kr'>이름</lang>
                        <lang value='ja'>名前</lang>
                        <lang value='de'>Name</lang>
                        <lang value='nl'>Naam</lang>
                        <lang value='dk'>Navn</lang>
                        <lang value='pt'>Nome</lang>
                        <lang value='es'>Nombre</lang>
                        <lang value='ru'>Имя</lang>
                        <input name='name' type='name' maxlength='30' placeholder='John Doe'/>
                        <lang value='en'>Email</lang>
                        <lang value='vi'>Email</lang>
                        <lang value='fr'>Email</lang>
                        <lang value='it'>Email</lang>
                        <lang value='kr'>이메일</lang>
                        <lang value='ja'>メール</lang>
                        <lang value='de'>Email</lang>
                        <lang value='nl'>Email</lang>
                        <lang value='dk'>Email</lang>
                        <lang value='pt'>Email</lang>
                        <lang value='es'>Correo electrónico</lang>
                        <lang value='ru'>Электронная почта</lang>
                        <input name='email' type='email' placeholder='user@example.com'/>
                        <button className='primary'>
                            <lang value='en'>Save changes</lang>
                            <lang value='vi'>Lưu thay đổi</lang>
                            <lang value='fr'>Enregistrer les modifications</lang>
                            <lang value='it'>Salvare le modifiche</lang>
                            <lang value='kr'>변경 사항 저장</lang>
                            <lang value='ja'>変更を保存</lang>
                            <lang value='de'>Änderungen speichern</lang>
                            <lang value='nl'>Wijzigingen opslaan</lang>
                            <lang value='dk'>Gem ændringer</lang>
                            <lang value='pt'>Guardar alterações</lang>
                            <lang value='es'>Guardar cambios</lang>
                            <lang value='ru'>Сохранить изменения</lang>
                        </button>
                    </form>
                </div>
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
                <div name='security/login-history'>
                    <h3>
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
                    </h3>
                    <ul>
                        <button className='primary'>
                            <lang value='en'>Load more</lang>
                            <lang value='vi'>Tải thêm</lang>
                            <lang value='fr'>Charger plus</lang>
                            <lang value='it'>Carica altro</lang>
                            <lang value='kr'>더 보기</lang>
                            <lang value='ja'>さらに読み込む</lang>
                            <lang value='de'>Mehr laden</lang>
                            <lang value='nl'>Meer laden</lang>
                            <lang value='dk'>Indlæs mere</lang>
                            <lang value='pt'>Carregar mais</lang>
                            <lang value='es'>Cargar más</lang>
                            <lang value='ru'>Загрузить еще</lang>
                        </button>
                    </ul>
                </div>
                <div name='personalization'>
                    <form>
                        <lang value='en'>Codebox&apos;s font</lang>
                        <lang value='vi'>Phông chữ của hộp mã</lang>
                        <lang value='fr'>Police de caractères de Codebox</lang>
                        <lang value='it'>Il carattere di Codebox</lang>
                        <lang value='kr'>코드박스의 폰트</lang>
                        <lang value='ja'>Codeboxのフォント</lang>
                        <lang value='de'>Schriftart von Codebox</lang>
                        <lang value='nl'>Het lettertype van Codebox</lang>
                        <lang value='dk'>Codebox&apos; skrifttype</lang>
                        <lang value='pt'>Fonte Codebox</lang>
                        <lang value='es'>Fuente de Codebox</lang>
                        <lang value='ru'>Шрифт Codebox</lang>
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
                        <lang value='en'>Indentation space</lang>
                        <lang value='vi'>Khoảng cách thụt dòng</lang>
                        <lang value='fr'>Espace d&apos;indentation</lang>
                        <lang value='it'>spazio di rientro</lang>
                        <lang value='kr'>들여쓰기 공간</lang>
                        <lang value='ja'>インデントスペース</lang>
                        <lang value='de'>Einrückungsraum</lang>
                        <lang value='nl'>Inspringingsruimte</lang>
                        <lang value='dk'>Indrykningsafstand</lang>
                        <lang value='pt'>Espaço de recuo</lang>
                        <lang value='es'>Espacio de indentación</lang>
                        <lang value='ru'>Пространство отступа</lang>
                        <input name='indent' type='range' min='1' max='6' step='1' df-value='2'/>
                        <button className='primary'>
                            <lang value='en'>Save changes</lang>
                            <lang value='vi'>Lưu thay đổi</lang>
                            <lang value='fr'>Enregistrer les modifications</lang>
                            <lang value='it'>Salvare le modifiche</lang>
                            <lang value='kr'>변경 사항 저장</lang>
                            <lang value='ja'>変更を保存</lang>
                            <lang value='de'>Änderungen speichern</lang>
                            <lang value='nl'>Wijzigingen opslaan</lang>
                            <lang value='dk'>Gem ændringer</lang>
                            <lang value='pt'>Guardar alterações</lang>
                            <lang value='es'>Guardar cambios</lang>
                            <lang value='ru'>Сохранить изменения</lang>
                        </button>
                    </form>
                </div>
                <div name='package'>
                    <div id='main_package_pageviews'>
                        <div id='main_package_pageviews_chart'>
                            <div>
                                <lang value='en'>You have used</lang>
                                <lang value='vi'>Bạn đã sử dụng</lang>
                                <lang value='fr'>Vous avez utilisé</lang>
                                <lang value='it'>Hai utilizzato</lang>
                                <lang value='de'>Sie haben</lang>
                                <lang value='nl'>U hebt</lang>
                                <lang value='dk'>Du har brugt</lang>
                                <lang value='pt'>Utilizou</lang>
                                <lang value='es'>Has utilizado</lang>
                                <lang value='ru'>Вы использовали</lang>
                                <h4 id='main_package_pageviews_chart_count'></h4>
                                <lang value='en'>pageviews</lang>
                                <lang value='vi'>lượt xem trang</lang>
                                <lang value='fr'>pages vues</lang>
                                <lang value='it'>visualizzazioni di pagina</lang>
                                <lang value='kr'>페이지뷰를 사용했습니다</lang>
                                <lang value='ja'>ページビューを使用しました</lang>
                                <lang value='de'>Seitenaufrufe verwendet</lang>
                                <lang value='nl'>paginaweergaven gebruikt</lang>
                                <lang value='dk'>sidevisninger</lang>
                                <lang value='pt'>visualizações de página</lang>
                                <lang value='es'>páginas vistas</lang>
                                <lang value='ru'>просмотров страниц</lang>
                            </div>
                        </div>
                        <span id='main_package_pageviews_reset'></span>
                        <hr/>
                        <ul className='btn-list'>
                            <li onClick={() => go(router, 'account/package/settings')}>
                                <f-icon icon='gear'></f-icon>
                                <lang value='en'>Settings</lang>
                                <lang value='vi'>Cài đặt</lang>
                                <lang value='fr'>Paramètres</lang>
                                <lang value='it'>Impostazioni</lang>
                                <lang value='kr'>설정</lang>
                                <lang value='ja'>設定</lang>
                                <lang value='de'>Einstellungen</lang>
                                <lang value='nl'>Instellingen</lang>
                                <lang value='dk'>Indstillinger</lang>
                                <lang value='pt'>Configurações</lang>
                                <lang value='es'>Ajustes</lang>
                                <lang value='ru'>Настройки</lang>
                            </li>
                            <li onClick={() => go(router, 'account/package/download')}>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                                <lang value='en'>Download</lang>
                                <lang value='vi'>Tải xuống</lang>
                                <lang value='fr'>Télécharger</lang>
                                <lang value='it'>Scaricamento</lang>
                                <lang value='kr'>다운로드</lang>
                                <lang value='ja'>ダウンロード</lang>
                                <lang value='de'>Herunterladen</lang>
                                <lang value='nl'>Download</lang>
                                <lang value='dk'>Download</lang>
                                <lang value='pt'>Transferir</lang>
                                <lang value='es'>Descargar</lang>
                                <lang value='ru'>Скачать</lang>
                            </li>
                        </ul>
                    </div>
                    <h3>
                        <lang value='en'>Import</lang>
                        <lang value='vi'>Import</lang>
                        <lang value='fr'>Importer</lang>
                        <lang value='it'>Importare</lang>
                        <lang value='kr'>수입</lang>
                        <lang value='ja'>輸入</lang>
                        <lang value='de'>Import</lang>
                        <lang value='nl'>Importeren</lang>
                        <lang value='dk'>Importere</lang>
                        <lang value='pt'>Importação</lang>
                        <lang value='es'>Importar</lang>
                        <lang value='ru'>Импорт</lang>
                    </h3>
                    <p>
                        <lang value='en'>To import Foricon Package to your site, please copy the code below and paste it into your HTML&apos;s <span className='small-code element'>head</span></lang>
                        <lang value='vi'>Để import Foricon Package vào trang web của bạn, vui lòng sao chép mã bên dưới và dán vào thẻ <span className='small-code element'>head</span> của HTML của bạn</lang>
                        <lang value='fr'>Pour importer le package Foricon sur votre site, veuillez copier le code ci-dessous et le coller dans votre <span className='small-code element'>head</span> HTML</lang>
                        <lang value='it'>Per importare il pacchetto Foricon sul tuo sito, copia il codice sottostante e incollalo nel <span className='small-code element'>head</span> del tuo HTML</lang>
                        <lang value='kr'>귀하의 사이트로 Foricon 패키지를 가져오려면 아래 코드를 복사하여 HTML의 <span className='small-code element'>head</span>에 붙여넣으세요.</lang>
                        <lang value='ja'>Foricon パッケージをサイトにインポートするには、以下のコードをコピーして HTML の <span className='small-code element'>head</span> に貼り付けてください。</lang>
                        <lang value='de'>Um das Foricon-Paket auf Ihre Website zu importieren, kopieren Sie bitte den folgenden Code und fügen Sie ihn in den <span className='small-code element'>head</span> Ihres HTML-Codes ein.</lang>
                        <lang value='nl'>Om het Foricon-pakket naar uw site te importeren, kopieert u de onderstaande code en plakt u deze in de <span className='small-code element'>head</span> van uw HTML</lang>
                        <lang value='dk'>For at importere Foricon Package til dit websted, skal du kopiere koden nedenfor og indsætte den i din HTMLs <span className='small-code element'>head</span></lang>
                        <lang value='pt'>Para importar o pacote Foricon para o seu site, copie o código abaixo e cole-o no <span className='small-code element'>head</span> do seu HTML</lang>
                        <lang value='es'>Para importar el paquete Foricon a su sitio, copie el código a continuación y péguelo en el <span className='small-code element'>head</span> de su HTML.</lang>
                        <lang value='ru'>Чтобы импортировать пакет Foricon на свой сайт, скопируйте код ниже и вставьте его в <span className='small-code element'>head</span> вашего HTML-кода.</lang>
                    </p>
                    <code name='HTML'></code>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'docs/styling-icons/basics')}>
                            <lang value='en'>Guide about customizing icons</lang>
                            <lang value='vi'>Hướng dẫn tùy chỉnh biểu tượng</lang>
                            <lang value='fr'>Guide sur la personnalisation des icônes</lang>
                            <lang value='it'>Guida alla personalizzazione delle icone</lang>
                            <lang value='kr'>아이콘 사용자 정의에 대한 가이드</lang>
                            <lang value='ja'>アイコンのカスタマイズに関するガイド</lang>
                            <lang value='de'>Anleitung zum Anpassen von Symbolen</lang>
                            <lang value='nl'>Handleiding voor het aanpassen van pictogrammen</lang>
                            <lang value='dk'>Vejledning om tilpasning af ikoner</lang>
                            <lang value='pt'>Guia sobre a personalização de ícones</lang>
                            <lang value='es'>Guía sobre cómo personalizar iconos</lang>
                            <lang value='ru'>Руководство по настройке иконок</lang>
                        </li>
                    </ul>
                </div>
                <div name='package/settings'>
                    <h3>
                        <lang value='en'>Package settings</lang>
                        <lang value='vi'>Cài đặt gói</lang>
                        <lang value='fr'>Paramètres du package</lang>
                        <lang value='it'>Impostazioni del pacchetto</lang>
                        <lang value='kr'>패키지 설정</lang>
                        <lang value='ja'>パッケージ設定</lang>
                        <lang value='de'>Paketeinstellungen</lang>
                        <lang value='nl'>Pakketinstellingen</lang>
                        <lang value='dk'>Pakkeindstillinger</lang>
                        <lang value='pt'>Configurações do pacote</lang>
                        <lang value='es'>Configuración del paquete</lang>
                        <lang value='ru'>Настройки пакета</lang>
                    </h3>
                    <form>
                        <lang value='en'>Version</lang>
                        <lang value='vi'>Phiên bản</lang>
                        <lang value='fr'>Option de rendu</lang>
                        <lang value='it'>Opzione di rendering</lang>
                        <lang value='kr'>렌더링 옵션</lang>
                        <lang value='ja'>レンダリングオプション</lang>
                        <lang value='de'>Rendering-Option</lang>
                        <lang value='nl'>Rendering-optie</lang>
                        <lang value='dk'>Mulighed for gengivelse</lang>
                        <lang value='pt'>Opção de renderização</lang>
                        <lang value='es'>Opción de renderizado</lang>
                        <lang value='ru'>Вариант рендеринга</lang>
                        <f-select name='versions' multiple required>
                            <text></text>
                            <option-list>
                            <f-option value='b1'>Beta 1.7.5</f-option>
                            <f-option value='b2'>Beta 2+ (TTF)</f-option>
                            <f-option value='b2w2'>Beta 2+ (WOFF2)</f-option>
                            </option-list>
                        </f-select>
                        <lang value='en'>Rendering option</lang>
                        <lang value='vi'>Tùy chọn kết xuất</lang>
                        <lang value='fr'>Option de rendu</lang>
                        <lang value='it'>Opzione di rendering</lang>
                        <lang value='kr'>렌더링 옵션</lang>
                        <lang value='ja'>レンダリングオプション</lang>
                        <lang value='de'>Rendering-Option</lang>
                        <lang value='nl'>Rendering-optie</lang>
                        <lang value='dk'>Mulighed for gengivelse</lang>
                        <lang value='pt'>Opção de renderização</lang>
                        <lang value='es'>Opción de renderizado</lang>
                        <lang value='ru'>Вариант рендеринга</lang>
                        <f-select name='rendering-option'>
                            <text></text>
                            <option-list>
                            <f-option value='performance'>
                                <lang value='en'>Performance</lang>
                                <lang value='vi'>Hiệu suất</lang>
                                <lang value='fr'>Performance</lang>
                                <lang value='it'>Prestazione</lang>
                                <lang value='kr'>성능</lang>
                                <lang value='ja'>パフォーマンス</lang>
                                <lang value='de'>Leistung</lang>
                                <lang value='nl'>Prestatie</lang>
                                <lang value='dk'>Ydeevne</lang>
                                <lang value='pt'>Desempenho</lang>
                                <lang value='es'>Actuación</lang>
                                <lang value='ru'>Производительность</lang>
                            </f-option>
                            <f-option value='precision'>
                                <lang value='en'>Precision</lang>
                                <lang value='vi'>Chính xác</lang>
                                <lang value='fr'>Précision</lang>
                                <lang value='it'>Precisione</lang>
                                <lang value='kr'>정도</lang>
                                <lang value='ja'>精度</lang>
                                <lang value='de'>Präzision</lang>
                                <lang value='nl'>Precisie</lang>
                                <lang value='dk'>Præcision</lang>
                                <lang value='pt'>Precisão</lang>
                                <lang value='es'>Precisión</lang>
                                <lang value='ru'>Точность</lang>
                            </f-option>
                            </option-list>
                        </f-select>
                        <lang value='en'>Allowed domains</lang>
                        <lang value='vi'>Tên miền được phép</lang>
                        <lang value='fr'>Domaines autorisés</lang>
                        <lang value='it'>Domini consentiti</lang>
                        <lang value='kr'>허용된 도메인</lang>
                        <lang value='ja'>許可されたドメイン</lang>
                        <lang value='de'>Erlaubte Domänen</lang>
                        <lang value='nl'>Toegestane domeinen</lang>
                        <lang value='dk'>Tilladte domæner</lang>
                        <lang value='pt'>Domínios permitidos</lang>
                        <lang value='es'>Dominios permitidos</lang>
                        <lang value='ru'>Разрешенные домены</lang>
                        <ul className='btn-list vertical' name='domains'>
                            <li>
                            <f-icon icon='plus' i-s='outline'></f-icon>
                            <lang value='en'>Add a domain</lang>
                            <lang value='vi'>Thêm tên miền</lang>
                            <lang value='fr'>Ajouter un domaine</lang>
                            <lang value='it'>Aggiungi un dominio</lang>
                            <lang value='kr'>도메인 추가</lang>
                            <lang value='ja'>ドメインを追加する</lang>
                            <lang value='de'>Hinzufügen einer Domäne</lang>
                            <lang value='nl'>Een domein toevoegen</lang>
                            <lang value='dk'>Tilføj et domæne</lang>
                            <lang value='pt'>Adicionar um domínio</lang>
                            <lang value='es'>Agregar un dominio</lang>
                            <lang value='ru'>Добавить домен</lang>
                            </li>
                        </ul>
                        <button className='primary'>
                            <lang value='en'>Save changes</lang>
                            <lang value='vi'>Lưu thay đổi</lang>
                            <lang value='fr'>Enregistrer les modifications</lang>
                            <lang value='it'>Salvare le modifiche</lang>
                            <lang value='kr'>변경 사항 저장</lang>
                            <lang value='ja'>変更を保存</lang>
                            <lang value='de'>Änderungen speichern</lang>
                            <lang value='nl'>Wijzigingen opslaan</lang>
                            <lang value='dk'>Gem ændringer</lang>
                            <lang value='pt'>Guardar alterações</lang>
                            <lang value='es'>Guardar cambios</lang>
                            <lang value='ru'>Сохранить изменения</lang>
                        </button>
                    </form>
                </div>
                <div name='package/download'>
                    <h3>
                        <lang value='en'>Download</lang>
                        <lang value='vi'>Tải xuống</lang>
                        <lang value='fr'>Télécharger</lang>
                        <lang value='it'>Scaricamento</lang>
                        <lang value='kr'>다운로드</lang>
                        <lang value='ja'>ダウンロード</lang>
                        <lang value='de'>Herunterladen</lang>
                        <lang value='nl'>Download</lang>
                        <lang value='dk'>Download</lang>
                        <lang value='pt'>Transferir</lang>
                        <lang value='es'>Descargar</lang>
                        <lang value='ru'>Скачать</lang>
                    </h3>
                    <ul>
                        <li>
                            <h6>
                                <lang value='en'>Font pack</lang>
                                <lang value='vi'>Gói phông chữ</lang>
                                <lang value='fr'>Pack de polices</lang>
                                <lang value='it'>Pacchetto di caratteri</lang>
                                <lang value='kr'>폰트 팩</lang>
                                <lang value='ja'>フォントパック</lang>
                                <lang value='de'>Schriftartenpaket</lang>
                                <lang value='nl'>Lettertypepakket</lang>
                                <lang value='dk'>Skrifttypepakke</lang>
                                <lang value='pt'>Pacote de fontes</lang>
                                <lang value='es'>Paquete de fuentes</lang>
                                <lang value='ru'>набор шрифтов</lang>
                            </h6>
                            <span></span>
                            <button className='primary' name='fonts'>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                            </button>
                        </li>
                        <li>
                            <h6>
                                <lang value='en'>Icon pack</lang>
                                <lang value='vi'>Gói biểu tượng</lang>
                                <lang value='fr'>Pack d&apos;icônes</lang>
                                <lang value='it'>Pacchetto di icone</lang>
                                <lang value='kr'>아이콘 팩</lang>
                                <lang value='ja'>アイコンパック</lang>
                                <lang value='de'>Symbolpaket</lang>
                                <lang value='nl'>Pictogrammenpakket</lang>
                                <lang value='dk'>Ikonpakke</lang>
                                <lang value='pt'>Pacote de ícones</lang>
                                <lang value='es'>Paquete de iconos</lang>
                                <lang value='ru'>набор иконок</lang>
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
}