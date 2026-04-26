import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function usePage(func) {
    let router = useRouter();
    let pathname = usePathname();

    useEffect(() => {(async () => {
        while (user == null) await wait();
        if (!user) {
            go(router, 'login');
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
    })()}, [ pathname ])
}