import Link from 'next/link';

export default function FLink({ children, href, ...rest }) {
    return <Link
        href={href.startsWith('/') && !href.startsWith('//') && !href.startsWith('http') ? `/${document.documentElement.lang}${href}` : href}
        {...rest}
    >{children}</Link>
}