'use client';

import { useEffect, useRef, useState } from 'react';

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
    let [ v, setV ] = useState(value || '');
    let inputRef = useRef();
    let iconRef = useRef();
    let currentIcon = clearable && v.length > 0
        ? {
            name: 'xmark',
            style: 'outline',
        }
        : icon;
    
    useEffect(() => setV(value), [ value ]);
    
    return <label className={className} onPointerDown={e => {
        inputRef.current.matches(':focus') && e.target != e.currentTarget && e.preventDefault();
        if (e.target != iconRef.current || currentIcon.name != 'xmark' || !clearable) return;
        setV('');
        onInput?.({ currentTarget: { value: '' } });
    }}>
        <f-icon
            ref={iconRef}
            icon={currentIcon.name}
            i-s={currentIcon.style}
        />
        <input
            ref={inputRef}
            placeholder={placeholder}
            value={v}
            onInput={e => {
                setV(e.currentTarget.value);
                onInput?.(e);
            }}
            {...rest}
        />
    </label>
}