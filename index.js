module.exports = {
  plugins: [
    "immutable",
    "toplevel",
    "prefer-arrow",
    "import"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  extends: "eslint:recommended",
  rules: {
    //error for behavior changing problems
    //warn for style-preferring or performance problems
    "no-var": "error",
    "prefer-const": "warn",
    "no-new-object": "warn",
    "no-array-constructor": "warn",
    "no-new-wrappers" : "error",
    "no-useless-concat" : "warn",
    "no-eval" : "error",
    "no-new-func" : "error",
    "no-useless-escape" : "warn",
    "no-loop-func" : "error",
    "prefer-rest-params" : "error",
    "prefer-spread" : "warn",
    
    "no-param-reassign" : "warn",
    "eqeqeq" : "error",
    "no-unneeded-ternary" : "warn",

    "immutable/no-this" : "error",
    "immutable/no-mutation" : "error",

    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        "disallowPrototype": true,
        "singleReturnOnly": false,
        "classPropertiesAllowed": false
      }
    ],

    "import/no-mutable-exports" : "error",
    "import/default" : "error",
    "import/named" : "error",
    "import/namespace" : "error",
    "import/no-absolute-path" : "warn",
    "import/no-cycle" : "error",
    "import/export" : "error",

    "toplevel/no-toplevel-let" : "error",
    "toplevel/no-toplevel-side-effect" : "error",
  }
}
