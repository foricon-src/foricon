import { auth } from 'Com/firebase';
import recordLogin from 'Com/record-login';
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from 'firebase/auth';

export default function OAuth({ lang, des }) {
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

    return <ul className='btn-list darker'>
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
}