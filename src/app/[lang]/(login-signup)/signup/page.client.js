'use client';

import { useState, useEffect, useContext, useRef } from 'react';
import FLink from 'Com/link';
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
            h1: 'Welcome to Foricon!',
            p: "Let's start creating a brand new account to take advantage of our awesome set of icon!",
        },
        {
            h1: "How you'll log in",
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
            p: 'Hãy bắt đầu tạo một tài khoản hoàn toàn mới để tận dụng được bộ biểu tượng tuyệt vời của chúng tôi!',
        },
        {
            h1: 'Cách bạn sẽ đăng nhập',
            p: 'Nhập email cho tài khoản Foricon của bạn',
        },
        {
            h1: 'Bảo mật tài khoản',
            p: 'Hãy cho tài khoản của bạn một mật khẩu mạnh',
        },
    ],
    fr: [
        {
            h1: 'Bienvenue sur Foricon !',
            p: "Commençons par créer un tout nouveau compte pour profiter de notre superbe collection d'icônes !",
        },
        {
            h1: 'Comment vous connecter',
            p: "Saisissez l'adresse e-mail de votre compte Foricon",
        },
        {
            h1: 'Sécurisons votre compte !',
            p: 'Choisissez un mot de passe sécurisé pour votre compte',
        },
    ],
    it: [
        {
            h1: 'Benvenuto su Foricon!',
            p: 'Iniziamo creando un nuovo account per sfruttare al meglio la nostra fantastica raccolta di icone!',
        },
        {
            h1: "Come effettuerai l'accesso",
            p: "Inserisci l'e-mail del tuo account Foricon",
        },
        {
            h1: 'Mettiamolo al sicuro!',
            p: 'Scegli una password sicura per il tuo account',
        },
    ],
    ko: [
        {
            h1: 'Foricon에 오신 것을 환영합니다!',
            p: '새 계정을 만들고 멋진 아이콘 컬렉션을 마음껏 이용해 보세요!',
        },
        {
            h1: '로그인 방법',
            p: 'Foricon 계정에 사용할 이메일을 입력하세요',
        },
        {
            h1: '계정을 안전하게 보호하세요!',
            p: '안전한 비밀번호를 설정하세요',
        },
    ],
    ja: [
        {
            h1: 'Foriconへようこそ！',
            p: 'まずは新しいアカウントを作成して、素敵なアイコンコレクションをお楽しみください！',
        },
        {
            h1: 'ログイン方法',
            p: 'Foriconアカウントのメールアドレスを入力してください',
        },
        {
            h1: 'アカウントを安全に保ちましょう！',
            p: '安全なパスワードを設定してください',
        },
    ],
    de: [
        {
            h1: 'Willkommen bei Foricon!',
            p: 'Erstellen wir zunächst ein neues Konto, damit du unsere großartige Icon-Sammlung nutzen kannst!',
        },
        {
            h1: 'So meldest du dich an',
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
            p: 'Laten we beginnen met het aanmaken van een nieuw account, zodat je optimaal kunt genieten van onze geweldige iconencollectie!',
        },
        {
            h1: 'Zo log je in',
            p: 'Voer het e-mailadres van je Foricon-account in',
        },
        {
            h1: 'Beveilig je account!',
            p: 'Kies een sterk wachtwoord voor je account',
        },
    ],
    dk: [
        {
            h1: 'Velkommen til Foricon!',
            p: 'Lad os starte med at oprette en helt ny konto, så du kan få glæde af vores fantastiske samling af ikoner!',
        },
        {
            h1: 'Sådan logger du ind',
            p: 'Indtast e-mailadressen til din Foricon-konto',
        },
        {
            h1: 'Lad os sikre den!',
            p: 'Vælg en stærk adgangskode til din konto',
        },
    ],
    pt: [
        {
            h1: 'Bem-vindo ao Foricon!',
            p: 'Vamos começar criando uma nova conta para aproveitar nossa incrível coleção de ícones!',
        },
        {
            h1: 'Como você vai entrar',
            p: 'Digite o e-mail da sua conta Foricon',
        },
        {
            h1: 'Vamos deixar tudo seguro!',
            p: 'Crie uma senha forte para sua conta',
        },
    ],
    es: [
        {
            h1: '¡Bienvenido a Foricon!',
            p: 'Empecemos creando una cuenta nueva para disfrutar de nuestra increíble colección de iconos.',
        },
        {
            h1: 'Cómo iniciarás sesión',
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
            p: 'Давайте начнём с создания новой учётной записи, чтобы вы могли пользоваться нашей замечательной коллекцией иконок!',
        },
        {
            h1: 'Как вы будете входить',
            p: 'Введите электронную почту для вашей учётной записи Foricon',
        },
        {
            h1: 'Давайте защитим аккаунт!',
            p: 'Придумайте надёжный пароль для своей учётной записи',
        },
    ],
}

