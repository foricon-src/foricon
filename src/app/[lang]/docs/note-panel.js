'use client';

import { useContext } from 'react';
import { LayoutContext } from './layout-provider';
import cssStyle from './internal-global.module.css';

export default function NotePanel() {
    let layout = useContext(LayoutContext);
    return <div className={cssStyle.notePanel + (layout.notePanel.isOpened ? ' active' : '')}/>;
}