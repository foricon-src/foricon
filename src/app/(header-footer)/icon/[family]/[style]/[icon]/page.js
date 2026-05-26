import PageClient from './page.client';

export async function generateMetadata({ params }) {
    let { family, style, icon } = params;

    return {
        title: `${icon} icon | ${family} ${style} style`
    }
}
export default function Page({ params }) {
    return <PageClient params={params}/>;
}