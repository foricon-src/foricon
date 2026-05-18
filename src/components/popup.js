import { signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import recordLogin from "./record-login";
import { useRouter } from "next/navigation";

export default async function popUp(provider, des) {
    let router = useRouter();
    let result = await signInWithPopup(auth, provider);
    let token = await result.user.getIdToken();

    await fetch('/api/user/create', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
    })
    await recordLogin(token);

    go(router, des);
}