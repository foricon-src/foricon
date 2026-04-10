'use client';

import Image from 'next/image';
import favicon from 'Ass/foricon-f-favicon.png';
import './page.css';

export default function Home() {
    return (
        <div className='section' itemID='hero'>
            <img src='//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBX39PGrjfEdpF2RTkpAaKi84zc4JJ5cs7MzKgtnPH6jepJLRGh8zTwACp0VH2Dt5dj7AZH39t4pvfY69Fc8yt_6W2Ya0iwT432qMJURupVCcq6ZHAPAjaJO85Dw8Gj2LppRLBKkJYUTbq6yAFFRc2ezL66KkHDXR0ksoDroknEakKo0PlBODWcq3aXCc/s1600/foricon-f.png'/>
            <a href='/p/new-changelog.html'>
                <f-icon i-s='outline' icon='hashtag'/>{webData.verFull}
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
                <lang value='fr'>Concevez plus intelligemment avec des icônes qui se personnalisent, s&#39;animent et s&#39;intègrent en quelques secondes</lang>
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
    );
}
