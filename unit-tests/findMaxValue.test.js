function findMaxValue(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

test("test max value with positive numbers", () => {
    let expected = 4;
    let result = findMaxValue([1,2,3,4]);
    expect(expected).toEqual(result);
})

test("test max value with negativ numbers", () => {
    let expected = -1;
    let result = findMaxValue([-1,-2,-3,-4]);
    expect(expected).toEqual(result);
})

test("test max value with zero and negativ numbers", () => {
  let expected = 0;
  let result = findMaxValue([0,-1,-2,-3]);
  expect(expected).toEqual(result);
})
