const cart = {
    items: [],
    total: 0
};

function addToCart(productName, price) {
    cart.items.push({ name: productName, price: price });
    cart.total += price;
    updateCartDisplay();
}

function removeFromCart(index) {
    const removedItem = cart.items.splice(index, 1)[0];
    cart.total -= removedItem.price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';

    cart.items.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `${item.name} - ₨${item.price.toFixed(2)}
                             <span class="remove-button" onclick="removeFromCart(${index})">Remove</span>`;
        cartItemsElement.appendChild(cartItem);
    });
    
    cartTotalElement.textContent = `Total: ₨${cart.total.toFixed(2)}`;
}
