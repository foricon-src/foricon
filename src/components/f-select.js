import { useEffect, useRef, useState } from 'react';

export default function Select({ options = [], values = [], onChange = () => {}, multiple = false }) {
    let [ selected, setSelected ] = useState(multiple ? [] : null);
    let [ opened, setOpened ] = useState(false);

    let elemRef = useRef();
    let boxRef = useRef();

    useEffect(() => {
        addEvLis(document, 'click', ({ target }) => {
            elemRef.current.contains(target)
                ? !boxRef.current.contains(target) && setOpened(!opened)
                : setOpened(false);
        })
    }, [])
    useEffect(() => { onChange?.(selected) }, [ selected ]);

    return <f-select ref={elemRef}>
        <span>{
            options.map(i => values.includes(i.value || i.text) && i.text)
                .filter(Boolean)
                .join(', ')
        }</span>
        <ul ref={boxRef} className={opened && 'active'}>{
            options.map(i => {
                let v = i.value || i.text;
                return <li
                    key={v}
                    className={values.includes(v)}
                    onClick={() => setSelected(multiple ? [ ...selected, v ] : v)}
                >{text}</li>
            })
        }</ul>
    </f-select>
}