import PageClient from './page.client';

export function generateMetadata({ params: { lang }}) {
    return {
        title: {
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
        }[lang]
    }   
}

export default function Page({ params }) {
    return <PageClient lang={params.lang}/>
}