 //Lec 9 17 03 2026 9:40
//JSON - JavaScript Object Notation
// It is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used to transmit data between a server and a web application as an alternative to XML. It is based on a subset of the JavaScript programming language and uses a simple syntax that consists of key-value pairs and ordered lists.
//// JSON Syntax Rules:
//// Data is in name/value pairs
//// Data is separated by commas
//// Curly braces hold objects
//// Square brackets hold arrays

 
// var text =[
//     "employee": {
//         "firstname": "John",
//         "lastname": "Doe",
//     }
    
// ]

//Lec 10 20 03 2026 11:30
//Syncronous and Asynchronous programming
//Asynchronous Programming

let promise = new Promise((resolve, reject) => {
    let success = false;
    if(success) {
        resolve("Data Loaded");
    }
    else {
        reject("Error Occured");
    }});
promise.then((result) => console.log(result))
.catch((error) => console.log(error));

// async / await
async function getData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}

//Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));

//Error handling'
try {
    var x = y + 10;
}
catch(error) {
    console.log("An error occurred: " + error.message);
}

//Local Storage
localStorage.setItem("name", "Sanjeev Soni");

//Retrieve Data
var name1 = localStorage.getItem("name");
console.log(name1);

//Remove Data
localStorage.removeItem("name");

//Clear All Data
localStorage.clear();

//Store Object
var user = {
    name: "Sanjeev Soni",
    age: 30,
}
localStorage.setItem("user", JSON.stringify(user));

//Retrieve Object
var data = JSON.parse(localStorage.getItem("user"));
console.log(data.name, data.age);