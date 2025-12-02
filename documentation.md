# Nourish - Healthy Food Delivery Website

A modern, responsive website for a healthy food delivery service built with HTML, Tailwind CSS, and vanilla JavaScript.

## 📁 Project Structure

```
nourish/
├── index.html          # Home page
├── products.html       # Menu/Products page with filters
├── about.html          # About Us page
├── contact.html        # Contact page
├── cart.html           # Shopping cart page
├── js/
│   ├── products-data.js    # Product database
│   ├── products.js         # Product filtering & display logic
│   ├── cart.js             # Cart management (global)
│   ├── cart-page.js        # Cart page specific functionality
│   └── contact.js          # Contact form handling
└── README.md           # This file
```

## 🚀 Features

### Pages

1. **Home (index.html)**

   - Hero section with call-to-action
   - Category exploration cards
   - Featured products showcase
   - Customer testimonials

2. **Products (products.html)**

   - Filterable product grid
   - Category, dietary, and price filters
   - Search functionality
   - Sorting options (price, name)
   - Add to cart functionality

3. **About (about.html)**

   - Company story and values
   - Team member profiles
   - Kitchen photo gallery

4. **Contact (contact.html)**

   - Contact information display
   - Contact form with validation
   - Success/error message handling

5. **Cart (cart.html)**
   - Cart items display
   - Quantity adjustment
   - Order summary with calculations
   - Promo code application (demo)
   - Remove items functionality

### Global Features

- Consistent navigation across all pages
- Cart count badge (updates dynamically)
- Responsive design (mobile, tablet, desktop)
- Dark mode support (via Tailwind)
- Smooth transitions and hover effects

## 📄 JavaScript Files Explained

### 1. products-data.js

**Purpose:** Central product database

**What it contains:**

- Array of 28 products across 7 categories
- Each product has:
  - `id`: Unique identifier
  - `name`: Product name
  - `category`: Category (Salads, Bowls, Sandwiches, etc.)
  - `price`: Price in dollars
  - `description`: Product description
  - `dietary`: Array of dietary tags (Vegan, Gluten-Free, Keto)
  - `image`: Product image URL

**Why it's separate:**

- Easy to maintain and update products
- Can be replaced with API calls later
- Keeps data separate from logic

---

### 2. products.js

**Purpose:** Product filtering, sorting, searching, and display logic

**Key Functions:**

#### `handleURLQuery()`

- Reads URL query parameters (e.g., `?category=Salads`)
- Automatically filters products when arriving from home page category cards
- Updates filter checkboxes to match URL

#### `setupEventListeners()`

- Attaches event listeners to:
  - Search input (real-time filtering)
  - Sort dropdown
  - Price range slider
  - Category checkboxes
  - Dietary checkboxes
  - Clear filters button

#### `handleCategoryFilter(e)`

- Manages category filter logic
- If "All" is checked, unchecks other categories
- If any specific category is checked, unchecks "All"
- Auto-checks "All" if no categories selected

#### `handleDietaryFilter(e)`

- Manages dietary filter checkboxes
- Adds/removes dietary requirements from filter

#### `applyFilters()`

- Core filtering function
- Filters products based on:
  - Selected categories
  - Selected dietary requirements
  - Price range
  - Search query
- Uses `.filter()` to check all conditions
- Calls `sortProducts()` and `renderProducts()`

#### `sortProducts()`

- Sorts filtered products by:
  - Default (by ID)
  - Price: Low to High
  - Price: High to Low
  - Name: A to Z

#### `renderProducts()`

- Displays products in the grid
- Shows/hides "no results" message
- Updates product count
- Creates product cards dynamically

#### `createProductCard(product)`

- Creates HTML element for each product
- Includes:
  - Product image
  - Dietary badges
  - Name and description
  - Price
  - "Add to Cart" button

#### `clearAllFilters()`

- Resets all filters to default
- Clears URL query parameters
- Re-renders products

#### `addToCart(productId)`

- Adds product to localStorage cart
- Updates existing items or creates new
- Updates cart count badge
- Shows success notification

