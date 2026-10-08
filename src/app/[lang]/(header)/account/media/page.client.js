'use client';

import cssStyle from './page.module.css';

export default function PageClient() {
    let { lang } = document.documentElement;
    let items = [];

    return <div className={cssStyle.media}>
        <h3>Media</h3>
        <ul className='btn-list'>
            <li name='refresh'>
                <f-icon icon='rotate-right' i-s='outline'/>
                <span>Refresh</span>
            </li>
            <li name='upload'>
                <f-icon icon='arrow-up-from-bracket' i-s='duotone/outline'/>
                <span>Upload</span>
            </li>
            <li className='tooltip top line' name='remove'>
                <f-icon icon='trash-can' i-s='duotone/outline'/>
                <span>Remove</span>
            </li>
            <li className='tooltip top' name='open'>
                <f-icon icon='arrow-up-right-from-square' i-s='duotone/outline'/>
                <span>Open</span>
            </li>
        </ul>
        {items.length
            ? <ul></ul>
            : <div>
                <h3>It's a little quiet here</h3>
                <p>Upload some files to make it more lively</p>
                <button className='btn primary'>
                    <f-icon icon='arrow-up-from-bracket' i-s='outline'/>
                    <span>Upload</span>
                </button>
            </div>
        }
    </div>
}