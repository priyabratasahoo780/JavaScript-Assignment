var maths = 90;
var english = 89;
var physics = 95;
var chemistry = 92;
var computer = 95;
var sum = 0;
sum = sum + maths + english + physics + chemistry + computer;
console.log(sum);
var p=sum/5;
console.log(p);
if(p>=90){
    console.log("GradeA");
}
else if(p>=80){
    console.log("GradeB");
}
else if(p>=70){
    console.log("GradeC");
}
else if(p>=60){
    console.log("GradeD");
}
else{
    console.log("Fail");
}