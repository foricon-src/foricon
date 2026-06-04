'use client';

import { useEffect, useRef, useState } from 'react';
import Join from './join';
import './utils';

export default function Search({ placeholder, value = '', onFocus, onBlur, onInput, ...rest }) {
    let [ val, setVal ] = useState(value);
    let inputRef = useRef();
    let iconRef = useRef();
    let icon = val.length > 0 ? 'xmark' : 'magnifying-glass';

    useEffect(() => {
        addEvLis(iconRef.current, 'click', () => {
            if (icon == 'xmark') return;
            let { current } = inputRef;
            current.value = '';
            current.dispatchEvent(new Event('input'));
        })
    }, [])

    return <label className='search'>
        <f-icon icon={icon} i-s='outline' ref={iconRef}/>
        <input
            placeholder={placeholder}
            ref={inputRef}
            value={value}
            onInput={e => {
                console.log(e.currentTarget.value)
                setVal(e.currentTarget.value);
                onInput?.(e);
            }}
            {...rest}
        />
    </label>
}