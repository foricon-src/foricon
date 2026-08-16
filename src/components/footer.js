'use client';

import FLink from 'Com/link';
import logo from 'Pub/foricon-text-new.png';
import logoLight from 'Pub/foricon-text-new-light.png';
import Img from "./img";
import { useContext } from 'react';
import { ThemeContext } from './theme';

export default function Footer() {
    let { isDark } = useContext(ThemeContext);
    let { lang } = document.documentElement;

    return (
        <footer>
            <div>
                <FLink href='/'>
                    <Img src={isDark ? logoLight : logo}/>
                </FLink>
                <div>
                    <div>
                        <h6>{
                            {
                                en: 'Community',
                                vi: 'Cộng đồng',
                                fr: 'Communauté',
                                it: 'Comunità',
                                ko: '지역 사회',
                                ja: 'コミュニティ',
                                de: 'Gemeinschaft',
                                nl: 'Gemeenschap',
                                dk: 'Fællesskab',
                                pt: 'Comunidade',
                                es: 'Comunidad',
                                ru: 'Сообщество',
                            }[lang]
                        }</h6>
                        <FLink href='//youtube.com/@ForiconIconFont'>YouTube</FLink>
                        <FLink href='//www.facebook.com/profile.php?id=61574026262611'>Facebook</FLink>
                    </div>
                    <div>
                        <h6>{
                            {
                                en: 'Help',
                                vi: 'Trợ giúp',
                                fr: 'Aide',
                                it: 'Aiuto',
                                ko: '돕다',
                                ja: 'ヘルプ',
                                de: 'Helfen',
                                nl: 'Hulp',
                                dk: 'Hjælp',
                                pt: 'Ajuda',
                                es: 'Ayuda',
                                ru: 'Помощь',
                            }[lang]
                        }</h6>
                        <FLink href='/support'>{
                            {
                                en: 'Support',
                                vi: 'Hỗ trợ',
                                fr: 'Soutien',
                                it: 'Supporto',
                                ko: '지원하다',
                                ja: 'サポート',
                                de: 'Unterstützung',
                                nl: 'Steun',
                                dk: 'Support',
                                pt: 'Apoiar',
                                es: 'Apoyo',
                                ru: 'Поддерживать',
                            }[lang]
                        }</FLink>
                        <FLink href='/hub'>Hub</FLink>
                        <FLink href='/contact'>{
                            {
                                en: 'Contact us',
                                vi: 'Liên hệ',
                                fr: 'Contactez-nous',
                                it: 'Contattaci',
                                ko: '문의하기',
                                ja: 'お問い合わせ',
                                de: 'Kontaktieren Sie uns',
                                nl: 'Neem contact met ons op',
                                dk: 'Kontakt os',
                                pt: 'Contate-nos',
                                es: 'Contacta con nosotros',
                                ru: 'Связаться с нами',
                            }[lang]
                        }</FLink>
                    </div>
                    <div>
                        <h6>{
                            {
                                en: 'Others',
                                vi: 'Khác',
                                fr: 'Autres',
                                it: 'Altri',
                                ko: '기타',
                                ja: 'その他',
                                de: 'Andere',
                                nl: 'Overige',
                                dk: 'Andre',
                                pt: 'Outros',
                                es: 'Otros',
                                ru: 'Другие',
                            }[lang]
                        }</h6>
                        <FLink href='/fotorno'>Fotorno</FLink>
                    </div>
                </div>
            </div>
            <div class='dk-bg bottom'>
                <span>©2023 - {new Date().getFullYear()} Foricon</span>
                <ul>
                    <li>
                        <FLink href='/about'>{
                            {
                                en: 'About us',
                                vi: 'Giới thiệu',
                                fr: 'À propos de nous',
                                it: 'Chi siamo',
                                ko: '회사 소개',
                                ja: '私たちについて',
                                de: 'Über uns',
                                nl: 'Over ons',
                                dk: 'Om os',
                                pt: 'Sobre nós',
                                es: 'Sobre nosotros',
                            }[lang]
                        }</FLink>
                    </li>
                    <li>
                        <FLink href='/tos'>{
                            {
                                en: 'Terms of Service',
                                vi: 'Điều khoản dịch vụ',
                                fr: "Conditions d'utilisation",
                                it: 'Termini di servizio',
                                ko: '서비스 약관',
                                ja: '利用規約',
                                de: 'Nutzungsbedingungen',
                                nl: 'Servicevoorwaarden',
                                dk: 'Servicevilkår',
                                pt: 'Termos de serviço',
                                es: 'Términos de servicio',
                            }[lang]
                        }</FLink>
                    </li>
                    <li>
                        <FLink href='/refund-policy'>{
                            {
                                en: 'Refund Policy',
                                vi: 'Chính sách hoàn tiền',
                                fr: 'Politique de remboursement',
                                it: 'Politica di rimborso',
                                ko: '환불 정책',
                                ja: '返金ポリシー',
                                de: 'Rückgaberecht',
                                nl: 'Restitutiebeleid',
                                dk: 'Refusionspolitik',
                                pt: 'Política de Reembolso',
                                es: 'Política de reembolso',
                            }[lang]
                        }</FLink>
                    </li>
                    <li>
                        <FLink href='/privacy'>{
                            {
                                en: 'Privacy Policy',
                                vi: 'Chính sách bảo mật',
                                fr: 'Politique de Confidentialité',
                                it: 'Politica sulla Riservatezza',
                                ko: '개인 정보 정책',
                                ja: 'プライバシーポリシー',
                                de: 'Datenschutzrichtlinie',
                                nl: 'Privacybeleid',
                                dk: 'Fortrolighedspolitik',
                                pt: 'Política de Privacidade',
                                es: 'Política de Privacidad',
                            }[lang]
                        }</FLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}