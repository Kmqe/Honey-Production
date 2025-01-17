if(localStorage.getItem("product-info")){
    let product = JSON.parse(localStorage.getItem("product-info"))
    displayProductDetails(product)
}

// Dynamically renders the product's details, such as name, price, and description, inside the container element.
function displayProductDetails(product){
    let container_product = document.getElementById("container_product");
    container_product.innerHTML = `
    <div class="image-container">
                <img src="${product.src}" alt="">
            </div>
            <div class="product-info">
                <p class="product-available">In stock</p>
                <h1 class="title-product" id="title_product">${product.name}</h1>
                <p class="product-code" id="product_code">Product code ${product.code}</p>
                <strong class="product-price" id="product_price">$${product.price} USD</strong>
                <hr>

                <div class="quantity">
                    <input type="number" class="input-count" name="" id="product_count" value="1" min="1">
                    <button class="btn-primary" onclick="addProductToCart()" id="addToCart">Add to cart</button>
                </div>

                <p class="description">Description</p>

                <hr>

                <p class="description-text">This honey is harvested from sunny Californian meadows. It features mild taste and intense aroma. Great for your breakfasts!</p>
                <p class="weight">Weight: ${product.weight}g</p>
    `
}