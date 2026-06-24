'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { LanguageContext } from './language';

export default function useGo() {
    let router = useRouter();
    let lang = useContext(LanguageContext);

    /**
     * Goes to a page
     * @param {string} [value] - Page to go to
     * @param {'new tab' | 'replace'} [type] - Action to do
     */
    return (value, type) => {
        let action = router[type == 'replace' ? 'replace' : 'push'];

        if (!value) router.push(`/${lang}`);
        else if (value[0] == '#') location.hash = value;
        else if (value[0] == '?') action(value);
        else if (value.startsWith('//') || value.startsWith('http')) window.open(value, '_blank');
        else type == 'new tab' ? window.open(`/${lang}/${value}`, '_blank') : action(`/${lang}/${value}`);
    }
}