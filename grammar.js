/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: 'handlebars_html',
  rules: {
    source_file: $ => repeat1($._content),
    _content: $ => choice($.literal_text, $.handlebars, $.handleblock, $.macro, $.partial),
    literal_text: $ => /[^{]+/,
    handlebars: $ => seq('{{', $.expression,'}}'),
    expression: $ => choice($.identifier),
    identifier: $ => /[a-zA-Z]+/,
    block_start: $ => seq('{{', '#', $.identifier, '}}'),
    block_end: $ => seq('{{', '/', $.identifier, '}}'),
    handleblock: $ => seq($.block_start, repeat($._content), $.block_end),
    macro_start: $ => seq('{{', '*', 'inline', $.expression, '}}'),
    macro: $ => seq($.macro_start, repeat($._content), $.block_end),
    partial_start: $ => seq('{{', '>', $.expression, '}}'),
    partial: $ => seq($.partial_start, repeat($._content), $.block_end),
  },
  // inline: $ => [$._content]
})
