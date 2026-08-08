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
import Form from '../form';
import { Context } from '../providers';
import logo from 'Pub/foricon-f-logo.png';
import cssStyle from './page.module.css';

let texts = {
    en: [
        {
            h1: 'Welcome to Foricon!',
            p: "Let's start creating a brand new account to take advantage of our awesome set of icon!",
        },
        {
            h1: 'How will you log in?',
            p: 'Enter email for your Foricon account',
        },
        {
            h1: "Let's secure it!",
            p: 'Give your account a strong password',
        },
    ],
    vi: [
        {
            h1: 'Chào mừng đến với Foricon!',
            p: 'Hãy bắt đầu tạo một tài khoản hoàn toàn mới để tận dụng được bộ biểu tượng tuyệt cà là vời của chúng tôi!',
        },
        {
            h1: 'Bạn sẽ đăng nhập như thế nào?',
            p: 'Nhập email cho tài khoản Foricon của bạn',
        },
        {
            h1: "Let's secure it!",
            p: 'Hãy cho tài khoản của bạn một mật khẩu mạnh',
        },
    ],
    fr: [
        {
            h1: 'Bienvenue sur Foricon !',
            p: 'Commençons par créer un tout nouveau compte pour profiter de notre incroyable collection d’icônes !',
        },
        {
            h1: 'Comment allez-vous vous connecter ?',
            p: 'Entrez l’adresse e-mail de votre compte Foricon',
        },
        {
            h1: 'Sécurisons votre compte !',
            p: 'Choisissez un mot de passe sécurisé pour votre compte',
        },
    ],
    it: [
        {
            h1: 'Benvenuto su Foricon!',
            p: 'Iniziamo creando un account completamente nuovo per sfruttare al meglio la nostra fantastica raccolta di icone!',
        },
        {
            h1: 'Come effettuerai l’accesso?',
            p: 'Inserisci l’e-mail del tuo account Foricon',
        },
        {
            h1: 'Mettiamolo al sicuro!',
            p: 'Scegli una password sicura per il tuo account',
        },
    ],
    ko: [
        {
            h1: 'Foricon에 오신 것을 환영합니다!',
            p: '멋진 아이콘 컬렉션을 마음껏 활용할 수 있도록 새로운 계정을 만들어 보세요!',
        },
        {
            h1: '어떻게 로그인하시겠어요?',
            p: 'Foricon 계정에 사용할 이메일을 입력하세요',
        },
        {
            h1: '계정을 안전하게 보호해 볼까요!',
            p: '계정을 보호할 강력한 비밀번호를 설정하세요',
        },
    ],
    ja: [
        {
            h1: 'Foriconへようこそ！',
            p: '素晴らしいアイコンコレクションを活用するために、新しいアカウントを作成しましょう！',
        },
        {
            h1: 'どのようにログインしますか？',
            p: 'Foriconアカウントのメールアドレスを入力してください',
        },
        {
            h1: 'アカウントを安全にしましょう！',
            p: 'アカウント用の強力なパスワードを設定してください',
        },
    ],
    de: [
        {
            h1: 'Willkommen bei Foricon!',
            p: 'Erstellen wir zunächst ein ganz neues Konto, damit du unsere fantastische Sammlung von Icons nutzen kannst!',
        },
        {
            h1: 'Wie möchtest du dich anmelden?',
            p: 'Gib die E-Mail-Adresse für dein Foricon-Konto ein',
        },
        {
            h1: 'Sichern wir dein Konto!',
            p: 'Lege ein sicheres Passwort für dein Konto fest',
        },
    ],
    nl: [
        {
            h1: 'Welkom bij Foricon!',
            p: 'Laten we beginnen met het aanmaken van een gloednieuw account, zodat je optimaal kunt profiteren van onze geweldige iconencollectie!',
        },
        {
            h1: 'Hoe wil je inloggen?',
            p: 'Voer het e-mailadres van je Foricon-account in',
        },
        {
            h1: 'Laten we je account beveiligen!',
            p: 'Kies een sterk wachtwoord voor je account',
        },
    ],
    dk: [
        {
            h1: 'Velkommen til Foricon!',
            p: 'Lad os starte med at oprette en helt ny konto, så du kan få glæde af vores fantastiske samling af ikoner!',
        },
        {
            h1: 'Hvordan vil du logge ind?',
            p: 'Indtast e-mailen til din Foricon-konto',
        },
        {
            h1: 'Lad os sikre den!',
            p: 'Vælg en stærk adgangskode til din konto',
        },
    ],
    pt: [
        {
            h1: 'Bem-vindo ao Foricon!',
            p: 'Vamos começar criando uma conta totalmente nova para aproveitar a nossa incrível coleção de ícones!',
        },
        {
            h1: 'Como você vai entrar?',
            p: 'Digite o e-mail da sua conta Foricon',
        },
        {
            h1: 'Vamos deixar sua conta segura!',
            p: 'Crie uma senha forte para sua conta',
        },
    ],
    es: [
        {
            h1: '¡Bienvenido a Foricon!',
            p: '¡Empecemos creando una cuenta completamente nueva para aprovechar nuestra increíble colección de iconos!',
        },
        {
            h1: '¿Cómo vas a iniciar sesión?',
            p: 'Introduce el correo electrónico de tu cuenta de Foricon',
        },
        {
            h1: '¡Vamos a protegerla!',
            p: 'Crea una contraseña segura para tu cuenta',
        },
    ],
    ru: [
        {
            h1: 'Добро пожаловать в Foricon!',
            p: 'Давайте начнём с создания нового аккаунта, чтобы вы могли воспользоваться нашей потрясающей коллекцией иконок!',
        },
        {
            h1: 'Как вы будете входить в аккаунт?',
            p: 'Введите электронную почту для вашего аккаунта Foricon',
        },
        {
            h1: 'Давайте защитим аккаунт!',
            p: 'Создайте надёжный пароль для вашего аккаунта',
        },
    ],
}

export default function PageClient({ lang }) {
    let go = useGo();
    let searchParams = useSearchParams();
    let pathname = usePathname();
    let user = useContext(UserContext);
    let [ step ] = useContext(Context).stepProvider;

    let [ email, setEmail ] = useState('');
    let [ password, setPassword ] = useState('');
    let [ userDoc, setUserDoc ] = useState(null);

    let emailRef = useRef();
    let passwordRef = useRef();

    let des = searchParams.get('redirect') || 'account';
    
    useEffect(() => { user && go('account') }, [ pathname, user ])
    useEffect(() => {
        if (elemById('loading')) return;
        let timeout = setTimeout(() => (step ? passwordRef : emailRef).current?.focus(), 400);
        return () => clearTimeout(timeout);
    }, [ step ])

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