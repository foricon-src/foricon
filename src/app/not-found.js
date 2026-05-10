import cssStyle from './not-found.module.css';

export default function Page() {
    return (
        <div className={cssStyle.main}>
            <h1>404</h1>
            <h3>Page not found</h3>
            <p>What you're looking for isn't available on this site, at least that's what we know</p>
            <p>What about:</p>
            <ul className='btn-list vetical'>
                <li>
                    <f-icon icon='home'/>
                    <span>Back to Home</span>
                </li>
                <li>
                    <f-icon icon='magnifying-class' i-s='outline'/>
                    <span>Take a look at our icon set</span>
                </li>
                <li>
                    <f-icon icon='file-lines'/>
                    <span>Learn something new!</span>
                </li>
            </ul>
        </div>
    )
}