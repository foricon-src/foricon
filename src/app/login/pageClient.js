'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from "firebase/auth";
import { collection, query, doc, getDocs, getDoc, setDoc } from "firebase/firestore";
import './page.css';

let texts = {
    en: {
        email: {
            h1: 'Log in to your account',
            p: 'Use your Foricon account',
        },
        password: {
            h1: 'Enter your password',
            p: 'Use the password that you have set for your account',
        },
    },
    vi: {
        email: {
            h1: 'Đăng nhập',
            p: 'Sử dụng tài khoản Foricon của bạn',
        },
        password: {
            h1: 'Nhập mật khẩu của bạn',
            p: 'Sử dụng mật khẩu mà bạn đã đặt cho tài khoản của bạn',
        },
    },
    fr: {
        email: {
            h1: 'Connectez-vous à votre compte',
            p: 'Utilisez votre compte Foricon',
        },
        password: {
            h1: 'Tapez votre mot de passe',
            p: 'Utilisez le mot de passe que vous avez défini pour votre compte',
        },
    },
    it: {
        email: {
            h1: 'Accedi al tuo account',
            p: 'Utilizza il tuo account Foricon',
        },
        password: {
            h1: 'Inserisci la tua password',
            p: 'Utilizza la password che hai impostato per il tuo account',
        },
    },
    kr: {
        email: {
            h1: '귀하의 계정에 로그인하십시오',
            p: 'Foricon 계정을 사용하세요',
        },
        password: {
            h1: '비밀번호를 입력하세요',
            p: '계정에 설정한 비밀번호를 사용하세요',
        },
    },
    ja: {
        email: {
            h1: 'あなたのアカウントにログイン',
            p: 'Foriconアカウントを使用する',
        },
        password: {
            h1: 'パスワードを入力してください',
            p: 'アカウントに設定したパスワードを使用してください',
        },
    },
    de: {
        email: {
            h1: 'Ins Konto einloggen',
            p: 'Verwenden Sie Ihr Foricon-Konto',
        },
        password: {
            h1: 'Geben Sie Ihr Passwort ein',
            p: 'Verwenden Sie das Passwort, das Sie für Ihr Konto festgelegt haben',
        },
    },
    nl: {
        email: {
            h1: 'Log in op jouw account',
            p: 'Gebruik uw Foricon-account',
        },
        password: {
            h1: 'Voer uw wachtwoord in',
            p: 'Gebruik het wachtwoord dat u voor uw account heeft ingesteld',
        },
    },
    dk: {
        email: {
            h1: 'Log ind på din konto',
            p: 'Brug din Foricon-konto',
        },
        password: {
            h1: 'Skriv dit kodeord',
            p: 'Brug den adgangskode, du har angivet til din konto',
        },
    },
    pt: {
        email: {
            h1: 'Faça login na sua conta',
            p: 'Utilize a sua conta Foricon',
        },
        password: {
            h1: 'Coloque a sua senha',
            p: 'Utilize a palavra-passe que definiu para a sua conta',
        },
    },
    es: {
        email: {
            h1: 'Ingrese a su cuenta',
            p: 'Usa tu cuenta de Foricon',
        },
        password: {
            h1: 'Ingresa tu contraseña',
            p: 'Utilice la contraseña que ha establecido para su cuenta',
        },
    },
}

