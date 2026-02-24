//Lec 1 20 02 2026
console.log("Hello World!");
document.write("This is a test of document.write()");
// single line comment
/*Mutli line comment*/

//Lec 2 24 02 2026 8:40
var num = 10;
console.log(num);
console.log(typeof(num));
num = false;
console.log(num);
console.log(typeof(num));
num = "Sanjeev Sooni";
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));
num = undefined;
console.log(num);
console.log(typeof(num));

//function
var sayHello = function(){ // camelCase
    alert("Hello World!");
}
sayHello();
//array
var numbersArray = [1,2,3,4,5];
var animals = new Array("Dog", "Cat", "Elephant");
console.log(numbersArray);
console.log(animals);
console.log(typeof(numbersArray));
console.log(typeof(animals));
//object
var person = {
    name: "Barack Obama",
    age: 60,
    title: "Former President"
}
console.log(person);
console.log(typeof(person));

//Lec 3 24 02 2026 9:40
const sync1 = Symbol(4);
const sync2 = Symbol(4);
console.log(sync1);
console.log(sync2);
if (sync1 === sync2) {
    console.log("True");
} else {
    console.log("False");
}

var count;
document.write{"Starting Loop"+"<br>"};
for(count = 0, count<10, count++) {
    document.write("Current Count:", count);
    document.write("<br>");
}
document.write("Loop Stopped!");