import PageClient from './page.client';

export function generateMetadata({ params: { lang }}) {
    return { title: 'Media' };   
}

export default function Page({ params }) {
    return <PageClient lang={params.lang}/>
}