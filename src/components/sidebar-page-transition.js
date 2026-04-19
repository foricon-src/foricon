'use client'

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export function GoPage(page) {
    let router = useRouter();
    (async () => {
        let main = qSelec(false, '#sidebar-page > div:last-child');
        main.style.opacity = 0;
        await wait(.2);
        go(router, page);
    })()
}
export function SidebarPageTransition({ name, children }) {
    let pathname = usePathname();

    return (
        <motion.div
            name={name}
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .2, ease: 'ease' }}
        >
            {children}
        </motion.div>
    )
}