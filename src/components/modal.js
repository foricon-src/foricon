import Join from './join';

export default function Modal({ children, btns = [], type = '', size = '', allowedToProceed = false, ...rest }) {
    return <div className={Join(' ', 'modal', type, size)} {...rest}>
        <div>
            {children}
            <div>{
                btns.map((btn, i) =>
                    <button
                        key={i}
                        className={i ? 'primary' : 'secondary'}
                        {...{ disabled: !!i && !allowedToProceed }}
                    >{btn}</button>
                )
            }</div>
        </div>
    </div>
}