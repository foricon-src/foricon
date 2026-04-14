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
                        <Lang value='en'>Codebox&apos;s font</Lang>
                        <Lang value='vi'>Phông chữ của hộp mã</Lang>
                        <Lang value='fr'>Police de caractères de Codebox</Lang>
                        <Lang value='it'>Il carattere di Codebox</Lang>
                        <Lang value='kr'>코드박스의 폰트</Lang>
                        <Lang value='ja'>Codeboxのフォント</Lang>
                        <Lang value='de'>Schriftart von Codebox</Lang>
                        <Lang value='nl'>Het lettertype van Codebox</Lang>
                        <Lang value='dk'>Codebox&apos; skrifttype</Lang>
                        <Lang value='pt'>Fonte Codebox</Lang>
                        <Lang value='es'>Fuente de Codebox</Lang>
                        <Lang value='ru'>Шрифт Codebox</Lang>
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
                        <Lang value='en'>Indentation space</Lang>
                        <Lang value='vi'>Khoảng cách thụt dòng</Lang>
                        <Lang value='fr'>Espace d&apos;indentation</Lang>
                        <Lang value='it'>spazio di rientro</Lang>
                        <Lang value='kr'>들여쓰기 공간</Lang>
                        <Lang value='ja'>インデントスペース</Lang>
                        <Lang value='de'>Einrückungsraum</Lang>
                        <Lang value='nl'>Inspringingsruimte</Lang>
                        <Lang value='dk'>Indrykningsafstand</Lang>
                        <Lang value='pt'>Espaço de recuo</Lang>
                        <Lang value='es'>Espacio de indentación</Lang>
                        <Lang value='ru'>Пространство отступа</Lang>
                        <input name='indent' type='range' min='1' max='6' step='1' df-value='2'/>
                        <button className='primary'>
                            <Lang value='en'>Save changes</Lang>
                            <Lang value='vi'>Lưu thay đổi</Lang>
                            <Lang value='fr'>Enregistrer les modifications</Lang>
                            <Lang value='it'>Salvare le modifiche</Lang>
                            <Lang value='kr'>변경 사항 저장</Lang>
                            <Lang value='ja'>変更を保存</Lang>
                            <Lang value='de'>Änderungen speichern</Lang>
                            <Lang value='nl'>Wijzigingen opslaan</Lang>
                            <Lang value='dk'>Gem ændringer</Lang>
                            <Lang value='pt'>Guardar alterações</Lang>
                            <Lang value='es'>Guardar cambios</Lang>
                            <Lang value='ru'>Сохранить изменения</Lang>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}