console.log("app.js is connected");

let btnSubmit = document.getElementById("btnSubmit");

let fruitPrices = [...document.getElementsByClassName("fruitPrice")];

let fruitQuantities = [...document.getElementsByClassName("fruitQuantity")];
let prices = []; //done
let quantities = [];
let totalPrice = 0;

if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    fruitPrices.forEach((price) => {
      let stringVal = price.textContent;
      let formattedPrice = stringVal.replace("£", "");
      let numberPrice = Number(formattedPrice) || 0;
      console.log(numberPrice);
      prices.push(numberPrice);
    });
    console.log(prices);
    console.log(`prices: ` + prices);
    for (let qtyInput of fruitQuantities) {
      let qtyStrVal = qtyInput.value;
      let qtyNumVal = Number(qtyStrVal) || 0;
      quantities.push(qtyNumVal);
    }
    console.log(quantities);
    console.log(`quantities: ` + quantities);

    for (let i = 0; i < prices.length; i++) {
      let calcValue = prices[i] * quantities[i];
      console.log(`calcValue[${i}]: ${calcValue}`);
      totalPrice += calcValue;
    }

    var url =
      "http://localhost:2222/fruitcart?totalPrice=" + totalPrice.toFixed(2);
    this.blur();
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  });

  btnSubmit.addEventListener("mouseout", function () {
    this.blur();
  });
}
