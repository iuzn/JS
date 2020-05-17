// Dinamik Element Silme

const todoList = document.querySelector("ul.list-group");

const todos = document.querySelectorAll("li.list-group-item");


//remove metodu

//todos[0].remove();

//todoList.removeChild(todoList.lastElementChild); // todo 4 silindi

todoList.removeChild(todos[3]);  // todo 4 silindi
 


console.log(todos);
console.log(todoList);