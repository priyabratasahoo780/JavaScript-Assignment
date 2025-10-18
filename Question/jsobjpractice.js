// let a = {a:4, b:7, l:9}
// let b={g:9, u:0}
// let obj = Object.create(a);
// console.log(obj.a)
// obj.y=10;
// obj.d=134;
// console.log(obj)




// let a = {a:4, b:7, l:9}
// let b={g:9, u:0}
// let obj = Object.assign(b,a);
// console.log(obj);

// let a = {a:4, b:7, l:9}
// let b={g:9, u:0}
// Object.defineProperty(b,
//     "abc",{value:90}
//     // abcde:{value:100}
// );
// console.log(b.abc);



// let a = {a:4, b:7, l:9}
// let b={g:9, u:0}
// console.log(Object.entries(a));

// let a = {a:4, b:7, l:9};
// Object.freeze(a);
// a.h=3;
// a.l=34;
// console.log(a);

// let a = {a:4, b:7, l:9}
//  let b={g:9, u:0}
//  let o =Object.entries(a);
//  console.log(Object.fromEntries(o));


// let a = {a:4, b:7, l:9};
// Object.seal(a);
// a.a=3;
// a.l=34;
// console.log(a);



// let a = {a:4, b:7, l:9};
// // Object.seal(a);
// a.k=379;
// a.l=34;
// console.log(Object.isSealed(a));




// let a = {a:4, b:7, l:9};
// Object.freeze(a);
// a.h=3;
// a.l=34;
// console.log(Object.isFrozen(a));



// let a = {a:4, b:7, l:9};
// Object.freeze(a);
// a.h=3;
// a.l=34;
// console.log(Object.keys(a));



// let a = {a:4, b:7, l:9};
// a.h=3;
// a.l=34;
// console.log(Object.values(a));


//  let a = {a:4, b:7, l:9};

// // a.l=34;
// console.log(Object.isExtensible(a));


// let text ="fefrvrvvvvvbtbtrbrtr";
// let length = text.length;
// console.log(length);


// let text = "Hello World";
// console.log(text.charAt(0));


// let text = "Hello World";
// console.log(text.charCodeAt(0));


// let text = "Hello World";
// console.log(text.codePointAt(0));

// let text = "Hello World";
// console.log(text[0]);

// let a ="hello";
// let b ="world!";
// console.log(a.concat(" ",b));


// let a ="Applebananachiku";
// console.log(a.slice(5,-5));


// let a ="Applebananachiku";
// console.log(a.toUpperCase());


// let a ="Applebananachiku";
// console.log(a.toLowerCase());


// let a ="Applebananachiku \uD800";
//  console.log(a.toWellFormed());


// let a ="Applebananachiku \U+2600";
//  console.log(a.toWellFormed());

//  var str2 ="\uD83D\uDE0A"
// console.log(str2.toWellFormed());


// var str2 ="\uD83D\uDE0A"
// let result = str2.toWellFormed();
// console.log(str2.isWellFormed());


// let a ="  Hello World  ";
// console.log(a.trimEnd());


// let a ="  Hello World  ";
// console.log(a.trimStart());

// let a ="HelloWorldHelloWorld";
// console.log(a.padStart(20,"7"));


// let a ="HelloWorldHelloWorld";
// console.log(a.padEnd(25,"0"));


// let a ="Priyabrata ";
// console.log(a.repeat(10));


// let a ="Priylbrltl ";
// console.log(a.replaceAll("l","a"));


// let a ="1j 2j 3j 4j 5j 6j";
// console.log(a.split(" "));
// console.log(a.split("j"));
// console.log(a.replaceAll("j"," "));



// let arr =["apple, banana, Mango"];
// console.log(arr.at());



// let arr =["apple", "banana", "Mango"];
//  console.log(arr.join("hii "));


// let arr =["apple", "banana", "Mango"];
// let str = arr.pop();
//  console.log(arr);


// let arr =["apple", "banana", "Mango"];
// let str = arr.push(5);
//  console.log(arr);


// let arr =["apple", "banana", "Mango"];
// let str = arr.shift();
//  console.log(arr);


// let arr =["apple", "banana", "Mango"];
// let str = arr.unshift(5);
//  console.log(arr);


// let arr =["apple", "banana", "Mango"];
// let str = ["a", "b", "c"];
//  console.log(arr.concat(" ",str));


// let arr =["apple", "banana", "Mango"];
// let str = ["a", "b", "c"];
//  console.log(arr.copyWithin(0,2));


// let arr =["apple", [ "banana","Chiku" , "orange"], "Mango"];
// let str = ["a", "b", "c"];
// console.log(arr.flat());

// let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let num = arr.flatMap(i =>[i,i*4]);
// console.log(num);


let a =['a', 'b', 'c', 'd', "j", "u", "o"];
console.log(a.splice(2,3,"y"));
console.log(a);



// let b =['a', 'b', 'c', 'd', "j", "u", "o"];
// console.log(b.slice(0,7));