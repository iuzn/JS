// Yeni Element Oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>        

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://ibrahimuzun.com/cv"
newLink.target="_blank";

// Text Content

// newLink.textContent= "Farklı Sayfaya Git"; // Güvenli değil

// cardbody.textContent= "23424323423"; // PATLADI!


// Tex Node - Güvenli

//const text = document.createTextNode("Naber?");
//cardbody.appendChild(text);



newLink.appendChild(document.createTextNode("Hakkımda yazısını gör"));

cardbody.appendChild(newLink);


console.log(cardbody);
console.log(newLink);
