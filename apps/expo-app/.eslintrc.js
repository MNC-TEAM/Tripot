// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo',
    'prettier',
    'universe/native',
    'universe/shared/typescript-analysis',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/order': 'off', // import/order 규칙 비활성화
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
