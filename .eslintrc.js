module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    //   'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    'indent': ['warn', 2],
    'vue/component-tags-order': ['warn', {
      'order': ['template', 'script', 'style']
    }],
    'vue/max-attributes-per-line': 'warn',
    'vue/no-unused-vars': ['warn', {
      'ignorePattern': '^_'
    }],
    'vue/no-unused-components': ['warn', {
      'ignoreWhenBindingPresent': true
    }],
    'vue/script-indent': ['warn', 2, { 
      'baseIndent': 1,
    }],
    'vue/html-indent': ['warn', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 2,
      'multiline': {
        'max': 2,
      }
    }],
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': 'babel-eslint',
    'sourceType': 'module'
  }
}