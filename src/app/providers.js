import { LanguageProvider } from 'Com/language';
import { ThemeProvider } from 'Com/theme';
import { UserProvider } from 'Com/user';
import { IconProvider } from 'Com/icons';

export default function Providers({ children }) {
    return <IconProvider>
        <UserProvider>
            <LanguageProvider>
                <ThemeProvider>{children}</ThemeProvider>
            </LanguageProvider>
        </UserProvider>
    </IconProvider>
}