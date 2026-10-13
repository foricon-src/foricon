'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from 'Com/user';
import cssStyle from './page.module.css';
import { Modal } from 'Com/modal';
import { Uploader } from 'Com/f-uploader';
import useGo from 'Com/go';

export default function PageClient() {
    let { user } = useContext(UserContext);

    let [ items, setItems ] = useState([]);
    let [ files, setFiles ] = useState([]);
    let [ selected, setSelected ] = useState([]);
    let [ isLoading, setIsLoading ] = useState(true);
    let [ tick, setTick ] = useState(0);

    let uploadModalRef = useRef();
    let removeModalRef = useRef();
    let resultsRef = useRef();

    let go = useGo();

    let { lang } = document.documentElement;
    
    useEffect(() => {
        if (!user) return;

        let canceled = false;

        (async () => {
            try {
                setItems([]);
                setIsLoading(true);
                let token = await user.getIdToken();
                let res = await (await fetch('/api/media/get', {
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

    function openUploadModal() {
        modal(uploadModalRef.current, null, () => setFiles([]))
    }

    return <div className={cssStyle.media}>
        <Modal ref={uploadModalRef} type='confirm' size='wide' btns={[
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
            }[lang],
            {
                en: 'Continue',
                vi: 'Tiếp tục',
                fr: 'Continuer',
                it: 'Continuare',
                kr: '계속하다',
                ja: '続く',
                de: 'Weitermachen',
                nl: 'Doorgaan',
                dk: 'Fortsætte',
                pt: 'Continuar',
                es: 'Continuar',
                ru: 'Продолжать',
            }[lang]
        ]}>
            <h3>{
                {
                    en: 'Upload new files',
                    vi: 'Tải lên tệp mới',
                    fr: 'Télécharger de nouveaux fichiers',
                    it: 'Carica nuovi file',
                    kr: '새로운 파일 업로드',
                    ja: '新しいファイルをアップロードする',
                    de: 'Neue Dateien hochladen',
                    nl: 'Nieuwe bestanden uploaden',
                    dk: 'Upload nye filer',
                    pt: 'Carregar novos ficheiros',
                    es: 'Subir nuevos archivos',
                    ru: 'Загрузить новые файлы',
                }[lang]
            }</h3>
            <p>{
                {
                    en: '-',
                    vi: '-',
                    fr: '-',
                    it: '-',
                    kr: '-',
                    ja: '-',
                    de: '-',
                    nl: '-',
                    dk: '-',
                    pt: '-',
                    es: '-',
                    ru: '-',
                }[lang]
            }</p>
            <Uploader multiple accept='image/*, video/*, audio/*' files={files} onFilesChange={setFiles}/>
        </Modal>
        <Modal ref={removeModalRef} type='confirm' size='wide' btns={[
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
            }[lang],
            {
                en: 'Remove',
                vi: 'Xoá',
                fr: 'Retirer',
                it: 'Rimuovere',
                kr: '제거하다',
                ja: '取り除く',
                de: 'Entfernen',
                nl: 'Verwijderen',
                dk: 'Fjerne',
                pt: 'Remover',
                es: 'Eliminar',
                ru: 'Удалять',
            }[lang]
        ]}>
            <h3>{
                {
                    en: 'Remove this file?',
                    vi: 'Xoá tệp này?',
                    fr: 'Supprimer ce fichier ?',
                    it: 'Rimuovere questo file?',
                    kr: '이 파일을 제거하시겠습니까?',
                    ja: 'このファイルを削除しますか?',
                    de: 'Diese Datei entfernen?',
                    nl: 'Dit bestand verwijderen?',
                    dk: 'Vil du fjerne denne fil?',
                    pt: 'Remover este ficheiro?',
                    es: '¿Eliminar este archivo?',
                    ru: 'Удалить этот файл?',
                }[lang]
            }</h3>
            <p>{
                {
                    en: 'Do you want to remove this file? This action cannot be undone',
                    vi: 'Bạn có muốn xoá tệp này không? Hành động này không thể hoàn tác',
                    fr: 'Voulez-vous supprimer ce fichier ? Cette action ne peut pas être annulée',
                    it: 'Vuoi rimuovere questo file? Questa azione non può essere annullata',
                    kr: '이 파일을 제거하시겠습니까? 이 작업은 취소할 수 없습니다',
                    ja: 'このファイルを削除しますか? この操作は元に戻せません',
                    de: 'Möchten Sie diese Datei entfernen? Diese Aktion kann nicht rückgängig gemacht werden',
                    nl: 'Wilt u dit bestand verwijderen? Deze actie kan niet ongedaan worden gemaakt',
                    dk: 'Vil du fjerne denne fil? Denne handling kan ikke fortrydes',
                    pt: 'Deseja remover este ficheiro? Esta ação não pode ser anulada',
                    es: '¿Quieres eliminar este archivo? Esta acción no se puede deshacer',
                    ru: 'Вы хотите удалить этот файл? Это действие не может быть отменено',
                }[lang]
            }</p>
        </Modal>
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
            <li name='upload' onClick={openUploadModal}>
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
            <li
                className='tooltip top'
                name='remove'
                onClick={async () => {
                    try {
                        let token = await user.getIdToken();
                        await fetch('/api/media/remove', {
                            method: 'POST',
                            headers: { authorization: `Bearer ${token}` },
                            body: JSON.stringify({ files }),
                        })
                        setTick(tick + 1);
                    }
                    catch (err) {
                        notify('error', err.message);
                        console.error(err);
                    }
                }}
            >
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
        </ul>
        {items.length
            ? <ul ref={resultsRef} className={cssStyle.results}>{
                items.map((i, idx) => {
                    return <li
                        key={idx}
                        className={selected.some(i => i.id == idx) && 'active'}
                        onClick={
                            ({ target, currentTarget, ctrlKey }) => {
                                let obj = {
                                    id: idx,
                                    type: i.resource_type,
                                }
                                !currentTarget.lastChild.contains(target) && setSelected(ctrlKey ? [ ...selected, obj ] : [ obj ])
                            }
                        }
                    >
                        <div style={{ backgroundImage: `url(${i.url})` }}/>
                        <span>{`${i.filename}.${i.format}`}</span>
                        <span>{formatBytes(i.bytes)}</span>
                        <span>{timeDiff(new Date(i.created_at), lang)}</span>
                        <ul className='btn-list small'>
                            <li className='tooltip top' name='open' onClick={() => go(i.url, 'new tab')}>
                                <f-icon icon='arrow-up-right-from-square' i-s='duotone/outline'/>
                                <span>{
                                    {
                                        en: 'Open',
                                        vi: 'Mở',
                                        fr: 'Ouvrir',
                                        it: 'Aprire',
                                        ko: '열려 있는',
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
                        </ul>
                    </li>
                })
            }</ul>
            : <div className='center-middle'>{
                isLoading ? <div className={cssStyle.loading}/> : <>
                    <h3>It&apos;s a little quiet here</h3>
                    <p>Upload some files to make it more lively</p>
                    <button className='btn primary' onClick={openUploadModal}>
                        <f-icon icon='arrow-up-from-bracket' i-s='outline'/>
                        <span>Upload</span>
                    </button>
                </>
            }</div>
        }
    </div>
}