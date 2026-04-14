'use client'

import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";
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
            </div>
        </div>
    )
}