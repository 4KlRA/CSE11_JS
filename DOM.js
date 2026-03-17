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

for(x in result4) {
    result4[x].innerHTML = "Updated paragraph";
    console.log(result4[x]);
}

//tagName - returns tag for element node
//textContent - returns textual content of element even for hidden elements
//innerText - returns the text content of the element and its descendants, but only for visible elements
//innerHTML - returns HTML content of an element as a string

//Lec 8 17 03 2026 8:50
// Element.getAttribute("attributeName") - returns the value of the specified attribute on the element
// Element.setAttribute("attributeName", "value") - sets the value of the specified attribute on the element
// Element.removeAttribute("attributeName") - removes the specified attribute from the element
// Element.hasAttribute("attributeName") - returns true if the element has the specified attribute, otherwise false

function updateParagraphs() {
    document.getElementById("demo").setAttribute("Class", "DemoClass");
    alert(document.getElementById("demo").getAttribute("Class"));
}

//HTML DOM Methods
// 1. HTML DOM Append method
// create an element
const heading = document.createElement("h2");
// get the parent element
const bodytag = document.getElementsByTagName("body");
//add element at the position using append method
bodytag[0].append(heading);
heading.innerText = "This is heading 2"; heading.style.color = "green";

//node.prepemd()
//node.before()
//node.after()

//`2. HTML DOM Remove method
//node.remove()
//close

// Events in JavaScript - The change in state of an object is called an event. It is a specific action that occus within a web page, such as a user clicking a button, hovering over an element, or submitting a form. Events are used to trigger specific actions or behaviors in response to user interactions or other occurrences on a web page. JavaScript provides various event types and event handling mechanisms to allow developers to create interactive and dynamic web applications.
//Mouse Events - onclick, onmouseover, onmouseout, onmousedown, onmouseup, onmousemove

function onClick() {
    alert("Button Clicked");
}
function onMouseOver() {
    alert("Mouse Over");
}
function onMouseOut() {
    alert("Mouse Out");
}
function onMouseDown() {
    alert("Mouse Down");
}
function onMouseUp() {
    alert("Mouse Up");
}
function onMouseMove() {
    alert("Mouse Move");
}