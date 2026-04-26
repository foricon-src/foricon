export default function Code({ children, lang, nameless }) {
    return (
        <code name={!nameless && lang}
            dangerouslySetInnerHTML={{
                __html: formatCode(children, lower(lang))
            }}
        />
    )
}