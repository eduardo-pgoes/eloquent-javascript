// https://eloquentjavascript.net/03_functions.html#i_jxl1p970Fy
const isEven = (n) => {
    if (n === 0) return true;
    if (n === 1) return false;
    return isEven(n-2);
}

module.exports = isEven;