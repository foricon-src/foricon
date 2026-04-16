'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function SidebarPageTransition({ name, children }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode='wait' initial={false}>
            <motion.div
                name={name}
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .2, ease: 'ease' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}