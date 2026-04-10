globalThis.webData = {
    isBeta: true,
    verNum: '3.0',
    get verFull() {
        return (this.isBeta ? 'Beta ' : '') + this.verNum
    },
    icons: [],
    iconsB2: [],
    categories: {
        accessibility: {
            icon: "<f-icon icon='eye'/>",
            en: 'Accessibility',
            vi: 'Khả năng truy cập',
            fr: 'Accessibilité',
            it: 'Accessibilità',
            kr: '접근성',
            ja: 'アクセシビリティ',
            de: 'Barrierefreiheit',
            nl: 'Toegankelijkheid',
            dk: 'Tilgængelighed',
            pt: 'Acessibilidade',
            es: 'Accesibilidad',
            ru: 'Доступность',
        },
        alert: {
            icon: "<f-icon icon='bell'/>",
            en: 'Alert',
            vi: 'Cảnh báo',
            fr: 'Alerte',
            it: 'Avviso',
            kr: '알림',
            ja: 'アラート',
            de: 'Warnung',
            nl: 'Waarschuwing',
            dk: 'Advarsel',
            pt: 'Alerta',
            es: 'Alerta',
            ru: 'Оповещение',
        },
        arrows: {
            icon: "<f-icon i-s='outline' icon='arrows-repeat'/>",
            en: 'Arrows',
            vi: 'Mũi tên',
            fr: 'Flèches',
            it: 'Frecce',
            kr: '화살표',
            ja: '矢印',
            de: 'Pfeile',
            nl: 'Pijlen',
            dk: 'Pile',
            pt: 'Setas',
            es: 'Flechas',
            ru: 'Стрелки',
        },
        automotive: {
            icon: "<f-icon icon='gauge-5'/>",
            en: 'Automotive',
            vi: 'Ngành ô tô',
            fr: 'Automobile',
            it: 'Automobilistico',
            kr: '자동차 산업',
            ja: '自動車',
            de: 'Automobilindustrie',
            nl: 'Automobiel',
            dk: 'Bilindustrien',
            pt: 'Automotivo',
            es: 'Automotor',
            ru: 'Автомобильная промышленность',
        },
        astronomy: {
            icon: "<f-icon icon='star'/>",
            en: 'Astronomy',
            vi: 'Thiên văn học',
            fr: 'Astronomie',
            it: 'Astronomia',
            kr: '천문학',
            ja: '天文学',
            de: 'Astronomie',
            nl: 'Astronomie',
            dk: 'Astronomi',
            pt: 'Astronomia',
            es: 'Astronomía',
            ru: 'Астрономия',
        },
        buildings: {
            icon: "<f-icon icon='house'/>",
            en: 'Buildings',
            vi: 'Công trình',
            fr: 'Bâtiments',
            it: 'Edifici',
            kr: '건물',
            ja: '建物',
            de: 'Gebäude',
            nl: 'Gebouwen',
            dk: 'Bygninger',
            pt: 'Edifícios',
            es: 'Edificios',
            ru: 'Здания',
        },
        business: {
            icon: "<f-icon icon='briefcase'/>",
            en: 'Business',
            vi: 'Kinh doanh',
            fr: 'Affaires',
            it: 'Affari',
            kr: '비즈니스',
            ja: 'ビジネス',
            de: 'Geschäft',
            nl: 'Zakelijk',
            dk: 'Forretning',
            pt: 'Negócios',
            es: 'Negocios',
            ru: 'Бизнес',
        },
        coding: {
            icon: "<f-icon i-s='outline' icon='code'/>",
            en: 'Coding',
            vi: 'Lập trình',
            fr: 'Codage',
            it: 'Programmazione',
            kr: '코딩',
            ja: 'コーディング',
            de: 'Programmierung',
            nl: 'Coderen',
            dk: 'Kodning',
            pt: 'Programação',
            es: 'Programación',
            ru: 'Кодирование',
        },
        communication: {
            icon: "<f-icon icon='comment'/>",
            en: 'Communication',
            vi: 'Giao tiếp',
            fr: 'Communication',
            it: 'Comunicazione',
            kr: '의사소통',
            ja: 'コミュニケーション',
            de: 'Kommunikation',
            nl: 'Communicatie',
            dk: 'Kommunikation',
            pt: 'Comunicação',
            es: 'Comunicación',
            ru: 'Общение',
        },
        connectivity: {
            icon: "<f-icon i-s='outline' icon='wifi'/>",
            en: 'Connectivity',
            vi: 'Kết nối',
            fr: 'Connectivité',
            it: 'Connettività',
            kr: '연결',
            ja: '接続',
            de: 'Konnektivität',
            nl: 'Connectiviteit',
            dk: 'Forbindelse',
            pt: 'Conectividade',
            es: 'Conectividad',
            ru: 'Связь',
        },
        construction: {
            icon: "<f-icon icon='helmet-safety'/>",
            en: 'Construction',
            vi: 'Xây dựng',
            fr: 'Construction',
            it: 'Costruzione',
            kr: '건설',
            ja: '建設',
            de: 'Bauwesen',
            nl: 'Constructie',
            dk: 'Byggeri',
            pt: 'Construção',
            es: 'Construcción',
            ru: 'Строительство',
        },
        'countries+territories': {
            icon: "<f-icon icon='united-states'/>",
            en: 'Countries + Territories',
            vi: 'Quốc gia + Lãnh thổ',
            fr: 'Pays et territoires',
            it: 'Paesi e territori',
            kr: '국가 및 지역',
            ja: '国と地域',
            de: 'Länder + Territorien',
            nl: 'Landen + Gebieden',
            dk: 'Lande + Territorier',
            pt: 'Países + Territórios',
            es: 'Países + Territorios',
            ru: 'Страны + территории',
        },
        design: {
            icon: "<f-icon icon='palette'/>",
            en: 'Design',
            vi: 'Thiết kế',
            fr: 'Conception',
            it: 'Design',
            kr: '디자인',
            ja: 'デザイン',
            de: 'Design',
            nl: 'Ontwerp',
            dk: 'Design',
            pt: 'Design',
            es: 'Diseño',
            ru: 'Дизайн',
        },
        devices: {
            icon: "<f-icon icon='display'/>",
            en: 'Devices',
            vi: 'Thiết bị',
            fr: 'Appareils',
            it: 'Dispositivi',
            kr: '장치',
            ja: 'デバイス',
            de: 'Geräte',
            nl: 'Apparaten',
            dk: 'Enheder',
            pt: 'Dispositivos',
            es: 'Dispositivos',
            ru: 'Устройства',
        },
        editing: {
            icon: "<f-icon icon='pencil'/>",
            en: 'Editing',
            vi: 'Chỉnh sửa',
            fr: 'Édition',
            it: 'Modifica',
            kr: '편집',
            ja: '編集',
            de: 'Bearbeitung',
            nl: 'Bewerken',
            dk: 'Redigering',
            pt: 'Edição',
            es: 'Edición',
            ru: 'Редактирование',
        },
        emojis: {
            icon: "<f-icon icon='face-smile'/>",
            en: 'Emojis',
            vi: 'Biểu tượng cảm xúc',
            fr: 'Émojis',
            it: 'Emoji',
            kr: '이모지',
            ja: '絵文字',
            de: 'Emojis',
            nl: 'Emoji',
            dk: 'Emoji',
            pt: 'Emojis',
            es: 'Emojis',
            ru: 'Эмодзи',
        },
        files: {
            icon: "<f-icon icon='file'/>",
            en: 'Files',
            vi: 'Tệp tin',
            fr: 'Fichiers',
            it: 'File',
            kr: '파일',
            ja: 'ファイル',
            de: 'Dateien',
            nl: 'Bestanden',
            dk: 'Filer',
            pt: 'Arquivos',
            es: 'Archivos',
            ru: 'Файлы',
        },
        'films+videos': {
            icon: "<f-icon icon='clapperboard'/>",
            en: 'Films + Videos',
            vi: 'Phim + Video',
            fr: 'Films + vidéos',
            it: 'Film + video',
            kr: '영화 + 비디오',
            ja: '映画 + ビデオ',
            de: 'Filme + Videos',
            nl: "Films + Video's",
            dk: 'Film + Videoer',
            pt: 'Filmes + Vídeos',
            es: 'Películas + Videos',
            ru: 'Фильмы + Видео',
        },
        'food+beverage': {
            icon: "<f-icon icon='mug-hot'/>",
            en: 'Food + Beverage',
            vi: 'Thực phẩm + Đồ uống',
            fr: 'Alimentation + Boissons',
            it: 'Cibo + Bevande',
            kr: '음식 + 음료',
            ja: '食品 + 飲料',
            de: 'Essen + Getränke',
            nl: 'Eten + Drinken',
            dk: 'Mad + Drikke',
            pt: 'Alimentos + Bebidas',
            es: 'Comida + Bebida',
            ru: 'Еда + Напитки',
        },
        gaming: {
            icon: "<f-icon icon='gamepad'/>",
            en: 'Gaming',
            vi: 'Trò chơi',
            fr: 'Jeux',
            it: 'Giochi',
            kr: '게임',
            ja: 'ゲーム',
            de: 'Spiele',
            nl: 'Gamen',
            dk: 'Spil',
            pt: 'Jogos',
            es: 'Juegos',
            ru: 'Игры',
        },
        hands: {
            icon: "<f-icon icon='thumb-up'/>",
            en: 'Hands',
            vi: 'Cử chỉ tay',
            fr: 'Mains',
            it: 'Mani',
            kr: '손동작',
            ja: '手のジェスチャー',
            de: 'Hände',
            nl: 'Handen',
            dk: 'Hænder',
            pt: 'Mãos',
            es: 'Manos',
            ru: 'Руки',
        },
        maps: {
            icon: "<f-icon icon='map-pin'/>",
            en: 'Maps',
            vi: 'Bản đồ',
            fr: 'Cartes',
            it: 'Mappe',
            kr: '지도',
            ja: '地図',
            de: 'Karten',
            nl: 'Kaarten',
            dk: 'Kort',
            pt: 'Mapas',
            es: 'Mapas',
            ru: 'Карты',
        },
        marketing: {
            icon: "<f-icon icon='bullhorn'/>",
            en: 'Marketing',
            vi: 'Tiếp thị',
            fr: 'Marketing',
            it: 'Marketing',
            kr: '마케팅',
            ja: 'マーケティング',
            de: 'Marketing',
            nl: 'Marketing',
            dk: 'Markedsføring',
            pt: 'Marketing',
            es: 'Marketing',
            ru: 'Маркетинг',
        },
        mathematics: {
            icon: "<f-icon i-s='outline' icon='divide'/>",
            en: 'Mathematics',
            vi: 'Toán học',
            fr: 'Mathématiques',
            it: 'Matematica',
            kr: '수학',
            ja: '数学',
            de: 'Mathematik',
            nl: 'Wiskunde',
            dk: 'Matematik',
            pt: 'Matemática',
            es: 'Matemáticas',
            ru: 'Математика',
        },
        'media-playback': {
            icon: "<f-icon icon='play'/>",
            en: 'Media playback',
            vi: 'Phát đa phương tiện',
            fr: 'Lecture multimédia',
            it: 'Riproduzione multimediale',
            kr: '미디어 재생',
            ja: 'メディア再生',
            de: 'Medienwiedergabe',
            nl: 'Media-afspelen',
            dk: 'Medieafspilning',
            pt: 'Reprodução de mídia',
            es: 'Reproducción de medios',
            ru: 'Воспроизведение медиа',
        },
        money: {
            icon: "<f-icon i-s='outline' icon='dollar'/>",
            en: 'Money',
            vi: 'Tiền',
            fr: 'Argent',
            it: 'Denaro',
            kr: '돈',
            ja: 'お金',
            de: 'Geld',
            nl: 'Geld',
            dk: 'Penge',
            pt: 'Dinheiro',
            es: 'Dinero',
            ru: 'Деньги',
        },
        'music+audio': {
            icon: "<f-icon icon='music-note'/>",
            en: 'Music + Audio',
            vi: 'Nhạc + Âm thanh',
            fr: 'Musique + Audio',
            it: 'Musica + Audio',
            kr: '음악 + 오디오',
            ja: '音楽 + オーディオ',
            de: 'Musik + Audio',
            nl: 'Muziek + Audio',
            dk: 'Musik + Lyd',
            pt: 'Música + Áudio',
            es: 'Música + Audio',
            ru: 'Музыка + Аудио',
        },
        'medical+health': {
            icon: "<f-icon icon='medbag'/>",
            en: 'Medical + Health',
            vi: 'Y tế + Sức khỏe',
            fr: 'Santé + Médical',
            it: 'Medicina + Salute',
            kr: '의료 + 건강',
            ja: '医療 + 健康',
            de: 'Medizin + Gesundheit',
            nl: 'Medisch + Gezondheid',
            dk: 'Sundhed + Medicin',
            pt: 'Saúde + Medicina',
            es: 'Salud + Medicina',
            ru: 'Медицина + Здоровье',
        },
        people: {
            icon: "<f-icon icon='user'/>",
            en: 'People',
            vi: 'Người',
            fr: 'Personnes',
            it: 'Persone',
            kr: '사람들',
            ja: '人々',
            de: 'Menschen',
            nl: 'Mensen',
            dk: 'Mennesker',
            pt: 'Pessoas',
            es: 'Personas',
            ru: 'Люди',
        },
        'photos+images': {
            icon: "<f-icon icon='image'/>",
            en: 'Photos + Images',
            vi: 'Ảnh + Hình ảnh',
            fr: 'Photos + Images',
            it: 'Foto + Immagini',
            kr: '사진 + 이미지',
            ja: '写真 + 画像',
            de: 'Fotos + Bilder',
            nl: "Foto's + Afbeeldingen",
            dk: 'Fotos + Billeder',
            pt: 'Fotos + Imagens',
            es: 'Fotos + Imágenes',
            ru: 'Фото + изображения',
        },
        security: {
            icon: "<f-icon icon='shield-half-stroke'/>",
            en: 'Security',
            vi: 'Bảo mật',
            fr: 'Sécurité',
            it: 'Sicurezza',
            kr: '보안',
            ja: 'セキュリティ',
            de: 'Sicherheit',
            nl: 'Beveiliging',
            dk: 'Sikkerhed',
            pt: 'Segurança',
            es: 'Seguridad',
            ru: 'Безопасность',
        },
        shapes: {
            icon: "<f-icon icon='diamond'/>",
            en: 'Shapes',
            vi: 'Hình dạng',
            fr: 'Formes',
            it: 'Forme',
            kr: '모양',
            ja: '形',
            de: 'Formen',
            nl: 'Vormen',
            dk: 'Former',
            pt: 'Formas',
            es: 'Formas',
            ru: 'Фигуры',
        },
        shopping: {
            icon: "<f-icon icon='cart'/>",
            en: 'Shopping',
            vi: 'Mua sắm',
            fr: 'Achats',
            it: 'Acquisti',
            kr: '쇼핑',
            ja: 'ショッピング',
            de: 'Einkaufen',
            nl: 'Winkelen',
            dk: 'Shopping',
            pt: 'Compras',
            es: 'Compras',
            ru: 'Покупки',
        },
        social: {
            icon: "<f-icon icon='paper-plane-simple'/>",
            en: 'Social',
            vi: 'Xã hội',
            fr: 'Social',
            it: 'Sociale',
            kr: '소셜',
            ja: 'ソーシャル',
            de: 'Sozial',
            nl: 'Sociaal',
            dk: 'Social',
            pt: 'Social',
            es: 'Social',
            ru: 'Социальное',
        },
        spinners: {
            icon: "<f-icon i-s='outline' icon='spinner-3p4'/>",
            en: 'Spinners',
            vi: 'Biểu tượng tải',
            fr: 'Indicateurs de chargement',
            it: 'Caricatori',
            kr: '스피너',
            ja: 'スピナー',
            de: 'Ladesymbole',
            nl: 'Laders',
            dk: 'Indlæsere',
            pt: 'Carregadores',
            es: 'Cargadores',
            ru: 'Спиннеры',
        },
        statistics: {
            icon: "<f-icon icon='chart'/>",
            en: 'Statistics',
            vi: 'Thống kê',
            fr: 'Statistiques',
            it: 'Statistiche',
            kr: '통계',
            ja: '統計',
            de: 'Statistiken',
            nl: 'Statistieken',
            dk: 'Statistik',
            pt: 'Estatísticas',
            es: 'Estadísticas',
            ru: 'Статистика',
        },
        symbols: {
            icon: "<f-icon i-s='outline' icon='hashtag'/>",
            en: 'Symbols',
            vi: 'Biểu tượng',
            fr: 'Symboles',
            it: 'Simboli',
            kr: '기호',
            ja: '記号',
            de: 'Symbole',
            nl: 'Symbolen',
            dk: 'Symboler',
            pt: 'Símbolos',
            es: 'Símbolos',
            ru: 'Символы',
        },
        'text-formatting': {
            icon: "<f-icon i-s='outline' icon='text'/>",
            en: 'Text Formatting',
            vi: 'Định dạng văn bản',
            fr: 'Mise en forme du texte',
            it: 'Formattazione del testo',
            kr: '텍스트 서식',
            ja: 'テキスト書式設定',
            de: 'Textformatierung',
            nl: 'Tekstopmaak',
            dk: 'Tekstformatering',
            pt: 'Formatação de texto',
            es: 'Formato de texto',
            ru: 'Форматирование текста',
        },
        time: {
            icon: "<f-icon icon='clock-four'/>",
            en: 'Time',
            vi: 'Thời gian',
            fr: 'Temps',
            it: 'Tempo',
            kr: '시간',
            ja: '時間',
            de: 'Zeit',
            nl: 'Tijd',
            dk: 'Tid',
            pt: 'Tempo',
            es: 'Tiempo',
            ru: 'Время',
        },
        toggles: {
            icon: "<f-icon icon='square-check'/>",
            en: 'Toggles',
            vi: 'Công tắc',
            fr: 'Commutateurs',
            it: 'Interruttori',
            kr: '토글',
            ja: 'トグル',
            de: 'Schalter',
            nl: 'Schakelaars',
            dk: 'Kontakter',
            pt: 'Alternadores',
            es: 'Interruptores',
            ru: 'Переключатели',
        },
        transportation: {
            icon: "<f-icon icon='car'/>",
            en: 'Transportation',
            vi: 'Vận tải',
            fr: 'Transport',
            it: 'Trasporto',
            kr: '교통',
            ja: '交通',
            de: 'Transport',
            nl: 'Vervoer',
            dk: 'Transport',
            pt: 'Transporte',
            es: 'Transporte',
            ru: 'Транспорт',
        },
        travel: {
            icon: "<f-icon icon='plane'/>",
            en: 'Travel',
            vi: 'Du lịch',
            fr: 'Voyage',
            it: 'Viaggio',
            kr: '여행',
            ja: '旅行',
            de: 'Reisen',
            nl: 'Reizen',
            dk: 'Rejse',
            pt: 'Viagem',
            es: 'Viaje',
            ru: 'Путешествия',
        },
        weather: {
            icon: "<f-icon icon='cloud-sun'/>",
            en: 'Weather',
            vi: 'Thời tiết',
            fr: 'Météo',
            it: 'Meteo',
            kr: '날씨',
            ja: '天気',
            de: 'Wetter',
            nl: 'Weer',
            dk: 'Vejr',
            pt: 'Clima',
            es: 'Clima',
            ru: 'Погода',
        },
        writing: {
            icon: "<f-icon icon='paragraph'/>",
            en: 'Writing',
            vi: 'Soạn thảo',
            fr: 'Écriture',
            it: 'Scrittura',
            kr: '글쓰기',
            ja: 'ライティング',
            de: 'Schreiben',
            nl: 'Schrijven',
            dk: 'Skrivning',
            pt: 'Escrita',
            es: 'Escritura',
            ru: 'Письмо',
        }
    }
}
globalThis.user = null;
globalThis.language = null;
globalThis.country = null;

