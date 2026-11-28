'use client';

import Link from 'next/link';
import Code from 'Com/f-code';
import useGo from 'Com/go';
import cssStyle from '../internal-global.module.css';

export default function PageClient() {
    let go = useGo();

    return <>
        <h1>Getting Started</h1>
        <p>Ready to bring your designs to life with Foricon? Getting started is easy. Follow these simple steps to add our icons to your project and make them truly yours.</p>
        <h3>1. Import to Your Project</h3>
        <p>The Foricon Package is the quickest way to bring our icon collection into your project. You can find your import code on the <Link href='/account/package'>Package</Link> page in your account.</p>
        <p>New to Foricon? <Link href='/signup'>Create an account</Link> to get started, or <Link href='/login'>log in</Link> if you already have one.</p>
        <h3>2. Adding Icons</h3>
        <p>Browse our <Link href='/search'>icon collection</Link> and pick the ones that fit your design. Once you&apos;ve found your favorites, simply use the <span className='small-code'>&lt;f-icon&gt;</span> tag to add them to your project.</p>
        <Code preview={
            <>
                <f-icon icon='book'></f-icon>
                <f-icon icon='book' i-s='outline'></f-icon>
                <f-icon icon='book' i-s='duotone/solid'></f-icon>
                <f-icon icon='book' i-s='duotone/outline'></f-icon>
            </>
        }>{`<!--Regular Solid-->
<f-icon icon='book'></f-icon>

<!--Regular Outline-->
<f-icon icon='book' i-s='outline'></f-icon>

<!--Duotone Solid-->
<f-icon icon='book' i-s='duotone/solid'></f-icon>

<!--Duotone Outline-->
<f-icon icon='book' i-s='duotone/outline'></f-icon>`}</Code>
        <h3>3. Make Them Your Own</h3>
        <p>Your icons are in place. Now comes the fun part! Fine-tune their appearance, add a little motion, or combine different styles to make them feel right at home in your design.</p>
        <ul className={cssStyle.items}>
            <li onClick={() => go('docs/styling-icons/animating')}>
                <h6>Animating</h6>
            </li>
            <li onClick={() => go('docs/styling-icons/rotating')}>
                <h6>Rotating</h6>
            </li>
            <li onClick={() => go('docs/styling-icons/sizing-scaling')}>
                <h6>Sizing & Scaling</h6>
            </li>
            <li onClick={() => go('docs/styling-icons/stacking')}>
                <h6>Stacking Icons</h6>
            </li>
            <li onClick={() => go('docs/styling-icons/layering')}>
                <h6>Layering</h6>
            </li>
            <li onClick={() => go('docs/styling-icons/list')}>
                <h6>Using in a List</h6>
            </li>
            <li onClick={() => go('docs/styling-icons/duotone')} style={{ gridColumnEnd: 'span 2' }}>
                <h6>Duotone Icons</h6>
            </li>
        </ul>
    </>
}