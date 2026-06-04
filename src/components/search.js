'use client';

import { useRef, useState } from 'react';

export default function Search({ placeholder, onFocus, onBlur, onInput, ...rest }) {
    let [ value, setValue ] = useState('');
    let inputRef = useRef(null);
    let icon = value.length > 0 ? 'xmark' : 'magnifying-glass';

    return <label>
        <f-icon icon={icon} i-s='outline' onClick={() => icon == 'xmark' && (inputRef.current.value = '')}/>
        <input
            placeholder={placeholder}
            ref={inputRef}
            onInput={e => {
                setValue(e.currentTarget.value);
                onInput?.(e);
            }}
            {...rest}
        />
    </label>
}