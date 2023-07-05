function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

test("test string equal to reversed", () => {
    let expected = false;
    let result = isPalindrome("hello");
    expect(result).toBe(expected);
});

test("test with empty string", () => {
    let expected = true;
    let result = isPalindrome("");
    expect(result).toBe(expected);
});

test("test string equal to reversed, if we can read it from both directions ", () => {
    let expected = true;
    let result = isPalindrome("tacocat");
    expect(result).toBe(expected);
});


