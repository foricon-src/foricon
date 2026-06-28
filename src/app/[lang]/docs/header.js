'use client';

import Img from 'Com/img';
import logo from 'Pub/foricon-f-logo.png';
import cssStyle from './internal-global.css';

export default function Header() {
    return <div className={cssStyle.header}>
        <div>
            <ul className='btn-list'>
                <li className='chip bottom'>
                    <f-icon icon='chevron-right'/>
                    <span>Expand</span>
                </li>
            </ul>
            <Img src={logo}/>
            <h4>Docs</h4>
        </div>
        <input placeholder='Search...'/>
        <ul className='btn-list'>
            <li className='chip bottom'>
                <f-icon icon='sticky-note'/>
                <span>Notes</span>
            </li>
            <li className='chip bottom'>
                <f-icon icon='bookmark'/>
                <span>Saved</span>
            </li>
        </ul>
    </div>
}