function doesStringStartWith(str, char) {
    if (str.charAt(0) === char) {
      return true;
    } else {
      return false;
    }
}

test("test for the first letter of the string", () => {
  let expected = true;
  let result = doesStringStartWith("John","J");
  expect(result).toBe(expected);
});

test("test the first letter of the string with a different type", () => {
  let expected = false;
  let result = doesStringStartWith("John","j");
  expect(result).toBe(expected);
});

test("test the first letter of the string with a different letter", () => {
  let expected = false;
  let result = doesStringStartWith("John","K");
  expect(result).toBe(expected);
});