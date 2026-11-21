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
                    path: '/adding-icons',
                },
                {
                    name: 'CSS Pseudo-elements',
                    path: '/adding-icons/pseudo-elements',
                },,
                {
                    name: 'Unicodes',
                    path: '/adding-icons/unicodes',
                },,
                {
                    name: 'Glyphs',
                    path: '/adding-icons/glyphs',
                },
            ],
        },
        {
            name: 'Styling Icons',
            pages: [
                {
                    name: 'Basics',
                    path: '/styling-icons',
                },
                {
                    name: 'Animating',
                    path: '/styling-icons/animating',
                },
                {
                    name: 'Rotating',
                    path: '/styling-icons/rotating',
                },
                {
                    name: 'Sizing & Scaling',
                    path: '/styling-icons/sizing-scaling',
                },
                {
                    name: 'Duotone Icons',
                    path: '/styling-icons/duotone',
                },
            ],
        },
        {
            name: 'Javascript API',
            pages: [
                {
                    name: 'getIcon()',
                    path: '/js-api/get-icon',
                },
                {
                    name: 'setIcon()',
                    path: '/js-api/set-icon',
                },
                {
                    name: 'toggleIcon()',
                    path: '/js-api/toggle-icon',
                },
                {
                    name: 'getStyle()',
                    path: '/js-api/get-style',
                },
                {
                    name: 'setStyle()',
                    path: '/js-api/set-style',
                },
                {
                    name: 'toggleStyle()',
                    path: '/js-api/toggle-style',
                },
                {
                    name: 'setAnimation()',
                    path: '/js-api/set-animation',
                },
                {
                    name: 'setSize()',
                    path: '/js-api/set-size',
                },
                {
                    name: 'setScale()',
                    path: '/js-api/set-scale',
                },
                {
                    name: 'rotate()',
                    path: '/js-api/rotate',
                },
                {
                    name: 'set()',
                    path: '/js-api/set',
                },
                {
                    name: 'toggleIconOnHover()',
                    path: '/js-api/toggle-icon-on-hover',
                },
                {
                    name: 'removeToggleIconOnHover()',
                    path: '/js-api/remove-toggle-icon-on-hover',
                },
                {
                    name: 'toggleStyleOnHover()',
                    path: '/js-api/toggle-style-on-hover',
                },
                {
                    name: 'removeToggleStyleOnHover()',
                    path: '/js-api/remove-toggle-style-on-hover',
                },
            ],
        },
    ]

    return <div className={cssStyle.sidebar + (layout.sidebar.isOpened ? ' active' : '')}>{
        groups.map(({ name, pages }) => {
            return <div key={name}>
                <h6>{name}</h6>
                <ul className='btn-list small vertical line-active'>{
                    pages.map(({ name, path }) => <li key={name} onClick={() => go(`docs${path}`)}>{name}</li>)
                }</ul>
            </div>
        })
    }</div>;
}