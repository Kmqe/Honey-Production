const faq_item = document.querySelectorAll(".faq-item");
const toggle_ele = document.querySelectorAll(".toggle-ele");
const faq_answer = document.querySelectorAll(".faq-answer");
const colse_pop_up = document.getElementById("close");
const input_request = document.getElementById("input_request");

faq_item.forEach((item, index) => {

    item.addEventListener("click", () => {
        faq_item.forEach((otherItem, otherIndex) => {
            if (otherIndex !== index) {
                toggle_ele[otherIndex].classList.remove("expanded");
                faq_answer[otherIndex].classList.remove("show");
            }
        });
        toggle_ele[index].classList.toggle("expanded");
        faq_answer[index].classList.toggle("show");
    });

});

let products = document.querySelectorAll(".store .card-item");
// localStorage.clear();
function storeProductData(product){
    let productObject = {
        src: product.dataset.src,
        name: product.dataset.name,
        price: product.dataset.price,
        code: product.dataset.code,
        weight: product.dataset.weight,
    }
    localStorage.setItem("product-info", JSON.stringify(productObject))
}

input_request.addEventListener("click", (e) => {
    e.preventDefault();
    let inputsRequired = document.querySelectorAll(".required");
    inputsRequired = Array.from(inputsRequired);
    let isInputFull = inputsRequired.every(input => {
        return input.value.length > 0;
    })
    if(isInputFull){
        document.getElementById("pop_up_contact").style.display = "flex";
        document.getElementById("pop_up_shadow").style.display = "block";
        let allInputs = document.querySelectorAll(".input");
        allInputs.forEach((input) => {
            input.value = "";
        })
    }
})

pop_up_contact.addEventListener("click", () => {
    document.getElementById("pop_up_contact").style.display = "none";
    document.getElementById("pop_up_shadow").style.display = "none";
})