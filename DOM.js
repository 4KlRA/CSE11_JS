//Lec 6 10 03 2026 9:40
//Selecting with id
const result = document.getElementById("para");
result.innerHTML = "my self";
result.title = "Say My Name";
//document.write(result);

//Selecting with class name
const result1 = document.getElementsByClassName("p1");
result1[0].innerHTML = "Sanjeev Soni";
result1[1].innerHTML = "Satyarth Soni";

//Selecting with tag name
// Returns a node list of all the elements with the specified tag name
const result2 = document.getElementsByTagName("p");
result2[2].innerText = "Anup Soni";
result2[2].style.color = "red";

//Query Selector - returns the first element that matches a specified CSS selector(s) in the document
//It can be used to select elements using CSS selectors, such as ID, class, or tag name. It returns the first matching element in the document.
//Query Selector All - returns a static NodeList of all the elements that matches a specified CSS selector(s) in the document
const result3 = document.querySelector(".p1"); //n-th child case - .p1:nth-child(2) 
result3.innerHTML = "Anarth Soni";
result3.style.color = "blue";
result3.backgroundColor = "yellow";

const result4 = document.querySelectorAll(".p1");
result4[1].innerHTML = "paragraph 2";
result4[1].style.color = "blue";
result4[1].backgroundColor = "yellow";