const fizzBuzz = require('./fizzBuzz');

test("expect fizzbuzz to work for numbers divisible by 3, but not 5", () => {
    expect(fizzBuzz(3)).toBe("3 Fizz");
});

test("expect fizzbuzz to work for numbers divisible by 5, but not 3", () => {
    expect(fizzBuzz(5)).toBe("5 Buzz");
});

test("expect fizzbuzz to work for numbers divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("15 Fizz Buzz");
});