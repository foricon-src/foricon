import Header from 'Com/header';
import Footer from 'Com/footer';

export default function RootLayout({ children, params }) {
    let { lang } = params;

    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}