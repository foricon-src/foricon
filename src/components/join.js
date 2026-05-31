export default function Join(joinCharacter, ...strs) {
    return strs.filter(Boolean).join(joinCharacter);
}