import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";
import 'Pag/sidebar-page.css';
import 'Pag/account/page.css';

export default function Page() {
    let router = useRouter();

    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <div>
                <div name='personalization'>
                    <form>
                        <lang value='en'>Codebox&apos;s font</lang>
                        <lang value='vi'>Phông chữ của hộp mã</lang>
                        <lang value='fr'>Police de caractères de Codebox</lang>
                        <lang value='it'>Il carattere di Codebox</lang>
                        <lang value='kr'>코드박스의 폰트</lang>
                        <lang value='ja'>Codeboxのフォント</lang>
                        <lang value='de'>Schriftart von Codebox</lang>
                        <lang value='nl'>Het lettertype van Codebox</lang>
                        <lang value='dk'>Codebox&apos; skrifttype</lang>
                        <lang value='pt'>Fonte Codebox</lang>
                        <lang value='es'>Fuente de Codebox</lang>
                        <lang value='ru'>Шрифт Codebox</lang>
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
                        <code name='HTML'>{`<div className='box'>
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
</script>`}</code>
                        <lang value='en'>Indentation space</lang>
                        <lang value='vi'>Khoảng cách thụt dòng</lang>
                        <lang value='fr'>Espace d&apos;indentation</lang>
                        <lang value='it'>spazio di rientro</lang>
                        <lang value='kr'>들여쓰기 공간</lang>
                        <lang value='ja'>インデントスペース</lang>
                        <lang value='de'>Einrückungsraum</lang>
                        <lang value='nl'>Inspringingsruimte</lang>
                        <lang value='dk'>Indrykningsafstand</lang>
                        <lang value='pt'>Espaço de recuo</lang>
                        <lang value='es'>Espacio de indentación</lang>
                        <lang value='ru'>Пространство отступа</lang>
                        <input name='indent' type='range' min='1' max='6' step='1' df-value='2'/>
                        <button className='primary'>
                            <lang value='en'>Save changes</lang>
                            <lang value='vi'>Lưu thay đổi</lang>
                            <lang value='fr'>Enregistrer les modifications</lang>
                            <lang value='it'>Salvare le modifiche</lang>
                            <lang value='kr'>변경 사항 저장</lang>
                            <lang value='ja'>変更を保存</lang>
                            <lang value='de'>Änderungen speichern</lang>
                            <lang value='nl'>Wijzigingen opslaan</lang>
                            <lang value='dk'>Gem ændringer</lang>
                            <lang value='pt'>Guardar alterações</lang>
                            <lang value='es'>Guardar cambios</lang>
                            <lang value='ru'>Сохранить изменения</lang>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}