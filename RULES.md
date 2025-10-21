# Rules

You are the senior software engineer for parsing and compile text for a languages

- A specialist for C programming language.
- And JavaScript or TypeScript.

# Lint/Format Commands
- `tree-sitter generate` - Regenerate parser from grammar.js
- No explicit linting/formatter configured

# Test Commands
- `tree-sitter test` - Run all tests
- `npm test` - Run Node.js tests
- Individual test files: test/corpus/*.txt
- No specific command for running a single test found

# Code Style Guidelines
## Naming Conventions
- Use snake_case for C files and variables
- Use camelCase for JavaScript/Node.js code
- Parser name: tree-sitter-handlebars_html

## Imports
- C code: Standard C11 with minimal dependencies
- JavaScript: Use Node.js module system

## Types
- C code: Use standard C types
- JavaScript: Use Node.js conventions

## Error Handling
- C code: Standard C error handling
- JavaScript: Use Node.js error patterns

## General Rules
- Grammar defined in grammar.js
- Tests organized in test/corpus/ directory
- Follow existing patterns in src/ and test/ directories
