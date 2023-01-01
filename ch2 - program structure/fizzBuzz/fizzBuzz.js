/**
 * Function that prints the FizzBuzz solution to some given number. 
 * Also read: https://eloquentjavascript.net/02_program_structure.html#i_rebKE3gdjV
 * @param {*} n Number 
 * @returns String with FizzBuzz output for the number.
 */
const fizzBuzz = (n) => {
    let res = n;
    // Having spaces between "Fizz" and "Buzz" is not common, but it's what was asked of me in the job interview
    if (n % 3 === 0) {
        res += " Fizz";
    }

    if (n % 5 === 0) {
        res += " Buzz";
    }
    return res;
}

module.exports = fizzBuzz;