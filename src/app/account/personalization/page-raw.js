import { useRouter } from "next/navigation";
import Sidebar from "Pag/account/sidebar";
import Code from "Com/code";
import { Lang } from "Com/language";
import 'Pag/sidebar-page.css';
import './page.css';

export default function Page() {
    let router = useRouter();

    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <div>
                <div name='personalization'>
                    <form>
                        <span>{
                            getLang({
                                en: "Codebox's font",
                                vi: 'Phông chữ của hộp mã',
                                fr: 'Police de caractères de Codebox',
                                it: 'Il carattere di Codebox',
                                kr: '코드박스의 폰트',
                                ja: 'Codeboxのフォント',
                                de: 'Schriftart von Codebox',
                                nl: 'Het lettertype van Codebox',
                                dk: "Codebox' skrifttype",
                                pt: 'Fonte Codebox',
                                es: 'Fuente de Codebox',
                                ru: 'Шрифт Codebox',
                            })
                        }</span>
                        <f-select name='font'>
                            <text></text>
                            <option-list>
                                <f-option value='cons'>Consolas</f-option>
                                <f-option value='fira'>Fira Code</f-option>
                                <f-option value='scp'>Source Code Pro</f-option>
                                <f-option value='dm'>DM Mono</f-option>
                                <f-option value='nova'>Nova Mono</f-option>
                                <f-option value='xanh'>Xanh Mono</f-option>
                                <f-option value='kode'>Kode Mono</f-option>
                                <f-option value='sono'>Sono</f-option>
                            </option-list>
                        </f-select>
                        <Code lang='HTML'>{`<div className='box'>
  <!--<p>Hello World!</p>-->
</div>
<script type='module'>
  let a = JSON.parse(localStorage.getItem('a'));
  if (a.length) {
    a.map(i => i == 'data' || i != 'money');
  }
  for (let i in a) {
    a[i] += '_str'
  }
</script>`}</Code>
                        <span>{
                            getLang({
                                en: 'Indentation space',
                                vi: 'Khoảng cách thụt dòng',
                                fr: 'Espace d\'indentation',
                                it: 'spazio di rientro',
                                kr: '들여쓰기 공간',
                                ja: 'インデントスペース',
                                de: 'Einrückungsraum',
                                nl: 'Inspringingsruimte',
                                dk: 'Indrykningsafstand',
                                pt: 'Espaço de recuo',
                                es: 'Espacio de indentación',
                                ru: 'Пространство отступа',
                            })
                        }</span>
                        <input name='indent' type='range' min='1' max='6' step='1' df-value='2'/>
                        <button className='primary'>{
                            getLang({
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
                            })
                        }</button>
                    </form>
                </div>
            </div>
        </div>
    )
}