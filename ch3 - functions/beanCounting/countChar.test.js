let countChar = require('./countChar');

test('expect countChar() to work with alphanumeric chars', () => {
    expect(countChar("kakkerlak", "k")).toBe(4);
})