function getAverage(num1, num2) {
    let total = num1 + num2;
    let average = total / 2;
    return average;
}

test("test with 2 numbers", () => {
    let expected = 3;
    let result = getAverage(1,5);
    expect(result).toBe(expected);
})

test("test with null numbers", () => {
    let expected = 0;
    let result = getAverage(0,0);
    expect(result).toBe(expected);
})