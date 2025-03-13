const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.querySelector(".nav__list");
let billContainer = document.getElementById("bill");
let customer_details = document.getElementById("customer_details");
// let total = document.getElementById("total");
let totalPrice = 0;

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
  navToggle.classList.add("hide");
  navClose.classList.add("show");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
  navToggle.classList.remove("hide");
  navClose.classList.remove("show");
});

function renderUI() {
  productsArray = JSON.parse(localStorage.getItem("cart-shopping"));
  console.log(productsArray);
  billContainer.innerHTML = `<p>#${getRandomNumber()}</p>`;
  for (let product of productsArray) {
    totalPrice += parseFloat(product.price) * product.count;
    billContainer.innerHTML += `
        <div class="info-order">
            <div class="product-order">
                <div class="image-and-name">
                    <img src="${product.src}" alt="product order">
                    <p class="name" id="name">${product.name}</p>
                </div>
                <div class="count-and-price">
                    <p>${product.count}x &nbsp; $${product.price}</p>
                </div>
            </div>
        </div>
        `;
  }

  billContainer.innerHTML += `<p class="total" id="total">Total: $${totalPrice.toLocaleString(
    "en-US"
  )}USD</p>`;

  customer_info = JSON.parse(localStorage.getItem("customer_info"));
  customer_details.innerHTML = `
    <h3>Customer details</h3>
    <p>Name: ${customer_info.name}</p>
    <p>Email: ${customer_info.email}</p>
    <p>Phone: ${customer_info.phone}</p>
    <p>Comment: ${customer_info.comment}</p>
    `;
}

renderUI();

function getRandomNumber() {
  let randomNumber = "";
  for (let i = 0; i < 6; i++) {
    randomNumber += Math.floor(Math.random() * 9);
  }
  return randomNumber;
}

window.addEventListener("beforeunload", (event) => {
  const currentState = history.state;

  history.replaceState(currentState, "", "cartIsEmpty.html");

  // أضف حالة جديدة إلى السجل
  history.pushState(null, "", window.location.href);

  window.addEventListener("popstate", () => {
    history.replaceState(null, "", "cartIsEmpty.html");
  });
});
