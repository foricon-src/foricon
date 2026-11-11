'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

/**
 * A file uploader supporting drag-and-drop, multiple selection, file type validation, and size limits.
 *
 * @param {Object} props
 * @param {string} [props.accept] - Accepted file types
 * @param {File[]} [props.files] - Controlled list of selected files
 * @param {(files: File[]) => void} [props.onChange] - Called when the selected files change
 * @param {boolean} [props.multiple] - Whether multiple files can be selected
 * @param {number} [props.maxBytes] - Maximum total file size in bytes. `0` means unlimited
 * @returns {JSX.Element}
 */
export default function Uploader({
    accept = '',
    files: controlledFiles,
    onChange,
    multiple = false,
    maxBytes = 0,
    ...rest
}) {
    let [ internalFiles, setInternalFiles ] = useState([]);
    let [ usedBytes, setUsedBytes ] = useState(0);

    let uploaderRef = useRef();
    let inputRef = useRef();
    let previousFilesRef = useRef();
    let ulRef = useRef();

    let isControlled = controlledFiles != undefined;
    let files = isControlled ? controlledFiles : internalFiles;

    let { lang } = document.documentElement;

    function setFiles(nextFiles) {
        let next = typeof nextFiles == 'function'
            ? nextFiles(files)
            : nextFiles;
        
        if (!isControlled) setInternalFiles(next);
        onChange?.(next);
    }
    // function clearFiles() {
    //     setFiles([]);
    //     inputRef.current && (inputRef.current.value = '');
    // }

    // useImperativeHandle(ref, () => ({ clearFiles }))

    function addFiles(incoming) {
        let baseFiles = multiple ? files : [];
        let nextUsedBytes = baseFiles.reduce((sum, file) => sum + file.size, 0);
    
        let accepted = [];
    
        for (let file of incoming) {
            if (accept && !checkFileType(accept, file.type)) {
                notify('warn', `Not allowed file extension or file type. Rejected bold(${file.name})`);
                continue;
            }
            if (maxBytes && nextUsedBytes + file.size > maxBytes) {
                notify('warn', `Exceeded upload limit`);
                continue;
            }
    
            accepted.push(file);
            nextUsedBytes += file.size;
        }
    
        if (!accepted.length) return;
    
        setFiles([...baseFiles, ...accepted]);
    }

    useEffect(() => {
        let { current } = uploaderRef;
        if (!current) return;
    
        addEvLis(current, 'dragover', e => {
            e.preventDefault();
            (multiple || !files.length) && current.classList.add('drag');
        })
        addEvLis(current, 'dragleave', () => current.classList.remove('drag'));
        addEvLis(current, 'drop', e => {
            e.preventDefault();
            current.classList.remove('drag');
            if (!multiple && files.length) return;
            addFiles(e.dataTransfer.files);
        })
    }, [])
    useEffect(() => {
        if (previousFilesRef.current == null) {
            previousFilesRef.current = files;
            return;
        }

        if (previousFilesRef.current == files) return;
        previousFilesRef.current = files;

        uploaderRef.current.dispatchEvent(new Event('change'));

        let { current } = ulRef;
        getChild(current).forEach(i => i.firstChild.toggleIconOnHover('trash-can', i));

        setUsedBytes(files.reduce((sum, file) => sum + file.size, 0));
    }, [ files ])

    return <f-uploader ref={uploaderRef} {...rest}>
        <f-icon icon='arrow-up-from-bracket' i-s='outline'/>
        <span>{
            {
                en: 'Drag & drop the file(s) here, or',
                vi: 'Kéo & thả (các) tệp vào đây, hoặc',
                fr: 'Glissez-déposez le(s) fichier(s) ici, ou',
                it: 'Trascina e rilascia il/i file qui, oppure',
                ko: '파일을 여기에 드래그 앤 드롭하거나',
                ja: 'ファイルをここにドラッグ＆ドロップするか、',
                de: 'Ziehen Sie die Datei(en) per Drag & Drop hierher, oder',
                nl: 'Sleep de bestand(en) hierheen, of',
                da: 'Træk og slip filen/filerne hertil, eller',
                pt: 'Arraste e largue o(s) ficheiro(s) aqui, ou',
                es: 'Arrastre y suelte el/los archivo(s) aquí, o',
                ru: 'Перетащите файл(ы) сюда, или',
            }[lang]
        }</span>
        <ul ref={ulRef} className='btn-list darker vertical'>{
            files.map((file, index) => (
                <li key={index} onClick={() => setFiles(current => current.filter((_, i) => i != index))}>
                    <f-icon icon={
                        file.type.startsWith('image/') ? 'file-image' :
                        file.type.startsWith('audio/') ? 'file-music' :
                        file.type.startsWith('application/') ? 'file-code' :
                        'file'
                    }/>
                    <span>{file.name}</span>
                </li>
            ))
        }</ul>
        <button className='primary' onClick={() => inputRef.current?.click()}>{
            {
                en: 'Add file(s)',
                vi: 'Thêm (các) tệp',
                fr: 'Ajouter un ou plusieurs fichiers',
                it: 'Aggiungi file',
                ko: '파일 추가',
                ja: 'ファイルを追加',
                de: 'Datei(en) hinzufügen',
                nl: 'Bestand(en) toevoegen',
                da: 'Tilføj fil(er)',
                pt: 'Adicionar ficheiro(s)',
                es: 'Añadir archivo(s)',
                ru: 'Добавить файл(ы)',
            }[lang]
        }</button>
        <input
            ref={inputRef}
            type='file'
            accept={accept}
            multiple={multiple}
            hidden
            onChange={event => {
                addFiles(event.target.files);
                event.target.value = '';
            }}
        />
        {!!maxBytes && <span>Limit: {formatBytes(usedBytes)} / {formatBytes(maxBytes)}</span>}
    </f-uploader>
}