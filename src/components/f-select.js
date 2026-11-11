import { useEffect, useRef, useState } from 'react';

/**
 * Represents an available option in the select component.
 *
 * @typedef {Object} SelectOption
 * @property {string} text - The label displayed to the user.
 * @property {string} [value] - The underlying option value. Defaults to `text` when omitted.
 */
/**
 * A customizable select component supporting single and multiple selection.
 *
 * @param {Object} props
 * @param {SelectOption[]} [props.options] - Available options
 * @param {string | string[]} [props.value] - Selected value(s)
 * @param {(value: string | string[]) => void} [props.onChange] - Called when the selection changes
 * @param {boolean} [props.multiple] - Whether multiple options can be selected
 * @returns {JSX.Element}
 */
export default function Select({
    options = [],
    value: controlledValue,
    onChange,
    multiple
}) {
    let [ internal, setInternal ] = useState([]);
    let [ opened, setOpened ] = useState(false);

    let elemRef = useRef();
    let boxRef = useRef();

    let isControlled = controlledValue != undefined;
    let selected = isControlled
        ? Array.isArray(controlledValue) ? controlledValue : [ controlledValue ]
        : internal;

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
                                ? selected.filter(i => i != v)
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