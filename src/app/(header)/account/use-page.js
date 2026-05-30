import { useContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { UserContext } from 'Com/user';
import Go from 'Com/go';

export default function usePage(func) {
    let router = useRouter();
    let pathname = usePathname();
    let user = useContext(UserContext);

    useEffect(() => {(async () => {
        if (user == null) return;
        if (!user) {
            Go('login');
            return;
        }
        while (!user.doc) await wait();
        func();

        [
            '/account',
            '/account/info',
            '/account/info/edit',
            '/account/security',
            '/account/security/change-password',
            '/account/security/login-history',
            '/account/personalization',
            '/account/package',
            '/account/package/settings',
            '/account/package/download',
        ].forEach(router.prefetch);
    })()}, [ pathname, user ])
}