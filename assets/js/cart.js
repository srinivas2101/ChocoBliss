/* =============================================
   ChocoBliss — Cart Utility (cart.js)
   Shared across all pages
   ============================================= */

const Cart = (() => {
  const KEY = 'chocobliss_cart';

  const get = () => JSON.parse(localStorage.getItem(KEY) || '[]');
  const save = (cart) => { localStorage.setItem(KEY, JSON.stringify(cart)); updateBadge(); };

  const add = (item) => {
    const cart = get();
    const idx = cart.findIndex(c => c.id === item.id);
    if (idx > -1) { cart[idx].qty += 1; }
    else { cart.push({ ...item, qty: 1 }); }
    save(cart);
    showToast(`${item.name} added to cart!`);
  };

  const remove = (id) => { save(get().filter(c => c.id !== id)); };

  const updateQty = (id, delta) => {
    const cart = get();
    const idx = cart.findIndex(c => c.id === id);
    if (idx === -1) return;
    cart[idx].qty = Math.max(1, cart[idx].qty + delta);
    save(cart);
  };

  const total = () => get().reduce((s, c) => s + c.price * c.qty, 0);
  const count = () => get().reduce((s, c) => s + c.qty, 0);

  const updateBadge = () => {
    const badge = document.querySelector('.cart-badge');
    if (!badge) return;
    const n = count();
    badge.textContent = n;
    badge.style.display = n > 0 ? 'flex' : 'none';
  };

  return { get, add, remove, updateQty, total, count, updateBadge };
})();

/* ---- Toast ---- */
let toastTimer;
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ---- Hamburger ---- */
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();

  const ham = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (ham && navLinks) {
    ham.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // Active nav highlight
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });
});
