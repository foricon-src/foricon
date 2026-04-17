import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function usePage(func) {
    let router = useRouter();

    useEffect(() => {(async () => {
        while (user == null) await wait();
        user ? func() : go(router, 'login');
    })()}, [])
}