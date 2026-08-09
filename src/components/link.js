import Link from 'next/link';

export default function FLink({ children, href, ...rest }) {
    return <Link
        href={(() => href.startsWith('/') && !href.startsWith('//') ? `/${document.documentElement.lang}${href}` : href)()}
        {...rest}
    >{children}</Link>
}