const filterInput=document.getElementById("filter");

//filterInput.onfocus=function(e){
//    
//    console.log(e); //FocusEvent {isTrusted: true, relatedTarget: null, view: Window, detail: 0, sourceCapabilities: InputDeviceCapabilities, …}
//
//    console.log(e.type);//FocusEvent 
//    
//    console.log(e.target);//<input ...
//    
//    console.log(e.target.placeholder);//Bir Todo Arayın
//
//    console.log(e.target.className);//form-control
//    
//    
//    //console.log("Naber?");
//}
const todoForm = document.getElementById("todo-form");


todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("Submit Event'i");
    
    
    e.preventDefault(); // Sayfanın yenilenmesini engelledik
}






// console.log(filterInput);