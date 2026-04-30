'use client';

import { useRouter } from "next/navigation";
import { GetLang } from 'Com/language';
import usePage from "Pag/(header)/account/use-page";
import 'Pag/sidebar-page.css';
import 'Pag/(header)/account/internal-global.css';
import cssStyle from './page.module.css';
import { useState } from "react";

export default function Page() {
    let router = useRouter();
    let [ u, setU ] = useState();

    usePage(() => {
        setU(user);
    })

    return (
        <div className={cssStyle.account_info}>
            <table>
                <tbody>
                    <tr>
                        <td>{
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
                        }</td>
                        <td>
                            <div className='img circle square' style={{ backgroundImage: `url(${u?.doc.avatar})` }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>{
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
                        }</td>
                        <td>{u?.doc.name}</td>
                    </tr>
                    <tr>
                        <td>{
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
                        }</td>
                        <td>{u?.doc.email}{u?.emailVerified ? <f-icon icon='circle-check'/> : <span>Verify</span>}</td>
                    </tr>
                    <tr>
                        <td>{
                            GetLang({
                                en: 'User ID',
                                vi: 'ID người dùng',
                                fr: "ID de l'utilisateur",
                                it: 'ID utente',
                                kr: '사용자 ID',
                                ja: 'ユーザーID',
                                de: 'Benutzer-ID',
                                nl: 'Gebruikers-ID',
                                dk: 'Bruger-id',
                                pt: 'ID do utilizador',
                                es: 'ID de usuario',
                                ru: 'ID пользователя',
                            })
                        }</td>
                        <td>{u?.uid}</td>
                    </tr>
                    <tr>
                        <td>{
                            GetLang({
                                en: 'Joining date',
                                vi: 'Ngày tham gia',
                                fr: "Date d'adhésion",
                                it: 'Data di adesione',
                                kr: '가입날짜',
                                ja: '入社日',
                                de: 'Eintrittsdatum',
                                nl: 'Datum van toetreding',
                                dk: 'Tilmeldingsdato',
                                pt: 'Data de adesão',
                                es: 'Fecha de ingreso',
                                ru: 'Дата присоединения',
                            })
                        }</td>
                        <td id='main_account-info_joining-date'>21 December, 2023</td>
                    </tr>
                </tbody>
            </table>
            <ul className='btn-list vertical large'>
                <li onClick={() => go(router, 'account/info/edit')}>{
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
                }</li>
            </ul>
        </div>
    )
}