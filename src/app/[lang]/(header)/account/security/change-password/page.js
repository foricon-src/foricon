import PageClient from './page.client';

export function generateMetadata({ params: { lang }}) {
    return {
        title: {
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
        }[lang]
    }   
}

export default function Page({ params }) {
    return <PageClient lang={params.lang}/>
}