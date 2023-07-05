function reverseString2(str) {
    return str.split('').reverse().join('');
}

test("test string is exist", () => {
    let expected = ""
    let result = reverseString2("");
    expect(result).toBe(expected);
}) 

test("test reversed string", () => {
    let expected = "cba"
    let result = reverseString2("abc");
    expect(result).toBe(expected);
})
