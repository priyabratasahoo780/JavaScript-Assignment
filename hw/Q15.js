// Q15. Check if all numbers in [2, 4, 6, 8] are even using every.

let array =[2, 4, 6, 8];
let every = array.every(array => array%2 === 0);
console.log(every);