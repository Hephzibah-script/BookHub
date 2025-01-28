const books = document.querySelectorAll("#bookList li .name");
// console.log(books);

//Array method using forEach to circle the collection of books variable
Array.from(books).forEach((book) => {
  console.log(book.textContent);
});

//Changing text and HTML content
//Updating Text content to the console and change it too
// Array.from(books).forEach((book) => {
//   // console.log(book.textContent);
//   //To change it
//   book.textContent += " (Book title)"; //This Appends to the original content
//   // book.textContent = console.log("Hey!");
// });

//Updating HTML to the console and changing it
// const bookList = document.querySelector("#bookList");
// console.log(bookList.innerHTML);
// bookList.innerHTML += "<p>Book titles</p>"; //This Appends to the original content

//Understanding Nodes. Every element that make up the DOM are also nodes. DOM Traversal (PARENT/CHILD,SIBLINGS)
const pageBanner = document.querySelector("#page-banner");
//nodeType show us the type of node we are looking at in the number form
console.log("Page banner node type is:", pageBanner.nodeType);
//nodeName shows us the name of the node we are looking at
// You could change the output on the console to a lowerCase by using toLocaleLowerCase method
console.log(
  "Page banner node name is:",
  pageBanner.nodeName.toLocaleLowerCase()
);
//hasChildNodes will simply return a boolean
console.log("Page banner has child nodes:", pageBanner.hasChildNodes());
//We could also clone a node and the nodes within it as well
const cloneBanner = pageBanner.cloneNode(true);
//Not adding true to cloneNode(true) will only clone just the node but not the nested node within it
//Adding true to cloneNode(true) will clone the node and the other nodes within it
// console.log(cloneBanner);

//DOM Traversal (PARENT/CHILD)
const bookList = document.querySelector("#bookList");
// This is how to know the parentnode or parentElement of an element
console.log("the parent node is", bookList.parentNode);
// console.log("the parent element is", bookList.parentElement);
// This is how to know the childNode of an element by adding .childNodes or .children to the variable
// Also if you just need the amount of children a node has, use the method .childElementCount
// console.log("the child node is", bookList.childNodes);
// console.log("the child node is", bookList.children);
// console.log("the child node is", bookList.childElementCount);

//DOM Traversal (SIBLINGS)
//The first method gives us the node, while the second gives us the element
// console.log("bookList next node sibling is", bookList.nextSibling);
// console.log("bookList next element sibling is", bookList.nextElementSibling);
//The first method gives us the node, while the second gives us the element
// console.log("bookList previous node sibling is", bookList.previousSibling);
// console.log(
//   "bookList previous element sibling is",
//   bookList.previousElementSibling
// );

//This is kinda a complex query to changing the HTML on the DOM
bookList.previousElementSibling.querySelector("p").innerHTML +=
  "<marquee>A Reader Today A Leader Tommorrow!</marquee>";

// DOM EVENT / REMOVING CONTENT / EVENT BUBLING
// Listening to event and responding to them when they are called is a vital knowledge in coding.
// By adding event listeners to the different element, we can both listen to and respond to them
// The event listener takes in 2 parameters: the eventName and the callback fn
// We want to delete a book from the list of book on the page
// We have to circle through all the delete btn using forEach
// let btns = document.querySelectorAll("#bookList .delete");
// btns.forEach((btn) => {
//   // Then add eventListener for each of the buttons
//   btn.addEventListener("click", (e) => {
//     const li = e.target.parentNode;
//     li.parentNode.removeChild(li);

//     // console.log(e);
//   });
// });

// Event Bubbling is a way adding an event a parent in order to carry out a function on any of the child element
// delete books
const list = document.querySelector("#bookList ul");
list.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentNode;
    list.removeChild(li);
  }
});

// INTERACTING WITH FORMS AND SUBMIT EVENT
//ADD BOOKS
const addBook = document.forms["addBook"];

addBook.addEventListener("submit", (e) => {
  e.preventDefault();
  // const value = addBook.querySelector("input[type='text']").value;
  // console.log(value);

  //We could do it in a cleaner way by adding an id to the HTML element, and using the dot(.) notation say addBook.(id from the HTML).value
  console.log(addBook.newBook.value);
});
