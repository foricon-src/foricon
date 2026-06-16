'use client';

import { useContext, useState, useEffect } from 'react';
import { UserContext } from './user';
import { IconContext } from './icons';
import { ThemeContext } from './theme';

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

    return !done && <iframe id='loading' srcDoc={`
        <head>
            <style>
                :root {
                    /*Cursor*/
                    --cursor-default: url('//res.cloudinary.com/dxrihohkl/image/upload/v1774071081/users/ud4lP1mhq4XvynG7qUlcsAxi0Q02/cursor-dark-new.svg'), auto;
                    --cursor-pointer: url('//res.cloudinary.com/dxrihohkl/image/upload/v1774071081/users/ud4lP1mhq4XvynG7qUlcsAxi0Q02/cursor-hover-new.svg'), pointer;
                    --cursor-text: text;
                    
                    /*Border radius*/
                    --l-bdr-rad: 20px;
                    --bdr-rad: 15px;
                    --s-bdr-rad: 10px;
                    
                    /*Transition*/
                    --df-trans: all .2s ease;
                    
                    /*Colors*/
                    /*_Main*/
                    --xtr-main-color: rgba(var(--main-color-rgb), .05);
                    --tr-main-color: rgba(var(--main-color-rgb), .25);
                    --xlt-main-color: rgb(255, 252, 242);
                    --lt-main-color: rgb(255, 239, 193);
                    --main-color-rgb: 255, 193, 7;
                    --main-color: rgb(var(--main-color-rgb));
                    --dk-main-color: rgb(81, 65, 19);
                    --xdk-main-color: rgb(35, 32, 22);
                    
                    /*_Background*/
                    --bg-color-rgb: 255, 255, 255;
                    --bg-color: white;
                    --dk-bg-color-rgb: 250, 250, 250; /*245, 245, 245*/
                    --dk-bg-color: rgb(var(--dk-bg-color-rgb));
                    --bg-blur: rgba(var(--bg-color-rgb), .9);
                    --bg-blur-px: blur(60px);
                }
                html {
                    font-size: 20px;
                    scroll-behavior: smooth;
                }
                body {
                    margin: 0;
                    color: var(--text-color);
                    background-color: var(--bg-color);
                    cursor: var(--cursor-default);

                    &.dark {
                        --cursor-default: url('//res.cloudinary.com/dxrihohkl/image/upload/v1774071081/users/ud4lP1mhq4XvynG7qUlcsAxi0Q02/cursor-light-new.svg'), auto;
                        /*Colors*/
                        /*_Background*/
                        --bg-color-rgb: 23, 23, 23;
                        --bg-color: rgb(var(--bg-color-rgb));
                        --dk-bg-color-rgb: 18, 18, 18;
                        --dk-bg-color: rgb(var(--dk-bg-color-rgb));
                        --bg-blur: rgba(var(--bg-color-rgb), .8);
                    }
                }

                #loading {
                    --initial: .2;
                    --fly-up: .1;
                    --dura: 10s;
                
                    background-color: var(--bg-color);
                    background-image:
                        radial-gradient(ellipse at top left, var(--xtr-main-color), transparent 60%),
                        radial-gradient(ellipse at bottom right, var(--tr-main-color), transparent 80%);
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column-reverse;

                    body.dark & {
                        --initial: .4;
                        --fly-up: .2;
                    }
                    #loading_spin {
                        background-color: var(--main-color);
                        border-radius: var(--bdr-rad);
                        height: 100%;
                        width: 100%;
                        will-change: rotate;
                        animation: spin var(--dura) infinite cubic-bezier(0.1, 0.2, 0.6, 1);
                    }
                    #loading_bounce {
                        height: 80px;
                        width: 80px;
                        will-change: scale, translate, animation-timing-function;
                        animation: bounce var(--dura) infinite;
                    }
                    #loading_shadow {
                        background-color: black;
                        border-radius: 100%;
                        height: 20px;
                        width: 160px;
                        will-change: opacity, scale, animation-timing-function;
                        animation: shadow var(--dura) infinite;
                        margin-top: -35px;
                    }
                }
                @keyframes spin {
                    0% { rotate: 0deg }
                    25% { rotate: 0deg }
                    90% { rotate: 360deg }
                    100% { rotate: 360deg }
                }
                @keyframes bounce {
                    0% {
                        scale: 1.6 .4;
                        animation-timing-function: cubic-bezier(.5, 0, 1, .75);
                    }
                    20% {
                        scale: 1 1;
                        translate: 0 -30%;
                        animation-timing-function: cubic-bezier(.1, .25, .5, 1);
                    }
                    25% {
                        scale: .6 1.4;
                    }
                    35% {
                        scale: 1 1;
                    }
                    50% {
                        scale: 1 1;
                        translate: 0 -200%;
                        animation-timing-function: cubic-bezier(.5, 0, .9, .75);
                    }
                    80% {
                        scale: 1 1;
                        translate: 0 -30%;
                        animation-timing-function:  cubic-bezier(0, .25, .5, 1);
                    }
                    100% { scale: 1.6 .4 }
                }
                @keyframes shadow {
                    0% { opacity: var(--initial); scale: 1 }
                    20% {
                        opacity: var(--initial);
                        scale: 1;
                        animation-timing-function: cubic-bezier(.1, .25, .5, 1);
                    }
                    50% {
                        opacity: var(--fly-up);
                        scale: .5;
                        animation-timing-function: cubic-bezier(.5, 0, .9, .75);
                    }
                    80% {
                        opacity: var(--initial);
                        scale: 1;
                        animation-timing-function:  cubic-bezier(0, .25, .5, 1);
                    }
                    100% { opacity: var(--initial); scale: 1 }
                }
            </style>
        </head>
        <body class='${isDark ? 'dark' : ''}'>
            <div id='loading' style='opacity: ${opacity}'>
                <div id='loading_shadow'></div>
                <div id='loading_bounce'>
                    <div id='loading_spin'></div>
                </div>
            </div>
        </body>
    `}/>
}