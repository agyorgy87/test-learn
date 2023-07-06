function removeDuplicates(arr) {
    return [...new Set(arr)];
}

test("test with duplicate numbers", () => {
    let expected = [1,2,3,4];
    let result = removeDuplicates([1,2,1,3,4]);
    expect(result).toEqual(expected);
});

test("test with empty array", () => {
    let expected = [];
    let result = removeDuplicates([]);
    expect(result).toEqual(expected);
});

test("test with only duplicate numbers", () => {
    let expected = [1];
    let result = removeDuplicates([1,1,1,1]);
    expect(result).toEqual(expected);
});

test("test with only duplicate zero numbers", () => {
    let expected = [0];
    let result = removeDuplicates([0,0,0,0]);
    expect(result).toEqual(expected);
});

