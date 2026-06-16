'use client';

import { useContext, useState, useEffect } from 'react';
import { UserContext } from './user';
import { IconContext } from './icons';

export default function Loading() {
    let user = useContext(UserContext);
    let icons = useContext(IconContext);

    let [ packageLoadded, setPackageLoadded ] = useState(false);
    let [ done, setDone ] = useState(false);
    let [ opacity, setOpacity ] = useState(1);

    useEffect(() => {
        let cancelled = false;
        
        (async () => {
            while (!window.foriconPackageIsLoaded) await wait();
            !cancelled && setPackageLoadded(true);
        })()
        
        return () => cancelled = true;
    }, [])
    useEffect(() => {
        if (user == null || !icons || !packageLoadded) return;

        let cancelled = false;

        (async () => {
            setOpacity(0);
            await wait(.2);
            !cancelled && setDone(true);
        })()

        return () => cancelled = true;
    }, [ user, icons, packageLoadded ])

    return !done && <div id='loading' style={{ opacity }}>
        <div id='loading_shadow'></div>
        <div id='loading_bounce'>
            <div id='loading_spin'></div>
        </div>
    </div>
}