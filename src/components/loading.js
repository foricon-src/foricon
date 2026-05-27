'use client';

import { useContext, useState, useEffect } from 'react';
import { UserContext } from './user';
import { IconContext } from './icons';

export default function Loading() {
    let user = useContext(UserContext);
    let icons = useContext(IconContext);

    let [ packageLoadded, setPackageLoadded ] = useState(false);
    let [ isAnimating, setIsAnimating ] = useState(false);
    let [ opacity, setOpacity ] = useState(1);
    let [ done, setDone ] = useState(false);

    useEffect(() => {(async () => {
        while (!window.foriconPackageIsLoaded) await wait();
        setPackageLoadded(true);
    })()}, [])
    useEffect(() => {(async () => {
        console.log(user, !icons, !packageLoadded, isAnimating)
        if (user == null || !icons || !packageLoadded || isAnimating) return;

        setIsAnimating(true);

        setOpacity(0);
        await wait(.2);
        setDone(true);
    })()}, [ user, icons, packageLoadded ])

    return !done && <div id='loading' style={{ opacity }}>
        <div id='loading_shadow'></div>
        <div id='loading_bounce'>
            <div id='loading_spin'></div>
        </div>
    </div>
}