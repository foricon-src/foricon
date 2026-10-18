'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from './user';
import Join from './join';

export let MediaContext = createContext();
export function MediaProvider({ children }) {
    let [ mediaOptions, setMediaOptions ] = useState(null);
    return <MediaContext.Provider value={{ mediaOptions, setMediaOptions }}>{
        children
    }</MediaContext.Provider>
}
export function Media() {
    let { mediaOptions, setMediaOptions } = useContext(MediaContext);
    let { user } = useContext(UserContext);

    let [ files, setFiles ] = useState([]);
    let [ selected, setSelected ] = useState(null);

    let listRef = useRef();

    let { lang } = document.documentElement;

    let { aspectRatio = 0, fileType, onConfirm = () => {} } = mediaOptions || {};

    useEffect(() => {(async () => {
        try {
            if (!user || !mediaOptions) return;

            let token = await user.getIdToken();
            let { files: f } = await (await fetch('/api/media/get', {
                method: 'POST',
                headers: { authorization: `Bearer ${token}` }
            })).json()

            f = f.filter(file =>
                !(
                    aspectRatio && aspectRatio != file.width / file.height ||
                    fileType && !checkFileType(fileType, `${file.resource_type}/${file.format}`)
                )
            )

            setFiles(f);
        }
        catch (err) {
            notify('error', err.message);
            console.error(err);
        }
    })()}, [ mediaOptions ])

    return <div className={Join(' ', 'modal wider', mediaOptions && 'active')} id='media'>
        <div>
            <h3>Foricon Media</h3>
            <ul className='empty-state'>{
                files.length
                    ? files.map(i =>
                        <li
                            key={i}
                            className={selected?.public_id == i.public_id && 'active'}
                            onClick={() => setSelected(i)}
                        >
                            <img src={i.secure_url}/>
                            <span>{i.filename}</span>
                        </li>
                    )
                    : <span>
                        <f-icon icon='spinner-2p3' i-s='outline' animation='spin'/> Loading
                    </span>
            }</ul>
            <span>{files.length} files</span>
            <div>
                <button className='secondary' onClick={() => {
                    setSelected(null);
                    setFiles([]);
                    setMediaOptions(null);
                }}>{
                    {
                        en: 'Cancel',
                        vi: 'Hủy',
                        fr: 'Annuler',
                        it: 'Cancellare',
                        kr: '취소',
                        ja: 'キャンセル',
                        de: 'Stornieren',
                        nl: 'Annuleren',
                        dk: 'Ophæve',
                        pt: 'Cancelar',
                        es: 'Cancelar',
                        ru: 'Отмена',
                    }[lang]
                }</button>
                <button className='primary' {...{ disabled: !selected }} onClick={() => {
                    onConfirm?.(selected);
                    setSelected(null);
                    setMediaOptions(null);
                }}>{
                    {
                        en: 'Choose',
                        vi: 'Chọn',
                        fr: 'Choisir',
                        it: 'Scegliere',
                        kr: '선택하다',
                        ja: '選ぶ',
                        de: 'Wählen',
                        nl: 'Kiezen',
                        dk: 'Vælge',
                        pt: 'Escolher',
                        es: 'Elegir',
                        ru: 'Выбирать',
                    }[lang]
                }</button>
            </div>
        </div>
    </div>
}