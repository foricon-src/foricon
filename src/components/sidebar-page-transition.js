'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';

let duration = 10;

export default function SidebarPageTransition({ name, children }) {
    let pathname = usePathname();
    let [ prev, setPrev ] = useState(children);
    let [ toShow, show ] = useState(children);
    let [ opacity, setOpacity ] = useState([0, 1]);

    useEffect(() => {(async () => {
        if (prev == children) return;
        show(prev);
        setOpacity([1, 0]);
        await wait(duration);
        show(children);
        setOpacity([0, 1]);
        setPrev(children);
    })()}, [ children ])

    return (
        <>
            <motion.div
                name={name}
                key={pathname}
                initial={{ opacity: opacity[0] }}
                animate={{ opacity: opacity[1] }}
                transition={{ duration, ease: 'ease' }}
            >
                {toShow}
            </motion.div>
        </>
    )
}