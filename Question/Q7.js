var english = 89;
var physics = 95;
var chemistry = 92;
var computer = 95;
var sum = 0;
var income = 250000;
sum = sum + maths + english + physics + chemistry + computer;
console.log(sum);
var p=sum/5;
console.log(p);
if(p>=85 && income<=300000){
    console.log("Full Scholarship");
}
else if(p>=70 && income<=500000){
    console.log("Half Scholarship");
}
else{
    console.log("Not eligible for scholarship");
}