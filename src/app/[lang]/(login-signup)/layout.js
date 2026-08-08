import { Suspense } from 'react';
import cssStyle from './page.module.css';
import { Providers } from './providers';

export default function Layout({ children }) {
    return <Providers>
        <Suspense>
            <div className={cssStyle.wrapper}>{children}</div>
        </Suspense>
    </Providers>
}