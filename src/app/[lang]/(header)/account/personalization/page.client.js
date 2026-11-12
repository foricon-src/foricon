'use client';

import { useContext, useEffect, useState } from 'react';
import Code from 'Com/f-code';
import { Range } from 'Com/range';
import { useUpdateUser, UserContext } from 'Com/user';
import Select from 'Com/f-select';
import usePage from '../use-page';
import cssStyle from './page.module.css';

export default function PageClient() {
    let { user } = useContext(UserContext);
    let updateUser = useUpdateUser();

    let [ font, setFont ] = useState(null);
    let [ indent, setIndent ] = useState(null);
    let [ currentFont, setCurrentFont ] = useState();
    let [ currentIndent, setCurrentIndent ] = useState();

    let calcIndent = indent || currentIndent;
    let cond = !font && !indent || font == currentFont && indent == currentIndent;

    let { lang } = document.documentElement;

    usePage();
    useEffect(() => {
        let { font = 'cons', indent = 4 } = user?.doc.personalization || {};
        setCurrentFont(font);
        setCurrentIndent(indent);
    }, [ user ])
    useEffect(() => { console.log(`"${' '.repeat(calcIndent)}"`, calcIndent) }, [ calcIndent ])

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
                        da: "Codebox' skrifttype",
                        pt: 'Fonte Codebox',
                        es: 'Fuente de Codebox',
                        ru: 'Шрифт Codebox',
                    }[lang]
                }</span>
                <Select
                    options={[
                        {
                            text: 'Consolas',
                            value: 'cons',
                        },
                        {
                            text: 'Fira Code',
                            value: 'fira',
                        },
                        {
                            text: 'Source Code Pro',
                            value: 'scp',
                        },
                        {
                            text: 'DM Mono',
                            value: 'dm',
                        },
                        {
                            text: 'Nova Mono',
                            value: 'nova',
                        },
                        {
                            text: 'Xanh Mono',
                            value: 'xanh',
                        },
                        {
                            text: 'Kode Mono',
                            value: 'kode',
                        },
                        {
                            text: 'Sono',
                            value: 'sono',
                        },
                    ]}
                    value={font || currentFont}
                    onChange={setFont}
                />
                <Code className={font}>{`<div class='box'>
${' '.repeat(calcIndent)}<!--<p>Hello World!</p>-->
</div>
<script type='module'>
${' '.repeat(calcIndent)}let a = JSON.parse(localStorage.getItem('a'));
${' '.repeat(calcIndent)}if (a.length) {
${' '.repeat(calcIndent * 2)}a.map(i => i == 'data' || i != 'money');
${' '.repeat(calcIndent)}}
${' '.repeat(calcIndent)}for (let i in a) {
${' '.repeat(calcIndent * 2)}a[i] += '_str'
${' '.repeat(calcIndent)}}
</script>`}</Code>
                <span>{
                    {
                        en: 'Indentation space',
                        vi: 'Khoảng cách thụt dòng',
                        fr: "Espace d'indentation",
                        it: 'spazio di rientro',
                        ko: '들여쓰기 공간',
                        ja: 'インデントスペース',
                        de: 'Einrückungsraum',
                        nl: 'Inspringingsruimte',
                        da: 'Indrykningsafstand',
                        pt: 'Espaço de recuo',
                        es: 'Espacio de indentación',
                        ru: 'Пространство отступа',
                    }[lang]
                }: {calcIndent}</span>
                <Range name='indent' min='1' max='6' step='1' dfValue='2' value={calcIndent} onInput={e => setIndent(e.currentTarget.value)}/>
                <button
                    className='primary'
                    type='button'
                    inert={cond}
                    onClick={async () => {
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
                                da: 'Opdateret',
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
                    }}
                >{
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
                <button
                    className='secondary'
                    type='button'
                    inert={cond}
                    onClick={() => {
                        setFont(null);
                        setIndent(null);
                    }}
                >{
                    {
                        en: 'Cancel',
                        vi: 'Hủy',
                        fr: 'Annuler',
                        it: 'Cancellare',
                        kr: '취소',
                        ja: 'キャンセル',
                        de: 'Stornieren',
                        nl: 'Annuleren',
                        da: 'Ophæve',
                        pt: 'Cancelar',
                        es: 'Cancelar',
                        ru: 'Отмена',
                    }[lang]
                }</button>
                <button className='secondary' type='button' onClick={() => {
                    setFont('cons');
                    setIndent(4);
                }}>{
                    {
                        en: 'Reset default',
                        vi: 'Đặt lại mặc định',
                        fr: 'Rétablir les paramètres par défaut',
                        it: 'Ripristina impostazioni predefinite',
                        ko: '기본값으로 재설정',
                        ja: 'デフォルトにリセット',
                        de: 'Auf Standard zurücksetzen',
                        nl: 'Standaardinstelling herstellen',
                        da: 'Nulstil standard',
                        pt: 'Redefinir padrão',
                        es: 'Restablecer valores predeterminados',
                        ru: 'Сбросить до настроек по умолчанию',
                    }[lang]
                }</button>
            </form>
        </div>
    )
}