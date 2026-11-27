'use client';

import useGo from 'Com/go';
import Link from 'next/link';
import Code from 'Com/f-code';
import cssStyle from '../internal-global.module.css';

export default function PageClient() {
    let go = useGo();

    return <>
        <h1>Getting Started</h1>
        <p>Let our icons appear in your project and elevate its look. We have prepared for you guides to do so, in a quick and efficient way.</p>
        <h3>1. Import to Your Project</h3>
        <p>Using our import code (aka Foricon Package) is the fastest and easiest way to introduce our icons to your project. You can find it in the <Link href='/account/package'>Package</Link> page of Account - obviously you need an account for that. <Link href='/login'>Log in</Link> or create a brand new account <Link href='/signup'>here</Link>.</p>
        <h3>2. Adding Icons</h3>
        <p>Choose any icons from our <Link href='/search'>collection</Link>, and use <span className='small-code'>&lt;f-icon&gt;</span> tag to add the icon.</p>
        <Code>{`<!--Regular Solid-->
<f-icon icon='book'></f-icon>

<!--Regular Outline-->
<f-icon icon='book' i-s='outline'></f-icon>

<!--Duotone Solid-->
<f-icon icon='book' i-s='duotone/solid'></f-icon>

<!--Duotone Outline-->
<f-icon icon='book' i-s='duotone/outline'></f-icon>`}</Code>
        <h3>3. Further Customization</h3>
        <p>Now your design has been more lively thanks to the newly-added icons, let&apos;s now give it some distinct styles.</p>
        <ul className={cssStyle.items}>
            <li>
                <h6>Animating</h6>
            </li>
            <li>
                <h6>Rotating</h6>
            </li>
            <li>
                <h6>Sizing & Scaling</h6>
            </li>
            <li>
                <h6>Stacking Icons</h6>
            </li>
            <li>
                <h6>Layering</h6>
            </li>
            <li>
                <h6>Using in a List</h6>
            </li>
            <li style={{ gridColumnEnd: 'span 2' }}>
                <h6>Duotone Icons</h6>
            </li>
        </ul>
    </>
}