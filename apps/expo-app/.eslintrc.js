module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/order': 'off',
    '@typescript-eslint/ban-types': 'off', // 뜨는 이유를 모르겠어서 일단 off
    'import/no-unresolved': 'off', // 경로 오류 임시방편
    'react/self-closing-comp': 'error', // 빈 컴포넌트는 자동으로 닫히도록 에러로 처리
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ], // 불필요한 중괄호 사용 금지
  },
};
