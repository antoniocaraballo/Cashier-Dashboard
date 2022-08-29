let menuItems = document.querySelectorAll(".item");

let cart = document.querySelector("#cart");

for (var i = 0; i < menuItems.length; i++) {
  let item = menuItems[i];

  item.addEventListener("click", addToCart);

  function addToCart() {
    // console.log("works");
    this.classList.toggle("bg-success");

    if (item.classList.contains("bg-success")) {
      console.log(cart.innerHTML);
    } else {
      console.log("works");
    }
  }
}
