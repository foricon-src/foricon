'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';
import recordLogin from './record-login';
import useGo from './go';

export default function MethodPopup(provider, des) {
    let go = useGo();

    useEffect(() => {(async () => {
        let result = await signInWithPopup(auth, provider);
        let token = await result.user.getIdToken();
        
        await fetch('/api/user/create', {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
        })
        await recordLogin(token);

        go(des);
    })()}, [])
}