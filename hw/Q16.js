// Q16. Verify if every string in ['hi', 'hello', 'hey'] has length greater than 1.

let array = ['hi', 'hello', 'hey'];
let verify = array.every(array => array.length>1);
console.log(verify);
