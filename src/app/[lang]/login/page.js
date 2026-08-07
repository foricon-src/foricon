import { Suspense } from 'react';
import { headers } from 'next/headers';
import LogIn from './page.client';

export function generateMetadata() {
    let lang = headers().get('f-lang');
    return {
        title: {
            en: 'Log in',
            vi: 'Đăng nhập',
            fr: 'Se connecter',
            it: 'Login',
            ko: '로그인',
            ja: 'ログイン',
            de: 'Anmeldung',
            nl: 'Log in',
            dk: 'Log på',
            pt: 'Conecte-se',
            es: 'Acceso',
            ru: 'Авторизоваться',
        }[lang],
        description: {
            en: 'Use email and password to log in to your Foricon account. Also supports logging in via Google, Microsoft or GitHub.',
            vi: 'Sử dụng email và mật khẩu để đăng nhập vào tài khoản Foricon của bạn. Cũng như hỗ trợ đăng nhập bằng Google, Microsoft hay Github.',
            fr: 'Utilisez votre adresse e-mail et votre mot de passe pour vous connecter à votre compte Foricon. La connexion via Google, Microsoft ou GitHub est également prise en charge.',
            it: 'Utilizza e-mail e password per accedere al tuo account Foricon. È inoltre possibile accedere tramite Google, Microsoft o GitHub.',
            ko: '이메일과 비밀번호를 사용하여 Foricon 계정에 로그인하세요. Google, Microsoft 또는 GitHub를 통한 로그인도 지원합니다.',
            ja: 'メールアドレスとパスワードを使用して、Foriconアカウントにログインしてください。Google、Microsoft、またはGitHub経由でのログインにも対応しています。',
            de: 'Melden Sie sich mit E-Mail-Adresse und Passwort bei Ihrem Foricon-Konto an. Auch die Anmeldung über Google, Microsoft oder GitHub wird unterstützt.',
            nl: 'Gebruik je e-mailadres en wachtwoord om in te loggen op je Foricon-account. Inloggen via Google, Microsoft of GitHub wordt ook ondersteund.',
            dk: 'Brug e-mail og adgangskode til at logge ind på din Foricon-konto. Understøtter også login via Google, Microsoft eller GitHub.',
            pt: 'Utilize o seu e-mail e palavra-passe para aceder à sua conta Foricon. Também é possível fazer login através da Google, Microsoft ou GitHub.',
            es: 'Utiliza tu correo electrónico y contraseña para iniciar sesión en tu cuenta de Foricon. También es posible iniciar sesión a través de Google, Microsoft o GitHub.',
            ru: 'Используйте адрес электронной почты и пароль для входа в свою учетную запись Foricon. Также поддерживается вход через Google, Microsoft или GitHub.',
        }[lang],
    }
}
export default function Page() {
    let lang = headers().get('f-lang');
    return (
        <Suspense>
            <LogIn lang={lang}/>
        </Suspense>
    )
}