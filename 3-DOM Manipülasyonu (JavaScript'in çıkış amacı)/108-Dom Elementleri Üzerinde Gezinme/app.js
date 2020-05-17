let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");
//burada elemenleri seçtük
value = todoList;
value=todo;
value=cardrow;



// Child Nodes - Text dahil



value = todoList.childNodes;
value = todoList.childNodes[0]; //satırları da sayıyor.

value =todoList.children;
value=todoList.children[2];
value=todoList.children[todoList.children.length-1]; //son child

value= todoList.children[2].textContent="değişti";



value = cardrow;

value=cardrow.children;

value=cardrow.children[2].children[1].textContent="bura da değişti";



value = todoList;
//value= todoList.children[0];
value= todoList.firstElementChild;
value= todoList.lastElementChild;

value=todoList.children.length; //4
value=todoList.childElementCount; //4



value = cardrow;
value =cardrow.parentElement; //container
value=cardrow.parentElement.parentElement; //body



//Element kardeşlerini bulmak


value = todo;
value= todo.previousElementSibling; // bir önceki kardeşe git
value=todo.nextElementSibling; // bir sonraki kardeşe git
value=todo.nextElementSibling.nextElementSibling; // iki sonraki...
value=todo.nextElementSibling.previousElementSibling; // zaa xD




















//Children  - Element
console.log(value);