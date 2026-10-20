'use client';

import { useContext, useRef, useState } from 'react';
import { UserContext } from 'Com/user';
import useGo from 'Com/go';
import cssStyle from './page.module.css';
import IconInput from 'Com/iconinput';
import { MediaContext } from 'Com/f-media';
import { verifyBeforeUpdateEmail } from 'firebase/auth';
import Modal from 'Com/modal';

export default function PageClient() {
    let go = useGo();

    let { user, setUser } = useContext(UserContext);
    let { mediaOptions, setMediaOptions } = useContext(MediaContext);

    let modalRef = useRef();

    let [ name, setName ] = useState();
    let [ email, setEmail ] = useState();
    let [ media, setMedia ] = useState();
    
    let { lang } = document.documentElement;

    return <div className={cssStyle.account_info}>
        <Modal ref={modalRef} type='confirm' btns={[ 'Ok' ]}>
            <h3>{
                {
                    en: 'Check your inbox!',
                    vi: 'Kiểm tra hộp thư của bạn!',
                    fr: 'Consultez votre boîte de réception !',
                    it: 'Controlla la tua casella di posta!',
                    ko: '받은 편지함을 확인해 보세요!',
                    ja: '受信トレイを確認してください！',
                    de: 'Überprüfe deinen Posteingang!',
                    nl: 'Check je inbox!',
                    da: 'Tjek din indbakke!',
                    pt: 'Confira a sua caixa de entrada!',
                    es: '¡Revisa tu bandeja de entrada!',
                    ru: 'Загляните в свой почтовый ящик!',
                }[lang]
            }</h3>
            <p>{
                {
                    en: `We've sent a verification email to ${email}. Check your inbox or spam folder to verify your email address. Once verified, your email address will be updated.`,
                    vi: `Chúng tôi đã gửi email xác minh đến ${email}. Vui lòng kiểm tra hộp thư đến hoặc thư mục thư rác để xác minh địa chỉ email của bạn. Sau khi xác minh, địa chỉ email của bạn sẽ được cập nhật.`,
                    fr: `Nous avons envoyé un e-mail de vérification à l'adresse ${email}. Consultez votre boîte de réception ou votre dossier de courriers indésirables pour confirmer votre adresse e-mail. Une fois cette vérification effectuée, votre adresse e-mail sera mise à jour.`,
                    it: `Abbiamo inviato un'email di verifica all'indirizzo ${email}. Controlla la tua casella di posta o la cartella dello spam per verificare il tuo indirizzo email. Una volta effettuata la verifica, il tuo indirizzo email verrà aggiornato.`,
                    ko: `${email}으로 인증 이메일을 보냈습니다. 받은 편지함이나 스팸 메일함을 확인하여 이메일 주소를 인증해 주세요. 인증이 완료되면 이메일 주소가 업데이트됩니다.`,
                    ja: `${email} 宛てに確認メールを送信しました。受信トレイまたは迷惑メールフォルダを確認し、メールアドレスの認証を行ってください。認証が完了すると、メールアドレスが更新されます。`,
                    de: `Wir haben eine Bestätigungs-E-Mail an ${email} gesendet. Überprüfen Sie Ihren Posteingang oder Spam-Ordner, um Ihre E-Mail-Adresse zu bestätigen. Sobald die Bestätigung erfolgt ist, wird Ihre E-Mail-Adresse aktualisiert.`,
                    nl: `We hebben een verificatie-e-mail verstuurd naar ${email}. Controleer je postvak IN of je map met ongewenste e-mail om je e-mailadres te verifiëren. Zodra de verificatie is voltooid, wordt je e-mailadres bijgewerkt.`,
                    da: `Vi har sendt en bekræftelsesmail til ${email}. Tjek din indbakke eller din mappe med uønsket post for at bekræfte din e-mailadresse. Når den er bekræftet, bliver din e-mailadresse opdateret.`,
                    pt: `Enviámos um e-mail de verificação para ${email}. Verifique a sua caixa de entrada ou pasta de spam para confirmar o seu endereço de e-mail. Após a verificação, o seu endereço de e-mail será atualizado.`,
                    es: `Hemos enviado un correo electrónico de verificación a ${email}. Revisa tu bandeja de entrada o la carpeta de correo no deseado para verificar tu dirección de correo electrónico. Una vez verificada, tu dirección de correo electrónico se actualizará.`,
                    ru: `Мы отправили письмо для подтверждения на адрес ${email}. Проверьте входящие сообщения или папку «Спам», чтобы подтвердить свой адрес электронной почты. После подтверждения ваш адрес электронной почты будет обновлен.`,
                }[lang]
            }</p>
        </Modal>
        <div>
            <div>
                <span>{
                    {
                        en: 'Avatar',
                        vi: 'Ảnh đại diện',
                        fr: 'Avatar',
                        it: 'Avatar',
                        ko: '화신',
                        ja: 'アバター',
                        de: 'Avatar',
                        nl: 'Avatar',
                        da: 'Avatar',
                        pt: 'Avatar',
                        es: 'Avatar',
                        ru: 'Аватар',
                    }[lang]
                }</span>
            </div>
            <div>
                <img src={media?.secure_url || user?.photoURL}/>
                <button
                    className='secondary'
                    onClick={() => setMediaOptions({
                        aspectRatio: 1,
                        fileType: 'image/*',
                        onConfirm: setMedia
                    })}
                >{
                    {
                        en: 'Replace',
                        vi: 'Thay thế',
                        fr: 'Remplacer',
                        it: 'Sostituire',
                        ko: '바꾸다',
                        ja: '交換する',
                        de: 'Ersetzen',
                        nl: 'Vervangen',
                        da: 'Erstatte',
                        pt: 'Substituir',
                        es: 'Reemplazar',
                        ru: 'Заменять',
                    }[lang]
                }</button>
            </div>
        </div>
        <div>
            <div>
                <span>{
                    {
                        en: 'Name',
                        vi: 'Tên',
                        fr: 'Nom',
                        it: 'Nome',
                        ko: '이름',
                        ja: '名前',
                        de: 'Name',
                        nl: 'Naam',
                        da: 'Navn',
                        pt: 'Nome',
                        es: 'Nombre',
                        ru: 'Имя',
                    }[lang]
                }</span>
            </div>
            <div>
                <input value={name || user?.displayName} onInput={e => setName(e.target.value)}/>
            </div>
        </div>
        <div>
            <div>
                <span>{
                    {
                        en: 'Email',
                        vi: 'Email',
                        fr: 'E-mail',
                        it: 'E-mail',
                        ko: '이메일',
                        ja: 'メール',
                        de: 'E-Mail',
                        nl: 'E-mail',
                        da: 'E-mail',
                        pt: 'E-mail',
                        es: 'Correo electrónico',
                        ru: 'Электронная почта',
                    }[lang]
                }</span>
            </div>
            <div>
                <input value={email || user?.email} onInput={e => setEmail(e.target.value)}/>
                {
                    user?.emailVerified
                        ? <span style={{ color: 'var(--green)' }}><f-icon icon='circle-check'/> {
                            {
                                en: 'Verified',
                                vi: 'Đã xác minh',
                                fr: 'Vérifié',
                                it: 'Verificato',
                                ko: '인증됨',
                                ja: '認証済み',
                                de: 'Verifiziert',
                                nl: 'Geverifieerd',
                                da: 'Bekræftet',
                                pt: 'Verificado',
                                es: 'Verificado',
                                ru: 'Подтверждено',
                            }[lang]
                        }</span>
                        : <button className='secondary'>{
                            {
                                en: 'Verify',
                                vi: 'Xác minh',
                                fr: 'Vérifier',
                                it: 'Verificare',
                                ko: '확인하다',
                                ja: '確認する',
                                de: 'Verifizieren',
                                nl: 'Verifiëren',
                                da: 'Verificere',
                                pt: 'Verificar',
                                es: 'Verificar',
                                ru: 'Проверять',
                            }[lang]
                        }</button>
                }
            </div>
        </div>
        <div>
            <div>
                <span>UID</span>
            </div>
            <div>
                <IconInput
                    icon={{ name: 'clone' }}
                    value={user?.uid}
                    onClick={() => {
                        navigator.clipboard.writeText(user.uid);
                        notify('success', {
                            en: 'Copied to clipboard',
                            vi: 'Đã sao chép vào bộ nhớ tạm',
                            fr: 'Copié dans le presse-papiers',
                            it: 'Copiato negli appunti',
                            ko: '클립보드에 복사됨',
                            ja: 'クリップボードにコピーされました',
                            de: 'In die Zwischenablage kopiert',
                            nl: 'Gekopieerd naar het klembord',
                            da: 'Kopieret til udklipsholderen',
                            pt: 'Copiado para a área de transferência',
                            es: 'Copiado al portapapeles',
                            ru: 'Скопировано в буфер обмена',
                        }[lang])
                    }}
                    readOnly
                />
            </div>
        </div>
        <div>
            <div>
                <span>{
                    {
                        en: 'Joining date',
                        vi: 'Ngày tham gia',
                        fr: "Date d'arrivée",
                        it: 'Data di inizio',
                        ko: '입사일',
                        ja: '入社日',
                        de: 'Eintrittsdatum',
                        nl: 'Datum van indiensttreding',
                        da: 'Dato for tiltrædelse',
                        pt: 'Data de ingresso',
                        es: 'Fecha de incorporación',
                        ru: 'Дата начала работы',
                    }[lang]
                }</span>
            </div>
            <div>
                <input value={formatDate(user?.doc.joiningDate || '2023-12-21T17:00:00.000Z', { dateOnly: true })} readOnly/>
            </div>
        </div>
        <button
            className='primary'
            {...{ disabled: !(name || email || media)}}
            onClick={async () => {
                let { body } = document;
                try{
                    disable(body);

                    let token = await user.getIdToken();
                    let res = await fetch('/api/user/update', {
                        method: 'POST',
                        headers: { authorization: `Bearer ${token}` },
                        body: JSON.stringify({ name, avatar: media?.secure_url }),
                    })
                    
                    if (!res.ok) throw new Error(res.statusText);

                    await user.reload();
                    setUser(user);
                    notify('success', 'Updated successfully');

                    if (!email || email == user.email) return;
                    await verifyBeforeUpdateEmail(user, email);
                    modal(modalRef.current);
                }
                catch (err) {
                    notify('error', err.message);
                    console.error(err);
                }
                finally {
                    enable(body);
                    setName(undefined);
                    setEmail(undefined);
                    setMedia(undefined);
                }
            }}
        >{
            {
                en: 'Save',
                vi: 'Lưu',
                fr: 'Sauvegarder',
                it: 'Salva',
                ko: '구하다',
                ja: '保存',
                de: 'Speichern',
                nl: 'Redden',
                da: 'Spare',
                pt: 'Guardar',
                es: 'Ahorrar',
                ru: 'Сохранять',
            }[lang]
        }</button>
        <button
            className='secondary'
            {...{ disabled: !(name || email || media)}}
            onClick={() => {
                setName(undefined);
                setEmail(undefined);
                setMedia(undefined);
            }}
        >{
            {
                en: 'Cancel changes',
                vi: 'Hủy thay đổi',
                fr: 'Annuler les modifications',
                it: 'Annulla modifiche',
                ko: '변경 사항 취소',
                ja: '変更をキャンセル',
                de: 'Änderungen verwerfen',
                nl: 'Wijzigingen annuleren',
                da: 'Annuller ændringer',
                pt: 'Cancelar alterações',
                es: 'Cancelar cambios',
                ru: 'Отменить изменения',
            }[lang]
        }</button>
    </div>
}

