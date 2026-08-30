'use client';

import { useContext, useState } from 'react';
import Code from 'Com/code';
import { UpdateRange, Range } from 'Com/range';
import { UserContext } from 'Com/user';
import usePage from '../use-page';
import cssStyle from './page.module.css';

export default function PageClient() {
    let user = useContext(UserContext);

    let [ font, setFont ] = useState('');
    let [ indent, setIndent ] = useState(2);

    let { lang } = document.documentElement;

    usePage(() => {
        let { font, indent } = user.doc.personalization;
        let form = qSelec('div[name="personalization"] > form');
        let form_fSelect = qSelec(form, 'f-select');

        form_fSelect.setValue(font);
        setIndent(indent);

        addEvLis(form_fSelect, 'change', () => setFont(form_fSelect.value));
    }, [])

    return (
        <div className={cssStyle.personalization}>
            <form>
                <span>{
                    {
                        en: "Codebox's font",
                        vi: 'Phông chữ của hộp mã',
                        fr: 'Police de caractères de Codebox',
                        it: 'Il carattere di Codebox',
                        ko: '코드박스의 폰트',
                        ja: 'Codeboxのフォント',
                        de: 'Schriftart von Codebox',
                        nl: 'Het lettertype van Codebox',
                        dk: "Codebox' skrifttype",
                        pt: 'Fonte Codebox',
                        es: 'Fuente de Codebox',
                        ru: 'Шрифт Codebox',
                    }[lang]
                }</span>
                <f-select name='font'>
                    <text></text>
                    <option-list>{
                        [
                            {
                                name: 'Consolas',
                                value: 'cons',
                            },
                            {
                                name: 'Fira Code',
                                value: 'fira',
                            },
                            {
                                name: 'Source Code Pro',
                                value: 'scp',
                            },
                            {
                                name: 'DM Mono',
                                value: 'dm',
                            },
                            {
                                name: 'Nova Mono',
                                value: 'nova',
                            },
                            {
                                name: 'Xanh Mono',
                                value: 'xanh',
                            },
                            {
                                name: 'Kode Mono',
                                value: 'kode',
                            },
                            {
                                name: 'Sono',
                                value: 'sono',
                            },
                        ].map(({ name, value }) => <f-option key={value} value={value} className={value}>{name}</f-option>)
                    }</option-list>
                </f-select>
                <Code className={font}>{`<div class='box'>
${' '.repeat(indent)}<!--<p>Hello World!</p>-->
</div>
<script type='module'>
${' '.repeat(indent)}let a = JSON.parse(localStorage.getItem('a'));
${' '.repeat(indent)}if (a.length) {
${' '.repeat(indent * 2)}a.map(i => i == 'data' || i != 'money');
${' '.repeat(indent)}}
${' '.repeat(indent)}for (let i in a) {
${' '.repeat(indent * 2)}a[i] += '_str'
${' '.repeat(indent)}}
</script>`}</Code>
                <span>{
                    {
                        en: 'Indentation space',
                        vi: 'Khoảng cách thụt dòng',
                        fr: 'Espace d\'indentation',
                        it: 'spazio di rientro',
                        ko: '들여쓰기 공간',
                        ja: 'インデントスペース',
                        de: 'Einrückungsraum',
                        nl: 'Inspringingsruimte',
                        dk: 'Indrykningsafstand',
                        pt: 'Espaço de recuo',
                        es: 'Espacio de indentación',
                        ru: 'Пространство отступа',
                    }[lang]
                }: {indent}</span>
                <Range name='indent' min='1' max='6' step='1' dfValue='2' onInput={e => setIndent(e.currentTarget.value)}/>
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