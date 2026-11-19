const CATEGORIES = [
  'Все',
  'Бургеры',
  'Чизбургеры',
  'Гамбургеры',
  'Хот-доги',
  'Пицца',
  'Шаурма',
  'Лаваш',
  'Сэндвичи',
  'Картофель фри',
  'Куриные наггетсы',
  ' Жареная курица',
  'Закуски',
  'Газированные напитки',
  'Соки',
  'Вода',
  'Энергетические напитки',
  'Молочные коктейли',
  'Кофе',
  'Мороженое',
  'Торты',
  'Пончики',
  'Десерты'
].map((c) => c.trim());

const PRODUCTS = [
  {
    id: 'burger-1',
    name: 'Double Flame Burger',
    category: 'Бургеры',
    price: 54000,
    popular: true,
    bestseller: true,
    desc: 'Две котлеты из мраморной говядины на огне, хрустящий бекон, маринованные огурцы и соус BBQ.',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'burger-2',
    name: 'Spicy Crunch Burger',
    category: 'Бургеры',
    price: 46000,
    popular: false,
    bestseller: false,
    desc: 'Острое филе в хрустящей панировке, халапеньо, свежий салат и пряный чили-майонез.',
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cheeseburger-1',
    name: 'Triple Cheddar Чизбургер',
    category: 'Чизбургеры',
    price: 48000,
    popular: true,
    bestseller: true,
    desc: 'Сочный бифштекс, три ломтя плавленого чеддера, красный лук и фирменный сырный соус.',
    img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hamburger-1',
    name: 'Classic Гамбургер',
    category: 'Гамбургеры',
    price: 36000,
    popular: false,
    bestseller: false,
    desc: 'Классическая говяжья котлета, томат, хрустящий айсберг, кетчуп и горчичный соус.',
    img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotdog-1',
    name: 'New York Хот-дог',
    category: 'Хот-доги',
    price: 32000,
    popular: true,
    bestseller: false,
    desc: 'Копчёная сосиска в мягкой булочке бриошь с карамелизированным луком, горчицей и кетчупом.',
    img: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pizza-1',
    name: 'Пицца Пепперони XL',
    category: 'Пицца',
    price: 89000,
    popular: true,
    bestseller: true,
    desc: 'Тонкое тесто, томатный соус с базиликом, тягучая моцарелла и много пряной пепперони.',
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'shawarma-1',
    name: 'Шаурма Королевская',
    category: 'Шаурма',
    price: 39000,
    popular: false,
    bestseller: true,
    desc: 'Нежное мясо на гриле, свежие овощи, картофель фри внутри и чесночный соус.',
    img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lavash-1',
    name: 'Лаваш Сыр-Гриль',
    category: 'Лаваш',
    price: 37000,
    popular: true,
    bestseller: false,
    desc: 'Тёплый тонкий лаваш с обжаренной курицей, моцареллой, зеленью и фирменным соусом.',
    img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sandwich-1',
    name: 'Club Сэндвич с курицей',
    category: 'Сэндвичи',
    price: 35000,
    popular: false,
    bestseller: false,
    desc: 'Трёхслойный тост с куриным филе, яйцом, томатами, листьями салата и соусом ранч.',
    img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fries-1',
    name: 'Картофель фри Gold',
    category: 'Картофель фри',
    price: 21000,
    popular: true,
    bestseller: true,
    desc: 'Хрустящий золотистый картофель фри с морской солью и паприкой.',
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nuggets-1',
    name: 'Куриные наггетсы (9 шт.)',
    category: 'Куриные наггетсы',
    price: 29000,
    popular: false,
    bestseller: false,
    desc: 'Сочные кусочки цельного куриного филе в хрустящей панировке на выбор с соусом.',
    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chicken-1',
    name: 'Жареная курица Crispy Bucket',
    category: 'Жареная курица',
    price: 76000,
    popular: false,
    bestseller: true,
    desc: 'Хрустящие крылышки и ножки по фирменному рецепту с 11 специями.',
    img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'snacks-1',
    name: 'Закуски: Луковые кольца и сырные палочки',
    category: 'Закуски',
    price: 34000,
    popular: false,
    bestseller: false,
    desc: 'Ассорти хрустящих луковых колец и горячих сырных палочек в панировке.',
    img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soda-1',
    name: 'Cola Zero Ice 0.5L',
    category: 'Газированные напитки',
    price: 12000,
    popular: false,
    bestseller: false,
    desc: 'Освежающий газированный напиток со льдом и долькой лимона.',
    img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'juice-1',
    name: 'Свежевыжатый апельсиновый сок',
    category: 'Соки',
    price: 22000,
    popular: false,
    bestseller: false,
    desc: 'Натуральный сок из спелых апельсинов без добавления сахара.',
    img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'water-1',
    name: 'Минеральная вода 0.5L',
    category: 'Вода',
    price: 8000,
    popular: false,
    bestseller: false,
    desc: 'Чистая артезианская вода без газа, охлаждённая.',
    img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'energy-1',
    name: 'Volt Boost Энергетик',
    category: 'Энергетические напитки',
    price: 18000,
    popular: false,
    bestseller: false,
    desc: 'Бодрящий цитрусовый энергетик с таурином и витаминами группы B.',
    img: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'shake-1',
    name: 'Клубничный молочный коктейль',
    category: 'Молочные коктейли',
    price: 28000,
    popular: true,
    bestseller: false,
    desc: 'Густой милкшейк из натурального пломбира, молока и свежей клубники со взбитыми сливками.',
    img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coffee-1',
    name: 'Caramel Latte',
    category: 'Кофе',
    price: 26000,
    popular: false,
    bestseller: false,
    desc: 'Ароматный эспрессо, бархатистая молочная пенка и сладкая солёная карамель.',
    img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'icecream-1',
    name: 'Мороженое Ваниль & Шоколад',
    category: 'Мороженое',
    price: 24000,
    popular: false,
    bestseller: false,
    desc: 'Два шарика сливочного мороженого с шоколадной крошкой и топпингом.',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cake-1',
    name: 'Шоколадный торт Truffle',
    category: 'Торты',
    price: 42000,
    popular: false,
    bestseller: false,
    desc: 'Насыщенный шоколадный бисквит с трюфельным кремом и глазурью.',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'donut-1',
    name: 'Пончик Glazed Pink',
    category: 'Пончики',
    price: 19000,
    popular: false,
    bestseller: false,
    desc: 'Воздушный пончик с ягодной глазурью и разноцветной посыпкой.',
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dessert-1',
    name: 'Десерт Чизкейк Нью-Йорк',
    category: 'Десерты',
    price: 38000,
    popular: false,
    bestseller: false,
    desc: 'Нежный запечённый чизкейк на песочной основе с ягодным кули.',
    img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80'
  }
];

