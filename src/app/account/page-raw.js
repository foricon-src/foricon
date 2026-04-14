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
                <div name='home'>
                    <div id='main_home_hero'>
                        <div id='main_home_hero_avatar' className='img circle square avatar'></div>
                        <h2 id='main_home_hero_greeting'>Hello</h2>
                    </div>
                    <ul id='main_home_services'>
                        <li name='music' onClick={() => go(router, 'stream-chilzymusic')}>
                            <img height='42' src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsRBUY7vhKuPaXrUxG6BipYVH90Ir-TngNmNkSV9fT5hTVVr2M_80JyG00NJb8CEaxn1cZuIMfWPkeL25ais09c9-zCYs0W6GQQdZIArHMCXl0ZoD6AfUGikFbXhEfBLUXRH5j-x1xeLsBo0xWokoFtGm1nH8uhSEmqJI6r46XlDJzPC-DWbLstQF6DC4/s360/chilzymusic-m.png'/>
                            <h6>Foricon Music</h6>
                        </li>
                        <li name='hub' onClick={() => go(router, 'hub')}>
                            <img height='60' src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgu2RsPztgjhUls5ZfAiJvxJ95dXULPYSARYYoJYP-73-qp6GnkN09zQ7Lohja3UMJhq2Zjv78rM2LUOiKMuiE2ZT0xjPKKDw2CQqp5-r7ippkOzKrNWSXtLlMkcnd9K-z-QHo2o8GMbJnGTXd69U5TXvMKCrZZCb99XZZaOlJ9kcEQqa_EbY5qh3JhK0/s320/foricon-hub.png'/>
                            <h6>Foricon Hub</h6>
                        </li>
                        <li name='fotorno' onClick={() => go(router, 'fortono')}>
                            <img height='60' src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq7qnPl4uWBfAYXhQ5quYi_hauu8gNbUU5HdkXNIZ8Efgcpjh85N0_0JLr2J0oeru8S6p8AQXIfVxJ7k0wDZ1MYNSKEQTbkpBFyWt82XelBk5-63143dbrFddbah2ZS-03q7FND2de7ec3SExU1MiU4C4xp-5ExivgiOAnTBimjh0NQBpSIL_SvzkL4Mg/s250/foricon-fotorno.png'/>
                            <h6>Foricon Fotorno</h6>
                        </li>
                        <li name='media' onClick={() => go(router, 'media')}>
                            <img height='45' src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0AALCOpcZYC2PmsEX18BY8F0TDzQkvPuwkIB_-zWx8I3WAYdUdlkjdpO5IC27eJSABdzKPq1H1CuDC9Ml3XdBadycE5WikWWXVg5a4iZVUrixLR7EW0wDz8CxeLwNa7Zje3nFMUjJz6FKU9ef3KaIMNgxdnDOMFjKol2Wv5mmvIvnQXv58Kukbqlp5pk/s250/foricon-media.png'/>
                            <h6>Foricon Media</h6>
                        </li>
                    </ul>
                    <ul className='btn-list vertical large'>
                        <li onClick={() => go(router, 'pricing')}>
                            <lang value='en'>Foricon Plus plans</lang>
                            <lang value='vi'>Các gói Foricon Plus</lang>
                            <lang value='fr'>Forfaits Foricon Plus</lang>
                            <lang value='it'>Piani Foricon Plus</lang>
                            <lang value='kr'>Foricon Plus 계획</lang>
                            <lang value='ja'>Foricon Plusプラン</lang>
                            <lang value='de'>Foricon Plus-Pläne</lang>
                            <lang value='nl'>Foricon Plus-abonnementen</lang>
                            <lang value='dk'>Foricon Plus-planer</lang>
                            <lang value='pt'>Planos Foricon Plus</lang>
                            <lang value='es'>Planes de Foricon Plus</lang>
                            <lang value='ru'>Планы Foricon Plus</lang>
                        </li>
                        <li className='red'>
                            <lang value='en'>Remove my account</lang>
                            <lang value='vi'>Xoá tài khoản của tôi</lang>
                            <lang value='fr'>Supprimer mon compte</lang>
                            <lang value='it'>Rimuovi il mio account</lang>
                            <lang value='kr'>내 계정 삭제</lang>
                            <lang value='ja'>アカウントを削除する</lang>
                            <lang value='de'>Mein Konto entfernen</lang>
                            <lang value='nl'>Verwijder mijn account</lang>
                            <lang value='dk'>Fjern min konto</lang>
                            <lang value='pt'>Remover a minha conta</lang>
                            <lang value='es'>Eliminar mi cuenta</lang>
                            <lang value='ru'>Удалить мой аккаунт</lang>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}