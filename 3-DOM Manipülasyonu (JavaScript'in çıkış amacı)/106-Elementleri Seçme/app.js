// Element Id'ye göre seçme

let element;

element =document.getElementById("todo-form") //<form id="todo-form" ...
// element =document.getElementById("todo-form788") //null
element = document.getElementById("tasks-title"); ///<h5 class="card-title" id="tasks-title"> ...

// Element class'a göre seçme
element = document.getElementsByClassName("list-group-item")[0]; //li  class="list-group-item d-flex justify-content-between">…</li>
element = document.getElementsByClassName("card-header"); //HTMLCollection [dıv.card-header]

// Element tag'e göre seçme

element =document.getElementsByTagName("li"); // HTMLCollection(4) [lı.list-group-item.d-flex.justify-content-between, lı.list-group-item.d-flex.justify-content-between, lı.list-group-item.d-flex.justify-content-between, lı.list-group-item.d-flex.justify-content-between]

element =document.getElementsByTagName("div"); //HTMLCollection(9) [dıv.container, dıv.card.row, dıv.card-header, dıv.card-body, dıv.form-row, dıv.form-group.col-md-6, dıv.card-body, dıv.form-row, dıv.form-group.col-md-6]

// Qery selector - Css selector - Tek bir element döner

element = document.querySelector("#todo-form"); //<form id="todo-form" name="form">…</form> --Id'ye göre
element = document.querySelector("#tasks-title"); //<h5 class="card-title" id="tasks-title">Todolar</h5>

element = document.querySelector(".list-group-item") // <li class="list-group-item d-flex justify-content-between">…</li> --Class'a göre

element = document.querySelector("li"); //<li class="list-group-item d-flex justify-content-between">…</li>
element = document.querySelector("div"); //<div class="container" style="margin-top:20px;">…</div>



// QuerySelectorAll - Tüm Elementleri Seç

element = document.querySelectorAll(".list-group-item"); // NodeList(4) [lı.list-group-item.d-flex.justify-content-between, lı.list-group-item.d-flex.justify-content-between, lı.list-group-item.d-flex.justify-content-between, lı.list-group-item.d-flex.justify-content-between]

element.forEach(function(el){ // forEach döngüsüyle liste içinde gezinebiliyoruz.
    console.log(el);
})

//console.log(element);







