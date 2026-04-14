import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";
import 'Pag/sidebar-page.css';
import './page.css';

export default function Page() {
    let router = useRouter();

    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <div>
                <div name='security/login-history'>
                    <h3>
                        <lang value='en'>Login history</lang>
                        <lang value='vi'>Lịch sử đăng nhập</lang>
                        <lang value='fr'>Historique de connexion</lang>
                        <lang value='it'>Cronologia degli accessi</lang>
                        <lang value='kr'>로그인 기록</lang>
                        <lang value='ja'>ログイン履歴</lang>
                        <lang value='de'>Anmeldeverlauf</lang>
                        <lang value='nl'>Aanmeldingsgeschiedenis</lang>
                        <lang value='dk'>Loginhistorik</lang>
                        <lang value='pt'>Histórico de login</lang>
                        <lang value='es'>Historial de inicio de sesión</lang>
                    <lang value='ru'>История входов</lang>
                    </h3>
                    <ul>
                        <button className='primary'>
                            <lang value='en'>Load more</lang>
                            <lang value='vi'>Tải thêm</lang>
                            <lang value='fr'>Charger plus</lang>
                            <lang value='it'>Carica altro</lang>
                            <lang value='kr'>더 보기</lang>
                            <lang value='ja'>さらに読み込む</lang>
                            <lang value='de'>Mehr laden</lang>
                            <lang value='nl'>Meer laden</lang>
                            <lang value='dk'>Indlæs mere</lang>
                            <lang value='pt'>Carregar mais</lang>
                            <lang value='es'>Cargar más</lang>
                            <lang value='ru'>Загрузить еще</lang>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}