let obj =[{
    name:"abc", age:24
},
{
      name:"abcd", age:26
},
{
     name:"abcde", age:28
},
{
     name:"abcdef", age:45
}]
let max = obj[0];
let name ="";
for(let i=1; i<obj.length; i++){
    if(obj[i].age>max){
        max = obj[i].age;
        // max=obj[i].name;
    }
}
console.log(max.obj.name);