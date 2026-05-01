// import SearchWrapped from "./page.wrapped";
import Search from "./page.client";
import FilterIcon from "./filter-icon";
import { db } from "Uti/firebase-admin";
import Initial from "./initial";

export default async function Page({ searchParams }) {
    let initial = Initial(searchParams);
    let snap = await db.ref(`icons${initial.version == 'b2' ? 'B2' : ''}/`).once('value');
    let icons = snap.val();

    let filtered = FilterIcon(Object.entries(icons).map(([ name, icon ]) => ({
        name,
        categories: icon.categories,
        styles: icon.styles,
        glyphs: icon.glyphs,
        unicodes: icon.unicodes,
    })), initial.search, initial.family, initial.style, initial.categories)

    return (
        <>
            <div id='adsense-content'>
                <h1>{filtered.length} icons</h1>
                <ul>{
                    filtered.slice(0,100).map(i =>
                        <li key={i.icon.name}>{i.icon.name}</li>
                    )
                }</ul>
            </div>
            <Search searchParams={searchParams}/>
        </>
    )
}