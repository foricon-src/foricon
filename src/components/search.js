'use client';

import { useRef, useState } from 'react';
import Join from './join';

export default function Search({ placeholder, value = '', onFocus, onBlur, onInput, ...rest }) {
    let [ val, setVal ] = useState(value);
    let inputRef = useRef(null);
    let icon = val.length > 0 ? 'xmark' : 'magnifying-glass';

    return <label className='search'>
        <f-icon icon={icon} i-s='outline' onClick={() => {
            if (icon == 'xmark') return;
            let { current } = inputRef;
            console.log(current.value)
            current.value = '';
            current.dispatchEvent(new Event('input'));
        }}/>
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