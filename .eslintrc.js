module.exports = {
  extends: "standard",
  parserOptions: {
    ecmaVersion: 5
  },
  rules: {
    "no-console": ["warn"],
    "no-debugger": ["error"],
    semi: [2, "always"],
    camelcase: [2, { properties: "never" }]
  }
};
