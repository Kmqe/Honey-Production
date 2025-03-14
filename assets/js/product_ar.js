if(localStorage.getItem("cartIsEmpty") || localStorage.getItem("order")){
    localStorage.removeItem("cart-shopping");
    localStorage.removeItem("customer_info");
    localStorage.removeItem("cartIsEmpty");
    localStorage.removeItem("order");
}

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
                <p class="product-available">متوفر في المخزون</p>
                <h1 class="title-product" id="title_product">${product.name}</h1>
                <p class="product-code" id="product_code">كود المنتج ${product.code}</p>
                <strong class="product-price" id="product_price">$${product.price} USD</strong>
                <hr>

                <div class="quantity">
                    <input type="number" class="input-count" name="" id="product_count" value="1" min="1">
                    <button class="btn-primary" onclick="addProductToCart()" id="addToCart">اضف إلى عربة التسوق</button>
                </div>

                <p class="description">الوصف</p>

                <hr>

                <p class="description-text">يتم حصاد هذا العسل من المروج المشمسة في كاليفورنيا. يتميز بطعمه المعتدل ورائحته القوية. رائع لوجبات الإفطار!</p>
                <p class="weight">الوزن: ${product.weight} قرام </p>
    `
}

