'use client'

import dynamic from "next/dynamic";

let Page = dynamic(() => import('./page-raw'), { ssr: false });

export default function () {
    return <Page/>;
}