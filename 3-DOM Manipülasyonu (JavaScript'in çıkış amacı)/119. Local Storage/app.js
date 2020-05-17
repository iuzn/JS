// Local Storage


// SetItem



//
localStorage.setItem("hareket", "1");
localStorage.setItem("tekrar", "50");


// GetItem
//
//const value = localStorage.getItem("tekrar");
//console.log(value);
//console.log(typeof value);




// Clear Local Storage

//localStorage.clear();



//localStorage.setItem("hareket", "1");
//localStorage.setItem("tekrar", "50");

//console.log(localStorage.getItem("sport")); //null
//
//
//if (localStorage.getItem("sport") === null){
//    console.log("Sorgu bulunamadı");
//}
//if (localStorage.getItem("hareket") === null){
//    console.log("Sorgu bulunamadı");
//}
//else {
//    console.log("Sorgu verisi bulunuyor");
//}



// Local Storage - array yazma







//const todos = ["Todo 1", "Todo 2", "Todo 3"];

//localStorage.setItem("todos",todos);

//
//localStorage.setItem("todos", JSON.stringify(todos)); // artık string değil bir array oldu!
//



//const value = JSON.parse(localStorage.getItem("todos")); // artık string değil bir array oldu!
//
//console.log(value);


const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");


form.addEventListener("submit", addTodo);



function addTodo(e){
    const value = todoInput.value;
    let todos;
    
    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    
    
    todos.push(value);
    
    localStorage.setItem("todos", JSON.stringify(todos));
    
    
    e.preventDefault();
    
    
}

todoInput.addEventListener("keyup", function(e){
    if (e.keyCode === 13 ){
            addTodo();
    }
    
});






























