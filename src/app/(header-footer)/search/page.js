import SearchWrapped from "./page.wrapped";
import FilterIcon from "./filter-icon";
import { db } from "Uti/firebase-admin";

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
    let snap = await db.ref(`icons${initial.version == 'b2' ? 'B2' : ''}/`).once('value');
    let icons = snap.val();

    let filtered = FilterIcon(Object.entries(icons).map(([ name, icon ]) => ({
        name,
        categories: icon.categories,
        styles: icon.styles,
        glyphs: icon.glyphs,
        unicodes: icon.unicodes,
    })), initial.search, initial.family, initial.search, initial.categories)

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
            <SearchWrapped/>
        </>
    )
}