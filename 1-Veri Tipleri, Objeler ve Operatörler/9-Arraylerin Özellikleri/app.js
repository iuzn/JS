let value;

const numbers = [43, 56, 33, 23, 44, 35, 5];

// const numbers2 = new Array(43, 56, 33, 23, 44, 35, 5);

const langs = ["Python", "Java", "C++", "JavaScript"];

const a = ["Merhaba", 22,null,undefined,3.14];


value = numbers.length; // -Uzunluk

value = numbers[0]; // 43 -İndeksleme
value = numbers[2]; // 33
value = numbers[numbers.length -1]; // 5

numbers[2]=1000; // (7) [43, 56, 1000, 23, 44, 35, 5] - Herhangi bir indeksteki değeri değiştirme
value = numbers;

value=numbers.indexOf(1000); // 2 -Index of


numbers.push(2000); // (8) [43, 56, 1000, 23, 44, 35, 5, 2000] -push array in sonuna değer ekleme
value = numbers;


numbers.pop(); // (7) [43, 56, 1000, 23, 44, 35, 5] - sondan değer arma
value = numbers;

numbers.shift(); // (6) [56, 1000, 23, 44, 35, 5] - başından değer atma
value = numbers;

numbers.splice(0,3); //(3) [44, 35, 5] -belli bir kısmını atma
value = numbers;
 
numbers.reverse(); // (3) [5, 35, 44] - arrayi ters çevirir
value = numbers;

value = numbers.sort(); // (3) [35, 44, 5] -ilk rakamlara bakarak sıralama yapıyor.


value=numbers.sort(function(x,y){
    return x-y;
}); //(3) [5, 35, 44] -küçükten büyüge doğru sıralama

value=numbers.sort(function(x,y){
    return y-x;
}); // (3) [44, 35, 5] -büyükten küçüğe doğru sıralama









console.log(value);







