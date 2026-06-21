import PageClient from './page.client';

export function generateMetadata({ params: { lang }}) {
    return {
        title: {
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
        }[lang]
    }   
}

export default function Page({ params }) {
    return <PageClient lang={params.lang}/>
}