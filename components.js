const headerHTML = `
  <div class="announcement-bar">
    Due to high demand, delivery times are currently longer than usual
  </div>
  <header class="header" id="main-header">
    <div class="header-top">
      <div class="logo">
        <a href="index.html">KKNEKKI<span style="font-size:1rem; vertical-align: super;">®</span></a>
      </div>
      <div class="header-actions">
        <button aria-label="Currency" onclick="alert('Currency selector mockup')">EUR <i data-lucide="chevron-down" style="width:14px;height:14px; margin-left: 2px;"></i></button>
        <a href="#" aria-label="Account" onclick="alert('Login mockup')"><i data-lucide="user" style="width:20px;height:20px;"></i></a>
        <button aria-label="Search" onclick="toggleSearch()"><i data-lucide="search" style="width:20px;height:20px;"></i></button>
        <button aria-label="Cart" onclick="toggleCart()"><i data-lucide="shopping-bag" style="width:20px;height:20px;"></i></button>
      </div>
    </div>
    <div class="header-bottom">
      <nav>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="bestsellers.html">Bestsellers</a></li>
          <li><a href="shop.html">Shop All</a></li>
          <li><a href="shop.html">Multi-Packs</a></li>
          <li><a href="shop.html">Neutrals</a></li>
          <li><a href="shop.html">Yellow</a></li>
          <li><a href="shop.html">Orange</a></li>
          <li><a href="shop.html">Pink</a></li>
          <li><a href="shop.html">Red</a></li>
          <li><a href="shop.html">Green</a></li>
          <li><a href="shop.html">Blue</a></li>
          <li><a href="shop.html">Purple</a></li>
          <li><a href="shop.html">More</a></li>
        </ul>
      </nav>
    </div>
  </header>
`;

const footerHTML = `
  <footer class="footer">
    <div style="text-align:center; color: var(--text-light); font-size: 0.8rem; letter-spacing: 1px;">
      <p>© 2026 - KKNEKKI®</p>
    </div>
  </footer>
`;

const overlaysHTML = `
  <!-- Cart Drawer -->
  <div class="cart-drawer-overlay" id="cart-overlay" onclick="toggleCart()"></div>
  <div class="cart-drawer" id="cart-drawer">
    <div class="cart-header">
      <h3 style="font-family: var(--font-nav); font-size: 1rem; letter-spacing: 2px;">YOUR CART</h3>
      <button onclick="toggleCart()" class="close-btn"><i data-lucide="x"></i></button>
    </div>
    <div class="cart-items" id="cart-items">
      <!-- Cart items injected here -->
    </div>
    <div class="cart-footer">
      <div class="cart-total">
        <span>Total:</span>
        <span id="cart-total-price">€0.00</span>
      </div>
      <button class="btn btn-full" onclick="checkout()">Checkout</button>
    </div>
  </div>

  <!-- Search Modal -->
  <div class="search-modal" id="search-modal">
    <div class="search-modal-content">
      <button onclick="toggleSearch()" class="close-search-btn"><i data-lucide="x" style="width: 32px; height: 32px;"></i></button>
      <h2 style="font-family: var(--font-logo); font-size: 2.5rem; color: var(--teal-dark);">What are you looking for?</h2>
      <div class="search-input-wrapper">
        <i data-lucide="search" style="color: var(--teal-dark); width: 24px; height: 24px;"></i>
        <input type="text" id="search-input" placeholder="Search..." onkeypress="handleSearch(event)">
      </div>
    </div>
  </div>
`;

// Inject HTML
document.addEventListener('DOMContentLoaded', () => {
  const headerRoot = document.getElementById('header-root');
  if (headerRoot) headerRoot.innerHTML = headerHTML;

  const footerRoot = document.getElementById('footer-root');
  if (footerRoot) footerRoot.innerHTML = footerHTML;

  // Append overlays to body
  const overlaysDiv = document.createElement('div');
  overlaysDiv.innerHTML = overlaysHTML;
  document.body.appendChild(overlaysDiv);
  
  if (window.lucide) {
    lucide.createIcons();
  }
});
