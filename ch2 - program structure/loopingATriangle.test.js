const buildTriangle = require('./loopingATriangle');


test('expect 3 stair triangle to be correct', () => {
    let threeStairTriangle = "#\n##\n###";
    expect(buildTriangle(3)).toBe(threeStairTriangle);
});