export default function Code({ children, lang }) {
    return (
        <code name={lang}
            dangerouslySetInnerHTML={{
                __html: formatCode(children, lower(lang))
            }}
        />
    )
}