// Q17. Remove all even numbers from [1,2,3,4,5,6,7,8,9,10] without using filter.

let array = [1,2,3,4,5,6,7,8,9,10];
let oddnumbers =[];
for(let i=0; i<array.length; i++){
    if(array[i] % 2 !== 0){
oddnumbers.push(array[i]);
}
}
console.log(oddnumbers);











