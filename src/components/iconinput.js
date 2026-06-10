'use client';

import { useRef, useState } from 'react';

export default function IconInput({
    icon = {
        name: '',
        style: '',
    },
    value = '',
    placeholder,
    className,
    onInput,
    clearable,
    ...rest
}) {
    let [ v, setV ] = useState(value);
    let inputRef = useRef();
    let currentIcon = clearable && v.length > 0
        ? icon
        : {
            name: 'xmark',
            style: 'outline',
        }
    
    return <label className={className} onPointerDown={
        e => inputRef.current.matches(':focus') && e.target == e.currentTarget && e.preventDefault()
    }>
        <f-icon
            icon={currentIcon.name}
            i-s={currentIcon.style}
            onClick={() => {
                if (currentIcon.name != 'xmark' || !clearable) return;
                inputRef.current.value = '';
                inputRef.current.dispatchEvent(new Event('input'));
            }}
        />
        <input
            placeholder={placeholder}
            value={value}
            onInput={e => {
                setV(e.currentTarget.value);
                onInput?.(e);
            }}
            {...rest}
        />
    </label>
}