import { useEffect, useRef, useState } from 'react';

export default function Select({ options = [], values = [], onChange = () => {}, multiple = false }) {
    let [ selected, setSelected ] = useState(values);
    let [ opened, setOpened ] = useState(false);

    let elemRef = useRef();
    let boxRef = useRef();

    useEffect(() => {
        addEvLis(document, 'click', ({ target }) => {
            // console.log(elemRef.current.contains(target), !boxRef.current.contains(target), opened)
            // elemRef.current.contains(target)
            //     ? !boxRef.current.contains(target) && setOpened(!opened)
            //     : setOpened(false);
            setOpened(!opened)
        })
    }, [])
    useEffect(() => { onChange?.(selected) }, [ selected ]);
    useEffect(() => { setSelected(values) }, [ values ]);
    useEffect(() => { console.log(opened) }, [ opened ]);

    return <f-select ref={elemRef}>
        <span>{
            options.map(i => selected.includes(i.value || i.text) && i.text)
                .filter(Boolean)
                .join(', ')
        }</span>
        <ul ref={boxRef} className={opened && 'active'}>{
            options.map(i => {
                let v = i.value || i.text;
                return <li
                    key={v}
                    className={selected.includes(v) && 'active'}
                    onClick={() => setSelected(multiple ? [ ...selected, v ] : [ v ])}
                >{i.text}</li>
            })
        }</ul>
    </f-select>
}