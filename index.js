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
const pageBanner = document.querySelector("#pageBanner");
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
  const value = addBook.querySelector('input[type="text"]').value;
  // console.log(value);

  //create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const delBtn = document.createElement("span");

  //add content
  delBtn.textContent = "delete";
  bookName.textContent = value;

  //add classes
  bookName.classList.add("name");
  delBtn.classList.add("delete");

  //append to document
  li.appendChild(bookName);
  li.appendChild(delBtn);
  list.appendChild(li);
});

//checkboxes & Change Events to hide books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", (e) => {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});

//Search filter without the filter method
// Method #1
// const searchBar = document.forms["searchBooks"].querySelector("input");
// searchBar.addEventListener("keyup", (e) => {
//   const term = e.target.value.toLocaleLowerCase();
//   const books = list.getElementsByTagName("li");
//   Array.from(books).forEach((book) => {
//     const title = book.firstElementChild.textContent;
//     if (title.toLocaleLowerCase().indexOf(term) != -1) {
//       book.style.display = "block";
//     } else {
//       book.style.display = "none";
//     }
//   });
// });

// Method #2
//Uses .trim() to clean input.
//Uses .includes() instead of indexOf() for better readability.
//Ensures list is correctly selected (#book-list).
// const searchBar = document.forms["searchBooks"].querySelector("input");
// searchBar.addEventListener("keyup", (e) => {
//   const term = e.target.value.trim().toLowerCase(); // Trim spaces and convert to lowercase
//   const books = list.getElementsByTagName("li");

//   Array.from(books).forEach((book) => {
//     const title = book.firstElementChild.textContent.toLowerCase();
//     book.style.display = title.includes(term) ? "block" : "none";
//   });
// });

const searchBar = document.forms["searchBooks"].querySelector("input");
searchBar.addEventListener("keyup", (e) => {
  const term = e.target.value.trim().toLowerCase();

  Array.from(list.getElementsByTagName("li")).forEach((book) => {
    book.style.display = book.firstElementChild.textContent
      .toLowerCase()
      .includes(term)
      ? "block"
      : "none";
  });
});

// Method #3
//Here's the refactored code using the .filter() method instead of forEach().
//💡 Key Changes:
//The Array.from(books).filter() method is used to create a filtered list.
//The .forEach() method is then applied to hide/show books accordingly.
// const searchBar = document.forms["searchBooks"].querySelector("input");
// searchBar.addEventListener("keyup", (e) => {
//   const term = e.target.value.trim().toLowerCase(); // Trim spaces and convert to lowercase
//   const books = Array.from(list.getElementsByTagName("li"));

//   books
//     .filter((book) =>
//       book.firstElementChild.textContent.toLowerCase().includes(term)
//     )
//     .forEach((book) => (book.style.display = "block"));

//   books
//     .filter(
//       (book) => !book.firstElementChild.textContent.toLowerCase().includes(term)
//     )
//     .forEach((book) => (book.style.display = "none"));
// });

//tabbed content
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");
tabs.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
