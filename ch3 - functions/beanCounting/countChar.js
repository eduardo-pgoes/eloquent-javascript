const countChar = (str, char) => {
    let res = 0;
    for (let entry of str) {
        if (entry === char) res++;
    }
    return res;
}

module.exports = countChar;