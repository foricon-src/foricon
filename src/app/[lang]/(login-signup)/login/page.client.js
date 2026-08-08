'use client';

import { useState, useEffect, useContext, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, where, query, doc, getDocs, getDoc, setDoc } from 'firebase/firestore';
import { dbFirestore, auth } from 'Com/firebase';
import Img from 'Com/img';
import recordLogin from 'Com/record-login';
import { UserContext } from 'Com/user';
import useGo from 'Com/go';
import OAuth from '../oauth';
import { useChangeStep, Form } from '../form';
import { Context } from '../providers';
import logo from 'Pub/foricon-f-logo.png';
import cssStyle from './page.module.css';

let texts = {
    en: [
        {
            h1: 'Log in',
            p: 'Use your Foricon account',
        },
        {
            h1: 'Welcome back!',
            p: 'Use the password that you have set for your account',
        },
    ],
    vi: [
        {
            h1: 'Đăng nhập',
            p: 'Sử dụng tài khoản Foricon của bạn',
        },
        {
            h1: 'Chào mừng trở lại!',
            p: 'Sử dụng mật khẩu mà bạn đã đặt cho tài khoản của bạn',
        },
    ],
    fr: [
        {
            h1: 'Se connecter',
            p: 'Utilisez votre compte Foricon',
        },
        {
            h1: 'Content de te revoir!',
            p: 'Utilisez le mot de passe que vous avez défini pour votre compte',
        },
    ],
    it: [
        {
            h1: 'Login',
            p: 'Utilizza il tuo account Foricon',
        },
        {
            h1: 'Bentornato!',
            p: 'Utilizza la password che hai impostato per il tuo account',
        },
    ],
    ko: [
        {
            h1: '로그인',
            p: 'Foricon 계정을 사용하세요',
        },
        {
            h1: '다시 오신 것을 환영합니다!',
            p: '계정에 설정한 비밀번호를 사용하세요',
        },
    ],
    ja: [
        {
            h1: 'ログイン',
            p: 'Foriconアカウントを使用する',
        },
        {
            h1: 'おかえり！',
            p: 'アカウントに設定したパスワードを使用してください',
        },
    ],
    de: [
        {
            h1: 'Einloggen',
            p: 'Verwenden Sie Ihr Foricon-Konto',
        },
        {
            h1: 'Willkommen zurück!',
            p: 'Verwenden Sie das Passwort, das Sie für Ihr Konto festgelegt haben',
        },
    ],
    nl: [
        {
            h1: 'Inloggen',
            p: 'Gebruik uw Foricon-account',
        },
        {
            h1: 'Welkom terug!',
            p: 'Gebruik het wachtwoord dat u voor uw account heeft ingesteld',
        },
    ],
    dk: [
        {
            h1: 'Log ind',
            p: 'Brug din Foricon-konto',
        },
        {
            h1: 'Velkommen tilbage!',
            p: 'Brug den adgangskode, du har angivet til din konto',
        },
    ],
    pt: [
        {
            h1: 'Conecte-se',
            p: 'Utilize a sua conta Foricon',
        },
        {
            h1: 'Bem-vindo de volta!',
            p: 'Utilize a palavra-passe que definiu para a sua conta',
        },
    ],
    es: [
        {
            h1: 'Acceso',
            p: 'Usa tu cuenta de Foricon',
        },
        {
            h1: '¡Bienvenido de nuevo!',
            p: 'Utilice la contraseña que ha establecido para su cuenta',
        },
    ],
    ru: [
        {
            h1: 'Авторизоваться',
            p: 'Используйте свою учетную запись Foricon',
        },
        {
            h1: 'Добро пожаловать!',
            p: 'Используйте пароль, который вы установили для своей учетной записи.',
        },
    ],
}

