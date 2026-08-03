import { Suspense } from 'react';
import { headers } from 'next/headers';
import AlternativeLanguages from 'Com/alternative-languages';
import LogIn from './page.client';
import './page.css';

export const metadata = {
    title: 'Log in my account',
    description: 'Use email and password to log in your Foricon account. Also supports login using Google, Microsoft or GitHub.',
    alternates: AlternativeLanguages('/login'),
}
export default function Page() {
    let lang = headers().get('f-lang');
    return (
        <Suspense>
            <LogIn lang={lang}/>
        </Suspense>
    )
}