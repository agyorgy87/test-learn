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
    expect(expected).toBe(result);
})

test("test negativ number", () => {
    let expected = false;
    let result = isPositive(-1);
    expect(expected).toBe(result);
})

test("test zero number", () => {
    let expected = true;
    let result = isPositive(0);
    expect(expected).toBe(result);
})

test("test max number", () => {
    let expected = true;
    let result = isPositive(Number.MAX_SAFE_INTEGER);
    expect(expected).toBe(result);
})

test("test min number", () => {
    let expected = false;
    let result = isPositive(Number.MIN_SAFE_INTEGER);
    expect(expected).toBe(result);
})