// export default function Page() {
//     let go = useGo();
//     let { user } = useContext(UserContext);

//     let { lang } = document.documentElement;

//     let obj = user?.doc || {
//         avatar: '',
//         name: 'John Doe',
//         email: 'address@example.com',
//         joiningDate: '2023-12-21T17:00:00.000Z',
//     }

//     return (
//         <div className={cssStyle.account_info}>
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>{
//                             {
//                                 en: 'Avatar',
//                                 vi: 'Ảnh đại diện',
//                                 fr: 'Avatar',
//                                 it: "L'Avatar",
//                                 ko: '화신',
//                                 ja: 'アバター',
//                                 de: 'Avatar',
//                                 nl: 'Avatar',
//                                 da: 'Avatar',
//                                 pt: 'Avatar',
//                                 es: 'Avatar',
//                                 ru: 'Аватар',
//                             }[lang]
//                         }</td>
//                         <td>
//                             <div className='img circle square' style={{ backgroundImage: `url(${obj.avatar})` }}/>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>{
//                             {
//                                 en: 'Name',
//                                 vi: 'Tên',
//                                 fr: 'Nom',
//                                 it: 'Nome',
//                                 ko: '이름',
//                                 ja: '名前',
//                                 de: 'Name',
//                                 nl: 'Naam',
//                                 da: 'Navn',
//                                 pt: 'Nome',
//                                 es: 'Nombre',
//                                 ru: 'Имя',
//                             }[lang]
//                         }</td>
//                         <td>{obj.name}</td>
//                     </tr>
//                     <tr>
//                         <td>{
//                             {
//                                 en: 'Email',
//                                 vi: 'Email',
//                                 fr: 'Email',
//                                 it: 'Email',
//                                 ko: '이메일',
//                                 ja: 'メール',
//                                 de: 'Email',
//                                 nl: 'Email',
//                                 da: 'Email',
//                                 pt: 'Email',
//                                 es: 'Correo electrónico',
//                                 ru: 'Электронная почта',
//                             }[lang]
//                         }</td>
//                         <td>{obj.email}{user?.emailVerified ? <f-icon icon='circle-check'/> : <span>Verify</span>}</td>
//                     </tr>
//                     <tr>
//                         <td>{
//                             {
//                                 en: 'User ID',
//                                 vi: 'ID người dùng',
//                                 fr: "ID de l'utilisateur",
//                                 it: 'ID utente',
//                                 ko: '사용자 ID',
//                                 ja: 'ユーザーID',
//                                 de: 'Benutzer-ID',
//                                 nl: 'Gebruikers-ID',
//                                 da: 'Bruger-id',
//                                 pt: 'ID do utilizador',
//                                 es: 'ID de usuario',
//                                 ru: 'ID пользователя',
//                             }[lang]
//                         }</td>
//                         <td>{user?.uid}<f-icon icon='clone' onClick={() => {
//                             navigator.clipboard.writeText(user.uid);
//                             notify('success', {
//                                 en: 'Copied to clipboard',
//                                 vi: 'Đã sao chép vào bộ nhớ tạm',
//                                 fr: 'Copié dans le presse-papiers',
//                                 it: 'Copiato negli appunti',
//                                 ko: '클립보드에 복사됨',
//                                 ja: 'クリップボードにコピーされました',
//                                 de: 'In die Zwischenablage kopiert',
//                                 nl: 'Gekopieerd naar het klembord',
//                                 da: 'Kopieret til udklipsholderen',
//                                 pt: 'Copiado para a área de transferência',
//                                 es: 'Copiado al portapapeles',
//                                 ru: 'Скопировано в буфер обмена',
//                             }[lang])
//                         }}/></td>
//                     </tr>
//                     <tr>
//                         <td>{
//                             {
//                                 en: 'Joining date',
//                                 vi: 'Ngày tham gia',
//                                 fr: "Date d'adhésion",
//                                 it: 'Data di adesione',
//                                 ko: '가입날짜',
//                                 ja: '入社日',
//                                 de: 'Eintrittsdatum',
//                                 nl: 'Datum van toetreding',
//                                 da: 'Tilmeldingsdato',
//                                 pt: 'Data de adesão',
//                                 es: 'Fecha de ingreso',
//                                 ru: 'Дата присоединения',
//                             }[lang]
//                         }</td>
//                         <td id='main_account-info_joining-date'>{formatDate(localTime(obj.joiningDate))}</td>
//                     </tr>
//                 </tbody>
//             </table>
//             <ul className='btn-list vertical large'>
//                 <li onClick={() => go('account/info/edit')}>{
//                     {
//                         en: 'Edit account info',
//                         vi: 'Chỉnh sửa thông tin tài khoản',
//                         fr: 'Modifier les informations du compte',
//                         it: 'Modifica informazioni account',
//                         ko: '계정 정보 편집',
//                         ja: 'アカウント情報を編集',
//                         de: 'Kontoinformationen bearbeiten',
//                         nl: 'Accountgegevens bewerken',
//                         da: 'Rediger kontooplysninger',
//                         pt: 'Editar informações da conta',
//                         es: 'Editar la información de la cuenta',
//                         ru: 'Изменить информацию об аккаунте',
//                     }[lang]
//                 }</li>
//             </ul>
//         </div>
//     )
// }