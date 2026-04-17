'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react';

export default function SidebarPageTransition({ name, children }) {
    let pathname = usePathname();
    let [ prev, setPrev ] = useState(null);
    let [ current, setCurrent ] = useState(children);

    useState(() => {(async () => {
        if (current == children) return;
        setPrev(current);
        await wait(.2);
        setCurrent(children);
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
                    transition={{ duration: .2, ease: 'ease' }}
                >
                    {prev}
                </motion.div>
            )}
            <motion.div
                name={name}
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .2, ease: 'ease' }}
            >
                {current}
            </motion.div>
        </>
    )
}