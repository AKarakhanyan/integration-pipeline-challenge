'use strict';

const isPrime = num => {
    const absNum = Math.abs(num);
    for(let i = 2; i < absNum; i++)
      if(absNum % i === 0) return false;
    return absNum > 1;
  }
  
const squareArea = sideLength => {
    const absSideLength = Math.abs(sideLength);
    return absSideLength*absSideLength 
}

const randomArray = length => {
    const absLength = Math.abs(length);
    return Array.from({length: absLength}, () => Math.floor(Math.random() * 100));
}

module.exports = {isPrime, squareArea, randomArray};