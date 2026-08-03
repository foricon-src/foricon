'use client';

import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from 'firebase/auth';
import { collection, where, query, doc, getDocs, getDoc, setDoc } from 'firebase/firestore';
import { dbFirestore, auth } from 'Com/firebase';
import Img from 'Com/img';
import recordLogin from 'Com/record-login';
import { UserContext } from 'Com/user';
import useGo from 'Com/go';
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

export default function LogIn({ lang }) {
    let router = useRouter();
    let go = useGo();
    let searchParams = useSearchParams();
    let pathname = usePathname();
    let user = useContext(UserContext);

    let [ step, setStep ] = useState(0);
    let [ email, setEmail ] = useState('');
    let [ password, setPassword ] = useState('');
    let [ userDoc, setUserDoc ] = useState(null);
    let [ notification, setNotification ] = useState(null);
    
    let maxStep = 1;
    let isMaxStep = step >= maxStep;

    let des = searchParams.get('redirect') || 'account';
    
    useEffect(() => { user && go('account') }, [ pathname, user ])
    useEffect(() => { console.log(step) }, [ step ])

    async function changeStep(step, e, func) {
        e?.preventDefault();

        let wrapper = qSelec(`.${cssStyle.wrapper}`);
        let { body } = document;

        try {
            body.style.pointerEvents = 'none';
            await func?.();
            wrapper.style.opacity = '0';
            await wait(.2);
            setStep(step);
            setNotification(null);
        }
        catch (obj) {
            console.log(obj);
            let { message } = obj;
            setNotification({
                type: obj instanceof Warn ? 'warn' : 'error',
                message:
                    message == 'Firebase: Error (auth/invalid-credential).' ? 'Incorrect password' :
                    message == 'Firebase: Error (auth/network-request-failed).' ? 'No internet connection' :
                    message,
            })
        }
        finally {
            await wait();
            wrapper.style.opacity = body.style.pointerEvents = '';
        }
    }
    async function methodPopup(provider) {
        let result = await signInWithPopup(auth, provider);
        let token = await result.user.getIdToken();
        
        await fetch('/api/user/create', {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
        })
        await recordLogin(token);

        go(des);
    }

    return (
        <div className={cssStyle.wrapper}>
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
                            it: 'Non hai un account?' ,
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
            <form onSubmit={async e => {
                changeStep(1, e, async () => {
                    if (step == 0) {
                        let snapshot = await getDocs(query(
                            collection(dbFirestore, 'users'),
                            where('email', '==', email)
                        ))
                        if (snapshot.empty) throw new Warn('No account has been created with this email');
                        setUserDoc(snapshot.docs[0].data());
                        return;
                    }

                    let result = await signInWithEmailAndPassword(auth, email, password);
                    let token = await result.user.getIdToken();
                    await recordLogin(token);
                    go(des);
                })
            }}>
                {!!step ? <>
                    <div className={cssStyle.account}>
                        <img src={userDoc?.avatar}/>{userDoc?.name}
                    </div>
                    <input placeholder='Password' name='password' type='password' autocomplete='password' value={password} onChange={e => setPassword(e.target.value)}/>
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
                </> : <>
                    <ul className='btn-list darker'>
                        <li className='tooltip top' name='google' onClick={() => methodPopup(new GoogleAuthProvider())}>
                            <span>{
                                {
                                    en: 'Continue with Google',
                                    vi: 'Tiếp tục với Google',
                                    fr: 'Continuer avec Google',
                                    it: 'Continua con Google',
                                    ko: 'Google에서 계속 진행',
                                    ja: 'Googleで続行',
                                    de: 'Mit Google fortfahren',
                                    nl: 'Ga verder met Google',
                                    dk: 'Fortsæt med Google',
                                    pt: 'Continuar com o Google',
                                    es: 'Continuar con Google',
                                    ru: 'Продолжить с Google',
                                }[lang]
                            }</span>
                        </li>
                        <li className='tooltip top' name='microsoft' onClick={() => methodPopup(new OAuthProvider('microsoft.com'))}>
                            <span>{
                                {
                                    en: 'Continue with Microsoft',
                                    vi: 'Tiếp tục với Microsoft',
                                    fr: 'Continuer avec Microsoft',
                                    it: 'Continua con Microsoft',
                                    ko: 'Microsoft에서 계속 진행',
                                    ja: 'Microsoftで続行',
                                    de: 'Mit Microsoft fortfahren',
                                    nl: 'Ga verder met Microsoft',
                                    dk: 'Fortsæt med Microsoft',
                                    pt: 'Continuar com o Microsoft',
                                    es: 'Continuar con Microsoft',
                                    ru: 'Продолжить с Microsoft',
                                }[lang]
                            }</span>
                        </li>
                        <li className='tooltip top' name='github' onClick={() => methodPopup(new GithubAuthProvider())}>
                            <span>{
                                {
                                    en: 'Continue with Github',
                                    vi: 'Tiếp tục với Github',
                                    fr: 'Continuer avec Github',
                                    it: 'Continua con Github',
                                    ko: 'Github에서 계속 진행',
                                    ja: 'Githubで続行',
                                    de: 'Mit Github fortfahren',
                                    nl: 'Ga verder met Github',
                                    dk: 'Fortsæt med Github',
                                    pt: 'Continuar com o Github',
                                    es: 'Continuar con Github',
                                    ru: 'Продолжить с Github',
                                }[lang]
                            }</span>
                        </li>
                    </ul>
                    <input placeholder='Email' name='email' type='email' autocomplete='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </>}
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
            </form>
            {/* <form className={step == 'email' ? 'active' : ''}>
                <ul className='btn-list darker'>
                    <li className='tooltip top' name='google' onClick={() => methodPopup(new GoogleAuthProvider())}>
                        <span>{
                            {
                                en: 'Continue with Google',
                                vi: 'Tiếp tục với Google',
                                fr: 'Continuer avec Google',
                                it: 'Continua con Google',
                                ko: 'Google에서 계속 진행',
                                ja: 'Googleで続行',
                                de: 'Mit Google fortfahren',
                                nl: 'Ga verder met Google',
                                dk: 'Fortsæt med Google',
                                pt: 'Continuar com o Google',
                                es: 'Continuar con Google',
                                ru: 'Продолжить с Google',
                            }[lang]
                        }</span>
                    </li>
                    <li className='tooltip top' name='microsoft' onClick={() => methodPopup(new OAuthProvider('microsoft.com'))}>
                        <span>{
                            {
                                en: 'Continue with Microsoft',
                                vi: 'Tiếp tục với Microsoft',
                                fr: 'Continuer avec Microsoft',
                                it: 'Continua con Microsoft',
                                ko: 'Microsoft에서 계속 진행',
                                ja: 'Microsoftで続行',
                                de: 'Mit Microsoft fortfahren',
                                nl: 'Ga verder met Microsoft',
                                dk: 'Fortsæt med Microsoft',
                                pt: 'Continuar com o Microsoft',
                                es: 'Continuar con Microsoft',
                                ru: 'Продолжить с Microsoft',
                            }[lang]
                        }</span>
                    </li>
                    <li className='tooltip top' name='github' onClick={() => methodPopup(new GithubAuthProvider())}>
                        <span>{
                            {
                                en: 'Continue with Github',
                                vi: 'Tiếp tục với Github',
                                fr: 'Continuer avec Github',
                                it: 'Continua con Github',
                                ko: 'Github에서 계속 진행',
                                ja: 'Githubで続行',
                                de: 'Mit Github fortfahren',
                                nl: 'Ga verder met Github',
                                dk: 'Fortsæt med Github',
                                pt: 'Continuar com o Github',
                                es: 'Continuar con Github',
                                ru: 'Продолжить с Github',
                            }[lang]
                        }</span>
                    </li>
                </ul>
                <input placeholder='Email' name='email' type='email' autocomplete='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <div>
                    <button className='primary' type='submit'>{
                        {
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
            </form>
            <form className={step == 'password' ? 'active' : ''}>
                <div>
                    <img src={userDoc?.avatar}/>{userDoc?.name}
                </div>
                <input placeholder='Password' name='password' type='password' autocomplete='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <Link href='/forgot'>Forgot password</Link>
                <div>
                    <button class='secondary' type='button' onClick={() => changeStep('email')}>{
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
                    }</button>
                    <button class='primary' type='submit'>{
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
                    }</button>
                </div>
            </form> */}
        </div>
    )
}