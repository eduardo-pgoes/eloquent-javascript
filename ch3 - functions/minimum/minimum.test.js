let minimum = require('./minimum');

test('expect minimum to work with equal numbers', () => {
    expect(minimum(3, 3)).toBe(3);
});

test('expect minimum to work with both positive numbers', () => {
    expect(minimum(5, 4)).toBe(4);
});

test('expect minimum to work with both negative numbers', () => {
    expect(minimum(-22, -3)).toBe(-22);
});

test('expect minimum to work with a positive and a negative number', () => {
    expect(minimum(-3, 3)).toBe(-3);
});