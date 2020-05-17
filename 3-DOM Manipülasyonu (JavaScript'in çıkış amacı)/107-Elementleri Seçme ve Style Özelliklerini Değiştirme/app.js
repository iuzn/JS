const element = document.querySelector("#clear-todos"); // Elementi burada seçiyoruz, buton seçildi

// Element özellikleri

//console.log(element.id); // clear-todos
//console.log(element.className); // btn btn-dark
//console.log(element.classList); // DOMTokenList(2) ["btn", "btn-dark", value: "btn btn-dark"]
//console.log(element.classList[1]); //  btn-dark
//console.log(element.textContent); //  Tüm Taskları Temizleyin
//console.log(element.innerHTML); // Tüm Taskları Temizleyin
//console.log(element.href); // http://127.0.0.1:60154/E%C4...
//console.log(element.style); //CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}

// Style ve Element özelliklerini değiştirme

//element.className = "btn btn-primary"; // buton rengini değişti
//element.style.color = "black" // Yazıya renk verildi
//element.style.marginLeft = "50px";
//element.href = "https://ibrahimuzun.com";
//element.target = "_blank";

//element.textContent = "silin"; // butonun yazısı değişti
//element.innerHTML = "<span style = 'color:green'>Silin</span>"


//const elements = document.querySelectorAll(".list-group-item");
//console.log(elements); //NodeList(4) [lı.list-group-item.d-flex.justify-content-between, lı.list-group-item.d-flex.justify-content-between, lı.list-group-item.d-flex.justify-content-between, lı.list-group-item.d-flex.justify-content-between]
//elements.forEach(function(el){
//    el.style.color ="red";
//    el.style.background ="#eee";
//    
//})



//let element2 = document.querySelector("li:first-child");
let element2 = document.querySelector("li:last-child"); // son element
element2 = document.querySelector("li:nth-child(2)"); // 2. element
element2 = document.querySelector("li:nth-child(3)"); //3. element
element2 = document.querySelector("li:nth-child(5)"); //null
element2= document.querySelectorAll("li:nth-child(odd)"); //NodeList(2) [lı.list-group-item.d-flex.justify-content-between, lı.list-group-item.d-flex.justify-content-between]
element2 = document.querySelectorAll("li:nth-child(even)"); //NodeList(2) [lı.list-group-item.d-flex.justify-content-between, lı.list-group-item.d-flex.justify-content-between]

element2.forEach(function(el){
    el.style.background="#ccc";
    el.style.color="rgb(16, 93, 150)"
})


console.log(element2);
//console.log(element);















