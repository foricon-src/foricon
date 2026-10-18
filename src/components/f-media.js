'use client';

import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { UserContext } from './user';
import Img from './img';

export let MediaContext = createContext();
export function MediaProvider({ children }) {
    let [ isOpened, setIsOpened ] = useState(false);
    return <MediaContext.Provider value={{ isOpened, setIsOpened }}>{
        children
    }</MediaContext.Provider>
}
/**
 * 
 * @param {{
 *   requirements: {
 *     aspectRatio: number,
 *     fileType: string,
 *   },
 *   onConfirm: (value: *) => void
 * }} param0 
 * @returns 
 */
export function Media({ requirements, onConfirm }) {
    let { isOpened, setIsOpened } = useContext(MediaContext);
    let { user } = useContext(UserContext);

    let [ files, setFiles ] = useState([]);
    let [ selected, setSelected ] = useState(null);

    let { lang } = document.documentElement;

    let { aspectRatio = 0, fileType = 'all' } = requirements;

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
    })()}, [ isOpened ])

    return <div className={Join(' ', 'modal wider', isOpened && 'active')}>
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
                    setIsOpened(false);
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