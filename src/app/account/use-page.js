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
        document.body.classList.add('hide-footer');
    })()}, [ pathname ])
}