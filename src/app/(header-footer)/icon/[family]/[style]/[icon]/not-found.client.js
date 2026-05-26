import cssStyle from './not-found.module.css';

export function NotFound({ family, style, icon }) {
    return (
        <div className={cssStyle.main}>
            <f-icon icon='face-frown'/>
            <h1>Sorry, we could not find that</h1>
        </div>
    )
}