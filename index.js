module.exports = {
  env: {
    node: true,
    es6: true
  },
  rules: {
    quotes: [2, 'single'],
    semi: 2,
    'object-curly-newline': 0,
    'no-bitwise': 0,
    'arrow-body-style': [2, 'as-needed'],
    'comma-dangle': [2, 'never'],
    'consistent-return': 1,
    'max-len': [1, 150, 2],
    'newline-per-chained-call': 0,
    'no-console': 1,
    'no-mixed-operators': [2, {
      groups: [['&', '|', '^', '~', '<<', '>>', '>>>'], ['&&', '||']],
      allowSamePrecedence: true
    }],
    'no-param-reassign': 2,
    'no-underscore-dangle': [2, { allowAfterThis: true, allowAfterSuper: false }],
    'object-curly-spacing': 2
  },
  extends: 'airbnb-base'
};
