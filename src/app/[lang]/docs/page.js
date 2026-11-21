import cssStyle from './page.module.css';

export function generateMetadata({ params: { lang } }) {
    return {
        title: {
            en: 'Welcome',
            vi: 'Chào mừng',
            fr: 'Bienvenu',
            it: 'Benvenuto',
            ko: '환영',
            ja: 'いらっしゃいませ',
            de: 'Willkommen',
            nl: 'Welkom',
            da: 'Velkomst',
            pt: 'Boas-vindas',
            es: 'Bienvenido',
            ru: 'Добро пожаловать',
        }[lang],
    }
}
export default function Page() {
    return <>
        <h1>Welcome to Foricon Docs!</h1>
        <p>We have set up a whole set of guides for you. Learn how add, modify and tweak our icons however you like.</p>
        <ul className={cssStyle.shortcut}>
            <li>
                <h3>Getting Started</h3>
                <p>New to Foricon? Here&apos;s some tips for you to get started.</p>
            </li>
            <li>
                <h3>Cuztomizing Icons</h3>
                <p>Adjust our icons to fit your need - sizing, scaling, rotating, animating, etc.</p>
            </li>
            <li>
                <h3>Functions</h3>
                <p>Conveniently edit our icons using JavaScript.</p>
            </li>
        </ul>
    </>
}