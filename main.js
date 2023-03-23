let navBarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let burgerIcon = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
let productDetail = document.querySelector(".product-detail");





navBarEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");

    const isProductDetailOpen = !productDetail.classList.contains("inactive")  
    if(isProductDetailOpen){
        productDetail.classList.add("inactive")
    }
};

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");

    const isProductDetailOpen = !productDetail.classList.contains("inactive")  
    if(isProductDetailOpen){
        productDetail.classList.add("inactive")
    }
}
function toggleProductDetail(){
    productDetail.classList.toggle("inactive");

    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive")  
    if(isMobileMenuOpen){
        mobileMenu.classList.add("inactive")
    }
    const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive")  
    if(isDesktopMenuOpen){
        desktopMenu.classList.add("inactive")
    }
}