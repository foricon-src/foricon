'use client';

import { useContext, useEffect, useState } from 'react';
// import Image from 'next/image';
// import favicon from 'Ass/foricon-f-favicon.png';
import { LanguageContext } from 'Com/language';
import cssStyle from './page.module.css';

export default function Home() {
    let lang = useContext(LanguageContext);

    let [ icon, setIcon ] = useState('brush');
    let [ style, setStyle ] = useState('solid');
    let [ scale, setScale ] = useState('');
    let [ size, setSize ] = useState('');
    let [ rotate, setRotate ] = useState('');
    let [ animation, setAnimation ] = useState('');
    let [ animationSpeed, setAnimationSpeed ] = useState('');

    useEffect(() => {(async () => {
        while (elemById('loading')) await wait();
        let icons = elemById('icons');
        let added = [];
        for (let i = 0; i < 4; i++) {
            let div = newElem('div');
            while (div.children.length < 10) {
                await wait();
                let icon = random(webData.iconsB2);
                let { name, styles } = icon;
                let style = random(styles);
                if (!added.includes(`${name} ${style}`)) {
                    div.innerHTML += `<f-icon i-s='${style}' icon='${name}'/>`;
                    added.push(`${name} ${style}`);
                }
            }
            icons.insertBefore(div, qSelec(false, '#icons > div:last-child'));
        }
    })()}, [])

    return (
        <div className={cssStyle.page}>
            <div className={cssStyle.hero}>
                <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBX39PGrjfEdpF2RTkpAaKi84zc4JJ5cs7MzKgtnPH6jepJLRGh8zTwACp0VH2Dt5dj7AZH39t4pvfY69Fc8yt_6W2Ya0iwT432qMJURupVCcq6ZHAPAjaJO85Dw8Gj2LppRLBKkJYUTbq6yAFFRc2ezL66KkHDXR0ksoDroknEakKo0PlBODWcq3aXCc/s1600/foricon-f.png'/>
                <a href='/p/new-changelog.html'>
                    <f-icon i-s='outline' icon='hashtag'/><span>{webData.verFull}</span>
                </a>
                <h1>{
                    {
                        en: 'Icons That Make Your Design Shine',
                        vi: 'Kho icon font free, đầu tiên tại Việt Nam',
                        fr: 'Des icônes qui font briller votre design',
                        it: 'Icone che fanno brillare il tuo design',
                        kr: '디자인을 빛나게 하는 아이콘',
                        ja: 'あなたのデザインを輝かせるアイコン',
                        de: 'Icons, die Ihr Design zum Strahlen bringen',
                        nl: 'Iconen die je ontwerp laten schitteren',
                        dk: 'Ikoner der får dit design til at skinne',
                        pt: 'Ícones que fazem seu design brilhar',
                        es: 'Iconos que hacen que tu diseño brille',
                        ru: 'Иконки, которые делают ваш дизайн ярким',
                    }[lang]
                }</h1>
                <p>{
                    {
                        en: 'Design smarter with icons that customize, animate, and integrate in seconds',
                        vi: 'Thiết kế thông minh hơn với các biểu tượng có thể tùy chỉnh, animate và tích hợp trong vài giây',
                        fr: "Concevez plus intelligemment avec des icônes qui se personnalisent, s'animent et s'intègrent en quelques secondes",
                        it: 'Progetta in modo più intelligente con icone che si personalizzano, si animano e si integrano in pochi secondi',
                        kr: '몇 초 만에 사용자 지정, 애니메이션 및 통합이 가능한 아이콘으로 더욱 스마트하게 디자인하세요',
                        ja: '数秒でカスタマイズ&#12289;アニメーション&#12289;統合できるアイコンで&#12289;よりスマートにデザインできます',
                        de: 'Gestalten Sie intelligenter mit Symbolen, die sich in Sekundenschnelle anpassen, animieren und integrieren lassen',
                        nl: 'Ontwerp slimmer met pictogrammen die u in seconden kunt aanpassen, animeren en integreren',
                        dk: 'Design smartere med ikoner, der tilpasser, animerer og integrerer på få sekunder',
                        pt: 'Crie um design mais inteligente com ícones que podem ser personalizados, animados e integrados em segundos',
                        es: 'Diseñe de forma más inteligente con íconos que se personalizan, animan e integran en segundos',
                        ru: 'Проектируйте умнее с помощью иконок, которые можно настраивать, анимировать и интегрировать за считанные секунды.',
                    }[lang]
                }</p>
                <label>
                    <f-icon i-s='outline' icon='magnifying-glass'/>
                    <input placeholder={
                        {
                            en: 'Find your perfect icon - start typing...',
                            vi: 'Tìm biểu tượng hoàn hảo - bắt đầu nhập...',
                            fr: 'Trouvez votre icône parfaite - commencez à taper...',
                            it: "Trova l'icona perfetta: inizia a digitare...",
                            kr: '당신에게 딱 맞는 아이콘을 찾아보세요 - 입력을 시작하세요...',
                            ja: '最適なアイコンを見つけて、入力を開始してください...',
                            de: 'Finden Sie Ihr perfektes Symbol - beginnen Sie mit der Eingabe …',
                            dk: 'Find dit perfekte ikon - begynd at skrive...',
                            nl: 'Vind het perfecte pictogram - begin met typen...',
                            pt: 'Encuentra tu icono perfecto: comienza a escribir...',
                            es: 'Encontre o ícone perfeito - comece a escrever...',
                            ru: 'Найдите свой идеальный значок — начните вводить текст...',
                        }[lang]
                    }/>
                </label>
            </div>
            <div className={`${cssStyle.contentSection} ${cssStyle.icons}`} id='icons'>
                <div>
                    <h1>
                        <span class='icon-count'/>+{
                        ` ${{
                            en: 'icons',
                            vi: 'biểu tượng',
                            fr: 'icônes',
                            it: 'icone',
                            kr: '아이콘',
                            ja: 'アイコン',
                            de: 'Symbole',
                            nl: 'iconen',
                            dk: 'ikoner',
                            pt: 'ícones',
                            es: 'iconos',
                            ru: 'иконки',
                        }[lang]}`
                    }</h1>
                    <p>{
                        {
                            en: 'are ready to be used',
                            vi: 'sẵn sàng để sử dụng',
                            fr: 'sont prêts à être utilisés',
                            it: 'sono pronti per essere utilizzati',
                            kr: '사용할 준비가 되었습니다',
                            ja: 'すぐに使える',
                            de: 'sind einsatzbereit',
                            nl: 'zijn klaar voor gebruik',
                            dk: 'er klar til at blive brugt',
                            pt: 'estão prontos para serem utilizados',
                            es: 'están listos para ser utilizados',
                            ru: 'готовы к использованию',
                        }[lang]
                    }</p>
                </div>
            </div>
            <div className={`${cssStyle.contentSection} ${cssStyle.integration}`}>
                <div>
                    <h6 class='tagline'>{
                        {
                            en: 'Integration',
                            vi: 'Tích hợp',
                            fr: "L'intégration",
                            it: 'Integrazione',
                            kr: '완성',
                            ja: '統合',
                            de: 'Integration',
                            nl: 'Integratie',
                            dk: 'Integration',
                            pt: 'Integração',
                            es: 'Integración',
                            ru: 'Интеграция',
                        }[lang]
                    }</h6>
                    <h1>{
                        {
                            en: 'Easy Integration,&nbsp;Stunning Results',
                            vi: 'Dễ dàng tích hợp,&nbsp;Kết quả bắt mắt',
                            fr: 'Intégration facile,&nbsp;Résultats époustouflants',
                            it: 'Facile integrazione,&nbsp;Risultati sorprendenti',
                            kr: '쉬운 통합,&nbsp;놀라운 결과',
                            ja: '簡単な統合&#12289;&nbsp;素晴らしい結果',
                            de: 'Einfache Integration,&nbsp;umwerfende Ergebnisse',
                            nl: 'Eenvoudige integratie,&nbsp;Verbluffende resultaten',
                            dk: 'Nem integration,&nbsp;Fantastiske resultater',
                            pt: 'Fácil Integração,&nbsp;Resultados impressionantes',
                            es: 'Fácil integración,&nbsp;resultados sorprendentes',
                            ru: 'Простая интеграция,&nbsp;Потрясающие результаты',
                        }[lang]
                    }</h1>
                    <p>{
                        {
                            en: "Integrating our icon library into your projects is a breeze. Simply choose the icons you need, get its code, and start using them right away. With our extensive collection and easy-to-use interface, you'll find the perfect icons to elevate your designs.",
                            vi: 'Tích hợp thư viện icon của chúng tôi vào các dự án của bạn rất dễ. Chỉ cần chọn các biểu tượng bạn cần, lấy mã nhúng của biểu tượng đó và bắt đầu sử dụng ngay. Với bộ sưu tập phong phú và giao diện dễ sử dụng của chúng tôi, bạn sẽ tìm thấy các biểu tượng hoàn hảo để nâng tầm thiết kế của mình.',
                            fr: "L'intégration de notre bibliothèque d'icônes dans vos projets est un jeu d'enfant. Choisissez simplement les icônes dont vous avez besoin, obtenez leur code et commencez à les utiliser immédiatement. Grâce à notre vaste collection et à notre interface facile à utiliser, vous trouverez les icônes parfaites pour rehausser vos créations.",
                            it: "Integrare la nostra libreria di icone nei tuoi progetti è un gioco da ragazzi. Scegli semplicemente le icone di cui hai bisogno, ottieni il codice e inizia a usarle subito. Con la nostra vasta collezione e l'interfaccia facile da usare, troverai le icone perfette per migliorare i tuoi design.",
                            kr: '아이콘 라이브러리를 프로젝트에 통합하는 것은 아주 간단합니다. 필요한 아이콘을 선택하고, 코드를 받고, 바로 사용하기 시작하면 됩니다. 광범위한 컬렉션과 사용하기 쉬운 인터페이스로 디자인을 한 단계 업그레이드할 완벽한 아이콘을 찾을 수 있습니다.',
                            ja: '当社のアイコン ライブラリをプロジェクトに統合するのは簡単です&#12290;必要なアイコンを選択し&#12289;コードを取得して&#12289;すぐに使い始めるだけです&#12290;当社の豊富なコレクションと使いやすいインターフェイスにより&#12289;デザインを向上させる完璧なアイコンが見つかります&#12290;',
                            de: 'Die Integration unserer Symbolbibliothek in Ihre Projekte ist ein Kinderspiel. Wählen Sie einfach die gewünschten Symbole aus, holen Sie sich den Code und verwenden Sie sie sofort. Mit unserer umfangreichen Sammlung und der benutzerfreundlichen Oberfläche finden Sie die perfekten Symbole, um Ihre Designs aufzuwerten.',
                            nl: 'Het integreren van onze icoonbibliotheek in uw projecten is een fluitje van een cent. Kies gewoon de iconen die u nodig hebt, ontvang de code en begin ze meteen te gebruiken. Met onze uitgebreide collectie en gebruiksvriendelijke interface vindt u de perfecte iconen om uw ontwerpen naar een hoger niveau te tillen.',
                            dk: 'At integrere vores ikonbibliotek i dine projekter er en leg. Du skal blot vælge de ikoner, du har brug for, få dens kode, og begynde at bruge dem med det samme. Med vores omfattende samling og brugervenlige grænseflade finder du de perfekte ikoner til at løfte dine designs.',
                            pt: 'Integrar a nossa biblioteca de ícones nos seus projetos é muito fácil. Basta escolher os ícones de que necessita, obter o código e começar a utilizá-los imediatamente. Com a nossa extensa coleção e interface fácil de utilizar, encontrará os ícones perfeitos para elevar os seus designs.',
                            es: 'Integrar nuestra biblioteca de íconos en tus proyectos es muy fácil. Simplemente elige los íconos que necesitas, obtén su código y comienza a usarlos de inmediato. Con nuestra amplia colección y nuestra interfaz fácil de usar, encontrarás los íconos perfectos para mejorar tus diseños.',
                            ru: 'Интеграция нашей библиотеки иконок в ваши проекты &#8212; это просто. Просто выберите нужные вам иконки, получите их код и начните использовать их прямо сейчас. С нашей обширной коллекцией и простым в использовании интерфейсом вы найдете идеальные иконки, которые поднимут ваши проекты.',
                        }[lang]
                    }</p>
                    <a class='btn primary' href='/p/docs.html?adding-icons/basics'>{
                        {
                            en: 'Basics of Adding Icons',
                            vi: 'Hướng dẫn về thêm các icon',
                            fr: "Notions de base sur l'ajout d'icônes",
                            it: "Nozioni di base sull'aggiunta di icone",
                            kr: '아이콘 추가의 기본 사항',
                            ja: 'アイコン追加の基本',
                            de: 'Grundlagen zum Hinzufügen von Symbolen',
                            nl: 'Basisprincipes van het toevoegen van pictogrammen',
                            dk: 'Grundlæggende om tilføjelse af ikoner',
                            pt: 'Noções básicas de adição de ícones',
                            es: 'Conceptos básicos para agregar iconos',
                            ru: 'Основы добавления иконок',
                        }[lang]
                    }</a>
                </div>
                <div>
                    <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuciTIEKRlA_20KiNnOyUeny9fCvNkfD33iTLIYl3YOtT8Z3Fyiu5GJ08jCaJI5Pef-2mPUn34O0y0WIF83RUojLoh_B1nVU8wpTu9QbLdjq5alkzCoXDnNg5_O9uS8XBHbozp7evFgFEumm4ZRfkSC4t8naEuOYntcT4Afwdig2qh5lCYCx0hFBteOpU/s1600/screenshot.png'/>
                </div>
            </div>
            <div className={`${cssStyle.contentSection} ${cssStyle.iconFamilies}`}>
                <h6 class='tagline'>{
                    {
                        en: 'Icon Families',
                        vi: 'Bộ biểu tượng',
                        fr: "Familles d'icônes",
                        it: 'Famiglie di icone',
                        kr: '아이콘 패밀리',
                        ja: 'アイコンファミリー',
                        de: 'Symbolfamilien',
                        nl: 'Icoonfamilies',
                        dk: 'Ikonfamilier',
                        pt: 'Famílias de ícones',
                        es: 'Familias de iconos',
                        ru: 'Семейства иконок',
                    }[lang]
                }</h6>
                <h1>{
                    {
                        en: '4 Ways to Decorate Your Project',
                        vi: '4 cách để trang trí dự án của bạn',
                        fr: '4 façons de décorer votre projet',
                        it: '4 modi per decorare il tuo progetto',
                        kr: '프로젝트를 장식하는 4가지 방법',
                        ja: 'プロジェクトを飾る4つの方法',
                        de: '4 Möglichkeiten, Ihr Projekt zu dekorieren',
                        nl: '4 manieren om uw project te decoreren',
                        dk: '4 måder at dekorere dit projekt på',
                        pt: '4 formas de decorar o seu projeto',
                        es: '4 formas de decorar tu proyecto',
                        ru: '4 способа украсить ваш проект',
                    }[lang]
                }</h1>
                <ul>
                    <li onclick='go("search#v=b2&f=regular&s=solid")'>
                        <div>
                            <h4>Regular Solid</h4>
                        </div>
                        <div>
                            <f-icon icon='clone'/>
                            <f-icon icon='image'/>
                            <f-icon icon='file-lines'/>
                            <f-icon icon='grid-4'/>
                            <f-icon icon='compass'/>
                            <f-icon icon='rectangle-stack'/>
                            <f-icon icon='circle-check'/>
                            <f-icon icon='comment-ellipsis'/>
                            <f-icon icon='clock-four'/>
                            <f-icon icon='layers'/>
                            <f-icon icon='bookmark'/>
                            <f-icon icon='briefcase'/>
                            <f-icon icon='cart'/>
                            <f-icon icon='music-note'/>
                            <f-icon icon='eraser'/>
                            <f-icon icon='unlock'/>
                        </div>
                    </li>
                    <li onclick='go("search#v=b2&f=regular&s=outline")'>
                        <div>
                            <h4>Regular Outline</h4>
                        </div>
                        <div>
                            <f-icon i-s='outline' icon='clone'/>
                            <f-icon i-s='outline' icon='image'/>
                            <f-icon i-s='outline' icon='file-lines'/>
                            <f-icon i-s='outline' icon='grid-4'/>
                            <f-icon i-s='outline' icon='compass'/>
                            <f-icon i-s='outline' icon='rectangle-stack'/>
                            <f-icon i-s='outline' icon='circle-check'/>
                            <f-icon i-s='outline' icon='comment-ellipsis'/>
                            <f-icon i-s='outline' icon='clock-four'/>
                            <f-icon i-s='outline' icon='layers'/>
                            <f-icon i-s='outline' icon='bookmark'/>
                            <f-icon i-s='outline' icon='briefcase'/>
                            <f-icon i-s='outline' icon='cart'/>
                            <f-icon i-s='outline' icon='music-note'/>
                            <f-icon i-s='outline' icon='eraser'/>
                            <f-icon i-s='outline' icon='unlock'/>
                        </div>
                    </li>
                    <li onclick='go("search#v=b2&f=duotone&s=solid")'>
                        <div>
                            <h4>Duotone Solid</h4>
                        </div>
                        <div>
                            <f-icon i-s='duotone/solid' icon='clone'/>
                            <f-icon i-s='duotone/solid' icon='image'/>
                            <f-icon i-s='duotone/solid' icon='file-lines'/>
                            <f-icon i-s='duotone/solid' icon='grid-4'/>
                            <f-icon i-s='duotone/solid' icon='compass'/>
                            <f-icon i-s='duotone/solid' icon='rectangle-stack'/>
                            <f-icon i-s='duotone/solid' icon='circle-check'/>
                            <f-icon i-s='duotone/solid' icon='comment-ellipsis'/>
                            <f-icon i-s='duotone/solid' icon='clock-four'/>
                            <f-icon i-s='duotone/solid' icon='layers'/>
                            <f-icon i-s='duotone/solid' icon='bookmark'/>
                            <f-icon i-s='duotone/solid' icon='briefcase'/>
                            <f-icon i-s='duotone/solid' icon='cart'/>
                            <f-icon i-s='duotone/solid' icon='music-note'/>
                            <f-icon i-s='duotone/solid' icon='eraser'/>
                            <f-icon i-s='duotone/solid' icon='unlock'/>
                        </div>
                    </li>
                    <li onclick='go("search#v=b2&f=duotone&s=outline")'>
                        <div>
                            <h4>Duotone Outline</h4>
                        </div>
                        <div>
                            <f-icon i-s='duotone/outline' icon='clone'/>
                            <f-icon i-s='duotone/outline' icon='image'/>
                            <f-icon i-s='duotone/outline' icon='file-lines'/>
                            <f-icon i-s='duotone/outline' icon='grid-4'/>
                            <f-icon i-s='duotone/outline' icon='compass'/>
                            <f-icon i-s='duotone/outline' icon='rectangle-stack'/>
                            <f-icon i-s='duotone/outline' icon='circle-check'/>
                            <f-icon i-s='duotone/outline' icon='comment-ellipsis'/>
                            <f-icon i-s='duotone/outline' icon='clock-four'/>
                            <f-icon i-s='duotone/outline' icon='layers'/>
                            <f-icon i-s='duotone/outline' icon='bookmark'/>
                            <f-icon i-s='duotone/outline' icon='briefcase'/>
                            <f-icon i-s='duotone/outline' icon='cart'/>
                            <f-icon i-s='duotone/outline' icon='music-note'/>
                            <f-icon i-s='duotone/outline' icon='eraser'/>
                            <f-icon i-s='duotone/outline' icon='unlock'/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={`${cssStyle.contentSection} ${cssStyle.customizable}`}>
                <h6 class='tagline'>{
                    {
                        en: 'Easy to Customize',
                        vi: 'Dễ dàng tùy chỉnh',
                        fr: 'Facile à personnaliser',
                        it: 'Facile da personalizzare',
                        kr: '사용자 정의가 쉽습니다',
                        ja: '簡単にカスタマイズ可能',
                        de: 'Einfach anzupassen',
                        nl: 'Gemakkelijk aan te passen',
                        dk: 'Let at tilpasse',
                        pt: 'Fácil de personalizar',
                        es: 'Fácil de personalizar',
                        ru: 'Легко настраивать',
                    }[lang]
                }</h6>
                <h1>{
                    {
                        en: 'Style Our Icons in Your Own Way',
                        vi: 'Tùy chỉnh icon của chúng tôi theo cách riêng của bạn',
                        fr: 'Personnalisez nos icônes à votre façon',
                        it: 'Personalizza le nostre icone a modo tuo',
                        kr: '나만의 방식으로 아이콘을 스타일링하세요',
                        ja: 'アイコンを自分好みにカスタマイズ',
                        de: 'Gestalten Sie unsere Icons auf Ihre eigene Art',
                        nl: 'Stijl onze iconen op jouw eigen manier',
                        dk: 'Style vores ikoner på din egen måde',
                        pt: 'Estilize os nossos ícones à sua maneira',
                        es: 'Dale estilo a nuestros íconos a tu manera',
                        ru: 'Оформляйте наши иконки по-своему',
                    }[lang]
                }</h1>
                <p>{
                    {
                        en: 'Foricon allows you to customize icons to match your unique style and branding. Adjust colors, sizes, styles, transform and animate them to create a cohesive visual identity across all your designs. Make our icons truly yours.',
                        vi: 'Foricon cho phép bạn tùy chỉnh các biểu tượng để phù hợp với phong cách và thương hiệu độc đáo của bạn. Điều chỉnh màu sắc, kích thước, kiểu dáng, biến đổi và tạo hoạt ảnh cho chúng để tạo ra sự đồng bộ trên tất cả các thiết kế của bạn. Làm cho các biểu tượng của chúng tôi thực sự là của bạn.',
                        fr: "Foricon vous permet de personnaliser vos icônes pour qu'elles correspondent à votre style et à votre image de marque. Ajustez les couleurs, les tailles, les styles, transformez-les et animez-les pour créer une identité visuelle cohérente sur toutes vos créations. Personnalisez nos icônes.",
                        it: "Foricon ti consente di personalizzare le icone per adattarle al tuo stile e al tuo marchio unici. Regola colori, dimensioni, stili, trasformali e animali per creare un'identità visiva coesa in tutti i tuoi design. Rendi le nostre icone davvero tue.",
                        kr: 'Foricon을 사용하면 고유한 스타일과 브랜딩에 맞게 아이콘을 사용자 정의할 수 있습니다. 색상, 크기, 스타일을 조정하고 변형하고 애니메이션을 적용하여 모든 디자인에서 일관된 시각적 정체성을 만드세요. 아이콘을 진정으로 당신만의 것으로 만드세요.',
                        ja: 'Foricon を使用すると&#12289;独自のスタイルやブランドに合わせてアイコンをカスタマイズできます&#12290;色&#12289;サイズ&#12289;スタイルを調整し&#12289;変形やアニメーション化を行って&#12289;すべてのデザインに一貫したビジュアル アイデンティティを作成します&#12290;当社のアイコンを真に自分らしくしましょう&#12290;',
                        de: 'Mit Foricon können Sie Symbole an Ihren individuellen Stil und Ihre Marke anpassen. Passen Sie Farben, Größen und Stile an, transformieren und animieren Sie sie, um eine einheitliche visuelle Identität für alle Ihre Designs zu schaffen. Machen Sie unsere Symbole zu Ihren ganz persönlichen Symbolen.',
                        nl: 'Met Foricon kunt u iconen aanpassen aan uw unieke stijl en branding. Pas kleuren, formaten, stijlen aan, transformeer en animeer ze om een samenhangende visuele identiteit te creëren in al uw ontwerpen. Maak onze iconen echt van u.',
                        dk: 'Foricon giver dig mulighed for at tilpasse ikoner til at matche din unikke stil og branding. Juster farver, størrelser, stilarter, transformer og animer dem for at skabe en sammenhængende visuel identitet på tværs af alle dine designs. Gør vores ikoner til dine.',
                        pt: 'O Foricon permite personalizar ícones para combinar com o seu estilo e marca únicos. Ajuste cores, tamanhos, estilos, transforme-os e anime-os para criar uma identidade visual coesa em todos os seus designs. Torne os nossos ícones verdadeiramente seus.',
                        es: 'Foricon te permite personalizar los íconos para que se adapten a tu estilo y marca únicos. Ajusta colores, tamaños, estilos, transfórmalos y anímalos para crear una identidad visual cohesiva en todos tus diseños. Haz que nuestros íconos sean verdaderamente tuyos.',
                        ru: 'Foricon позволяет вам настраивать иконки в соответствии с вашим уникальным стилем и брендингом. Настраивайте цвета, размеры, стили, трансформируйте и анимируйте их, чтобы создать целостную визуальную идентичность во всех ваших проектах. Сделайте наши иконки по-настоящему вашими.',
                    }[lang]
                }</p>
                <div>
                    <div>
                        <h6>{
                            {
                                en: 'Icon',
                                vi: 'Biểu tượng',
                                fr: 'Icône',
                                it: 'Icona',
                                kr: '상',
                                ja: 'アイコン',
                                de: 'Symbol',
                                nl: 'Icon',
                                dk: 'Ikon',
                                pt: 'Ícone',
                                es: 'Icono',
                                ru: 'Икона',
                            }[lang]
                        }</h6>
                        <ul className='btn-list darker'>{
                            [ 'brush', 'grid-4', 'mug-tea-hot', 'layers', 'palette', 'pencil' ].map(i => (
                                <li key={i} onClick={() => setIcon(i)} className={icon == i && 'active'}>
                                    <f-icon icon={i}/>
                                </li>
                            ))
                        }</ul>
                        <h6>{
                            {
                                en: 'Style',
                                vi: 'Kiểu',
                                fr: 'Style',
                                it: 'Stile',
                                kr: '스타일',
                                ja: 'スタイル',
                                de: 'Stil',
                                nl: 'Stijl',
                                dk: 'Stil',
                                pt: 'Estilo',
                                es: 'Estilo',
                                ru: 'Стиль',
                            }[lang]
                        }</h6>
                        <ul className='btn-list darker'>{
                            [ '', 'outline', 'duotone/solid', 'duotone/outline' ].map(i => (
                                <li key={i} onClick={() => setStyle(i)} className={style == i && 'active'}>
                                    <f-icon icon={`circle${i.startsWith('duotone/') ? '-half' : ''}`} i-s={i}/>
                                </li>
                            ))
                        }</ul>
                        <h6>{
                            {
                                en: 'Scale',
                                vi: 'Tỉ lệ',
                                fr: 'Échelle',
                                it: 'Scala',
                                kr: '규모',
                                ja: '規模',
                                de: 'Skala',
                                nl: 'Schaal',
                                dk: 'Skala',
                                pt: 'Balança',
                                es: 'Escala',
                                ru: 'Шкала',
                            }[lang]
                        }</h6>
                        <ul className='btn-list darker'>{
                            [ 'xsmaller', 'smaller', '', 'larger', 'xlarger' ].map(i => (
                                <li key={i} onClick={() => setScale(i)} className={scale == i && 'active'}>{
                                    i || <f-icon icon='empty-set' i-s='outline'/>
                                }</li>
                            ))
                        }</ul>
                        <h6>{
                            {
                                en: 'Size',
                                vi: 'Kích thước',
                                fr: 'Taille',
                                it: 'Misurare',
                                kr: '크기',
                                ja: 'サイズ',
                                de: 'Größe',
                                nl: 'Maat',
                                dk: 'Størrelse',
                                pt: 'Tamanho',
                                es: 'Tamaño',
                                ru: 'Размер',
                            }[lang]
                        }</h6>
                        <ul className='btn-list darker'>{
                            [ 'smallest', 'smaller', 'small', '', 'large', 'larger', 'largest' ].map(i => (
                                <li key={i} onClick={() => setSize(i)} className={size == i && 'active'}>{
                                    i || <f-icon icon='empty-set' i-s='outline'/>
                                }</li>
                            ))
                        }</ul>
                        <h6>{
                            {
                                en: 'Rotate',
                                vi: 'Xoay',
                                fr: 'Tourner',
                                it: 'Ruotare',
                                kr: '회전하다',
                                ja: '回転',
                                de: 'Drehen',
                                nl: 'Draaien',
                                dk: 'Rotere',
                                pt: 'Girar',
                                es: 'Girar',
                                ru: 'Повернуть',
                            }[lang]
                        }</h6>
                        <ul className='btn-list darker'>{
                            [ '', '90', '180', '270', 'flipX', 'flipY' ].map(i => (
                                <li key={i} onClick={() => setRotate(i)} className={rotate == i && 'active'}>{
                                    i || <f-icon icon='empty-set' i-s='outline'/>
                                }</li>
                            ))
                        }</ul>
                        <h6>{
                            {
                                en: 'Animation',
                                vi: 'Hoạt ảnh',
                                fr: 'Animation',
                                it: 'Animazione',
                                kr: '생기',
                                ja: 'アニメーション',
                                de: 'Animation',
                                nl: 'Animatie',
                                dk: 'Animation',
                                pt: 'Animação',
                                es: 'Animación',
                                ru: 'Анимация',
                            }[lang]
                        }</h6>
                        <ul className='btn-list darker'>{
                            [
                                '',
                                'ltfade', 'fade', 'hvfade', 'ulfade',
                                'smbeat', 'beat', 'bgbeat', 'fadebeat',
                                'spin', 'spin-reverse',
                                'flipX', 'flipY', 'flipXY',
                            ].map(i => (
                                <li key={i} onClick={() => setAnimation(i)} className={animation == i && 'active'}>{
                                    i || <f-icon icon='empty-set' i-s='outline'/>
                                }</li>
                            ))
                        }</ul>
                        <h6>{
                            {
                                en: 'Animation speed',
                                vi: 'Tốc độ hoạt ảnh',
                                fr: "Vitesse d'animation",
                                it: 'Velocità di animazione',
                                kr: '애니메이션 속도',
                                ja: 'アニメーション速度',
                                de: 'Animationsgeschwindigkeit',
                                nl: 'Animatiesnelheid',
                                dk: 'Animationshastighed',
                                pt: 'Velocidade da animação',
                                es: 'Velocidad de animación',
                                ru: 'скорость анимации',
                            }[lang]
                        }</h6>
                        <ul className='btn-list darker'>{
                            [
                                'xxslow', 'xslow', 'slow', 'semislow',
                                '',
                                'semi-fast', 'fast', 'xfast', 'xxfast',
                            ].map(i => (
                                <li key={i} onClick={() => setAnimationSpeed(i)} className={animationSpeed == i && 'active'}>{
                                    i || <f-icon icon='empty-set' i-s='outline'/>
                                }</li>
                            ))
                        }</ul>
                    </div>
                    <div className='dk-bg'>
                        <f-icon icon={icon} i-s={style} scale={scale} size={size} rotate={rotate} animation={[ animation, animationSpeed ].filter(Boolean).join('-')}/>
                    </div>
                </div>
            </div>
            <div className={`${cssStyle.contentSection} ${cssStyle.moreStyling}`}>
                <h1>{
                    {
                        en: 'Explore More Styling Options!',
                        vi: 'Khám phá thêm nhiều tùy chọn hơn!',
                        fr: 'Explorer plus d&#8217;options de style&#160;!',
                        it: 'Esplora altre opzioni di stile!',
                        kr: '더욱 다양한 스타일링 옵션을 탐험해보세요!',
                        ja: 'エクスプローラーのより多くのスタイル オプション!',
                        de: 'Entdecken Sie weitere Styling-Optionen!',
                        nl: 'Ontdek meer stylingopties!',
                        dk: 'Explorer Flere stylingmuligheder!',
                        pt: 'Explore mais opções de estilo!',
                        es: '&#161;Explora más opciones de estilo!',
                        ru: 'Исследуйте больше вариантов стилей!',
                    }[lang]
                }
                </h1>
                <p>{
                    {
                        en: 'Dive into their properties and how they work. Advanced color, style, size and animation adjustment are all in the Docs.',
                        vi: 'Đi sâu vào thuộc tính của chúng và cách chúng hoạt đọng. Điều chỉnh màu sắc, kiểu dáng, kích thước và hoạt ảnh nâng cao đều có trong Tài liệu.',
                        fr: 'Plongez dans leurs propriétés et leur fonctionnement. Les réglages avancés de couleur, de style, de taille et d\'animation se trouvent tous dans la documentation.',
                        it: 'Immergiti nelle loro proprietà e nel loro funzionamento. Regolazione avanzata di colore, stile, dimensione e animazione sono tutte nei Documenti.',
                        kr: '속성과 작동 방식을 자세히 알아보세요. 고급 색상, 스타일, 크기 및 애니메이션 조정은 모두 Docs에 있습니다.',
                        ja: 'それぞれのプロパティとその動作について詳しく見てみましょう&#12290;高度な色&#12289;スタイル&#12289;サイズ&#12289;アニメーションの調整はすべてドキュメントに記載されています&#12290;',
                        de: 'Erfahren Sie mehr über ihre Eigenschaften und ihre Funktionsweise. Erweiterte Farb-, Stil-, Größen- und Animationsanpassungen finden Sie in den Dokumenten.',
                        nl: 'Duik in hun eigenschappen en hoe ze werken. Geavanceerde kleur-, stijl-, grootte- en animatieaanpassingen staan allemaal in de Docs.',
                        dk: 'Dyk ned i deres egenskaber og hvordan de fungerer. Avanceret farve-, stil-, størrelses- og animationsjustering er alle i Docs.',
                        pt: 'Mergulhe nas suas propriedades e como funcionam. Os ajustes avançados de cor, estilo, tamanho e animação estão todos no Documentos.',
                        es: 'Conozca sus propiedades y cómo funcionan. Los ajustes avanzados de color, estilo, tamaño y animación se encuentran en la documentación.',
                        ru: 'Погрузитесь в их свойства и принципы работы. Расширенные настройки цвета, стиля, размера и анимации &#8212; все это в Docs.',
                    }[lang]
                }</p>
                <a class='btn primary' href='/p/docs.html?styling-icons/basics'>{
                    {
                        en: 'Explore',
                        vi: 'Khám phá',
                        fr: 'Explorer',
                        it: 'Esplorare',
                        kr: '탐구하다',
                        ja: '探検する',
                        de: 'Erkunden',
                        nl: 'Ontdekken',
                        dk: 'Udforske',
                        pt: 'Explorar',
                        es: 'Explorar',
                        ru: 'Исследовать',
                    }[lang]
                }</a>
            </div>
            <div className={`${cssStyle.contentSection} ${cssStyle.compatible} dk-bg`}>
                <div>
                    <h5>{
                        {
                            en: 'Compatible With',
                            vi: 'Tương thích với',
                            fr: 'Compatible avec',
                            it: 'Compatibile con',
                            kr: '호환 가능',
                            ja: '互換性あり',
                            de: 'Kompatibel mit',
                            nl: 'Compatibel met',
                            dk: 'Kompatibel med',
                            pt: 'Compatível com',
                            es: 'Compatible con',
                            ru: 'Совместим с',
                        }[lang]
                    }</h5>
                    <h1>{
                        {
                            en: 'Where You Work',
                            vi: 'Nơi bạn làm việc',
                            fr: 'Où vous travaillez',
                            it: 'Dove lavori',
                            kr: '네가 일하는 곳',
                            ja: '勤務先',
                            de: 'Wo arbeitest du',
                            nl: 'Waar je werkt',
                            dk: 'Hvor du arbejder',
                            pt: 'Onde trabalha',
                            es: 'Donde trabajas',
                            ru: 'Где ты работаешь',
                        }[lang]
                    }</h1>
                </div>
                <ul>
                    <li>
                        <h3>{
                            {
                                en: 'Developers',
                                vi: 'Lập trình viên',
                                fr: 'Développeurs',
                                it: 'Sviluppatori',
                                kr: '개발자',
                                ja: '開発者',
                                de: 'Entwickler',
                                nl: 'Ontwikkelaars',
                                dk: 'Udviklere',
                                pt: 'Desenvolvedores',
                                es: 'Desarrolladores',
                                ru: 'Разработчики',
                            }[lang]
                        }</h3>
                        <ul>
                            <li>
                                <a href='/p/docs.html?adding-icons/basics'>Easy to Use</a>
                            </li>
                            <li>
                                <a href='/p/docs.html?get-started-on-web/setting-up'>Hosted CDN Options</a>
                            </li>
                            <li>Works Perfectly with CSS Frameworks</li>
                        </ul>
                    </li>
                    <li>
                        <h3>{
                            {
                                en: 'Designers',
                                vi: 'Nhà thiết kế đồ họa',
                                fr: 'Créateurs',
                                it: 'Progettisti',
                                kr: '디자이너',
                                ja: 'デザイナー',
                                de: 'Designer',
                                nl: 'Ontwerpers',
                                dk: 'Designere',
                                pt: 'Designers',
                                es: 'Diseñadores',
                                ru: 'Дизайнеры',
                            }[lang]
                        }</h3>
                        <ul>
                            <li>
                                <a href='/p/search.html'>Wide Range of Icons</a>
                            </li>
                            <li>
                                <a href='/p/docs.html?get-started-on-web/setting-up'>Easy Development</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>{
                            {
                                en: 'Content Creators',
                                vi: 'Nhà sáng tạo nội dung',
                                fr: 'Créateurs de contenu',
                                it: 'Creatori di contenuti',
                                kr: '콘텐츠 제작자',
                                ja: 'コンテンツクリエイター',
                                de: 'Inhaltsersteller',
                                nl: 'Contentmakers',
                                dk: 'Indholdsskabere',
                                pt: 'Criadores de conteúdo',
                                es: 'Creadores de contenido',
                                ru: 'Создатели контента',
                            }[lang]
                        }</h3>
                        <ul>
                            <li>
                                <a href='/p/docs.html?get-started-on-web/setting-up'>Install and Host Easily</a>
                            </li>
                            <li>
                                <a href='/p/search.html'>Multiple Styles</a>
                            </li>
                            <li>
                                <a href='/p/docs.html?styling-icons/basics'>Customize Easily</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={`${cssStyle.contentSection} ${cssStyle.getStarted} signup`}>
                <div>
                    <h1>Get started</h1>
                    <p>Get access to the power of the Foricon</p>
                    <a class='btn primary' href='/p/signup.html'>
                        <f-icon i-s='outline' icon='arrow-right-to-bracket'/>Sign up
                    </a><a class='btn secondary' href='/p/docs.html'>
                        <f-icon icon='file-lines'/>View the Docs
                    </a>
                </div>
            </div>
            <div className={`${cssStyle.contentSection} ${cssStyle.pages}`}>
                <a href='/p/hub.html'>
                    <div>
                        <img height='60' src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgu2RsPztgjhUls5ZfAiJvxJ95dXULPYSARYYoJYP-73-qp6GnkN09zQ7Lohja3UMJhq2Zjv78rM2LUOiKMuiE2ZT0xjPKKDw2CQqp5-r7ippkOzKrNWSXtLlMkcnd9K-z-QHo2o8GMbJnGTXd69U5TXvMKCrZZCb99XZZaOlJ9kcEQqa_EbY5qh3JhK0/s320/foricon-hub.png'/>
                    </div>
                    <h5>Foricon Hub</h5>
                    <p>Solve your issues and request features and icons</p>
                </a>
                <a href='/p/stream-chilzymusic.html'>
                    <div>
                        <img height='42' src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsRBUY7vhKuPaXrUxG6BipYVH90Ir-TngNmNkSV9fT5hTVVr2M_80JyG00NJb8CEaxn1cZuIMfWPkeL25ais09c9-zCYs0W6GQQdZIArHMCXl0ZoD6AfUGikFbXhEfBLUXRH5j-x1xeLsBo0xWokoFtGm1nH8uhSEmqJI6r46XlDJzPC-DWbLstQF6DC4/s360/chilzymusic-m.png'/>
                    </div>
                    <h5>Foricon Music</h5>
                    <p>Stream and download music no limit for free</p>
                </a>
                <a href='/p/fotorno.html'>
                    <div>
                        <img height='60' src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq7qnPl4uWBfAYXhQ5quYi_hauu8gNbUU5HdkXNIZ8Efgcpjh85N0_0JLr2J0oeru8S6p8AQXIfVxJ7k0wDZ1MYNSKEQTbkpBFyWt82XelBk5-63143dbrFddbah2ZS-03q7FND2de7ec3SExU1MiU4C4xp-5ExivgiOAnTBimjh0NQBpSIL_SvzkL4Mg/s250/foricon-fotorno.png'/>
                    </div>
                    <h5>Foricon Fotorno</h5>
                    <p>Quickly enhance your image with AI tools</p>
                </a>
                <a href='/p/support.html'>
                    <div>
                        <f-icon icon='circle-question'/>
                    </div>
                    <h5>Support</h5>
                    <p>Have a question about us? Find your answers here</p>
                </a>
            </div>
        </div>
    );
}
