let value;

value = document;

//Scriptler


value = document.scripts; // HTMLCollection(4) [scrıpt, scrıpt, scrıpt, scrıpt]  -app.js'i diğer scriptlerin altına yazıyoruz.

value = document.scripts.length; // 4
value = document.scripts[0]; // <script src="https://code...

// Linkler

value = document.links; //HTMLCollection(5) [a.delete-item...
value = document.links[0]; //<a href="#"...
value = document.links[document.links.length-1]; //<a class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>
value =document.links[document.links.length - 1].getAttribute("class"); //btn btn-dark
value =document.links[document.links.length - 1].getAttribute("id"); //clear-todos
value =document.links[document.links.length - 1].getAttribute("href"); //#
value =document.links[document.links.length - 1].className; // btn btn-dark
value =document.links[document.links.length - 1].classList; // DOMTokenList(2) ["btn", "btn-dark", value: "btn btn-dark"]


// Formlar
value = document.forms; //HTMLCollection [form#todo-form, todo-form: form#todo-form, form: form#todo-form]0: form#todo-formlength: 1form: form#todo-formtodo-form: form#todo-form__proto__: HTMLCollection 
value = document.forms.length; // 1
value = document.forms[0]; // <form...
value = document.forms[name]; // <form id="todo-form" name="form"> --name etiketi kullanarak formları seçebiliriz.
value = document.forms[0].id; //todo-form
value = document.forms[0].getAttribute("id"); //todo-form
value = document.forms[0].name; //form
value = document.forms[0].getAttribute("name"); //form

value = document.forms[0].method; //get




console.log(value);













