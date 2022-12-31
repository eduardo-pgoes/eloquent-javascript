const buildTriangle = (n) => {
    let str = "";
    for (let i = 1; i <= n; i++) {
        currentTriangle = Array(i).fill("#").join("");
        str += currentTriangle;
        if (i !== n) str += "\n";
    }
    return str;
};

console.log(buildTriangle(3));

module.exports = buildTriangle;