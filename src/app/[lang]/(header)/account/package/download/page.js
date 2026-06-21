'use client';

import { useRouter } from "next/navigation";
import { LanguageContext } from 'Com/language';
import { useContext } from "react";
import usePage from "Pag/(header)/account/use-page";
import 'Pag/sidebar-page.css';
import 'Pag/(header)/account/internal-global.css';
import './page.css';

export default function Page() {
    let router = useRouter();
    let lang = useContext(LanguageContext)

    usePage(() => {})

    return (
        <div name='package/download'>
            <h3>{
                {
                    en: 'Download',
                    vi: 'Tải xuống',
                    fr: 'Télécharger',
                    it: 'Scaricamento',
                    kr: '다운로드',
                    ja: 'ダウンロード',
                    de: 'Herunterladen',
                    nl: 'Download',
                    dk: 'Download',
                    pt: 'Transferir',
                    es: 'Descargar',
                    ru: 'Скачать',
                }[lang]
            }</h3>
            <ul>
                <li>
                    <h6>{
                        {
                            en: 'Font pack',
                            vi: 'Gói phông chữ',
                            fr: 'Pack de polices',
                            it: 'Pacchetto di caratteri',
                            kr: '폰트 팩',
                            ja: 'フォントパック',
                            de: 'Schriftartenpaket',
                            nl: 'Lettertypepakket',
                            dk: 'Skrifttypepakke',
                            pt: 'Pacote de fontes',
                            es: 'Paquete de fuentes',
                            ru: 'набор шрифтов',
                        }[lang]
                    }</h6>
                    <span></span>
                    <button className='primary' name='fonts'>
                        <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                    </button>
                </li>
                <li>
                    <h6>{
                        {
                            en: 'Icon pack',
                            vi: 'Gói biểu tượng',
                            fr: "Pack d'icônes",
                            it: 'Pacchetto di icone',
                            kr: '아이콘 팩',
                            ja: 'アイコンパック',
                            de: 'Symbolpaket',
                            nl: 'Pictogrammenpakket',
                            dk: 'Ikonpakke',
                            pt: 'Pacote de ícones',
                            es: 'Paquete de iconos',
                            ru: 'набор иконок',
                        }[lang]
                    }</h6>
                    <span></span>
                    <button className='btn primary' name='icons'>
                        <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                    </button>
                </li>
            </ul>
        </div>
    )
}