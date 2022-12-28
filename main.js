const menuEmail = document.querySelector(".navbar-email");
const hamMenu = document.querySelector(".menu");
const cartMenu = document.querySelector(".navbar-shopping-cart");
const deskMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer= document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const productList = [];

menuEmail.addEventListener('click', openMenu);
hamMenu.addEventListener('click',toggleMobileMenu);
cartMenu.addEventListener('click', toggleProductDetail);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function openMenu(){
  const deskMenuClosed = deskMenu.classList.contains("inactive");
  if(!deskMenuClosed){
      deskMenu.classList.add("inactive");
  }else{
    shoppingCartContainer.classList.add("inactive");
    closeProductDetailAside();
    deskMenu.classList.toggle('inactive');
  }
}

function toggleMobileMenu(){
  const asideProductClosed = shoppingCartContainer.classList.contains("inactive");

  if(!asideProductClosed){
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail(){
  const mobileMenuClosed = mobileMenu.classList.contains("inactive");

  if(!mobileMenuClosed){
    mobileMenu.classList.add("inactive");
  }
  deskMenu.classList.add("inactive");
  shoppingCartContainer.classList.toggle("inactive");
  
  const productDetailClosed = productDetailContainer.classList.contains("inactive");

  if(!productDetailClosed){
    productDetailContainer.classList.add("inactive");
  }
}

function openProductDetailAside(){
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(){
  deskMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

productList.push({
  name : "Bike",
  price : 12000,
  img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
  name : "TV",
  price : 220000,
  img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
  name : "Computer",
  price : 160000,
  img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

for(product of productList){
  const cardsContainer = document.querySelector(".cards-container");
  const productCard = document.createElement("div");
  const productImg = document.createElement("img");
  const productInfo = document.createElement("div");
  const productInfoDiv = document.createElement("div");
  const productPrice = document.createElement("p");
  const productName = document.createElement("p");
  const productInfoFigure = document.createElement("figure");
  const productCardImg = document.createElement("img");
  const cartImg = "./icons/bt_add_to_cart.svg";

  productCard.classList.add("product-card");
  productImg.setAttribute("src", product.img);
  productImg.addEventListener('click', openProductDetailAside);
  productInfo.classList.add("product-info");
  productPrice.innerText = '$'+ product.price;
  productName.innerText = product.name;
  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);
  productCardImg.setAttribute("src", cartImg);
  productInfoFigure.appendChild(productCardImg);
  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);
  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);
  cardsContainer.appendChild(productCard);
}