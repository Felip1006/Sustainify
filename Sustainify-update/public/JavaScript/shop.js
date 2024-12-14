    document.addEventListener("click", Alocasia_WentiiPlant);

    function Alocasia_WentiiPlant() {
        document.getElementById('alocasia-wentii-plant').style
    }

    // New function to handle adding items to the cart
    function addToCart(itemId) {
        const item = document.getElementById(itemId);
        const itemName = item.querySelector('.item-name').innerText;
        const itemPrice = item.querySelector('.item-price').innerText;
        const itemQuantity = item.querySelector('.quantity-selector').value;

        const cartItem = {
            name: itemName,
            price: itemPrice,
            quantity: itemQuantity
        };

        // Get existing cart items from local storage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.parentElement.parentElement.id; // Get the item ID
            addToCart(itemId);
        });
    });