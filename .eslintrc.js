module.exports = {
	extends: ['react-app', 'react-app/jest', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
}
