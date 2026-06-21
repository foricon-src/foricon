import Sidebar from "./sidebar";
import { SidebarPageTransition } from "Com/sidebar-page-transition";

export const metadata = {
    title: 'My account',
    robots: { index: false, follow: false },
}
export default function generateMetadata({ params }) {
    let myAccount = {
        en: 'My account',
        vi: 'Tài khoản của tôi',
        fr: 'Mon compte',
        it: 'Il mio conto',
        kr: '내 계정',
        ja: '私のアカウント',
        de: 'Mein Konto',
        nl: 'Mijn account',
        dk: 'Min konto',
        pt: 'A minha conta',
        es: 'Mi cuenta',
        ru: 'Мой счет',
    }[lang]

    return {
        title: myAccount,
        template: `%s | ${myAccount} | Foricon (Beta 3.0 Preview)`,
    }
}
export default function AccountLayout({ children }) {
    return <div id='sidebar-page'>
        <Sidebar/>
        <SidebarPageTransition>{
            children
        }</SidebarPageTransition>
    </div>
}