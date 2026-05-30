'use client';

import { useRouter } from 'next/navigation';

/**
 * Goes to a page
 * @param {string} [value] - Page to go to
 * @param {'new tab' | 'replace'} [type] - Action to do
 */
export default function Go(value, type) {
    let router = useRouter();
    let action = router[type == 'replace' ? 'replace' : 'push'];

    if (!value) router.push('/');
    else if (value[0] == '#') location.hash = value;
    else if (value[0] == '?') action(value);
    else if (value.startsWith('//') || value.startsWith('http')) window.open(value, '_blank');
    else type == 'new tab' ? window.open(`/${value}`, '_blank') : action(`/${value}`);
}