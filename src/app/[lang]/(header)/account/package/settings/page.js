import PageClient from './page.client';

export function generateMetadata({ params: { lang }}) {
    return {
        title: {
            en: 'Package settings',
            vi: 'Cài đặt Package',
            fr: 'Paramètres du package',
            it: 'Impostazioni del pacchetto',
            kr: '패키지 설정',
            ja: 'パッケージ設定',
            de: 'Paketeinstellungen',
            nl: 'Pakketinstellingen',
            dk: 'Pakkeindstillinger',
            pt: 'Configurações do pacote',
            es: 'Configuración del paquete',
            ru: 'Настройки пакета',
        }[lang]
    }   
}

export default function Page({ params }) {
    return <PageClient lang={params.lang}/>
}