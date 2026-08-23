'use client';

import { useContext, useState, useEffect } from 'react';
import { UserContext } from './user';
import { IconContext } from './icons';
import { ThemeContext } from './theme';
import 'Com/utils';
import LoadingElement from './loading-element';

export default function Loading() {
    let user = useContext(UserContext);
    let icons = useContext(IconContext);
    let { isDark } = useContext(ThemeContext);

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
        if (user == false || !icons || !packageLoadded) return;

        let cancelled = false;

        (async () => {
            setOpacity(0);
            await wait(.2);
            !cancelled && setDone(true);
        })()

        return () => cancelled = true;
    }, [ user, icons, packageLoadded ])

    return !done && <LoadingElement style={{ opacity }}/>;
}