document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const CART_COUNT_KEY = 'cartCount';
    const DARK_MODE_KEY = 'darkMode';

    function setDarkMode(isDarkMode) {
        if (isDarkMode) {
            body.classList.remove('light-mode');
            localStorage.setItem(DARK_MODE_KEY, 'dark');
        } else {
            body.classList.add('light-mode');
            localStorage.setItem(DARK_MODE_KEY, 'light');
        }
    }

    const savedMode = localStorage.getItem(DARK_MODE_KEY);
    if (savedMode === 'light') {
        setDarkMode(false);
    } else if (savedMode === 'dark') {
        setDarkMode(true);
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
    }

    darkModeToggle.addEventListener('click', () => {
        const isCurrentlyLight = body.classList.contains('light-mode');
        setDarkMode(isCurrentlyLight); 
    });

    const cartCountElement = document.getElementById('cart-count');
    
    function updateCartCountDisplay() {
        const count = localStorage.getItem(CART_COUNT_KEY) || 0;
        cartCountElement.textContent = count;
    }

    updateCartCountDisplay();

    window.addToCart = function() {
        let count = parseInt(localStorage.getItem(CART_COUNT_KEY) || 0);
        count += 1;
        localStorage.setItem(CART_COUNT_KEY, count);
        updateCartCountDisplay();
        alert('Item added to cart!');
    };
});
