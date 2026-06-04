'use client';

import { useRef, useState } from 'react';
import Join from './join';

export default function Search({ placeholder, className, value = '', onFocus, onBlur, onInput, ...rest }) {
    let [ val, setVal ] = useState(value);
    let inputRef = useRef(null);
    let icon = val.length > 0 ? 'xmark' : 'magnifying-glass';

    return <label>
        <f-icon icon={icon} i-s='outline' onClick={() => icon == 'xmark' && (inputRef.current.value = '')}/>
        <input
            placeholder={placeholder}
            ref={inputRef}
            className={Join(' ', 'search', className)}
            onInput={e => {
                setVal(e.currentTarget.value);
                onInput?.(e);
            }}
            {...rest}
        />
    </label>
}