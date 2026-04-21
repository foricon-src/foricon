import Header from 'Com/header';

export default function RootLayout({ children }) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}