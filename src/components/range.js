'use client';

import { useState } from "react";

/**
 * Updates a range input
 * @param {HTMLInputElement} elem 
 * @param {number} value 
 */
export function UpdateRange(elem, value) {
    elem.value = value;
    elem.dispatchEvent(new Event('input'));
}
export function Range({ min, max, dfValue, value, className = '', ...rest }) {
    let [ v, setValue ] = useState(value ?? dfValue);
    
    return <input
        type='range'
        className={`${className}${dfValue == v ? ' default' : ''}`}
        onInput={e => setValue(Number(e.currentTarget.value))}
        style={{'--pos': `${(v - min) / (max - min) * 100}%`}}
        value={v}
        {...rest}
    />
}