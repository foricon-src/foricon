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
export default function Range(props) {
    let [ v, setValue ] = useState();
    let { min, max, dfValue } = props;
    return <input
        className={dfValue == v ? 'default' : ''}
        type='range'
        onInput={() => setValue(this.value)}
        style={`--pos: ${(v - min) / (max - min) * 100}%`}
        {...props}
    />
}