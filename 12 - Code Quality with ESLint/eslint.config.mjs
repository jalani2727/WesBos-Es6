import { defineConfig } from "eslint/config";
import html from "eslint-plugin-html";
import markdown from "eslint-plugin-markdown";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{

    plugins: {
        html,
        markdown,
        unicorn: eslintPluginUnicorn
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },
    },
    extends: [eslintPluginUnicorn.configs.recommended, "airbnb", "airbnb/hooks"], // This "extends" property will hold your base rules. 
    rules: {
        // Unicorn Rules
        'unicorn/better-regex': 'warn',
        'unicorn/prefer-top-level-await':"off", // TODO: Remove this when you get to section 20
        
        //Standard Rules
        'no-var': 'warn'
    }
}]);