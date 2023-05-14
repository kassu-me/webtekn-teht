document.querySelector("#submit").addEventListener("click",addNote);
let body = document.querySelector(".js");
let checkbox = document.getElementById("important");

// Luodaan funktio viestin lisäämiselle
function addNote() {

    let h3 = document.createElement('h3');
    let h5 = document.createElement('h5');
    h5.textContent = nimi.value;
   
    let p = document.createElement('p');
    p.textContent = viesti.value;

    // Onko merkattu Importantiksi

    if(checkbox.checked) {
        h3.classList.add("important");
        p.classList.add("important");
        h5.classList.add("important");
    }

    // kaikki elementit bodyn sisälle

    body.append(h3,h5,p,document.createElement("hr"));
    
}