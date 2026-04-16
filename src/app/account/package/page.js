'use client';

import { useRouter } from "next/navigation";
import { GetLang } from 'Com/language';
import { useEffect } from "react";
import { get, ref } from "firebase/database";
import { db } from "Com/firebase";
import 'Pag/sidebar-page.css';
import 'Pag/account/internal-global.css';
import './page.css';

export default function Page() {
    let router = useRouter();
    
    useEffect(() => {(async () => {
        while (user == null) await wait();

        let { plan, pageview: { count, start } } = user.doc;

        let planData = (await get(ref(db, `plans/${plan}`))).val();

        let { body } = document;
        let percent = Math.floor(count / planData.pageviews * 1000) / 1000;

        body.style.setProperty('--angle', `${percent * 360}%`);
        body.style.setProperty('--duration', `${percent * (6 - percent * 3)}s`);

        let reset = new Date(start.year, start.month, start.day, start.hours, start.minutes, start.seconds);
        reset.setDate(reset.getDate() + 30)

        elemById('main_package_pageviews_chart_count').innerText = `${count} / ${planData.pageviews}`;
        elemById('main_package_pageviews_reset').innerText = formatDate(reset);
    })()}, [])

    return (
        <div name='package'>
            <div id='main_package_pageviews'>
                <div id='main_package_pageviews_chart'>
                    <div>
                        <span>{
                            GetLang({
                                en: 'You have used',
                                vi: 'Bạn đã sử dụng',
                                fr: 'Vous avez utilisé',
                                it: 'Hai utilizzato',
                                de: 'Sie haben',
                                nl: 'U hebt',
                                dk: 'Du har brugt',
                                pt: 'Utilizou',
                                es: 'Has utilizado',
                                ru: 'Вы использовали',
                            })
                        }</span>
                        <h4 id='main_package_pageviews_chart_count'></h4>
                        <span>{
                            GetLang({
                                en: 'pageviews',
                                vi: 'lượt xem trang',
                                fr: 'pages vues',
                                it: 'visualizzazioni di pagina',
                                kr: '페이지뷰를 사용했습니다',
                                ja: 'ページビューを使用しました',
                                de: 'Seitenaufrufe verwendet',
                                nl: 'paginaweergaven gebruikt',
                                dk: 'sidevisninger',
                                pt: 'visualizações de página',
                                es: 'páginas vistas',
                                ru: 'просмотров страниц',
                            })
                        }</span>
                    </div>
                </div>
                <span id='main_package_pageviews_reset'></span>
                <hr/>
                <ul className='btn-list'>
                    <li onClick={() => go(router, 'account/package/settings')}>
                        <f-icon icon='gear'></f-icon>
                        <span>{
                            GetLang({
                                en: 'Settings',
                                vi: 'Cài đặt',
                                fr: 'Paramètres',
                                it: 'Impostazioni',
                                kr: '설정',
                                ja: '設定',
                                de: 'Einstellungen',
                                nl: 'Instellingen',
                                dk: 'Indstillinger',
                                pt: 'Configurações',
                                es: 'Ajustes',
                                ru: 'Настройки',
                            })
                        }</span>
                    </li>
                    <li onClick={() => go(router, 'account/package/download')}>
                        <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                        <span>{
                            GetLang({
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
                            })
                        }</span>
                    </li>
                </ul>
            </div>
            <h3>{
                GetLang({
                    en: 'Import',
                    vi: 'Import',
                    fr: 'Importer',
                    it: 'Importare',
                    kr: '수입',
                    ja: '輸入',
                    de: 'Import',
                    nl: 'Importeren',
                    dk: 'Importere',
                    pt: 'Importação',
                    es: 'Importar',
                    ru: 'Импорт',
                })
            }</h3>
            <p dangerouslySetInnerHTML={{
                __html: GetLang({
                    en: "To import Foricon Package to your site, please copy the code below and paste it into your HTML\'s <span className='small-code element'>head</span>",
                    vi: "Để import Foricon Package vào trang web của bạn, vui lòng sao chép mã bên dưới và dán vào thẻ <span className='small-code element'>head</span> của HTML của bạn",
                    fr: "Pour importer le package Foricon sur votre site, veuillez copier le code ci-dessous et le coller dans votre <span className='small-code element'>head</span> HTML",
                    it: "Per importare il pacchetto Foricon sul tuo sito, copia il codice sottostante e incollalo nel <span className='small-code element'>head</span> del tuo HTML",
                    kr: "귀하의 사이트로 Foricon 패키지를 가져오려면 아래 코드를 복사하여 HTML의 <span className='small-code element'>head</span>에 붙여넣으세요.",
                    ja: "Foricon パッケージをサイトにインポートするには、以下のコードをコピーして HTML の <span className='small-code element'>head</span> に貼り付けてください。",
                    de: "Um das Foricon-Paket auf Ihre Website zu importieren, kopieren Sie bitte den folgenden Code und fügen Sie ihn in den <span className='small-code element'>head</span> Ihres HTML-Codes ein.",
                    nl: "Om het Foricon-pakket naar uw site te importeren, kopieert u de onderstaande code en plakt u deze in de <span className='small-code element'>head</span> van uw HTML",
                    dk: "For at importere Foricon Package til dit websted, skal du kopiere koden nedenfor og indsætte den i din HTMLs <span className='small-code element'>head</span>",
                    pt: "Para importar o pacote Foricon para o seu site, copie o código abaixo e cole-o no <span className='small-code element'>head</span> do seu HTML",
                    es: "Para importar el paquete Foricon a su sitio, copie el código a continuación y péguelo en el <span className='small-code element'>head</span> de su HTML.",
                    ru: "Чтобы импортировать пакет Foricon на свой сайт, скопируйте код ниже и вставьте его в <span className='small-code element'>head</span> вашего HTML-кода.",
                })
            }}/>
            <code name='HTML'></code>
            <ul className='btn-list vertical large'>
                <li onClick={() => go(router, 'docs/styling-icons/basics')}>{
                    GetLang({
                        en: 'Guide about customizing icons',
                        vi: 'Hướng dẫn tùy chỉnh biểu tượng',
                        fr: 'Guide sur la personnalisation des icônes',
                        it: 'Guida alla personalizzazione delle icone',
                        kr: '아이콘 사용자 정의에 대한 가이드',
                        ja: 'アイコンのカスタマイズに関するガイド',
                        de: 'Anleitung zum Anpassen von Symbolen',
                        nl: 'Handleiding voor het aanpassen van pictogrammen',
                        dk: 'Vejledning om tilpasning af ikoner',
                        pt: 'Guia sobre a personalização de ícones',
                        es: 'Guía sobre cómo personalizar iconos',
                        ru: 'Руководство по настройке иконок',
                    })
                }</li>
            </ul>
        </div>
    )
}