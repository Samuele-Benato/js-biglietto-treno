// Ask km number
const kmNumber = parseFloat(prompt("Chilometri da percorrere"));
console.log("km: ", kmNumber);

// Ask age
const ageNumber = parseInt(prompt("Età passeggero"));
if (ageNumber < 0 || kmNumber < 0) {
  alert("inserisci un numero maggiore di zero");
} else {
  console.log("age: ", ageNumber);

  // Price
  const price = kmNumber * 0.21;
  console.log("prezzo: ", price);

  // Discounts
  if (ageNumber < 18) {
    price -= price * 0.2;
  } else if (ageNumber > 65) {
    price -= price * 0.4;
  }

  // Final price
  const finalPrice = price.toFixed(2);
}
