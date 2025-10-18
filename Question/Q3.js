var income =250000;
var tax;
if(income<=250000){
    console.log("No Tax");
}
else if(income<=500000){
   tax = income*5/100;
   console.log(tax);
}
else if(income<=1000000){
   tax = income*20/100;
   console.log(tax);
}
else if(income>1000000){
   tax = income*30/100;
   console.log(tax);
}