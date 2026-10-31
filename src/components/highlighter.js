import { createHighlighter } from 'shiki';

export let theme = {
    name: 'Foricon',
    fg: 'var(--text-color)',
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
            scope: [ 'meta.template.expression.js', 'support.constant.color.w3c-standard-color-name.css' ],
            settings: { foreground: 'rgb(240, 132, 60)' },
        },
        {
            scope: [
                'entity.name.function',
                'support.function',
                'entity.other.inherited-class.js',
                'support.class.promise.js',
            ],
            settings: { foreground: 'rgb(32, 178, 170)' },
        },
        {
            scope: [
                'keyword.control',
                'keyword.control.at-rule.css',
                'keyword.operator.expression.of.js',
                'keyword.operator.new.js',
                'meta.at-rule.media.header.css',
                'meta.at-rule.keyframes.body.css',
                'storage',
            ],
            settings: { foreground: 'rgb(130, 60, 230)' },
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
                'variable.parameter.js',
                'variable.other.readwrite',
                'variable.other.object.js',
                'variable.other.constant.js',
                'variable.other.constant.object.js',
                'variable.argument.css',
                'entity.name.type.class.js',
                'entity.name.tag',
            ],
            settings: { foreground: 'rgb(40, 120, 230)' },
        },
        {
            scope: [
                'variable.other.property',
                'variable.other.object.property.js',
                'meta.property-value.css',
            ],
            settings: { foreground: 'rgb(120, 160, 120)' },
        },
        {
            scope: [
                'constant.language',
                'constant.language.boolean',
                'constant.character.entity',
                'meta.at-rule.keyframes.header.css',
                'entity.other.attribute-name.pseudo-class.css',
                'entity.other.attribute-name.pseudo-element.css',
            ],
            settings: { foreground: 'rgb(70, 130, 180)' },
        },
        {
            scope: [
                // 'keyword.operator',
                'keyword.doctype',
                'punctuation.definition.tag',
                // 'punctuation.separator.key-value',
            ],
            settings: { foreground: 'rgb(100, 100, 100)' },
        },
        {
            scope: [ 'storage.type.function.arrow.js', 'meta.embedded.line.js' ],
            settings: { foreground: 'var(--text-color)' },
        },
        {
            scope: [
                'support.type.property-name.css',
                'support.type.property-name.media.css',
                'variable.language.this.js',
                'variable.language.super.js',
            ],
            settings: { foreground: 'rgb(230, 70, 100)' },
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