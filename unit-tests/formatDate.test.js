function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

test("test current date", () => {
    let expected = "2023-07-06";
    let result = formatDate(new Date());
    expect(result).toEqual(expected);
});

