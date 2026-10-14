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
    return <div>
        <h1>Welcome to Foricon Docs!</h1>
    </div>
}