'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from "firebase/auth";
import { collection, where, query, doc, getDocs, getDoc, setDoc } from "firebase/firestore";
import { dbFirestore, auth } from "Com/firebase";
import { Lang } from "Com/language";
import popUp from "Com/popup";
import recordLogin from "Com/record-login";

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
        while (user == null) await wait();
        user && go(router, 'account');
    })()}, [ usePathname() ])

    async function changePage(page, e, func) {
        e?.preventDefault();

        try {
            let wrapper = elemById('wrapper');
            wrapper.style.opacity = '0';
            await wait(.2);
            await func?.();
            setStep(page);
        }
        catch (obj) {
            console.log(obj);
            notify(obj instanceof Warn ? 'warn' : 'error', obj.message);
        }
        finally {
            await wait();
            wrapper.style.opacity = '1';
        }
    }

    return (
        <div id='wrapper'>
            <div>
                <Link href='/' title='Back to home'>
                    <img src='/foricon-f-2.png'/>
                </Link>
                <h1>{texts[language][step].h1}</h1>
                <p>{texts[language][step].p}</p>
                <a className='btn secondary' href='/signup'>
                    <Lang value='en'>Create a new account</Lang>
                    <Lang value='vi'>Tạo tài khoản mới</Lang>
                    <Lang value='fr'>Créer un nouveau compte</Lang>
                    <Lang value='it'>Creare un nuovo account</Lang>
                    <Lang value='kr'>새 계정 생성</Lang>
                    <Lang value='ja'>新しいアカウントを作成する</Lang>
                    <Lang value='de'>Ein neues Konto erstellen</Lang>
                    <Lang value='nl'>Maak een nieuw account aan</Lang>
                    <Lang value='dk'>Oprette en ny konto</Lang>
                    <Lang value='pt'>Criar uma nova conta</Lang>
                    <Lang value='es'>Crea una cuenta nueva</Lang>
                    <Lang value='ru'>Создать новую учетную запись</Lang>
                </a>
            </div>
            <form className={step == 'email' ? 'active' : ''} onSubmit={e => changePage('password', e, async () => {
                let snapshot = await getDocs(query(
                    collection(dbFirestore, 'users'),
                    where('email', '==', email)
                ))
            
                if (snapshot.empty) throw new Warn('No account created with this email');
            
                setUserDoc(snapshot.docs[0].data());
            })}>
                <ul className='btn-list darker'>
                    <li className='chip top' name='google' onClick={() => popUp(new GoogleAuthProvider(), des)}>
                        <span>Log in with Google</span>
                    </li>
                    <li className='chip top' name='microsoft' onClick={() => popUp(new OAuthProvider('microsoft.com'), des)}>
                        <span>Log in with Microsoft</span>
                    </li>
                    <li className='chip top' name='github' onClick={() => popUp(new GithubAuthProvider(), des)}>
                        <span>Log in with Github</span>
                    </li>
                </ul>
                <input placeholder='Email' name='email' type='email' autocomplete='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <div>
                    <button className='primary' type='submit'>
                        <Lang value='en'>Next</Lang>
                        <Lang value='vi'>Tiếp theo</Lang>
                        <Lang value='fr'>Suivante</Lang>
                        <Lang value='it'>Prossimo</Lang>
                        <Lang value='kr'>다음</Lang>
                        <Lang value='ja'>次</Lang>
                        <Lang value='de'>Nächste</Lang>
                        <Lang value='nl'>Volgende</Lang>
                        <Lang value='dk'>Næste</Lang>
                        <Lang value='pt'>Próximo</Lang>
                        <Lang value='es'>Próximo</Lang>
                        <Lang value='ru'>Следующий</Lang>
                    </button>
                </div>
            </form>
            <form className={step == 'password' ? 'active' : ''} onSubmit={async e => {
                e.preventDefault()
                let result = await signInWithEmailAndPassword(auth, email, password);
                let token = await result.user.getIdToken();
                await recordLogin(token);
                router.push(des);
            }}>
                <div>
                    <img src={userDoc?.avatar}/>{userDoc?.name}
                </div>
                <input placeholder='Password' name='password' type='password' autocomplete='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <a href='/forgot'>Forgot password</a>
                <div>
                    <button class='secondary' type='button' onClick={() => changePage('email')}>
                        <Lang value='en'>Back</Lang>
                        <Lang value='vi'>Trở lại</Lang>
                        <Lang value='fr'>Dos</Lang>
                        <Lang value='it'>Indietro</Lang>
                        <Lang value='kr'>뒤쪽에</Lang>
                        <Lang value='ja'>戻る</Lang>
                        <Lang value='de'>Zurück</Lang>
                        <Lang value='nl'>Rug</Lang>
                        <Lang value='dk'>Tilbage</Lang>
                        <Lang value='pt'>Voltar</Lang>
                        <Lang value='es'>Atrás</Lang>
                        <Lang value='ru'>Назад</Lang>
                    </button><button class='primary' type='submit'>
                        <Lang value='en'>Log in</Lang>
                        <Lang value='vi'>Đăng nhập</Lang>
                        <Lang value='fr'>Se connecter</Lang>
                        <Lang value='it'>Login</Lang>
                        <Lang value='kr'>로그인</Lang>
                        <Lang value='ja'>ログイン</Lang>
                        <Lang value='de'>Anmeldung</Lang>
                        <Lang value='nl'>Log in</Lang>
                        <Lang value='dk'>Log på</Lang>
                        <Lang value='pt'>Conecte-se</Lang>
                        <Lang value='es'>Acceso</Lang>
                        <Lang value='ru'>Авторизоваться</Lang>
                    </button>
                </div>
            </form>
        </div>
    )
}