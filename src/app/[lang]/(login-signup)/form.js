import { useContext, useEffect, useRef } from 'react';
import cssStyle from './page.module.css';
import { Context } from './providers';

export function useChangeStep() {
    let {
        stepHandler: [, setStep ],
        notificationHandler: [, setNotification]
    } = useContext(Context);

    return async (step, e, func) => {
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
            let { message } = obj;
            setNotification({
                type: obj instanceof Warn ? 'warn' : 'error',
                message:
                    message == 'Firebase: Error (auth/invalid-credential).' ?
                        {
                            en: 'Incorrect password',
                            vi: 'Sai mật khẩu',
                            fr: 'Mot de passe incorrect',
                            it: 'Password errata',
                            ko: '잘못된 비밀번호입니다',
                            ja: 'パスワードが間違っています',
                            de: 'Falsches Passwort',
                            nl: 'Onjuist wachtwoord',
                            dk: 'Forkert adgangskode',
                            pt: 'Senha incorreta',
                            es: 'Contraseña incorrecta',
                            ru: 'Неверный пароль',
                        }[lang] :
                    message == 'Firebase: Error (auth/network-request-failed).' ?
                        {
                            en: 'No internet connection',
                            vi: 'Không có kết nối internet',
                            fr: 'Aucune connexion Internet',
                            it: 'Nessuna connessione Internet',
                            ko: '인터넷 연결 없음',
                            ja: 'インターネットに接続されていません',
                            de: 'Keine Internetverbindung',
                            nl: 'Geen internetverbinding',
                            dk: 'Ingen internetforbindelse',
                            pt: 'Sem ligação à internet',
                            es: 'Sin conexión a Internet',
                            ru: 'Нет подключения к Интернету',
                        }[lang] :
                    message,
            })
        }
        finally {
            await wait();
            wrapper.style.opacity = body.style.pointerEvents = '';
        }
    }
}
export function Form({ steps, lastStepText, onSubmit }) {
    let changeStep = useChangeStep();
    let { stepHandler: [ step ], notificationHandler: [ notification ] } = useContext(Context);

    let { lang } = document.documentElement;

    let formRef = useRef();

    useEffect(() => {
        if (elemById('loading')) return;
        let timeout = setTimeout(() => qSelec('input')?.focus(), 200);
        return () => clearTimeout(timeout);
    }, [ step ])
    useEffect(() => {
        addEvLis(document, 'keypress', ({ key }) => {
            if (key != 'Enter') return;
            let nextInput = qSelec(formRef.current, 'input:focus + input');
            nextInput?.focus();
        })
    })

    return <form ref={formRef} onSubmit={onSubmit}>
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
                step == steps.length ? lastStepText : {
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
}