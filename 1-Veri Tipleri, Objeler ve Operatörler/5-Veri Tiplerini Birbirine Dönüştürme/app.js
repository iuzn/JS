let value;
// veri tiplerini stringe çevirme

value = 135; // 135  |  number

value = String(123); // 123 | string
value = String(3.14); // 3.14 | string

value = String(true); // true | string
value = String(false); // false |string

value = String(function() {console.log()}); // function() {console.log()}  |  string

value = String([1,2,3,4,5]); // 1,2,3,4,5 |string

value = (10).toString(); // 10 | string
value = (3.14).toString(); // 3.14 | string


//veri tiplerini sayılara çevirme

value = Number("123"); // 123 | number

value = Number(null); // 0 | number
value = Number(undefined); // NaN | number -NaN: Not a Number
value = Number("Merhaba!"); // NaN | number -NaN: Not a Number
value = Number([1,2,3,4,5]); // NaN | number -NaN: Not a Number
value = Number(function() {console.log()}); // NaN | number -NaN: Not a Number

value = Number("3.14"); //  3.14 | number
value = parseFloat("3.14"); //  3.14 | number
value = parseInt("3"); //  3 | number


const a = "merhaba" + 34; // merhaba34 | string
console.log(a);
console.log(typeof a);

const b = "53" + 34; // 5334 | string
console.log(b);
console.log(typeof b);

const c = Number("53") + 34; // 87 | number
console.log(c);
console.log(typeof c);


console.log(value);
console.log(typeof value);








