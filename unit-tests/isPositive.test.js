function isPositive(num) {
    if (num >= 0) {
      return true;
    } else {
      return false;
    }
}

test("test positive number", () => {
    let expected = true;
    let result = isPositive(1);
    expect(result).toBe(expected);
})

test("test negativ number", () => {
    let expected = false;
    let result = isPositive(-1);
    expect(result).toBe(expected);
})

test("test zero number", () => {
    let expected = true;
    let result = isPositive(0);
    expect(result).toBe(expected);
})

test("test max number", () => {
    let expected = true;
    let result = isPositive(Number.MAX_SAFE_INTEGER);
    expect(result).toBe(expected);
})

test("test min number", () => {
    let expected = false;
    let result = isPositive(Number.MIN_SAFE_INTEGER);
    expect(result).toBe(expected);
})