'use client';

import { useRouter } from "next/navigation";
import { GetLang } from "Com/language";
import usePage from "Pag/account/use-page";
import 'Pag/sidebar-page.css';
import 'Pag/account/internal-global.css';
import './page.css';

export default function Page() {
    let router = useRouter();

    usePage(() => {})

    return (
        <div name='info/edit'>
            <h3>{
                GetLang({
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
                })
            }
            </h3>
            <form>
                <span>{
                    GetLang({
                        en: 'Avatar',
                        vi: 'Ảnh đại diện',
                        fr: 'Avatar',
                        it: "L'Avatar",
                        kr: '화신',
                        ja: 'アバター',
                        de: 'Avatar',
                        nl: 'Avatar',
                        dk: 'Avatar',
                        pt: 'Avatar',
                        es: 'Avatar',
                        ru: 'Аватар',
                    })
                }</span>
                <button type='button' className='secondary' id='main_account-info-edit_form_choose-avatar'>Choose from Media</button>
                <input name='avatar'/>
                <span>{
                    GetLang({
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
                    })
                }</span>
                <input name='name' type='name' maxlength='30' placeholder='John Doe'/>
                <span>{
                    GetLang({
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
                    })
                }</span>
                <input name='email' type='email' placeholder='user@example.com'/>
                <button className='primary'>{
                    GetLang({
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
                    })
                }</button>
            </form>
        </div>
    )
}