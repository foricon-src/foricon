import { Suspense } from "react";
import LogIn from "./pageClient";

export default function Page() {
    return (
        <Suspense>
            <LogIn/>
        </Suspense>
    )
}