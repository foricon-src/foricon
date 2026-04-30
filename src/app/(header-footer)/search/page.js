import Search from "./pageClient";
import FilterIcon from "./toIconMap";
import { get, ref } from "firebase/database";
import { db } from "Com/firebase";
import Initial from "./initial";

export async function Page({ searchParams }) {
    let initial = Initial(searchParams, true);

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