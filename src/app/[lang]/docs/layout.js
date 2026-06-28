import cssStyle from './internal-global.css';
import Header from './header';
import Sidebar from './sidebar';
import NotePanel from './note-panel';
import SavedPanel from './saved-panel';

export function generateMetadata({ params: { lang } }) {
    return {
        title: {
            template: `%s | ${
                {
                    en: 'Foricon Docs',
                    vi: 'Tài liệu Foricon',
                    fr: 'Documentation Foricon',
                    it: 'Documentazione Foricon',
                    kr: 'Foricon Docs',
                    ja: 'Foricon Docs',
                    de: 'Foricon-Dokumentation',
                    nl: 'Foricon-documentatie',
                    dk: 'Foricon-dokumenter',
                    pt: 'Documentação do Foricon',
                    es: 'Documentación de Foricon',
                    ru: 'Документация Foricon',
                }[lang]
            }`,
        },
        description: {
            en: 'Discover how to harness the power of Foricon icons with ease! Our icon font docs guide you through techniques to elevate your projects - friendly, clear, and empowering for creatives and professionals alike.',
            vi: 'Khám phá cách khai thác sức mạnh của biểu tượng của Foricon một cách dễ dàng! Tài liệu hướng dẫn về bộ biểu tượng của chúng tôi sẽ chỉ cho bạn các cách để nâng tầm dự án của mình - thân thiện, rõ ràng và truyền cảm hứng cho cả người sáng tạo và chuyên gia.',
            fr: 'Découvrez comment exploiter facilement la puissance des icônes Foricon ! Notre documentation sur les polices d’icônes vous guide à travers des techniques pour sublimer vos projets : conviviale, claire et inspirante, elle est idéale pour les créatifs comme pour les professionnels.',
            it: 'Scopri come sfruttare al meglio le icone Foricon con facilità! La nostra documentazione sui font di icone ti guiderà attraverso tecniche che ti permetteranno di migliorare i tuoi progetti: intuitiva, chiara e utile sia per i creativi che per i professionisti.',
            kr: 'Foricon 아이콘의 강력한 기능을 손쉽게 활용하는 방법을 알아보세요! 저희 아이콘 폰트 문서에서는 여러분의 프로젝트를 한 단계 더 끌어올릴 수 있는 다양한 기법을 친절하고 명확하게 안내해 드립니다. 크리에이터와 전문가 모두에게 유용한 자료입니다.',
            ja: 'Foriconアイコンのパワーを簡単に活用する方法をご紹介します！当社のアイコンフォントに関するドキュメントでは、クリエイターやプロフェッショナルの方々にとって分かりやすく、使いやすく、力強いツールとなるよう、プロジェクトを向上させるためのテクニックを解説しています。',
            de: 'Entdecken Sie, wie Sie die Leistungsfähigkeit von Foricon-Icons mühelos nutzen können! Unsere Dokumentation zu Icon-Fonts führt Sie durch Techniken, mit denen Sie Ihre Projekte aufwerten können – benutzerfreundlich, verständlich und hilfreich für Kreative und Profis gleichermaßen.',
            nl: 'Ontdek hoe je de kracht van Foricon-pictogrammen eenvoudig kunt benutten! Onze documentatie over iconenlettertypen begeleidt je door technieken om je projecten naar een hoger niveau te tillen - gebruiksvriendelijk, duidelijk en inspirerend voor zowel creatievelingen als professionals.',
            dk: 'Opdag, hvordan du nemt kan udnytte kraften i Foricon-ikoner! Vores dokumentation om ikonfonte guider dig gennem teknikker, der forbedrer dine projekter – brugervenligt, tydeligt og styrkende for både kreative og professionelle.',
            pt: 'Descubra como aproveitar o poder dos ícones Foricon com facilidade! A nossa documentação sobre tipos de letra de ícones guia-o através de técnicas para melhorar os seus projetos — de forma amigável, clara e eficaz para criativos e profissionais.',
            es: '¡Descubre cómo aprovechar al máximo el poder de los iconos de Foricon con facilidad! Nuestra documentación sobre fuentes de iconos te guía a través de técnicas para potenciar tus proyectos: un enfoque amigable, claro y que resulta muy útil tanto para creativos como para profesionales.',
            ru: 'Узнайте, как легко использовать возможности иконок Foricon! Наша документация по иконочным шрифтам поможет вам освоить методы, которые улучшат ваши проекты — удобные, понятные и вдохновляющие как для творческих людей, так и для профессионалов.',
        }[lang],
    }
}
export default function RootLayout({ children }) {
    return <div className={cssStyle.wrapper}>
        <Header/>
        <Sidebar/>
        {children}
        <NotePanel/>
        <SavedPanel/>
    </div>
}