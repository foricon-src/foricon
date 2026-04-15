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
export function Range(props) {
    let { min, max, dfValue, value } = props;
    let [ v, setValue ] = useState(value ?? dfValue);
    return <input
        className={dfValue == v ? 'default' : ''}
        type='range'
        onInput={e => setValue(Number(e.currentTarget.value))}
        style={{'--pos': `${(v - min) / (max - min) * 100}%`}}
        {...props}
    />
}