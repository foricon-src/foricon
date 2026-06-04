'use client';

import { useRef, useState } from 'react';

export default function Search({ placeholder, onFocus, onBlur, onInput, ...rest }) {
    let [ isFocused, setIsFocused ] = useState(false);
    let [ value, setValue ] = useState('');
    let inputRef = useRef(null);
    let icon = value.length > 0 && isFocused ? 'xmark' : 'magnifying-glass';

    return <label>
        <f-icon icon={icon} i-s='outline' onClick={() => icon == 'xmark' && (inputRef.current.value = '')}/>
        <input
            placeholder={placeholder}
            ref={inputRef}
            onFocus={e => {
                console.log('Focus');
                setIsFocused(true);
                onFocus?.(e);
            }}
            onBlur={e => {
                console.log('Blur');
                setIsFocused(false);
                onBlur?.(e);
            }}
            onInput={e => {
                console.log('Input');
                setValue(e.currentTarget.value);
                onInput?.(e);
            }}
            {...rest}
        />
    </label>
}