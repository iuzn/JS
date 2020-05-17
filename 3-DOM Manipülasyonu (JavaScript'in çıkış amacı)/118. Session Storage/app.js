// Session Storage - Key ve Value

//console.log(window.sessionStorage);



// Butonları Seçmek


const add = document.querySelector("#add");

const del= document.querySelector("#delete");

const clear= document.querySelector("#clear");




// Inputlar


const addkey = document.querySelector("#addkey");

const value = document.querySelector("#addvalue");

const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);

del.addEventListener("click",deleteItem);

clear.addEventListener("click",clearItems);

function addItem(e){
    sessionStorage.setItem(addkey.value, addvalue.value);
}


function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear();
    
}


//Enter ile ekleme ve silme 



addkey.addEventListener("keyup", function(e){
    if (e.keyCode === 13 ){
            addItem();
    }

    
});

value.addEventListener("keyup", function(e){
    if (e.keyCode === 13 ){
            addItem();
    }

    
});

deletekey.addEventListener("keyup", function(e){
    if (e.keyCode === 13 ){
      deletekey();
    }

    
});



