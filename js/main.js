// Ask km number
const kmNumber = parseFloat(prompt("Chilometri da percorrere"));
console.log("km: ", kmNumber);

if (kmNumber <= 0 || isNaN(kmNumber)) {
  alert("inserisci un numero maggiore di zero");
} else {
  // Ask age
  const ageNumber = parseInt(prompt("Età passeggero"));

  if (ageNumber <= 0 || isNaN(ageNumber)) {
    alert("inserisci un numero maggiore di zero");
  } else {
    console.log("age: ", ageNumber);

    // Price
    let price = kmNumber * 0.21;
    console.log("prezzo: ", price);

    // Discounts
    if (ageNumber < 18) {
      price -= price * 0.2;
    } else if (ageNumber > 65) {
      price -= price * 0.4;
    }

    // Final price
    const finalPrice = price.toFixed(2);

    // Tiket Message
    const tiketMessage = ` 
    <h1 class = "d-inline-block pe-2"> Questo è il preventivo del tuo biglietto!</h1><i class="fs-1 fa-solid fa-face-laugh-beam"></i>
    <p class = "fs-3"> ${finalPrice} €</p>`;

    document.getElementById("tiketGenerator").innerHTML = tiketMessage;
  }
}
