export default function GetFamilyAndStyle(styleName) {
    let [ a, b ] = styleName.split('/');
    let f = b ? a : 'regular';
    let s = b || a;
    return { f, s };
}