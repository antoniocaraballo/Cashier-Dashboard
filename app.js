let menuItems = document.querySelectorAll(".item");
let cart = document.querySelector("#cart");
let payBtn = document.querySelector("#pay-btn");

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

    // Total in works***

    // console.log(this.querySelector("input").value);

    // let total = document.createElement("div");

    // payBtn.appendChild(total);
    // total.innerHTML = this.querySelector("input").value;
  }
}

function removeFromCart() {
  this.parentNode.remove();
}

payBtn.addEventListener("click", pay);

function pay() {
  if (payBtn.value == 0) {
    alert("Cart is empty");
  } else {
    console.log("works");
  }
}
