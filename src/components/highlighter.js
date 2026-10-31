import { createHighlighter } from 'shiki';

export let theme = {
    name: 'Foricon',
    settings: [
        {
            scope: [ 'string', 'string.template', 'punctuation.definition.template-expression', 'string.quoted', 'string.quoted.css' ],
            settings: { foreground: 'rgb(220, 110, 70)' },
        },
        {
            scope: [ 'keyword.other.important.css' ],
            settings: { foreground: 'rgb(220, 50, 50)' },
        },
        {
            scope: [ 'string.regexp' ],
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
            scope: [ 'keyword', 'keyword.control' ],
            settings: { foreground: 'mediumorchid' },
        },
        {
            scope: [ 'number', 'entity.other.attribute-name' ],
            settings: { foreground: 'rgb(50, 200, 115)' },
        },
        {
            scope: [ 'variable.other', 'entity.name.tag', 'variable.css' ],
            settings: { foreground: 'rgb(40, 120, 230)' },
        },
        {
            scope: [ 'storage.type', 'keyword.control.at-rule.css' ],
            settings: { foreground: 'rgb(110, 70, 190)' },
        },
        {
            scope: [ 'constant.language', 'constant.language.boolean', 'constant.character.entity' ],
            settings: { foreground: 'rgb(70, 130, 180)' },
        },
        {
            scope: [ 'keyword.operator', 'punctuation.definition.tag', 'keyword.doctype', 'punctuation.separator.key-value' ],
            settings: { foreground: 'dimgray' },
        },
        {
            scope: [ '' ],
            settings: { foreground: '' },
        },
        {
            scope: [ '' ],
            settings: { foreground: '' },
        },
        {
            scope: [ '' ],
            settings: { foreground: '' },
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