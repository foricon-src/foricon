import Search from "./pageClient";
import FilterIcon from "./toIconMap";
import { init } from "next/dist/compiled/webpack/webpack";
import { get, ref } from "firebase/database";
import { db } from "Com/firebase";

export async function Page({ searchParams }) {
    let initial = (() => {
        if (typeof window == 'undefined') {
            return {
                search: '',
                family: 'all',
                style: 'all',
                version: 'b2',
                categories: [],
            }
        }
        
        let params = location.params.slice(1);
        let map = Object.fromEntries(
            params.split('&').map(p => [ p.slice(0, 2), p.slice(2) ])
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
            if (param == 'c') return (map['c=']?.split(';') || []).filter(category => webData.categories[category]);
        }
        
        return {
            search: verify('k'),
            family: verify('f'),
            style: verify('s'),
            version: verify('v'),
            categories: verify('c'),
        }
    })()

    let snap = await get(ref(db, `icons${initial.version == 'b2' ? 'B2' : ''}/`))
    let icons = snap.val();

    let filtered = FilterIcon(Object.entries(icons).map(([ name, icon ]) => ({
        name,
        categories: icon.categories,
        styles: icon.styles,
        glyphs: icon.glyphs,
        unicodes: icon.unicodes,
    })), initial.family, initial.search, initial.categories)

    return (
        <>
            <div id='adsense-content'>
                <h1>{filtered.length} icons</h1>
                <ul>{
                    icons.slice(0,100).map(i =>
                        <li key={i.name}>{i.name}</li>
                    )
                }</ul>
            </div>
            <Search initial={initial}/>
        </>
    )
}