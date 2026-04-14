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
                <div name='package/download'>
                    <h3>
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
                    </h3>
                    <ul>
                        <li>
                            <h6>
                                <Lang value='en'>Font pack</Lang>
                                <Lang value='vi'>Gói phông chữ</Lang>
                                <Lang value='fr'>Pack de polices</Lang>
                                <Lang value='it'>Pacchetto di caratteri</Lang>
                                <Lang value='kr'>폰트 팩</Lang>
                                <Lang value='ja'>フォントパック</Lang>
                                <Lang value='de'>Schriftartenpaket</Lang>
                                <Lang value='nl'>Lettertypepakket</Lang>
                                <Lang value='dk'>Skrifttypepakke</Lang>
                                <Lang value='pt'>Pacote de fontes</Lang>
                                <Lang value='es'>Paquete de fuentes</Lang>
                                <Lang value='ru'>набор шрифтов</Lang>
                            </h6>
                            <span></span>
                            <button className='primary' name='fonts'>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                            </button>
                        </li>
                        <li>
                            <h6>
                                <Lang value='en'>Icon pack</Lang>
                                <Lang value='vi'>Gói biểu tượng</Lang>
                                <Lang value='fr'>Pack d&apos;icônes</Lang>
                                <Lang value='it'>Pacchetto di icone</Lang>
                                <Lang value='kr'>아이콘 팩</Lang>
                                <Lang value='ja'>アイコンパック</Lang>
                                <Lang value='de'>Symbolpaket</Lang>
                                <Lang value='nl'>Pictogrammenpakket</Lang>
                                <Lang value='dk'>Ikonpakke</Lang>
                                <Lang value='pt'>Pacote de ícones</Lang>
                                <Lang value='es'>Paquete de iconos</Lang>
                                <Lang value='ru'>набор иконок</Lang>
                            </h6>
                            <span></span>
                            <button className='btn primary' name='icons'>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}