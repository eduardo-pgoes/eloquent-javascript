/**
 * Function that generates a chessboard string. See: https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 * @param {*} size 
 * @returns String that represents a chessboard.
 */
const chessboard = (size) => {
    let res = ""; // final result
    for (let i = 0; i < size; i++) {
        let lineStr = "";
        // Defines if the line starts with a space or not
        let flag = i % 2;
        for (let j = 0; j < size; j++) {
            if (j % 2 === 0) {
                /*
                    TO-DO: Find a way to change line behaviour (start with # or spaces) respecting the DRY principle
                */
                if (!flag) {
                    lineStr += " ";
                } else { 
                    lineStr += "#";
                }
            } else {
                if (flag) {
                    lineStr += " ";
                } else { 
                    lineStr += "#";
                }
            }
        }
        res += lineStr;
        if (i === size-1) break; // don't add newlines if this is the last chessboard line 
        res += "\n";
    }
    return res;
}

console.log(chessboard(8));

module.exports = chessboard;