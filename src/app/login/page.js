import { Suspense } from "react";
import LogIn from "./page.client";
import './page.css';

export const metadata = {
    title: 'Log in my account',
}
export default function Page() {
    return (
        <Suspense>
            <LogIn/>
        </Suspense>
    )
}