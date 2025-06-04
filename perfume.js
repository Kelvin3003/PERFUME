// Description: This script handles the functionality of the perfume store's cart icon.
// It toggles the visibility of the cart when the cart icon is clicked.

let cartIcon = document.querySelector(".cart-icon")
let cartDetails = document.querySelector(".cart-details")
cartIcon.addEventListener('click', () => {   
    if (cartDetails.style.display === "none") {
        cartDetails.style.display = "block"
    } else {
        cartDetails.style.display = "none"
    }
})

// This code handles the functionality of a hamburger menu icon.
// It toggles the visibility of the dropdown menu when the hamburger icon is clicked.
let harmburgerDropDown = document.querySelector(".harmburger-menu img")
let dropDownMenu = document.querySelector(".query-nav")
harmburgerDropDown.addEventListener('click', () => {
    if (dropDownMenu.style.display === "none") {
        dropDownMenu.style.display = "block"
    } else {
        dropDownMenu.style.display = "none"
    }
})