---

### 3. cart.js

**Purpose:** Global cart management (used on all pages)

**Key Functions:**

#### `getCart()`

- Retrieves cart from localStorage
- Returns array of cart items
- Handles case when cart doesn't exist

#### `saveCart(cart)`

- Saves cart array to localStorage
- Updates cart count after saving

#### `updateCartCount()`

- Calculates total items in cart
- Updates cart badge on all pages
- Adds animation when count changes

#### `addToCartFromPage(productId)`

- Alternative add-to-cart function
- Can be called from any page
- Updates quantity if item exists

#### `removeFromCart(productId)`

- Removes item completely from cart
- Filters out the specified product

#### `updateQuantity(productId, newQuantity)`

- Updates quantity of specific item
- Removes item if quantity < 1

#### `clearCart()`

- Completely empties the cart
- Removes from localStorage

#### `calculateTotals()`

- Calculates order totals:
  - Subtotal (sum of all items)
  - Delivery fee ($5.00 if cart not empty)
  - Taxes (8% of subtotal)
  - Total (subtotal + delivery + taxes)
- Returns formatted dollar amounts

#### `showNotification(message, type)`

- Creates toast notification
- Shows at bottom-right
- Auto-dismisses after 2.5 seconds
- Supports 'success' and 'error' types

**localStorage Structure:**

```javascript
// Stored as JSON array
[
  {
    id: 1,
    name: "Product Name",
    price: 12.5,
    category: "Salads",
    dietary: ["Vegan"],
    image: "url",
    quantity: 2,
  },
  // ... more items
];
```

---

### 4. cart-page.js

**Purpose:** Cart page specific functionality

**Key Functions:**

#### `renderCartPage()`

- Main render function for cart page
- Displays cart items or empty cart message
- Shows/hides "Remove All" button
- Updates order summary

#### `createCartItemElement(item)`

- Creates HTML for each cart item
- Includes:
  - Product image
  - Name and price
  - Quantity controls (+/-)
  - Remove button (X)

#### `updateCartSummary()`

- Updates order summary section
- Displays:
  - Subtotal
  - Delivery fee
  - Taxes
  - Total
- Gets values from `calculateTotals()`

#### `incrementQuantity(productId)`

- Increases item quantity by 1
- Updates cart and re-renders

#### `decrementQuantity(productId)`

- Decreases item quantity by 1
- If quantity is 1, prompts removal
- Updates cart and re-renders

#### `removeItemFromCart(productId)`

- Removes specific item from cart
- Shows confirmation notification
- Re-renders cart page

#### `setupCartPageListeners()`

- Sets up event listeners for:
  - "Remove All" button
  - Promo code application
  - Checkout button

#### `applyPromoCode()`

- Demo promo code functionality
- Valid codes:
  - `NOURISH10` - 10% off
  - `FRESH20` - 20% off
  - `WELCOME` - 15% off
- Shows success/error messages
- **Note:** Doesn't actually apply discount (demo only)

#### `showPromoMessage(message, type)`

- Displays promo code validation message
- Auto-hides after 3 seconds

#### `handleCheckout()`

- Demo checkout function
- Shows "coming soon" message
- In production, would redirect to payment page

---

### 5. contact.js

**Purpose:** Contact form validation and submission

**Key Functions:**

#### `handleContactFormSubmit(e)`

- Handles form submission
- Prevents default form action
- Gets form field values
- Validates input
- Shows loading state
- Simulates server submission (1.5s delay)
- Displays success message
- Resets form

#### `validateContactForm(name, email, subject, message)`

- Validates all form fields:
  - **Name:** Minimum 2 characters
  - **Email:** Valid email format (regex)
  - **Subject:** Minimum 3 characters
  - **Message:** Minimum 10 characters
- Returns `true` if all valid, `false` otherwise
- Shows specific error messages

#### `showFormMessage(message, type)`

- Displays form feedback message
- Supports 'success' and 'error' types
- Auto-hides after 5 seconds
- Styled with appropriate colors

