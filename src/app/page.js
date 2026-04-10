'use client';

import { useEffect } from 'react';
// import Image from 'next/image';
// import favicon from 'Ass/foricon-f-favicon.png';
import './page.css';
import 'Com/utilities';

export default function Home() {
    useEffect(() => (async () => {
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
            icons.insertBefore(div, querySelec('#icons > div:last-child'));
        }
    })(), [])
    return (
        <>
            <div className='section' id='hero'>
                <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBX39PGrjfEdpF2RTkpAaKi84zc4JJ5cs7MzKgtnPH6jepJLRGh8zTwACp0VH2Dt5dj7AZH39t4pvfY69Fc8yt_6W2Ya0iwT432qMJURupVCcq6ZHAPAjaJO85Dw8Gj2LppRLBKkJYUTbq6yAFFRc2ezL66KkHDXR0ksoDroknEakKo0PlBODWcq3aXCc/s1600/foricon-f.png'/>
                <a href='/p/new-changelog.html'>
                    <f-icon i-s='outline' icon='hashtag'/><span>{webData.verFull}</span>
                </a>
                <h1>
                    <lang value='en'>Icons That Make Your Design Shine</lang>
                    <lang value='vi'>Kho icon font free, đầu tiên tại Việt Nam</lang>
                    <lang value='fr'>Des icônes qui font briller votre design</lang>
                    <lang value='it'>Icone che fanno brillare il tuo design</lang>
                    <lang value='kr'>디자인을 빛나게 하는 아이콘</lang>
                    <lang value='ja'>あなたのデザインを輝かせるアイコン</lang>
                    <lang value='de'>Icons, die Ihr Design zum Strahlen bringen</lang>
                    <lang value='nl'>Iconen die je ontwerp laten schitteren</lang>
                    <lang value='dk'>Ikoner der får dit design til at skinne</lang>
                    <lang value='pt'>Ícones que fazem seu design brilhar</lang>
                    <lang value='es'>Iconos que hacen que tu diseño brille</lang>
                    <lang value='ru'>Иконки, которые делают ваш дизайн ярким</lang>
                </h1>
                <p>
                    <lang value='en'>Design smarter with icons that customize, animate, and integrate in seconds</lang>
                    <lang value='vi'>Thiết kế thông minh hơn với các biểu tượng có thể tùy chỉnh, animate và tích hợp trong vài giây</lang>
                    <lang value='fr'>Concevez plus intelligemment avec des icônes qui se personnalisent, s'animent et s'intègrent en quelques secondes</lang>
                    <lang value='it'>Progetta in modo più intelligente con icone che si personalizzano, si animano e si integrano in pochi secondi</lang>
                    <lang value='kr'>몇 초 만에 사용자 지정, 애니메이션 및 통합이 가능한 아이콘으로 더욱 스마트하게 디자인하세요</lang>
                    <lang value='ja'>数秒でカスタマイズ&#12289;アニメーション&#12289;統合できるアイコンで&#12289;よりスマートにデザインできます</lang>
                    <lang value='de'>Gestalten Sie intelligenter mit Symbolen, die sich in Sekundenschnelle anpassen, animieren und integrieren lassen</lang>
                    <lang value='nl'>Ontwerp slimmer met pictogrammen die u in seconden kunt aanpassen, animeren en integreren</lang>
                    <lang value='dk'>Design smartere med ikoner, der tilpasser, animerer og integrerer på få sekunder</lang>
                    <lang value='pt'>Crie um design mais inteligente com ícones que podem ser personalizados, animados e integrados em segundos</lang>
                    <lang value='es'>Diseñe de forma más inteligente con íconos que se personalizan, animan e integran en segundos</lang>
                    <lang value='ru'>Проектируйте умнее с помощью иконок, которые можно настраивать, анимировать и интегрировать за считанные секунды.</lang>
                </p>
                <label>
                    <f-icon i-s='outline' icon='magnifying-glass'/>
                    <input {...{
                        'lang:en-placeholder': 'Find your perfect icon - start typing...',
                        'lang:vi-placeholder': 'Tìm biểu tượng hoàn hảo - bắt đầu nhập...',
                        'lang:fr-placeholder': 'Trouvez votre icône parfaite - commencez à taper...',
                        'lang:it-placeholder': 'Trova l&apos;icona perfetta: inizia a digitare...',
                        'lang:kr-placeholder': '당신에게 딱 맞는 아이콘을 찾아보세요 - 입력을 시작하세요...',
                        'lang:ja-placeholder': '最適なアイコンを見つけて、入力を開始してください...',
                        'lang:de-placeholder': 'Finden Sie Ihr perfektes Symbol - beginnen Sie mit der Eingabe …',
                        'lang:dk-placeholder': 'Find dit perfekte ikon - begynd at skrive...',
                        'lang:nl-placeholder': 'Vind het perfecte pictogram - begin met typen...',
                        'lang:pt-placeholder': 'Encuentra tu icono perfecto: comienza a escribir...',
                        'lang:es-placeholder': 'Encontre o ícone perfeito - comece a escrever...',
                        'lang:ru-placeholder': 'Найдите свой идеальный значок — начните вводить текст...',
                    }}/>
                </label>
            </div>
            <div class='content-section' id='icons'>
                <div>
                    <h1>
                        <span class='icon-count'/>+
                        <lang value='en'>icons</lang>
                        <lang value='vi'>biểu tượng</lang>
                        <lang value='fr'>icônes</lang>
                        <lang value='it'>icone</lang>
                        <lang value='kr'>아이콘</lang>
                        <lang value='ja'>アイコン</lang>
                        <lang value='de'>Symbole</lang>
                        <lang value='nl'>iconen</lang>
                        <lang value='dk'>ikoner</lang>
                        <lang value='pt'>ícones</lang>
                        <lang value='es'>iconos</lang>
                        <lang value='ru'>иконки</lang>
                    </h1>
                    <p>
                        <lang value='en'>are ready to be used</lang>
                        <lang value='vi'>sẵn sàng để sử dụng</lang>
                        <lang value='fr'>sont prêts à être utilisés</lang>
                        <lang value='it'>sono pronti per essere utilizzati</lang>
                        <lang value='kr'>사용할 준비가 되었습니다</lang>
                        <lang value='ja'>すぐに使える</lang>
                        <lang value='de'>sind einsatzbereit</lang>
                        <lang value='nl'>zijn klaar voor gebruik</lang>
                        <lang value='dk'>er klar til at blive brugt</lang>
                        <lang value='pt'>estão prontos para serem utilizados</lang>
                        <lang value='es'>están listos para ser utilizados</lang>
                        <lang value='ru'>готовы к использованию</lang>
                    </p>
                </div>
            </div>
            <div class='content-section' id='integration'>
                <div>
                    <h6 class='tagline'>
                        <lang value='en'>Integration</lang>
                        <lang value='vi'>Tích hợp</lang>
                        <lang value='fr'>L'intégration</lang>
                        <lang value='it'>Integrazione</lang>
                        <lang value='kr'>완성</lang>
                        <lang value='ja'>統合</lang>
                        <lang value='de'>Integration</lang>
                        <lang value='nl'>Integratie</lang>
                        <lang value='dk'>Integration</lang>
                        <lang value='pt'>Integração</lang>
                        <lang value='es'>Integración</lang>
                        <lang value='ru'>Интеграция</lang>
                    </h6>
                    <h1>
                        <lang value='en'>Easy Integration,<br/>Stunning Results</lang>
                        <lang value='vi'>Dễ dàng tích hợp,<br/>Kết quả bắt mắt</lang>
                        <lang value='fr'>Intégration facile,<br/>Résultats époustouflants</lang>
                        <lang value='it'>Facile integrazione,<br/>Risultati sorprendenti</lang>
                        <lang value='kr'>쉬운 통합,<br/>놀라운 결과</lang>
                        <lang value='ja'>簡単な統合&#12289;<br/>素晴らしい結果</lang>
                        <lang value='de'>Einfache Integration,<br/>umwerfende Ergebnisse</lang>
                        <lang value='nl'>Eenvoudige integratie,<br/>Verbluffende resultaten</lang>
                        <lang value='dk'>Nem integration,<br/>Fantastiske resultater</lang>
                        <lang value='pt'>Fácil Integração,<br/>Resultados impressionantes</lang>
                        <lang value='es'>Fácil integración,<br/>resultados sorprendentes</lang>
                        <lang value='ru'>Простая интеграция,<br/>Потрясающие результаты</lang>
                    </h1>
                    <p>
                        <lang value='en'>Integrating our icon library into your projects is a breeze. Simply choose the icons you need, get its code, and start using them right away. With our extensive collection and easy-to-use interface, you'll find the perfect icons to elevate your designs.</lang>
                        <lang value='vi'>Tích hợp thư viện icon của chúng tôi vào các dự án của bạn rất dễ. Chỉ cần chọn các biểu tượng bạn cần, lấy mã nhúng của biểu tượng đó và bắt đầu sử dụng ngay. Với bộ sưu tập phong phú và giao diện dễ sử dụng của chúng tôi, bạn sẽ tìm thấy các biểu tượng hoàn hảo để nâng tầm thiết kế của mình.</lang>
                        <lang value='fr'>L'intégration de notre bibliothèque d'icônes dans vos projets est un jeu d'enfant. Choisissez simplement les icônes dont vous avez besoin, obtenez leur code et commencez à les utiliser immédiatement. Grâce à notre vaste collection et à notre interface facile à utiliser, vous trouverez les icônes parfaites pour rehausser vos créations.</lang>
                        <lang value='it'>Integrare la nostra libreria di icone nei tuoi progetti è un gioco da ragazzi. Scegli semplicemente le icone di cui hai bisogno, ottieni il codice e inizia a usarle subito. Con la nostra vasta collezione e l'interfaccia facile da usare, troverai le icone perfette per migliorare i tuoi design.</lang>
                        <lang value='kr'>아이콘 라이브러리를 프로젝트에 통합하는 것은 아주 간단합니다. 필요한 아이콘을 선택하고, 코드를 받고, 바로 사용하기 시작하면 됩니다. 광범위한 컬렉션과 사용하기 쉬운 인터페이스로 디자인을 한 단계 업그레이드할 완벽한 아이콘을 찾을 수 있습니다.</lang>
                        <lang value='ja'>当社のアイコン ライブラリをプロジェクトに統合するのは簡単です&#12290;必要なアイコンを選択し&#12289;コードを取得して&#12289;すぐに使い始めるだけです&#12290;当社の豊富なコレクションと使いやすいインターフェイスにより&#12289;デザインを向上させる完璧なアイコンが見つかります&#12290;</lang>
                        <lang value='de'>Die Integration unserer Symbolbibliothek in Ihre Projekte ist ein Kinderspiel. Wählen Sie einfach die gewünschten Symbole aus, holen Sie sich den Code und verwenden Sie sie sofort. Mit unserer umfangreichen Sammlung und der benutzerfreundlichen Oberfläche finden Sie die perfekten Symbole, um Ihre Designs aufzuwerten.</lang>
                        <lang value='nl'>Het integreren van onze icoonbibliotheek in uw projecten is een fluitje van een cent. Kies gewoon de iconen die u nodig hebt, ontvang de code en begin ze meteen te gebruiken. Met onze uitgebreide collectie en gebruiksvriendelijke interface vindt u de perfecte iconen om uw ontwerpen naar een hoger niveau te tillen.</lang>
                        <lang value='dk'>At integrere vores ikonbibliotek i dine projekter er en leg. Du skal blot vælge de ikoner, du har brug for, få dens kode, og begynde at bruge dem med det samme. Med vores omfattende samling og brugervenlige grænseflade finder du de perfekte ikoner til at løfte dine designs.</lang>
                        <lang value='pt'>Integrar a nossa biblioteca de ícones nos seus projetos é muito fácil. Basta escolher os ícones de que necessita, obter o código e começar a utilizá-los imediatamente. Com a nossa extensa coleção e interface fácil de utilizar, encontrará os ícones perfeitos para elevar os seus designs.</lang>
                        <lang value='es'>Integrar nuestra biblioteca de íconos en tus proyectos es muy fácil. Simplemente elige los íconos que necesitas, obtén su código y comienza a usarlos de inmediato. Con nuestra amplia colección y nuestra interfaz fácil de usar, encontrarás los íconos perfectos para mejorar tus diseños.</lang>
                        <lang value='ru'>Интеграция нашей библиотеки иконок в ваши проекты &#8212; это просто. Просто выберите нужные вам иконки, получите их код и начните использовать их прямо сейчас. С нашей обширной коллекцией и простым в использовании интерфейсом вы найдете идеальные иконки, которые поднимут ваши проекты.</lang>
                    </p>
                    <a class='btn primary' href='/p/docs.html?adding-icons/basics'>
                        <lang value='en'>Basics of Adding Icons</lang>
                        <lang value='vi'>Hướng dẫn về thêm các icon</lang>
                        <lang value='fr'>Notions de base sur l'ajout d'icônes</lang>
                        <lang value='it'>Nozioni di base sull'aggiunta di icone</lang>
                        <lang value='kr'>아이콘 추가의 기본 사항</lang>
                        <lang value='ja'>アイコン追加の基本</lang>
                        <lang value='de'>Grundlagen zum Hinzufügen von Symbolen</lang>
                        <lang value='nl'>Basisprincipes van het toevoegen van pictogrammen</lang>
                        <lang value='dk'>Grundlæggende om tilføjelse af ikoner</lang>
                        <lang value='pt'>Noções básicas de adição de ícones</lang>
                        <lang value='es'>Conceptos básicos para agregar iconos</lang>
                        <lang value='ru'>Основы добавления иконок</lang>
                    </a>
                </div>
                <div>
                    <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuciTIEKRlA_20KiNnOyUeny9fCvNkfD33iTLIYl3YOtT8Z3Fyiu5GJ08jCaJI5Pef-2mPUn34O0y0WIF83RUojLoh_B1nVU8wpTu9QbLdjq5alkzCoXDnNg5_O9uS8XBHbozp7evFgFEumm4ZRfkSC4t8naEuOYntcT4Afwdig2qh5lCYCx0hFBteOpU/s1600/screenshot.png'/>
                </div>
            </div>
            <div class='content-section' id='icon-families'>
                <h6 class='tagline'>
                    <lang value='en'>Icon Families</lang>
                    <lang value='vi'>Bộ biểu tượng</lang>
                    <lang value='fr'>Familles d'icônes</lang>
                    <lang value='it'>Famiglie di icone</lang>
                    <lang value='kr'>아이콘 패밀리</lang>
                    <lang value='ja'>アイコンファミリー</lang>
                    <lang value='de'>Symbolfamilien</lang>
                    <lang value='nl'>Icoonfamilies</lang>
                    <lang value='dk'>Ikonfamilier</lang>
                    <lang value='pt'>Famílias de ícones</lang>
                    <lang value='es'>Familias de iconos</lang>
                    <lang value='ru'>Семейства иконок</lang>
                </h6>
                <h1>
                    <lang value='en'>4 Ways to Decorate Your Project</lang>
                    <lang value='vi'>4 cách để trang trí dự án của bạn</lang>
                    <lang value='fr'>4 façons de décorer votre projet</lang>
                    <lang value='it'>4 modi per decorare il tuo progetto</lang>
                    <lang value='kr'>프로젝트를 장식하는 4가지 방법</lang>
                    <lang value='ja'>プロジェクトを飾る4つの方法</lang>
                    <lang value='de'>4 Möglichkeiten, Ihr Projekt zu dekorieren</lang>
                    <lang value='nl'>4 manieren om uw project te decoreren</lang>
                    <lang value='dk'>4 måder at dekorere dit projekt på</lang>
                    <lang value='pt'>4 formas de decorar o seu projeto</lang>
                    <lang value='es'>4 formas de decorar tu proyecto</lang>
                    <lang value='ru'>4 способа украсить ваш проект</lang>
                </h1>
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
            <div class='content-section' id='customizable'>
                <h6 class='tagline'>
                    <lang value='en'>Easy to Customize</lang>
                    <lang value='vi'>Dễ dàng tùy chỉnh</lang>
                    <lang value='fr'>Facile à personnaliser</lang>
                    <lang value='it'>Facile da personalizzare</lang>
                    <lang value='kr'>사용자 정의가 쉽습니다</lang>
                    <lang value='ja'>簡単にカスタマイズ可能</lang>
                    <lang value='de'>Einfach anzupassen</lang>
                    <lang value='nl'>Gemakkelijk aan te passen</lang>
                    <lang value='dk'>Let at tilpasse</lang>
                    <lang value='pt'>Fácil de personalizar</lang>
                    <lang value='es'>Fácil de personalizar</lang>
                    <lang value='ru'>Легко настраивать</lang>
                </h6>
                <h1>
                    <lang value='en'>Style Our Icons in Your Own Way</lang>
                    <lang value='vi'>Tùy chỉnh icon của chúng tôi theo cách riêng của bạn</lang>
                    <lang value='fr'>Personnalisez nos icônes à votre façon</lang>
                    <lang value='it'>Personalizza le nostre icone a modo tuo</lang>
                    <lang value='kr'>나만의 방식으로 아이콘을 스타일링하세요</lang>
                    <lang value='ja'>アイコンを自分好みにカスタマイズ</lang>
                    <lang value='de'>Gestalten Sie unsere Icons auf Ihre eigene Art</lang>
                    <lang value='nl'>Stijl onze iconen op jouw eigen manier</lang>
                    <lang value='dk'>Style vores ikoner på din egen måde</lang>
                    <lang value='pt'>Estilize os nossos ícones à sua maneira</lang>
                    <lang value='es'>Dale estilo a nuestros íconos a tu manera</lang>
                    <lang value='ru'>Оформляйте наши иконки по-своему</lang>
                </h1>
                <p>
                    <lang value='en'>Foricon allows you to customize icons to match your unique style and branding. Adjust colors, sizes, styles, transform and animate them to create a cohesive visual identity across all your designs. Make our icons truly yours.</lang>
                    <lang value='vi'>Foricon cho phép bạn tùy chỉnh các biểu tượng để phù hợp với phong cách và thương hiệu độc đáo của bạn. Điều chỉnh màu sắc, kích thước, kiểu dáng, biến đổi và tạo hoạt ảnh cho chúng để tạo ra sự đồng bộ trên tất cả các thiết kế của bạn. Làm cho các biểu tượng của chúng tôi thực sự là của bạn.</lang>
                    <lang value='fr'>Foricon vous permet de personnaliser vos icônes pour qu'elles correspondent à votre style et à votre image de marque. Ajustez les couleurs, les tailles, les styles, transformez-les et animez-les pour créer une identité visuelle cohérente sur toutes vos créations. Personnalisez nos icônes.</lang>
                    <lang value='it'>Foricon ti consente di personalizzare le icone per adattarle al tuo stile e al tuo marchio unici. Regola colori, dimensioni, stili, trasformali e animali per creare un'identità visiva coesa in tutti i tuoi design. Rendi le nostre icone davvero tue.</lang>
                    <lang value='kr'>Foricon을 사용하면 고유한 스타일과 브랜딩에 맞게 아이콘을 사용자 정의할 수 있습니다. 색상, 크기, 스타일을 조정하고 변형하고 애니메이션을 적용하여 모든 디자인에서 일관된 시각적 정체성을 만드세요. 아이콘을 진정으로 당신만의 것으로 만드세요.</lang>
                    <lang value='ja'>Foricon を使用すると&#12289;独自のスタイルやブランドに合わせてアイコンをカスタマイズできます&#12290;色&#12289;サイズ&#12289;スタイルを調整し&#12289;変形やアニメーション化を行って&#12289;すべてのデザインに一貫したビジュアル アイデンティティを作成します&#12290;当社のアイコンを真に自分らしくしましょう&#12290;</lang>
                    <lang value='de'>Mit Foricon können Sie Symbole an Ihren individuellen Stil und Ihre Marke anpassen. Passen Sie Farben, Größen und Stile an, transformieren und animieren Sie sie, um eine einheitliche visuelle Identität für alle Ihre Designs zu schaffen. Machen Sie unsere Symbole zu Ihren ganz persönlichen Symbolen.</lang>
                    <lang value='nl'>Met Foricon kunt u iconen aanpassen aan uw unieke stijl en branding. Pas kleuren, formaten, stijlen aan, transformeer en animeer ze om een samenhangende visuele identiteit te creëren in al uw ontwerpen. Maak onze iconen echt van u.</lang>
                    <lang value='dk'>Foricon giver dig mulighed for at tilpasse ikoner til at matche din unikke stil og branding. Juster farver, størrelser, stilarter, transformer og animer dem for at skabe en sammenhængende visuel identitet på tværs af alle dine designs. Gør vores ikoner til dine.</lang>
                    <lang value='pt'>O Foricon permite personalizar ícones para combinar com o seu estilo e marca únicos. Ajuste cores, tamanhos, estilos, transforme-os e anime-os para criar uma identidade visual coesa em todos os seus designs. Torne os nossos ícones verdadeiramente seus.</lang>
                    <lang value='es'>Foricon te permite personalizar los íconos para que se adapten a tu estilo y marca únicos. Ajusta colores, tamaños, estilos, transfórmalos y anímalos para crear una identidad visual cohesiva en todos tus diseños. Haz que nuestros íconos sean verdaderamente tuyos.</lang>
                    <lang value='ru'>Foricon позволяет вам настраивать иконки в соответствии с вашим уникальным стилем и брендингом. Настраивайте цвета, размеры, стили, трансформируйте и анимируйте их, чтобы создать целостную визуальную идентичность во всех ваших проектах. Сделайте наши иконки по-настоящему вашими.</lang>
                </p>
                <div>
                    <div>
                        <h6>
                            <lang value='en'>Icon</lang>
                            <lang value='vi'>Biểu tượng</lang>
                            <lang value='fr'>Icône</lang>
                            <lang value='it'>Icona</lang>
                            <lang value='kr'>상</lang>
                            <lang value='ja'>アイコン</lang>
                            <lang value='de'>Symbol</lang>
                            <lang value='nl'>Icon</lang>
                            <lang value='dk'>Ikon</lang>
                            <lang value='pt'>Ícone</lang>
                            <lang value='es'>Icono</lang>
                            <lang value='ru'>Икона</lang>
                        </h6>
                        <ul class='btn-list darker' data-attr='icon'>
                            <li data-value='brush' class='active'><f-icon icon='brush'/></li>
                            <li data-value='grid-4'><f-icon icon='grid-4'/></li>
                            <li data-value='mug-tea-hot'><f-icon icon='mug-tea-hot'/></li>
                            <li data-value='layers'><f-icon icon='layers'/></li>
                            <li data-value='palette'><f-icon icon='palette'/></li>
                            <li data-value='pencil'><f-icon icon='pencil'/></li>
                        </ul>
                        <h6>
                            <lang value='en'>Style</lang>
                            <lang value='vi'>Kiểu</lang>
                            <lang value='fr'>Style</lang>
                            <lang value='it'>Stile</lang>
                            <lang value='kr'>스타일</lang>
                            <lang value='ja'>スタイル</lang>
                            <lang value='de'>Stil</lang>
                            <lang value='nl'>Stijl</lang>
                            <lang value='dk'>Stil</lang>
                            <lang value='pt'>Estilo</lang>
                            <lang value='es'>Estilo</lang>
                            <lang value='ru'>Стиль</lang>
                        </h6>
                        <ul class='btn-list darker' data-attr='i-s'>
                            <li data-value='' class='active'><f-icon icon='circle'/></li>
                            <li data-value='outline'><f-icon i-s='outline' icon='circle'/></li>
                            <li data-value='duotone/solid'><f-icon i-s='duotone/solid' icon='circle-half'/></li>
                            <li data-value='duotone/outline'><f-icon i-s='duotone/outline' icon='circle-half'/></li>
                        </ul>
                        <h6>
                            <lang value='en'>Scale</lang>
                            <lang value='vi'>Tỉ lệ</lang>
                            <lang value='fr'>Échelle</lang>
                            <lang value='it'>Scala</lang>
                            <lang value='kr'>규모</lang>
                            <lang value='ja'>規模</lang>
                            <lang value='de'>Skala</lang>
                            <lang value='nl'>Schaal</lang>
                            <lang value='dk'>Skala</lang>
                            <lang value='pt'>Balança</lang>
                            <lang value='es'>Escala</lang>
                            <lang value='ru'>Шкала</lang>
                        </h6>
                        <ul class='btn-list darker' data-attr='scale'>
                            <li data-value='xsmaller'>Extra smaller</li>
                            <li data-value='smaller'>Smaller</li>
                            <li data-value='' class='active'>Default</li>
                            <li data-value='larger'>Larger</li>
                            <li data-value='xlarger'>Extra Larger</li>
                        </ul>
                        <h6>
                            <lang value='en'>Size</lang>
                            <lang value='vi'>Kích thước</lang>
                            <lang value='fr'>Taille</lang>
                            <lang value='it'>Misurare</lang>
                            <lang value='kr'>크기</lang>
                            <lang value='ja'>サイズ</lang>
                            <lang value='de'>Größe</lang>
                            <lang value='nl'>Maat</lang>
                            <lang value='dk'>Størrelse</lang>
                            <lang value='pt'>Tamanho</lang>
                            <lang value='es'>Tamaño</lang>
                            <lang value='ru'>Размер</lang>
                        </h6>
                        <ul class='btn-list darker' data-attr='size'>
                            <li data-value='smallest'>Smallest</li>
                            <li data-value='smaller'>Smaller</li>
                            <li data-value='small'>Small</li>
                            <li data-value='' class='active'>Default</li>
                            <li data-value='large'>Large</li>
                            <li data-value='larger'>Larger</li>
                            <li data-value='largest'>Largest</li>
                        </ul>
                        <h6>
                            <lang value='en'>Rotate</lang>
                            <lang value='vi'>Xoay</lang>
                            <lang value='fr'>Tourner</lang>
                            <lang value='it'>Ruotare</lang>
                            <lang value='kr'>회전하다</lang>
                            <lang value='ja'>回転</lang>
                            <lang value='de'>Drehen</lang>
                            <lang value='nl'>Draaien</lang>
                            <lang value='dk'>Rotere</lang>
                            <lang value='pt'>Girar</lang>
                            <lang value='es'>Girar</lang>
                            <lang value='ru'>Повернуть</lang>
                        </h6>
                        <ul class='btn-list darker' data-attr='rotate'>
                            <li data-value='' class='active'>None</li>
                            <li data-value='90'>90</li>
                            <li data-value='180'>180</li>
                            <li data-value='270'>270</li>
                            <li data-value='flipX'>Flip X</li>
                            <li data-value='flipY'>Flip Y</li>
                        </ul>
                        <h6>
                            <lang value='en'>Animation</lang>
                            <lang value='vi'>Hoạt ảnh</lang>
                            <lang value='fr'>Animation</lang>
                            <lang value='it'>Animazione</lang>
                            <lang value='kr'>생기</lang>
                            <lang value='ja'>アニメーション</lang>
                            <lang value='de'>Animation</lang>
                            <lang value='nl'>Animatie</lang>
                            <lang value='dk'>Animation</lang>
                            <lang value='pt'>Animação</lang>
                            <lang value='es'>Animación</lang>
                            <lang value='ru'>Анимация</lang>
                        </h6>
                        <ul class='btn-list darker' data-attr='animation'>
                            <li data-value='' class='active'>None</li>
                            <li data-value='fade'>Fade</li>
                            <li data-value='beat'>Beat</li>
                            <li data-value='spin'>Spin</li>
                            <li data-value='flipX'>Flip X</li>
                            <li data-value='flipY'>Flip Y</li>
                            <li data-value='flipXY'>Flip X & Y</li>
                        </ul>
                    </div>
                    <div class='dk-bg'>
                        <f-icon icon='brush'/>
                    </div>
                </div>
            </div>
            <div class='content-section' id='more-styling'>
                <h1>
                    <lang value='en'>Explore More Styling Options!</lang>
                    <lang value='vi'>Khám phá thêm nhiều tùy chọn hơn!</lang>
                    <lang value='fr'>Explorer plus d&#8217;options de style&#160;!</lang>
                    <lang value='it'>Esplora altre opzioni di stile!</lang>
                    <lang value='kr'>더욱 다양한 스타일링 옵션을 탐험해보세요!</lang>
                    <lang value='ja'>エクスプローラーのより多くのスタイル オプション!</lang>
                    <lang value='de'>Entdecken Sie weitere Styling-Optionen!</lang>
                    <lang value='nl'>Ontdek meer stylingopties!</lang>
                    <lang value='dk'>Explorer Flere stylingmuligheder!</lang>
                    <lang value='pt'>Explore mais opções de estilo!</lang>
                    <lang value='es'>&#161;Explora más opciones de estilo!</lang>
                    <lang value='ru'>Исследуйте больше вариантов стилей!</lang>
                </h1>
                <p>
                    <lang value='en'>Dive into their properties and how they work. Advanced color, style, size and animation adjustment are all in the Docs.</lang>
                    <lang value='vi'>Đi sâu vào thuộc tính của chúng và cách chúng hoạt đọng. Điều chỉnh màu sắc, kiểu dáng, kích thước và hoạt ảnh nâng cao đều có trong Tài liệu.</lang>
                    <lang value='fr'>Plongez dans leurs propriétés et leur fonctionnement. Les réglages avancés de couleur, de style, de taille et d'animation se trouvent tous dans la documentation.</lang>
                    <lang value='it'>Immergiti nelle loro proprietà e nel loro funzionamento. Regolazione avanzata di colore, stile, dimensione e animazione sono tutte nei Documenti.</lang>
                    <lang value='kr'>속성과 작동 방식을 자세히 알아보세요. 고급 색상, 스타일, 크기 및 애니메이션 조정은 모두 Docs에 있습니다.</lang>
                    <lang value='ja'>それぞれのプロパティとその動作について詳しく見てみましょう&#12290;高度な色&#12289;スタイル&#12289;サイズ&#12289;アニメーションの調整はすべてドキュメントに記載されています&#12290;</lang>
                    <lang value='de'>Erfahren Sie mehr über ihre Eigenschaften und ihre Funktionsweise. Erweiterte Farb-, Stil-, Größen- und Animationsanpassungen finden Sie in den Dokumenten.</lang>
                    <lang value='nl'>Duik in hun eigenschappen en hoe ze werken. Geavanceerde kleur-, stijl-, grootte- en animatieaanpassingen staan allemaal in de Docs.</lang>
                    <lang value='dk'>Dyk ned i deres egenskaber og hvordan de fungerer. Avanceret farve-, stil-, størrelses- og animationsjustering er alle i Docs.</lang>
                    <lang value='pt'>Mergulhe nas suas propriedades e como funcionam. Os ajustes avançados de cor, estilo, tamanho e animação estão todos no Documentos.</lang>
                    <lang value='es'>Conozca sus propiedades y cómo funcionan. Los ajustes avanzados de color, estilo, tamaño y animación se encuentran en la documentación.</lang>
                    <lang value='ru'>Погрузитесь в их свойства и принципы работы. Расширенные настройки цвета, стиля, размера и анимации &#8212; все это в Docs.</lang>
                </p>
                <a class='btn primary' href='/p/docs.html?styling-icons/basics'>
                    <lang value='en'>Explore</lang>
                    <lang value='vi'>Khám phá</lang>
                    <lang value='fr'>Explorer</lang>
                    <lang value='it'>Esplorare</lang>
                    <lang value='kr'>탐구하다</lang>
                    <lang value='ja'>探検する</lang>
                    <lang value='de'>Erkunden</lang>
                    <lang value='nl'>Ontdekken</lang>
                    <lang value='dk'>Udforske</lang>
                    <lang value='pt'>Explorar</lang>
                    <lang value='es'>Explorar</lang>
                    <lang value='ru'>Исследовать</lang>
                </a>
            </div>
            <div class='content-section dk-bg' id='compatible'>
                <div>
                    <h5>
                        <lang value='en'>Compatible With</lang>
                        <lang value='vi'>Tương thích với</lang>
                        <lang value='fr'>Compatible avec</lang>
                        <lang value='it'>Compatibile con</lang>
                        <lang value='kr'>호환 가능</lang>
                        <lang value='ja'>互換性あり</lang>
                        <lang value='de'>Kompatibel mit</lang>
                        <lang value='nl'>Compatibel met</lang>
                        <lang value='dk'>Kompatibel med</lang>
                        <lang value='pt'>Compatível com</lang>
                        <lang value='es'>Compatible con</lang>
                        <lang value='ru'>Совместим с</lang>
                    </h5>
                    <h1>
                        <lang value='en'>Where You Work</lang>
                        <lang value='vi'>Nơi bạn làm việc</lang>
                        <lang value='fr'>Où vous travaillez</lang>
                        <lang value='it'>Dove lavori</lang>
                        <lang value='kr'>네가 일하는 곳</lang>
                        <lang value='ja'>勤務先</lang>
                        <lang value='de'>Wo arbeitest du</lang>
                        <lang value='nl'>Waar je werkt</lang>
                        <lang value='dk'>Hvor du arbejder</lang>
                        <lang value='pt'>Onde trabalha</lang>
                        <lang value='es'>Donde trabajas</lang>
                        <lang value='ru'>Где ты работаешь</lang>
                    </h1>
                </div>
                <ul>
                    <li>
                        <h3>
                            <lang value='en'>Developers</lang>
                            <lang value='vi'>Lập trình viên</lang>
                            <lang value='fr'>Développeurs</lang>
                            <lang value='it'>Sviluppatori</lang>
                            <lang value='kr'>개발자</lang>
                            <lang value='ja'>開発者</lang>
                            <lang value='de'>Entwickler</lang>
                            <lang value='nl'>Ontwikkelaars</lang>
                            <lang value='dk'>Udviklere</lang>
                            <lang value='pt'>Desenvolvedores</lang>
                            <lang value='es'>Desarrolladores</lang>
                            <lang value='ru'>Разработчики</lang>
                        </h3>
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
                        <h3>
                            <lang value='en'>Designers</lang>
                            <lang value='vi'>Nhà thiết kế đồ họa</lang>
                            <lang value='fr'>Créateurs</lang>
                            <lang value='it'>Progettisti</lang>
                            <lang value='kr'>디자이너</lang>
                            <lang value='ja'>デザイナー</lang>
                            <lang value='de'>Designer</lang>
                            <lang value='nl'>Ontwerpers</lang>
                            <lang value='dk'>Designere</lang>
                            <lang value='pt'>Designers</lang>
                            <lang value='es'>Diseñadores</lang>
                            <lang value='ru'>Дизайнеры</lang>
                        </h3>
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
                        <h3>
                            <lang value='en'>Content Creators</lang>
                            <lang value='vi'>Nhà sáng tạo nội dung</lang>
                            <lang value='fr'>Créateurs de contenu</lang>
                            <lang value='it'>Creatori di contenuti</lang>
                            <lang value='kr'>콘텐츠 제작자</lang>
                            <lang value='ja'>コンテンツクリエイター</lang>
                            <lang value='de'>Inhaltsersteller</lang>
                            <lang value='nl'>Contentmakers</lang>
                            <lang value='dk'>Indholdsskabere</lang>
                            <lang value='pt'>Criadores de conteúdo</lang>
                            <lang value='es'>Creadores de contenido</lang>
                            <lang value='ru'>Создатели контента</lang>
                        </h3>
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
            <div class='content-section signup' id='get-started'>
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
            <div class='content-section' id='pages'>
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
        </>
    );
}
