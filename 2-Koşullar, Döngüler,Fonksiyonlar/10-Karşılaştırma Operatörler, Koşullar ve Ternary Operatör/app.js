// Karşılaştırma operatörler

//!==


//>=
//<=

//== -iki değerin eşitliğini kontrol eder
console.log(20 == 20); //true
console.log("js" == "Java"); //false
console.log(20 == "20"); //true

//=== -iki değerin eşitliğini ve tipini kontrol eder
console.log(20 === "20"); //false

//>
console.log(4 > 2); //true
//<
console.log(2 < 4); //true

//!= -değerler eşit değil midir? operatörü
console.log(2 != 4); //true
console.log(2 != 2); //false
console.log(2 != "2"); //false

//!== -değeri ve tipleri eşit değil midir? operatörü
console.log(2 !== "2"); //true
//>= ve <=
console.log(4 >= 2); //true
console.log(2 <= 4); //true
console.log(4 <= 4); //true


// Mantıksal bağlaçlar

// Not operatörü -true ise false'a, false ise true'ya çevirir.

console.log(!(2 == 2)); //false

// And operatörü

console.log((2==2)&&("ahmet"=="ahmet")); //true
console.log((4==2)&&("ahmet"=="ahmet")); //false

//Or operatörü

console.log((4==2) || ("ahmet"=="ahmet") ); //true
console.log((4==2) || ("ahmet"!="ahmet") ); //true

//if (kosul) {
//    //if block
//    
//}

const error = true;

if (error==true){
    console.log("hata oluştu");
}
else{
 
console.log("hata oluşmadı");
   
}
//hata oluştu


const user = "ibrahim";
if (user === "ibrahim") {
    console.log("Kullanıcı bulundu");
} else {
    console.log("kullanıcı bulunamadı...");
}
//Kullanıcı bulundu


const process = "5";
if (process === "1") {
    console.log("İşlem 1");
} 

else if (process === "2") {
    console.log("işlem 2");
} 

else if (process === "3") {
    console.log("işlem 3");
} 

else if (process === "4") {
    console.log("işlem 4");
} 

else {
    console.log("Geçersiz");
}

const number=120;

if (number===100){
    
console.log("sayı 100e eşit");

}
else{
    
console.log("sayı 100' eşit değil");

}

//ternary operatörü


console.log(number===100 ? "sayı 100" : "sayı 100 değil");

if(number===100)
console.log("sayı yüz");
else console.log("sayı yüz değil");




























