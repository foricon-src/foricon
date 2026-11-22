import useGo from 'Com/go';
import cssStyle from './page.module.css';

// export function generateMetadata({ params: { lang } }) {
//     return {
//         title: {
//             en: 'Welcome',
//             vi: 'Chào mừng',
//             fr: 'Bienvenu',
//             it: 'Benvenuto',
//             ko: '환영',
//             ja: 'いらっしゃいませ',
//             de: 'Willkommen',
//             nl: 'Welkom',
//             da: 'Velkomst',
//             pt: 'Boas-vindas',
//             es: 'Bienvenido',
//             ru: 'Добро пожаловать',
//         }[lang],
//     }
// }
export default function Page() {
    let go = useGo();

    return <>
        <h1>Welcome to Foricon Docs!</h1>
        <p>We have set up a whole set of guides for you. Learn how add, modify and tweak our icons however you like.</p>
        <ul className={cssStyle.shortcut}>
            <li onClick={() => go('docs/web/getting-started')}>
                <h6>Getting Started on Web</h6>
                <p>New to Foricon? Or just need a refresher? Here&apos;s some tips for you to get started.</p>
            </li>
            <li onClick={() => go('docs/desktop/getting-started')}>
                <h6>Getting Started on Desktop</h6>
                <p>Use our icons in desktop design programs, or give your docs or slides a nice touch.</p>
            </li>
            <li onClick={() => go('docs/styling-icons')}>
                <h6>Cuztomizing Icons</h6>
                <p>Adjust our icons to fit your need - sizing, scaling, rotating, animating, etc.</p>
            </li>
            <li onClick={() => go('docs/js-api')}>
                <h6>JavaScript API</h6>
                <p>Edit and modify our icons easily with JavaScript by using our built-in functions.</p>
            </li>
        </ul>
    </>
}