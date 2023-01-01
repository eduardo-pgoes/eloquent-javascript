let isEven = require('./recursion');

test('expect 2 to be even', () => {
    expect(isEven(2)).toBe(true);
});

test('expect 1 to be odd', () => {
    expect(isEven(1)).toBe(false);
})

test('expect larger even numbers to be even', () => {
    expect(isEven(1000)).toBe(true);
});

test('expect larger odd numbers to be odd', () => {
    expect(isEven(1001)).toBe(false);
});