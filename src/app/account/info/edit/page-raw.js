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
                <div name='info/edit'>
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
            </div>
        </div>
    )
}