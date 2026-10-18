'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from 'Com/user';
import cssStyle from './page.module.css';
import Modal from 'Com/modal';
import Uploader from 'Com/f-uploader';
import useGo from 'Com/go';

export default function PageClient() {
    let { user } = useContext(UserContext);

    let [ items, setItems ] = useState([]);
    let [ files, setFiles ] = useState([]);
    let [ selected, setSelected ] = useState([]);
    let [ isLoading, setIsLoading ] = useState(true);
    let [ tick, setTick ] = useState(0);
    let [ usedBytes, setUsedBytes ] = useState(0);

    let uploadModalRef = useRef();
    let removeModalRef = useRef();
    let removeBtnRef = useRef();
    let resultsRef = useRef();
    let filesRef = useRef();

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

                if (canceled) return;

                setItems(res.files);
                setUsedBytes(res.usedBytes);
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
            ![ removeBtnRef.current, removeModalRef.current, ...current.children ]
                .filter(Boolean)
                .some(i => i.contains(target)) && setSelected([]);
        })

        return () => canceled = true;
    }, [ user, tick ])
    useEffect(() => { filesRef.current = files }, [ files ])

    function openUploadModal() {
        modal(
            uploadModalRef.current,
            async () => {
                let formData = new FormData();
                for (let file of filesRef.current) formData.append('files', file);
                
                let token = await user.getIdToken();
                let res = await fetch('/api/media/upload', {
                    method: 'POST',
                    headers: { authorization: `Bearer ${token}` },
                    body: formData,
                })
                
                if (!res.ok) throw new Error(`An error occured when uploading files. Code ${res.status}`);

                setFiles([]);
                setTick(tick + 1);
            },
            () => setFiles([])
        )
    }

    return <div className={cssStyle.media}>
        <Modal ref={uploadModalRef} type='confirm' size='wide' allowedToProceed={files.length} btns={[
            {
                en: 'Cancel',
                vi: 'Hủy',
                fr: 'Annuler',
                it: 'Cancellare',
                kr: '취소',
                ja: 'キャンセル',
                de: 'Stornieren',
                nl: 'Annuleren',
                da: 'Ophæve',
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
                da: 'Fortsætte',
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
                    da: 'Upload nye filer',
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
                    da: '-',
                    pt: '-',
                    es: '-',
                    ru: '-',
                }[lang]
            }</p>
            <Uploader multiple accept='image/*, video/*, audio/*' maxBytes={4 * 1024 * 1024} files={files} onFilesChange={setFiles}/>
        </Modal>
        <Modal ref={removeModalRef} type='confirm' btns={[
            {
                en: 'Cancel',
                vi: 'Hủy',
                fr: 'Annuler',
                it: 'Cancellare',
                kr: '취소',
                ja: 'キャンセル',
                de: 'Stornieren',
                nl: 'Annuleren',
                da: 'Ophæve',
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
                da: 'Fjerne',
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
                    da: 'Vil du fjerne denne fil?',
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
                    da: 'Vil du fjerne denne fil? Denne handling kan ikke fortrydes',
                    pt: 'Deseja remover este ficheiro? Esta ação não pode ser anulada',
                    es: '¿Quieres eliminar este archivo? Esta acción no se puede deshacer',
                    ru: 'Вы хотите удалить этот файл? Это действие не может быть отменено',
                }[lang]
            }</p>
        </Modal>
        <div className={cssStyle.used}>
            <span>You have used</span>
            <h6>{`${formatBytes(usedBytes)} / ${formatBytes(100 * 1024 * 1024)}`}</h6>
            <div style={{ '--percent': `${usedBytes / (100 * 1024 * 1024) * 100}%` }}/>
        </div>
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
                        da: 'Opfriske',
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
                        da: 'Upload',
                        pt: 'Carregar',
                        es: 'Subir',
                        ru: 'Загрузить',
                    }[lang]
                }</span>
            </li>
            {!!selected.length && <li ref={removeBtnRef} name='remove' onClick={() =>
                modal(
                    removeModalRef.current,
                    async () => {
                        let token = await user.getIdToken();
                        await fetch('/api/media/remove', {
                            method: 'POST',
                            headers: { authorization: `Bearer ${token}` },
                            body: JSON.stringify({ files: selected }),
                        })
                        setSelected([]);
                        setTick(tick + 1);
                    }
                )
            }>
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
                        da: 'Fjerne',
                        pt: 'Remover',
                        es: 'Eliminar',
                        ru: 'Удалять',
                    }[lang]
                }</span>
            </li>}
        </ul>
        {items.length
            ? <ul ref={resultsRef} className={cssStyle.results}>{
                items.map((i, idx) => {
                    return <li
                        key={idx}
                        className={selected.some(file => file.id == i.public_id) && 'active'}
                        onClick={
                            ({ target, currentTarget, ctrlKey }) => {
                                let obj = {
                                    id: i.public_id,
                                    type: i.resource_type,
                                }
                                !currentTarget.lastChild.contains(target) && setSelected(ctrlKey ? [ ...selected, obj ] : [ obj ])
                            }
                        }
                    >
                        <div style={{ backgroundImage: `url(${i.secure_url})` }}/>
                        <span>{`${i.filename}.${i.format}`}</span>
                        <span>{formatBytes(i.bytes)}</span>
                        <span>{timeDiff(new Date(i.created_at), lang)}</span>
                        <ul className='btn-list small'>
                            <li className='tooltip top' name='open' onClick={() => go(i.secure_url, 'new tab')}>
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
                                        da: 'Åben',
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
            : <div className={`center-middle ${cssStyle.empty}`}>{
                isLoading ? <div className={cssStyle.loading}/> : <>
                    <h3>{
                        {
                            en: 'Your space is ready',
                            vi: 'Không gian của bạn đã sẵn sàng',
                            fr: 'Votre espace est prêt',
                            it: 'Il tuo spazio è pronto',
                            ko: '공간이 준비되었어요',
                            ja: 'スペースの準備ができました',
                            de: 'Dein Bereich ist bereit',
                            nl: 'Je ruimte is klaar',
                            da: 'Dit område er klar',
                            pt: 'O seu espaço está pronto',
                            es: 'Tu espacio está listo',
                            ru: 'Ваше пространство готово',
                        }[lang]
                    }</h3>
                    <p>{
                        {
                            en: 'Upload your first files to get things started',
                            vi: 'Tải lên những tệp đầu tiên để bắt đầu',
                            fr: 'Importez vos premiers fichiers pour commencer',
                            it: 'Carica i tuoi primi file per iniziare',
                            ko: '첫 파일을 업로드하고 시작해 보세요',
                            ja: '最初のファイルをアップロードして始めましょう',
                            de: 'Lade deine ersten Dateien hoch, um loszulegen',
                            nl: 'Upload je eerste bestanden om aan de slag te gaan',
                            da: 'Upload dine første filer for at komme i gang',
                            pt: 'Carregue os seus primeiros ficheiros para começar',
                            es: 'Sube tus primeros archivos para empezar',
                            ru: 'Загрузите первые файлы, чтобы начать',
                        }[lang]
                    }</p>
                    <button className='btn primary' onClick={openUploadModal}>
                        <f-icon icon='arrow-up-from-bracket' i-s='outline'/>
                        <span>{
                            {
                                en: 'Upload files',
                                vi: 'Tải tệp lên',
                                fr: 'Importer des fichiers',
                                it: 'Carica file',
                                ko: '파일 업로드',
                                ja: 'ファイルをアップロード',
                                de: 'Dateien hochladen',
                                nl: 'Bestanden uploaden',
                                da: 'Upload filer',
                                pt: 'Carregar ficheiros',
                                es: 'Subir archivos',
                                ru: 'Загрузить файлы',
                            }[lang]
                        }</span>
                    </button>
                </>
            }</div>
        }
    </div>
}