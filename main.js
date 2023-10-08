const shoppingCart = [
    {
        id: 1,
        name: "Hp Laptop",
        Price: 30000,
        quantity: 1,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661"
    },
    {
        id: 2,
        name: "Lenovo",
        Price: 20000,
        quantity: 1,
        image: "https://www.lenovo.com/medias/lenovo-thinkpad-e16-16-intel-pdp-hero.png?context=bWFzdGVyfHJvb3R8Mjg2MzM3fGltYWdlL3BuZ3xoYTgvaDY0LzE3MzEyNjMxMDI5NzkwLnBuZ3xlMTJkYTA2NjU0YTQ1MmNjN2NiYjRlMmJkYzgyYzFhZjYzMDlmNmYwY2Y1ZTBiNTg0MGVhYzM4MTRkZGUzZTRk"
    },
    {
        id: 3,
        name: "Mcbook Pro",
        Price: 90000,
        quantity: 1,
        image: "https://www.apple.com/newsroom/images/product/imac/standard/Apple_imac-magickeyboardnum-magicmouse2-macos-wallpaper_08042020.jpg.og.jpg?202308281648"
    },
    {
        id: 4,
        name: "asus",
        Price: 60000,
        quantity: 1,
        image: "https://thenationonlineng.net/wp-content/uploads/2021/04/asus.jpg"
    },
]
//select shopping cart container
const shoppingContainer = document.getElementById("checkoutCon");

function deleteProduct(event){
    let id = event.target.id;
    id = parseInt(id);

    const Product = shoppingCart.find((product)=> product.id === id);
    const index = shoppingCart.indexOf(product);
    shoppingCart.splice(index, 1)
    shoppingContainer.innerHTML = "";
    displayShoppingCart();
}

function handleIncrement(event){
    const id = parseInt(event.target.id);
    const product = shoppingCart.find((product)=> product.id === id);
    let quantityTag = document.getElementById(product.name);
    product.quantity = product.quantity + 1;
    totality()

}
function handleDecrement(event) {
    const id = parseInt(event.target.id);
    const product = shoppingCart.find((product)=> product.id === id);
    let quantityTag = document.getElementById(product.name);
    product.quantity = (product.quantity > 1) ? product.quantity - 1 : product.quantity;
    quantityTag.innerHTML = product.quantity;
    totality()
}

function totality(){
    let totalTag = document.getElementById("totalPrice");
    let totalPrice = 0;
    // loop through product obj and get quantity/price
    shoppingCart.forEach((product) => {
        const price = product.price;
        const quantity = product.quantity;
        const productPrice = price * quantity;
        totalPrice += productPrice
    });
    totalTag.innerHTML = `N${totalPrice}`
}

function displayShoppingCart(){
//console.log(shoppingContainer)
//loop through shopping cart items
        for (product of shoppingCart) {
            const productContainer = document.createElement("div");
            productContainer.setAttribute('class','card');
            // check product image
            const productImage = document.createElement("img");
            productImage.setAttribute("src", product.Image);
            productImage.setAttribute("alt", product.name);

            // add product image to product container
            productContainer.appendChild(productImage);

            // add productContainer to shopping container
            shoppingContainer.appendChild(productContainer);

            // create product info container
            const productInfo = document.createElement("div");
            productInfo.setAttribute("class", "productInfo");
            const topCon = document.createElement("div");
            topCon.setAttribute("class", "topCon");

            //create product name and delete btn
            const productName = document.createElement("h3");
            productName.innerHTML = product.name;
            const deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("id", product.id); 
            deleteBtn.innerHTML = "Delete";
            //add event listener to delete btn
            deleteBtn.addEventListener("click", (event) => deleteProduct(event));

            // add product name and delete btn to topCon
            topCon.appendChild(productName);
            topCon.appendChild(deleteBtn);

            // add topCon ro product into container
            productInfo.appendChild(topCon);

            //add product info container to product container
            productContainer.appendChild(productInfo);

            //create product price 
            const productPrice = document.createElement("p");
            productPrice.innerHTML = `Price: ${product.Price}`;

            //add product price to product info container
            productInfo.appendChild(productPrice);

            // create btn container
            const btnContainer = document.createElement("div")
            btnContainer.setAttribute("class", "btnCon");

            // create the increment and decrement button
            const increment =  document.createElement("button");
            increment.innerHTML = "+";
            increment.setAttribute("id", product.id);
            increment.addEventListener("click", (event) => handleIncrement(event))
            
            const decrement = document.createElement("button");
            decrement.innerHTML = "-"; 
            decrement.setAttribute("id", product.id)
            decrement.addEventListener("click", (event) => handleIncrement(event))

             //create quality display
            const quantity = document.createElement("p")
            quantity.innerHTML = product.quantity;
            quantity.setAttribute("id", product.name);
            
            // increment.addEventListener("click", function(e){
            //     if (product.quantity += 1) {
            //         product.quantity +=1 
            //     quantity.innerHtml = product.quantity
            //         productPrice.innerHtml = `price: ${product.price * product.quantity}`;
            //     }
            // })

            // decrement.addEventListener("click", function(e){
            //     if (product.quantity >=1) {
            //         product.quantity -=1 
            //         quantity.innerHtml = product.quantity
            //         productPrice.innerHtml = `price: ${product.price * product.quantity}`;
            //     } 
            // })

            // add increment, decrement and quantity to btn container
            btnContainer.appendChild(increment)
            btnContainer.appendChild(quantity)
            btnContainer.appendChild(decrement)

            // add btn container to productInfo container
            productInfo.appendChild(btnContainer)

            // add productContainer to shopping container
            shoppingContainer.appendChild(productContainer)
            // add productContainer to shopping container
            // shoppingContainer.appendChild(productContainer);
        }

}
displayShoppingCart()

 