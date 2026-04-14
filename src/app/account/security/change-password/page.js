'use client'

import dynamic from "next/dynamic";

let Raw = dynamic(() => import('./page-raw'), { ssr: false });

export default function Page() {
    return <Raw/>;
}