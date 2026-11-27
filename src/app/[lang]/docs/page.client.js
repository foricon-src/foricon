'use client';

import useGo from 'Com/go';
import cssStyle from './internal-global.module.css';

export default function PageClient() {
    let go = useGo();

    return <>
        <h1>Welcome to Foricon Docs!</h1>
        <p>Your guide to getting more out of Foricon. Explore our guides to discover how to use, customize, and bring our icons to life in your projects.</p>
        <ul className={cssStyle.items}>
            <li onClick={() => go('docs/web/getting-started')}>
                <h6>Getting Started on Web</h6>
                <p>New to Foricon? Let&apos;s get you started! Learn the basics and discover how to make the most of our icons on the web.</p>
            </li>
            <li onClick={() => go('docs/desktop/getting-started')}>
                <h6>Getting Started on Desktop</h6>
                <p>Bring Foricon into your favorite desktop design tools. Add icons to your designs, documents, and presentations with ease.</p>
            </li>
            <li onClick={() => go('docs/styling-icons')}>
                <h6>Cuztomizing Icons</h6>
                <p>Make every icon your own. Explore ways to adjust size, scale, rotation, animation, and more to fit your creative vision.</p>
            </li>
            <li onClick={() => go('docs/js-api')}>
                <h6>JavaScript API</h6>
                <p>Ready to do more with JavaScript? Explore our built-in functions and learn how to control and customize icons programmatically.</p>
            </li>
        </ul>
    </>
}