export default function LogIn() {
    let router = useRouter();
    let params = useSearchParams();

    let [ step, setStep ] = useState('email');
    let [ email, setEmail ] = useState('');
    let [ password, setPassword ] = useState('');
    let [ userDoc, setUserDoc ] = useState(null);

    let des = params.get('redirect') || 'account';

    useEffect(() => {(async () => {
        while (elemById('loading')) await wait();
        user && go(router, 'account');
    })()}, [ usePathname() ])

    return (
        <div id='wrapper'>
            <div>
                <Link href='/' title='Back to home'>
                    <img src='/foricon-f-2.png'/>
                </Link>
                <h1>{texts[language][step]}</h1>
                <p>{texts[language][step]}</p>
                <a className='btn secondary' href='/signup'>
                    <lang data-value='en'>Create a new account</lang>
                    <lang data-value='vi'>Tạo tài khoản mới</lang>
                    <lang data-value='fr'>Créer un nouveau compte</lang>
                    <lang data-value='it'>Creare un nuovo account</lang>
                    <lang data-value='kr'>새 계정 생성</lang>
                    <lang data-value='ja'>新しいアカウントを作成する</lang>
                    <lang data-value='de'>Ein neues Konto erstellen</lang>
                    <lang data-value='nl'>Maak een nieuw account aan</lang>
                    <lang data-value='dk'>Oprette en ny konto</lang>
                    <lang data-value='pt'>Criar uma nova conta</lang>
                    <lang data-value='es'>Crea una cuenta nueva</lang>
                    <lang data-value='ru'>Создать новую учетную запись</lang>
                </a>
            </div>
            <form className={step == 'email' ? 'active' : ''}>
                <div id='providers'>
                    <a href='javascript:void(0)' className='btn secondary'><i class='fa-brands fa-google'></i></a>
                    <a href='javascript:void(0)' className='btn secondary'><i class='fa-brands fa-microsoft'></i></a>
                    <a href='javascript:void(0)' className='btn secondary'><i class='fa-brands fa-github'></i></a>
                </div>
                <input placeholder='Email' name='email' type='email' autocomplete='email' value={email}/>
                <div>
                    <a className='btn primary' href='javascript:void(0)'>
                        <lang data-value='en'>Next</lang>
                        <lang data-value='vi'>Tiếp theo</lang>
                        <lang data-value='fr'>Suivante</lang>
                        <lang data-value='it'>Prossimo</lang>
                        <lang data-value='kr'>다음</lang>
                        <lang data-value='ja'>次</lang>
                        <lang data-value='de'>Nächste</lang>
                        <lang data-value='nl'>Volgende</lang>
                        <lang data-value='dk'>Næste</lang>
                        <lang data-value='pt'>Próximo</lang>
                        <lang data-value='es'>Próximo</lang>
                        <lang data-value='ru'>Следующий</lang>
                    </a>
                </div>
            </form>
            <form className={step == 'password' ? 'active' : ''}>
                <div>
                    <img src={userDoc?.avatar}/>{userDoc?.name}
                </div>
                <input placeholder='Password' name='password' type='password' autocomplete='password' value={password}/>
                <a href='/forgot'>Forgot password</a>
                <div>
                    <a class='btn secondary back' href='javascript:void(0)'>
                        <lang data-value='en'>Back</lang>
                        <lang data-value='vi'>Trở lại</lang>
                        <lang data-value='fr'>Dos</lang>
                        <lang data-value='it'>Indietro</lang>
                        <lang data-value='kr'>뒤쪽에</lang>
                        <lang data-value='ja'>戻る</lang>
                        <lang data-value='de'>Zurück</lang>
                        <lang data-value='nl'>Rug</lang>
                        <lang data-value='dk'>Tilbage</lang>
                        <lang data-value='pt'>Voltar</lang>
                        <lang data-value='es'>Atrás</lang>
                        <lang data-value='ru'>Назад</lang>
                    </a><a class='btn primary' href='javascript:void(0)'>
                        <lang data-value='en'>Log in</lang>
                        <lang data-value='vi'>Đăng nhập</lang>
                        <lang data-value='fr'>Se connecter</lang>
                        <lang data-value='it'>Login</lang>
                        <lang data-value='kr'>로그인</lang>
                        <lang data-value='ja'>ログイン</lang>
                        <lang data-value='de'>Anmeldung</lang>
                        <lang data-value='nl'>Log in</lang>
                        <lang data-value='dk'>Log på</lang>
                        <lang data-value='pt'>Conecte-se</lang>
                        <lang data-value='es'>Acceso</lang>
                        <lang data-value='ru'>Авторизоваться</lang>
                    </a>
                </div>
            </form>
        </div>
    )
}