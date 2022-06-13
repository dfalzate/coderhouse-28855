const suma = require("./suma.js");

test("Test función suma", () => {
  expect(suma(3, 5)).toBe(8);
});
