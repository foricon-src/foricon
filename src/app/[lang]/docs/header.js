'use client';

import Img from 'Com/img';
import logo from 'Pub/foricon-f-logo.png';
import cssStyle from './internal-global.module.css';

export default function Header() {
    return <div className={cssStyle.header}>
        <div>
            <ul className='btn-list'>
                <li className='tooltip bottom'>
                    <f-icon icon='chevron-right' i-s='outline'/>
                    <span>Expand</span>
                </li>
            </ul>
            <Img src={logo}/>
            <h4>Docs</h4>
        </div>
        <input placeholder='Search...'/>
        <ul className='btn-list'>
            <li className='tooltip bottom'>
                <f-icon icon='note-sticky'/>
                <span>Notes</span>
            </li>
            <li className='tooltip bottom'>
                <f-icon icon='bookmark'/>
                <span>Saved</span>
            </li>
        </ul>
    </div>
}