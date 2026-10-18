import { LanguageProvider } from 'Com/language';
import { ThemeProvider } from 'Com/theme';
import { UserProvider } from 'Com/user';
import { IconProvider } from 'Com/icons';
import { MediaProvider } from 'Com/f-media';

export default function Providers({ children }) {
    return <IconProvider>
        <UserProvider>
            <LanguageProvider>
                <MediaProvider>
                    <ThemeProvider>{children}</ThemeProvider>
                </MediaProvider>
            </LanguageProvider>
        </UserProvider>
    </IconProvider>
}