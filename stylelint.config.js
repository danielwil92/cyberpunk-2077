module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-a11y',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order',
    'stylelint-scss',
    'stylelint-z-index-value-constraint'
  ],
  rules: {
    'a11y/no-outline-none': null,
    'a11y/selector-pseudo-class-focus': true,
    'at-rule-no-unknown': null,
    'color-named': 'never',
    'color-no-hex': true,
    'font-weight-notation': 'numeric',
    'length-zero-no-unit': [true, {
      'ignore': ['custom-properties']
    }],
    'max-nesting-depth': 5,
    'no-descending-specificity': null,
    'number-leading-zero': 'never',
    'order/properties-alphabetical-order': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/z-index-value-constraint': {
      'min': 0,
      'max': 60
    },
    'selector-type-no-unknown': [true, {
      'ignore': ['custom-elements']
    }],
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'string-quotes': 'single'
  }
};
