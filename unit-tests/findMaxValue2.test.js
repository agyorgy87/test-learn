function findMaxValue2(arr) {
    return Math.max(...arr);
}

test("test max value with positive numbers", () => {
    let expected = 4;
    let result = findMaxValue2([1,2,3,4]);
    expect(result).toEqual(expected);
})

test("test max value with negativ numbers", () => {
    let expected = -1;
    let result = findMaxValue2([-1,-2,-3,-4]);
    expect(result).toEqual(expected);
})

test("test max value with zero and negativ numbers", () => {
    let expected = 0;
    let result = findMaxValue2([0,-1,-2,-3]);
    expect(result).toEqual(expected);
})

test("test with empty array", () => {
    let expected = -Infinity;
    let result = findMaxValue2([]);
    expect(result).toBe(expected);
})