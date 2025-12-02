// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    
    // 1. Initial Cart Count
    // In a real application, this value would be fetched from a server or local storage.
    // We'll start it at a random number for demonstration.
    let cartCount = localStorage.getItem('nourishCartCount') || 2; 

    const updateCartCount = (count) => {
        cartCountElement.textContent = count;
        localStorage.setItem('nourishCartCount', count);
    };

    updateCartCount(cartCount);

    // 2. Simple example of an interactive feature: logging a click
    const orderNowButton = document.querySelector('header a[href="products.html"]');
    if (orderNowButton) {
        orderNowButton.addEventListener('click', (e) => {
            console.log('User clicked "Order Now" - redirecting to menu.');
            // In a real app, you might track this click with analytics here.
        });
    }

    // You could add features like:
    // - Dark mode toggle logic (if you want an actual toggle button)
    // - Simple form validation
    // - Image carousel/slider for testimonials
});