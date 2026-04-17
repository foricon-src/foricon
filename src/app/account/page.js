'use client';

import { useRouter } from "next/navigation";
import { GetLang, LanguageContext } from 'Com/language';
import { useContext } from "react";
import usePage from "Pag/account/use-page";
import 'Pag/sidebar-page.css';
import 'Pag/account/internal-global.css';
import './page.css';

export default function Page() {
    let router = useRouter();
    let lang = useContext(LanguageContext);

    usePage(async () => {
        let hour = new Date().getHours();

        elemById('main_home_hero_greeting').innerText = `${
            (
                hour < 12 ? {
                    en: 'Good morning',
                    vi: 'Chào buổi sáng',
                    fr: 'Bonjour',
                    it: 'Buongiorno',
                    kr: '좋은 아침이에요',
                    ja: 'おはよう',
                    de: 'Guten Morgen',
                    nl: 'Goedemorgen',
                    dk: 'God morgen',
                    pt: 'Bom dia',
                    es: 'Buen día',
                    ru: 'Доброе утро',
                } :
                hour < 18 ? {
                    en: 'Good afternoon',
                    vi: 'Chào buổi chiều',
                    fr: 'Bon après-midi',
                    it: 'Buon pomeriggio',
                    kr: '좋은 오후에요',
                    ja: 'こんにちは',
                    de: 'Guten Tag',
                    nl: 'Goedemiddag',
                    dk: 'God eftermiddag',
                    pt: 'Boa tarde',
                    es: 'Buenas tardes',
                    ru: 'Добрый день',
                } :
                {
                    en: 'Good evening',
                    vi: 'Chào buổi tối',
                    fr: 'Bonne soirée',
                    it: 'Buonasera',
                    kr: '좋은 저녁이에요',
                    ja: 'こんばんは',
                    de: 'Guten Abend',
                    nl: 'Goedeavond',
                    dk: 'God aften',
                    pt: 'Boa noite',
                    es: 'Buenas noches',
                    ru: 'Добрый вечер',
                }
            )[lang]
        }, ${user.doc.name}`;
    })

    return (
        <div name='home'>
            <div id='main_home_hero'>
                <div id='main_home_hero_avatar' className='img circle square avatar'></div>
                <h2 id='main_home_hero_greeting'></h2>
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
                <li onClick={() => go(router, 'pricing')}>{
                    GetLang({
                        en: 'Foricon Plus plans',
                        vi: 'Các gói Foricon Plus',
                        fr: 'Forfaits Foricon Plus',
                        it: 'Piani Foricon Plus',
                        kr: 'Foricon Plus 계획',
                        ja: 'Foricon Plusプラン',
                        de: 'Foricon Plus-Pläne',
                        nl: 'Foricon Plus-abonnementen',
                        dk: 'Foricon Plus-planer',
                        pt: 'Planos Foricon Plus',
                        es: 'Planes de Foricon Plus',
                        ru: 'Планы Foricon Plus',
                    })
                }</li>
                <li className='red'>{
                    GetLang({
                        en: 'Remove my account',
                        vi: 'Xoá tài khoản của tôi',
                        fr: 'Supprimer mon compte',
                        it: 'Rimuovi il mio account',
                        kr: '내 계정 삭제',
                        ja: 'アカウントを削除する',
                        de: 'Mein Konto entfernen',
                        nl: 'Verwijder mijn account',
                        dk: 'Fjern min konto',
                        pt: 'Remover a minha conta',
                        es: 'Eliminar mi cuenta',
                        ru: 'Удалить мой аккаунт',
                    })
                }</li>
            </ul>
        </div>
    )
}