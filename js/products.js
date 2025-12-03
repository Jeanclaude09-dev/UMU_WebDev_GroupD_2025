const productsContainer = document.getElementById("products-container");

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});

function renderProducts() {
  if (!productsContainer) return;

  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className =
    "flex flex-col gap-3 rounded-xl overflow-hidden bg-white dark:bg-black/20 shadow-sm border border-neutral-100 dark:border-white/10 hover:shadow-md transition-shadow";

  const dietaryBadges = product.dietary
    .map(
      (diet) =>
        `<span class="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">${diet}</span>`
    )
    .join("");

  card.innerHTML = `
    <img 
      src="${product.image}" 
      alt="${product.name}"
      class="w-full h-48 object-cover"
    />
    <div class="p-4 flex flex-col gap-3 flex-1">
      <div class="flex flex-wrap gap-2">
        ${dietaryBadges}
      </div>
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">
        ${product.name}
      </h3>
      <p class="text-sm text-neutral-600 dark:text-neutral-400 flex-1">
        ${product.description}
      </p>
      <div class="flex items-center justify-between mt-auto">
        <span class="text-xl font-bold text-primary">
          $${product.price.toFixed(2)}
        </span>
        <button 
          onclick="addToCart(${product.id})"
          class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  `;

  return card;
}

/*
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showAddToCartFeedback(product.name);
}

function showAddToCartFeedback(productName) {
  const toast = document.createElement("div");
  toast.className =
    "fixed bottom-4 right-4 bg-secondary text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-up";
  toast.textContent = `${productName} added to cart!`;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s";
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}*/
