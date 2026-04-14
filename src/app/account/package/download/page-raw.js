import { useRouter } from "next/navigation";
import Sidebar from "Pag/account/sidebar";
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
                    </h3>
                    <ul>
                        <li>
                            <h6>
                                <lang value='en'>Font pack</lang>
                                <lang value='vi'>Gói phông chữ</lang>
                                <lang value='fr'>Pack de polices</lang>
                                <lang value='it'>Pacchetto di caratteri</lang>
                                <lang value='kr'>폰트 팩</lang>
                                <lang value='ja'>フォントパック</lang>
                                <lang value='de'>Schriftartenpaket</lang>
                                <lang value='nl'>Lettertypepakket</lang>
                                <lang value='dk'>Skrifttypepakke</lang>
                                <lang value='pt'>Pacote de fontes</lang>
                                <lang value='es'>Paquete de fuentes</lang>
                                <lang value='ru'>набор шрифтов</lang>
                            </h6>
                            <span></span>
                            <button className='primary' name='fonts'>
                                <f-icon icon='arrow-down-to-bracket' i-s='outline'></f-icon>
                            </button>
                        </li>
                        <li>
                            <h6>
                                <lang value='en'>Icon pack</lang>
                                <lang value='vi'>Gói biểu tượng</lang>
                                <lang value='fr'>Pack d&apos;icônes</lang>
                                <lang value='it'>Pacchetto di icone</lang>
                                <lang value='kr'>아이콘 팩</lang>
                                <lang value='ja'>アイコンパック</lang>
                                <lang value='de'>Symbolpaket</lang>
                                <lang value='nl'>Pictogrammenpakket</lang>
                                <lang value='dk'>Ikonpakke</lang>
                                <lang value='pt'>Pacote de ícones</lang>
                                <lang value='es'>Paquete de iconos</lang>
                                <lang value='ru'>набор иконок</lang>
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