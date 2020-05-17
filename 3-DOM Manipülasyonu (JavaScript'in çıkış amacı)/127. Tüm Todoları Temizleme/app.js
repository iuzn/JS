// Window Object
let value;
//console.log(document);
//console.log(this.document);
value = document;
value = document.all;
value = document.all.length; // 44
value = document.all[0]; // html
value = document.all[7]; // title
value = document.all[document.all.length - 1]; // <script src="app.js"></script>

//const elements = document.all; //HTMLAllCollection(44)
//for(let i =0; i< elements.length;i++){ 
//    console.log(elements);
//}
//elements.forEach(function(element){
//    console.log(element); //Uncaught TypeError: elements.forEach is not a function
//});

//const collections = Array.from(document.all); //HTMLAllCollection(44) -forEach metodu kullanmak istiyorsak Array'e çevirmek gerekiyor.
////console.log(typeof collections); // object
//collections.forEach(function(collection){
//    console.log(collection);
//});


value = document.all[8];
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname; //127.0.0.1
value = document.location.port; //58780
value = document.URL; //http://127.0.0.1:58780/Temeller/...

value = document.characterSet; //UTF-8


console.log(value);
