// Cart Page Specific Functionality
// This file handles cart page display and interactions

document.addEventListener("DOMContentLoaded", () => {
  renderCartPage();
  setupCartPageListeners();
});

// Render cart items on the cart page
function renderCartPage() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const removeAllBtn = document.getElementById("remove-all");

  if (!cartItemsContainer) return;

  // Clear container
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    emptyCartMessage?.classList.remove("hidden");
    removeAllBtn?.classList.add("hidden");
  } else {
    emptyCartMessage?.classList.add("hidden");
    removeAllBtn?.classList.remove("hidden");

    cart.forEach((item) => {
      const cartItem = createCartItemElement(item);
      cartItemsContainer.appendChild(cartItem);
    });
  }

  updateCartSummary();
}

// Create cart item HTML element
function createCartItemElement(item) {
  const itemDiv = document.createElement("div");
  itemDiv.className =
    "bg-white dark:bg-black/20 rounded-xl p-4 border border-neutral-100 dark:border-white/10 flex gap-4";
  itemDiv.setAttribute("data-product-id", item.id);

  itemDiv.innerHTML = `
    <div class="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-neutral-100 dark:bg-white/5">
      <img src="${item.image}" alt="${
    item.name
  }" class="w-full h-full object-cover"/>
    </div>
    <div class="flex-1 flex flex-col gap-2">
      <h3 class="font-bold text-lg">${item.name}</h3>
      <p class="text-sm text-secondary font-bold">$${item.price.toFixed(2)}</p>
    </div>
    <div class="flex flex-col items-end gap-2">
      <button onclick="removeItemFromCart(${
        item.id
      })" class="text-text-light/50 dark:text-text-dark/50 hover:text-primary transition-colors">
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="flex items-center gap-2 bg-neutral-100 dark:bg-white/5 rounded-lg">
        <button onclick="decrementQuantity(${
          item.id
        })" class="w-8 h-8 flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-white/10 rounded-l-lg transition-colors">
          <span class="material-symbols-outlined text-sm">remove</span>
        </button>
        <span class="w-10 text-center font-medium">${item.quantity}</span>
        <button onclick="incrementQuantity(${
          item.id
        })" class="w-8 h-8 flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-white/10 rounded-r-lg transition-colors">
          <span class="material-symbols-outlined text-sm">add</span>
        </button>
      </div>
    </div>
  `;

  return itemDiv;
}

// Update order summary
function updateCartSummary() {
  const totals = calculateTotals();

  const subtotalElement = document.getElementById("subtotal");
  const deliveryFeeElement = document.getElementById("delivery-fee");
  const taxesElement = document.getElementById("taxes");
  const totalElement = document.getElementById("total");

  if (subtotalElement) subtotalElement.textContent = `$${totals.subtotal}`;
  if (deliveryFeeElement)
    deliveryFeeElement.textContent = `$${totals.deliveryFee}`;
  if (taxesElement) taxesElement.textContent = `$${totals.taxes}`;
  if (totalElement) totalElement.textContent = `$${totals.total}`;
}

// Increment item quantity
function incrementQuantity(productId) {
  let cart = getCart();
  const item = cart.find((item) => item.id === productId);

  if (item) {
    item.quantity += 1;
    saveCart(cart);
    renderCartPage();
  }
}

// Decrement item quantity
function decrementQuantity(productId) {
  let cart = getCart();
  const item = cart.find((item) => item.id === productId);

  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      saveCart(cart);
      renderCartPage();
    } else {
      // If quantity is 1, remove item with confirmation
      removeItemFromCart(productId);
    }
  }
}

// Remove item from cart
function removeItemFromCart(productId) {
  let cart = getCart();
  const item = cart.find((item) => item.id === productId);

  if (item) {
    cart = cart.filter((item) => item.id !== productId);
    saveCart(cart);
    renderCartPage();
    showNotification(`${item.name} removed from cart`, "success");
  }
}

// Setup cart page event listeners
function setupCartPageListeners() {
  // Remove all items
  const removeAllBtn = document.getElementById("remove-all");
  removeAllBtn?.addEventListener("click", () => {
    if (confirm("Are you sure you want to remove all items from your cart?")) {
      clearCart();
      renderCartPage();
      showNotification("Cart cleared", "success");
    }
  });

  // Apply promo code
  const applyPromoBtn = document.getElementById("apply-promo");
  applyPromoBtn?.addEventListener("click", applyPromoCode);

  // Checkout button
  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn?.addEventListener("click", handleCheckout);
}

// Apply promo code
function applyPromoCode() {
  const promoInput = document.getElementById("promo-code");
  const promoMessage = document.getElementById("promo-message");
  const promoCode = promoInput?.value.trim().toUpperCase();

  if (!promoCode) {
    showPromoMessage("Please enter a promo code", "error");
    return;
  }

  // Demo promo codes
  const validCodes = {
    NOURISH10: 0.1, // 10% off
    FRESH20: 0.2, // 20% off
    WELCOME: 0.15, // 15% off
  };

  if (validCodes[promoCode]) {
    const discount = validCodes[promoCode];
    showPromoMessage(`Promo code applied! ${discount * 100}% off`, "success");

    // In a real app, you'd apply this discount to the total
    // For now, we'll just show the message
  } else {
    showPromoMessage("Invalid promo code", "error");
  }
}

// Show promo code message
function showPromoMessage(message, type) {
  const promoMessage = document.getElementById("promo-message");
  if (!promoMessage) return;

  promoMessage.textContent = message;
  promoMessage.className = `mt-2 text-xs ${
    type === "success" ? "text-secondary" : "text-primary"
  }`;
  promoMessage.classList.remove("hidden");

  setTimeout(() => {
    promoMessage.classList.add("hidden");
  }, 3000);
}

// Handle checkout
function handleCheckout() {
  const cart = getCart();

  if (cart.length === 0) {
    showNotification("Your cart is empty", "error");
    return;
  }

  // In a real app, this would redirect to a checkout page
  // For this demo, we'll just show a success message
  showNotification("Checkout feature coming soon! This is a demo.", "success");

  // Optionally clear cart after "checkout"
  // clearCart();
  // renderCartPage();
}
