import { createHighlighter } from 'shiki';

export let theme = {
    name: 'Foricon',
    fg: 'var(--title-color)',
    settings: [
        {
            scope: [
                'string.quoted.single',
                'string.quoted.double',
                'string.quoted.css',
                'string.template',
            ],
            settings: { foreground: 'rgb(220, 110, 70)' },
        },
        {
            scope: [ 'keyword.other.important.css' ],
            settings: { foreground: 'rgb(220, 50, 50)' },
        },
        {
            scope: [
                'string.regexp',
                'keyword.control.anchor.regexp',
                'keyword.operator.quantifier.regexp',
                'keyword.other.js',
                'entity.name.tag.css',
                'entity.other.attribute-name.class.css',
                'entity.other.attribute-name.id.css',
                'punctuation.definition.character-class.regexp',
                'constant.other.character-class.range.regexp',
            ],
            settings: { foreground: 'rgb(180, 200, 60)' },
        },
        {
            scope: [ 'comment', 'comment.block.html', 'comment.block.css' ],
            settings: { foreground: 'rgb(210, 170, 60)' },
        },
        {
            scope: [ 'entity.name.function', 'support.function.css' ],
            settings: { foreground: 'lightseagreen' },
        },
        {
            scope: [
                'keyword',
                'keyword.control',
                'keyword.control.at-rule.css',
                'keyword.operator.expression.of.js',
                'keyword.operator.new.js',
                'storage.type',
            ],
            settings: { foreground: 'rgb(110, 70, 190)' },
        },
        {
            scope: [
                'constant.numeric',
                'constant.numeric.css',
                'keyword.other.unit',
                'entity.other.attribute-name',
            ],
            settings: { foreground: 'rgb(50, 200, 115)' },
        },
        {
            scope: [
                'variable.parameter',
                'variable.other.readwrite',
                'variable.css',
                'entity.name.tag',
            ],
            settings: { foreground: 'rgb(40, 120, 230)' },
        },
        {
            scope: [
                'variable.other.property',
            ],
            settings: { foreground: 'rgb(60, 200, 220)' },
        },
        {
            scope: [
                'constant.language',
                'constant.language.boolean',
                'constant.character.entity',
                'entity.other.attribute-name.pseudo-class.css',
                'entity.other.attribute-name.pseudo-element.css'
            ],
            settings: { foreground: 'rgb(70, 130, 180)' },
        },
        {
            scope: [
                'keyword.operator',
                'keyword.doctype',
                'punctuation.definition.tag',
                'punctuation.separator.key-value',
                'storage.type.function.arrow.js',
            ],
            settings: { foreground: 'dimgray' },
        },
    ]
    
    // &:is(.attr-val, .css.important, .string) {
    //     color: rgb(220, 105, 70);
    // }
    // &.tag, &.attr {
    //     color: dimgray;
    // }
    // &.tag > span:not(.attr, .attr-val), &:is(.css.property, .js.variable) {
    //     color: rgb(40, 120, 230);
    // }
    // &.attr > span, &.css.selector {
    //     color: rgb(45, 180, 100);
    // }
    // &.css {
    //     &.property {
    //         color: rgb(250, 170, 20);
    //     }
    //     &.property-value {
    //         color: rgb(30, 150, 235);
    //     }
    //     &.color {
    //         color: rgb(150, 50, 255);
    //     }
    // }
    // &.js {
    //     &.keyword {
    //         color: mediumorchid;
    //     }
    //     &.function {
    //         color: lightseagreen;
    //     }
    //     &.property {
    //         opacity: .75;
    //     }
    // }
    // &.bracket {
    //     color: rgb(255, 220, 60);
    // }
    // &.number {
    //     color: rgb(50, 200, 115);
    // }
}
export let highlighter = createHighlighter({
    themes: [ theme ],
    langs: [ 'javascript', 'html', 'css' ],
})