'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

let duration = .2;

export default function AccountTemplate({ children }) {
    let [ pages, setPages ] = useState([children])

    useEffect(() => {(async () => {
        setPages(prev[prev.length - 1] === children ? prev : [ ...prev, children ]);
        await wait(duration);
        setPages(prev => prev.slice(-1))
    })()}, [ children ])

    return (
        <>
            {pages.map((page, i) => {
                let isTop = i == pages.length - 1;

                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: isTop ? 0 : 1 }}
                        animate={{ opacity: isTop ? 1 : 0 }}
                        transition={{ duration }}
                    >
                        {page}
                    </motion.div>
                )
            })}
        </>
    )
}