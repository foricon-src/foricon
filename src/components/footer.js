'use client';

import Link from "next/link";
import Image from "next/image";
import { GetLang } from "./language";
import logo from 'Pub/foricon-f-2.png';

export default function Footer() {
    return (
        <footer>
            <div>
                <Link href='/'>
                    <Image src={logo}/>
                </Link>
                <div>
                    <a class='btn secondary' href='//www.facebook.com/profile.php?id=61574026262611' target='_blank'>
                        <i class='fa-brands fa-facebook'/><span>Follow us</span>
                    </a>
                    <a class='btn secondary' href='//youtube.com/@ForiconIconFont' target='_blank'>
                        <i class='fa-brands fa-youtube'/><span>Our channel</span>
                    </a>
                </div>
            </div>
            <div class='dk-bg first'>
                <span>©2023 - {new Date().getFullYear()} Foricon</span>
                <ul>
                    <li>
                        <a href='/about'>{
                            GetLang({
                                en: 'About us',
                                vi: 'Về chúng tôi',
                                fr: 'À propos de nous',
                                it: 'Chi siamo',
                                kr: '회사 소개',
                                ja: '私たちについて',
                                de: 'Über uns',
                                nl: 'Over ons',
                                dk: 'Om os',
                                pt: 'Sobre nós',
                                es: 'Sobre nosotros',
                            })
                        }</a>
                    </li>
                    <li>
                        <a href='/tos'>{
                            GetLang({
                                en: 'Terms of Service',
                                vi: 'Điều khoản dịch vụ',
                                fr: 'Conditions d&#39;utilisation',
                                it: 'Termini di servizio',
                                kr: '서비스 약관',
                                ja: '利用規約',
                                de: 'Nutzungsbedingungen',
                                nl: 'Servicevoorwaarden',
                                dk: 'Servicevilkår',
                                pt: 'Termos de serviço',
                                es: 'Términos de servicio',
                            })
                        }</a>
                    </li>
                    <li>
                        <a href='/refund-policy'>{
                            GetLang({
                                en: 'Refund Policy',
                                vi: 'Chính sách hoàn tiền',
                                fr: 'Politique de remboursement',
                                it: 'Politica di rimborso',
                                kr: '환불 정책',
                                ja: '返金ポリシー',
                                de: 'Rückgaberecht',
                                nl: 'Restitutiebeleid',
                                dk: 'Refusionspolitik',
                                pt: 'Política de Reembolso',
                                es: 'Política de reembolso',
                            })
                        }</a>
                    </li>
                    <li>
                        <a href='/privacy'>{
                            GetLang({
                                en: 'Privacy Policy',
                                vi: 'Chính sách bảo mật',
                                fr: 'Politique de Confidentialité',
                                it: 'Politica sulla Riservatezza',
                                kr: '개인 정보 정책',
                                ja: 'プライバシーポリシー',
                                de: 'Datenschutzrichtlinie',
                                nl: 'Privacybeleid',
                                dk: 'Fortrolighedspolitik',
                                pt: 'Política de Privacidade',
                                es: 'Política de Privacidad',
                            })
                        }</a>
                    </li>
                    <li>
                        <a href='/support'>{
                            GetLang({
                                en: 'Support',
                                vi: 'Hỗ trợ',
                                fr: 'Soutien',
                                it: 'Supporto',
                                kr: '지원하다',
                                ja: 'サポート',
                                de: 'Unterstützung',
                                nl: 'Steun',
                                dk: 'Support',
                                pt: 'Apoiar',
                                es: 'Apoyo',
                            })
                        }</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}