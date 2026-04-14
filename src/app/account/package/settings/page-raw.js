import { useRouter } from "next/navigation";
import Sidebar from "Pag/account/sidebar";
import { Lang } from "Com/language";
import 'Pag/sidebar-page.css';
import './page.css';

export default function Page() {
    let router = useRouter();

    return (
        <div id='sidebar-page'>
            <Sidebar/>
            <div>
                <div name='package/settings'>
                    <h3>
                        <Lang value='en'>Package settings</Lang>
                        <Lang value='vi'>Cài đặt gói</Lang>
                        <Lang value='fr'>Paramètres du package</Lang>
                        <Lang value='it'>Impostazioni del pacchetto</Lang>
                        <Lang value='kr'>패키지 설정</Lang>
                        <Lang value='ja'>パッケージ設定</Lang>
                        <Lang value='de'>Paketeinstellungen</Lang>
                        <Lang value='nl'>Pakketinstellingen</Lang>
                        <Lang value='dk'>Pakkeindstillinger</Lang>
                        <Lang value='pt'>Configurações do pacote</Lang>
                        <Lang value='es'>Configuración del paquete</Lang>
                        <Lang value='ru'>Настройки пакета</Lang>
                    </h3>
                    <form>
                        <Lang value='en'>Version</Lang>
                        <Lang value='vi'>Phiên bản</Lang>
                        <Lang value='fr'>Option de rendu</Lang>
                        <Lang value='it'>Opzione di rendering</Lang>
                        <Lang value='kr'>렌더링 옵션</Lang>
                        <Lang value='ja'>レンダリングオプション</Lang>
                        <Lang value='de'>Rendering-Option</Lang>
                        <Lang value='nl'>Rendering-optie</Lang>
                        <Lang value='dk'>Mulighed for gengivelse</Lang>
                        <Lang value='pt'>Opção de renderização</Lang>
                        <Lang value='es'>Opción de renderizado</Lang>
                        <Lang value='ru'>Вариант рендеринга</Lang>
                        <f-select name='versions' multiple required>
                            <text></text>
                            <option-list>
                            <f-option value='b1'>Beta 1.7.5</f-option>
                            <f-option value='b2'>Beta 2+ (TTF)</f-option>
                            <f-option value='b2w2'>Beta 2+ (WOFF2)</f-option>
                            </option-list>
                        </f-select>
                        <Lang value='en'>Rendering option</Lang>
                        <Lang value='vi'>Tùy chọn kết xuất</Lang>
                        <Lang value='fr'>Option de rendu</Lang>
                        <Lang value='it'>Opzione di rendering</Lang>
                        <Lang value='kr'>렌더링 옵션</Lang>
                        <Lang value='ja'>レンダリングオプション</Lang>
                        <Lang value='de'>Rendering-Option</Lang>
                        <Lang value='nl'>Rendering-optie</Lang>
                        <Lang value='dk'>Mulighed for gengivelse</Lang>
                        <Lang value='pt'>Opção de renderização</Lang>
                        <Lang value='es'>Opción de renderizado</Lang>
                        <Lang value='ru'>Вариант рендеринга</Lang>
                        <f-select name='rendering-option'>
                            <text></text>
                            <option-list>
                            <f-option value='performance'>
                                <Lang value='en'>Performance</Lang>
                                <Lang value='vi'>Hiệu suất</Lang>
                                <Lang value='fr'>Performance</Lang>
                                <Lang value='it'>Prestazione</Lang>
                                <Lang value='kr'>성능</Lang>
                                <Lang value='ja'>パフォーマンス</Lang>
                                <Lang value='de'>Leistung</Lang>
                                <Lang value='nl'>Prestatie</Lang>
                                <Lang value='dk'>Ydeevne</Lang>
                                <Lang value='pt'>Desempenho</Lang>
                                <Lang value='es'>Actuación</Lang>
                                <Lang value='ru'>Производительность</Lang>
                            </f-option>
                            <f-option value='precision'>
                                <Lang value='en'>Precision</Lang>
                                <Lang value='vi'>Chính xác</Lang>
                                <Lang value='fr'>Précision</Lang>
                                <Lang value='it'>Precisione</Lang>
                                <Lang value='kr'>정도</Lang>
                                <Lang value='ja'>精度</Lang>
                                <Lang value='de'>Präzision</Lang>
                                <Lang value='nl'>Precisie</Lang>
                                <Lang value='dk'>Præcision</Lang>
                                <Lang value='pt'>Precisão</Lang>
                                <Lang value='es'>Precisión</Lang>
                                <Lang value='ru'>Точность</Lang>
                            </f-option>
                            </option-list>
                        </f-select>
                        <Lang value='en'>Allowed domains</Lang>
                        <Lang value='vi'>Tên miền được phép</Lang>
                        <Lang value='fr'>Domaines autorisés</Lang>
                        <Lang value='it'>Domini consentiti</Lang>
                        <Lang value='kr'>허용된 도메인</Lang>
                        <Lang value='ja'>許可されたドメイン</Lang>
                        <Lang value='de'>Erlaubte Domänen</Lang>
                        <Lang value='nl'>Toegestane domeinen</Lang>
                        <Lang value='dk'>Tilladte domæner</Lang>
                        <Lang value='pt'>Domínios permitidos</Lang>
                        <Lang value='es'>Dominios permitidos</Lang>
                        <Lang value='ru'>Разрешенные домены</Lang>
                        <ul className='btn-list vertical' name='domains'>
                            <li>
                            <f-icon icon='plus' i-s='outline'></f-icon>
                            <Lang value='en'>Add a domain</Lang>
                            <Lang value='vi'>Thêm tên miền</Lang>
                            <Lang value='fr'>Ajouter un domaine</Lang>
                            <Lang value='it'>Aggiungi un dominio</Lang>
                            <Lang value='kr'>도메인 추가</Lang>
                            <Lang value='ja'>ドメインを追加する</Lang>
                            <Lang value='de'>Hinzufügen einer Domäne</Lang>
                            <Lang value='nl'>Een domein toevoegen</Lang>
                            <Lang value='dk'>Tilføj et domæne</Lang>
                            <Lang value='pt'>Adicionar um domínio</Lang>
                            <Lang value='es'>Agregar un dominio</Lang>
                            <Lang value='ru'>Добавить домен</Lang>
                            </li>
                        </ul>
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