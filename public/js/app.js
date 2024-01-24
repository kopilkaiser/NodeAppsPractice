console.log("app.js is connected and started running");

let cartDetails = document.getElementsByClassName("cartDetails")[0];
let btnShowCart = document.getElementById("btnShowCart");
let btnHideCart = document.getElementById('btnHideCart');
console.log(`cartDetails: ${cartDetails}`);
let itemRows = [...document.getElementsByClassName("itemRow")];

document.addEventListener("DOMContentLoaded", function (event) {
  let cart1 = sessionStorage.getItem("cart1");
  let cart2 = sessionStorage.getItem("cart2");


  function calculateTotal(cart) {
    return cart.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
  console.log(`cart2stringify: ${cart2}`)
  if (cart2) {
    let cart2obj = JSON.parse(cart2);
    console.log(`cart2obj.items: ${cart2obj.items}`)
    let totalPrice = calculateTotal(cart2obj);
    for (let i = 0; i < cart2obj.items.length; i++) {
      populateCartDetails(cart2obj.items[i].price, cart2obj.items[i].name, cart2obj.items[i].quantity);
    }
    addTotalPriceToCartDetails(totalPrice.toFixed(3));
  } else {
    alert("There has been no cart added yet");
  }
});

function populateCartDetails(price, name, quantity) {
  console.log(`passed to populateCarDetails: ${price}, ${name}, ${quantity}`);
  let divElem = document.createElement("div");
  divElem.className = "itemRow";
  let labelPrice = document.createElement("label");
  labelPrice.textContent = `£${price}`;
  labelPrice.id = "itemPrice";
  let labelName = document.createElement("label");
  labelName.textContent = `${name}`;
  labelName.id = "itemName";
  let labelQuantity = document.createElement("label");
  labelQuantity.textContent = `${quantity}`;
  labelQuantity.id = "itemQuantity";
  let spanElem = document.createElement("span");
  spanElem.textContent = "/";
  divElem.appendChild(labelPrice);
  divElem.append(spanElem);
  divElem.append(labelName);
  divElem.append(labelQuantity);
  cartDetails.append(divElem);
}
function addTotalPriceToCartDetails(totalPrice) {
  console.log(`passed to addTotalPriceToCartDetails: ${totalPrice}`);
  
  let paraElem = document.createElement("p");
  paraElem.className = "paraTotalPrice";
  paraElem.textContent = "TotalPrice: ";
  let spanElemPara = document.createElement("span");
  spanElemPara.textContent = `£${totalPrice}`;
  paraElem.append(spanElemPara);
  cartDetails.append(paraElem);
}

//#region mouseover-mouseout animation
// btnShowCart.addEventListener("mouseover", function (event) {
//   cartDetails.classList.remove('hideCartDetails')
//   cartDetails.classList.add('showCartDetails')
// });

// btnShowCart.addEventListener("mouseout", function (event) {
//   cartDetails.classList.add('hideCartDetails')
//   cartDetails.classList.remove('showCartDetails')
// });
//#endregion 
//#region hide-show click style animation
btnShowCart.addEventListener('click', () => {

  if(cartDetails.classList.contains('hideCartDetails')){
    cartDetails.classList.remove('hideCartDetails');
    cartDetails.classList.add('showCartDetails');
  }
});
console.log('btnShowCart: ' + btnShowCart);
btnHideCart.addEventListener('click', () => {
  if(cartDetails.classList.contains('showCartDetails')){
    cartDetails.classList.remove('showCartDetails');
    cartDetails.classList.add('hideCartDetails');
  }
});
console.log('btnHideCart: ' + btnHideCart);
//#endregion

let btnSubmit = document.getElementById("btnSubmit");
let fruitNames = [...document.getElementsByClassName("fruitName")];
let fruitPrices = [...document.getElementsByClassName("fruitPrice")];
let fruitQuantities = [...document.getElementsByClassName("fruitQuantity")];

if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    let names = []; //done
    let prices = []; //done
    let quantities = []; //done
    let totalPrice = 0; //done

    fruitPrices.forEach((price) => {
      let stringVal = price.textContent;
      let formattedPrice = stringVal.replace("£", "");
      let numberPrice = Number(formattedPrice) || 0;
      prices.push(numberPrice);
    });

    for (let qtyInput of fruitQuantities) {
      let qtyStrVal = qtyInput.value;
      let qtyNumVal = Number(qtyStrVal) || 0;

      if (qtyNumVal < 0) {
        alert(`value for ${qtyInput.id} has been given invalid: less than 0`);
        quantities.push(0);
      } else {
        quantities.push(qtyNumVal);
      }
    }

    for (let name of fruitNames) {
      names.push(name.textContent);
    }

    for (let i = 0; i < prices.length; i++) {
      let calcValue = prices[i] * quantities[i];
      totalPrice += calcValue;
    }

    var url =
      "http://localhost:2222/fruitcart?totalPrice=" + totalPrice.toFixed(2);
    this.blur();

    // #region create cart object and save to sessionStorage
    //JSON.stringify -> when saving to sessionStorage or localStorage
    //JSON.parse -> when retrieving item from sessionStorage or localStorage

    // #region save cart to sessionStorage
    let cart2 = { items: [], totalPrice };
    for (let i = 0; i < names.length; i++) {
      let item = {};
      item.name = names[i];
      item.price = prices[i];
      item.quantity = quantities[i];
      cart2.items.push(item);
    }
    cart2.totalPrice = totalPrice.toFixed(3);
    let cart2Stringify = JSON.stringify(cart2);
    sessionStorage.setItem("cart2", cart2Stringify);
    // #endregion create cart object and save to sessionStorage
    setTimeout(() => {
      //window.location.href = url;
      window.location.reload();
    }, 500);
  });

  btnSubmit.addEventListener("mouseout", function () {
    this.blur();
  });
}

console.log("app.js has finished running till end");
