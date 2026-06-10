import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
    ...nextVitals,
    {
        rules: {
            // Turn off the rule that complains about setState in useEffect
            "react/no-direct-setstate-in-useeffect": "off",
            // If it's actually coming from react-hooks plugin:
            "react-hooks/exhaustive-deps": "off",
            'react/no-unescaped-entities': 'off',
            '@next/next/no-page-custom-font': 'off',
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;
