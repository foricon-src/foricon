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
                <div name='info'>
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
            </div>
        </div>
    )
}