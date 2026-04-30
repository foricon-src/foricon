import Search from "./pageClient";
import FilterIcon from "./toIconMap";
import { get, ref } from "firebase/database";
import { db } from "Com/firebase";
import Initial from "./initial";

export async function Page({ searchParams }) {
    let initial = (search => {
        if (!search) return {
            search: '',
            family: 'all',
            style: 'all',
            version: 'b2',
            categories: [],
        }
        
        let map = Object.fromEntries(
            search.slice(1).split('&').map(p => [ p.slice(0, 2), p.slice(2) ])
        )
        
        return {
            search: map['=k'] || '',
            family: map['=f'] || 'all',
            style: map['=s'] || 'all',
            version: map['=v'] || 'b2',
            categories: map['=c']?.split(';') || [],
        }
    })(searchParams)

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
                    filtered.slice(0,100).map(i =>
                        <li key={i.name}>{i.name}</li>
                    )
                }</ul>
            </div>
            <Search/>
        </>
    )
}