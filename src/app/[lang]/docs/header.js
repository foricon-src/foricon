'use client';

import { useContext } from 'react';
import Img from 'Com/img';
import logo from 'Pub/foricon-f-logo.png';
import { LayoutContext } from './layout-provider';
import cssStyle from './internal-global.module.css';

export default function Header() {
    let { sidebar, notePanel, savedPanel } = useContext(LayoutContext);

    return <div className={cssStyle.header}>
        <div>
            <ul className='btn-list'>
                <li className='tooltip bottom' onClick={() => sidebar.func(!sidebar.isOpened)}>
                    <f-icon icon='chevron-right' i-s='outline' f-rotate={sidebar.isOpened ? '180' : ''}/>
                    <span>{sidebar.isOpened ? 'Collapse' : 'Expand'}</span>
                </li>
            </ul>
            <Img src={logo}/>
            <h4>Docs</h4>
        </div>
        <input placeholder='Search...'/>
        <ul className='btn-list'>
            <li className={`tooltip bottom${notePanel.isOpened ? ' active' : ''}`} onClick={() => notePanel.func(!notePanel.isOpened)}>
                <f-icon icon='note-sticky'/>
                <span>Notes</span>
            </li>
            <li className={`tooltip bottom${savedPanel.isOpened ? ' active' : ''}`} onClick={() => savedPanel.func(!savedPanel.isOpened)}>
                <f-icon icon='bookmark'/>
                <span>Saved</span>
            </li>
        </ul>
    </div>
}