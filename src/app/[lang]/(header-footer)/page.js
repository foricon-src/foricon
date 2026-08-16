'use client';

import { useContext, useMemo, useState } from 'react';
import FLink from 'Com/link';
import { UserContext } from 'Com/user';
import { IconContext } from 'Com/icons';
import Code from 'Com/code';
import Search from 'Com/search';
import Img from 'Com/img';
import useGo from 'Com/go';
import Join from 'Com/join';
import logo from 'Pub/foricon-f-logo.png';
import cssStyle from './page.module.css';

export default function Page({ params: { lang } }) {
    let go = useGo();
    let user = useContext(UserContext);
    let icons = useContext(IconContext);

    let [ icon, setIcon ] = useState('brush');
    let [ style, setStyle ] = useState('');
    let [ scale, setScale ] = useState('');
    let [ size, setSize ] = useState('');
    let [ rotate, setRotate ] = useState('');
    let [ animation, setAnimation ] = useState('');
    let [ animationSpeed, setAnimationSpeed ] = useState('');

    let iconArrs = useMemo(() => {
        if (!icons) return;

        let added = [];
        let arrs = []

        for (let i = 0; i < 4; i++) {
            let arr = []
            while (arr.length < 10) {
                let icon = random(icons.b2);
                let { name, styles } = icon;
                let style = random(styles);
                if (!added.includes(`${name} ${style}`)) {
                    arr.push({ name, style });
                    added.push(`${name} ${style}`);
                }
            }
            arrs.push(arr);
        }
        return arrs;
    }, [ icons ])

    let html = useMemo(() => {
        return (
            `<f-icon icon='${icon}'${Join(
                ' ',
                '',
                !!style && `i-s='${style}'`,
                !!scale && `scale='${scale}'`,
                !!size && `size='${size}'`,
                !!rotate && `rotate='${rotate}'`,
                !!animation && `animation='${Join('-', animation, !!animationSpeed && animationSpeed)}'`,
            )}></f-icon>`
        )
    }, [ icon, style, scale, size, rotate, animation, animationSpeed ])

    function IconFamiliesIcons(style) {
        return [ 'clone', 'image', 'file-lines', 'grid-4', 'compass', 'rectangle-stack' ].map(i =>
            <f-icon key={i} icon={i} i-s={style} className='auto-line-height'/>
        )
    }

    return (
        <div className={cssStyle.page}>
            <div className={cssStyle.hero}>
                <Img src={logo}/>
                <FLink href='/changelog'>
                    <f-icon i-s='outline' icon='hashtag'/><span>{webData.verFull}</span>
                </FLink>
                <h1>{
                    {
                        en: 'Icons That Make Your Design Shine',
                        vi: 'Kho icon font free, đầu tiên tại Việt Nam',
                        fr: 'Des icônes qui font briller votre design',
                        it: 'Icone che fanno brillare il tuo design',
                        ko: '디자인을 빛나게 하는 아이콘',
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
                        ko: '몇 초 만에 사용자 지정, 애니메이션 및 통합이 가능한 아이콘으로 더욱 스마트하게 디자인하세요',
                        ja: '数秒でカスタマイズ、アニメーション、統合できるアイコンで、よりスマートにデザインできます',
                        de: 'Gestalten Sie intelligenter mit Symbolen, die sich in Sekundenschnelle anpassen, animieren und integrieren lassen',
                        nl: 'Ontwerp slimmer met pictogrammen die u in seconden kunt aanpassen, animeren en integreren',
                        dk: 'Design smartere med ikoner, der tilpasser, animerer og integrerer på få sekunder',
                        pt: 'Crie um design mais inteligente com ícones que podem ser personalizados, animados e integrados em segundos',
                        es: 'Diseñe de forma más inteligente con íconos que se personalizan, animan e integran en segundos',
                        ru: 'Проектируйте умнее с помощью иконок, которые можно настраивать, анимировать и интегрировать за считанные секунды.',
                    }[lang]
                }</p>
                <Search placeholder={
                    {
                        en: 'Find your perfect icon - start typing...',
                        vi: 'Tìm biểu tượng hoàn hảo - bắt đầu nhập...',
                        fr: 'Trouvez votre icône parfaite - commencez à taper...',
                        it: "Trova l'icona perfetta: inizia a digitare...",
                        ko: '당신에게 딱 맞는 아이콘을 찾아보세요 - 입력을 시작하세요...',
                        ja: '最適なアイコンを見つけて、入力を開始してください...',
                        de: 'Finden Sie Ihr perfektes Symbol - beginnen Sie mit der Eingabe …',
                        dk: 'Find dit perfekte ikon - begynd at skrive...',
                        nl: 'Vind het perfecte pictogram - begin met typen...',
                        pt: 'Encuentra tu icono perfecto: comienza a escribir...',
                        es: 'Encontre o ícone perfeito - comece a escrever...',
                        ru: 'Найдите свой идеальный значок — начните вводить текст...',
                    }[lang]
                }/>
            </div>
            <div className={`${cssStyle.contentSection} ${cssStyle.icons}`}>
                {
                    iconArrs?.map((arr, i) =>
                        <div key={i}>{
                            arr.map(i => <f-icon key={`${i.name} | ${i.style}`} icon={i.name} i-s={i.style} className='auto-line-height'/>)
                        }</div>
                    )
                }
                <div>
                    <h1>
                        <span class='icon-count'/>+
                        {
                            ` ${
                                {
                                    en: 'icons',
                                    vi: 'biểu tượng',
                                    fr: 'icônes',
                                    it: 'icone',
                                    ko: '아이콘',
                                    ja: 'アイコン',
                                    de: 'Symbole',
                                    nl: 'iconen',
                                    dk: 'ikoner',
                                    pt: 'ícones',
                                    es: 'iconos',
                                    ru: 'иконки',
                                }[lang]
                            }`
                        }
                    </h1>
                    <p>{
                        {
                            en: 'are ready to be used',
                            vi: 'sẵn sàng để sử dụng',
                            fr: 'sont prêts à être utilisés',
                            it: 'sono pronti per essere utilizzati',
                            ko: '사용할 준비가 되었습니다',
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
            <div className={`${cssStyle.contentSection} ${cssStyle.iconFamilies} dk-bg`}>
                <h6 class='tagline'>{
                    {
                        en: 'Icon Families',
                        vi: 'Bộ biểu tượng',
                        fr: "Familles d'icônes",
                        it: 'Famiglie di icone',
                        ko: '아이콘 패밀리',
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
                        ko: '프로젝트를 장식하는 4가지 방법',
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
                    <li onClick={() => go('search?f=regular&s=solid')}>
                        <div>{IconFamiliesIcons()}</div>
                        <h5>Regular Solid</h5>
                    </li>
                    <li onClick={() => go('search?f=regular&s=outline')}>
                        <div>{IconFamiliesIcons('outline')}</div>
                        <h5>Regular Outline</h5>
                    </li>
                    <li onClick={() => go('search?f=duotone&s=solid')}>
                        <div>{IconFamiliesIcons('duotone/solid')}</div>
                        <h5>Duotone Solid</h5>
                    </li>
                    <li onClick={() => go('search?f=duotone&s=outline')}>
                        <div>{IconFamiliesIcons('duotone/outline')}</div>
                        <h5>Duotone Outline</h5>
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
                        ko: '사용자 정의가 쉽습니다',
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
                        ko: '나만의 방식으로 아이콘을 스타일링하세요',
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
                        ko: 'Foricon을 사용하면 고유한 스타일과 브랜딩에 맞게 아이콘을 사용자 정의할 수 있습니다. 색상, 크기, 스타일을 조정하고 변형하고 애니메이션을 적용하여 모든 디자인에서 일관된 시각적 정체성을 만드세요. 아이콘을 진정으로 당신만의 것으로 만드세요.',
                        ja: 'Foricon を使用すると、独自のスタイルやブランドに合わせてアイコンをカスタマイズできます。色、サイズ、スタイルを調整し、変形やアニメーション化を行って、すべてのデザインに一貫したビジュアル アイデンティティを作成します。当社のアイコンを真に自分らしくしましょう。',
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
                                ko: '상',
                                ja: 'アイコン',
                                de: 'Symbol',
                                nl: 'Icon',
                                dk: 'Ikon',
                                pt: 'Ícone',
                                es: 'Icono',
                                ru: 'Икона',
                            }[lang]
                        }</h6>
                        <ul className='btn-list darker'>
                            {
                                [ 'brush', 'grid-4', 'mug-tea-hot', 'layers', 'palette', 'pencil' ].map(i => (
                                    <li key={i} onClick={() => setIcon(i)} className={`tooltip top${icon == i ? ' active' : ''}`}>
                                        <f-icon icon={i} className='auto-line-height'/>
                                        <span>{i}</span>
                                    </li>
                                ))
                            }
                            <li onClick={() => go('search')} className='tooltip top line'>
                                <f-icon icon='arrow-right' i-s='outline' className='auto-line-height'/>
                                <span>{
                                    {
                                        en: 'More icons!',
                                        vi: 'Nhiều biểu tượng hơn!',
                                        fr: "Plus d'icônes !",
                                        it: 'Altre icone!',
                                        ko: '아이콘이 더 많아졌어요!',
                                        ja: 'アイコンをもっと増やそう！',
                                        de: 'Mehr Symbole!',
                                        nl: 'Meer pictogrammen!',
                                        dk: 'Flere ikoner!',
                                        pt: 'Mais ícones!',
                                        es: '¡Más iconos!',
                                        ru: 'Больше иконок!',
                                    }[lang]
                                }</span>
                            </li>
                        </ul>
                        <h6>{
                            {
                                en: 'Style',
                                vi: 'Kiểu',
                                fr: 'Style',
                                it: 'Stile',
                                ko: '스타일',
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
                                <li key={i} onClick={() => setStyle(i)} className={`tooltip top${style == i ? ' active' : ''}`}>
                                    <f-icon icon={`circle${i.startsWith('duotone/') ? '-half' : ''}`} i-s={i} className='auto-line-height'/>
                                    <span>{
                                        i == 'outline' ? 'Outline' :
                                        i == 'duotone/solid' ? 'Duotone Solid' :
                                        i == 'duotone/outline' ? 'Duotone Outline' :
                                        'Solid'
                                    }</span>
                                </li>
                            ))
                        }</ul>
                        <h6>{
                            {
                                en: 'Scale',
                                vi: 'Tỉ lệ',
                                fr: 'Échelle',
                                it: 'Scala',
                                ko: '규모',
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
                                ko: '크기',
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
                                ko: '회전하다',
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
                            [ '', '90', '180', '270', 'flip-x', 'flip-y' ].map(i => (
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
                                ko: '생기',
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
                                'spin', 'spin-reverse', 'shake',
                                'flip-x', 'flip-y', 'flip-xy',
                                'bounce',
                            ].map(i => (
                                <li key={i} onClick={() => setAnimation(i)} className={animation == i && 'active'}>{
                                    i || <f-icon icon='empty-set' i-s='outline'/>
                                }</li>
                            ))
                        }</ul>
                        {animation && <>
                            <h6>{
                                {
                                    en: 'Animation speed',
                                    vi: 'Tốc độ hoạt ảnh',
                                    fr: "Vitesse d'animation",
                                    it: 'Velocità di animazione',
                                    ko: '애니메이션 속도',
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
                                    'semifast', 'fast', 'xfast', 'xxfast',
                                ].map(i => (
                                    <li key={i} onClick={() => setAnimationSpeed(i)} className={animationSpeed == i && 'active'}>{
                                        i || <f-icon icon='empty-set' i-s='outline'/>
                                    }</li>
                                ))
                            }</ul>
                        </>}
                        <Code>{html}</Code>
                    </div>
                    <div className='dk-bg' dangerouslySetInnerHTML={{ __html: html }}/>
                </div>
            </div>
            <div className={`${cssStyle.contentSection} ${cssStyle.moreStyling} dk-bg`}>
                <h1>{
                    {
                        en: 'Explore More Styling Options!',
                        vi: 'Khám phá thêm nhiều tùy chọn hơn!',
                        fr: "Explorez davantage d'options de style !",
                        it: 'Esplora altre opzioni di stile!',
                        ko: '더욱 다양한 스타일링 옵션을 탐험해보세요!',
                        ja: 'エクスプローラーのより多くのスタイル オプション！',
                        de: 'Entdecken Sie weitere Styling-Optionen!',
                        nl: 'Ontdek meer stylingopties!',
                        dk: 'Explorer Flere stylingmuligheder!',
                        pt: 'Explore mais opções de estilo!',
                        es: '¡Explora más opciones de estilo!',
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
                        ko: '속성과 작동 방식을 자세히 알아보세요. 고급 색상, 스타일, 크기 및 애니메이션 조정은 모두 Docs에 있습니다.',
                        ja: 'それぞれのプロパティとその動作について詳しく見てみましょう。高度な色、スタイル、サイズ、アニメーションの調整はすべてドキュメントに記載されています。',
                        de: 'Erfahren Sie mehr über ihre Eigenschaften und ihre Funktionsweise. Erweiterte Farb-, Stil-, Größen- und Animationsanpassungen finden Sie in den Dokumenten.',
                        nl: 'Duik in hun eigenschappen en hoe ze werken. Geavanceerde kleur-, stijl-, grootte- en animatieaanpassingen staan allemaal in de Docs.',
                        dk: 'Dyk ned i deres egenskaber og hvordan de fungerer. Avanceret farve-, stil-, størrelses- og animationsjustering er alle i Docs.',
                        pt: 'Mergulhe nas suas propriedades e como funcionam. Os ajustes avançados de cor, estilo, tamanho e animação estão todos no Documentos.',
                        es: 'Conozca sus propiedades y cómo funcionan. Los ajustes avanzados de color, estilo, tamaño y animación se encuentran en la documentación.',
                        ru: 'Погрузитесь в их свойства и принципы работы. Расширенные настройки цвета, стиля, размера и анимации &#8212; все это в Docs.',
                    }[lang]
                }</p>
                <FLink class='btn primary' href='/docs?styling-icons/basics'>{
                    {
                        en: 'Explore',
                        vi: 'Khám phá',
                        fr: 'Explorer',
                        it: 'Esplorare',
                        ko: '탐구하다',
                        ja: '探検する',
                        de: 'Erkunden',
                        nl: 'Ontdekken',
                        dk: 'Udforske',
                        pt: 'Explorar',
                        es: 'Explorar',
                        ru: 'Исследовать',
                    }[lang]
                }</FLink>
            </div>
            <div className={`${cssStyle.contentSection} ${cssStyle.integration}`}>
                <div>
                    <h6 class='tagline'>Foricon Package</h6>
                    <h1>{
                        {
                            en: 'All of Our Icons. One Line of Code.',
                            vi: 'Tất cả biểu tượng. Một dòng lệnh.',
                            fr: 'Toutes nos icônes. Une seule ligne de code.',
                            it: 'Tutte le nostre icone. Una riga di codice.',
                            ko: '모든 아이콘을 단 한 줄의 코드로',
                            ja: 'すべてのアイコンを、たった1行のコードで。',
                            de: 'Alle unsere Icons. Eine Zeile Code.',
                            nl: 'Al onze iconen. Eén regel code.',
                            dk: 'Alle vores ikoner. Én linje kode.',
                            pt: 'Todos os nossos ícones. Uma linha de código.',
                            es: 'Todos nuestros iconos. Una línea de código.',
                            ru: 'Все наши иконки. Одна строка кода.',
                        }[lang]
                    }</h1>
                    <p>{
                        {
                            en: 'Integrate our icon library into any projects of yours, within just a single, simple embed code.',
                            vi: 'Tích hợp thư viện của chúng tôi vào bất ký dự án của bạn chỉ với một đoạn mã nhúng đơn giản.',
                            fr: "Intégrez notre bibliothèque d'icônes à vos projets grâce à un simple code d'intégration unique.",
                            it: 'Integra la nostra libreria di icone in qualsiasi tuo progetto utilizzando un unico, semplice codice di incorporamento.',
                            ko: '단 하나의 간단한 임베드 코드로 귀하의 모든 프로젝트에 저희 아이콘 라이브러리를 통합해 보세요.',
                            ja: 'たった一つのシンプルな埋め込みコードで、当社のアイコンライブラリをあらゆるプロジェクトに組み込むことができます。',
                            de: 'Integrieren Sie unsere Icon-Bibliothek mithilfe eines einzigen, einfachen Einbettungscodes in Ihre Projekte.',
                            nl: 'Integreer onze iconenbibliotheek in al je projecten met slechts één eenvoudige embed-code.',
                            dk: 'Integrer vores ikonbibliotek i alle dine projekter med blot en enkelt, simpel indlejringskode.',
                            pt: 'Integre a nossa biblioteca de ícones em qualquer um dos seus projetos, com apenas um código de incorporação simples.',
                            es: 'Integra nuestra biblioteca de iconos en cualquiera de tus proyectos mediante un único y sencillo código de inserción.',
                            ru: 'Интегрируйте нашу библиотеку иконок в любые свои проекты с помощью всего одного простого кода для вставки.',
                        }[lang]
                    }</p>
                    <FLink class='btn primary' href='/account/package'>Foricon Package</FLink>
                </div>
                <div>
                    <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuciTIEKRlA_20KiNnOyUeny9fCvNkfD33iTLIYl3YOtT8Z3Fyiu5GJ08jCaJI5Pef-2mPUn34O0y0WIF83RUojLoh_B1nVU8wpTu9QbLdjq5alkzCoXDnNg5_O9uS8XBHbozp7evFgFEumm4ZRfkSC4t8naEuOYntcT4Afwdig2qh5lCYCx0hFBteOpU/s1600/screenshot.png'/>
                </div>
            </div>
            {!user && <div className={`${cssStyle.contentSection} ${cssStyle.getStarted}`}>
                <div>
                    <h1>Get started</h1>
                    <p>Get access to the power of the Foricon</p>
                    <FLink class='btn primary' href='/signup'>
                        <f-icon i-s='outline' icon='arrow-right-to-bracket'/>Sign up
                    </FLink>
                    <FLink class='btn secondary' href='/docs'>
                        <f-icon icon='file-lines'/>View the Docs
                    </FLink>
                </div>
            </div>}
        </div>
    )
}
