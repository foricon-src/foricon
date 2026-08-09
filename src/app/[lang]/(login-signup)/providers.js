'use client';

import { createContext, useState } from 'react';

export const Context = createContext();
export function Providers({ children }) {
    let stepHandler = useState(0);
    let notificationHandler = useState();
    return <Context.Provider value={{ stepHandler, notificationHandler }}>{children}</Context.Provider>
}