export default function Search() {
    return (
        <>
            <div class='modal confirm' id='choose-layers'>
                <div>
                    <h3>
                        <lang value='en'>Select layer(s) to download</lang>
                        <lang value='vi'>Chọn (các) lớp để tải xuống</lang>
                        <lang value='fr'>Sélectionnez la/les couche(s) à télécharger</lang>
                        <lang value='it'>Seleziona il/i layer da scaricare</lang>
                        <lang value='kr'>다운로드할 레이어 선택</lang>
                        <lang value='ja'>ダウンロードするレイヤーを選択</lang>
                        <lang value='de'>Wählen Sie die Ebene(n) zum Herunterladen aus</lang>
                        <lang value='nl'>Selecteer laag/lagen om te downloaden</lang>
                        <lang value='dk'>Vælg lag til download</lang>
                        <lang value='pt'>Selecione camada(s) para download</lang>
                        <lang value='es'>Seleccione capa(s) para descargar</lang>
                        <lang value='ru'>Выберите слой(и) для загрузки</lang>
                    </h3>
                    <p>
                        <lang value='en'>Download selected layer(s) as <b></b></lang>
                        <lang value='vi'>Tải xuống lớp đã chọn dưới dạng <b></b></lang>
                        <lang value='fr'>Télécharger la/les couche(s) sélectionnée(s) en tant que <b></b></lang>
                        <lang value='it'>Scarica il/i layer selezionato/i come <b></b></lang>
                        <lang value='kr'>선택한 레이어를 다음 형식으로 다운로드 <b></b></lang>
                        <lang value='ja'>選択したレイヤーを次の形式でダウンロード <b></b></lang>
                        <lang value='de'>Ausgewählte Ebene(n) herunterladen als <b></b></lang>
                        <lang value='nl'>Download geselecteerde laag/lagen als <b></b></lang>
                        <lang value='dk'>Download valgte lag som <b></b></lang>
                        <lang value='pt'>Baixar camada(s) selecionada(s) como <b></b></lang>
                        <lang value='es'>Descargar capa(s) seleccionada(s) como <b></b></lang>
                        <lang value='ru'>Скачать выбранный(е) слой(и) как <b></b></lang>
                    </p>
                    <div class='checkboxes'>
                        <label>
                            <input type='checkbox' value='pri'/><div class='checkmark'></div>Primary
                        </label>
                        <label>
                            <input type='checkbox' value='sec'/><div class='checkmark'></div>Secondary
                        </label>
                    </div>
                    <div>
                        <a href='javascript:void(0)' class='btn secondary'>
                            <lang value='en'>Cancel</lang>
                            <lang value='vi'>Hủy</lang>
                            <lang value='fr'>Annuler</lang>
                            <lang value='it'>Cancellare</lang>
                            <lang value='kr'>취소</lang>
                            <lang value='ja'>キャンセル</lang>
                            <lang value='de'>Stornieren</lang>
                            <lang value='nl'>Annuleren</lang>
                            <lang value='dk'>Ophæve</lang>
                            <lang value='pt'>Cancelar</lang>
                            <lang value='es'>Cancelar</lang>
                            <lang value='ru'>Отмена</lang>
                        </a>
                        <a href='javascript:void(0)' class='btn primary'>
                            <lang value='en'>Download</lang>
                            <lang value='vi'>Tải xuống</lang>
                            <lang value='fr'>Télécharger</lang>
                            <lang value='it'>Scaricamento</lang>
                            <lang value='kr'>다운로드</lang>
                            <lang value='ja'>ダウンロード</lang>
                            <lang value='de'>Herunterladen</lang>
                            <lang value='nl'>Download</lang>
                            <lang value='dk'>Download</lang>
                            <lang value='pt'>Transferir</lang>
                            <lang value='es'>Descargar</lang>
                            <lang value='ru'>Скачать</lang>
                        </a>
                    </div>
                </div>
            </div>
            {/* <ins class='adsbygoogle' style='display:block' data-ad-client='ca-pub-8532596750508498' data-ad-slot='2221389210' data-ad-format='auto' data-full-width-responsive='true'></ins> */}
            <div class='banner blue signup'>
                <div>
                    <lang value='en'>Enjoy free icons - sign up to access the entire set!</lang>
                    <lang value='vi'>Thưởng thức các biểu tượng miễn phí - đăng ký để truy cập toàn bộ bộ sưu tập</lang>
                    <lang value='fr'>Profitez des icônes gratuites - inscrivez-vous pour tout débloquer !</lang>
                    <lang value='it'>Goditi le icone gratuite - registrati per accedere all’intera collezione!</lang>
                    <lang value='kr'>무료 아이콘을 즐기세요 - 전체 세트를 이용하려면 가입하세요!</lang>
                    <lang value='ja'>無料アイコンを楽しもう - 全セットを使うには登録が必要です！</lang>
                    <lang value='de'>Kostenlose Icons genießen - registriere dich für das komplette Set!</lang>
                    <lang value='nl'>Geniet van gratis iconen - meld je aan om de hele set te gebruiken!</lang>
                    <lang value='dk'>Nyd gratis ikoner - tilmeld dig for adgang til hele samlingen!</lang>
                    <lang value='pt'>Aproveite os ícones gratuitos - inscreva-se para acessar o conjunto completo!</lang>
                    <lang value='es'>Disfruta de iconos gratis - regístrate para acceder al conjunto completo!</lang>
                    <lang value='ru'>Наслаждайтесь бесплатными иконками - зарегистрируйтесь для доступа ко всем!</lang>
                    <a href='/p/sign-up.html' class='btn'>
                        <lang value='en'>Sign up</lang>
                        <lang value='vi'>Đăng ký</lang>
                        <lang value='fr'>S'inscrire</lang>
                        <lang value='it'>Iscrizione</lang>
                        <lang value='kr'>가입하기</lang>
                        <lang value='ja'>サインアップ</lang>
                        <lang value='de'>Melden Sie sich an</lang>
                        <lang value='nl'>Aanmelden</lang>
                        <lang value='dk'>Tilmelde</lang>
                        <lang value='pt'>Inscrever-se</lang>
                        <lang value='es'>Inscribirse</lang>
                        <lang value='ru'>Зарегистрироваться</lang>
                    </a>
                </div>
            </div>
            <div id='top' class='outer-corner'>
                <label>
                    <f-icon icon='magnifying-glass' i-s='outline'></f-icon>
                    <input {...{
                        'lang:en-placeholder': 'Find the perfect icon for your next masterpiece…',
                        'lang:vi-placeholder': 'Tìm biểu tượng hoàn hảo cho kiệt tác tiếp theo của bạn…',
                        'lang:fr-placeholder': "Trouvez l'icône parfaite pour votre prochaine création…",
                        'lang:it-placeholder': "Trova l'icona perfetta per il tuo prossimo capolavoro…",
                        'lang:kr-placeholder': '다음 작품을 위한 완벽한 아이콘을 찾아보세요…',
                        'lang:ja-placeholder': '次の傑作にぴったりのアイコンを見つけましょう…',
                        'lang:de-placeholder': 'Finden Sie das perfekte Icon für Ihr nächstes Meisterwerk…',
                        'lang:nl-placeholder': 'Vind het perfecte icoon voor je volgende meesterwerk…',
                        'lang:dk-placeholder': 'Find det perfekte ikon til dit næste mesterværk…',
                        'lang:pt-placeholder': 'Encontre o ícone perfeito para sua próxima obra-prima…',
                        'lang:es-placeholder': 'Encuentra el icono perfecto para tu próxima obra maestra…',
                        'lang:ru-placeholder': 'Найдите идеальную иконку для вашего следующего шедевра…',
                    }}/>
                </label>
                <f-select>
                    <text></text>
                    <option-list>
                    <f-option value='b2'>Beta 2+</f-option>
                    <f-option value='b1'>Beta 1.7.5</f-option>
                    </option-list>
                </f-select>
                <div id='options'>
                    <ul class='btn-list line-active' id='top_options_families'>
                    <li data-value='all'>
                        <lang value='en'>All</lang>
                        <lang value='vi'>Tất cả</lang>
                        <lang value='fr'>Tout</lang>
                        <lang value='it'>Tutto</lang>
                        <lang value='kr'>모두</lang>
                        <lang value='ja'>全て</lang>
                        <lang value='de'>Alle</lang>
                        <lang value='nl'>Alle</lang>
                        <lang value='dk'>Alle</lang>
                        <lang value='pt'>Tudo</lang>
                        <lang value='es'>Todo</lang>
                        <lang value='ru'>Все</lang>
                    </li>
                    <li data-value='regular'>
                        <lang value='en'>Regular</lang>
                        <lang value='vi'>Thường</lang>
                        <lang value='fr'>Régulier</lang>
                        <lang value='it'>Regolare</lang>
                        <lang value='kr'>정기적인</lang>
                        <lang value='ja'>通常</lang>
                        <lang value='de'>Regulär</lang>
                        <lang value='nl'>Normaal</lang>
                        <lang value='dk'>Fast</lang>
                        <lang value='pt'>Regular</lang>
                        <lang value='es'>Regular</lang>
                        <lang value='ru'>Обычный</lang>
                    </li>
                    <li data-value='duotone'>
                        <lang value='en'>Duotone</lang>
                        <lang value='vi'>Duotone</lang>
                        <lang value='fr'>Bichromie</lang>
                        <lang value='it'>Duotone</lang>
                        <lang value='kr'>듀오톤</lang>
                        <lang value='ja'>デュオトーン</lang>
                        <lang value='de'>Duotone</lang>
                        <lang value='nl'>Duotoon</lang>
                        <lang value='dk'>Duotone</lang>
                        <lang value='pt'>Duotónico</lang>
                        <lang value='es'>Duotono</lang>
                        <lang value='ru'>Дуотон</lang>
                    </li>
                    </ul>
                    <ul class='btn-list line-active line' id='top_options_styles'>
                    <li data-value='all'>
                        <lang value='en'>All</lang>
                        <lang value='vi'>Tất cả</lang>
                        <lang value='fr'>Tout</lang>
                        <lang value='it'>Tutto</lang>
                        <lang value='kr'>모두</lang>
                        <lang value='ja'>全て</lang>
                        <lang value='de'>Alle</lang>
                        <lang value='nl'>Alle</lang>
                        <lang value='dk'>Alle</lang>
                        <lang value='pt'>Tudo</lang>
                        <lang value='es'>Todo</lang>
                        <lang value='ru'>Все</lang>
                    </li>
                    <li data-value='solid'>
                        <lang value='en'>Solid</lang>
                        <lang value='vi'>Đặc</lang>
                        <lang value='fr'>Solide</lang>
                        <lang value='it'>Solido</lang>
                        <lang value='kr'>단단한</lang>
                        <lang value='ja'>固体</lang>
                        <lang value='de'>Solide</lang>
                        <lang value='nl'>Stevig</lang>
                        <lang value='dk'>Solid</lang>
                        <lang value='pt'>Sólido</lang>
                        <lang value='es'>Sólido</lang>
                        <lang value='ru'>Твердый</lang>
                    </li>
                    <li data-value='outline'>
                        <lang value='en'>Outline</lang>
                        <lang value='vi'>Đường viền</lang>
                        <lang value='fr'>Contour</lang>
                        <lang value='it'>Contorno</lang>
                        <lang value='kr'>개요</lang>
                        <lang value='ja'>概要</lang>
                        <lang value='de'>Gliederung</lang>
                        <lang value='nl'>Overzicht</lang>
                        <lang value='dk'>Omrids</lang>
                        <lang value='pt'>Delimitar</lang>
                        <lang value='es'>Describir</lang>
                        <lang value='ru'>Контур</lang>
                    </li>
                    </ul>
                    <ul class='btn-list line-active' id='top_options_views'>
                    <li name='large' class='chip top'>
                        <f-icon icon='grid-4'></f-icon>
                        <lang value='en'>Large icons</lang>
                        <lang value='vi'>Biểu tượng lớn</lang>
                        <lang value='fr'>Grandes icônes</lang>
                        <lang value='it'>Icone grandi</lang>
                        <lang value='kr'>큰 아이콘</lang>
                        <lang value='ja'>大きなアイコン</lang>
                        <lang value='de'>Große Symbole</lang>
                        <lang value='nl'>Grote iconen</lang>
                        <lang value='dk'>Store ikoner</lang>
                        <lang value='pt'>Ícones grandes</lang>
                        <lang value='es'>Iconos grandes</lang>
                        <lang value='ru'>Большие значки</lang>
                    </li>
                    <li name='small' class='chip top'>
                        <f-icon icon='grid-9'></f-icon>
                        <lang value='en'>Small icons</lang>
                        <lang value='vi'>Biểu tượng nhỏ</lang>
                        <lang value='fr'>Petites icônes</lang>
                        <lang value='it'>Piccole icone</lang>
                        <lang value='kr'>작은 아이콘</lang>
                        <lang value='ja'>小さいアイコン</lang>
                        <lang value='de'>Kleine Symbole</lang>
                        <lang value='nl'>Kleine iconen</lang>
                        <lang value='dk'>Små ikoner</lang>
                        <lang value='pt'>Ícones pequenos</lang>
                        <lang value='es'>Iconos pequeños</lang>
                        <lang value='ru'>Маленькие значки</lang>
                    </li>
                    <li name='tiles' class='chip top'>
                        <f-icon icon='list' i-s='outline'></f-icon>
                        <lang value='en'>Tiles</lang>
                        <lang value='vi'>Ô gạch</lang>
                        <lang value='fr'>Carrelage</lang>
                        <lang value='it'>Piastrelle</lang>
                        <lang value='kr'>타일</lang>
                        <lang value='ja'>タイル</lang>
                        <lang value='de'>Fliesen</lang>
                        <lang value='nl'>Tegels</lang>
                        <lang value='dk'>Fliser</lang>
                        <lang value='pt'>Azulejos</lang>
                        <lang value='es'>Azulejos</lang>
                        <lang value='ru'>Плитка</lang>
                    </li>
                    </ul>
                </div>
            </div>
            <div id='main'>
                <h5>
                    <lang value='en'>Categories</lang>
                    <lang value='vi'>Thể loại</lang>
                    <lang value='fr'>Catégories</lang>
                    <lang value='it'>Categorie</lang>
                    <lang value='kr'>카테고리</lang>
                    <lang value='ja'>カテゴリー</lang>
                    <lang value='de'>Kategorien</lang>
                    <lang value='nl'>Categorieën</lang>
                    <lang value='dk'>Kategorier</lang>
                    <lang value='pt'>Categorias</lang>
                    <lang value='es'>Categorías</lang>
                    <lang value='ru'>Категории</lang>
                </h5>
                <h5>
                    <lang value='en'>Showing <span></span> results</lang>
                    <lang value='vi'>Đang hiển thị <span></span> kết quả</lang>
                    <lang value='fr'>Affichage de <span></span> résultats</lang>
                    <lang value='it'>Visualizzazione di <span></span> risultati</lang>
                    <lang value='kr'><span></span> 개의 결과 표시 중</lang>
                    <lang value='ja'><span></span> 件の結果を表示</lang>
                    <lang value='de'>Zeigt <span></span> ergebnisse</lang>
                    <lang value='nl'>Er worden <span></span> resultaten weergegeven</lang>
                    <lang value='dk'>Viser <span></span> resultater</lang>
                    <lang value='pt'>Mostrando <span></span> resultados</lang>
                    <lang value='es'>Mostrando <span></span> resultados</lang>
                    <lang value='ru'>Показано <span></span> результата</lang>
                </h5>
                <ul class='btn-list vertical' id='categories'></ul>
                <div>
                    <ul id='results'></ul>
                    <ul class='btn-list line-active top' id='pages'></ul>
                </div>
            </div>
            <div id='bar'>
            <h6></h6>
            <div id='bar_code'>
                <lang value='en'>Code <f-icon icon='circle-info'></f-icon>:</lang>
                <lang value='vi'>Mã <f-icon icon='circle-info'></f-icon>:</lang>
                <lang value='fr'>Code <f-icon icon='circle-info'></f-icon>:</lang>
                <lang value='it'>Codice <f-icon icon='circle-info'></f-icon>:</lang>
                <lang value='kr'>암호 <f-icon icon='circle-info'></f-icon>:</lang>
                <lang value='ja'>コード <f-icon icon='circle-info'></f-icon>:</lang>
                <lang value='de'>Code <f-icon icon='circle-info'></f-icon>:</lang>
                <lang value='nl'>Code <f-icon icon='circle-info'></f-icon>:</lang>
                <lang value='dk'>Kode <f-icon icon='circle-info'></f-icon>:</lang>
                <lang value='pt'>Código <f-icon icon='circle-info'></f-icon>:</lang>
                <lang value='es'>Código <f-icon icon='circle-info'></f-icon>:</lang>
                <lang value='ru'>Код <f-icon icon='circle-info'></f-icon>:</lang>
                <code></code>
            </div>
            <div id='bar_glyphs'>
                <lang value='en'>Glyphs:</lang>
                <lang value='vi'>Glyph:</lang>
                <lang value='fr'>Glyphes:</lang>
                <lang value='it'>Glifi:</lang>
                <lang value='kr'>글리프:</lang>
                <lang value='ja'>グリフ:</lang>
                <lang value='de'>Glyphen:</lang>
                <lang value='nl'>Tekens:</lang>
                <lang value='dk'>Glyffer:</lang>
                <lang value='pt'>Glifos:</lang>
                <lang value='es'>Glifos:</lang>
                <lang value='ru'>Глифы:</lang>
                <div>
                    <div name='Primary'></div>
                    <div name='Secondary'></div>
                </div>
            </div>
            <div id='bar_unicodes'>
                <lang value='en'>Unicodes:</lang>
                <lang value='vi'>Unicode:</lang>
                <lang value='fr'>Unicodes:</lang>
                <lang value='it'>Unicode:</lang>
                <lang value='kr'>유니코드:</lang>
                <lang value='ja'>ユニコード:</lang>
                <lang value='de'>Unicodes:</lang>
                <lang value='nl'>Unicodes:</lang>
                <lang value='dk'>Unicodes:</lang>
                <lang value='pt'>Unicodes:</lang>
                <lang value='es'>Unicodes:</lang>
                <lang value='ru'>Юникоды:</lang>
                <div>
                    <div name='Primary'></div>
                    <div name='Secondary'></div>
                </div>
            </div>
            <div id='bar_categories'>
                <lang value='en'>Categories:</lang>
                <lang value='vi'>Thể loại:</lang>
                <lang value='fr'>Catégories:</lang>
                <lang value='it'>Categorie:</lang>
                <lang value='kr'>카테고리:</lang>
                <lang value='ja'>カテゴリー:</lang>
                <lang value='de'>Kategorien:</lang>
                <lang value='nl'>Categorieën:</lang>
                <lang value='dk'>Kategorier:</lang>
                <lang value='pt'>Categorias:</lang>
                <lang value='es'>Categorías:</lang>
                <lang value='ru'>Категории:</lang>
                <ul class='btn-list'></ul>
            </div>
            <div id='bar_download'>
                <lang value='en'>Download:</lang>
                <lang value='vi'>Tải xuống:</lang>
                <lang value='fr'>Télécharger:</lang>
                <lang value='it'>Scaricamento:</lang>
                <lang value='kr'>다운로드:</lang>
                <lang value='ja'>ダウンロード:</lang>
                <lang value='de'>Herunterladen:</lang>
                <lang value='nl'>Download:</lang>
                <lang value='dk'>Download:</lang>
                <lang value='pt'>Transferir:</lang>
                <lang value='es'>Descargar:</lang>
                <lang value='ru'>Скачать:</lang>
                <ul class='btn-list'>
                    <li name='svg'>SVG</li>
                    <li name='png'>PNG</li>
                    <li name='webp'>WebP</li>
                </ul>
            </div>
            </div>
        </>
    )
}