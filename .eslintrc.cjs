module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'project': true,
		'tsconfigRootDir': __dirname,
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'ignorePatterns': ['/build/', '/dist/', '.eslintrc*', '*config.*', '*.js'],
	'plugins': [
		'react',
		'@typescript-eslint',
	],
	'rules': {
		'react/display-name': 0,
		'react/prop-types': 0,
		'@typescript-eslint/no-empty-function': 0,
		'react/react-in-jsx-scope': 0,
		'indent': [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	},
};
