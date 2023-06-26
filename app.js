// Products details
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 },
    { id: 6, name: 'Product 6', price: 60 },
    { id: 7, name: 'Product 7', price: 70 },
    { id: 8, name: 'Product 8', price: 80 },
  ];

  // Shopping cart 
  const cart = [];

  // Add to Cart 
  const addToCart = (productId, quantity = 1) => {
    const product = products.find(item => item.id === productId);
    if (product) {
      const cartItem = cart.find(item => item.id === productId);
      if (cartItem) {
        cartItem.quantity += quantity;
      } else {
        cart.push({ ...product, quantity });
      }
    }
    displayCartItems();
  };

  // Display Cart Items
  const displayCartItems = () => {
    const cartItemsElement = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');

    cartItemsElement.innerHTML = '';
    totalAmountElement.textContent = '';

    let totalAmount = 0;

    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${item.name} - Quantity: ${item.quantity} - Price: $${item.price} - Total: $${item.price * item.quantity}</span>
      `;
      cartItemsElement.appendChild(listItem);
      totalAmount += item.price * item.quantity;
    });

    if (cart.length === 0) {
      const emptyCart = document.createElement('li');
      emptyCart.textContent = 'No items in the cart.';
      cartItemsElement.appendChild(emptyCart);
    }

    totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
  };

  // Clear Cart
  const clearCart = () => {
    cart.length = 0;
    displayCartItems();
  };

  // Attach event listeners
  document.addEventListener('DOMContentLoaded', () => {
    const productListElement = document.getElementById('product-list');
    const clearCartButton = document.getElementById('clear-cart');

    products.forEach(product => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${product.name} - Price: $${product.price}</span>
        <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
      `;
      productListElement.appendChild(listItem);
    });

    clearCartButton.addEventListener('click', clearCart);
  });