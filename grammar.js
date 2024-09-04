/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: 'handlebars_html',
  rules: {
    source_file: $ => 'hello'
  }
})
