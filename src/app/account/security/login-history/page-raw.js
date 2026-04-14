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
                <div name='security/login-history'>
                    <h3>
                        <Lang value='en'>Login history</Lang>
                        <Lang value='vi'>Lịch sử đăng nhập</Lang>
                        <Lang value='fr'>Historique de connexion</Lang>
                        <Lang value='it'>Cronologia degli accessi</Lang>
                        <Lang value='kr'>로그인 기록</Lang>
                        <Lang value='ja'>ログイン履歴</Lang>
                        <Lang value='de'>Anmeldeverlauf</Lang>
                        <Lang value='nl'>Aanmeldingsgeschiedenis</Lang>
                        <Lang value='dk'>Loginhistorik</Lang>
                        <Lang value='pt'>Histórico de login</Lang>
                        <Lang value='es'>Historial de inicio de sesión</Lang>
                    <Lang value='ru'>История входов</Lang>
                    </h3>
                    <ul>
                        <button className='primary'>
                            <Lang value='en'>Load more</Lang>
                            <Lang value='vi'>Tải thêm</Lang>
                            <Lang value='fr'>Charger plus</Lang>
                            <Lang value='it'>Carica altro</Lang>
                            <Lang value='kr'>더 보기</Lang>
                            <Lang value='ja'>さらに読み込む</Lang>
                            <Lang value='de'>Mehr laden</Lang>
                            <Lang value='nl'>Meer laden</Lang>
                            <Lang value='dk'>Indlæs mere</Lang>
                            <Lang value='pt'>Carregar mais</Lang>
                            <Lang value='es'>Cargar más</Lang>
                            <Lang value='ru'>Загрузить еще</Lang>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}