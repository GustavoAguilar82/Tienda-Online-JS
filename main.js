let navBarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let burgerIcon = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
let productDetail = document.querySelector(".product-detail");
let cardsContainer = document.querySelector(".cards-container")




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
let products = [];
products.push(
    {
        name: "bicibleta", price: 150, img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    }
)
products.push(
    {
        name: "Pantalla", price: 280, img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    }
)
products.push(
    {
        name: "Espada", price: 350, img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    }
)

function renderProductsFromArray(array){
    for(product of products){

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src",product.img);
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productInfoDiv = document.createElement("div");
    
        const price = document.createElement("p");
        price.innerText = `$ ${ product.price }`
       
        const name = document.createElement("p");
        name.innerText = product.name;
    
        const figure = document.createElement("figure");
    
        const iconImg = document.createElement("img");
        iconImg.setAttribute("src","./icons/bt_add_to_cart.svg");
    
        figure.append(iconImg);
        productInfoDiv.append(price, name);
        productInfo.append(productInfoDiv,figure);
        productCard.append(productImg,productInfo);
        cardsContainer.append(productCard);
    }
}
renderProductsFromArray(products);




