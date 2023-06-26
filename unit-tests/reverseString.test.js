function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str.charAt(i);
    }
    return reversed;
}

//teszt reverseString, üres string paraméterrel és üres string végeredményt várok
test("test string is exist", () => {
    let expected = ""
    let result = reverseString("");
    expect(result).toBe(expected);
}) 

test("test reversed string", () => {
    let expected = "anan"
    let result = reverseString("nana");
    expect(result).toBe(expected);
})

