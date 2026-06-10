'use client';

import { useRef, useState } from 'react';
import Join from './join';
import IconInput from './iconinput';

// export default function Search({ placeholder, value = '', onFocus, onBlur, onInput, ...rest }) {
//     let [ v, setV ] = useState(value);
//     let inputRef = useRef(null);
//     let icon = v.length > 0 ? 'xmark' : 'magnifying-glass';

//     return <label className='search'>
//         <f-icon icon={icon} i-s='outline' onClick={() => {
//             if (icon != 'xmark') return;
//             let { current } = inputRef;
//             current.value = '';
//             current.dispatchEvent(new Event('input'));
//         }}/>
//         <input
//             placeholder={placeholder}
//             ref={inputRef}
//             value={value}
//             onInput={e => {
//                 setV(e.currentTarget.value);
//                 onInput?.(e);
//             }}
//             {...rest}
//         />
//     </label>
// }
export default function Search({ placeholder, value, ...rest }) {
    return <IconInput
        icons={{
            normal: {
                name: 'magnifying-glass',
                style: 'outline',
            },
            active: {
                name: 'xmark',
                style: 'outline',
            }
        }}
        placeholder={placeholder}
        value={value}
        {...rest}
    />
}