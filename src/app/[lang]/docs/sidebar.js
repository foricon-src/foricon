'use client';

import { useContext } from 'react';
import { LayoutContext } from './layout-provider';
import useGo from 'Com/go';
import cssStyle from './internal-global.module.css';

export default function Sidebar() {
    let layout = useContext(LayoutContext);
    let go = useGo();

    let groups = [
        {
            name: 'Getting Started',
            pages: [
                {
                    name: 'Setting Up',
                    path: '/',
                },
            ],
        },
        {
            name: 'Adding Icons',
            pages: [
                {
                    name: 'Basics',
                    path: '/adding-icons/basics',
                },
            ],
        },
    ]

    return <div className={cssStyle.sidebar + (layout.sidebar.isOpened ? ' active' : '')}>{
        groups.map(({ name, pages }) => {
            return <div key={name}>
                <h6>{name}</h6>
                <ul className='btn-list small vertical line-active'>{
                    pages.map(({ name, path }) => <li onClick={() => go(`doc${path}`)}>{name}</li>)
                }</ul>
            </div>
        })
    }</div>;
}