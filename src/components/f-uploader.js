// 'use client';

// import { input } from 'framer-motion/client';
// import { useEffect, useRef, useState } from 'react';

// export function Uploader({ accept = '', multiple = false, ...rest }) {
//     let [ files, setFiles ] = useState([]);

//     let uploaderRef = useRef();
//     let ulRef = useRef();
//     let inputRef = useRef();

//     let { lang } = document.documentElement;

//     useEffect(() => {
//         let { current } = uploaderRef;
//         addEvLis(current, 'dragover', () => (multiple || !files.length) && current.classList.add('drag'));
//         addEvLis(current, 'dragleave', () => current.classList.remove('drag'));
//         addEvLis(current, 'drop', e => {
//             if (!multiple && files.length)  return;
//             e.preventDefault();

//             current.classList.remove('drag');

//             let { files } = e.dataTransfer;
//             if (files.length + 1) {
//                 let arr = [];
//                 [...files].forEach((file) => {
//                     let acceptedType = accept.split(',').map(type => type.trim());
//                     !acceptedType.some(type => type == file.type || type.includes('*') && file.type.startsWith(type.split('/')[0]))
//                         ? notify('warn', 'This type of file is not accepted by the uploader')
//                         : arr.push(file)
//                 })
//                 setFiles([ ...files, ...arr ]);
//             }
//         })
//     }, [])
//     useEffect(() => {
//         let { current: uploaderRefCr } = uploaderRef;
//         let { current: ulRefCr } = ulRef;
//         getChild(ulRefCr).map(i => i.firstChild.toggleIconOnHover('trash-can'));
//         uploaderRefCr?.dispatchEvent(new Event('change'));
//     }, [ files ])

//     return <f-uploader ref={uploaderRef}>
//         <f-icon icon='arrow-up-from-bracket' i-s='outline'/>
//         <span>Drag & drop the file here, or</span>
//         <ul ref={ulRef} class='btn-list darker vertical'>{
//             files.map((file, i) => {
//                 return <li key={i} onClick={() => setFiles([ ...files.slice(0, i), ...files.slice(i + 1) ])}>
//                     <f-icon icon='file'/>
//                     <span>{file.name}</span>
//                 </li>
//             })
//         }</ul>
//         <button class='primary' onClick={() => inputRef.current.click()}>Add file</button>
//         <input type='file' multiple={multiple} onChange={({ target }) => setFiles([ ...files, ...target.files ])}/>
//     </f-uploader>
// }

'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

export let Uploader = forwardRef(function Uploader({ accept = '', multiple = false, files: controlledFiles, onFilesChange, ...rest }, ref) {
    let [ internalFiles, setInternalFiles ] = useState([]);

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

        onFilesChange?.(next);
    }
    function clearFiles() {
        setFiles([]);
        inputRef.current && (inputRef.current.value = '');
    }

    useImperativeHandle(ref, () => ({ clearFiles }))

    function addFiles(incoming) {
        let acceptedTypes = accept
            .split(',')
            .map(type => type.trim())
            .filter(Boolean);
        
        let accepted = [...incoming].filter(file => {
            if (!acceptedTypes.length) return true;

            let allowed = acceptedTypes.some(type => {
                if (type.startsWith('.')) return file.name.toLowerCase().endsWith(type.toLowerCase());
                if (type.endsWith('/*')) return file.type.startsWith(type.slice(0, -1));
                return file.type == type;
            })
            !allowed && notify('warn', `Not allowed file extension or file type. Rejected bold(${file.name})`);
            return allowed;
        })

        if (!accepted.length) return;

        setFiles(current => [ ...(multiple ? current : []), ...accepted ]);
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
                dk: 'Træk og slip filen/filerne hertil, eller',
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
                dk: 'Tilføj fil(er)',
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
    </f-uploader>
})