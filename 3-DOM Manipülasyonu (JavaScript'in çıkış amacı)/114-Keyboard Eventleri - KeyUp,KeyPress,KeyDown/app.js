// Klavye Eventleri



const header = document.querySelector(".card-header");
const todoInput= document.querySelector("#todo");



todoInput.addEventListener("keyup",changeText);


function changeText(e){
    header.textContent = e.target.value; // Başlık değişti
//    console.log(e.target.value); //input alanındaki değerleri aldık.
}


// keypress

//document.addEventListener("keypress",run);


//function run(e){
////    console.log(e.which);
//    console.log(e.key);
//    //console.log("Naber");
//}






// keydown

//document.addEventListener("keydown",run);
//
//
//function run(e){
//    console.log(e.key);
//}



// keyup
//
//document.addEventListener("keyup",run);
//
//
//function run(e){
//    console.log(e.key);
//}







