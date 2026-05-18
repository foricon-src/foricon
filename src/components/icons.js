'use client';

import { createContext, useEffect, useState } from 'react';

export const IconContext = createContext(null);
export function IconProvider({ children }) {
    let [ icons, setIcons ] = useState(null);

    useEffect(() => {(async () => {
        let value = {
            b1: [],
            b2: [],
        }
        let b1 = (await get(ref(db, 'icons/'))).val();
        for (let name in b1) {
            let icon = b2[name];
            b1.push({
                name,
                categories: icon.categories.map(cate => cate.replace('bussiness', 'business')),
                styles: icon.styles,
                glyphs: icon.glyphs,
                unicodes: icon.unicodes,
            })
        }
        let b2 = (await get(ref(db, 'iconsB2/'))).val();
        for (let name in b2) {
            let icon = b2[name];
            b2.push({
                name,
                categories: icon.categories,
                styles: icon.styles,
                glyphs: icon.glyphs,
                unicodes: icon.unicodes,
            })
        }
        console.log(value);
        setIcons(value);
    })}, [])

    return <IconContext.Provider value={icons}>{
        children
    }</IconContext.Provider>
}