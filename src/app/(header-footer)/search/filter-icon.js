import Similarity from "Com/similarity";

export default function FilterIcon(set, search, family, style, categories) {
    function getStyles(icon) {
        if (family == 'all' && style == 'all')
            return icon.styles;
        if (family == 'all')
            return [ '', 'duotone/', 'sharp/' ].map(prefix => `${prefix}${style}`);
        if (style == 'all')
            return [ 'solid', 'outline' ].map(
                s => `${family == 'regular' ? '' : `${family}/`}${s}`
            )
        return [ `${family == 'regular' ? '' : `${family}/`}${style}` ];
    }

    return set.flatMap(icon =>
        getStyles(icon)
            .filter(s => icon.styles.includes(s))
            .filter(() => {
                let normalized = icon.name.toLowerCase().replace(/[+-]/g, ' ');
                return (
                    (
                        normalized.includes(search) || Similarity(normalized, search) > 0.65
                    ) && (
                        !categories.length || categories.every(c => icon.categories.includes(c))
                    )
                )
            })
            .map(style => ({ icon, style }))
    )
}