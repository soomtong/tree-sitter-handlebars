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
    _content: $ => choice($.literal_text, $._handlebars, $.handleblock, $.macro, $.partial),
    literal_text: _$ => /[^{]+/,
    _handlebars: $ => barred($._expression),
    _expression: $ => choice($.helper_call),
    identifier: _$ => /[a-zA-Z]+/,
    helper_call: $ => repeat1($.identifier),
    _block_start: $ => fancy_barred('#', field('block_helper', $._expression)),
    _block_end: $ => alias(fancy_barred('/', $.identifier), '/block'),
    handleblock: $ => seq($._block_start, repeat($._content), $._block_end),
    _macro_start: $ => fancy_barred('*', seq($.identifier, $._expression)),
    macro: $ => seq($._macro_start, repeat($._content), $._block_end),
    _partial_start: $ => fancy_barred('>', $._expression),
    partial: $ => seq($._partial_start, repeat($._content), $._block_end),
  },
  // inline: $ => [$._content]
})
