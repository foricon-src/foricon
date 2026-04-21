import Header from 'Com/header';
import Footer from 'Com/footer';

export default function RootLayout({ children }) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}