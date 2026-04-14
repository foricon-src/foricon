'use client';

import { useEffect } from 'react';
// import Image from 'next/image';
// import favicon from 'Ass/foricon-f-favicon.png';
import { AttrLang, Lang } from 'Com/language';
import './page.css';
import 'Com/utils';

export default function Home() {
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
        <>
            <div className='section' id='hero'>
                <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBX39PGrjfEdpF2RTkpAaKi84zc4JJ5cs7MzKgtnPH6jepJLRGh8zTwACp0VH2Dt5dj7AZH39t4pvfY69Fc8yt_6W2Ya0iwT432qMJURupVCcq6ZHAPAjaJO85Dw8Gj2LppRLBKkJYUTbq6yAFFRc2ezL66KkHDXR0ksoDroknEakKo0PlBODWcq3aXCc/s1600/foricon-f.png'/>
                <a href='/p/new-changelog.html'>
                    <f-icon i-s='outline' icon='hashtag'/><span>{webData.verFull}</span>
                </a>
                <h1>
                    <Lang value='en'>Icons That Make Your Design Shine</Lang>
                    <Lang value='vi'>Kho icon font free, đầu tiên tại Việt Nam</Lang>
                    <Lang value='fr'>Des icônes qui font briller votre design</Lang>
                    <Lang value='it'>Icone che fanno brillare il tuo design</Lang>
                    <Lang value='kr'>디자인을 빛나게 하는 아이콘</Lang>
                    <Lang value='ja'>あなたのデザインを輝かせるアイコン</Lang>
                    <Lang value='de'>Icons, die Ihr Design zum Strahlen bringen</Lang>
                    <Lang value='nl'>Iconen die je ontwerp laten schitteren</Lang>
                    <Lang value='dk'>Ikoner der får dit design til at skinne</Lang>
                    <Lang value='pt'>Ícones que fazem seu design brilhar</Lang>
                    <Lang value='es'>Iconos que hacen que tu diseño brille</Lang>
                    <Lang value='ru'>Иконки, которые делают ваш дизайн ярким</Lang>
                </h1>
                <p>
                    <Lang value='en'>Design smarter with icons that customize, animate, and integrate in seconds</Lang>
                    <Lang value='vi'>Thiết kế thông minh hơn với các biểu tượng có thể tùy chỉnh, animate và tích hợp trong vài giây</Lang>
                    <Lang value='fr'>Concevez plus intelligemment avec des icônes qui se personnalisent, s&apos;animent et s&apos;intègrent en quelques secondes</Lang>
                    <Lang value='it'>Progetta in modo più intelligente con icone che si personalizzano, si animano e si integrano in pochi secondi</Lang>
                    <Lang value='kr'>몇 초 만에 사용자 지정, 애니메이션 및 통합이 가능한 아이콘으로 더욱 스마트하게 디자인하세요</Lang>
                    <Lang value='ja'>数秒でカスタマイズ&#12289;アニメーション&#12289;統合できるアイコンで&#12289;よりスマートにデザインできます</Lang>
                    <Lang value='de'>Gestalten Sie intelligenter mit Symbolen, die sich in Sekundenschnelle anpassen, animieren und integrieren lassen</Lang>
                    <Lang value='nl'>Ontwerp slimmer met pictogrammen die u in seconden kunt aanpassen, animeren en integreren</Lang>
                    <Lang value='dk'>Design smartere med ikoner, der tilpasser, animerer og integrerer på få sekunder</Lang>
                    <Lang value='pt'>Crie um design mais inteligente com ícones que podem ser personalizados, animados e integrados em segundos</Lang>
                    <Lang value='es'>Diseñe de forma más inteligente con íconos que se personalizan, animan e integran en segundos</Lang>
                    <Lang value='ru'>Проектируйте умнее с помощью иконок, которые можно настраивать, анимировать и интегрировать за считанные секунды.</Lang>
                </p>
                <label>
                    <f-icon i-s='outline' icon='magnifying-glass'/>
                    <input placeholder={
                        AttrLang({
                            en: 'Find your perfect icon - start typing...',
                            vi: 'Tìm biểu tượng hoàn hảo - bắt đầu nhập...',
                            fr: 'Trouvez votre icône parfaite - commencez à taper...',
                            it: 'Trova l&apos;icona perfetta: inizia a digitare...',
                            kr: '당신에게 딱 맞는 아이콘을 찾아보세요 - 입력을 시작하세요...',
                            ja: '最適なアイコンを見つけて、入力を開始してください...',
                            de: 'Finden Sie Ihr perfektes Symbol - beginnen Sie mit der Eingabe …',
                            dk: 'Find dit perfekte ikon - begynd at skrive...',
                            nl: 'Vind het perfecte pictogram - begin met typen...',
                            pt: 'Encuentra tu icono perfecto: comienza a escribir...',
                            es: 'Encontre o ícone perfeito - comece a escrever...',
                            ru: 'Найдите свой идеальный значок — начните вводить текст...',
                        })
                    }/>
                </label>
            </div>
            <div class='content-section' id='icons'>
                <div>
                    <h1>
                        <span class='icon-count'/>+{' '}
                        <Lang value='en'>icons</Lang>
                        <Lang value='vi'>biểu tượng</Lang>
                        <Lang value='fr'>icônes</Lang>
                        <Lang value='it'>icone</Lang>
                        <Lang value='kr'>아이콘</Lang>
                        <Lang value='ja'>アイコン</Lang>
                        <Lang value='de'>Symbole</Lang>
                        <Lang value='nl'>iconen</Lang>
                        <Lang value='dk'>ikoner</Lang>
                        <Lang value='pt'>ícones</Lang>
                        <Lang value='es'>iconos</Lang>
                        <Lang value='ru'>иконки</Lang>
                    </h1>
                    <p>
                        <Lang value='en'>are ready to be used</Lang>
                        <Lang value='vi'>sẵn sàng để sử dụng</Lang>
                        <Lang value='fr'>sont prêts à être utilisés</Lang>
                        <Lang value='it'>sono pronti per essere utilizzati</Lang>
                        <Lang value='kr'>사용할 준비가 되었습니다</Lang>
                        <Lang value='ja'>すぐに使える</Lang>
                        <Lang value='de'>sind einsatzbereit</Lang>
                        <Lang value='nl'>zijn klaar voor gebruik</Lang>
                        <Lang value='dk'>er klar til at blive brugt</Lang>
                        <Lang value='pt'>estão prontos para serem utilizados</Lang>
                        <Lang value='es'>están listos para ser utilizados</Lang>
                        <Lang value='ru'>готовы к использованию</Lang>
                    </p>
                </div>
            </div>
            <div class='content-section' id='integration'>
                <div>
                    <h6 class='tagline'>
                        <Lang value='en'>Integration</Lang>
                        <Lang value='vi'>Tích hợp</Lang>
                        <Lang value='fr'>L&apos;intégration</Lang>
                        <Lang value='it'>Integrazione</Lang>
                        <Lang value='kr'>완성</Lang>
                        <Lang value='ja'>統合</Lang>
                        <Lang value='de'>Integration</Lang>
                        <Lang value='nl'>Integratie</Lang>
                        <Lang value='dk'>Integration</Lang>
                        <Lang value='pt'>Integração</Lang>
                        <Lang value='es'>Integración</Lang>
                        <Lang value='ru'>Интеграция</Lang>
                    </h6>
                    <h1>
                        <Lang value='en'>Easy Integration,<br/>Stunning Results</Lang>
                        <Lang value='vi'>Dễ dàng tích hợp,<br/>Kết quả bắt mắt</Lang>
                        <Lang value='fr'>Intégration facile,<br/>Résultats époustouflants</Lang>
                        <Lang value='it'>Facile integrazione,<br/>Risultati sorprendenti</Lang>
                        <Lang value='kr'>쉬운 통합,<br/>놀라운 결과</Lang>
                        <Lang value='ja'>簡単な統合&#12289;<br/>素晴らしい結果</Lang>
                        <Lang value='de'>Einfache Integration,<br/>umwerfende Ergebnisse</Lang>
                        <Lang value='nl'>Eenvoudige integratie,<br/>Verbluffende resultaten</Lang>
                        <Lang value='dk'>Nem integration,<br/>Fantastiske resultater</Lang>
                        <Lang value='pt'>Fácil Integração,<br/>Resultados impressionantes</Lang>
                        <Lang value='es'>Fácil integración,<br/>resultados sorprendentes</Lang>
                        <Lang value='ru'>Простая интеграция,<br/>Потрясающие результаты</Lang>
                    </h1>
                    <p>
                        <Lang value='en'>Integrating our icon library into your projects is a breeze. Simply choose the icons you need, get its code, and start using them right away. With our extensive collection and easy-to-use interface, you&apos;ll find the perfect icons to elevate your designs.</Lang>
                        <Lang value='vi'>Tích hợp thư viện icon của chúng tôi vào các dự án của bạn rất dễ. Chỉ cần chọn các biểu tượng bạn cần, lấy mã nhúng của biểu tượng đó và bắt đầu sử dụng ngay. Với bộ sưu tập phong phú và giao diện dễ sử dụng của chúng tôi, bạn sẽ tìm thấy các biểu tượng hoàn hảo để nâng tầm thiết kế của mình.</Lang>
                        <Lang value='fr'>L&apos;intégration de notre bibliothèque d&apos;icônes dans vos projets est un jeu d&apos;enfant. Choisissez simplement les icônes dont vous avez besoin, obtenez leur code et commencez à les utiliser immédiatement. Grâce à notre vaste collection et à notre interface facile à utiliser, vous trouverez les icônes parfaites pour rehausser vos créations.</Lang>
                        <Lang value='it'>Integrare la nostra libreria di icone nei tuoi progetti è un gioco da ragazzi. Scegli semplicemente le icone di cui hai bisogno, ottieni il codice e inizia a usarle subito. Con la nostra vasta collezione e l&apos;interfaccia facile da usare, troverai le icone perfette per migliorare i tuoi design.</Lang>
                        <Lang value='kr'>아이콘 라이브러리를 프로젝트에 통합하는 것은 아주 간단합니다. 필요한 아이콘을 선택하고, 코드를 받고, 바로 사용하기 시작하면 됩니다. 광범위한 컬렉션과 사용하기 쉬운 인터페이스로 디자인을 한 단계 업그레이드할 완벽한 아이콘을 찾을 수 있습니다.</Lang>
                        <Lang value='ja'>当社のアイコン ライブラリをプロジェクトに統合するのは簡単です&#12290;必要なアイコンを選択し&#12289;コードを取得して&#12289;すぐに使い始めるだけです&#12290;当社の豊富なコレクションと使いやすいインターフェイスにより&#12289;デザインを向上させる完璧なアイコンが見つかります&#12290;</Lang>
                        <Lang value='de'>Die Integration unserer Symbolbibliothek in Ihre Projekte ist ein Kinderspiel. Wählen Sie einfach die gewünschten Symbole aus, holen Sie sich den Code und verwenden Sie sie sofort. Mit unserer umfangreichen Sammlung und der benutzerfreundlichen Oberfläche finden Sie die perfekten Symbole, um Ihre Designs aufzuwerten.</Lang>
                        <Lang value='nl'>Het integreren van onze icoonbibliotheek in uw projecten is een fluitje van een cent. Kies gewoon de iconen die u nodig hebt, ontvang de code en begin ze meteen te gebruiken. Met onze uitgebreide collectie en gebruiksvriendelijke interface vindt u de perfecte iconen om uw ontwerpen naar een hoger niveau te tillen.</Lang>
                        <Lang value='dk'>At integrere vores ikonbibliotek i dine projekter er en leg. Du skal blot vælge de ikoner, du har brug for, få dens kode, og begynde at bruge dem med det samme. Med vores omfattende samling og brugervenlige grænseflade finder du de perfekte ikoner til at løfte dine designs.</Lang>
                        <Lang value='pt'>Integrar a nossa biblioteca de ícones nos seus projetos é muito fácil. Basta escolher os ícones de que necessita, obter o código e começar a utilizá-los imediatamente. Com a nossa extensa coleção e interface fácil de utilizar, encontrará os ícones perfeitos para elevar os seus designs.</Lang>
                        <Lang value='es'>Integrar nuestra biblioteca de íconos en tus proyectos es muy fácil. Simplemente elige los íconos que necesitas, obtén su código y comienza a usarlos de inmediato. Con nuestra amplia colección y nuestra interfaz fácil de usar, encontrarás los íconos perfectos para mejorar tus diseños.</Lang>
                        <Lang value='ru'>Интеграция нашей библиотеки иконок в ваши проекты &#8212; это просто. Просто выберите нужные вам иконки, получите их код и начните использовать их прямо сейчас. С нашей обширной коллекцией и простым в использовании интерфейсом вы найдете идеальные иконки, которые поднимут ваши проекты.</Lang>
                    </p>
                    <a class='btn primary' href='/p/docs.html?adding-icons/basics'>
                        <Lang value='en'>Basics of Adding Icons</Lang>
                        <Lang value='vi'>Hướng dẫn về thêm các icon</Lang>
                        <Lang value='fr'>Notions de base sur l&apos;ajout d&apos;icônes</Lang>
                        <Lang value='it'>Nozioni di base sull&apos;aggiunta di icone</Lang>
                        <Lang value='kr'>아이콘 추가의 기본 사항</Lang>
                        <Lang value='ja'>アイコン追加の基本</Lang>
                        <Lang value='de'>Grundlagen zum Hinzufügen von Symbolen</Lang>
                        <Lang value='nl'>Basisprincipes van het toevoegen van pictogrammen</Lang>
                        <Lang value='dk'>Grundlæggende om tilføjelse af ikoner</Lang>
                        <Lang value='pt'>Noções básicas de adição de ícones</Lang>
                        <Lang value='es'>Conceptos básicos para agregar iconos</Lang>
                        <Lang value='ru'>Основы добавления иконок</Lang>
                    </a>
                </div>
                <div>
                    <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuciTIEKRlA_20KiNnOyUeny9fCvNkfD33iTLIYl3YOtT8Z3Fyiu5GJ08jCaJI5Pef-2mPUn34O0y0WIF83RUojLoh_B1nVU8wpTu9QbLdjq5alkzCoXDnNg5_O9uS8XBHbozp7evFgFEumm4ZRfkSC4t8naEuOYntcT4Afwdig2qh5lCYCx0hFBteOpU/s1600/screenshot.png'/>
                </div>
            </div>
            <div class='content-section' id='icon-families'>
                <h6 class='tagline'>
                    <Lang value='en'>Icon Families</Lang>
                    <Lang value='vi'>Bộ biểu tượng</Lang>
                    <Lang value='fr'>Familles d&apos;icônes</Lang>
                    <Lang value='it'>Famiglie di icone</Lang>
                    <Lang value='kr'>아이콘 패밀리</Lang>
                    <Lang value='ja'>アイコンファミリー</Lang>
                    <Lang value='de'>Symbolfamilien</Lang>
                    <Lang value='nl'>Icoonfamilies</Lang>
                    <Lang value='dk'>Ikonfamilier</Lang>
                    <Lang value='pt'>Famílias de ícones</Lang>
                    <Lang value='es'>Familias de iconos</Lang>
                    <Lang value='ru'>Семейства иконок</Lang>
                </h6>
                <h1>
                    <Lang value='en'>4 Ways to Decorate Your Project</Lang>
                    <Lang value='vi'>4 cách để trang trí dự án của bạn</Lang>
                    <Lang value='fr'>4 façons de décorer votre projet</Lang>
                    <Lang value='it'>4 modi per decorare il tuo progetto</Lang>
                    <Lang value='kr'>프로젝트를 장식하는 4가지 방법</Lang>
                    <Lang value='ja'>プロジェクトを飾る4つの方法</Lang>
                    <Lang value='de'>4 Möglichkeiten, Ihr Projekt zu dekorieren</Lang>
                    <Lang value='nl'>4 manieren om uw project te decoreren</Lang>
                    <Lang value='dk'>4 måder at dekorere dit projekt på</Lang>
                    <Lang value='pt'>4 formas de decorar o seu projeto</Lang>
                    <Lang value='es'>4 formas de decorar tu proyecto</Lang>
                    <Lang value='ru'>4 способа украсить ваш проект</Lang>
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
                    <Lang value='en'>Easy to Customize</Lang>
                    <Lang value='vi'>Dễ dàng tùy chỉnh</Lang>
                    <Lang value='fr'>Facile à personnaliser</Lang>
                    <Lang value='it'>Facile da personalizzare</Lang>
                    <Lang value='kr'>사용자 정의가 쉽습니다</Lang>
                    <Lang value='ja'>簡単にカスタマイズ可能</Lang>
                    <Lang value='de'>Einfach anzupassen</Lang>
                    <Lang value='nl'>Gemakkelijk aan te passen</Lang>
                    <Lang value='dk'>Let at tilpasse</Lang>
                    <Lang value='pt'>Fácil de personalizar</Lang>
                    <Lang value='es'>Fácil de personalizar</Lang>
                    <Lang value='ru'>Легко настраивать</Lang>
                </h6>
                <h1>
                    <Lang value='en'>Style Our Icons in Your Own Way</Lang>
                    <Lang value='vi'>Tùy chỉnh icon của chúng tôi theo cách riêng của bạn</Lang>
                    <Lang value='fr'>Personnalisez nos icônes à votre façon</Lang>
                    <Lang value='it'>Personalizza le nostre icone a modo tuo</Lang>
                    <Lang value='kr'>나만의 방식으로 아이콘을 스타일링하세요</Lang>
                    <Lang value='ja'>アイコンを自分好みにカスタマイズ</Lang>
                    <Lang value='de'>Gestalten Sie unsere Icons auf Ihre eigene Art</Lang>
                    <Lang value='nl'>Stijl onze iconen op jouw eigen manier</Lang>
                    <Lang value='dk'>Style vores ikoner på din egen måde</Lang>
                    <Lang value='pt'>Estilize os nossos ícones à sua maneira</Lang>
                    <Lang value='es'>Dale estilo a nuestros íconos a tu manera</Lang>
                    <Lang value='ru'>Оформляйте наши иконки по-своему</Lang>
                </h1>
                <p>
                    <Lang value='en'>Foricon allows you to customize icons to match your unique style and branding. Adjust colors, sizes, styles, transform and animate them to create a cohesive visual identity across all your designs. Make our icons truly yours.</Lang>
                    <Lang value='vi'>Foricon cho phép bạn tùy chỉnh các biểu tượng để phù hợp với phong cách và thương hiệu độc đáo của bạn. Điều chỉnh màu sắc, kích thước, kiểu dáng, biến đổi và tạo hoạt ảnh cho chúng để tạo ra sự đồng bộ trên tất cả các thiết kế của bạn. Làm cho các biểu tượng của chúng tôi thực sự là của bạn.</Lang>
                    <Lang value='fr'>Foricon vous permet de personnaliser vos icônes pour qu&apos;elles correspondent à votre style et à votre image de marque. Ajustez les couleurs, les tailles, les styles, transformez-les et animez-les pour créer une identité visuelle cohérente sur toutes vos créations. Personnalisez nos icônes.</Lang>
                    <Lang value='it'>Foricon ti consente di personalizzare le icone per adattarle al tuo stile e al tuo marchio unici. Regola colori, dimensioni, stili, trasformali e animali per creare un&apos;identità visiva coesa in tutti i tuoi design. Rendi le nostre icone davvero tue.</Lang>
                    <Lang value='kr'>Foricon을 사용하면 고유한 스타일과 브랜딩에 맞게 아이콘을 사용자 정의할 수 있습니다. 색상, 크기, 스타일을 조정하고 변형하고 애니메이션을 적용하여 모든 디자인에서 일관된 시각적 정체성을 만드세요. 아이콘을 진정으로 당신만의 것으로 만드세요.</Lang>
                    <Lang value='ja'>Foricon を使用すると&#12289;独自のスタイルやブランドに合わせてアイコンをカスタマイズできます&#12290;色&#12289;サイズ&#12289;スタイルを調整し&#12289;変形やアニメーション化を行って&#12289;すべてのデザインに一貫したビジュアル アイデンティティを作成します&#12290;当社のアイコンを真に自分らしくしましょう&#12290;</Lang>
                    <Lang value='de'>Mit Foricon können Sie Symbole an Ihren individuellen Stil und Ihre Marke anpassen. Passen Sie Farben, Größen und Stile an, transformieren und animieren Sie sie, um eine einheitliche visuelle Identität für alle Ihre Designs zu schaffen. Machen Sie unsere Symbole zu Ihren ganz persönlichen Symbolen.</Lang>
                    <Lang value='nl'>Met Foricon kunt u iconen aanpassen aan uw unieke stijl en branding. Pas kleuren, formaten, stijlen aan, transformeer en animeer ze om een samenhangende visuele identiteit te creëren in al uw ontwerpen. Maak onze iconen echt van u.</Lang>
                    <Lang value='dk'>Foricon giver dig mulighed for at tilpasse ikoner til at matche din unikke stil og branding. Juster farver, størrelser, stilarter, transformer og animer dem for at skabe en sammenhængende visuel identitet på tværs af alle dine designs. Gør vores ikoner til dine.</Lang>
                    <Lang value='pt'>O Foricon permite personalizar ícones para combinar com o seu estilo e marca únicos. Ajuste cores, tamanhos, estilos, transforme-os e anime-os para criar uma identidade visual coesa em todos os seus designs. Torne os nossos ícones verdadeiramente seus.</Lang>
                    <Lang value='es'>Foricon te permite personalizar los íconos para que se adapten a tu estilo y marca únicos. Ajusta colores, tamaños, estilos, transfórmalos y anímalos para crear una identidad visual cohesiva en todos tus diseños. Haz que nuestros íconos sean verdaderamente tuyos.</Lang>
                    <Lang value='ru'>Foricon позволяет вам настраивать иконки в соответствии с вашим уникальным стилем и брендингом. Настраивайте цвета, размеры, стили, трансформируйте и анимируйте их, чтобы создать целостную визуальную идентичность во всех ваших проектах. Сделайте наши иконки по-настоящему вашими.</Lang>
                </p>
                <div>
                    <div>
                        <h6>
                            <Lang value='en'>Icon</Lang>
                            <Lang value='vi'>Biểu tượng</Lang>
                            <Lang value='fr'>Icône</Lang>
                            <Lang value='it'>Icona</Lang>
                            <Lang value='kr'>상</Lang>
                            <Lang value='ja'>アイコン</Lang>
                            <Lang value='de'>Symbol</Lang>
                            <Lang value='nl'>Icon</Lang>
                            <Lang value='dk'>Ikon</Lang>
                            <Lang value='pt'>Ícone</Lang>
                            <Lang value='es'>Icono</Lang>
                            <Lang value='ru'>Икона</Lang>
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
                            <Lang value='en'>Style</Lang>
                            <Lang value='vi'>Kiểu</Lang>
                            <Lang value='fr'>Style</Lang>
                            <Lang value='it'>Stile</Lang>
                            <Lang value='kr'>스타일</Lang>
                            <Lang value='ja'>スタイル</Lang>
                            <Lang value='de'>Stil</Lang>
                            <Lang value='nl'>Stijl</Lang>
                            <Lang value='dk'>Stil</Lang>
                            <Lang value='pt'>Estilo</Lang>
                            <Lang value='es'>Estilo</Lang>
                            <Lang value='ru'>Стиль</Lang>
                        </h6>
                        <ul class='btn-list darker' data-attr='i-s'>
                            <li data-value='' class='active'><f-icon icon='circle'/></li>
                            <li data-value='outline'><f-icon i-s='outline' icon='circle'/></li>
                            <li data-value='duotone/solid'><f-icon i-s='duotone/solid' icon='circle-half'/></li>
                            <li data-value='duotone/outline'><f-icon i-s='duotone/outline' icon='circle-half'/></li>
                        </ul>
                        <h6>
                            <Lang value='en'>Scale</Lang>
                            <Lang value='vi'>Tỉ lệ</Lang>
                            <Lang value='fr'>Échelle</Lang>
                            <Lang value='it'>Scala</Lang>
                            <Lang value='kr'>규모</Lang>
                            <Lang value='ja'>規模</Lang>
                            <Lang value='de'>Skala</Lang>
                            <Lang value='nl'>Schaal</Lang>
                            <Lang value='dk'>Skala</Lang>
                            <Lang value='pt'>Balança</Lang>
                            <Lang value='es'>Escala</Lang>
                            <Lang value='ru'>Шкала</Lang>
                        </h6>
                        <ul class='btn-list darker' data-attr='scale'>
                            <li data-value='xsmaller'>Extra smaller</li>
                            <li data-value='smaller'>Smaller</li>
                            <li data-value='' class='active'>Default</li>
                            <li data-value='larger'>Larger</li>
                            <li data-value='xlarger'>Extra Larger</li>
                        </ul>
                        <h6>
                            <Lang value='en'>Size</Lang>
                            <Lang value='vi'>Kích thước</Lang>
                            <Lang value='fr'>Taille</Lang>
                            <Lang value='it'>Misurare</Lang>
                            <Lang value='kr'>크기</Lang>
                            <Lang value='ja'>サイズ</Lang>
                            <Lang value='de'>Größe</Lang>
                            <Lang value='nl'>Maat</Lang>
                            <Lang value='dk'>Størrelse</Lang>
                            <Lang value='pt'>Tamanho</Lang>
                            <Lang value='es'>Tamaño</Lang>
                            <Lang value='ru'>Размер</Lang>
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
                            <Lang value='en'>Rotate</Lang>
                            <Lang value='vi'>Xoay</Lang>
                            <Lang value='fr'>Tourner</Lang>
                            <Lang value='it'>Ruotare</Lang>
                            <Lang value='kr'>회전하다</Lang>
                            <Lang value='ja'>回転</Lang>
                            <Lang value='de'>Drehen</Lang>
                            <Lang value='nl'>Draaien</Lang>
                            <Lang value='dk'>Rotere</Lang>
                            <Lang value='pt'>Girar</Lang>
                            <Lang value='es'>Girar</Lang>
                            <Lang value='ru'>Повернуть</Lang>
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
                            <Lang value='en'>Animation</Lang>
                            <Lang value='vi'>Hoạt ảnh</Lang>
                            <Lang value='fr'>Animation</Lang>
                            <Lang value='it'>Animazione</Lang>
                            <Lang value='kr'>생기</Lang>
                            <Lang value='ja'>アニメーション</Lang>
                            <Lang value='de'>Animation</Lang>
                            <Lang value='nl'>Animatie</Lang>
                            <Lang value='dk'>Animation</Lang>
                            <Lang value='pt'>Animação</Lang>
                            <Lang value='es'>Animación</Lang>
                            <Lang value='ru'>Анимация</Lang>
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
                    <Lang value='en'>Explore More Styling Options!</Lang>
                    <Lang value='vi'>Khám phá thêm nhiều tùy chọn hơn!</Lang>
                    <Lang value='fr'>Explorer plus d&#8217;options de style&#160;!</Lang>
                    <Lang value='it'>Esplora altre opzioni di stile!</Lang>
                    <Lang value='kr'>더욱 다양한 스타일링 옵션을 탐험해보세요!</Lang>
                    <Lang value='ja'>エクスプローラーのより多くのスタイル オプション!</Lang>
                    <Lang value='de'>Entdecken Sie weitere Styling-Optionen!</Lang>
                    <Lang value='nl'>Ontdek meer stylingopties!</Lang>
                    <Lang value='dk'>Explorer Flere stylingmuligheder!</Lang>
                    <Lang value='pt'>Explore mais opções de estilo!</Lang>
                    <Lang value='es'>&#161;Explora más opciones de estilo!</Lang>
                    <Lang value='ru'>Исследуйте больше вариантов стилей!</Lang>
                </h1>
                <p>
                    <Lang value='en'>Dive into their properties and how they work. Advanced color, style, size and animation adjustment are all in the Docs.</Lang>
                    <Lang value='vi'>Đi sâu vào thuộc tính của chúng và cách chúng hoạt đọng. Điều chỉnh màu sắc, kiểu dáng, kích thước và hoạt ảnh nâng cao đều có trong Tài liệu.</Lang>
                    <Lang value='fr'>Plongez dans leurs propriétés et leur fonctionnement. Les réglages avancés de couleur, de style, de taille et d&apos;animation se trouvent tous dans la documentation.</Lang>
                    <Lang value='it'>Immergiti nelle loro proprietà e nel loro funzionamento. Regolazione avanzata di colore, stile, dimensione e animazione sono tutte nei Documenti.</Lang>
                    <Lang value='kr'>속성과 작동 방식을 자세히 알아보세요. 고급 색상, 스타일, 크기 및 애니메이션 조정은 모두 Docs에 있습니다.</Lang>
                    <Lang value='ja'>それぞれのプロパティとその動作について詳しく見てみましょう&#12290;高度な色&#12289;スタイル&#12289;サイズ&#12289;アニメーションの調整はすべてドキュメントに記載されています&#12290;</Lang>
                    <Lang value='de'>Erfahren Sie mehr über ihre Eigenschaften und ihre Funktionsweise. Erweiterte Farb-, Stil-, Größen- und Animationsanpassungen finden Sie in den Dokumenten.</Lang>
                    <Lang value='nl'>Duik in hun eigenschappen en hoe ze werken. Geavanceerde kleur-, stijl-, grootte- en animatieaanpassingen staan allemaal in de Docs.</Lang>
                    <Lang value='dk'>Dyk ned i deres egenskaber og hvordan de fungerer. Avanceret farve-, stil-, størrelses- og animationsjustering er alle i Docs.</Lang>
                    <Lang value='pt'>Mergulhe nas suas propriedades e como funcionam. Os ajustes avançados de cor, estilo, tamanho e animação estão todos no Documentos.</Lang>
                    <Lang value='es'>Conozca sus propiedades y cómo funcionan. Los ajustes avanzados de color, estilo, tamaño y animación se encuentran en la documentación.</Lang>
                    <Lang value='ru'>Погрузитесь в их свойства и принципы работы. Расширенные настройки цвета, стиля, размера и анимации &#8212; все это в Docs.</Lang>
                </p>
                <a class='btn primary' href='/p/docs.html?styling-icons/basics'>
                    <Lang value='en'>Explore</Lang>
                    <Lang value='vi'>Khám phá</Lang>
                    <Lang value='fr'>Explorer</Lang>
                    <Lang value='it'>Esplorare</Lang>
                    <Lang value='kr'>탐구하다</Lang>
                    <Lang value='ja'>探検する</Lang>
                    <Lang value='de'>Erkunden</Lang>
                    <Lang value='nl'>Ontdekken</Lang>
                    <Lang value='dk'>Udforske</Lang>
                    <Lang value='pt'>Explorar</Lang>
                    <Lang value='es'>Explorar</Lang>
                    <Lang value='ru'>Исследовать</Lang>
                </a>
            </div>
            <div class='content-section dk-bg' id='compatible'>
                <div>
                    <h5>
                        <Lang value='en'>Compatible With</Lang>
                        <Lang value='vi'>Tương thích với</Lang>
                        <Lang value='fr'>Compatible avec</Lang>
                        <Lang value='it'>Compatibile con</Lang>
                        <Lang value='kr'>호환 가능</Lang>
                        <Lang value='ja'>互換性あり</Lang>
                        <Lang value='de'>Kompatibel mit</Lang>
                        <Lang value='nl'>Compatibel met</Lang>
                        <Lang value='dk'>Kompatibel med</Lang>
                        <Lang value='pt'>Compatível com</Lang>
                        <Lang value='es'>Compatible con</Lang>
                        <Lang value='ru'>Совместим с</Lang>
                    </h5>
                    <h1>
                        <Lang value='en'>Where You Work</Lang>
                        <Lang value='vi'>Nơi bạn làm việc</Lang>
                        <Lang value='fr'>Où vous travaillez</Lang>
                        <Lang value='it'>Dove lavori</Lang>
                        <Lang value='kr'>네가 일하는 곳</Lang>
                        <Lang value='ja'>勤務先</Lang>
                        <Lang value='de'>Wo arbeitest du</Lang>
                        <Lang value='nl'>Waar je werkt</Lang>
                        <Lang value='dk'>Hvor du arbejder</Lang>
                        <Lang value='pt'>Onde trabalha</Lang>
                        <Lang value='es'>Donde trabajas</Lang>
                        <Lang value='ru'>Где ты работаешь</Lang>
                    </h1>
                </div>
                <ul>
                    <li>
                        <h3>
                            <Lang value='en'>Developers</Lang>
                            <Lang value='vi'>Lập trình viên</Lang>
                            <Lang value='fr'>Développeurs</Lang>
                            <Lang value='it'>Sviluppatori</Lang>
                            <Lang value='kr'>개발자</Lang>
                            <Lang value='ja'>開発者</Lang>
                            <Lang value='de'>Entwickler</Lang>
                            <Lang value='nl'>Ontwikkelaars</Lang>
                            <Lang value='dk'>Udviklere</Lang>
                            <Lang value='pt'>Desenvolvedores</Lang>
                            <Lang value='es'>Desarrolladores</Lang>
                            <Lang value='ru'>Разработчики</Lang>
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
                            <Lang value='en'>Designers</Lang>
                            <Lang value='vi'>Nhà thiết kế đồ họa</Lang>
                            <Lang value='fr'>Créateurs</Lang>
                            <Lang value='it'>Progettisti</Lang>
                            <Lang value='kr'>디자이너</Lang>
                            <Lang value='ja'>デザイナー</Lang>
                            <Lang value='de'>Designer</Lang>
                            <Lang value='nl'>Ontwerpers</Lang>
                            <Lang value='dk'>Designere</Lang>
                            <Lang value='pt'>Designers</Lang>
                            <Lang value='es'>Diseñadores</Lang>
                            <Lang value='ru'>Дизайнеры</Lang>
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
                            <Lang value='en'>Content Creators</Lang>
                            <Lang value='vi'>Nhà sáng tạo nội dung</Lang>
                            <Lang value='fr'>Créateurs de contenu</Lang>
                            <Lang value='it'>Creatori di contenuti</Lang>
                            <Lang value='kr'>콘텐츠 제작자</Lang>
                            <Lang value='ja'>コンテンツクリエイター</Lang>
                            <Lang value='de'>Inhaltsersteller</Lang>
                            <Lang value='nl'>Contentmakers</Lang>
                            <Lang value='dk'>Indholdsskabere</Lang>
                            <Lang value='pt'>Criadores de conteúdo</Lang>
                            <Lang value='es'>Creadores de contenido</Lang>
                            <Lang value='ru'>Создатели контента</Lang>
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
