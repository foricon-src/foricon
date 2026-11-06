import { useEffect, useRef, useState } from 'react';

export default function Select({ options = [], values: controlledValues, onChange = () => {}, multiple = false }) {
    let [ internal, setInternal ] = useState([]);
    let [ opened, setOpened ] = useState(false);

    let elemRef = useRef();
    let boxRef = useRef();

    let isControlled = controlledValues != undefined;
    let selected = isControlled ? controlledValues : internal;

    function setSelected(nextValues) {
        let next = typeof nextValues == 'function'
            ? nextValues(selected)
            : nextValues;

        if (!isControlled) setInternal(next);
        onChange?.(multiple ? next : next[0] ?? '');
    }

    useEffect(() => {
        addEvLis(document, 'click', ({ target }) => {
            if (!elemRef.current) return;
            elemRef.current.contains(target)
                ? !boxRef.current.contains(target) && setOpened(prev => !prev)
                : setOpened(false);
        })
    }, [])

    return <f-select ref={elemRef}>
        <span>{
            options
                .filter(i => selected.includes(i.value || i.text))
                .map(i => i.text)
                .join(', ')
        }</span>
        <ul ref={boxRef} className={opened && 'active'}>{
            options.map(i => {
                let v = i.value || i.text;

                return <li
                    key={v}
                    className={selected.includes(v) && 'active'}
                    onClick={() => setSelected(
                        multiple
                            ? selected.includes(v)
                                ? selected.filter(x => x !== v)
                                : [...selected, v]
                            : [v]
                    )}
                >
                    {i.text}
                </li>
            })
        }</ul>
    </f-select>
}