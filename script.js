//Lec 1 20 02 2026
console.log("Hello World!");
document.write("This is a test of document.write()"+"<br>");
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
document.write("Starting Loop"+"<br>");
for (count = 0; count<10; count++) {
    document.write("Current Count:", count);
    document.write("<br>");
}
document.write("Loop Stopped!"+"<br>");

//Lec 4 27 02 2026
var count = 0;
document.write("Starting Loop"+"<br>");
while (count < 10) {
    document.write("Current Count: " + count + "<br>");
    count++;
}
document.write("Loop Stopped!"+"<br>");

let age = 20;
if (age > 18) {
    document.write("You are an adult!"+"<br>");
} else {    
    document.write("You are a minor!"+"<br>");
}

var grade = 'A';
document.write("Entering Switch Statement"+"<br>");
switch (grade) {
    case 'A':
        document.write("Excellent!"+"<br>");
        break;
    case 'B':
        document.write("Good!"+"<br>");
        break;
    case 'C':
        document.write("Average!"+"<br>");
        break;
    case 'D':
        document.write("Below Average!"+"<br>");
        break;
    case 'F':
        document.write("Failed!"+"<br>");
        break;
    default:
        document.write("Invalid Grade!"+"<br>");
}
//without parameter function
function  myFunction() {
    alert("Hello World!");
}
//with parameter function
function SayHello(name,age) {
    document.write(name + " is " + age + " years old!"+"<br>");
}

//Lec 5 10 03 2026 8:50
// arrow function
// It is an anonymous function and change thw way this binding works
const add = (a,b) => {
    return a + b;
}
add(10, 20);

//object
var person = {
    name: "John Mac",
    age: 30,
    isMarried: false,
    address: [
        Street = "Vinay Nagar",
        flatNO = 201
    ]
}
console.log(person);

var person2 = new Object();
person2.name = "krishnkant";
person2.age = 32;
person2.isMarried = true;
person2.address = {}
persom2[address][Street] = "Vinay Nagar",
person2.address.flatNO = 201;

//ARRAY
//Array is an ordered collection of data either primitive or objects
var myInfo = new Array();
var myInfo1 = Array();
console.log(myInfo, myInfo1);

let collection = {
    {},
    [],
    true,
    "john",
    10,
    function(){},
    undefined,
    null,
    new stringify("abc"),
    new Date(),
}
console.log(collection);
collection.teacherName = "Sanjeev Sooni";
collection.phoneNO = 1234567890;
console.log(collection);

