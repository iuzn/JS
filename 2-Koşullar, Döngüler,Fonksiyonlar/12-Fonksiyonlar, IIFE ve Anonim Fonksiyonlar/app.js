// Fonksiyon tanımlama

function merhaba(name = "Bilgi yok", age = "Bilgi yok") {
    //    if(typeof name === "undefined") name="Bilgi yok!"
    //    if(typeof age === "undefined") age="Bilgi yok!"
    console.log(`İsim: ${name}\nYaş: ${age}`);
}

merhaba("Murat", 25); //Fonksiyon çağrısı -function call
//İsim: Murat
//Yaş: 25
merhaba("ibrahim", 24);
//İsim: ibrahim
//Yaş: 24
merhaba();
//İsim: Bilgi yok
//Yaş: Bilgi yok

merhaba("Kadir");
//İsim: Kadir
//Yaş: Bilgi yok

function square(x) {

    return x * x;
    console.log("return'den sonra yazılan kod çalışmaz.");
}

function cube(x) {
    return x * x * x;
}
//let a = square(12);
//a = cube(a);

let a = cube(square(12));

console.log(a);
// 2985984

function merhaba() {
    return "Merhaba";
}

console.log(merhaba());

// Function Expression

const selam = function () {
    console.log("Selam!");
}

selam();

const selamlar = function (name) {
    console.log("Selamlar " + name);
}

selamlar("beyler!");

// Immediately Invokes Function Expression (IIFE)

(function (isim) {
    console.log("Merhaba " + isim);
})("İbrahim");

const database = {
    host: "localhost",
    add: function () {
        console.log("Eklendi");
    },
    get: function () {
        console.log("Elde edildi");
    },
    update: function (id) {
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function (id) {
        console.log(`Id: ${id} Silindi`);
    },
}

console.log(database.host); //localhost

database.add(); //Eklendi

database.delete(10); //Id: 10 Silindi 
