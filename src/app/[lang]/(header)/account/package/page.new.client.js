'use client';

import { useContext, useRef, useState } from 'react';
import { get, ref } from 'firebase/database';
import { UserContext } from 'Com/user';
import { db } from 'Com/firebase';
import useGo from 'Com/go';
import usePage from '../use-page';
import cssStyle from './page.new.module.css';
import Code from 'Com/code';

export default function PageClient() {
    let go = useGo();

    let [ used, setUsed ] = useState(0);
    let [ max, setMax ] = useState(10000);

    let { user } = useContext(UserContext);

    let resetRef = useRef();
    
    let { lang } = document.documentElement;

    usePage(async () => {
        let { plan, pageview: { count, start } } = user.doc;

        let planData = (await get(ref(db, `plans/${plan}`))).val();

        setUsed(count);
        setMax(planData.pageviews);

        let formatted = formatDate(new Date(start + 30 * 24 * 60 * 60 * 1000));
        resetRef.current.innerText =
            lang == 'ko' ? `${formatted}에 재설정됨` :
            lang == 'ja' ? `${formatted}にリセット` :
            `${
                {
                    en: 'Reset at',
                    vi: 'Đặt lại vào',
                    fr: 'Réinitialisé à',
                    it: 'Reimpostato alle',
                    de: 'Zurückgesetzt am',
                    nl: 'Opnieuw ingesteld om',
                    da: 'Nulstillet kl.',
                    pt: 'Reiniciado às',
                    es: 'Reiniciado a las',
                    ru: 'Сброс настроек в',
                }[lang]
            } ${formatted}`;
    })

    return (
        <div>
            <ul className='btn-list'>
                <li onClick={() => go('account/package/settings')}>
                    <f-icon icon='gear'></f-icon>
                    <span>{
                        {
                            en: 'Settings',
                            vi: 'Cài đặt',
                            fr: 'Paramètres',
                            it: 'Impostazioni',
                            ko: '설정',
                            ja: '設定',
                            de: 'Einstellungen',
                            nl: 'Instellingen',
                            da: 'Indstillinger',
                            pt: 'Configurações',
                            es: 'Ajustes',
                            ru: 'Настройки',
                        }[lang]
                    }</span>
                </li>
                <li onClick={() => go('account/package/download')}>
                    <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
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
                            da: 'Download',
                            pt: 'Transferir',
                            es: 'Descargar',
                            ru: 'Скачать',
                        }[lang]
                    }</span>
                </li>
            </ul>
            <div className={cssStyle.pageviews}>
                <span>{
                    {
                        en: 'You have used',
                        vi: 'Bạn đã sử dụng',
                        fr: 'Vous avez utilisé',
                        it: 'Hai utilizzato',
                        de: 'Sie haben',
                        nl: 'U hebt',
                        da: 'Du har brugt',
                        pt: 'Utilizou',
                        es: 'Has utilizado',
                        ru: 'Вы использовали',
                    }[lang]
                }</span>
                <h6>{used} / {max} {
                    {
                        en: 'pageviews',
                        vi: 'lượt xem trang',
                        fr: 'pages vues',
                        it: 'visualizzazioni di pagina',
                        ko: '페이지뷰를 사용했습니다',
                        ja: 'ページビューを使用しました',
                        de: 'Seitenaufrufe verwendet',
                        nl: 'paginaweergaven gebruikt',
                        da: 'sidevisninger',
                        pt: 'visualizações de página',
                        es: 'páginas vistas',
                        ru: 'просмотров страниц',
                    }[lang]
                }</h6>
                <div className={cssStyle.bar} style={{ '--percent': `${used / max * 100}%` }}/>
                <span ref={resetRef}></span>
            </div>
            <h3>{
                {
                    en: 'Import',
                    vi: 'Import',
                    fr: 'Importer',
                    it: 'Importare',
                    ko: '수입',
                    ja: '輸入',
                    de: 'Import',
                    nl: 'Importeren',
                    da: 'Importere',
                    pt: 'Importação',
                    es: 'Importar',
                    ru: 'Импорт',
                }[lang]
            }</h3>
            <p dangerouslySetInnerHTML={{
                __html: {
                    en: "To import Foricon Package to your site, please copy the code below and paste it into your HTML\'s <span className='small-code element'>head</span>",
                    vi: "Để import Foricon Package vào trang web của bạn, vui lòng sao chép mã bên dưới và dán vào thẻ <span className='small-code element'>head</span> của HTML của bạn",
                    fr: "Pour importer le package Foricon sur votre site, veuillez copier le code ci-dessous et le coller dans votre <span className='small-code element'>head</span> HTML",
                    it: "Per importare il pacchetto Foricon sul tuo sito, copia il codice sottostante e incollalo nel <span className='small-code element'>head</span> del tuo HTML",
                    ko: "귀하의 사이트로 Foricon 패키지를 가져오려면 아래 코드를 복사하여 HTML의 <span className='small-code element'>head</span>에 붙여넣으세요.",
                    ja: "Foricon パッケージをサイトにインポートするには、以下のコードをコピーして HTML の <span className='small-code element'>head</span> に貼り付けてください。",
                    de: "Um das Foricon-Paket auf Ihre Website zu importieren, kopieren Sie bitte den folgenden Code und fügen Sie ihn in den <span className='small-code element'>head</span> Ihres HTML-Codes ein.",
                    nl: "Om het Foricon-pakket naar uw site te importeren, kopieert u de onderstaande code en plakt u deze in de <span className='small-code element'>head</span> van uw HTML",
                    da: "For at importere Foricon Package til dit websted, skal du kopiere koden nedenfor og indsætte den i din HTMLs <span className='small-code element'>head</span>",
                    pt: "Para importar o pacote Foricon para o seu site, copie o código abaixo e cole-o no <span className='small-code element'>head</span> do seu HTML",
                    es: "Para importar el paquete Foricon a su sitio, copie el código a continuación y péguelo en el <span className='small-code element'>head</span> de su HTML.",
                    ru: "Чтобы импортировать пакет Foricon на свой сайт, скопируйте код ниже и вставьте его в <span className='small-code element'>head</span> вашего HTML-кода.",
                }[lang]
            }}/>
            <Code>{`<script src='https://foricon.vercel.app/api/import/${user?.uid}'><script/>`}</Code>
            <ul className='btn-list vertical large'>
                <li onClick={() => go('docs/styling-icons/basics')}>{
                    {
                        en: 'Guide about customizing icons',
                        vi: 'Hướng dẫn tùy chỉnh biểu tượng',
                        fr: 'Guide sur la personnalisation des icônes',
                        it: 'Guida alla personalizzazione delle icone',
                        ko: '아이콘 사용자 정의에 대한 가이드',
                        ja: 'アイコンのカスタマイズに関するガイド',
                        de: 'Anleitung zum Anpassen von Symbolen',
                        nl: 'Handleiding voor het aanpassen van pictogrammen',
                        da: 'Vejledning om tilpasning af ikoner',
                        pt: 'Guia sobre a personalização de ícones',
                        es: 'Guía sobre cómo personalizar iconos',
                        ru: 'Руководство по настройке иконок',
                    }[lang]
                }</li>
            </ul>
        </div>
    )
}