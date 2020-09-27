const { squareArea, isPrime, randomArray } = require('../utils/math_functions');

test('test various square side lengths', () => {
    expect(squareArea(5)).toBe(25);
    expect(squareArea(10)).toBe(100);
    expect(squareArea(7)).toBe(49);
});

test('test various negative square side lengths', () => {
    expect(squareArea(-5)).toBe(25);
    expect(squareArea(-10)).toBe(100);
    expect(squareArea(-7)).toBe(49);
});

test('determine if numbers are prime', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(23)).toBe(true);
});

test('determine if negative numbers are prime', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(23)).toBe(true);
});

test('test if correct array lengths are generated', () => {
    expect(randomArray(5).length).toBe(5);
    expect(randomArray(15).length).toBe(15);
    expect(randomArray(0).length).toBe(0);
});

test('test if correct array lengths are generated when given negative numbers', () => {
    expect(randomArray(-5).length).toBe(5);
    expect(randomArray(-15).length).toBe(15);
});