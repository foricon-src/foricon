export default function AlternativeLanguages(page) {
    let main = 'https://foricon.vercel.app';
    let langs = [ 'vi', 'fr', 'it', 'kr', 'ja', 'de', 'nl', 'dk', 'pt', 'es', 'ru' ];
    let obj = {
        canonical: `${main}/en${page ? `/${page}` : ''}`,
        languages: {},
    }
    langs.forEach(i => obj.languages[i] = `${main}/${i}${page ? `/${page}` : ''}`);
    return obj;
}