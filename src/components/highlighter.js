import { createHighlighter } from 'shiki';

export let theme = {
    name: 'Foricon',
    settings: [
        {
            scope: [ 'string', 'punctuation.definition.template-expression', 'string.quoted', 'string.quoted.css' ],
            settings: { foreground: 'rgb(220, 105, 70)' },
        },
        {
            scope: [ 'comment', 'comment.block.html', 'comment.block.css' ],
            settings: { foreground: 'rgb(210, 170, 60)' },
        },
        {
            scope: [ 'entity.name.function' ],
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
            scope: [ 'variable.other', 'entity.name.tag' ],
            settings: { foreground: 'rgb(40, 120, 230)' },
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