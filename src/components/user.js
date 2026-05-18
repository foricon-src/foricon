'use client';

import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { auth, dbFirestore, db } from './firebase';

export const UserContext = createContext(false);
export function UserProvider({ children }) {
    let [ user, setUser ] = useState(false);

    useEffect(() => {
        let { body } = document;

        onAuthStateChanged(auth, async (res = false) => {
            let locked = (await get(ref(db, 'locked'))).val();
            let admin;
            
            if (res) {
                let d = await getDoc(doc(dbFirestore, 'users', res.uid));
                res.doc = d.data();
                
                qSelec(true, '.signup').forEach(each => each.style.display = 'none');
                if (res.uid == 'ud4lP1mhq4XvynG7qUlcsAxi0Q02') {
                    addEvLis(document, 'keydown', ({ ctrlKey, key }) => {
                        ctrlKey && key == '/' && location.pathname != '/admin' && !document.activeElement.matches('textarea, input') &&
                        go(router, 'admin', true);
                    }, false)
                    admin = true;
                }
                
                let { font, indent } = res.doc.personalization;
                body.classList.remove('cons');
                body.classList.add(font);
                body.indentSize = indent;
            }
            setUser(res);
            // if (!admin) {
            //     if (['manager', 'management-center', 'admin'].some(path => location.pathname == `/p/${path}.html`)) document.documentElement.innerHTML = '403 Forbidden';
            //     else if (locked) document.documentElement.innerHTML = 'Foricon is updating to the newer version. Please come back later.';
            // }
        })
    }, [])

    return <UserContext.Provider value={user}>{
        children
    }</UserContext.Provider>
}