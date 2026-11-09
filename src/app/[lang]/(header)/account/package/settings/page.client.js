'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import Select from 'Com/f-select';
import { UserContext } from 'Com/user';
import cssStyle from './page.module.css';

export default function PageClient() {
    let { user } = useContext(UserContext);
    let { allowedDomains = [], renderingOption = 'precision', versions = [] } = user?.doc?.settings || {};

    let ulRef = useRef();

    let [ v, setV ] = useState([]);
    let [ ad, setAd ] = useState([]);
    let [ ro, setRo ] = useState('');

    let { lang } = document.documentElement;

    useEffect(() => {
        setV(versions);
        setAd(allowedDomains);
        setRo(renderingOption);
    }, [ user ])
    useEffect(() => {
        getChild(ulRef.current).slice(0, -1).forEach(i => i.firstChild.toggleIconOnHover?.('trash-can', i));
    }, [ allowedDomains ])

    usePage();
    
    return (
        <div className={cssStyle.settings}>
            <h3>{
                {
                    en: 'Package settings',
                    vi: 'Cài đặt Package',
                    fr: 'Paramètres du package',
                    it: 'Impostazioni del pacchetto',
                    ko: '패키지 설정',
                    ja: 'パッケージ設定',
                    de: 'Paketeinstellungen',
                    nl: 'Pakketinstellingen',
                    da: 'Pakkeindstillinger',
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
                        ko: '렌더링 옵션',
                        ja: 'レンダリングオプション',
                        de: 'Rendering-Option',
                        nl: 'Rendering-optie',
                        da: 'Mulighed for gengivelse',
                        pt: 'Opção de renderização',
                        es: 'Opción de renderizado',
                        ru: 'Вариант рендеринга',
                    }[lang]
                }</span>
                <Select
                    options={
                        [
                            {
                                text: 'Beta 1.7.5',
                                value: 'b1',
                            },
                            {
                                text: 'Beta 2+ (TTF)',
                                value: 'b2',
                            },
                            {
                                text: 'Beta 2+ (WOFF2)',
                                value: 'b2w2',
                            },
                        ]
                    }
                    values={v}
                    onChange={setV}
                    multiple
                />
                <span>{
                    {
                        en: 'Rendering option',
                        vi: 'Tùy chọn kết xuất',
                        fr: 'Option de rendu',
                        it: 'Opzione di rendering',
                        ko: '렌더링 옵션',
                        ja: 'レンダリングオプション',
                        de: 'Rendering-Option',
                        nl: 'Rendering-optie',
                        da: 'Mulighed for gengivelse',
                        pt: 'Opção de renderização',
                        es: 'Opción de renderizado',
                        ru: 'Вариант рендеринга',
                    }[lang]
                }</span>
                <Select
                    options={
                        [
                            {
                                text: {
                                    en: 'Performance',
                                    vi: 'Hiệu suất',
                                    fr: 'Performance',
                                    it: 'Prestazione',
                                    ko: '성능',
                                    ja: 'パフォーマンス',
                                    de: 'Leistung',
                                    nl: 'Prestatie',
                                    da: 'Ydeevne',
                                    pt: 'Desempenho',
                                    es: 'Actuación',
                                    ru: 'Производительность',
                                }[lang],
                                value: 'performance',
                            },
                            {
                                text: {
                                    en: 'Precision',
                                    vi: 'Chính xác',
                                    fr: 'Précision',
                                    it: 'Precisione',
                                    ko: '정도',
                                    ja: '精度',
                                    de: 'Präzision',
                                    nl: 'Precisie',
                                    da: 'Præcision',
                                    pt: 'Precisão',
                                    es: 'Precisión',
                                    ru: 'Точность',
                                }[lang],
                                value: 'precision'
                            },
                        ]
                    }
                    values={[ ro ]}
                    onChange={setRo}
                />
                <span>{
                    {
                        en: 'Allowed domains',
                        vi: 'Tên miền được phép',
                        fr: 'Domaines autorisés',
                        it: 'Domini consentiti',
                        ko: '허용된 도메인',
                        ja: '許可されたドメイン',
                        de: 'Erlaubte Domänen',
                        nl: 'Toegestane domeinen',
                        da: 'Tilladte domæner',
                        pt: 'Domínios permitidos',
                        es: 'Dominios permitidos',
                        ru: 'Разрешенные домены',
                    }[lang]
                }</span>
                <ul ref={ulRef} className='btn-list vertical' name='domains'>
                    {
                        ad.map(
                            i => <li key={i}>
                                <f-icon icon='globe'/>
                                <span>{i}</span>
                            </li>
                        )
                    }
                    <li>
                        <f-icon icon='plus' i-s='outline'/>
                        <span>{
                            {
                                en: 'Add a domain',
                                vi: 'Thêm tên miền',
                                fr: 'Ajouter un domaine',
                                it: 'Aggiungi un dominio',
                                ko: '도메인 추가',
                                ja: 'ドメインを追加する',
                                de: 'Hinzufügen einer Domäne',
                                nl: 'Een domein toevoegen',
                                da: 'Tilføj et domæne',
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
                        ko: '변경 사항 저장',
                        ja: '変更を保存',
                        de: 'Änderungen speichern',
                        nl: 'Wijzigingen opslaan',
                        da: 'Gem ændringer',
                        pt: 'Guardar alterações',
                        es: 'Guardar cambios',
                        ru: 'Сохранить изменения',
                    }[lang]
                }</button>
            </form>
        </div>
    )
}