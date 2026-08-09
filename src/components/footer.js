'use client';

import FLink from 'Com/link';
import logo from 'Pub/foricon-f-logo.png';
import Img from "./img";

export default function Footer() {
    let { lang } = document.documentElement;

    return (
        <footer>
            <div>
                <FLink href='/'>
                    <Img src={logo}/>
                </FLink>
                <div>
                    <FLink class='btn secondary' href='//www.facebook.com/profile.php?id=61574026262611' target='_blank'>
                        <i class='fa-brands fa-facebook'/><span>Follow us</span>
                    </FLink>
                    <FLink class='btn secondary' href='//youtube.com/@ForiconIconFont' target='_blank'>
                        <i class='fa-brands fa-youtube'/><span>Our channel</span>
                    </FLink>
                </div>
            </div>
            <div class='dk-bg first'>
                <span>©2023 - {new Date().getFullYear()} Foricon</span>
                <ul>
                    <li>
                        <FLink href='/about'>{
                            {
                                en: 'About us',
                                vi: 'Về chúng tôi',
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
                    <li>
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
                            }[lang]
                        }</FLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}