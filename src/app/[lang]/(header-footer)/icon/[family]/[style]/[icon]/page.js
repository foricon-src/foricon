import { Capital } from 'Com/string-tools';
import PageClient from './page.client';

export function generateMetadata({ params }) {
    let { family, style, icon } = params;

    return {
        title: `${icon} icon | ${Capital(family)} ${Capital(style)}`
    }
}
export default function Page({ params }) {
    return <PageClient params={params}/>;
}