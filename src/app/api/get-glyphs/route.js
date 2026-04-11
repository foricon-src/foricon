import opentype from 'opentype.js';

export async function GET() {
    try {
        let url = getFile(`systemAssets/fontb2.ttf`);
        let response = await fetch(url);
        let fontBuffer = await response.arrayBuffer();
        let { glyphs: { glyphs } } = opentype.parse(fontBuffer);
        
        return Response.json(Object.entries(glyphs).map(([ , char ]) => {
            let unicode = char.unicode || '1114111';
            let uni16 = unicode.toString(16).padStart(4, '0');
            let glyph = String.fromCharCode(unicode);

            return {
                name: char.name,
                unicode: uni16,
                glyph,
            }
        }), {
            headers: {
                'Access-Control-Allow-Origin': '//foricon.vercel.app',
            }
        })
    }
    catch (err) {
        error('Error getting font: ', err)
        res.status(500).send('Internal Server Error');
    }
}