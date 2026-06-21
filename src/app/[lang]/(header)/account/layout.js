import Sidebar from "./sidebar";
import { SidebarPageTransition } from "Com/sidebar-page-transition";

export const metadata = {
    title: 'My account',
    description: 'Manage profile, security and Foricon Package usage',
    robots: { index: false, follow: false },
}
export default function AccountLayout({ children }) {
    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <SidebarPageTransition>{
                children
            }</SidebarPageTransition>
        </div>
    )
}