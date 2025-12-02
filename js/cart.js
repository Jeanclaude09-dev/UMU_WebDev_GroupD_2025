// Shopping Cart Management
// This file handles all cart operations across the website

// Update cart count badge on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});

// Get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Update cart count badge in navigation
function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartCountElements = document.querySelectorAll("#cart-count");
  cartCountElements.forEach((element) => {
    element.textContent = totalItems;

    // Add animation when count changes
    element.style.transform = "scale(1.2)";
    setTimeout(() => {
      element.style.transform = "scale(1)";
    }, 200);
  });
}

// Add item to cart
function addToCartFromPage(productId) {
  // This function is called from product pages
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  let cart = getCart();
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart(cart);
  showNotification(`${product.name} added to cart!`, "success");
}

// Remove item from cart
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
}

// Update item quantity
function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }

  let cart = getCart();
  const item = cart.find((item) => item.id === productId);

  if (item) {
    item.quantity = newQuantity;
    saveCart(cart);
  }
}

// Clear entire cart
function clearCart() {
  localStorage.removeItem("cart");
  updateCartCount();
}

// Calculate cart totals
function calculateTotals() {
  const cart = getCart();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 5.0 : 0;
  const taxRate = 0.08; // 8% tax
  const taxes = subtotal * taxRate;
  const total = subtotal + deliveryFee + taxes;

  return {
    subtotal: subtotal.toFixed(2),
    deliveryFee: deliveryFee.toFixed(2),
    taxes: taxes.toFixed(2),
    total: total.toFixed(2),
  };
}

// Show notification toast
function showNotification(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity ${
    type === "success" ? "bg-secondary" : "bg-primary"
  } text-white`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
