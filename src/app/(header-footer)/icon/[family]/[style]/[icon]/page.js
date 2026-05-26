import PageClient from "./page.client";


export async function generateMetadata({ params }) {
    let { family, style, icon } = params;

    return {
        title: `${icon} icon | ${family} ${style} style`
    }
}
export function Page() {
    return <PageClient params={params}/>;
}