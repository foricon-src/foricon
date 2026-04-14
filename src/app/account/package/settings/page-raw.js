'use client'

import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";
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
                        <lang value='en'>Package settings</lang>
                        <lang value='vi'>Cài đặt gói</lang>
                        <lang value='fr'>Paramètres du package</lang>
                        <lang value='it'>Impostazioni del pacchetto</lang>
                        <lang value='kr'>패키지 설정</lang>
                        <lang value='ja'>パッケージ設定</lang>
                        <lang value='de'>Paketeinstellungen</lang>
                        <lang value='nl'>Pakketinstellingen</lang>
                        <lang value='dk'>Pakkeindstillinger</lang>
                        <lang value='pt'>Configurações do pacote</lang>
                        <lang value='es'>Configuración del paquete</lang>
                        <lang value='ru'>Настройки пакета</lang>
                    </h3>
                    <form>
                        <lang value='en'>Version</lang>
                        <lang value='vi'>Phiên bản</lang>
                        <lang value='fr'>Option de rendu</lang>
                        <lang value='it'>Opzione di rendering</lang>
                        <lang value='kr'>렌더링 옵션</lang>
                        <lang value='ja'>レンダリングオプション</lang>
                        <lang value='de'>Rendering-Option</lang>
                        <lang value='nl'>Rendering-optie</lang>
                        <lang value='dk'>Mulighed for gengivelse</lang>
                        <lang value='pt'>Opção de renderização</lang>
                        <lang value='es'>Opción de renderizado</lang>
                        <lang value='ru'>Вариант рендеринга</lang>
                        <f-select name='versions' multiple required>
                            <text></text>
                            <option-list>
                            <f-option value='b1'>Beta 1.7.5</f-option>
                            <f-option value='b2'>Beta 2+ (TTF)</f-option>
                            <f-option value='b2w2'>Beta 2+ (WOFF2)</f-option>
                            </option-list>
                        </f-select>
                        <lang value='en'>Rendering option</lang>
                        <lang value='vi'>Tùy chọn kết xuất</lang>
                        <lang value='fr'>Option de rendu</lang>
                        <lang value='it'>Opzione di rendering</lang>
                        <lang value='kr'>렌더링 옵션</lang>
                        <lang value='ja'>レンダリングオプション</lang>
                        <lang value='de'>Rendering-Option</lang>
                        <lang value='nl'>Rendering-optie</lang>
                        <lang value='dk'>Mulighed for gengivelse</lang>
                        <lang value='pt'>Opção de renderização</lang>
                        <lang value='es'>Opción de renderizado</lang>
                        <lang value='ru'>Вариант рендеринга</lang>
                        <f-select name='rendering-option'>
                            <text></text>
                            <option-list>
                            <f-option value='performance'>
                                <lang value='en'>Performance</lang>
                                <lang value='vi'>Hiệu suất</lang>
                                <lang value='fr'>Performance</lang>
                                <lang value='it'>Prestazione</lang>
                                <lang value='kr'>성능</lang>
                                <lang value='ja'>パフォーマンス</lang>
                                <lang value='de'>Leistung</lang>
                                <lang value='nl'>Prestatie</lang>
                                <lang value='dk'>Ydeevne</lang>
                                <lang value='pt'>Desempenho</lang>
                                <lang value='es'>Actuación</lang>
                                <lang value='ru'>Производительность</lang>
                            </f-option>
                            <f-option value='precision'>
                                <lang value='en'>Precision</lang>
                                <lang value='vi'>Chính xác</lang>
                                <lang value='fr'>Précision</lang>
                                <lang value='it'>Precisione</lang>
                                <lang value='kr'>정도</lang>
                                <lang value='ja'>精度</lang>
                                <lang value='de'>Präzision</lang>
                                <lang value='nl'>Precisie</lang>
                                <lang value='dk'>Præcision</lang>
                                <lang value='pt'>Precisão</lang>
                                <lang value='es'>Precisión</lang>
                                <lang value='ru'>Точность</lang>
                            </f-option>
                            </option-list>
                        </f-select>
                        <lang value='en'>Allowed domains</lang>
                        <lang value='vi'>Tên miền được phép</lang>
                        <lang value='fr'>Domaines autorisés</lang>
                        <lang value='it'>Domini consentiti</lang>
                        <lang value='kr'>허용된 도메인</lang>
                        <lang value='ja'>許可されたドメイン</lang>
                        <lang value='de'>Erlaubte Domänen</lang>
                        <lang value='nl'>Toegestane domeinen</lang>
                        <lang value='dk'>Tilladte domæner</lang>
                        <lang value='pt'>Domínios permitidos</lang>
                        <lang value='es'>Dominios permitidos</lang>
                        <lang value='ru'>Разрешенные домены</lang>
                        <ul className='btn-list vertical' name='domains'>
                            <li>
                            <f-icon icon='plus' i-s='outline'></f-icon>
                            <lang value='en'>Add a domain</lang>
                            <lang value='vi'>Thêm tên miền</lang>
                            <lang value='fr'>Ajouter un domaine</lang>
                            <lang value='it'>Aggiungi un dominio</lang>
                            <lang value='kr'>도메인 추가</lang>
                            <lang value='ja'>ドメインを追加する</lang>
                            <lang value='de'>Hinzufügen einer Domäne</lang>
                            <lang value='nl'>Een domein toevoegen</lang>
                            <lang value='dk'>Tilføj et domæne</lang>
                            <lang value='pt'>Adicionar um domínio</lang>
                            <lang value='es'>Agregar un dominio</lang>
                            <lang value='ru'>Добавить домен</lang>
                            </li>
                        </ul>
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