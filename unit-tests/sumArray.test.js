function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

test("test with positive numbers", () => {
    let expected = 6;
    let result = sumArray([1,2,3]);
    expect(expected).toEqual(result);
});

test("test with negativ numbers", () => {
    let expected = -6;
    let result = sumArray([-1,-2,-3]);
    expect(expected).toEqual(result);
});

test("test with negativ and positiv numbers", () => {
    let expected = 5;
    let result = sumArray([-1,-2,3,5]);
    expect(expected).toEqual(result);
});

test("test with negativ and positiv numbers", () => {
    let expected = 0;
    let result = sumArray([]);
    expect(result).toEqual(expected);
});

