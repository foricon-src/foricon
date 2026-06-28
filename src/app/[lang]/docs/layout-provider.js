'use client';

import { createContext, useState } from 'react';

export const LayoutContext = createContext(null);
export function LayoutProvider({ children }) {
    let [ isSidebarOpened, setIsSidebarOpened ] = useState(false);
    let [ isNotePanelOpened, setIsNotePanelOpened ] = useState(false);
    let [ isSavedPanelOpened, setIsSavedPanelOpened ] = useState(false);

    return <LayoutContext value={{
        sidebar: {
            isOpened: isSidebarOpened,
            func: setIsSidebarOpened,
        },
        notePanel: {
            isOpened: isNotePanelOpened,
            func: setIsNotePanelOpened,
        },
        savedPanel: {
            isOpened: isSavedPanelOpened,
            func: setIsSavedPanelOpened,
        },
    }}>{children}</LayoutContext>
}