// Generated by CoffeeScript 1.12.4
var Null, Validator, wrongType;

Validator = require("Validator");

wrongType = require("wrongType");

Null = Validator("Null", {
  test: function(value) {
    return value === null;
  },
  assert: function(value, key) {
    if (value === null) {
      return;
    }
    return wrongType(this, key);
  }
});

module.exports = Null;