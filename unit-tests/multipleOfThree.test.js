function isMultipleOfThree(num) {
    if (num % 3 === 0) {
      return true;
    } else {
      return false;
    }
}

test("test with numbers divisible by 3", () => {
    let expected = true;
    let result = isMultipleOfThree(3);
    expect(expected).toBe(result);
})

test("test with numbers not divisible by 3", () => {
    let expected = false;
    let result = isMultipleOfThree(5);
    expect(expected).toBe(result);
})

test("test with 0", () => {
    let expected = true;
    let result = isMultipleOfThree(0);
    expect(expected).toBe(result);
})

test("test with negativ numbers not divisible by 3", () => {
    let expected = true;
    let result = isMultipleOfThree(-3);
    expect(expected).toBe(result);
})
