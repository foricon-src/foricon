globalThis.pageLoaded = false;
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
            icon: "<f-icon icon='eye'></f-icon>",
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
            icon: "<f-icon icon='bell'></f-icon>",
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
            icon: "<f-icon i-s='outline' icon='arrows-repeat'></f-icon>",
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
            icon: "<f-icon icon='gauge-5'></f-icon>",
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
            icon: "<f-icon icon='star'></f-icon>",
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
            icon: "<f-icon icon='house'></f-icon>",
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
            icon: "<f-icon icon='briefcase'></f-icon>",
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
            icon: "<f-icon i-s='outline' icon='code'></f-icon>",
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
            icon: "<f-icon icon='comment'></f-icon>",
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
            icon: "<f-icon i-s='outline' icon='wifi'></f-icon>",
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
            icon: "<f-icon icon='helmet-safety'></f-icon>",
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
            icon: "<f-icon icon='united-states'></f-icon>",
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
            icon: "<f-icon icon='palette'></f-icon>",
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
            icon: "<f-icon icon='display'></f-icon>",
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
            icon: "<f-icon icon='pencil'></f-icon>",
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
            icon: "<f-icon icon='face-smile'></f-icon>",
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
            icon: "<f-icon icon='file'></f-icon>",
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
            icon: "<f-icon icon='clapperboard'></f-icon>",
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
            icon: "<f-icon icon='mug-hot'></f-icon>",
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
            icon: "<f-icon icon='gamepad'></f-icon>",
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
            icon: "<f-icon icon='thumb-up'></f-icon>",
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
            icon: "<f-icon icon='map-pin'></f-icon>",
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
            icon: "<f-icon icon='bullhorn'></f-icon>",
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
            icon: "<f-icon i-s='outline' icon='divide'></f-icon>",
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
            icon: "<f-icon icon='play'></f-icon>",
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
            icon: "<f-icon i-s='outline' icon='dollar'></f-icon>",
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
            icon: "<f-icon icon='music-note'></f-icon>",
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
            icon: "<f-icon icon='medbag'></f-icon>",
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
            icon: "<f-icon icon='user'></f-icon>",
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
            icon: "<f-icon icon='image'></f-icon>",
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
            icon: "<f-icon icon='shield-half-stroke'></f-icon>",
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
            icon: "<f-icon icon='diamond'></f-icon>",
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
            icon: "<f-icon icon='cart'></f-icon>",
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
            icon: "<f-icon icon='paper-plane-simple'></f-icon>",
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
            icon: "<f-icon i-s='outline' icon='spinner-3p4'></f-icon>",
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
            icon: "<f-icon icon='chart'></f-icon>",
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
            icon: "<f-icon i-s='outline' icon='hashtag'></f-icon>",
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
            icon: "<f-icon i-s='outline' icon='text'></f-icon>",
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
            icon: "<f-icon icon='clock-four'></f-icon>",
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
            icon: "<f-icon icon='square-check'></f-icon>",
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
            icon: "<f-icon icon='car'></f-icon>",
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
            icon: "<f-icon icon='plane'></f-icon>",
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
            icon: "<f-icon icon='cloud-sun'></f-icon>",
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
            icon: "<f-icon icon='paragraph'></f-icon>",
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
globalThis.timezone = null;

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
 * Makes element(s) to be in activate state
 * @param {HTMLElement} elems - Element(s) to activate
 */
