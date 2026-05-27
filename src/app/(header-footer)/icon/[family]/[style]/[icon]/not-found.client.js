import cssStyle from './not-found.module.css';

export function NotFound({ family, style, icon }) {
    return (
        <div className={`center-middle ${cssStyle.wrapper}`}>
            <f-icon icon='face-frown' className='auto-line-height'/>
            <h3>Sorry, we could not find that</h3>
        </div>
    )
}