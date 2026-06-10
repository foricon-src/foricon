'use client';

import { useRef, useState } from 'react';

export default function IconInput({
    icons = {
        normal: {
            name: '',
            style: '',
        },
        active: {
            name: '',
            style: '',
        },
    },
    actionWhenClickIcon,
    className,
    onInput,
    placeholder,
    ...rest
}) {
    let [ v, setV ] = useState(value);
    let inputRef = useRef();
    let currentIcon = icons[v.length > 0 ? 'active' : 'normal'];

    return <label className={className} onMouseDown={
        e => inputRef.current.matches(':focus') && e.target != inputRef.current && e.preventDefault()
    }>
        <f-icon icon={currentIcon.name} i-s={currentIcon.style} onClick={actionWhenClickIcon}/>
        <input
            placeholder={placeholder}
            onInput={e => {
                setV(e.currentTarget.value);
                onInput?.(e);
            }}
            {...rest}
        />
    </label>
}