**Validation Rules:**

```javascript
// Name: min 2 characters
name.length >= 2

// Email: standard email format
/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

// Subject: min 3 characters
subject.length >= 3

// Message: min 10 characters
message.length >= 10
```

---

## 🔄 Data Flow

### Adding Product to Cart

1. User clicks "Add to Cart" on product card
2. `addToCart(productId)` in products.js is called
3. Product found in products array
4. Cart retrieved from localStorage
5. Check if product already exists in cart
6. If exists: increment quantity
7. If new: add product with quantity 1
8. Save updated cart to localStorage
9. `updateCartCount()` updates badge
10. Show success notification

### Category Filtering from Home Page

1. User clicks category card on home page
2. Link includes query parameter (e.g., `products.html?category=Salads`)
3. Products page loads
4. `handleURLQuery()` reads category from URL
5. Corresponding checkbox is checked automatically
6. `handleCategoryFilter()` updates filter state
7. `applyFilters()` filters products
8. Products displayed match selected category

### Cart Page Updates

1. Cart page loads
2. `renderCartPage()` reads cart from localStorage
3. Each item rendered with `createCartItemElement()`
4. User changes quantity
5. `incrementQuantity()` or `decrementQuantity()` called
6. Cart updated in localStorage
7. Page re-rendered with new quantities
8. Summary recalculated and updated

---

## 💾 localStorage Usage

### Cart Storage

```javascript
// Key: 'cart'
// Value: JSON string of cart array

localStorage.setItem("cart", JSON.stringify(cart));
const cart = JSON.parse(localStorage.getItem("cart") || "[]");
```

### Why localStorage?

- Persists cart between sessions
- No server required for demo
- Works offline
- Easy to implement
- Standard browser API

---

## 🎨 Design System

### Colors

- **Primary:** `#E2725B` (Coral) - CTAs, accents
- **Secondary:** `#87986A` (Sage Green) - Brand, highlights
- **Background Light:** `#FFFFFF`
- **Background Dark:** `#1A1A1A`
- **Text Light:** `#333333`
- **Text Dark:** `#F8F6F2`

### Typography

- Font Family: Be Vietnam Pro
- Weights: 400 (regular), 500 (medium), 700 (bold), 900 (black)

### Spacing

- Mobile: 16px (px-4)
- Desktop: 32px (px-8)
- Section gaps: 48-64px

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md/lg)
- **Desktop:** > 1024px (lg/xl)

---

## 🔧 Setup Instructions

1. **Clone or download** the project files
2. **Maintain the folder structure:**
   ```
   project-root/
   ├── index.html
   ├── products.html
   ├── about.html
   ├── contact.html
   ├── cart.html
   └── js/
       ├── products-data.js
       ├── products.js
       ├── cart.js
       ├── cart-page.js
       └── contact.js
   ```
3. **Open index.html** in a web browser
4. **No build process required** - works directly in browser

---

## 🌐 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

---

## 🚀 Future Enhancements

Potential improvements for production:

1. Connect to backend API for products
2. Implement real payment processing
3. User authentication and saved carts
4. Order history
5. Product reviews and ratings
6. Real-time delivery tracking
7. Email notifications
8. Advanced search with filters
9. Wishlist functionality
10. Social media integration

---

## 📝 Notes

- All images use external CDN URLs
- Demo promo codes are hardcoded
- No actual payment processing
- Contact form doesn't send real emails
- Products data is static (client-side only)

---

## 🐛 Troubleshooting

### Cart not updating?

- Check browser console for errors
- Ensure localStorage is enabled
- Clear localStorage and refresh

### Filters not working?

- Verify all JS files are loaded
- Check file paths are correct
- Open browser console for errors

### Products not displaying?

- Ensure products-data.js loads before products.js
- Check script loading order in HTML

---

## 📄 License

This is a demonstration project. Feel free to use and modify as needed.

---

## 👤 Author

Created as a demonstration of modern web development practices using vanilla JavaScript, HTML5, and Tailwind CSS.
