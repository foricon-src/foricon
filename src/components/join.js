export default function Join(joinCharacter, ...strs) {
    return strs.filter(i => typeof i == 'string').join(joinCharacter);
}