/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

/**
 * @param {RuleOrLiteral} body
 */
function barred(body) {
  return seq('{{', body, '}}')
}

/**
 * @param {RuleOrLiteral} tag
 * @param {RuleOrLiteral} body
 */
function fancy_barred(tag, body) {
  return barred(seq(tag, body))
}

module.exports = grammar({
  name: 'handlebars_html',
  rules: {
    source_file: $ => repeat1($._content),
    _content: $ => choice($.literal_text, $.handlebars, $.handleblock, $.macro, $.partial),
    literal_text: _$ => /[^{]+/,
    handlebars: $ => barred($.expression),
    expression: $ => choice($.identifier),
    identifier: _$ => /[a-zA-Z]+/,
    block_start: $ => fancy_barred('#', $.identifier),
    block_end: $ => fancy_barred('/', $.identifier),
    handleblock: $ => seq($.block_start, repeat($._content), $.block_end),
    macro_start: $ => fancy_barred('*', seq($.identifier, $.expression)),
    macro: $ => seq($.macro_start, repeat($._content), $.block_end),
    partial_start: $ => fancy_barred('>', $.expression),
    partial: $ => seq($.partial_start, repeat($._content), $.block_end),
  },
  // inline: $ => [$._content]
})
