// While Döngüleri

//let i=0;
//while(i<10){ // sonsuz döngü
//    console.log(i);
//    i += 1; // i++
//    
//}
//
//let i = 10;
//
//while(i>0){
//    console.log(i);
//    //i-=1; // i--
//    
//    i-=2;
//}

// Break ve Continue

//let i =0;
//
//while(i<10){
//    console.log(i);
//    if(i==5){
//        break; // döngü 5 te sonlandı
//    }
//    i++;
//}

//
//let i =0;
//
//while(i<10){ //sonsuz döngü
//    if(i==3 | i==5){
//    continue;
//    }
//    console.log(i);
//    i++;
//}


//let i =0;
//
//while(i<10){
//    if(i==3 | i==5){ // 3 ve 5 es geçildi
//    i++;
//    continue;
//    }
//    console.log(i);
//    i++;
//}


// Do while

//
//let i=0;
//
//do{
//    console.log(i);
//    i++;
//}while(i<10); // çok kullanılmıyor
//


const langs = ["Python","JS","Java"];
// while döngüsü ile
//let index=0;
//
//while(index<langs.length){
//    console.log(langs[index]);
//    index++;
//}

//for döngüsü ile
//for(let index=0; index<langs.length; index++){
//    console.log(langs[index]);
//}

//forEach metodu
//langs.forEach(function(lang, index){
//    console.log(lang, index);
//})

// map fonksiyonu
//const users = [
//    { name: "ibrahim", age: 24},
//    {name: "zeynep", age: 11},
//    {name: "fatih", age: 19},
//    
//];
//
//const names= users.map(function(user){ 
//    return user.name;
//});
//const ages = users.map(function(user){
//    return user.age;
//});
//console.log(names); 
//console.log(ages); 
// (3) ["ibrahim", "zeynep", "fatih"]
// (3) [24, 11, 19]

const user = {
    name: "ibrahim",
    age: 24
};

for (let key in user){
    console.log(key, user[key]);
};
 