const PROMO_CODES = {
  FLAME20: { type: 'percent', value: 20, minSubtotal: 100000, label: 'Скидка 20% (от 100 000 UZS)' },
  CRISP15: { type: 'percent', value: 15, minSubtotal: 0, label: 'Скидка 15%' },
  VIP30K: { type: 'fixed', value: 30000, minSubtotal: 180000, label: 'Скидка 30 000 UZS (от 180 000 UZS)' }
};

const DELIVERY_FEE = 15000;
const FREE_DELIVERY_THRESHOLD = 150000;
const STORAGE_KEY = 'crisp_flame_cart_v1';

let cart = loadCart();
let activeCategory = 'Все';
let searchQuery = '';
let appliedPromoCode = null;

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // ignore storage quota errors
  }
}

function formatUZS(amount) {
  return `${Math.max(0, Math.round(amount)).toLocaleString('ru-RU').replace(/,/g, ' ')} UZS`;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function getSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getDeliveryFee(subtotal) {
  if (subtotal === 0) return 0;
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
}

function calculateDiscount(subtotal, code) {
  if (!code || subtotal === 0) return 0;
  const promo = PROMO_CODES[code.toUpperCase()];
  if (!promo) return 0;
  if (subtotal < promo.minSubtotal) return 0;
  if (promo.type === 'percent') {
    return Math.round((subtotal * promo.value) / 100);
  }
  return Math.min(promo.value, subtotal);
}

function renderProductCard(product) {
  return `
    <article class="product-card card-3d reveal">
      <div class="product-media">
        <img src="${product.img}" alt="${product.name}" loading="lazy" />
        <span class="product-cat-badge">${product.category}</span>
      </div>
      <div class="product-body">
        <div>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.desc}</p>
        </div>
        <div>
          <div class="product-price">${formatUZS(product.price)}</div>
          <div class="product-actions">
            <button type="button" class="btn btn-sm btn-secondary add-to-cart-btn" data-id="${product.id}">
              В корзину
            </button>
            <button type="button" class="btn btn-sm btn-primary buy-now-btn" data-id="${product.id}">
              Купить сейчас
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCategoryTabs() {
  const tabsEl = document.getElementById('categoryTabs');
  tabsEl.innerHTML = CATEGORIES.map(
    (cat) => `
      <button
        type="button"
        class="cat-tab ${cat === activeCategory ? 'active' : ''}"
        data-category="${cat}"
        role="tab"
        aria-selected="${cat === activeCategory}"
      >${cat}</button>
    `
  ).join('');

  tabsEl.querySelectorAll('.cat-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      renderCategoryTabs();
      renderCatalog();
    });
  });
}

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  const meta = document.getElementById('resultsMeta');
  const q = searchQuery.trim().toLowerCase();

  const filtered = PRODUCTS.filter((p) => {
    const matchesCat = activeCategory === 'Все' || p.category === activeCategory;
    const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  meta.textContent = `Найдено позиций: ${filtered.length}`;

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="cart-empty">По вашему запросу ничего не найдено. Попробуйте изменить категорию или поисковый запрос.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(renderProductCard).join('');
  bindProductButtons(grid);
  bind3DTilt(grid);
  observeReveals(grid);
}

function renderCuratedSections() {
  const popGrid = document.getElementById('popularGrid');
  const bestGrid = document.getElementById('bestsellersGrid');

  const popularItems = PRODUCTS.filter((p) => p.popular);
  const bestsellerItems = PRODUCTS.filter((p) => p.bestseller);

  popGrid.innerHTML = popularItems.map(renderProductCard).join('');
  bestGrid.innerHTML = bestsellerItems.map(renderProductCard).join('');

  bindProductButtons(popGrid);
  bindProductButtons(bestGrid);
  bind3DTilt(popGrid);
  bind3DTilt(bestGrid);
}

function bindProductButtons(container) {
  container.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      addToCart(btn.dataset.id);
      showToast('Товар добавлен в корзину');
    });
  });

  container.querySelectorAll('.buy-now-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      addToCart(btn.dataset.id);
      closeCartDrawer();
      openCheckoutModal();
    });
  });
}

function addToCart(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      qty: 1
    });
  }
  saveCart();
  updateCartUI();
}

function changeQty(productId, delta) {
  const idx = cart.findIndex((item) => item.id === productId);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const itemsEl = document.getElementById('cartItemsContainer');
  const totalEl = document.getElementById('cartTotalAmount');
  const hintEl = document.getElementById('deliveryHint');
  const checkoutBtn = document.getElementById('openCheckoutBtn');

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = getSubtotal();
  const delivery = getDeliveryFee(subtotal);

  countEl.textContent = totalQty;
  checkoutBtn.disabled = cart.length === 0;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty">Корзина пока пуста.<br />Добавьте блюда из меню!</div>`;
    totalEl.textContent = formatUZS(0);
    hintEl.textContent = `Бесплатная доставка от ${formatUZS(FREE_DELIVERY_THRESHOLD)}.`;
    return;
  }

  itemsEl.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" />
        <div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${formatUZS(item.price * item.qty)}</div>
          <div class="qty-controls">
            <button type="button" class="qty-btn dec-btn" data-id="${item.id}" aria-label="Уменьшить">−</button>
            <span>${item.qty}</span>
            <button type="button" class="qty-btn inc-btn" data-id="${item.id}" aria-label="Увеличить">+</button>
          </div>
        </div>
        <button type="button" class="remove-btn" data-id="${item.id}" title="Удалить" aria-label="Удалить">🗑</button>
      </div>
    `
    )
    .join('');

  itemsEl.querySelectorAll('.inc-btn').forEach((b) => b.addEventListener('click', () => changeQty(b.dataset.id, 1)));
  itemsEl.querySelectorAll('.dec-btn').forEach((b) => b.addEventListener('click', () => changeQty(b.dataset.id, -1)));
  itemsEl.querySelectorAll('.remove-btn').forEach((b) => b.addEventListener('click', () => removeFromCart(b.dataset.id)));

  totalEl.textContent = formatUZS(subtotal + delivery);
  hintEl.textContent =
    delivery === 0
      ? '🎉 Бесплатная доставка активирована!'
      : `До бесплатной доставки осталось ${formatUZS(FREE_DELIVERY_THRESHOLD - subtotal)} (доставка: ${formatUZS(DELIVERY_FEE)}).`;

  if (document.getElementById('checkoutModal').classList.contains('open')) {
    updateCheckoutSummary();
  }
}

/* Корзина — открытие / закрытие */
const cartDrawer = document.getElementById('cartDrawer');
const cartBackdrop = document.getElementById('cartBackdrop');

function openCartDrawer() {
  cartDrawer.classList.add('open');
  cartBackdrop.classList.add('open');
}

function closeCartDrawer() {
  cartDrawer.classList.remove('open');
  cartBackdrop.classList.remove('open');
}

document.getElementById('openCartBtn').addEventListener('click', openCartDrawer);
document.getElementById('closeCartBtn').addEventListener('click', closeCartDrawer);
cartBackdrop.addEventListener('click', closeCartDrawer);

/* Модальное окно оформления заказа и промокоды */
const checkoutModal = document.getElementById('checkoutModal');

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Добавьте хотя бы один товар в корзину');
    return;
  }
  document.getElementById('orderStatusMessage').textContent = '';
  document.getElementById('orderStatusMessage').className = 'order-status';
  updateCheckoutSummary();
  checkoutModal.classList.add('open');
  checkoutModal.setAttribute('aria-hidden', 'false');
}

function closeCheckoutModal() {
  checkoutModal.classList.remove('open');
  checkoutModal.setAttribute('aria-hidden', 'true');
}

document.getElementById('openCheckoutBtn').addEventListener('click', () => {
  closeCartDrawer();
  openCheckoutModal();
});
document.getElementById('closeCheckoutBtn').addEventListener('click', closeCheckoutModal);
checkoutModal.addEventListener('click', (e) => {
  if (e.target === checkoutModal) closeCheckoutModal();
});

function applyPromo(rawCode) {
  const feedback = document.getElementById('promoFeedback');
  const code = (rawCode || '').trim().toUpperCase();
  const subtotal = getSubtotal();

  if (!code) {
    appliedPromoCode = null;
    feedback.textContent = 'Промокод не применён.';
    feedback.className = 'promo-feedback';
    updateCheckoutSummary();
    return;
  }

  const promo = PROMO_CODES[code];
  if (!promo) {
    appliedPromoCode = null;
    feedback.textContent = 'Неверный промокод. Попробуйте FLAME20, CRISP15 или VIP30K.';
    feedback.className = 'promo-feedback err';
    updateCheckoutSummary();
    return;
  }

  if (subtotal < promo.minSubtotal) {
    appliedPromoCode = null;
    feedback.textContent = `Промокод ${code} действует от ${formatUZS(promo.minSubtotal)}.`;
    feedback.className = 'promo-feedback err';
    updateCheckoutSummary();
    return;
  }

  appliedPromoCode = code;
  feedback.textContent = `Промокод ${code} применён: ${promo.label}`;
  feedback.className = 'promo-feedback ok';
  updateCheckoutSummary();
}

document.getElementById('applyPromoBtn').addEventListener('click', () => {
  applyPromo(document.getElementById('promoInput').value);
});

document.querySelectorAll('.copy-promo-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const code = btn.dataset.promo;
    document.getElementById('promoInput').value = code;
    if (cart.length === 0) {
      addToCart(PRODUCTS[0].id);
    }
    openCheckoutModal();
    applyPromo(code);
  });
});

function updateCheckoutSummary() {
  const itemsList = document.getElementById('checkoutItemsList');
  const subtotal = getSubtotal();

  if (appliedPromoCode) {
    const promo = PROMO_CODES[appliedPromoCode];
    if (!promo || subtotal < promo.minSubtotal) {
      appliedPromoCode = null;
    }
  }

  const discount = calculateDiscount(subtotal, appliedPromoCode);
  const delivery = getDeliveryFee(subtotal);
  const finalTotal = Math.max(0, subtotal - discount) + delivery;

  itemsList.innerHTML = cart
    .map(
      (item) => `
      <div class="summary-line">
        <span>${item.name} × ${item.qty}</span>
        <strong>${formatUZS(item.price * item.qty)}</strong>
      </div>
    `
    )
    .join('');

  document.getElementById('originalTotalDisplay').textContent = formatUZS(subtotal);
  document.getElementById('appliedPromoLabel').textContent = appliedPromoCode || 'нет';
  document.getElementById('discountAmountDisplay').textContent = `-${formatUZS(discount)}`;
  document.getElementById('deliveryFeeDisplay').textContent = delivery === 0 ? 'Бесплатно' : formatUZS(delivery);
  document.getElementById('finalTotalDisplay').textContent = formatUZS(finalTotal);
}

/* Отправка заказа на сервер (который пересылает в Telegram Bot API) */
document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const statusEl = document.getElementById('orderStatusMessage');
  const submitBtn = document.getElementById('submitOrderBtn');

  if (cart.length === 0) {
    statusEl.textContent = 'Корзина пуста.';
    statusEl.className = 'order-status error';
    return;
  }

  const subtotal = getSubtotal();
  const discount = calculateDiscount(subtotal, appliedPromoCode);
  const delivery = getDeliveryFee(subtotal);
  const finalTotal = Math.max(0, subtotal - discount) + delivery;

  const payload = {
    customerName: document.getElementById('customerName').value.trim(),
    customerPhone: document.getElementById('customerPhone').value.trim(),
    deliveryAddress: document.getElementById('deliveryAddress').value.trim(),
    courierComment: document.getElementById('courierComment').value.trim(),
    paymentMethod: document.getElementById('paymentMethod').value,
    promoCode: appliedPromoCode || null,
    items: cart.map((item) => ({
      name: item.name,
      qty: item.qty,
      price: item.price
    })),
    subtotal,
    discount,
    deliveryFee: delivery,
    finalTotal
  };

  submitBtn.disabled = true;
  submitBtn.textContent = 'Отправка заказа...';
  statusEl.textContent = '';

  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (!res.ok || !data.ok) {
      throw new Error(data.error || 'Ошибка отправки заказа');
    }

    statusEl.textContent = '✅ Заказ успешно оформлен и отправлен! Мы свяжемся с вами в ближайшее время.';
    statusEl.className = 'order-status success';

    cart = [];
    appliedPromoCode = null;
    document.getElementById('promoInput').value = '';
    document.getElementById('promoFeedback').textContent = '';
    saveCart();
    updateCartUI();
    e.target.reset();
  } catch (err) {
    statusEl.textContent = `❌ Не удалось отправить заказ: ${err.message}`;
    statusEl.className = 'order-status error';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Подтвердить и отправить заказ';
  }
});

/* Поиск, бургер-меню, 3D-наклон и анимации */
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderCatalog();
});

document.getElementById('clearSearchBtn').addEventListener('click', () => {
  searchQuery = '';
  searchInput.value = '';
  renderCatalog();
});

const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');
burgerBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => navLinks.classList.remove('open')));

function bind3DTilt(scope = document) {
  scope.querySelectorAll('.card-3d').forEach((card) => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = '1';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

function observeReveals(scope = document) {
  scope.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
}

renderCategoryTabs();
renderCuratedSections();
renderCatalog();
updateCartUI();
bind3DTilt();
observeReveals();