'use client';

import { useRouter } from "next/navigation";
import Sidebar from "Pag/account/sidebar";
import { GetLang } from 'Com/language';
import 'Pag/sidebar-page.css';
import 'Pag/interal-global.css'
import './page.css';

export default function Page() {
    let router = useRouter();

    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <div>
                <div name='security/login-history'>
                    <h3>{
                        GetLang({
                            en: 'Login history',
                            vi: 'Lịch sử đăng nhập',
                            fr: 'Historique de connexion',
                            it: 'Cronologia degli accessi',
                            kr: '로그인 기록',
                            ja: 'ログイン履歴',
                            de: 'Anmeldeverlauf',
                            nl: 'Aanmeldingsgeschiedenis',
                            dk: 'Loginhistorik',
                            pt: 'Histórico de login',
                            es: 'Historial de inicio de sesión',
                            ru: 'История входов',
                        })
                    }</h3>
                    <ul>
                        <button className='primary'>{
                            GetLang({
                                en: 'Load more',
                                vi: 'Tải thêm',
                                fr: 'Charger plus',
                                it: 'Carica altro',
                                kr: '더 보기',
                                ja: 'さらに読み込む',
                                de: 'Mehr laden',
                                nl: 'Meer laden',
                                dk: 'Indlæs mere',
                                pt: 'Carregar mais',
                                es: 'Cargar más',
                                ru: 'Загрузить еще',
                            })
                        }</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}