import PageClient from "./page.client";

export function generateMetadata({ params = { lang: 'en' } }) {
    let { lang } = params;

    return {
        title: {
            en: 'Browse the library',
            vi: 'Tìm kiếm trong thư viện',
            fr: 'Parcourez la bibliothèque',
            it: 'Sfoglia la biblioteca',
            kr: '라이브러리를 둘러보세요',
            ja: 'ライブラリを閲覧する',
            de: 'Durchsuchen Sie die Bibliothek',
            nl: 'Blader door de bibliotheek',
            dk: 'Gennemse biblioteket',
            pt: 'Navegue pela biblioteca',
            es: 'Explora la biblioteca',
            ru: 'Просмотрите библиотеку',
        }[lang],
        description: {
            en: 'Browse our library of 1,000+ icons in 4 styles. Seamlessly integrate with HTML or download as high-quality PNG, SVG, or WebP to enhance your project with ease.',
            vi: 'Tìm kiếm trong thư viện hơn 1.000 biểu tượng của chúng tôi, khả dụng trong 4 kiểu khác nhau. Tích hợp mượt mà vào HTML hoặc tải xuống dưới những ảnh PNG, SVG hay WebP chất lượng cao để nâng cao dự án của bạn.',
            fr: 'Parcourez notre bibliothèque de plus de 1 000 icônes déclinées en 4 styles. Intégrez-les facilement à votre code HTML ou téléchargez-les en haute qualité aux formats PNG, SVG ou WebP pour enrichir vos projets en toute simplicité.',
            it: "Esplora la nostra libreria di oltre 1.000 icone in 4 stili. Integrale facilmente con l'HTML o scaricale in formato PNG, SVG o WebP di alta qualità per arricchire i tuoi progetti con facilità.",
            kr: '4가지 스타일로 제공되는 1,000개 이상의 아이콘 라이브러리를 살펴보세요. HTML에 간편하게 통합하거나 고품질 PNG, SVG, WebP 파일로 다운로드하여 프로젝트를 손쉽게 향상시킬 수 있습니다.',
            ja: '4つのスタイルで1,000種類以上のアイコンを収録したライブラリをご覧ください。HTMLにシームレスに統合したり、高品質のPNG、SVG、WebP形式でダウンロードして、プロジェクトを簡単に強化できます。',
            de: 'Durchstöbern Sie unsere Bibliothek mit über 1.000 Icons in 4 Stilen. Integrieren Sie sie nahtlos in HTML oder laden Sie sie als hochauflösende PNG-, SVG- oder WebP-Dateien herunter, um Ihr Projekt mühelos aufzuwerten.',
            nl: 'Blader door onze bibliotheek met meer dan 1000 iconen in 4 stijlen. Integreer naadloos met HTML of download ze als hoogwaardige PNG-, SVG- of WebP-bestanden om uw project eenvoudig te verrijken.',
            dk: 'Gennemse vores bibliotek med over 1.000 ikoner i 4 forskellige stilarter. Integrer problemfrit med HTML, eller download dem som PNG, SVG eller WebP i høj kvalitet for nemt at forbedre dit projekt.',
            pt: 'Explore a nossa biblioteca com mais de 1.000 ícones em 4 estilos. Integre-os facilmente no HTML ou descarregue-os em PNG, SVG ou WebP de alta qualidade para melhorar o seu projeto com facilidade.',
            es: 'Explora nuestra biblioteca de más de 1000 iconos en 4 estilos. Intégralos fácilmente con HTML o descárgalos en formato PNG, SVG o WebP de alta calidad para mejorar tu proyecto con facilidad.',
            ru: 'Ознакомьтесь с нашей библиотекой, содержащей более 1000 иконок в 4 стилях. Легко интегрируйте их с HTML или загружайте в формате PNG, SVG или WebP высокого качества, чтобы с легкостью улучшить свой проект.',
        }[lang],
    }
}
export default function Page({ params }) {
    return <PageClient params={params}/>
}