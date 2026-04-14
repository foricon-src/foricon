import { useRouter } from "next/navigation";
import Sidebar from "Pag/account/sidebar";
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
            </div>
        </div>
    )
}