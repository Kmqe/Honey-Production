const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.querySelector(".nav__list");

// Select the background behind the payment modal
const overlay = document.getElementById("overlay");

// Select the payment page
const shopping_page = document.getElementById("shopping_page");

const close_shopping_page = document.getElementById("close_shopping_page");

// The shopping cart icon
const cart_shopping_icon = document.getElementById("cart_shopping");

// The container that holds the products added to the cart
let shop_carts = document.getElementById("shop_carts");

// Total price
let totalPrice = document.getElementById("total");

const orderHoney = document.getElementById("order_honey");

orderHoney.addEventListener("click", () => {
    let customer_info = {
        name: document.getElementById("name_input").value,
        email: document.getElementById("email_input").value,
        phone: document.getElementById("phone_input").value,
        comment: document.getElementById("comment_input").value,
    }

    localStorage.setItem("customer_info",JSON.stringify(customer_info))
})
// localStorage.clear()
navToggle.addEventListener("click", () => {
    navMenu.classList.add("show");
    navToggle.classList.add("hide")
    navClose.classList.add("show")
})

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navToggle.classList.remove("hide")
    navClose.classList.remove("show")
})

close_shopping_page.addEventListener("click", () => {
    document.querySelector("body").classList.remove("overflow")
    shopping_page.classList.remove("show")
    overlay.classList.remove("show")
})

cart_shopping_icon.addEventListener("click", displayCartDetails);



// localStorage.clear()

// Adds a product to the shopping cart or updates its quantity if it already exists.
function addProductToCart(check){ // false /////////////////
    // The `check` parameter determines where the purchase button was clicked: 
    // `true` if clicked on the product page, allowing custom quantity input, 
    // or `false` if clicked on the homepage, defaulting to a quantity of 1.
    let count = 1;
    let isNewProduct = true;
    let change_height = document.getElementById("change-height");

    change_height.classList.remove("change-height");
    if(check){
        count = document.getElementById("product_count").value;
    }

    let product = {
        ...JSON.parse(localStorage.getItem("product-info")),
        count: count,
    }
    console.log(JSON.parse(localStorage.getItem("product-info")))
    let productsArray = [product];
    
    if(localStorage.getItem("cart-shopping")){
        // Get cart products from localStorage as an array
        productsArray = JSON.parse(localStorage.getItem("cart-shopping"));

        for(item of productsArray){
            if(item.code === product.code){
                item.count = Number(item.count) + Number(product.count);
                isNewProduct = false;
            }
        }
        
        if(isNewProduct){
            productsArray.unshift(product);
        }
    }
    
    localStorage.setItem("cart-shopping", JSON.stringify(productsArray));
    updateCartCounter();
    cart_shopping_icon.classList.add("show")
}

// Function to show the shopping bill with product details
// Displays the bill by adding the products stored in localStorage and updating the total price
function displayCartDetails(){
    document.querySelector("body").classList.add("overflow")
    shopping_page.classList.add("show");
    overlay.classList.add("show");
    let total = 0;
    // Get cart products from localStorage as an array
    if(localStorage.getItem("cart-shopping")){
        productsArray = JSON.parse(localStorage.getItem("cart-shopping"));
        shop_carts.innerHTML = "";

        if(productsArray.length >= 1) {
            document.getElementById("container_shopping").classList.remove("empty");
            document.getElementById("layer_empty").classList.remove("show");
        }

        for(item of productsArray){
            total += parseFloat(item.price) * item.count;
            let price = parseFloat(item.price) * item.count;
            
            shop_carts.innerHTML += `
            <div class="cart-item">
                <div class="item-image">
                    <img src="${item.src}" alt="cart item">
                </div>
                <div class="item-info">
                    <a>${item.name}</a>
                    <input type="number" onclick="updateQuantity(${item.code})" id="number_input_${item.code}" value="${item.count}" min="1">
                    <p>$${price.toLocaleString("en-US")}USD</p>
                    <i class="fa-regular fa-trash-can trash" onclick="removeProduct(${item.code})" id="remove_product_${item.code}"></i>
                </div>
            </div>
            `;
        }
        totalPrice.innerHTML =`Total: $${total.toLocaleString("en-US")}USD`;
    }
}

// Calculates the total number of items in the shopping cart
function updateCartCounter(){
    if(localStorage.getItem("cart-shopping")){
        // Get cart products from localStorage as an array
        productsArray = JSON.parse(localStorage.getItem("cart-shopping"));
        let counter = 0;
        for(item of productsArray){
            counter += Number(item.count);
        }
        // console.log(counter)
        counter > 9 ? cart_shopping_icon.dataset.count = "9+"
                    : cart_shopping_icon.dataset.count = counter;
        cart_shopping_icon.classList.add("show");
    }
}

// Updates the quantity of a product in the shopping cart
function updateQuantity(itemCode){
    // Get cart products from localStorage as an array
    productsArray = JSON.parse(localStorage.getItem("cart-shopping"));
    let number_input = document.getElementById(`number_input_${itemCode}`).value;

    for(product of productsArray){
        if(product.code == itemCode){
            product.count = number_input;
        }
    }

    localStorage.setItem("cart-shopping", JSON.stringify(productsArray));
    displayCartDetails()
    updateCartCounter()
}

// Removes a product from the shopping cart
function removeProduct(itemCode){
    // Get cart products from localStorage as an array
    productsArray = JSON.parse(localStorage.getItem("cart-shopping"));
    // if(localStorage.getItem("cart-shopping")){
    let arr = productsArray.filter(product => {
        if(product.code != itemCode){
            return product;
        }
    })

    productsArray = arr;
    localStorage.setItem("cart-shopping", JSON.stringify(productsArray));

    if(productsArray.length == 0){
        localStorage.removeItem("cart-shopping");
        cart_shopping_icon.classList.remove("show");
        let change_height = document.getElementById("change-height");
        change_height.classList.add("change-height")
        document.getElementById("container_shopping").classList.add("empty");
        document.getElementById("layer_empty").classList.add("show");
    }

    displayCartDetails()
    updateCartCounter()
};

updateCartCounter()