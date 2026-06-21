import PageClient from './page.client';

export default function Page({ params }) {
    return <PageClient lang={params.lang}/>
}