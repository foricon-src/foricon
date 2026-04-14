import { useRouter } from "next/navigation";
import Sidebar from "Pag/account/sidebar";
import { Lang } from "Com/language";
import 'Pag/sidebar-page.css';
import './page.css';

export default function Page() {
    let router = useRouter();

    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <div>
                <div name='package'>
                    <div id='main_package_pageviews'>
                        <div id='main_package_pageviews_chart'>
                            <div>
                                <Lang value='en'>You have used</Lang>
                                <Lang value='vi'>Bạn đã sử dụng</Lang>
                                <Lang value='fr'>Vous avez utilisé</Lang>
                                <Lang value='it'>Hai utilizzato</Lang>
                                <Lang value='de'>Sie haben</Lang>
                                <Lang value='nl'>U hebt</Lang>
                                <Lang value='dk'>Du har brugt</Lang>
                                <Lang value='pt'>Utilizou</Lang>
                                <Lang value='es'>Has utilizado</Lang>
                                <Lang value='ru'>Вы использовали</Lang>
                                <h4 id='main_package_pageviews_chart_count'></h4>
                                <Lang value='en'>pageviews</Lang>
                                <Lang value='vi'>lượt xem trang</Lang>
                                <Lang value='fr'>pages vues</Lang>
                                <Lang value='it'>visualizzazioni di pagina</Lang>
                                <Lang value='kr'>페이지뷰를 사용했습니다</Lang>
                                <Lang value='ja'>ページビューを使用しました</Lang>
                                <Lang value='de'>Seitenaufrufe verwendet</Lang>
                                <Lang value='nl'>paginaweergaven gebruikt</Lang>
                                <Lang value='dk'>sidevisninger</Lang>
                                <Lang value='pt'>visualizações de página</Lang>
                                <Lang value='es'>páginas vistas</Lang>
                                <Lang value='ru'>просмотров страниц</Lang>
                            </div>
                        </div>
                        <span id='main_package_pageviews_reset'></span>
                        <hr/>
                        <ul className='btn-list'>
                            <li onClick={() => go(router, 'account/package/settings')}>
                                <f-icon icon='gear'></f-icon>
                                <Lang value='en'>Settings</Lang>
                                <Lang value='vi'>Cài đặt</Lang>
                                <Lang value='fr'>Paramètres</Lang>
                                <Lang value='it'>Impostazioni</Lang>
                                <Lang value='kr'>설정</Lang>
                                <Lang value='ja'>設定</Lang>
                                <Lang value='de'>Einstellungen</Lang>
                                <Lang value='nl'>Instellingen</Lang>
                                <Lang value='dk'>Indstillinger</Lang>
                                <Lang value='pt'>Configurações</Lang>
                                <Lang value='es'>Ajustes</Lang>
                                <Lang value='ru'>Настройки</Lang>
                            </li>
                            <li onClick={() => go(router, 'account/package/download')}>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                                <Lang value='en'>Download</Lang>
                                <Lang value='vi'>Tải xuống</Lang>
                                <Lang value='fr'>Télécharger</Lang>
                                <Lang value='it'>Scaricamento</Lang>
                                <Lang value='kr'>다운로드</Lang>
                                <Lang value='ja'>ダウンロード</Lang>
                                <Lang value='de'>Herunterladen</Lang>
                                <Lang value='nl'>Download</Lang>
                                <Lang value='dk'>Download</Lang>
                                <Lang value='pt'>Transferir</Lang>
                                <Lang value='es'>Descargar</Lang>
                                <Lang value='ru'>Скачать</Lang>
                            </li>
                        </ul>
                    </div>
                    <h3>
                        <Lang value='en'>Import</Lang>
                        <Lang value='vi'>Import</Lang>
                        <Lang value='fr'>Importer</Lang>
                        <Lang value='it'>Importare</Lang>
                        <Lang value='kr'>수입</Lang>
                        <Lang value='ja'>輸入</Lang>
                        <Lang value='de'>Import</Lang>
                        <Lang value='nl'>Importeren</Lang>
                        <Lang value='dk'>Importere</Lang>
                        <Lang value='pt'>Importação</Lang>
                        <Lang value='es'>Importar</Lang>
                        <Lang value='ru'>Импорт</Lang>
                    </h3>
                    <p>
                        <Lang value='en'>To import Foricon Package to your site, please copy the code below and paste it into your HTML&apos;s <span className='small-code element'>head</span></Lang>
                        <Lang value='vi'>Để import Foricon Package vào trang web của bạn, vui lòng sao chép mã bên dưới và dán vào thẻ <span className='small-code element'>head</span> của HTML của bạn</Lang>
                        <Lang value='fr'>Pour importer le package Foricon sur votre site, veuillez copier le code ci-dessous et le coller dans votre <span className='small-code element'>head</span> HTML</Lang>
                        <Lang value='it'>Per importare il pacchetto Foricon sul tuo sito, copia il codice sottostante e incollalo nel <span className='small-code element'>head</span> del tuo HTML</Lang>
                        <Lang value='kr'>귀하의 사이트로 Foricon 패키지를 가져오려면 아래 코드를 복사하여 HTML의 <span className='small-code element'>head</span>에 붙여넣으세요.</Lang>
                        <Lang value='ja'>Foricon パッケージをサイトにインポートするには、以下のコードをコピーして HTML の <span className='small-code element'>head</span> に貼り付けてください。</Lang>
                        <Lang value='de'>Um das Foricon-Paket auf Ihre Website zu importieren, kopieren Sie bitte den folgenden Code und fügen Sie ihn in den <span className='small-code element'>head</span> Ihres HTML-Codes ein.</Lang>
                        <Lang value='nl'>Om het Foricon-pakket naar uw site te importeren, kopieert u de onderstaande code en plakt u deze in de <span className='small-code element'>head</span> van uw HTML</Lang>
                        <Lang value='dk'>For at importere Foricon Package til dit websted, skal du kopiere koden nedenfor og indsætte den i din HTMLs <span className='small-code element'>head</span></Lang>
                        <Lang value='pt'>Para importar o pacote Foricon para o seu site, copie o código abaixo e cole-o no <span className='small-code element'>head</span> do seu HTML</Lang>
                        <Lang value='es'>Para importar el paquete Foricon a su sitio, copie el código a continuación y péguelo en el <span className='small-code element'>head</span> de su HTML.</Lang>
                        <Lang value='ru'>Чтобы импортировать пакет Foricon на свой сайт, скопируйте код ниже и вставьте его в <span className='small-code element'>head</span> вашего HTML-кода.</Lang>
                    </p>
                    <code name='HTML'></code>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'docs/styling-icons/basics')}>
                            <Lang value='en'>Guide about customizing icons</Lang>
                            <Lang value='vi'>Hướng dẫn tùy chỉnh biểu tượng</Lang>
                            <Lang value='fr'>Guide sur la personnalisation des icônes</Lang>
                            <Lang value='it'>Guida alla personalizzazione delle icone</Lang>
                            <Lang value='kr'>아이콘 사용자 정의에 대한 가이드</Lang>
                            <Lang value='ja'>アイコンのカスタマイズに関するガイド</Lang>
                            <Lang value='de'>Anleitung zum Anpassen von Symbolen</Lang>
                            <Lang value='nl'>Handleiding voor het aanpassen van pictogrammen</Lang>
                            <Lang value='dk'>Vejledning om tilpasning af ikoner</Lang>
                            <Lang value='pt'>Guia sobre a personalização de ícones</Lang>
                            <Lang value='es'>Guía sobre cómo personalizar iconos</Lang>
                            <Lang value='ru'>Руководство по настройке иконок</Lang>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}