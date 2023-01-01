// Having spaces between "Fizz" and "Buzz" is not common, but it's what was asked of me in the job interview
const fizzBuzz = (n) => {
    let res = n;
    if (n % 3 === 0) {
        res += " Fizz";
    }

    if (n % 5 === 0) {
        res += " Buzz";
    }
    return res;
}

module.exports = fizzBuzz;