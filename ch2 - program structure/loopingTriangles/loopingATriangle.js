/**
 * Function that builds a triangle of given size. Read: https://eloquentjavascript.net/02_program_structure.html#p_8imTrZ34w1
 * @param {*} n Number
 * @returns String with a triangle of size n
 */
const buildTriangle = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        currentTriangle = Array(i).fill("#").join("");
        str += currentTriangle;
        if (i !== n) str += "\n"; // don't add newlines if this is the last chessboard line 
    }
    return str;
};

console.log(buildTriangle(3));

module.exports = buildTriangle;