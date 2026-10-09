'use client';

import { useContext, useEffect, useState } from 'react';
import { UserContext } from 'Com/user';
import cssStyle from './page.module.css';

export default function PageClient() {
    let { user } = useContext(UserContext);

    let [ items, setItems ] = useState([]);
    let [ isLoading, setIsLoading ] = useState(false);
    let [ tick, setTick ] = useState(0);

    let { lang } = document.documentElement;
    
    useEffect(() => {
        if (!user) return;

        let canceled = false;

        (async () => {
            try {
                setItems([]);
                let token = await user.getIdToken();
                let res = await (await fetch('/api/get-media', {
                    method: 'POST',
                    headers: { authorization: `Bearer ${token}` }
                })).json()
                !canceled && setItems(res.resources);
            }
            catch (err) {
                notify('error', err.message);
                console.error(err);
            }
        })()

        return () => canceled = true;
    }, [ user, tick ])

    return <div className={cssStyle.media}>
        <h3>Media</h3>
        <ul className='btn-list'>
            <li name='refresh' onClick={() => setTick(tick + 1)}>
                <f-icon icon='rotate-right' i-s='outline'/>
                <span>Refresh</span>
            </li>
            <li name='upload'>
                <f-icon icon='arrow-up-from-bracket' i-s='duotone/outline'/>
                <span>Upload</span>
            </li>
        </ul>
        {items.length
            ? <ul className={cssStyle.results}>{
                items.map((i, idx) => {
                    return <li key={idx}>
                        <div style={{ backgroundImage: i.src }}/>
                        <span>{i.filename}</span>
                        <span>{timeDiff(new Date(i.created_at), lang)}</span>
                        <ul className='btn-list'>
                            <li className='tooltip top' name='remove'>
                                <f-icon icon='trash-can' i-s='duotone/outline'/>
                                <span>Remove</span>
                            </li>
                            <li className='tooltip top' name='open'>
                                <f-icon icon='arrow-up-right-from-square' i-s='duotone/outline'/>
                                <span>Open</span>
                            </li>
                            <li className='tooltip top' name='download'>
                                <f-icon icon='arrow-down-to-bracket' i-s='duotone/outline'/>
                                <span>Download</span>
                            </li>
                        </ul>
                    </li>
                })
            }</ul>
            : <div className='center-middle'>
                <h3>It&apos;s a little quiet here</h3>
                <p>Upload some files to make it more lively</p>
                <button className='btn primary'>
                    <f-icon icon='arrow-up-from-bracket' i-s='outline'/>
                    <span>Upload</span>
                </button>
            </div>
        }
    </div>
}