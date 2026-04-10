'use client';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import { get, ref } from 'firebase/database';
import { auth, dbFirestore, db } from './firebase';
import 'Com/utilities'

export default function Process() {
    useEffect(() => (async () => {
        let { body, documentElement: html } = document;
        let visited = sessionStorage.getItem('visited') == 'true';
        let theme = localStorage.getItem('theme');

        (
            theme == 'dark'
            ||
            !theme && window.matchMedia?.('(prefers-color-scheme: dark)').matches
        ) && body.classList.add('dark');
        
        language = localStorage.getItem('language');
        country = localStorage.getItem('country');
        
        if (!visited) {
            let res = await(await fetch('https://ipinfo.io/json')).json();
            country = res.country;
            
            language = {
                VN: 'vi', FR: 'fr', IT: 'it', KR: 'kr',
                JP: 'ja', DE: 'de', NL: 'nl', DK: 'dk',
                PT: 'pt', ES: 'es', RU: 'ru',
            }[country] || 'en';
            
            localStorage.setItem('language', language);
            localStorage.setItem('country', country);
            sessionStorage.setItem('visited', true);
            
            if (!['14.187', '113.23', '27.2', '118.69'].some(i => ip.startsWith(i))) {
                let { userAgent } = navigator;
                let browserName =
                    userAgent.indexOf('OPR') + 1 ? 'Opera' :
                    userAgent.indexOf('Edg') + 1 ? 'Microsoft Edge' :
                    userAgent.indexOf('MSIE') + 1 ? 'Microsoft Internet Explorer' :
                    userAgent.indexOf('Chrome') + 1 ? 'Chrome' :
                    userAgent.indexOf('Safari') + 1 ? 'Safari' :
                    userAgent.indexOf('Firefox') + 1 ? 'Firefox' : 'Other';
                
                let date = new Date();
                let today = formatDate({
                    day: date.getUTCDate(),
                    month: date.getUTCMonth(),
                    year: date.getUTCFullYear(),
                }, 'en');
                let stats = (await getDoc(doc(dbFirestore, 'statistics', 'item'))).data();
                stats.visits[today] ||= {
                    browsers: {},
                    countries: {},
                }
                
                function update(obj, key) {
                    obj[key] = (obj[key] || 0) + 1;
                }
                let { browsers, countries } = stats.visits[today];
                update(browsers, browserName);
                update(countries, res.country);
                
                await setDoc(doc(dbFirestore, 'statistics', 'item'), stats);
            }
        }
        html.lang = language;
        
        qSelec(true, '*').forEach(each => {
            each.matches('lang') && each.getAttribute('value') != html.lang && each.remove();
            [...each.attributes].forEach(attr => {
                let { name, value } = attr;
                if (name.startsWith('lang:')) {
                    let [ lang, attr ] = name.slice(5).split('-');
                    lang == language && each.setAttribute(attr, value);
                    each.removeAttribute(name);
                }
            })
        })
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