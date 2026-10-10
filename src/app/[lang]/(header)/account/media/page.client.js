'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from 'Com/user';
import cssStyle from './page.module.css';

export default function PageClient() {
    let { user } = useContext(UserContext);

    let [ items, setItems ] = useState([]);
    let [ isLoading, setIsLoading ] = useState(true);
    let [ tick, setTick ] = useState(0);

    let resultsRef = useRef();

    let { lang } = document.documentElement;
    
    useEffect(() => {
        if (!user) return;

        let canceled = false;

        (async () => {
            try {
                setItems([]);
                setIsLoading(true);
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
            finally {
                setIsLoading(false);
            }
        })()

        addEvLis(document, 'click', ({ target }) => {
            let { current } = resultsRef;
            if (!current) return;
            let children = getChild(current);
            !children.some(i => i.contains(target)) && deactivate(...children);
        })

        return () => canceled = true;
    }, [ user, tick ])

    return <div className={cssStyle.media}>
        <ul className='btn-list'>
            <li name='refresh' onClick={() => setTick(tick + 1)}>
                <f-icon icon='rotate-right' i-s='outline'/>
                <span>{
                    {
                        en: 'Refresh',
                        vi: 'Làm mới',
                        fr: 'Rafraîchir',
                        it: 'Aggiorna',
                        ko: '새로 고치다',
                        ja: '更新',
                        de: 'Aktualisieren',
                        nl: 'Vernieuwen',
                        dk: 'Opfriske',
                        pt: 'Atualizar',
                        es: 'Refrescar',
                        ru: 'Обновить',
                    }[lang]
                }</span>
            </li>
            <li name='upload'>
                <f-icon icon='arrow-up-from-bracket' i-s='duotone/outline'/>
                <span>{
                    {
                        en: 'Upload',
                        vi: 'Tải lên',
                        fr: 'Télécharger',
                        it: 'Caricamento',
                        ko: '업로드',
                        ja: 'アップロード',
                        de: 'Hochladen',
                        nl: 'Uploaden',
                        dk: 'Upload',
                        pt: 'Carregar',
                        es: 'Subir',
                        ru: 'Загрузить',
                    }[lang]
                }</span>
            </li>
        </ul>
        {
            items.length ? <ul ref={resultsRef} className={cssStyle.results}>{
                items.map((i, idx) => {
                    return <li key={idx} onClick={({ target, currentTarget, ctrlKey }) => {
                        if (currentTarget.lastChild.contains(target)) return;
                        !ctrlKey && deactivate(...currentTarget.parentNode.children);
                        activate(currentTarget);
                    }}>
                        <div style={{ backgroundImage: `url(${i.url})` }}/>
                        <span>{`${i.filename}.${i.format}`}</span>
                        <span>{formatBytes(i.bytes)}</span>
                        <span>{timeDiff(new Date(i.created_at), lang)}</span>
                        <ul className='btn-list small'>
                            <li className='tooltip top' name='remove'>
                                <f-icon icon='trash-can' i-s='duotone/outline'/>
                                <span>{
                                    {
                                        en: 'Remove',
                                        vi: 'Xoá',
                                        fr: 'Retirer',
                                        it: 'Rimuovere',
                                        ko: '제거하다',
                                        ja: '取り除く',
                                        de: 'Entfernen',
                                        nl: 'Verwijderen',
                                        dk: 'Fjerne',
                                        pt: 'Remover',
                                        es: 'Eliminar',
                                        ru: 'Удалять',
                                    }[lang]
                                }</span>
                            </li>
                            <li className='tooltip top' name='open'>
                                <f-icon icon='arrow-up-right-from-square' i-s='duotone/outline'/>
                                <span>{
                                    {
                                        en: 'Open',
                                        vi: 'Mở',
                                        fr: 'Ouvrir',
                                        it: 'Aprire',
                                        ko: '열려 있는 ',
                                        ja: '開ける',
                                        de: 'Offen',
                                        nl: 'Open',
                                        dk: 'Åben',
                                        pt: 'Aberto',
                                        es: 'Abierto',
                                        ru: 'Открыть',
                                    }[lang]
                                }</span>
                            </li>
                            <li className='tooltip top' name='download'>
                                <f-icon icon='arrow-down-to-bracket' i-s='duotone/outline'/>
                                <span>{
                                    {
                                        en: 'Download',
                                        vi: 'Tải xuống',
                                        fr: 'Télécharger',
                                        it: 'Scaricamento',
                                        ko: '다운로드',
                                        ja: 'ダウンロード',
                                        de: 'Herunterladen',
                                        nl: 'Download',
                                        dk: 'Download',
                                        pt: 'Transferir',
                                        es: 'Descargar',
                                        ru: 'Скачать',
                                    }[lang]
                                }</span>
                            </li>
                        </ul>
                    </li>
                })
            }</ul> :
            isLoading ? <div className='icon-screen'>
                <f-icon icon='spinner-2p3' i-s='outline' animation='spin'/>
                <h3>Loading...</h3>
                <p>Getting your files, it might take a while</p>
            </div> :
            <div className='center-middle'>
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