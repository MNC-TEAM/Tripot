// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo',
    'plugin:prettier/recommended',
    'universe/native',
    'universe/shared/typescript-analysis',
  ],
  rules: {
    'import/order': 'off', // import/order 규칙 비활성화
    'prettier/prettier': 'error',
    'react/self-closing-comp': 'error', // 빈 컴포넌트는 자동으로 닫히도록 에러로 처리
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ], // 불필요한 중괄호 사용 금지
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
