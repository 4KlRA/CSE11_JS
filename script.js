console.log("Hello World!");
document.write("This is a test of document.write()");
// single line comment
/*Mutli line comment*/

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