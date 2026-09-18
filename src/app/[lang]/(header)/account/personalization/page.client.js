'use client';

import { useContext, useRef, useState } from 'react';
import Code from 'Com/code';
import { UpdateRange, Range } from 'Com/range';
import { useUpdateUser, UserContext } from 'Com/user';
import usePage from '../use-page';
import cssStyle from './page.module.css';
import { doc, setDoc } from 'firebase/firestore';
import { dbFirestore } from 'Com/firebase';

export default function PageClient() {
    let { user } = useContext(UserContext);
    let updateUser = useUpdateUser();

    let selectRef = useRef();

    let [ font, setFont ] = useState('');
    let [ indent, setIndent ] = useState(2);

    let { lang } = document.documentElement;

    usePage(() => {
        let { current } = selectRef;
        let { font, indent } = user.doc.personalization;
        
        current.setValue(font);
        setIndent(indent);
        addEvLis(current, 'change', () => setFont(current.value));
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
                <f-select ref={selectRef} name='font'>
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
                <button className='primary' type='button' onClick={async () => {
                    try {
                        disable(document.body);
                        await updateUser({ personalization: { font, indent } });
                        notify('success', {
                            en: 'Updated successfully',
                            vi: 'Cập nhật thành công',
                            fr: 'Mise à jour réussie',
                            it: 'Aggiornamento completato con successo',
                            ko: '성공적으로 업데이트되었습니다',
                            ja: '正常に更新されました',
                            de: 'Erfolgreich aktualisiert',
                            nl: 'Succesvol bijgewerkt',
                            dk: 'Opdateret',
                            pt: 'Atualizado com sucesso',
                            es: 'Actualizado correctamente',
                            ru: 'Успешно обновлено',
                        }[lang])
                    }
                    catch (err) {
                        notify('error', err.message);
                        console.error(err);
                    }
                    finally {
                        enable(document.body);
                    }
                }}>{
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
                <button className='secondary' type='button'>{
                    {
                        en: 'Reset default',
                        vi: 'Đặt lại mặc định',
                        fr: 'Rétablir les paramètres par défaut',
                        it: 'Ripristina impostazioni predefinite',
                        ko: '기본값으로 재설정',
                        ja: 'デフォルトにリセット',
                        de: 'Auf Standard zurücksetzen',
                        nl: 'Standaardinstelling herstellen',
                        dk: 'Nulstil standard',
                        pt: 'Redefinir padrão',
                        es: 'Restablecer valores predeterminados',
                        ru: 'Сбросить до настроек по умолчанию',
                    }[lang]
                }</button>
            </form>
        </div>
    )
}