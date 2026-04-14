import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";
import 'Pag/sidebar-page.css';
import 'Pag/account/page.css';

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
                                <lang value='en'>You have used</lang>
                                <lang value='vi'>Bạn đã sử dụng</lang>
                                <lang value='fr'>Vous avez utilisé</lang>
                                <lang value='it'>Hai utilizzato</lang>
                                <lang value='de'>Sie haben</lang>
                                <lang value='nl'>U hebt</lang>
                                <lang value='dk'>Du har brugt</lang>
                                <lang value='pt'>Utilizou</lang>
                                <lang value='es'>Has utilizado</lang>
                                <lang value='ru'>Вы использовали</lang>
                                <h4 id='main_package_pageviews_chart_count'></h4>
                                <lang value='en'>pageviews</lang>
                                <lang value='vi'>lượt xem trang</lang>
                                <lang value='fr'>pages vues</lang>
                                <lang value='it'>visualizzazioni di pagina</lang>
                                <lang value='kr'>페이지뷰를 사용했습니다</lang>
                                <lang value='ja'>ページビューを使用しました</lang>
                                <lang value='de'>Seitenaufrufe verwendet</lang>
                                <lang value='nl'>paginaweergaven gebruikt</lang>
                                <lang value='dk'>sidevisninger</lang>
                                <lang value='pt'>visualizações de página</lang>
                                <lang value='es'>páginas vistas</lang>
                                <lang value='ru'>просмотров страниц</lang>
                            </div>
                        </div>
                        <span id='main_package_pageviews_reset'></span>
                        <hr/>
                        <ul className='btn-list'>
                            <li onClick={() => go(router, 'account/package/settings')}>
                                <f-icon icon='gear'></f-icon>
                                <lang value='en'>Settings</lang>
                                <lang value='vi'>Cài đặt</lang>
                                <lang value='fr'>Paramètres</lang>
                                <lang value='it'>Impostazioni</lang>
                                <lang value='kr'>설정</lang>
                                <lang value='ja'>設定</lang>
                                <lang value='de'>Einstellungen</lang>
                                <lang value='nl'>Instellingen</lang>
                                <lang value='dk'>Indstillinger</lang>
                                <lang value='pt'>Configurações</lang>
                                <lang value='es'>Ajustes</lang>
                                <lang value='ru'>Настройки</lang>
                            </li>
                            <li onClick={() => go(router, 'account/package/download')}>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                                <lang value='en'>Download</lang>
                                <lang value='vi'>Tải xuống</lang>
                                <lang value='fr'>Télécharger</lang>
                                <lang value='it'>Scaricamento</lang>
                                <lang value='kr'>다운로드</lang>
                                <lang value='ja'>ダウンロード</lang>
                                <lang value='de'>Herunterladen</lang>
                                <lang value='nl'>Download</lang>
                                <lang value='dk'>Download</lang>
                                <lang value='pt'>Transferir</lang>
                                <lang value='es'>Descargar</lang>
                                <lang value='ru'>Скачать</lang>
                            </li>
                        </ul>
                    </div>
                    <h3>
                        <lang value='en'>Import</lang>
                        <lang value='vi'>Import</lang>
                        <lang value='fr'>Importer</lang>
                        <lang value='it'>Importare</lang>
                        <lang value='kr'>수입</lang>
                        <lang value='ja'>輸入</lang>
                        <lang value='de'>Import</lang>
                        <lang value='nl'>Importeren</lang>
                        <lang value='dk'>Importere</lang>
                        <lang value='pt'>Importação</lang>
                        <lang value='es'>Importar</lang>
                        <lang value='ru'>Импорт</lang>
                    </h3>
                    <p>
                        <lang value='en'>To import Foricon Package to your site, please copy the code below and paste it into your HTML&apos;s <span className='small-code element'>head</span></lang>
                        <lang value='vi'>Để import Foricon Package vào trang web của bạn, vui lòng sao chép mã bên dưới và dán vào thẻ <span className='small-code element'>head</span> của HTML của bạn</lang>
                        <lang value='fr'>Pour importer le package Foricon sur votre site, veuillez copier le code ci-dessous et le coller dans votre <span className='small-code element'>head</span> HTML</lang>
                        <lang value='it'>Per importare il pacchetto Foricon sul tuo sito, copia il codice sottostante e incollalo nel <span className='small-code element'>head</span> del tuo HTML</lang>
                        <lang value='kr'>귀하의 사이트로 Foricon 패키지를 가져오려면 아래 코드를 복사하여 HTML의 <span className='small-code element'>head</span>에 붙여넣으세요.</lang>
                        <lang value='ja'>Foricon パッケージをサイトにインポートするには、以下のコードをコピーして HTML の <span className='small-code element'>head</span> に貼り付けてください。</lang>
                        <lang value='de'>Um das Foricon-Paket auf Ihre Website zu importieren, kopieren Sie bitte den folgenden Code und fügen Sie ihn in den <span className='small-code element'>head</span> Ihres HTML-Codes ein.</lang>
                        <lang value='nl'>Om het Foricon-pakket naar uw site te importeren, kopieert u de onderstaande code en plakt u deze in de <span className='small-code element'>head</span> van uw HTML</lang>
                        <lang value='dk'>For at importere Foricon Package til dit websted, skal du kopiere koden nedenfor og indsætte den i din HTMLs <span className='small-code element'>head</span></lang>
                        <lang value='pt'>Para importar o pacote Foricon para o seu site, copie o código abaixo e cole-o no <span className='small-code element'>head</span> do seu HTML</lang>
                        <lang value='es'>Para importar el paquete Foricon a su sitio, copie el código a continuación y péguelo en el <span className='small-code element'>head</span> de su HTML.</lang>
                        <lang value='ru'>Чтобы импортировать пакет Foricon на свой сайт, скопируйте код ниже и вставьте его в <span className='small-code element'>head</span> вашего HTML-кода.</lang>
                    </p>
                    <code name='HTML'></code>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'docs/styling-icons/basics')}>
                            <lang value='en'>Guide about customizing icons</lang>
                            <lang value='vi'>Hướng dẫn tùy chỉnh biểu tượng</lang>
                            <lang value='fr'>Guide sur la personnalisation des icônes</lang>
                            <lang value='it'>Guida alla personalizzazione delle icone</lang>
                            <lang value='kr'>아이콘 사용자 정의에 대한 가이드</lang>
                            <lang value='ja'>アイコンのカスタマイズに関するガイド</lang>
                            <lang value='de'>Anleitung zum Anpassen von Symbolen</lang>
                            <lang value='nl'>Handleiding voor het aanpassen van pictogrammen</lang>
                            <lang value='dk'>Vejledning om tilpasning af ikoner</lang>
                            <lang value='pt'>Guia sobre a personalização de ícones</lang>
                            <lang value='es'>Guía sobre cómo personalizar iconos</lang>
                            <lang value='ru'>Руководство по настройке иконок</lang>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}