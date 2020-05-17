let value;

const firstName = "İbrahim";
const lastName = "Uzun";

const langs = "Java, Python, C++"

value = firstName + " " + lastName;

value = "Recep Tayyip ";
// value = value + "ERDOĞAN";
value += "ERDOĞAN";

value = firstName.length; 
// 7 


value = firstName.concat(" ",lastName," ","JS öğreniyor.");
// İbrahim Uzun JS öğreniyor.

value = firstName.toLowerCase(); 
// ibrahim

value = firstName.toUpperCase(); 
// İBRAHIM

value = firstName[0];
// İ

value = firstName[firstName.length - 1];
// m


// Index of

value = firstName.indexOf("a");
// 3

value = lastName[firstName.indexOf("İ") - lastName.length + 5];
// z


//Char At

value = firstName.charAt(0);
// İ

value = firstName.charAt(5);
// i


//Split

value = langs.split(","); 
// (3) ["Java", " Python", " C++"] -","e göre parçala ve dizi oluştur.


// Replace

value = langs.replace("Python", firstName);
//Java, İbrahim, C++

value = langs.replace("Python", "CSS");
//Java, CSS, C++


// Icludes

value = langs.includes("Java");
//true

value = langs.includes("Javascript");
//false







console.log(value);






