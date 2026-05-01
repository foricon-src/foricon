import { useContext } from "react";
import { LanguageContext } from "./language";

export default function Code({ children, lang = 'HTML', nameless }) {
    let language = useContext(LanguageContext);

    return (
        <code name={!nameless && lang} onClick={e => {
            if (!e.ctrlKey) return;
            navigator.clipboard.writeText(e.currentTarget.innerText);
            notify('success', {
                en: 'Copied to clipboard',
                vi: 'Đã sao chép vào bộ nhớ tạm',
                fr: 'Copié dans le presse-papiers',
                it: 'Copiato negli appunti',
                kr: '클립보드에 복사됨',
                ja: 'クリップボードにコピーされました',
                de: 'In die Zwischenablage kopiert',
                nl: 'Gekopieerd naar het klembord',
                dk: 'Kopieret til udklipsholderen',
                pt: 'Copiado para a área de transferência',
                es: 'Copiado al portapapeles',
                ru: 'Скопировано в буфер обмена',
            }[language])
        }}
            dangerouslySetInnerHTML={{
                __html: formatCode(children, lower(lang))
            }}
        />
    )
}