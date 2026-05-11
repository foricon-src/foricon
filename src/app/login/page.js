import { Suspense } from "react";
import LogIn from "./page.client";
import './page.css';

export const metadata = {
    title: 'Log in my account',
    description: 'Use email and password to log in your Foricon account. Also supports login using Google, Microsoft or GitHub.'
}
export default function Page() {
    return (
        <Suspense>
            <LogIn/>
        </Suspense>
    )
}