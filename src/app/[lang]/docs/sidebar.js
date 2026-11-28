'use client';

import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { LayoutContext } from './layout-provider';
import useGo from 'Com/go';
import cssStyle from './internal-global.module.css';

export default function Sidebar() {
    let go = useGo();
    let pathname = usePathname();
    let layout = useContext(LayoutContext);

    let groups = [
        {
            pages: [
                {
                    name: 'Welcome',
                    path: '',
                },
            ],
        },
        {
            name: 'Using on Web',
            pages: [
                {
                    name: 'Getting Started',
                    path: '/web',
                },
                {
                    name: 'Configurating Package',
                    path: '/web/config',
                },
                {
                    name: 'Host Yourself',
                    path: '/web/host',
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
                    name: 'Using Icon Names',
                    path: '/adding-icons/icon-names',
                },
                {
                    name: 'Using CSS Pseudo-elements',
                    path: '/adding-icons/pseudo-elements',
                },
                {
                    name: 'Using Unicodes',
                    path: '/adding-icons/unicodes',
                },
                {
                    name: 'Using Glyphs',
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
                    name: 'Stacking Icons',
                    path: '/styling-icons/stacking',
                },
                {
                    name: 'Layering',
                    path: '/styling-icons/rotating',
                },
                {
                    name: 'Using in a List',
                    path: '/styling-icons/list',
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
                    name: 'Introduction',
                    path: '/js-api',
                },
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
                    name: 'getAnimation()',
                    path: '/js-api/get-animation',
                },
                {
                    name: 'setAnimation()',
                    path: '/js-api/set-animation',
                },
                {
                    name: 'getSize()',
                    path: '/js-api/get-size',
                },
                {
                    name: 'setSize()',
                    path: '/js-api/set-size',
                },
                {
                    name: 'getScale()',
                    path: '/js-api/get-scale',
                },
                {
                    name: 'setScale()',
                    path: '/js-api/set-scale',
                },
                {
                    name: 'getRotate()',
                    path: '/js-api/get-rotate',
                },
                {
                    name: 'rotate()',
                    path: '/js-api/rotate',
                },
                {
                    name: 'changesOn()',
                    path: '/js-api/changes-on',
                },
                {
                    name: 'set()',
                    path: '/js-api/set',
                },
                {
                    name: 'get()',
                    path: '/js-api/get',
                },
            ],
        },
        {
            name: 'Using on Desktop',
            pages: [
                {
                    name: 'Getting Started',
                    path: '/desktop',
                },
                {
                    name: 'Using Glyphs',
                    path: '/desktop/glyphs',
                },
                {
                    name: 'Using SVGs',
                    path: '/desktop/svgs',
                },
                {
                    name: 'Duotone Icons',
                    path: '/desktop/duotone',
                },
            ],
        },
    ]

    return <div className={cssStyle.sidebar + (layout.sidebar.isOpened ? ' active' : '')}>{
        groups.map(({ name, pages }) => {
            return <div key={name}>
                {name && <h6>{name}</h6>}
                <ul className='btn-list small vertical line-active'>{
                    pages.map(({ name, path }) => <li
                        key={name}
                        onClick={() => go(`docs${path}`)}
                        className={pathname.slice(8) == path && 'active'}
                    >{name}</li>)
                }</ul>
            </div>
        })
    }</div>;
}