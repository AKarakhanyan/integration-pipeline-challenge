const { squareArea, isPrime, randomArray } = require('../utils/math_functions');

test('test various square side lengths', () => {
    expect(squareArea(5)).toBe(25);
    expect(squareArea(-5)).toBe(25);
});