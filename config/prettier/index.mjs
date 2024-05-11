/** @typedef {import('prettier').Config} PrettierConfig */

/** @typedef { PrettierConfig } */
const config = {
    plugins: ['prettier-plugin-tailwindcss'],
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComa: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'auto',
    bracketSameLine: false,
}

export default config