globalThis.activate = (...elems) => {
    let { body } = document;
    elems.forEach(elem => {
        if (elem.classList.contains('modal') && !document.querySelector('.modal.activate')) {
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
 * Removes activate state from element(s)
 * @param {HTMLElement} elems - Element(s) to inactivate
 */
globalThis.inactivate = (...elems) => {
    let { body } = document;
    elems.forEach(elem => {
        let html = document.documentElement;
        elem.classList.remove('active');
        if (elem.classList.contains('modal') && document.querySelectorAll('.modal.activate').length == 0) {
            html.style.scrollBehavior = 'auto';
            body.style.position = body.style.top = body.style.width = body.style.overflow = '';
            scrollTo(0, pos);
            html.style.scrollBehavior = ''
        }
    })
}
/**
 * Checks whether an element is in activate state
 * @param {HTMLElement} elem - Element to check
 * @returns {Boolean} Boolean
 */
globalThis.isActive = elem => {
    return elem.classList.contains('active');
}
/**
 * Toggles activate state of elements
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
        qSelec(false, elem, ':focus')?.blur();
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
 * Selects element(s)
 * @param {Boolean} all - `true` to `querySelectorAll`
 * @param {HTMLElement | string} param1 - The element to query from, or query string
 * @param {string} [param2] - Query string
 * @returns {HTMLElement | HTMLElement[] | undefined} Returns an `Array` if `all` is `true`, otherwise returns a `HTMLElement`, or `undefined` if nothing matches
 */
globalThis.qSelec = (all, param1, param2) => {
    let elem = param2 ? param1 : document;
    let str = param2 || param1;
    return elem?.[all ? 'querySelectorAll' : 'querySelector'](str) || undefined;
}
/**
 * Gets an element by its `id`
 * @param {string} id - ID of an element
 * @returns {HTMLElement} A HTML element
 */
globalThis.elemById = id => {
    return document.getElementById(id);
}
/**
 * Gets children of an element
 * @param {HTMLElement} elem - Element to get childen
 * @returns {HTMLElement[]} Children of `elem`
 */
globalThis.getChild = elem => {
    return elem ? [...elem.children] : [];
}
/**
 * Gets the value of an attribute of an element
 * @param {HTMLElement} elem - Element to get attribute
 * @param {string} attr - Attribute to get
 * @returns {string | undefined} The value of the chosen attribute
 */
globalThis.getAttr = (elem, attr) => {
    return elem?.getAttribute(attr);
}
const listenerMap = new Map();
/**
 * Adds event listener(s) to element(s)
 * @param {HTMLElement | HTMLElement[]} elems - Element(s) to add event
 * @param {string | string[]} types - Type(s) of event to add
 * @param {Function} func - Event handler
 */
globalThis.addEvLis = (elems, types, func) => {
    elems = Array.isArray(elems) ? elems : [elems];
    types = Array.isArray(types) ? types : [types];
    
    elems.forEach((elem, i) => 
        (elem instanceof HTMLElement || elem == document || elem == window) && types.forEach(type => {
        let wrapped = e => func((e => {
            appendData(e, { i });
            return e;
        })(e), elem);
        
        !listenerMap.has(elem) && listenerMap.set(elem, new Map());
        !listenerMap.get(elem).has(type) && listenerMap.get(elem).set(type, new Map());
        
        listenerMap.get(elem).get(type).set(func, wrapped);
        elem.addEventListener(type, wrapped);
    })
)
}
/**
 * Removes added event listener
 * @param {HTMLElement} elem - Element to remove even
 * @param {string} type - Type of event to remove
 * @param {Function} func - Event handler
 */
globalThis.remvEvLis = (elem, type, func) => {
    const wrapped = listenerMap.get(elem)?.get(type)?.get(func);
    
    if (wrapped) {
        elem.removeEventListener(type, wrapped);
        listenerMap.get(elem).get(type).delete(func);
    }
}
/**
 * @typedef {HTMLElement & {
 *     events?: { [ event in keyof HTMLElementEventMap ]: (event: HTMLElementEventMap[event]) => void },
 *     children?: HTMLElement[],
 *     attrs?: { [attr: string]: string }
 * }} HTMLElementOptions
 */
/**
 * Creates a new element
 * @param {keyof HTMLElementTagNameMap} str - Type of element
 * @param {string | HTMLElementOptions} param - `string` for `innerHTML`, or an object
 * @returns Created element
 */
globalThis.newElem = (str, param) => {
    let elem = document.createElement(str);

    if (typeof param == 'string') elem.innerHTML = param
    else if (param) {
        let { attrs, events, children, ...rest } = param;

        if (attrs)
            Object.entries(attrs).forEach(i => elem.setAttribute(...i));
        if (events)
            for (let e in events)
                addEvLis(elem, e, events[e])
        if (children)
            elem.append(...children);

        appendData(elem, rest);
    }
    return elem;
}
/**
 * Removes element(s)
 * @param {HTMLElement} elems - Element(s) to remove
 */
globalThis.remvElem = (...elems) => {
    elems.forEach(e => e.remove());
}
/**
 * Modifies class of element(s)
 * @param {HTMLElement | HTMLElement[]} elems - Element(s) to modify
 * @param {'add' | 'remove' | 'toggle'} action - Action to be taken
 * @param {string} className - Class name
 */
globalThis.classList = (elems, action, className) => {
    elems = Array.isArray(elems) ? elems : [elems];
    elems.forEach(each => each.classList[action](className));
}
/**
 * Toggles the theme of the site and saves it to `localStorage`
 */
globalThis.toggleTheme = () => {
    let { body } = document;
    body.classList.toggle('dark');
    toggle(qSelec(false, 'header > ul[name="all"] > li[name="dark-toggle"]'));
    return localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
}

globalThis.getUTC = () => {
    return new Date().toUTCString();
}
globalThis.localTime = date => {
    return new Date(date);
}
/**
 * Shows the difference between date object and current time
 * @param {Date} date - Formatted date object
 * @returns Difference string
 */
globalThis.timeDiff = date => {
    let now = new Date();
    let elapsed = now - date;
    
    let msPerSecond = 1000;
    let msPerMinute = msPerSecond * 60;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let msPerWeek = msPerDay * 7;
    let msPerYear = msPerDay * 365;
    let msPerMonth = msPerYear / 12;
    
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
/**
 * Turns time object into time string
 * @param {{
 *   hours: Number,
 *   minutes: Number,
 *   seconds: Number,
 * }} time - Time object
 * @returns Formatted time string
 */
globalThis.formatTime = time => {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 3600);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    
    return hours == 0 ? `${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`;
}
/**
 * Turns date object into date string
 * @param {Date} date - Formatted date object
 * @param {string} lang - Language
 * @returns Formatted date string
 */
globalThis.formatDate = (date, lang = language) => {
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
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
        it: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
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

/**
 * Goes to a page
 * @param {Router} router - Router
 * @param {str | undefined} value - Page to go to
 * @param {Boolean} openInNewTab - Whether the new page should be opened in new tab
 */
globalThis.go = (router, value, openInNewTab) => {
    if (!value) router.push('/');
    else if (value[0] == '#') location.hash = value;
    else if (value[0] == '?') router.push(value);
    else if (value.startsWith('//') || value.startsWith('http')) window.open(value, '_blank');
    else openInNewTab ? window.open(`/${value}`, '_blank') : router.push(`/${value}`);
}

/**
 * Selects a random item from an array
 * @param {Array} arr - Array
 * @returns Selected random item
 */
globalThis.random = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * Updates the `input[type='range']`
 * @param {HTMLInputElement} elem - `input` to update
 * @param {Number} value - Value to set
 */
globalThis.updateRange = (elem, value) => {
    elem.value = value;
    elem.dispatchEvent(new Event('input'));
}

/**
 * Lowercases a string
 * @param {string} str - String to lowercase
 * @returns {string} Lowercased string
 */
globalThis.lower = str => {
    return str.toLowerCase();
}
/**
 * Uppercases a string
 * @param {string} str - String to uppercase
 * @returns {string} Uppercased string
 */
globalThis.upper = str => {
    return str.toUpperCase();
}
/**
 * Capitalizes a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
globalThis.capital = str => {
    return upper(str.charAt(0)) + str.slice(1);
}
/**
 * Shows similarity between 2 strings using Levenshtein edit distance
 * @param {string} s1 - First string
 * @param {string} s2 - Second string
 * @returns {Number} Similarity point, from 0 (no matches) to 1 (the same)
 */
globalThis.similarity = (s1, s2) => {
    let len1 = s1.length;
    let len2 = s2.length;
    if (!len1 || !len2) return 0;
    
    let dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));
    for (let i = 0; i <= len1; i++) dp[i][0] = i;
    for (let j = 0; j <= len2; j++) dp[0][j] = j;
    
    for (let i = 1; i <= len1; i++)
        for (let j = 1; j <= len2; j++)
            dp[i][j] =
    s1[i - 1] == s2[j - 1]
    ? dp[i - 1][j - 1]
    : Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
    
    return 1 - dp[len1][len2] / Math.max(len1, len2);
}

/**
 * Shows a toast notification
 * @param {'success' | 'info' | 'warn' | 'error'} type - Type of notification
 * @param {string} message - Content for notification
 */
globalThis.notify = async (type, message) => {
    let toast = qSelec(false, '#toast');
    while (toast.children.length > 4) await wait();
    let div = newElem('div', {
        innerHTML: message,
        className: `message ${type}`,
        style: 'opacity: 0; translate: 100%; transition: all .5s ease, margin-bottom 0s;',
    })
    toast.append(div);
    div.style = `height: ${div.offsetHeight}px; transition: all .5s ease, margin-bottom 0s;`;
    await wait(message.length < 40 ? message.length < 80 ? 5 : 4 : 3);
    div.style = 'opacity: 0; height: 0; padding-top: 0; padding-bottom: 0; margin-bottom: 0;';
    await wait(.5);
    div.remove();
}

/**
 * Abbreviates a number
 * @param {Number} num - Number to abbreviate
 * @returns {string} Abbreviated number
 */
globalThis.abbreviateNumber = num => {
    let units = {
        en: ['', 'K', 'M', 'B', 'T'],
        vi: ['', ' N', ' Tr', ' tỷ', ' N tỷ'],
        fr: ['', 'k', 'M', 'Md', 'Bn'],
        it: ['', 'k', 'M', 'Mld', 'T'],
        kr: ['', '천', '백만', '억', '조'],
        ja: ['', '千', '百万', '億', '兆'],
        de: ['', ' Tsd.', ' Mio.', ' Mrd.', ' Bio.'],
        nl: ['', 'K', ' mln', ' mld', ' bln'],
        dk: ['', 'k', ' mio.', ' mia.', ' bio.'],
        pt: ['', ' mil', ' mi', ' bi', ' tri'],
        es: ['', ' mil', ' M', ' mil M', ' Bn'],
        ru: ['', ' тыс', ' млн', ' млрд', ' трлн'],
    }[language];
    let unitIndex = 0;
    
    while (num >= 1000 && unitIndex < units.length - 1) {
        num /= 1000;
        unitIndex++;
    }
    
    let formatted = (num < 100 && unitIndex ? number.toFixed(1) : num) + units[unitIndex];
    
    ['vi', 'fr', 'de', 'nl', 'dk', 'pt', 'es', 'ru'].includes(language) && (formatted = formatted.toString().replace('.', ','));
    
    return formatted;
}

/**
 * Formats a value of bytes
 * @param {Number} bytes - Bytes to format
 * @returns {string} Formatted byte string
 */
globalThis.formatBytes = bytes => {
    if (!bytes) return '0 Bytes';
    let k = 1024;;
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Shows a modal
 * @param {HTMLElement} elem - Modal
 * @param {(value: *) => void} [actionIfTrue]
 * @param {(value: *) => void} [actionIfFalse]
 */
globalThis.modal = async (elem, actionIfTrue, actionIfFalse) => {
    activate(elem);
    
    let { body } = document;
    
    let ok = qSelec(false, elem, 'div:last-child > a.primary');
    let cancel = qSelec(false, elem, 'div:last-child > a.secondary');
    
    let checkboxes = qSelec(false, elem, 'div.checkboxes');
    let uploadFile = qSelec(false, elem, 'f-upload');
    let input = qSelec(false, elem, 'input:is([type=&quot;password&quot;], :not([type]))');
    
    qSelec(true, checkboxes, 'input')?.forEach(i => i.checked = false);
    
    input && (async () => {
        disable(ok);
        input.value = '';
        input.oninput = () => input.value ? enable(ok) : disable(ok);
        await wait(.2);
        input.focus();
    })()
    uploadFile && (async () => {
        disable(ok);
        uploadFile.onchange = () => uploadFile.files.length ? enable(ok) : disable(ok);
    })()
    
    function getValue() {
        return checkboxes?.children.length
            ? [...checkboxes.children].map(each => {
                let { checked, value } = each.querySelector('input');
                return checked ? value : null;
            }).filter(each => each)
            : uploadFile
                ? uploadFile.files
                : input
                    ? input.value
                    : null;
    }
    
    ok.onclick = async () => {
        try {
            let value = getValue();
            uploadFile?.clear();
            disable(body);
            await actionIfTrue?.(value);
            inactivate(elem);
        }
        catch (err) {
            notify(
                err instanceof Info ? 'info' :
                err instanceof Warn ? 'warn' :
                'error',
                err.message
            )
        }
        finally {
            enable(body);
        }
    }
    cancel && (cancel.onclick = async () => {
        try {
            let value = getValue();
            uploadFile?.clear();
            disable(body);
            await actionIfFalse?.(value);
            inactivate(elem);
        }
        catch (err) {
            notify(
                err instanceof Info ? 'info' :
                err instanceof Warn ? 'warn' :
                'error',
                err.message
            )
        }
        finally {
            enable(body);
        }
    })
}
/**
 * Notifies the user that a certain action/page requires a logged-in account
 * @param {Boolean} back - Whether user should be redirected to the previous page if they cancel
 */
globalThis.showAccountRequire = back => {
    modal(
        elemById('account-required'),
        () => go(`login?redirect=${location.pathname}`),
        () => back && history.back()
    )
}


class Info extends Error {
    constructor(message) {
        super(message);
        this.name = 'Info:';
    }
}
class Warn extends Error {
    constructor(message) {
        super(message);
        this.name = 'Warning';
    }
}
globalThis.Info = Info;
globalThis.Warn = Warn;

globalThis.formatCode = (value, lang = 'html') => {
    lang = lower(lang);
    function escapeHTML(str) {
        return str.replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
    }
    function protect(str) {
        return str.replaceAll('&lt;', '&_l')
        .replaceAll('&gt;', '&_g')
        .replaceAll('&amp;', '&_a');
    }
    function unprotect(str) {
        return str.replaceAll('&_l', '&lt;')
        .replaceAll('&_g', '&gt;')
        .replaceAll('&_a', '&amp;');
    }
    
    function highlightHTML(str) {
        str = str.replace(/(&lt;!--[\s\S]*?--&gt;)/g, match =>
            `<span class='comment'>${match}</span>`
        )
        
        str = str.replace(/&lt;(script|style)((?:(?!&gt;).)*?)&gt;([\s\S]*?)&lt;\/\1&gt;/g, (match, tag, attrs, content) =>
            `&lt;${tag}&gt;${tag == 'script' ? highlightJS(protect(content)) : highlightCSS(protect(content))}&lt;/${tag}&gt;`
        )
        str = unprotect(str.replace(/(&lt;\/?)([a-zA-Z0-9\-]+)((?:(?!&gt;).)*?)(\/?&gt;)/g, (match, open, tagName, attrs, close) => {
            let highlightedAttrs = attrs.replace(
                /([a-zA-Z0-9\-:]+)(?:=("[^"]*"|'[^']*'))?/g,
                (m, name, val) => {
                    return val
                    ? `<span class='attr'><span>${name}</span>=</span><span class='attr-val'>${val}</span>`
                    : `<span class='attr'><span>${name}</span></span>`;
                }
            )
            
            return `<span class='tag'>${open}<span>${tagName}</span>${highlightedAttrs}${close}</span>`;
        }))
        
        return str;
    }

    function highlightCSS(str) {
        // Protect comments first
        const comments = [];
        str = str.replace(/(\/\*[\s\S]*?\*\/)/g, m => {
            comments.push(m);
            return `__COMMENT_${comments.length - 1}__`;
        })
        
        // Match selectors and their blocks
        str = str.replace(/([^{]+)\{([^}]+)\}/g, (match, selector, content) => {
            let parts = content.split('\n').map(part => {
                if (!part.trim()) return part;
                
                let original = part;
                
                // Inline comment placeholders
                let comment = '';
                let commentMatch = part.match(/(__COMMENT_\d+__)$/);
                if (commentMatch) {
                    comment = commentMatch[1];
                    part = part.replace(comment, '');
                }
                
                // Capture indentation separately
                let indent = part.match(/^\s*/)[0];
                let rest = part.slice(indent.length);
                
                // Highlight multiple properties inline
                let highlightedLine = part.replace(/([a-zA-Z\-]+)(:\s*)([^;]*)(;?)/g,
                    (m, prop, colonSpace, val, semi) => {
                        let highlightedVal = val
                            .replace(/("[^"]*"|'[^']*')/g, s => `<span class='string'>${s}</span>`)
                            .replace(/\b\d+(\.\d+)?(px|em|rem|%|vh|vw|pt|cm|mm|in)?\b/g, num => {
                                let n = num.match(/^\d+(\.\d+)?/)[0];
                                let unit = num.slice(n.length);
                                return `<span class='number'>${n}</span>${unit}`;
                            })
                            .replace(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g, c => `<span class='color'>${c}</span>`)
                            .replace(/\b(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|transparent|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)\b/gi,
                                c => `<span class='css color'>${c}</span>`
                            )
                            .replace(/!important/g, `<span class='css important'>!important</span>`);
                        
                        return `<span class='css property'>${prop}</span>${colonSpace}<span class='css property-value'>${highlightedVal}</span>${semi}`;
                    }
                );
                
                // Restore inline comment if present
                return highlightedLine + (comment || '');
            }).join('\n');
            
            return `<span class='css selector'>${selector}</span>{${parts}}`;
        })
        
        // Restore comments
        str = str.replace(/__COMMENT_(\d+)__/g, (_, i) =>
            `<span class='comment'>${comments[i]}</span>`
        )

        return str;
    }

    function protectSpans(str, callback) {
        const spans = [];
        str = str.replace(/<span.*?<\/span>/g, m => {
            spans.push(m);
            return `__SPAN_${spans.length - 1}__`;
        })
        
        str = callback(str);
        
        return str.replace(/__SPAN_(\d+)__/g, (_, i) => spans[i]);
    }

    function highlightJS(str) {
        const keywords = [
            'break','case','catch','class','const','continue','debugger',
            'default','delete','do','else','export','extends','finally',
            'for','function','if','import','in','instanceof','let','new',
            'of', 'return','super','switch','this','throw','try','typeof','var',
            'void','while','with','yield','async','await'
        ]

        str = str.replace(
            /\b(let|const|var)(\s*)+([^;]+?)(?=\s*(;|\bin\b|\bof\b|$))/g,
            (match, kw, space, decls) => {
                function highlightVars(code) {
                    let result = '', i = 0, skip = false, depth = 0, isBehind = false;
                    let { length } = code;
                    
                    while (i < length) {
                        if (code.startsWith('//', i)) {
                            let index = code.indexOf('\n', i);
                            index = index == -1 ? length : Math.min(index + 2, length);
                            result += code.slice(i, index);
                            i = index;
                            continue;
                        }
                        if (code.startsWith('/*', i)) {
                            let index = code.indexOf('<*/>', i);
                            index = index == -1 ? length : Math.min(index + 2, length);
                            result += code.slice(i, index);
                            i = index;
                            continue;
                        }
                        if (code.startsWith('\n', i)) {
                            let left = code.slice(0, i).trimEnd();
                            let right = code.slice(i + 2).trimStart();
                            
                            if ((left.endsWith(',') || right.startsWith(','))) {
                                result += '\n';
                                i += 2;
                            }
                            else {
                                let next = Math.min(...['let', 'var', 'const'].map(word => {
                                    let index = code.indexOf(word, i);
                                    return index < 1 ? undefined : index;
                                }).filter(i => i))
                                next = next == -1 || next == Infinity ? length : next;
                                result += code.slice(i, next);
                                i = next;
                            }
                            continue;
                        }
                        
                        let char = code[i];
                        
                        if (char == '"' || char == "'" || char == '`') {
                            let quote = char;
                            result += char;
                            i++;
                            while (i < code.length && code[i] !== quote) {
                                if (code[i] == '\\') i++;
                                result += code[i++];
                            }
                            result += code[i++] || '';
                            continue;
                        }
                        
                        if (['(', '[', '{'].includes(char)) depth++;
                        else if ([')', ']', '}'].includes(char)) depth--;
                        
                        if (char == '=') {
                            skip = true;
                            if (depth == 0) isBehind = true;
                        }
                        else if (char == ',') {
                            skip = false;
                            if (depth == 0) isBehind = false;
                        }
                        
                        ['let', 'var', 'const'].forEach(each => {
                            let left = code.slice(0, i).trimEnd();
                            !/[a-zA-Z_$]/.test(code[i - each.length - 1]) && code.slice(i - each.length, i) == each && (skip = isBehind = false);
                        })
                        
                        if (!skip && !isBehind && /[a-zA-Z_$]/.test(char)) {
                            let start = i;
                            while (i < code.length && /[\w$]/.test(code[i])) i++;
                            let name = code.slice(start, i);
                            let rest = code.slice(i).trimStart();
                            
                            result += rest.startsWith(':')
                            ? name
                            : `<span class='js variable'>${name}</span>`;
                            
                            continue;
                        }
                        
                        result += char;
                        i++;
                    }
                    
                    return result;
                }
                return kw + space + highlightVars(decls);
            }
        )
        
        str = protectSpans(str, safe =>
                safe.replace(new RegExp(`\\b(${keywords.join('|')})\\b`, 'g'),
                match => `<span class='js keyword'>${match}</span>`
            )
        )
        
        str = protectSpans(str, safe =>
            safe.replace(/`([^`\\]|\\.|(\${[^}]+}))*`|'([^'\\]|\\.)*'|"([^"\\]|\\.)*"/g, match => {
                if (match.startsWith('`')) {
                    let out = '';
                    let i = 0;
                    out += `<span class="js string">\``;
                    while (i < match.length) {
                        if (match[i] === '$' && match[i+1] === '{') {
                            out += '${</span>';
                            let depth = 1;
                            let j = i+2;
                            while (j < match.length && depth > 0) {
                                if (match[j] === '{') depth++;
                                else if (match[j] === '}') depth--;
                                j++;
                            }
                            let inner = match.slice(i+2, j-1);
                            out += highlightJS(inner);
                            out += `<span class="js string">}`;
                            i = j-1;
                        } else if (i > 0 && i < match.length-1) {
                            out += match[i];
                        }
                        i++;
                    }
                    out += '`</span>';
                    return out;
                }
                return `<span class='js string'>${match}</span>`;
            })
        );

        str = protectSpans(str, safe =>
            safe
            .replace(/(\.)([a-zA-Z_$][\w$]*)\(/g, (m, dot, name) =>
                `${dot}<span class='js function'>${name}</span>(`
            )
            .replace(/\b([a-zA-Z_$][\w$]*)\(/g, (m, name) =>
                keywords.includes(name) ? m : `<span class='js function'>${name}</span>(`
            )
        )

        str = protectSpans(str, safe =>
            safe.replace(/(\/\/.*?)(\n)/g, (match, comment, br) =>
                `<span class='comment'>${comment}</span>${br}`
            )
        )

        str = protectSpans(str, safe =>
            safe.replace(/(\/\*[\s\S]*?\*\/)/g, match =>
                `<span class='comment'>${match}</span>`
            )
        )

        str = protectSpans(str, safe =>
            safe.replace(/\b(\d+(\.\d+)?)\b/g,
                match => `<span class='number'>${match}</span>`
            )
        )

        return str;
    }

    let escaped = escapeHTML(value).split('\n').map(i => i || ' ').join('\n');
    return (
        lang == 'html' ? highlightHTML(escaped) :
        lang == 'css' ? highlightCSS(escaped) :
        lang == 'js' || lang == 'javascript' ? highlightJS(escaped) :
        escaped
    ).replaceAll('\u200b', "<span class='hidden-char' title='U+200B'></span>")
    .replaceAll('\u200c', "<span class='hidden-char' title='U+200C'></span>")
    .replaceAll('\u200d', "<span class='hidden-char' title='U+200D'></span>")
    .replaceAll('\ufeff', "<span class='hidden-char' title='U+FEFF'></span>")
    .replaceAll('\u2060', "<span class='hidden-char' title='U+2060'></span>");
}