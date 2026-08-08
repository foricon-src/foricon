import { Suspense } from 'react';
import cssStyle from './page.module.css';

export default function Layout({ children }) {
    return <Suspense>
        <div className={cssStyle.wrapper}>{children}</div>
    </Suspense>
}