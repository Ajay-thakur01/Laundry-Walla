let services = [
    { serviceName: "Dry Cleaning", serviceCost: 200 },
    { serviceName: "Wash & Fold", serviceCost: 100 },
    { serviceName: "Ironing", serviceCost: 30 },
    { serviceName: "Stain Removal", serviceCost: 500 },
    { serviceName: "Leather & Suede Cleaning", serviceCost: 999 },
    { serviceName: "Wedding Dress Cleaning", serviceCost: 2800 }
];

let addBtn = document.querySelectorAll(".add-btn");
let emptyCart = document.querySelector(".empty-cart");
let emptyCartServices = document.querySelector(".empty-cart-services");
let amount = document.getElementById("amount");
let confirmation = document.querySelector(".confirmation");
let bookBtn = document.querySelector(".book-btn");
let bookingForm = document.querySelector(".book-box form");
let newsletterForm = document.querySelector(".newsletter-form");
let newsletterConfirmation = document.querySelector(".newsconfirmation");


let cartItems = [];
const cartUpdate = () => {
    emptyCartServices.innerHTML = "";
    if(cartItems.length === 0 ){
        emptyCart.style.display = "block"
        amount.innerHTML = "₹0.00";
        bookBtn.style.backgroundColor = "#3157d558";
        return;
    }
        emptyCart.style.display = "none"
        bookBtn.style.backgroundColor = "#3157d5";

    let total = 0;
    cartItems.forEach ((item,index) =>{
        const li = document.createElement("li");
        li.style.display = "grid";
        li.style.gridTemplateColumns = "50px 1fr 70px";
        li.style.padding = "10px";
        li.style.backgroundColor = "rgb(167, 194, 249)";
        li.style.borderBottom =" 1px solid rgb(227, 227, 227)";
        li.style.fontSize = "11px";
        li.style.fontWeight = 700;
        li.innerHTML = `
                <span>${index + 1}</span>
                <span>${item.serviceName}</span>
                <span>₹${item.serviceCost}</span>
            `;
        emptyCartServices.appendChild(li);
            total += item.serviceCost;
    });
    amount.innerHTML = `₹${total}`;
}


addBtn.forEach((button) => {

    button.addEventListener("click", () => {

        const serviceName = button.dataset.service;
        const serviceCost = Number(button.dataset.price);

        if (button.classList.contains("added")) {

            cartItems = cartItems.filter((item) => {
                return item.serviceName !== serviceName;
            });

            button.classList.remove("added");
            button.textContent = "Add Item";

        } else {

            // Add item to cart
            cartItems.push({
                serviceName: serviceName,
                serviceCost: serviceCost
            });

            button.classList.add("added");
            button.textContent = "Remove Item";
        }

        cartUpdate();
    });
});


bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (cartItems.length === 0){
        alert("Please add at least one service to your cart before booking.");
        return;
    }else{
        confirmation.style.display = "block"
        bookingForm.reset();
        addBtn.forEach((button) => {
        button.classList.remove("added");
        button.textContent = "Add Item";
    });
        cartItems = [];
        cartUpdate();
        setTimeout( () => {
            confirmation.style.display = "none"
        }, 4000);
    }
    addBtn.classList.remove("added");
})

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterConfirmation.style.display = "block";
    newsletterForm.reset();
    setTimeout(() => {
        newsletterConfirmation.style.display = "none";
    }, 4000);
});
