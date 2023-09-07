module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'simple-import-sort'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'@typescript-eslint/ban-ts-ignore': 'off',
		'simple-import-sort/exports': 1,
		'simple-import-sort/imports': [
			1,
			{
				groups: [
					// External packages.
					['^'],
					// Internal packages.
					['^@/'],
					// Side effect imports.
					['^\\u0000'],
					// Parent imports.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Other relative imports.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					// Style imports.
					['^.+\\.s?css$'],
				],
			},
		],
	},
};
