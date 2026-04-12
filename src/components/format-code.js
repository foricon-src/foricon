globalThis.formatCode = (value, lang = 'html') => {
    lang = lower(lang);
    function escapeHTML(str) {
        return str.replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
    }
    function protect(str) {
        return str.replaceAll('&lt;', '&_l')
        .replaceAll('&gt;', '&_g')
        .replaceAll('&amp;', '&_a');
    }
    function unprotect(str) {
        return str.replaceAll('&_l', '&lt;')
        .replaceAll('&_g', '&gt;')
        .replaceAll('&_a', '&amp;');
    }
    
    function highlightHTML(str) {
        str = str.replace(/(&lt;!--[\s\S]*?--&gt;)/g, match =>
            `<span class='comment'>${match}</span>`
        )
        
        str = str.replace(/&lt;(script|style)((?:(?!&gt;).)*?)&gt;([\s\S]*?)&lt;\/\1&gt;/g, (match, tag, attrs, content) =>
            `&lt;${tag}&gt;${tag == 'script' ? highlightJS(protect(content)) : highlightCSS(protect(content))}&lt;/${tag}&gt;`
        )
        str = unprotect(str.replace(/(&lt;\/?)([a-zA-Z0-9\-]+)((?:(?!&gt;).)*?)(\/?&gt;)/g, (match, open, tagName, attrs, close) => {
            let highlightedAttrs = attrs.replace(
                /([a-zA-Z0-9\-:]+)(?:=("[^"]*"|'[^']*'))?/g,
                (m, name, val) => {
                    return val
                    ? `<span class='attr'><span>${name}</span>=</span><span class='attr-val'>${val}</span>`
                    : `<span class='attr'><span>${name}</span></span>`;
                }
            )
            
            return `<span class='tag'>${open}<span>${tagName}</span>${highlightedAttrs}${close}</span>`;
        }))
        
        return str;
    }

    function highlightCSS(str) {
        // Protect comments first
        const comments = [];
        str = str.replace(/(\/\*[\s\S]*?\*\/)/g, m => {
            comments.push(m);
            return `__COMMENT_${comments.length - 1}__`;
        })
        
        // Match selectors and their blocks
        str = str.replace(/([^{]+)\{([^}]+)\}/g, (match, selector, content) => {
            let parts = content.split('\n').map(part => {
                if (!part.trim()) return part;
                
                let original = part;
                
                // Inline comment placeholders
                let comment = '';
                let commentMatch = part.match(/(__COMMENT_\d+__)$/);
                if (commentMatch) {
                    comment = commentMatch[1];
                    part = part.replace(comment, '');
                }
                
                // Capture indentation separately
                let indent = part.match(/^\s*/)[0];
                let rest = part.slice(indent.length);
                
                // Highlight multiple properties inline
                let highlightedLine = part.replace(/([a-zA-Z\-]+)(:\s*)([^;]*)(;?)/g,
                    (m, prop, colonSpace, val, semi) => {
                        let highlightedVal = val
                            .replace(/("[^"]*"|'[^']*')/g, s => `<span class='string'>${s}</span>`)
                            .replace(/\b\d+(\.\d+)?(px|em|rem|%|vh|vw|pt|cm|mm|in)?\b/g, num => {
                                let n = num.match(/^\d+(\.\d+)?/)[0];
                                let unit = num.slice(n.length);
                                return `<span class='number'>${n}</span>${unit}`;
                            })
                            .replace(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g, c => `<span class='color'>${c}</span>`)
                            .replace(/\b(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|transparent|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)\b/gi,
                                c => `<span class='css color'>${c}</span>`
                            )
                            .replace(/!important/g, `<span class='css important'>!important</span>`);
                        
                        return `<span class='css property'>${prop}</span>${colonSpace}<span class='css property-value'>${highlightedVal}</span>${semi}`;
                    }
                );
                
                // Restore inline comment if present
                return highlightedLine + (comment || '');
            }).join('\n');
            
            return `<span class='css selector'>${selector}</span>{${parts}}`;
        })
        
        // Restore comments
        str = str.replace(/__COMMENT_(\d+)__/g, (_, i) =>
            `<span class='comment'>${comments[i]}</span>`
        )

        return str;
    }

    function protectSpans(str, callback) {
        const spans = [];
        str = str.replace(/<span.*?<\/span>/g, m => {
            spans.push(m);
            return `__SPAN_${spans.length - 1}__`;
        })
        
        str = callback(str);
        
        return str.replace(/__SPAN_(\d+)__/g, (_, i) => spans[i]);
    }

    function highlightJS(str) {
        const keywords = [
            'break','case','catch','class','const','continue','debugger',
            'default','delete','do','else','export','extends','finally',
            'for','function','if','import','in','instanceof','let','new',
            'of', 'return','super','switch','this','throw','try','typeof','var',
            'void','while','with','yield','async','await'
        ]

        str = str.replace(
            /\b(let|const|var)(\s*)+([^;]+?)(?=\s*(;|\bin\b|\bof\b|$))/g,
            (match, kw, space, decls) => {
                function highlightVars(code) {
                    let result = '', i = 0, skip = false, depth = 0, isBehind = false;
                    let { length } = code;
                    
                    while (i < length) {
                        if (code.startsWith('//', i)) {
                            let index = code.indexOf('\n', i);
                            index = index == -1 ? length : Math.min(index + 2, length);
                            result += code.slice(i, index);
                            i = index;
                            continue;
                        }
                        if (code.startsWith('/*', i)) {
                            let index = code.indexOf('<*/>', i);
                            index = index == -1 ? length : Math.min(index + 2, length);
                            result += code.slice(i, index);
                            i = index;
                            continue;
                        }
                        if (code.startsWith('\n', i)) {
                            let left = code.slice(0, i).trimEnd();
                            let right = code.slice(i + 2).trimStart();
                            
                            if ((left.endsWith(',') || right.startsWith(','))) {
                                result += '\n';
                                i += 2;
                            }
                            else {
                                let next = Math.min(...['let', 'var', 'const'].map(word => {
                                    let index = code.indexOf(word, i);
                                    return index < 1 ? undefined : index;
                                }).filter(i => i))
                                next = next == -1 || next == Infinity ? length : next;
                                result += code.slice(i, next);
                                i = next;
                            }
                            continue;
                        }
                        
                        let char = code[i];
                        
                        if (char == '"' || char == "'" || char == '`') {
                            let quote = char;
                            result += char;
                            i++;
                            while (i < code.length && code[i] !== quote) {
                                if (code[i] == '\\') i++;
                                result += code[i++];
                            }
                            result += code[i++] || '';
                            continue;
                        }
                        
                        if (['(', '[', '{'].includes(char)) depth++;
                        else if ([')', ']', '}'].includes(char)) depth--;
                        
                        if (char == '=') {
                            skip = true;
                            if (depth == 0) isBehind = true;
                        }
                        else if (char == ',') {
                            skip = false;
                            if (depth == 0) isBehind = false;
                        }
                        
                        ['let', 'var', 'const'].forEach(each => {
                            let left = code.slice(0, i).trimEnd();
                            !/[a-zA-Z_$]/.test(code[i - each.length - 1]) && code.slice(i - each.length, i) == each && (skip = isBehind = false);
                        })
                        
                        if (!skip && !isBehind && /[a-zA-Z_$]/.test(char)) {
                            let start = i;
                            while (i < code.length && /[\w$]/.test(code[i])) i++;
                            let name = code.slice(start, i);
                            let rest = code.slice(i).trimStart();
                            
                            result += rest.startsWith(':')
                            ? name
                            : `<span class='js variable'>${name}</span>`;
                            
                            continue;
                        }
                        
                        result += char;
                        i++;
                    }
                    
                    return result;
                }
                return kw + space + highlightVars(decls);
            }
        )
        
        str = protectSpans(str, safe =>
                safe.replace(new RegExp(`\\b(${keywords.join('|')})\\b`, 'g'),
                match => `<span class='js keyword'>${match}</span>`
            )
        )
        
        str = protectSpans(str, safe =>
            safe.replace(/`([^`\\]|\\.|(\${[^}]+}))*`|'([^'\\]|\\.)*'|"([^"\\]|\\.)*"/g, match => {
                if (match.startsWith('`')) {
                    let out = '';
                    let i = 0;
                    out += `<span class="js string">\``;
                    while (i < match.length) {
                        if (match[i] === '$' && match[i+1] === '{') {
                            out += '${</span>';
                            let depth = 1;
                            let j = i+2;
                            while (j < match.length && depth > 0) {
                                if (match[j] === '{') depth++;
                                else if (match[j] === '}') depth--;
                                j++;
                            }
                            let inner = match.slice(i+2, j-1);
                            out += highlightJS(inner);
                            out += `<span class="js string">}`;
                            i = j-1;
                        } else if (i > 0 && i < match.length-1) {
                            out += match[i];
                        }
                        i++;
                    }
                    out += '`</span>';
                    return out;
                }
                return `<span class='js string'>${match}</span>`;
            })
        );

        str = protectSpans(str, safe =>
            safe
            .replace(/(\.)([a-zA-Z_$][\w$]*)\(/g, (m, dot, name) =>
                `${dot}<span class='js function'>${name}</span>(`
            )
            .replace(/\b([a-zA-Z_$][\w$]*)\(/g, (m, name) =>
                keywords.includes(name) ? m : `<span class='js function'>${name}</span>(`
            )
        )

        str = protectSpans(str, safe =>
            safe.replace(/(\/\/.*?)(\n)/g, (match, comment, br) =>
                `<span class='comment'>${comment}</span>${br}`
            )
        )

        str = protectSpans(str, safe =>
            safe.replace(/(\/\*[\s\S]*?\*\/)/g, match =>
                `<span class='comment'>${match}</span>`
            )
        )

        str = protectSpans(str, safe =>
            safe.replace(/\b(\d+(\.\d+)?)\b/g,
                match => `<span class='number'>${match}</span>`
            )
        )

        return str;
    }

    let escaped = escapeHTML(value).split('\n').map(i => i || ' ').join('\n');
    return (
        lang == 'html' ? highlightHTML(escaped) :
        lang == 'css' ? highlightCSS(escaped) :
        lang == 'js' || lang == 'javascript' ? highlightJS(escaped) :
        escaped
    ).replaceAll('\u200b', "<span class='hidden-char' title='U+200B'></span>")
    .replaceAll('\u200c', "<span class='hidden-char' title='U+200C'></span>")
    .replaceAll('\u200d', "<span class='hidden-char' title='U+200D'></span>")
    .replaceAll('\ufeff', "<span class='hidden-char' title='U+FEFF'></span>")
    .replaceAll('\u2060', "<span class='hidden-char' title='U+2060'></span>");
}