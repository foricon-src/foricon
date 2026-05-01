export default function Initial(params, toFilter) {
    if (!params) return {
        search: '',
        family: 'all',
        style: 'all',
        version: 'b2',
        categories: [],
    }
    console.log(params, params['s='])
    function verify(param) {
        if (param == 'k') return params['k='] || '';
        if (param == 'f') return {
            regular: 'regular',
            duotone: 'duotone',
        }[params['f=']] || 'all';
        if (param == 's') return {
            solid: 'solid',
            outline: 'outline'
        }[params['s=']] || 'all';
        if (param == 'v') return {
            b1: 'b1',
        }[params['v=']] || 'b2';
        if (param == 'c') return (params['c=']?.split(';') || []).filter(category => webData.categories[category]);
    }
    
    return {
        search: verify('k'),
        family: verify('f'),
        style: verify('s'),
        version: verify('v'),
        categories: verify('c'),
    }
}