export default function PageClient() {
    let go = useGo();
    let searchParams = useSearchParams();
    let pathname = usePathname();
    let user = useContext(UserContext);
    let [ step ] = useContext(Context).stepHandler;

    let { lang } = document.documentElement;
    
    let [ name, setName ] = useState('');
    let [ email, setEmail ] = useState('');
    let [ password, setPassword ] = useState('');
    let [ repeatedPassword, setRepeatedPassword ] = useState('');
    let [ showed, setShowed ] = useState(false);
    let [ agreed, setAgreed ] = useState(false);

    let des = searchParams.get('redirect') || 'account';

    let changeStep = useChangeStep();
    
    useEffect(() => { user && go('account') }, [ pathname, user ])

    let steps = [
        <>
            <OAuth des={des}/>
            <input
                placeholder={
                    {
                        en: 'Enter your name',
                        vi: 'Nhập tên của bạn',
                        fr: 'Entrez votre nom',
                        it: 'Inserisci il tuo nome',
                        ko: '이름을 입력하세요',
                        ja: '名前を入力してください',
                        de: 'Geben Sie Ihren Namen ein',
                        nl: 'Vul uw naam in',
                        dk: 'Indtast dit navn',
                        pt: 'Introduza o seu nome',
                        es: 'Introduce tu nombre',
                        ru: 'Введите свое имя',
                    }[lang]
                }
                autocomplete='username'
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </>,
        <>
            <input
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
                type='email'
                autocomplete='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </>,
        <>
            <input
                placeholder={
                    {
                        en: 'Enter your password',
                        vi: 'Nhập mật khẩu của bạn',
                        fr: 'Saisissez votre mot de passe',
                        it: 'Inserisci la tua password',
                        ko: '비밀번호를 입력하세요',
                        ja: 'パスワードを入力してください',
                        de: 'Geben Sie Ihr Passwort ein',
                        nl: 'Voer uw wachtwoord in',
                        dk: 'Indtast din adgangskode',
                        pt: 'Introduza a sua senha',
                        es: 'Introduce tu contraseña',
                        ru: 'Введите пароль',
                    }[lang]
                }
                type={!showed && 'password'}
                autocomplete='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <input
                placeholder={
                    {
                        en: 'Repeat your password',
                        vi: 'Nhập lại mật khẩu của bạn',
                        fr: 'Répétez votre mot de passe',
                        it: 'Ripeti la password',
                        ko: '비밀번호를 다시 입력하세요',
                        ja: 'パスワードを再入力してください',
                        de: 'Wiederholen Sie Ihr Passwort',
                        nl: 'Herhaal uw wachtwoord',
                        dk: 'Gentag din adgangskode',
                        pt: 'Repita a sua senha',
                        es: 'Repite tu contraseña',
                        ru: 'Повторите пароль',
                    }[lang]
                }
                type={!showed && 'password'}
                autocomplete='password'
                value={repeatedPassword}
                onChange={e => setRepeatedPassword(e.target.value)}
            />
            <div>
                <label>
                    <input type='checkbox' onChange={e => setShowed(e.target.checked)}/>
                    <div className='checkmark'/>
                    <span>Show password</span>
                </label>
                <label>
                    <input type='checkbox' onChange={e => setAgreed(e.target.checked)}/>
                    <div className='checkmark'/>
                    <span>I agree with <FLink href='/tos'>Terms of Service</FLink> and <FLink href='/privacy'>Privacy Policy</FLink></span>
                </label>
            </div>
        </>
    ]

    return <>
        <div>
            <FLink href='/' title='Back to home'>
                <Img src={logo}/>
            </FLink>
            <h1>{texts[lang][step].h1}</h1>
            <p>{texts[lang][step].p}</p>
            {!step && <p>
                {
                    {
                        en: 'Already a member? ',
                        vi: 'Đã là thành viên? ',
                        fr: 'Déjà membre ? ',
                        it: 'Sei già iscritto? ' ,
                        ko: '이미 회원이신가요? ',
                        ja: 'すでに会員ですか？',
                        de: 'Bereits Mitglied? ',
                        nl: 'Al lid? ',
                        dk: 'Allerede medlem? ',
                        pt: 'Já é membro? ',
                        es: '¿Ya eres miembro? ',
                        ru: 'Уже зарегистрированы? ',
                    }[lang]
                }
                <FLink href='/login'>{
                    {
                        en: 'Log in now!',
                        vi: 'Đăng nhập ngay!',
                        fr: 'Connectez-vous dès maintenant !',
                        it: 'Accedi subito!',
                        ko: '지금 로그인하세요!',
                        ja: '今すぐログイン！',
                        de: 'Jetzt anmelden!',
                        nl: 'Log nu in!',
                        dk: 'Log ind nu!',
                        pt: 'Faça login agora!',
                        es: '¡Inicia sesión ahora!',
                        ru: 'Войдите прямо сейчас!',
                    }[lang]
                }</FLink>
            </p>}
        </div>
        <Form
            steps={steps}
            lastStepText={
                {
                    en: 'Sign up',
                    vi: 'Đăng ký',
                    fr: "S'inscrire",
                    it: 'Iscrizione',
                    ko: '가입하기',
                    ja: 'サインアップ',
                    de: 'Melden Sie sich an',
                    nl: 'Aanmelden',
                    dk: 'Tilmelde',
                    pt: 'Inscrever-se',
                    es: 'Inscribirse',
                    ru: 'Зарегистрироваться',
                }[lang]
            }
            onSubmit={async e => {
                changeStep(step + 1, e, async () => {
                    if (!step) {
                        if (name.length < 3) throw new Warn(
                            {
                                en: 'Name must has 3 characters at least',
                                vi: 'Tên phải có ít nhất 3 ký tự',
                                fr: 'Le nom doit comporter au moins 3 caractères',
                                it: 'Il nome deve avere almeno 3 caratteri',
                                ko: '이름은 최소 3자여야 합니다',
                                ja: '名前は3文字以上である必要があります',
                                de: 'Der Name muss mindestens 3 Zeichen lang sein',
                                nl: 'De naam moet uit ten minste 3 tekens bestaan',
                                dk: 'Navnet skal indeholde mindst 3 tegn',
                                pt: 'O nome deve ter pelo menos 3 caracteres',
                                es: 'El nombre debe tener al menos 3 caracteres',
                                ru: 'Имя должно содержать не менее 3 символов',
                            }[lang]
                        )
                    }
                    else if (step == 1) {
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
                        if (!snapshot.empty) throw new Warn(
                            {
                                en: 'This email has already been taken',
                                vi: 'Email này đã được lấy',
                                fr: 'Cette adresse e-mail est déjà utilisée',
                                it: 'Questo indirizzo email è già in uso',
                                ko: '이미 사용 중인 이메일 주소입니다',
                                ja: 'このメールアドレスはすでに登録されています',
                                de: 'Diese E-Mail-Adresse wird bereits verwendet',
                                nl: 'Dit e-mailadres is al in gebruik',
                                dk: 'Denne e-mail er allerede taget',
                                pt: 'Este e-mail já foi utilizado',
                                es: 'Este correo electrónico ya está registrado',
                                ru: 'Этот адрес электронной почты уже занят',
                            }[lang]
                        )
                    }
                    else {
                        if (!matchedPassword) throw new Warn(
                            {
                                en: 'Password did not match',
                                vi: 'Mật khẩu không khớp',
                                fr: 'Le mot de passe ne correspond pas',
                                it: 'La password non corrisponde',
                                ko: '비밀번호가 일치하지 않습니다',
                                ja: 'パスワードが一致しませんでした',
                                de: 'Das Passwort stimmte nicht überein',
                                nl: 'Wachtwoord kwam niet overeen',
                                dk: 'Adgangskoden matchede ikke',
                                pt: 'A palavra-passe não corresponde',
                                es: 'La contraseña no coincide',
                                ru: 'Пароль не совпадает',
                            }[lang]
                        )
        
                        // let result = await signInWithEmailAndPassword(auth, email, password);
                        // let token = await result.user.getIdToken();
                        // await recordLogin(token);
                        // go(des);
                    }
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