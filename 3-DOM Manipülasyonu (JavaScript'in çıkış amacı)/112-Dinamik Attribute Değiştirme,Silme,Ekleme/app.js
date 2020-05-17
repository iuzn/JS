const todoInput = document.getElementById("todo");

let element;

element = todoInput;

element=todoInput.classList; //DOMTokenList ["form-control", value: "form-control"]

//todoInput.className="form-control newClass";
//todoInput.classList.add("newClass");
//todoInput.classList.add("newClass2");
//todoInput.classList.remove("form-control");






element=todoInput;

element =todoInput.placeholder; //Bir Todo Girin

element=todoInput.getAttribute("placeholder"); //Bir Todo Girin

todoInput.setAttribute("placeholder", "Naber");

todoInput.setAttribute("title", "Input");

todoInput.removeAttribute("name");

element=todoInput.placeholder; //Naber
element=todoInput.title; //Input
element=todoInput.hasAttribute("required"); //false
// element=todoInput.hasAttribute("name"); //true

element =todoInput;











console.log(element);