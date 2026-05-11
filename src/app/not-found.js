import PageClient from './not-found.client';

export const metadata = {
    title: '404 - Page not found',
    description: "Looks like you've wandered off the map",
    robots: { index: false, follow: false },
}
export default function Page() {
    return <PageClient/>;
}