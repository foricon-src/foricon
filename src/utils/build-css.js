import path from 'path';
import fs from 'fs';
import { db } from './firebase-admin.js';
import { put } from '@vercel/blob';

export async function buildAllCss() {
    let snap = await db.ref('iconsB2/').get();
    let icons = snap.val();

    console.log('Got icons');
    
    let css = '';
    
    for (let key in icons) {
        let icon = icons[key];
        
        icon.styles.forEach(item => {
            let string = `\nf-icon[icon='${key}']`;
            let unicode = icon.unicodes?.[item.replace("/", "-")];
            if (item.startsWith('duotone/')) {
                let unicode_layers = unicode?.split('|');
                string += `[i-s='${item}']::before { content: '\\${unicode_layers?.[0]}'}
${string}[i-s='${item}']::after { content: '\\${unicode_layers?.[1]}'}`;
            }
            else string += `${item == 'outline' ? "[i-s='outline']" : ''}::before { content: '\\${unicode}'}`;
            css += string;
        })
    }

    console.log('Finished building CSS');
    
    await put(`foricon/b2.css`, css, {
        access: 'public',
        contentType: 'text/css',
        allowOverwrite: true,
    })
    
    console.log('Finished building and created file')
}