import { useState } from 'react';

export default function Select({ options = [], values = [], onChange = () => {}, multiple = false }) {
    let [ selected, setSelected ] = useState(multiple ? [] : null);

    useState(() => { onChange?.(selected) }, [ selected ]);

    return <f-select>
        <span>{
            options.map(i => values.includes(i.value || i.text) && i.text)
                .filter(Boolean)
                .join(', ')
        }</span>
        <ul>{
            options.map(i => <li
                className={values.includes(i.value || i.text)}
                onClick={() => {
                    let v = i.value || i.text;
                    setSelected(multiple ? [ ...selected, v ] : v);
                }}
            >{text}</li>)
        }</ul>
    </f-select>
}