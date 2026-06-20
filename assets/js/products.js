/* =============================================
   ChocoBliss — Product Page JS (products.js)
   Used by all category listing pages
   ============================================= */

function initProductPage(products) {
  const grid    = document.getElementById('product-grid');
  const search  = document.getElementById('search');
  const sort    = document.getElementById('sort');
  const badge   = document.getElementById('count-badge');

  let filtered = [...products];

  function render() {
    badge.textContent = `${filtered.length} items`;
    if (!filtered.length) {
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#8C7060;padding:40px 0">No chocolates found. Try a different search.</p>';
      return;
    }
    grid.innerHTML = filtered.map((p, i) => `
      <div class="prod-card" data-idx="${i}">
        <div class="prod-img-wrap">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&q=70'">
          <div class="prod-overlay">
            <button class="quick-btn" onclick="addItem(${p.id})">Quick Add 🛒</button>
          </div>
        </div>
        <div class="prod-body">
          <h3>${p.name}</h3>
          <div class="prod-price">₹${p.price}</div>
          <button class="add-btn" id="btn-${p.id}" onclick="addItem(${p.id})">Add to Cart</button>
        </div>
      </div>
    `).join('');
  }

  function applyFilters() {
    const q = search.value.toLowerCase();
    filtered = products.filter(p => p.name.toLowerCase().includes(q));
    const s = sort.value;
    if (s === 'price-asc')  filtered.sort((a,b) => a.price - b.price);
    if (s === 'price-desc') filtered.sort((a,b) => b.price - a.price);
    if (s === 'name-az')    filtered.sort((a,b) => a.name.localeCompare(b.name));
    render();
  }

  window.addItem = (id) => {
    const p = products.find(x => x.id === id);
    if (!p) return;
    Cart.add({ id: p.id, name: p.name, price: p.price, img: p.img });
    const btn = document.getElementById(`btn-${id}`);
    if (btn) { btn.textContent = '✓ Added'; btn.classList.add('added'); setTimeout(() => { btn.textContent = 'Add to Cart'; btn.classList.remove('added'); }, 1500); }
  };

  search.addEventListener('input', applyFilters);
  sort.addEventListener('change', applyFilters);
  render();
}
