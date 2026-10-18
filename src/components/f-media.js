'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from './user';
import Img from './img';
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

    let { lang } = document.documentElement;

    let { aspectRatio = 0, fileType, onConfirm = () => {} } = mediaOptions || {};

    useEffect(() => {(async () => {
        try {
            let token = await user.getIdToken();
            let { files } = await (await fetch('/api/media/get', {
                method: 'POST',
                headers: { authorization: `Bearer ${token}` }
            })).json()

            files = (
                await Promise.all(
                    files.map(async file => {
                        let { url, type } = file;
                        let loaded;
    
                        let holder = document.createElement(type == 'image' ? 'img' : 'video');
                        holder.src = url;
                        holder.addEventListener(type == 'image' ? 'load' : 'loadeddata', () => loaded = true);
    
                        while (!loaded) await wait();
    
                        if (aspectRatio != (holder.width || holder.videoWidth) / (holder.height || holder.videoHeight)) return;
                        if (fileType && !(
                                fileType.endsWith('/*')
                                    ? type.startsWith(fileType.slice(0, fileType.indexOf('/*')))
                                    : type == fileType
                            )
                        ) return;
                        return file;
                    })
                )
            ).filter(Boolean)

            setFiles(files);
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
                files.map(i => <li key={i} onClick={() => setSelected(i)}>
                    <Img src={i.url}/>
                    <span>{i.name}</span>
                </li>)
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
                <button className='primary' {...{ disabled: !!selected }} onClick={() => {
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