import path from 'path';
import fs from 'fs';
import { db } from './firebase-admin.js';
import { put } from '@vercel/blob';

async function buildVersion(ver, dbPath) {
    let snap = await db.ref(dbPath).get();
    let icons = snap.val();
    
    let css = '';
    
    for (let key in icons) {
        let icon = icons[key];
        
        icon.styles.forEach(item => {
            let string = `\nf-icon[icon='${key}']${ver == 'b1' ? '[b1]' : ''}`;
            let unicode = icon.unicodes?.[item.replace("/", "-")];
            if (item.startsWith('duotone/')) {
                let unicode_layers = unicode?.split('|');
                string += `[i-s='${item}']::before { content: '\\${unicode_layers?.[0]}'}
${string}[i-s='${item}']::after { content: '\\${unicode_layers?.[1]}'}`;
            }
            else string += `${item == 'outline' ? '[i-s="outline"]' : ''}::before { content: '\\${unicode}'}`;
            css += string;
        })
    }
    
    await put(`foricon/${ver}.css`, css, {
        access: 'public',
        contentType: 'text/css',
    })
}

export async function buildAllCss() {
    await buildVersion('b1', 'icons/');
    await buildVersion('b2', 'iconsB2/');
}