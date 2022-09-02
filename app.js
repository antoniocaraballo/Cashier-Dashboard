let menuItems = document.querySelectorAll(".item");
let cart = document.querySelector("#cart");
let payBtn = document.querySelector("#pay-btn");
let payTotal = payBtn.querySelector("input").value;
let payBtnTotal = document.querySelector(".pay-btn-total");

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

function pay() {
  if (payBtn.value == 0) {
    alert("Cart is empty");
  } else {
    console.log("works");
  }
}

function getTotal() {
  let arr = cart.querySelectorAll("input");
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].value)) {
      total += parseFloat(arr[i].value);
    }
  }

  payTotal = total.toFixed(2);

  payBtnTotal.innerHTML = payTotal;
}
