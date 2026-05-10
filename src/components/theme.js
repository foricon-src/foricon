'use client';

import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = useContext();
export function ThemeProvider({ children }) {
    let [ isDark, setIsDark ] = useContext((() => {
        let stored = localStorage.getItem('dark-theme');
        return stored ? JSON.parse(stored) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    })())

    useEffect(() => {
        document.body.classList[isDark ? 'add' : 'remove']('dark');
        localStorage.setItem('dark-theme', isDark);
    }, [ isDark ])

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>{
            children
        }</ThemeContext.Provider>
    )
}