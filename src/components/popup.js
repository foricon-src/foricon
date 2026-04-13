import { signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import recordLogin from "./record-login";

export default async function popUp(provider, des) {
    let result = await signInWithPopup(auth, provider);
    let token = await result.user.getIdToken();

    await fetch('/api/user/create', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
    })
    await recordLogin(token);

    router.push(des);
}