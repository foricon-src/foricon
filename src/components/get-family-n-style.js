export default function GetFamilyAndStyle(styleName) {
    let [ a, b ] = selectedIcon.style.split('/');
    let f = b ? a : 'regular';
    let s = b || a;
    return { f, s };
}