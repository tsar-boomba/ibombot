import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

define((require, exports, module) => {
	module.exports = {
		parser: '@typescript-eslint/parser',
		parserOptions: {
			ecmaVersion: 12, //latest version of ES
			tsconfigRootDir: __dirname,
			project: ['./tsconfig.json'],
		},
		extends: [
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended-requiring-type-checking',
			'plugin:@typescript-eslint/eslint-recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:prettier/recommended',
			'prettier',
		],
		plugins: ['@typescript-eslint', 'prettier'],
		rules: {
			quotes: 'off',
			'@typescript-eslint/quotes': [
				0,
				'single',
				{
					avoidEscape: true,
				},
			],
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			indent: 'off',
			'prettier/prettier': [
				'error',
				{
					semi: true,
					trailingComma: 'all',
					endOfLine: 'auto',
					printWidth: 100,
					tabWidth: 4,
					useTabs: true,
					bracketSpacing: true,
					singleQuote: true,
					jsxSingleQuote: true,
				},
			],
		},
	};
});
