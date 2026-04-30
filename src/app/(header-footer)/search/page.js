import Search from "./pageClient"

export async function Page({ searchParams }) {
    let snap = await get(ref(db, 'iconsB2/'))
    let iconsB2 = snap.val()
    let  icons = Object.entries(iconsB2).map(([ name, icon ]) => ({
        name,
        categories: icon.categories,
        styles: icon.styles,
        glyphs: icon.glyphs,
        unicodes: icon.unicodes,
    }))

    return (
        <>
            <div id='adsense-content'>
                <h1>{icons.length} icons for "{searchParams.k}"</h1>
                <ul>{
                    icons.slice(0,100).map(i =>
                        <li key={i.name}>{i.name}</li>
                    )
                }</ul>
            </div>
            <Search/>
        </>
    )
}