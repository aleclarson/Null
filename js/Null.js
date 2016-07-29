var Validator, wrongType;

Validator = require("Validator");

wrongType = require("wrongType");

module.exports = Validator("Null", {
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

//# sourceMappingURL=map/Null.map
