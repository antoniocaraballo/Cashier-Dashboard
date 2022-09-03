let menuItems = document.querySelectorAll(".item");
let cart = document.querySelector("#cart");
let payBtn = document.querySelector("#pay-btn");
let payBtnTotal = document.querySelector(".pay-btn-total");
let cartTotal = document.querySelector(".cart-total");

for (let i = 0; i < menuItems.length; i++) {
  let menu = menuItems[i];

  menu.addEventListener("click", addToCart);

  function addToCart() {
    let cartItem = this;

    let item = document.createElement("div");
    let removeItem = document.createElement("i");

    cart
      .appendChild(item)
      .appendChild(cartItem.querySelector("img").cloneNode(true));

    item.appendChild(cartItem.querySelector("div").cloneNode(true));

    item.classList.add("d-flex", "align-items-center", "border-bottom");
    item
      .querySelector("div")
      .classList.add(
        "d-flex",
        "justify-content-between",
        "w-100",
        "align-items-center"
      );

    item.appendChild(removeItem);
    item
      .querySelector("i")
      .classList.add("bi", "bi-x-square-fill", "ms-3", "text-danger");

    item.querySelector("i").addEventListener("click", removeFromCart);

    getTotal();
  }
}

function removeFromCart() {
  this.parentNode.remove();

  getTotal();
}

payBtn.addEventListener("click", pay);

function getTotal() {
  let arr = cart.querySelectorAll("input");
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].value)) {
      total += parseFloat(arr[i].value);
    }
  }

  let payTotal;

  payTotal = total.toFixed(2);

  payBtnTotal.innerHTML = payTotal;

  cartTotal.innerHTML = payTotal;
}

function pay() {
  if (payBtnTotal.innerHTML == (0).toFixed(2)) {
    alert("Your cart is empty!");
  } else {
    alert("Thanks for your payment!");

    cart.innerHTML = "";
    getTotal();
  }
}
