let menuItems = document.querySelectorAll(".item");

let cart = document.querySelector("#cart");

for (let i = 0; i < menuItems.length; i++) {
  let menu = menuItems[i];

  menu.addEventListener("click", addToCart);

  function addToCart() {
    let cartItem = this;

    let item = document.createElement("div");

    cart
      .appendChild(item)
      .appendChild(cartItem.querySelector("img").cloneNode(true));

    item.appendChild(cartItem.querySelector("div").cloneNode(true));

    item.classList.add(
      "d-flex",
      "align-items-center",

      "border-bottom",
      "border-primary"
    );
    item
      .querySelector("div")
      .classList.add("d-flex", "justify-content-between", "w-100");
  }
}
