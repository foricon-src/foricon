import { Suspense } from "react";
import LogIn from "./page.client";
import './page.css';

export default function Page() {
    return (
        <Suspense>
            <LogIn/>
        </Suspense>
    )
}