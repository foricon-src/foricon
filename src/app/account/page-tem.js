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
                            en: 'Foricon Plus plans',
                            vi: 'Các gói Foricon Plus',
                            fr: 'Forfaits Foricon Plus',
                            it: 'Piani Foricon Plus',
                            kr: 'Foricon Plus 계획',
                            ja: 'Foricon Plusプラン',
                            de: 'Foricon Plus-Pläne',
                            nl: 'Foricon Plus-abonnementen',
                            dk: 'Foricon Plus-planer',
                            pt: 'Planos Foricon Plus',
                            es: 'Planes de Foricon Plus',
                            ru: 'Планы Foricon Plus',
                        </li>
                        <li className='red'>
                            en: 'Remove my account',
                            vi: 'Xoá tài khoản của tôi',
                            fr: 'Supprimer mon compte',
                            it: 'Rimuovi il mio account',
                            kr: '내 계정 삭제',
                            ja: 'アカウントを削除する',
                            de: 'Mein Konto entfernen',
                            nl: 'Verwijder mijn account',
                            dk: 'Fjern min konto',
                            pt: 'Remover a minha conta',
                            es: 'Eliminar mi cuenta',
                            ru: 'Удалить мой аккаунт',
                        </li>
                    </ul>
                </div>
                <div name='account-info'>
                    <table>
                        <tr>
                            <td>
                            en: 'Avatar',
                            vi: 'Ảnh đại diện',
                            fr: 'Avatar',
                            it: 'L&apos;Avatar',
                            kr: '화신',
                            ja: 'アバター',
                            de: 'Avatar',
                            nl: 'Avatar',
                            dk: 'Avatar',
                            pt: 'Avatar',
                            es: 'Avatar',
                            ru: 'Аватар',
                            </td>
                            <td>
                            <div id='main_account-info_avatar' className='img circle square avatar'></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            en: 'Name',
                            vi: 'Tên',
                            fr: 'Nom',
                            it: 'Nome',
                            kr: '이름',
                            ja: '名前',
                            de: 'Name',
                            nl: 'Naam',
                            dk: 'Navn',
                            pt: 'Nome',
                            es: 'Nombre',
                            ru: 'Имя',
                            </td>
                            <td id='main_account-info_username'>Username123</td>
                        </tr>
                        <tr>
                            <td>
                            en: 'Email',
                            vi: 'Email',
                            fr: 'Email',
                            it: 'Email',
                            kr: '이메일',
                            ja: 'メール',
                            de: 'Email',
                            nl: 'Email',
                            dk: 'Email',
                            pt: 'Email',
                            es: 'Correo electrónico',
                            ru: 'Электронная почта',
                            </td>
                            <td id='main_account-info_email'>user@example.com</td>
                        </tr>
                        <tr>
                            <td>
                            en: 'User ID',
                            vi: 'ID người dùng',
                            fr: 'ID de l&apos;utilisateur',
                            it: 'ID utente',
                            kr: '사용자 ID',
                            ja: 'ユーザーID',
                            de: 'Benutzer-ID',
                            nl: 'Gebruikers-ID',
                            dk: 'Bruger-id',
                            pt: 'ID do utilizador',
                            es: 'ID de usuario',
                            ru: 'ID пользователя',
                            </td>
                            <td id='main_account-info_uid'>123ABC</td>
                        </tr>
                        <tr>
                            <td>
                            en: 'Joining date',
                            vi: 'Ngày tham gia',
                            fr: 'Date d&apos;adhésion',
                            it: 'Data di adesione',
                            kr: '가입날짜',
                            ja: '入社日',
                            de: 'Eintrittsdatum',
                            nl: 'Datum van toetreding',
                            dk: 'Tilmeldingsdato',
                            pt: 'Data de adesão',
                            es: 'Fecha de ingreso',
                            ru: 'Дата присоединения',
                            </td>
                            <td id='main_account-info_joining-date'>21 December, 2023</td>
                        </tr>
                    </table>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'account/info/edit')}>
                            en: 'Edit account info',
                            vi: 'Chỉnh sửa thông tin tài khoản',
                            fr: 'Modifier les informations du compte',
                            it: 'Modifica informazioni account',
                            kr: '계정 정보 편집',
                            ja: 'アカウント情報を編集',
                            de: 'Kontoinformationen bearbeiten',
                            nl: 'Accountgegevens bewerken',
                            dk: 'Rediger kontooplysninger',
                            pt: 'Editar informações da conta',
                            es: 'Editar la información de la cuenta',
                            ru: 'Изменить информацию об аккаунте',
                        </li>
                    </ul>
                </div>
                <div name='account-info/edit'>
                    <h3>
                        en: 'Edit account info',
                        vi: 'Chỉnh sửa thông tin tài khoản',
                        fr: 'Modifier les informations du compte',
                        it: 'Modifica informazioni account',
                        kr: '계정 정보 편집',
                        ja: 'アカウント情報を編集',
                        de: 'Kontoinformationen bearbeiten',
                        nl: 'Accountgegevens bewerken',
                        dk: 'Rediger kontooplysninger',
                        pt: 'Editar informações da conta',
                        es: 'Editar la información de la cuenta',
                        ru: 'Изменить информацию об аккаунте',
                    </h3>
                    <form>
                        en: 'Avatar',
                        vi: 'Ảnh đại diện',
                        fr: 'Avatar',
                        it: 'L&apos;Avatar',
                        kr: '화신',
                        ja: 'アバター',
                        de: 'Avatar',
                        nl: 'Avatar',
                        dk: 'Avatar',
                        pt: 'Avatar',
                        es: 'Avatar',
                        ru: 'Аватар',
                        <input name='avatar'/>
                        <button type='button' className='secondary' id='main_account-info-edit_form_choose-avatar'>Choose from Media</button>
                        en: 'Name',
                        vi: 'Tên',
                        fr: 'Nom',
                        it: 'Nome',
                        kr: '이름',
                        ja: '名前',
                        de: 'Name',
                        nl: 'Naam',
                        dk: 'Navn',
                        pt: 'Nome',
                        es: 'Nombre',
                        ru: 'Имя',
                        <input name='name' type='name' maxlength='30' placeholder='John Doe'/>
                        en: 'Email',
                        vi: 'Email',
                        fr: 'Email',
                        it: 'Email',
                        kr: '이메일',
                        ja: 'メール',
                        de: 'Email',
                        nl: 'Email',
                        dk: 'Email',
                        pt: 'Email',
                        es: 'Correo electrónico',
                        ru: 'Электронная почта',
                        <input name='email' type='email' placeholder='user@example.com'/>
                        <button className='primary'>
                            en: 'Save changes',
                            vi: 'Lưu thay đổi',
                            fr: 'Enregistrer les modifications',
                            it: 'Salvare le modifiche',
                            kr: '변경 사항 저장',
                            ja: '変更を保存',
                            de: 'Änderungen speichern',
                            nl: 'Wijzigingen opslaan',
                            dk: 'Gem ændringer',
                            pt: 'Guardar alterações',
                            es: 'Guardar cambios',
                            ru: 'Сохранить изменения',
                        </button>
                    </form>
                </div>
                <div name='security'>
                    <h3>
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
                    </h3>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'account/security/change-password')}>
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
                        </li>
                        <li onClick={() => go(router, 'account/security/login-history')}>
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
                        </li>
                    </ul>
                </div>
                <div name='security/change-password'>
                    <h3>
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
                    </h3>
                    <form>
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
                        </button>
                    </form>
                </div>
                <div name='security/login-history'>
                    <h3>
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
                    </h3>
                    <ul>
                        <button className='primary'>
                            en: 'Load more',
                            vi: 'Tải thêm',
                            fr: 'Charger plus',
                            it: 'Carica altro',
                            kr: '더 보기',
                            ja: 'さらに読み込む',
                            de: 'Mehr laden',
                            nl: 'Meer laden',
                            dk: 'Indlæs mere',
                            pt: 'Carregar mais',
                            es: 'Cargar más',
                            ru: 'Загрузить еще',
                        </button>
                    </ul>
                </div>
                <div name='personalization'>
                    <form>
                        en: 'Codebox&apos;s font',
                        vi: 'Phông chữ của hộp mã',
                        fr: 'Police de caractères de Codebox',
                        it: 'Il carattere di Codebox',
                        kr: '코드박스의 폰트',
                        ja: 'Codeboxのフォント',
                        de: 'Schriftart von Codebox',
                        nl: 'Het lettertype van Codebox',
                        dk: 'Codebox&apos; skrifttype',
                        pt: 'Fonte Codebox',
                        es: 'Fuente de Codebox',
                        ru: 'Шрифт Codebox',
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
                        en: 'Indentation space',
                        vi: 'Khoảng cách thụt dòng',
                        fr: 'Espace d&apos;indentation',
                        it: 'spazio di rientro',
                        kr: '들여쓰기 공간',
                        ja: 'インデントスペース',
                        de: 'Einrückungsraum',
                        nl: 'Inspringingsruimte',
                        dk: 'Indrykningsafstand',
                        pt: 'Espaço de recuo',
                        es: 'Espacio de indentación',
                        ru: 'Пространство отступа',
                        <input name='indent' type='range' min='1' max='6' step='1' df-value='2'/>
                        <button className='primary'>
                            en: 'Save changes',
                            vi: 'Lưu thay đổi',
                            fr: 'Enregistrer les modifications',
                            it: 'Salvare le modifiche',
                            kr: '변경 사항 저장',
                            ja: '変更を保存',
                            de: 'Änderungen speichern',
                            nl: 'Wijzigingen opslaan',
                            dk: 'Gem ændringer',
                            pt: 'Guardar alterações',
                            es: 'Guardar cambios',
                            ru: 'Сохранить изменения',
                        </button>
                    </form>
                </div>
                <div name='package'>
                    <div id='main_package_pageviews'>
                        <div id='main_package_pageviews_chart'>
                            <div>
                                en: 'You have used',
                                vi: 'Bạn đã sử dụng',
                                fr: 'Vous avez utilisé',
                                it: 'Hai utilizzato',
                                de: 'Sie haben',
                                nl: 'U hebt',
                                dk: 'Du har brugt',
                                pt: 'Utilizou',
                                es: 'Has utilizado',
                                ru: 'Вы использовали',
                                <h4 id='main_package_pageviews_chart_count'></h4>
                                en: 'pageviews',
                                vi: 'lượt xem trang',
                                fr: 'pages vues',
                                it: 'visualizzazioni di pagina',
                                kr: '페이지뷰를 사용했습니다',
                                ja: 'ページビューを使用しました',
                                de: 'Seitenaufrufe verwendet',
                                nl: 'paginaweergaven gebruikt',
                                dk: 'sidevisninger',
                                pt: 'visualizações de página',
                                es: 'páginas vistas',
                                ru: 'просмотров страниц',
                            </div>
                        </div>
                        <span id='main_package_pageviews_reset'></span>
                        <hr/>
                        <ul className='btn-list'>
                            <li onClick={() => go(router, 'account/package/settings')}>
                                <f-icon icon='gear'></f-icon>
                                en: 'Settings',
                                vi: 'Cài đặt',
                                fr: 'Paramètres',
                                it: 'Impostazioni',
                                kr: '설정',
                                ja: '設定',
                                de: 'Einstellungen',
                                nl: 'Instellingen',
                                dk: 'Indstillinger',
                                pt: 'Configurações',
                                es: 'Ajustes',
                                ru: 'Настройки',
                            </li>
                            <li onClick={() => go(router, 'account/package/download')}>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                                en: 'Download',
                                vi: 'Tải xuống',
                                fr: 'Télécharger',
                                it: 'Scaricamento',
                                kr: '다운로드',
                                ja: 'ダウンロード',
                                de: 'Herunterladen',
                                nl: 'Download',
                                dk: 'Download',
                                pt: 'Transferir',
                                es: 'Descargar',
                                ru: 'Скачать',
                            </li>
                        </ul>
                    </div>
                    <h3>
                        en: 'Import',
                        vi: 'Import',
                        fr: 'Importer',
                        it: 'Importare',
                        kr: '수입',
                        ja: '輸入',
                        de: 'Import',
                        nl: 'Importeren',
                        dk: 'Importere',
                        pt: 'Importação',
                        es: 'Importar',
                        ru: 'Импорт',
                    </h3>
                    <p>
                        en: 'To import Foricon Package to your site, please copy the code below and paste it into your HTML&apos;s <span className='small-code element'>head</span>',
                        vi: 'Để import Foricon Package vào trang web của bạn, vui lòng sao chép mã bên dưới và dán vào thẻ <span className='small-code element'>head</span> của HTML của bạn',
                        fr: 'Pour importer le package Foricon sur votre site, veuillez copier le code ci-dessous et le coller dans votre <span className='small-code element'>head</span> HTML',
                        it: 'Per importare il pacchetto Foricon sul tuo sito, copia il codice sottostante e incollalo nel <span className='small-code element'>head</span> del tuo HTML',
                        kr: '귀하의 사이트로 Foricon 패키지를 가져오려면 아래 코드를 복사하여 HTML의 <span className='small-code element'>head</span>에 붙여넣으세요.',
                        ja: 'Foricon パッケージをサイトにインポートするには、以下のコードをコピーして HTML の <span className='small-code element'>head</span> に貼り付けてください。',
                        de: 'Um das Foricon-Paket auf Ihre Website zu importieren, kopieren Sie bitte den folgenden Code und fügen Sie ihn in den <span className='small-code element'>head</span> Ihres HTML-Codes ein.',
                        nl: 'Om het Foricon-pakket naar uw site te importeren, kopieert u de onderstaande code en plakt u deze in de <span className='small-code element'>head</span> van uw HTML',
                        dk: 'For at importere Foricon Package til dit websted, skal du kopiere koden nedenfor og indsætte den i din HTMLs <span className='small-code element'>head</span>',
                        pt: 'Para importar o pacote Foricon para o seu site, copie o código abaixo e cole-o no <span className='small-code element'>head</span> do seu HTML',
                        es: 'Para importar el paquete Foricon a su sitio, copie el código a continuación y péguelo en el <span className='small-code element'>head</span> de su HTML.',
                        ru: 'Чтобы импортировать пакет Foricon на свой сайт, скопируйте код ниже и вставьте его в <span className='small-code element'>head</span> вашего HTML-кода.',
                    </p>
                    <code name='HTML'></code>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'docs/styling-icons/basics')}>
                            en: 'Guide about customizing icons',
                            vi: 'Hướng dẫn tùy chỉnh biểu tượng',
                            fr: 'Guide sur la personnalisation des icônes',
                            it: 'Guida alla personalizzazione delle icone',
                            kr: '아이콘 사용자 정의에 대한 가이드',
                            ja: 'アイコンのカスタマイズに関するガイド',
                            de: 'Anleitung zum Anpassen von Symbolen',
                            nl: 'Handleiding voor het aanpassen van pictogrammen',
                            dk: 'Vejledning om tilpasning af ikoner',
                            pt: 'Guia sobre a personalização de ícones',
                            es: 'Guía sobre cómo personalizar iconos',
                            ru: 'Руководство по настройке иконок',
                        </li>
                    </ul>
                </div>
                <div name='package/settings'>
                    <h3>
                        en: 'Package settings',
                        vi: 'Cài đặt gói',
                        fr: 'Paramètres du package',
                        it: 'Impostazioni del pacchetto',
                        kr: '패키지 설정',
                        ja: 'パッケージ設定',
                        de: 'Paketeinstellungen',
                        nl: 'Pakketinstellingen',
                        dk: 'Pakkeindstillinger',
                        pt: 'Configurações do pacote',
                        es: 'Configuración del paquete',
                        ru: 'Настройки пакета',
                    </h3>
                    <form>
                        en: 'Version',
                        vi: 'Phiên bản',
                        fr: 'Option de rendu',
                        it: 'Opzione di rendering',
                        kr: '렌더링 옵션',
                        ja: 'レンダリングオプション',
                        de: 'Rendering-Option',
                        nl: 'Rendering-optie',
                        dk: 'Mulighed for gengivelse',
                        pt: 'Opção de renderização',
                        es: 'Opción de renderizado',
                        ru: 'Вариант рендеринга',
                        <f-select name='versions' multiple required>
                            <text></text>
                            <option-list>
                            <f-option value='b1'>Beta 1.7.5</f-option>
                            <f-option value='b2'>Beta 2+ (TTF)</f-option>
                            <f-option value='b2w2'>Beta 2+ (WOFF2)</f-option>
                            </option-list>
                        </f-select>
                        en: 'Rendering option',
                        vi: 'Tùy chọn kết xuất',
                        fr: 'Option de rendu',
                        it: 'Opzione di rendering',
                        kr: '렌더링 옵션',
                        ja: 'レンダリングオプション',
                        de: 'Rendering-Option',
                        nl: 'Rendering-optie',
                        dk: 'Mulighed for gengivelse',
                        pt: 'Opção de renderização',
                        es: 'Opción de renderizado',
                        ru: 'Вариант рендеринга',
                        <f-select name='rendering-option'>
                            <text></text>
                            <option-list>
                            <f-option value='performance'>
                                en: 'Performance',
                                vi: 'Hiệu suất',
                                fr: 'Performance',
                                it: 'Prestazione',
                                kr: '성능',
                                ja: 'パフォーマンス',
                                de: 'Leistung',
                                nl: 'Prestatie',
                                dk: 'Ydeevne',
                                pt: 'Desempenho',
                                es: 'Actuación',
                                ru: 'Производительность',
                            </f-option>
                            <f-option value='precision'>
                                en: 'Precision',
                                vi: 'Chính xác',
                                fr: 'Précision',
                                it: 'Precisione',
                                kr: '정도',
                                ja: '精度',
                                de: 'Präzision',
                                nl: 'Precisie',
                                dk: 'Præcision',
                                pt: 'Precisão',
                                es: 'Precisión',
                                ru: 'Точность',
                            </f-option>
                            </option-list>
                        </f-select>
                        en: 'Allowed domains',
                        vi: 'Tên miền được phép',
                        fr: 'Domaines autorisés',
                        it: 'Domini consentiti',
                        kr: '허용된 도메인',
                        ja: '許可されたドメイン',
                        de: 'Erlaubte Domänen',
                        nl: 'Toegestane domeinen',
                        dk: 'Tilladte domæner',
                        pt: 'Domínios permitidos',
                        es: 'Dominios permitidos',
                        ru: 'Разрешенные домены',
                        <ul className='btn-list vertical' name='domains'>
                            <li>
                            <f-icon icon='plus' i-s='outline'></f-icon>
                            en: 'Add a domain',
                            vi: 'Thêm tên miền',
                            fr: 'Ajouter un domaine',
                            it: 'Aggiungi un dominio',
                            kr: '도메인 추가',
                            ja: 'ドメインを追加する',
                            de: 'Hinzufügen einer Domäne',
                            nl: 'Een domein toevoegen',
                            dk: 'Tilføj et domæne',
                            pt: 'Adicionar um domínio',
                            es: 'Agregar un dominio',
                            ru: 'Добавить домен',
                            </li>
                        </ul>
                        <button className='primary'>
                            en: 'Save changes',
                            vi: 'Lưu thay đổi',
                            fr: 'Enregistrer les modifications',
                            it: 'Salvare le modifiche',
                            kr: '변경 사항 저장',
                            ja: '変更を保存',
                            de: 'Änderungen speichern',
                            nl: 'Wijzigingen opslaan',
                            dk: 'Gem ændringer',
                            pt: 'Guardar alterações',
                            es: 'Guardar cambios',
                            ru: 'Сохранить изменения',
                        </button>
                    </form>
                </div>
                <div name='package/download'>
                    <h3>
                        en: 'Download',
                        vi: 'Tải xuống',
                        fr: 'Télécharger',
                        it: 'Scaricamento',
                        kr: '다운로드',
                        ja: 'ダウンロード',
                        de: 'Herunterladen',
                        nl: 'Download',
                        dk: 'Download',
                        pt: 'Transferir',
                        es: 'Descargar',
                        ru: 'Скачать',
                    </h3>
                    <ul>
                        <li>
                            <h6>
                                en: 'Font pack',
                                vi: 'Gói phông chữ',
                                fr: 'Pack de polices',
                                it: 'Pacchetto di caratteri',
                                kr: '폰트 팩',
                                ja: 'フォントパック',
                                de: 'Schriftartenpaket',
                                nl: 'Lettertypepakket',
                                dk: 'Skrifttypepakke',
                                pt: 'Pacote de fontes',
                                es: 'Paquete de fuentes',
                                ru: 'набор шрифтов',
                            </h6>
                            <span></span>
                            <button className='primary' name='fonts'>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                            </button>
                        </li>
                        <li>
                            <h6>
                                en: 'Icon pack',
                                vi: 'Gói biểu tượng',
                                fr: 'Pack d&apos;icônes',
                                it: 'Pacchetto di icone',
                                kr: '아이콘 팩',
                                ja: 'アイコンパック',
                                de: 'Symbolpaket',
                                nl: 'Pictogrammenpakket',
                                dk: 'Ikonpakke',
                                pt: 'Pacote de ícones',
                                es: 'Paquete de iconos',
                                ru: 'набор иконок',
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