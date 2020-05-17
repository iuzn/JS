const filter = document.getElementById("filter");



//document.addEventListener("DOMContentLoaded",load);
//
//function load(e){
//    console.log("Sayfa yüklendi");
//}


//filter.addEventListener("focus",run);
//filter.addEventListener("blur",run);

// Paste 

filter.addEventListener("cut",run);

// Copy
filter.addEventListener("copy",run);

// Cut
filter.addEventListener("cut",run);


//select
filter.addEventListener("select",run);





function run(e){
    console.log(e.type);
}



//console.log(filter);


