import Sidebar from "./sidebar";
import SidebarPageTransition from "Com/sidebar-page-transition";

export default function AccountLayout({ children }) {
    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <SidebarPageTransition>
                {children}
            </SidebarPageTransition>
        </div>
    )
}