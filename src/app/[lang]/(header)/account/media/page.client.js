'use client';

import cssStyle from './page.module.css';

export default function PageClient() {
    let { lang } = document.documentElement;

    return <div className={cssStyle.media}>
        <h3>Media</h3>
        <ul className='btn-list'>
            <li>
                <f-icon icon='rotate-right' i-s='outline'/>
                <span>Refresh</span>
            </li>
            <li>
                <f-icon icon='arrow-up-from-bracket' i-s='outline'/>
                <span>Upload</span>
            </li>
            <li className='tooltip top line'>
                <f-icon icon='trash-can' i-s='outline'/>
                <span>Remove</span>
            </li>
            <li className='tooltip top'>
                <f-icon icon='arrow-up-right-from-square' i-s='outline'/>
                <span>Open</span>
            </li>
        </ul>
        <ul></ul>
    </div>
}