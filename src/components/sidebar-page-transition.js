'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react';

export default function SidebarPageTransition({ name, children }) {
    let pathname = usePathname();
    let [ current, setCurrent ] = useState(children);
    let [ prev, setPrev ] = useState(null);
    let childrenRef = useRef(children);

    useState(() => {(async () => {
        if (childrenRef.current == children) return;
        setPrev(childrenRef.current);
        await wait(.2);
        setCurrent(children);
        setPrev(null);
        childrenRef.current = children;
    })()}, [])

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