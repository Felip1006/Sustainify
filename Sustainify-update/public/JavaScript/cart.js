 if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
 } else {
    ready()
 }

 function ready() {
    let removeCartItemButtons = document.getElementsByClassName('delete-btn')
    console.log(removeCartItemButtons)
    
    for(let i = 0; i < removeCartItemButtons.length; i++){
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }  

    let quantityInputs = document.getElementsByClassName('item-quantity')
    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButtons = document.getElementsByClassName('add-to-cart-btn')
    for(let i = 0; i < addToCartButtons.length; i++){
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    let placeOrderButton = document.getElementsByClassName('place-order-btn')[0];
    if (placeOrderButton) {
        placeOrderButton.addEventListener('click', function(event) {
            showOrderPlacedNotification();
        });
    }
 }

 function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
 } 

 function quantityChanged(event) {
    let input = event.target
    if(isNan(input.value) || input.value <= 0){
         input.value = 1
    }
    updateCartTotal()
 }

 function addToCartClicked(event) {
    console.log("Add to Cart button clicked");
    let button = event.target;
    let item = button.parentElement.parentElement;
    let quantityInput = item.getElementsByClassName('quantity-selector')[0];
    let quantity = quantityInput.value;
    let itemName = item.getElementsByClassName('item-name')[0].innerText;
    let itemPrice = item.getElementsByClassName('item-price')[0].innerText;

    console.log(`Item Name: ${itemName}, Item Price: ${itemPrice}, Quantity: ${quantity}`);

    // Add the item to the cart
    addItemToCart(itemName, itemPrice, quantity);
}

 function showOrderPlacedNotification() {
    console.log("Showing order placed notification");
    const notification = document.createElement('div');
    notification.innerText = 'Order placed';
    notification.className = 'order-notification';
    
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = '#0F2A1D';
    notification.style.color = '#fff';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
 }

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row') 
    let total = 0
    for(let i = 0; i < cartRows.length; i++){
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-item-price')[0]
        let quantityElement = cartRow.getElementsByClassName('item-quantity')[0]
        
        let price = parseFloat(priceElement.innerText.replace('₱', ''))
        let quantity = parseFloat(quantityElement.innerText.replace('Quantity: ', ''))
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total-cost')[0].innerText = '₱' + total
}

// Function to add item to cart (you need to implement this)
function addItemToCart(name, price, quantity) {
    // Create a new cart item element
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <img src="images/Shop Items/${name}.png" alt="" class="cart-item-image">
        <span class="cart-item-name">${name}</span>
        <div class="update-and-delete-btns">
            <button type="button" class="update-btn">Update</button>
            <button type="button" class="delete-btn">Delete</button>
        </div>
        <span class="cart-item-price">₱${price}</span>
        <div class="cart-item-quantity">
            <span class="item-quantity">Quantity: ${quantity}</span>
        </div>
    `;

    // Append the new cart item to the cart items container
    const cartItemsContainer = document.getElementsByClassName('cart-items')[0];
    cartItemsContainer.appendChild(cartItem);

    // Update the cart total
    updateCartTotal();
}
