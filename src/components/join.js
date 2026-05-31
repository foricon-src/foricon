export default function Join(joinCharacter, ...strs) {
    console.log(strs.filter(i => typeof i == 'string'))
    return strs.filter(i => typeof i == 'string').join(joinCharacter);
}