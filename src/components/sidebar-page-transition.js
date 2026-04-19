'use client'

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export async function goPage(page) {
    let router = useRouter();
    let main = qSelec(false, '#sidebar-page > div:last-child');
    main.style.opacity = 0;
    await wait(.2);
    go(router, page);
}
export function SidebarPageTransition({ name, children }) {
    return (
        <motion.div
            name={name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .2, ease: 'ease' }}
        >
            {children}
        </motion.div>
    )
}