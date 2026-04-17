'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';

let duration = .2;

export default function SidebarPageTransition({ name, children }) {
    let pathname = usePathname();
    let [ prev, setPrev ] = useState(null);
    let [ current, setCurrent ] = useState(children);

    useEffect(() => {(async () => {
        if (current == children) return;
        setPrev(current);
        setCurrent(children);
        await wait(duration);
        setPrev(null);
    })()}, [ children ])

    return (
        <>
            {prev && (
                <motion.div
                    name={name}
                    key={pathname}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration, ease: 'ease' }}
                >
                    {prev}
                </motion.div>
            )}
            <motion.div
                name={name}
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration, ease: 'ease' }}
            >
                {current}
            </motion.div>
        </>
    )
}