
Validator = require "Validator"
wrongType = require "wrongType"

Null = Validator "Null",

  test: (value) ->
    value is null

  assert: (value, key) ->
    return if value is null
    wrongType this, key

module.exports = Null
