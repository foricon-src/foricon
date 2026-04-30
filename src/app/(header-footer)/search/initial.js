export default function Initial(search, isOnServer) {
    if (!searchParams) {
        return {
            search: '',
            family: 'all',
            style: 'all',
            version: 'b2',
            categories: [],
        }
    }
    
    let map = Object.fromEntries(
        search.slice(1).split('&').map(p => [ p.slice(0, 2), p.slice(2) ])
    )
    
    function verify(param) {
        if (param == 'k') return map['k='] || '';
        if (param == 'f') return {
            regular: 'regular',
            duotone: 'duotone',
        }[map['f=']] || 'all';
        if (param == 's') return {
            solid: 'solid',
            outline: 'outline'
        }[map['s=']] || 'all';
        if (param == 'v') return {
            b1: 'b1',
        }[map['v=']] || 'b2';
        if (param == 'c') {
            let arr = (map['c=']?.split(';') || []);
            return isOnServer ? arr : arr.filter(category => webData.categories[category]);
        }
    }
    
    return {
        search: verify('k'),
        family: verify('f'),
        style: verify('s'),
        version: verify('v'),
        categories: verify('c'),
    }
}