export default function PageClient({ lang }) {
    let go = useGo();
    let searchParams = useSearchParams();
    let pathname = usePathname();
    let user = useContext(UserContext);
    let [ step ] = useContext(Context).stepHandler;

    let [ email, setEmail ] = useState('');
    let [ password, setPassword ] = useState('');
    let [ userDoc, setUserDoc ] = useState(null);

    let emailRef = useRef();
    let passwordRef = useRef();

    let des = searchParams.get('redirect') || 'account';

    let changeStep = useChangeStep();
    
    useEffect(() => { user && go('account') }, [ pathname, user ])

    let steps = [
        <>
            <OAuth lang={lang} des={des}/>
            <input
                ref={emailRef}
                placeholder={
                    {
                        en: 'Enter your email',
                        vi: 'Nhập email của bạn',
                        fr: 'Saisissez votre adresse e-mail',
                        it: 'Inserisci la tua email',
                        ko: '이메일 주소를 입력하세요',
                        ja: 'メールアドレスを入力してください',
                        de: 'Geben Sie Ihre E-Mail-Adresse ein',
                        nl: 'Voer uw e-mailadres in',
                        dk: 'Indtast din e-mail',
                        pt: 'Insira o seu e-mail',
                        es: 'Introduce tu correo electrónico',
                        ru: 'Введите ваш адрес электронной почты',
                    }[lang]
                }
                name='email'
                type='email'
                autocomplete='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </>,
        <>
            <div className={cssStyle.account}>
                <img src={userDoc?.avatar}/>{userDoc?.name}
            </div>
            <input
                ref={passwordRef}
                placeholder={
                    {
                        en: 'Password',
                        vi: 'Mật khẩu',
                        fr: 'Mot de passe',
                        it: 'Password',
                        ko: '비밀번호',
                        ja: 'パスワード',
                        de: 'Passwort',
                        nl: 'Wachtwoord',
                        dk: 'Adgangskode',
                        pt: 'Palavra-passe',
                        es: 'Contraseña',
                        ru: 'Пароль',
                    }[lang]
                }
                name='password'
                type='password'
                autocomplete='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Link href='/forgot'>{
                {
                    en: 'Forgot password',
                    vi: 'Quên mật khẩu',
                    fr: 'Mot de passe oublié',
                    it: 'Ha dimenticato la password',
                    ko: '비밀번호를 잊으셨나요',
                    ja: 'パスワードをお忘れですか',
                    de: 'Passwort vergessen',
                    nl: 'Wachtwoord vergeten',
                    dk: 'Glemt adgangskode',
                    pt: 'Esqueceu-se da sua senha',
                    es: 'Has olvidado tu contraseña',
                    ru: 'Забыли пароль',
                }[lang]
            }</Link>
        </>
    ]

    return <>
        <div>
            <Link href='/' title='Back to home'>
                <Img src={logo}/>
            </Link>
            <h1>{texts[lang][step].h1}</h1>
            <p>{texts[lang][step].p}</p>
            {!step && <p>
                {
                    {
                        en: "Don't have an account? ",
                        vi: 'Chưa có tài khoản? ',
                        fr: "Vous n'avez pas de compte ? ",
                        it: 'Non hai un account? ' ,
                        ko: '계정이 없으신가요? ',
                        ja: 'アカウントをお持ちでない方は、',
                        de: 'Sie haben noch kein Konto? ',
                        nl: 'Nog geen account? ',
                        dk: 'Har du ikke en konto? ',
                        pt: 'Não tem conta? ',
                        es: '¿No tienes cuenta? ',
                        ru: 'У вас нет аккаунта? ',
                    }[lang]
                }
                <Link href='/signup'>{
                    {
                        en: 'Create one!',
                        vi: 'Tạo ngay một cái!',
                        fr: 'Créez-en un !',
                        it: 'Creane uno!',
                        ko: '지금 만드세요!',
                        ja: '作成してください！',
                        de: 'Jetzt erstellen!',
                        nl: 'Maak er een aan!',
                        dk: 'Opret en!',
                        pt: 'Crie uma!',
                        es: '¡Crea una!',
                        ru: 'Создайте его!',
                    }[lang]
                }</Link>
            </p>}
        </div>
        <Form
            lang={lang}
            steps={steps}
            lastStepText={
                {
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
                }[lang]
            }
            onSubmit={async e => {
                changeStep(1, e, async () => {
                    if (!step) {
                        if (!email) throw new Warn(
                            {
                                en: 'Please enter a valid email',
                                vi: 'Vui lòng nhập địa chỉ email hợp lệ',
                                fr: 'Veuillez saisir une adresse e-mail valide',
                                it: 'Inserisci un indirizzo email valido',
                                ko: '유효한 이메일 주소를 입력해 주세요',
                                ja: '有効なメールアドレスを入力してください',
                                de: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
                                nl: 'Voer een geldig e-mailadres in',
                                dk: 'Indtast venligst en gyldig e-mail',
                                pt: 'Por favor, introduza um e-mail válido',
                                es: 'Por favor, introduzca un correo electrónico válido',
                                ru: 'Пожалуйста, введите корректный адрес электронной почты',
                            }[lang]
                        )
                        let snapshot = await getDocs(query(
                            collection(dbFirestore, 'users'),
                            where('email', '==', email)
                        ))
                        if (snapshot.empty) throw new Warn(
                            {
                                en: "We couldn't find an account with this email address",
                                vi: 'Chúng tôi không tìm thấy tài khoản với địa chỉ email này',
                                fr: "Nous n'avons pas trouvé de compte associé à cette adresse e-mail",
                                it: 'Non abbiamo trovato un account associato a questo indirizzo email',
                                ko: '해당 이메일 주소로 된 계정을 찾을 수 없습니다',
                                ja: 'このメールアドレスのアカウントは見つかりませんでした',
                                de: 'Wir konnten kein Konto mit dieser E-Mail-Adresse finden',
                                nl: 'We konden geen account met dit e-mailadres vinden',
                                dk: 'Vi kunne ikke finde en konto med denne e-mailadresse',
                                pt: 'Não foi possível encontrar uma conta com este endereço de e-mail',
                                es: 'No pudimos encontrar una cuenta con esta dirección de correo electrónico',
                                ru: 'Мы не смогли найти аккаунт с этим адресом электронной почты',
                            }[lang]
                        )
                        setUserDoc(snapshot.docs[0].data());
                        return;
                    }
    
                    let result = await signInWithEmailAndPassword(auth, email, password);
                    let token = await result.user.getIdToken();
                    await recordLogin(token);
                    go(des);
                })
            }}
        />
        {/* <form onSubmit={async e => {
            changeStep(1, e, async () => {
                if (step == 0) {
                    if (!email) throw new Warn(
                        {
                            en: 'Please enter a valid email',
                            vi: 'Vui lòng nhập địa chỉ email hợp lệ',
                            fr: 'Veuillez saisir une adresse e-mail valide',
                            it: 'Inserisci un indirizzo email valido',
                            ko: '유효한 이메일 주소를 입력해 주세요',
                            ja: '有効なメールアドレスを入力してください',
                            de: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
                            nl: 'Voer een geldig e-mailadres in',
                            dk: 'Indtast venligst en gyldig e-mail',
                            pt: 'Por favor, introduza um e-mail válido',
                            es: 'Por favor, introduzca un correo electrónico válido',
                            ru: 'Пожалуйста, введите корректный адрес электронной почты',
                        }[lang]
                    )
                    let snapshot = await getDocs(query(
                        collection(dbFirestore, 'users'),
                        where('email', '==', email)
                    ))
                    if (snapshot.empty) throw new Warn(
                        {
                            en: "We couldn't find an account with this email address",
                            vi: 'Chúng tôi không tìm thấy tài khoản với địa chỉ email này',
                            fr: "Nous n'avons pas trouvé de compte associé à cette adresse e-mail",
                            it: 'Non abbiamo trovato un account associato a questo indirizzo email',
                            ko: '해당 이메일 주소로 된 계정을 찾을 수 없습니다',
                            ja: 'このメールアドレスのアカウントは見つかりませんでした',
                            de: 'Wir konnten kein Konto mit dieser E-Mail-Adresse finden',
                            nl: 'We konden geen account met dit e-mailadres vinden',
                            dk: 'Vi kunne ikke finde en konto med denne e-mailadresse',
                            pt: 'Não foi possível encontrar uma conta com este endereço de e-mail',
                            es: 'No pudimos encontrar una cuenta con esta dirección de correo electrónico',
                            ru: 'Мы не смогли найти аккаунт с этим адресом электронной почты',
                        }[lang]
                    )
                    setUserDoc(snapshot.docs[0].data());
                    return;
                }

                let result = await signInWithEmailAndPassword(auth, email, password);
                let token = await result.user.getIdToken();
                await recordLogin(token);
                go(des);
            })
        }}>
            {steps[step]}
            {notification && <div className={`message ${notification.type}`}>{notification.message}</div>}
            <div className={cssStyle.nav}>
                {!!step && <button className='secondary' type='button' onClick={() => changeStep(step - 1)}>{
                    {
                        en: 'Back',
                        vi: 'Trở lại',
                        fr: 'Dos',
                        it: 'Indietro',
                        ko: '뒤쪽에',
                        ja: '戻る',
                        de: 'Zurück',
                        nl: 'Rug',
                        dk: 'Tilbage',
                        pt: 'Voltar',
                        es: 'Atrás',
                        ru: 'Назад',
                    }[lang]
                }</button>}
                <button className='primary' type='submit'>{
                    isMaxStep ? {
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
                    }[lang] : {
                        en: 'Next',
                        vi: 'Tiếp theo',
                        fr: 'Suivante',
                        it: 'Prossimo',
                        ko: '다음',
                        ja: '次',
                        de: 'Nächste',
                        nl: 'Volgende',
                        dk: 'Næste',
                        pt: 'Próximo',
                        es: 'Próximo',
                        ru: 'Следующий',
                    }[lang]
                }</button>
            </div>
        </form> */}
    </>
}