'use client';

import { useContext } from 'react';
import { LayoutContext } from './layout-provider';
import cssStyle from './internal-global.module.css';

export default function Sidebar() {
    let layout = useContext(LayoutContext);
    return <div className={cssStyle.sidebar + (layout.sidebar.isOpened ? ' active' : '')}/>;
}