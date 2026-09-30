import ts from '@typed-sigterm/eslint-config';

export default ts({}, {
  files: ['**.md'],
  rules: {
    'markdown/no-multiple-h1': 'off',
  },
});
