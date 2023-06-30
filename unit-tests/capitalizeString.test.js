function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

test("test", () => {
    let expected = "Abc";
    let result = capitalizeString("abc");
    expect(expected).toEqual(result);
});

test("test empty string", () => {
    let expected = "";
    let result = capitalizeString("");
    expect(expected).toEqual(result);
});

test("test test first letter with uppercase", () => {
    let expected = "Abc";
    let result = capitalizeString("Abc");
    expect(expected).toEqual(result);
});

