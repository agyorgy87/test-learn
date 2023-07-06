function truncateString(str, limit) {
    if (str.length <= limit) {
      return str;
    }
    return str.slice(0, limit) + '...';
}

test("test with more letters than limit", () => {
    let expected = "hel...";
    let result = truncateString("hello", 3);
    expect(result).toEqual(expected);
})

test("test with more limit than letters", () => {
    let expected = "hello";
    let result = truncateString("hello", 6);
    expect(result).toEqual(expected);
})

test("test with zero limit", () => {
    let expected = "...";
    let result = truncateString("hello", 0);
    expect(result).toEqual(expected);
})

test("test with negativ number limit", () => {
    let expected = "hel...";
    let result = truncateString("hello", -2);
    expect(result).toEqual(expected);
})

test("test empty string", () => {
    let expected = "";
    let result = truncateString("", 3);
    expect(result).toEqual(expected);
})

