let cart = JSON.parse(localStorage.getItem('kknekki_cart')) || [];

function saveCart() {
  localStorage.setItem('kknekki_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const countEl = document.getElementById('cart-count');
  const itemsContainer = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total-price');

  if (!countEl || !itemsContainer || !totalEl) return;

  // Update count
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  countEl.innerText = totalCount;

  // Render items
  itemsContainer.innerHTML = '';
  let totalPrice = 0;

  if (cart.length === 0) {
    itemsContainer.innerHTML = '<p style="text-align:center; color: var(--text-light); margin-top: 40px;">Your cart is empty</p>';
  } else {
    cart.forEach((item, index) => {
      totalPrice += item.price * item.quantity;
      itemsContainer.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}">
          <div class="cart-item-details">
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-price">€${item.price.toFixed(2)}</div>
            <div class="cart-item-actions">
              <button onclick="changeQuantity(${index}, -1)">-</button>
              <span>${item.quantity}</span>
              <button onclick="changeQuantity(${index}, 1)">+</button>
            </div>
          </div>
        </div>
      `;
    });
  }

  totalEl.innerText = '€' + totalPrice.toFixed(2);
}

function addToCart(title, price, image, qty = 1) {
  const existing = cart.find(item => item.title === title);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ title, price, image, quantity: qty });
  }
  saveCart();
  updateCartUI();
  
  const drawer = document.getElementById('cart-drawer');
  if (drawer && !drawer.classList.contains('active')) {
    toggleCart();
  }
}

function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
    if (drawer.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

function toggleSearch() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => document.getElementById('search-input').focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
  }
}

function handleSearch(e) {
  if (e.key === 'Enter') {
    const query = e.target.value;
    alert('Search functionality mockup. You searched for: ' + query);
    toggleSearch();
    e.target.value = '';
  }
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }
  alert('Thank you for your purchase! This is a mock checkout.');
  cart = [];
  saveCart();
  updateCartUI();
  toggleCart();
}

document.addEventListener('DOMContentLoaded', () => {
  // Add subtle shadow to header on scroll instead of breaking layout padding
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if(!header) return;
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // Ensure UI updates properly after components load
  setTimeout(updateCartUI, 100);
});

// Expose functions globally so they work when bundled by Vite/Vercel
window.toggleCart = toggleCart;
window.toggleSearch = toggleSearch;
window.addToCart = addToCart;
window.checkout = checkout;
window.handleSearch = handleSearch;
window.updateQty = typeof updateQty !== 'undefined' ? updateQty : undefined;
window.addDetailToCart = typeof addDetailToCart !== 'undefined' ? addDetailToCart : undefined;

