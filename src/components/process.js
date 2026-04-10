'use client';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { get, ref } from 'firebase/database';
import { auth, dbFirestore, db } from './firebase';
import 'Com/utilities'

export default function Process() {
    useEffect(() => (async () => {
        let html = document.documentElement;
        let storedLang = localStorage.getItem('language');
        let visited = sessionStorage.getItem('visited') == 'true';
        
        storedLang && (html.lang = storedLang);
        if (!visited)
            try {
            let res = await(await fetch('https://ipinfo.io/json')).json();
            
            let lang = {
                VN: 'vi', FR: 'fr', IT: 'it', KR: 'kr',
                JP: 'ja', DE: 'de', NL: 'nl', DK: 'dk',
                PT: 'pt', ES: 'es', RU: 'ru',
            }[res.country] || 'en';
            
            html.lang = lang;
            
            localStorage.setItem('language', lang);
            sessionStorage.setItem('visited', true);
        }
        catch (err) {
            console.error('IP info error:', err)
        }
        
        qSelec(true, 'lang').forEach(
            each => each.getAttribute('value') != html.lang && each.remove()
        )
        onAuthStateChanged(auth, async res => {
            let locked = (await get(ref(db, 'locked'))).val();
            let admin;
            let { body } = document;
            console.log('get')
            if (res) {
                user = res;
                let d = await getDoc(doc(dbFirestore, 'users', user.uid));
                user.doc = d.data();
                
                qSelec(true, '.signup').forEach(each => each.remove());
                if (user.uid == 'ud4lP1mhq4XvynG7qUlcsAxi0Q02') {
                    document.addEventListener('keydown', ({ ctrlKey, key }) => {
                        ctrlKey && key == '/' && location.pathname != '/p/management-center.html' && !document.activeElement.matches('textarea, input') &&
                        go('admin', true);
                    }, false)
                    admin = true;
                }
                
                let { font, indent } = user.doc.personalization;
                body.classList.remove('cons');
                body.classList.add(font);
                body.indentSize = indent;
            }
            else user = false;
            // if (!admin) {
            //     if (['manager', 'management-center', 'admin'].some(path => location.pathname == `/p/${path}.html`)) document.documentElement.innerHTML = '403 Forbidden';
            //     else if (locked) document.documentElement.innerHTML = 'Foricon is updating to the newer version. Please come back later.';
            // }
        })

        while (user == null || user && !user.doc/* || !foriconPackageIsLoaded*/) await wait();
        let loading = elemById('loading');
        loading.style.opacity = '0';
        await wait(.2);
        loading.remove();
    })(), [])
    
    return null;
}