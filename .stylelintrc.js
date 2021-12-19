module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  rules: {
    'custom-property-empty-line-before': 'never',
    'value-keyword-case': [
      'lower',
      {
        ignoreFunctions: ["/^(f|F)oo$/", "t"]
      }
    ],
    'no-descending-specificity': null,
    'max-nesting-depth': [
      3,
      {
        message: 'Nesting > 3 level',
        ignore: ['blockless-at-rules'],
        severity: 'warning'
      }
    ],
    'string-quotes': [
      'single',
      {
        message: 'Use single quotes'
      }
    ],
    'order/order': [
      'custom-properties',
      'declarations',
      {
        type: 'at-rule',
        name: 'media'
      },
      {
        type: 'rule',
        selector: '^&::(before|after)'
      }
    ]
  }
}