/**
* Appends pairs of keys and values to a specific object
* @param {Object} target - Object to be appended
* @param {Object} data - Data to append
*/
globalThis.appendData = (target, data) => {
    for (let key in data)
        target[key] = data[key];
}
/**
* Waits for a while before continuing the task
* @param {number} s - Seconds
*/
globalThis.wait = (s) => {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}
/**
* Makes element(s) to be in active state
* @param {HTMLElement} elems - Element(s) to activate
*/
globalThis.activate = (...elems) => {
    let { body } = document;
    elems.forEach(elem => {
        if (elem.classList.contains('modal') && !document.querySelector('.modal.active')) {
            pos = window.scrollY;
            if (window.innerHeight < body.offsetHeight) {
                body.style.position = 'fixed'; 
                body.style.top = `${pos * -1}px`;
                body.style.width = '100%';
                body.style.overflow = 'hidden scroll';
            }
        }
        elem.classList.add('active');
    })
}
/**
* Removes active state from element(s)
* @param {HTMLElement} elems - Element(s) to inactivate
*/
globalThis.inactivate = (...elems) => {
    let { body } = document;
    elems.forEach(elem => {
        let html = document.documentElement;
        elem.classList.remove('active');
        if (elem.classList.contains('modal') && document.querySelectorAll('.modal.active').length == 0) {
            html.style.scrollBehavior = 'auto';
            body.style.position = body.style.top = body.style.width = body.style.overflow = '';
            scrollTo(0, pos);
            html.style.scrollBehavior = ''
        }
    })
}
/**
* Checks whether an element is in active state
* @param {HTMLElement} elem - Element to check
* @returns {Boolean} Boolean
*/
globalThis.isActive = elem => {
    return elem.classList.contains('active');
}
/**
* Toggles active state of elements
* @param {HTMLElement} elems - Element(s) to toggle
*/
globalThis.toggle = (...elems) => {
    elems.forEach(
        elem => isActive(elem) ? inactivate(elem) : activate(elem)
    )
}
/**
* Makes elements unclickable
* @param {HTMLElement} elems - Element(s) to disable
*/
globalThis.disable = (...elems) => {
    elems.forEach(elem => {
        elem.setAttribute('disabled', '');
        querySelec(elem, ':focus')?.blur();
    })
}
/**
* Makes elements clickable again
* @param {HTMLElement} elems - Element(s) to enable
*/
globalThis.enable = (...elems) => {
    elems.forEach(elem => {
        elem.removeAttribute('disabled');
    })
}
/**
* Checks whether an element is enabled
* @param {HTMLElement} elem - Element to check
* @returns {Boolean} Boolean
*/
globalThis.isEnabled = (elem) => {
    return elem.getAttribute('disabled') == undefined;
}
/**
* Removes all children of element(s)
* @param {HTMLElement} elems - Element(s) to has its child removed
*/
globalThis.clear = (...elems) => {
    elems.forEach(elem => elem && (elem.innerHTML = ''));
}
/**
* Removes element(s)
* @param {HTMLElement} elems - Element(s) to remove
*/
globalThis.remove = (...elems) => {
    elems.forEach(elem => elem?.remove());
}
/**
* Checks whether an element is enabled
* @param {Boolean} all - `true` to `querySelectorAll`
* @param {HTMLElement | string} param1 - The element to query from, or query string
* @param {string} [param2] - Query string
* @returns {HTMLElement | Array | undefined} Returns an `Array` if `all` is `true`, otherwise returns a `HTMLElement`, or `undefined` if nothing matches
*/
globalThis.qSelec = (all, param1, param2) => {
    let elem = param2 ? param1 : document;
    let str = param2 || param1;
    return elem?.[all ? 'querySelectorAll' : 'querySelector'](str) || undefined;
}
/**
* Get an element by its `id`
* @param {string} id - ID of an element
* @returns {HTMLElement} A HTML element
*/
globalThis.elemById = id => {
    return document.getElementById(id);
}
globalThis.toggleTheme = () => {
    let { body } = document;
    body.classList.toggle('dark');
    toggle(qSelec(false, 'header > ul[name="all"] > li[name="dark-toggle"]'));
    return localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
} 
globalThis.getDateObj = (date, options) => {
    options?.isUTC && (date.timezone = 0);
    date = date
        ? options?.syncToDate
            ? syncDate(date)
            : date
        : new Date();
    
    let obj = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        timezone,
    }
    if (options?.detailed) {
        obj.hours = date.getHours();
        obj.minutes = date.getMinutes();
        obj.seconds = date.getSeconds();
    }
    return obj;
}
globalThis.parseDate = date => {
    return new Date(date.year, date.month, date.day, date.hours || 0, date.minutes || 0, date.seconds || 0);
}
globalThis.syncDate = date => {
    let tz = date.timezone;
    date = date.getHours ? date : new Date(date.year, date.month, date.day, date.hours || 0, date.minutes || 0, date.seconds || 0);
    date.setHours(date.getHours() + tz);
    date.setHours(date.getHours() - timezone);
    return date;
}
globalThis.formatDate = (obj, lang = language) => {
    let { seconds, minutes, hours, day, month, year } = obj;
    let string;
    
    hours = hours != undefined
        ? lang == 'ja'
            ? `${hours}時`
            : hours < 10
                ? `0${hours}`
                : `${hours}`
        : '';
    minutes = minutes != undefined
        ? lang == 'ja'
            ? `${minutes}分`
            : minutes < 10
                ? `:0${minutes}`
                : `:${minutes}`
        : '';
    seconds = seconds != undefined
        ? lang == 'ja'
            ? `${seconds}秒`
            : seconds < 10
                ? `:0${seconds}`
                : `:${seconds}`
        : '';
    
    let time = `${hours}${minutes}${seconds}`;
    let currentMonth = {
        en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
        it: ['gennaio', 'febbraio', '&#176; marzo', 'aprile', '&#176; maggio', 'giugno', '&#176; luglio', '&#176; agosto', 'settembre', 'ottobre', 'novembre', '&#176; dicembre'],
        de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        nl: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
        dk: ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'],
        pt: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
        es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    }[lang]?.[month];
    
    string =
        lang == 'vi' ? `${day} tháng ${++month}, ${year}` :
        lang == 'kr' ? `${year}월 ${++month}년 ${day}일` :
        lang == 'ja' ? `${year}年${++month}月${day}日` :
        lang == 'de' || lang == 'dk' ? `${day}. ${currentMonth}, ${year}` :
        lang == 'pt' || lang == 'es' ? `${day} de ${currentMonth} de ${year}` :
        lang == 'ru' ? `${day} ${currentMonth} ${year} г.` :
        `${day} ${currentMonth}, ${year}`;
    
    string = lang == 'kr' || lang == 'ja'
        ? string + (time ? ` ${time}` : '')
        : (time ? `${time}, ` : '') + string;
    
    return string;
}
globalThis.formatTime = time => {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 3600);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    
    if (hours == 0) {return `${minutes}:${seconds}`}
    return `${hours}:${minutes}:${seconds}`;
}
globalThis.timeDiff = obj => {
    let now = new Date();
    let past = obj.year ? parseDate(obj) : obj;
    let elapsed = now - past;
    
    let msPerSecond = 1000;
    let msPerMinute = msPerSecond * 60;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let msPerWeek = msPerDay * 7;
    let msPerMonth = msPerDay * 365 / 12;
    let msPerYear = msPerDay * 365;
    
    let text = {
        en: [' seconds ago', ' minutes ago', ' hours ago', ' days ago', ' weeks ago', ' months ago', ' years ago'],
        vi: [' giây trước', ' phút trước', ' giờ trước', ' ngày trước', ' tuần trước', ' tháng trước', ' năm trước'],
        fr: [' secondes avant', ' minutes avant', ' heures avant', ' jours avant', ' semaines avant', ' mois avant', ' années avant'],
        it: [' secondi fa', ' minuti fa', ' ore fa', ' giorni fa', ' settimane fa', ' mesi fa', ' anni fa'],
        kr: [' 초 전', ' 분 전', ' 시간 전', ' 일 전', ' 주 전', ' 개월 전', ' 년 전'],
        ja: [' 秒前', ' 分前', ' 時間前', ' 日前', ' 週間前', ' ヶ月前', ' 年前'],
        de: [' Sekunden vor', ' Minuten vor', ' Stunden vor', ' Tagen vor', ' Wochen vor', ' Monaten vor', ' Jahren vor'],
        nl: [' seconden geleden', ' minuten geleden', ' uren geleden', ' dagen geleden', ' weken geleden', ' maanden geleden', ' jaren geleden'],
        dk: [' sekunder siden', ' minutter siden', ' timer siden', ' dage siden', ' uger siden', ' måneder siden', ' år siden'],
        pt: [' segundos atrás', ' minutos atrás', ' horas atrás', ' dias atrás', ' semanas atrás', ' meses atrás', ' anos atrás'],
        es: [' segundos atrás', ' minutos atrás', ' horas atrás', ' días atrás', ' semanas atrás', ' meses atrás', ' años atrás'],
        ru: [' секунд назад', ' минут назад', ' часов назад', ' дней назад', ' недель назад', ' месяцев назад', ' лет назад']
    }[language];

    return elapsed < msPerMinute ? Math.floor(elapsed / msPerSecond) + text[0] :
           elapsed < msPerHour ? Math.floor(elapsed / msPerMinute) + text[1] :
           elapsed < msPerDay ? Math.floor(elapsed / msPerHour) + text[2] :
           elapsed < msPerWeek ? Math.floor(elapsed / msPerDay) + text[3] :
           elapsed < msPerMonth ? Math.floor(elapsed / msPerWeek) + text[4] :
           elapsed < msPerYear ? Math.floor(elapsed / msPerMonth) + text[5] :
           Math.floor(elapsed / msPerYear) + text[6];
}