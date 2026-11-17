'use client';

import { useContext } from 'react';
import { UserContext, useUpdateUser } from 'Com/user';

export default function useToggleSaveIcon() {
    let { user } = useContext(UserContext);
    let updateUser = useUpdateUser();

    return async name => {
        try {
            if (!user) return;
            let saved = [ ...user.doc.savedIcons ];
            let i = saved.indexOf(name);
            i + 1 ? saved.splice(i, 1) : saved.push(name);
            await updateUser({ savedIcons: saved });
        }
        catch (err) {
            console.error(err);
        }
    }
}