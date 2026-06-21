'use client';

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { LanguageContext } from 'Com/language';
import usePage from "Pag/(header)/account/use-page";
import 'Pag/sidebar-page.css';
import 'Pag/(header)/account/internal-global.css';
import './page.css';

export default function Page() {
    let router = useRouter();
    let lang = useContext(LanguageContext)

    usePage(() => {})

    return (
        <div name='package/settings'>
            <h3>{
                {
                    en: 'Package settings',
                    vi: 'Cài đặt gói',
                    fr: 'Paramètres du package',
                    it: 'Impostazioni del pacchetto',
                    kr: '패키지 설정',
                    ja: 'パッケージ設定',
                    de: 'Paketeinstellungen',
                    nl: 'Pakketinstellingen',
                    dk: 'Pakkeindstillinger',
                    pt: 'Configurações do pacote',
                    es: 'Configuración del paquete',
                    ru: 'Настройки пакета',
                }[lang]
            }</h3>
            <form>
                <span>{
                    {
                        en: 'Version',
                        vi: 'Phiên bản',
                        fr: 'Option de rendu',
                        it: 'Opzione di rendering',
                        kr: '렌더링 옵션',
                        ja: 'レンダリングオプション',
                        de: 'Rendering-Option',
                        nl: 'Rendering-optie',
                        dk: 'Mulighed for gengivelse',
                        pt: 'Opção de renderização',
                        es: 'Opción de renderizado',
                        ru: 'Вариант рендеринга',
                    }[lang]
                }</span>
                <f-select name='versions' multiple required>
                    <text></text>
                    <option-list>
                    <f-option value='b1'>Beta 1.7.5</f-option>
                    <f-option value='b2'>Beta 2+ (TTF)</f-option>
                    <f-option value='b2w2'>Beta 2+ (WOFF2)</f-option>
                    </option-list>
                </f-select>
                <span>{
                    {
                        en: 'Rendering option',
                        vi: 'Tùy chọn kết xuất',
                        fr: 'Option de rendu',
                        it: 'Opzione di rendering',
                        kr: '렌더링 옵션',
                        ja: 'レンダリングオプション',
                        de: 'Rendering-Option',
                        nl: 'Rendering-optie',
                        dk: 'Mulighed for gengivelse',
                        pt: 'Opção de renderização',
                        es: 'Opción de renderizado',
                        ru: 'Вариант рендеринга',
                    }[lang]
                }</span>
                <f-select name='rendering-option'>
                    <text></text>
                    <option-list>
                    <f-option value='performance'>{
                        {
                            en: 'Performance',
                            vi: 'Hiệu suất',
                            fr: 'Performance',
                            it: 'Prestazione',
                            kr: '성능',
                            ja: 'パフォーマンス',
                            de: 'Leistung',
                            nl: 'Prestatie',
                            dk: 'Ydeevne',
                            pt: 'Desempenho',
                            es: 'Actuación',
                            ru: 'Производительность',
                        }[lang]
                    }</f-option>
                    <f-option value='precision'>{
                        {
                            en: 'Precision',
                            vi: 'Chính xác',
                            fr: 'Précision',
                            it: 'Precisione',
                            kr: '정도',
                            ja: '精度',
                            de: 'Präzision',
                            nl: 'Precisie',
                            dk: 'Præcision',
                            pt: 'Precisão',
                            es: 'Precisión',
                            ru: 'Точность',
                        }[lang]
                    }</f-option>
                    </option-list>
                </f-select>
                <span>{
                    {
                        en: 'Allowed domains',
                        vi: 'Tên miền được phép',
                        fr: 'Domaines autorisés',
                        it: 'Domini consentiti',
                        kr: '허용된 도메인',
                        ja: '許可されたドメイン',
                        de: 'Erlaubte Domänen',
                        nl: 'Toegestane domeinen',
                        dk: 'Tilladte domæner',
                        pt: 'Domínios permitidos',
                        es: 'Dominios permitidos',
                        ru: 'Разрешенные домены',
                    }[lang]
                }</span>
                <ul className='btn-list vertical' name='domains'>
                    <li>
                        <f-icon icon='plus' i-s='outline'></f-icon>
                        <span>{
                            {
                                en: 'Add a domain',
                                vi: 'Thêm tên miền',
                                fr: 'Ajouter un domaine',
                                it: 'Aggiungi un dominio',
                                kr: '도메인 추가',
                                ja: 'ドメインを追加する',
                                de: 'Hinzufügen einer Domäne',
                                nl: 'Een domein toevoegen',
                                dk: 'Tilføj et domæne',
                                pt: 'Adicionar um domínio',
                                es: 'Agregar un dominio',
                                ru: 'Добавить домен',
                            }[lang]
                        }</span>
                    </li>
                </ul>
                <button className='primary'>{
                    {
                        en: 'Save changes',
                        vi: 'Lưu thay đổi',
                        fr: 'Enregistrer les modifications',
                        it: 'Salvare le modifiche',
                        kr: '변경 사항 저장',
                        ja: '変更を保存',
                        de: 'Änderungen speichern',
                        nl: 'Wijzigingen opslaan',
                        dk: 'Gem ændringer',
                        pt: 'Guardar alterações',
                        es: 'Guardar cambios',
                        ru: 'Сохранить изменения',
                    }[lang]
                }</button>
            </form>
        </div>
    )
}