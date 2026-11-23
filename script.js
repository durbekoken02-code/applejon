/**
 * Apple Store - Vanilla JavaScript
 * Dynamic Cart, Product Modals, Live Search, Telegram Bot API Integration
 */

// ==========================================
// 1. MAHSULOTLAR MA'LUMOTLAR BAZASI
// ==========================================
const PRODUCTS = {
  'iphone-16-pro-max': {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    category: 'iPhone',
    basePrice: 1199,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409?wid=800&hei=800&fmt=png-alpha',
    headline: 'Eng katta 6.9 dyuymli ekran va A18 Pro chipi.',
    description: 'iPhone 16 Pro Max — titan korpus, yangi Camera Control tugmasi, 48MP Fusion kamera va Apple tarixidagi eng kuchli A18 Pro protsessori bilan jihozlangan eng yetuk flagman.',
    colors: [
      { name: 'Desert Titanium', hex: '#c5b8a6' },
      { name: 'Black Titanium', hex: '#4b4845' },
      { name: 'White Titanium', hex: '#f2f1ed' },
      { name: 'Natural Titanium', hex: '#98938b' }
    ],
    storages: [
      { size: '256 GB', extraPrice: 0 },
      { size: '512 GB', extraPrice: 200 },
      { size: '1 TB', extraPrice: 400 }
    ],
    specs: [
      '6.9″ Super Retina XDR ProMotion (120Hz) displey',
      'Apple A18 Pro 3nm chip (6-yadroli GPU)',
      '48 MP Asosiy + 48 MP Ultra-keng + 12 MP 5x Telephoto',
      'Yangi Camera Control (sensorli kamera tugmasi)',
      '33 soatgacha uzluksiz video ko‘rish'
    ]
  },
  'iphone-16': {
    id: 'iphone-16',
    name: 'iPhone 16',
    category: 'iPhone',
    basePrice: 799,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=800&hei=800&fmt=png-alpha',
    headline: 'Kamera nazorati tugmasi va A18 protsessori.',
    description: 'Yorqin ranglar, Dynamic Island, A18 chipi va Apple Intelligence uchun to‘liq tayyor bo‘lgan eng zamonaviy kundalik smartfon.',
    colors: [
      { name: 'Ultramarine', hex: '#3b5074' },
      { name: 'Teal', hex: '#a4cebe' },
      { name: 'Pink', hex: '#f2b4c8' },
      { name: 'Black', hex: '#27282a' }
    ],
    storages: [
      { size: '128 GB', extraPrice: 0 },
      { size: '256 GB', extraPrice: 100 },
      { size: '512 GB', extraPrice: 300 }
    ],
    specs: [
      '6.1″ Super Retina XDR OLED displey',
      'Apple A18 protsessor (Apple Intelligence qo‘llab-quvvatlaydi)',
      '48 MP 2-in-1 Fusion kamera tizimi',
      'Action Button va Camera Control tugmalari',
      'USB-C port va 22 soatgacha batareya quvvati'
    ]
  },
  'iphone-15': {
    id: 'iphone-15',
    name: 'iPhone 15',
    category: 'iPhone',
    basePrice: 699,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=800&hei=800&fmt=png-alpha',
    headline: 'Dinamik orol (Dynamic Island) va USB-C ulanishi.',
    description: 'Ajoyib 48 MP kamera, ergonomik qirralar va Dynamic Island bilan boyitilgan ishonchli iPhone.',
    colors: [
      { name: 'Blue', hex: '#d1dde6' },
      { name: 'Yellow', hex: '#f9e5c9' },
      { name: 'Green', hex: '#d7e4d8' },
      { name: 'Black', hex: '#343538' }
    ],
    storages: [
      { size: '128 GB', extraPrice: 0 },
      { size: '256 GB', extraPrice: 100 },
      { size: '512 GB', extraPrice: 300 }
    ],
    specs: [
      '6.1″ Dynamic Island displeyi',
      'Apple A16 Bionic kuchli protsessori',
      '48 MP kamera va 2x optik sifatli yaqinlashtirish',
      'Rangli mot orqa oyna dizayni',
      'Universal USB-C ulanish'
    ]
  },
  'macbook-pro-14': {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14″ va 16″',
    category: 'Mac',
    basePrice: 1599,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=800&hei=800&fmt=png-alpha',
    headline: 'M3 Pro yoki M4 Max chipi bilan eng og‘ir vazifalar uchun.',
    description: 'Pro dasturchilar, dizaynerlar va 3D mutaxassislari uchun yaratilgan eng qudratli noutbuk. Dunyodagi eng ilg‘or Liquid Retina XDR displeyi.',
    colors: [
      { name: 'Space Black', hex: '#2e3033' },
      { name: 'Silver', hex: '#e3e4e6' }
    ],
    storages: [
      { size: '512 GB SSD', extraPrice: 0 },
      { size: '1 TB SSD', extraPrice: 200 },
      { size: '2 TB SSD', extraPrice: 600 }
    ],
    specs: [
      'Apple M3 Pro / M4 Max 3nm arxitekturasi',
      'Liquid Retina XDR (120Hz ProMotion, 1600 nit)',
      '22 soatgacha rekord batareya quvvati',
      'HDMI, SD kartrider, MagSafe 3 va 3 ta Thunderbolt 4',
      '6 karnayli fazoviy audio tizimi'
    ]
  },
  'macbook-air-15': {
    id: 'macbook-air-15',
    name: 'MacBook Air 15″',
    category: 'Mac',
    basePrice: 1099,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=800&hei=800&fmt=png-alpha',
    headline: 'M3 chipi bilan nihoyatda nozik, jim va chaqqon noutbuk.',
    description: 'Katta 15 dyuymli ekran, ventilyatorsiz mutlaqo sokin ishlash va kun bo‘yi yetadigan quvvat.',
    colors: [
      { name: 'Midnight', hex: '#1f2733' },
      { name: 'Starlight', hex: '#e5ded2' },
      { name: 'Space Gray', hex: '#7d7e80' },
      { name: 'Silver', hex: '#e3e4e6' }
    ],
    storages: [
      { size: '256 GB SSD', extraPrice: 0 },
      { size: '512 GB SSD', extraPrice: 200 },
      { size: '1 TB SSD', extraPrice: 400 }
    ],
    specs: [
      'Apple M3 chipi (8-yadroli CPU, 10-yadroli GPU)',
      '15.3″ Liquid Retina 500 nit displey',
      'Atigi 11.5 mm qalinlikdagi alyuminiy korpus',
      '18 soatgacha tinimsiz ishlash',
      'MagSafe 3 va 1080p FaceTime HD kamera'
    ]
  },
  'ipad-pro-m4': {
    id: 'ipad-pro-m4',
    name: 'iPad Pro 13″ (M4)',
    category: 'iPad',
    basePrice: 999,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-model-select-gallery-1-202405?wid=800&hei=800&fmt=png-alpha',
    headline: 'Ultra Retina XDR Tandem OLED ekrani va qudratli M4 chipi.',
    description: 'Apple tarixidagi eng yupqa qurilma (5.1 mm). Tandem OLED displeyi ikki karra yorqinlik va chuqur qora ranglarni beradi.',
    colors: [
      { name: 'Space Black', hex: '#2e3033' },
      { name: 'Silver', hex: '#e3e4e6' }
    ],
    storages: [
      { size: '256 GB', extraPrice: 0 },
      { size: '512 GB', extraPrice: 200 },
      { size: '1 TB (Nano-texture)', extraPrice: 500 }
    ],
    specs: [
      'Ultra Retina XDR (Tandem OLED) 120Hz',
      'Yangi avlod Apple M4 chipi',
      'Atigi 5.1 mm qalinlikdagi eng yupqa Apple dizayni',
      'Apple Pencil Pro va yangi Magic Keyboard bilan mos',
      'Face ID va Thunderbolt 4 / USB 4'
    ]
  },
  'ipad-air-m2': {
    id: 'ipad-air-m2',
    name: 'iPad Air 11″ (M2)',
    category: 'iPad',
    basePrice: 599,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-11inch-blue-wifi?wid=800&hei=800&fmt=png-alpha',
    headline: 'M2 chipining kuchi endi ikki xil o‘lchamda.',
    description: 'Kuchli Apple M2 protsessori, gorizontal old kamera va zamonaviy pastel ranglar uyg‘unligi.',
    colors: [
      { name: 'Blue', hex: '#a4c4d9' },
      { name: 'Purple', hex: '#d1bfe3' },
      { name: 'Starlight', hex: '#e5ded2' },
      { name: 'Space Gray', hex: '#7d7e80' }
    ],
    storages: [
      { size: '128 GB', extraPrice: 0 },
      { size: '256 GB', extraPrice: 100 },
      { size: '512 GB', extraPrice: 300 }
    ],
    specs: [
      '11″ Liquid Retina True Tone displey',
      'Apple M2 chipi (Pro unumdorligi)',
      'Gorizontal 12 MP Center Stage old kamerasi',
      'Apple Pencil Pro va USB-C qo‘llab-quvvatlashi',
      'Stereo karnaylar va Touch ID'
    ]
  },
  'watch-series-10': {
    id: 'watch-series-10',
    name: 'Apple Watch Series 10',
    category: 'Watch',
    basePrice: 399,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s10-case-unselect-gallery-1-202409?wid=800&hei=800&fmt=png-alpha',
    headline: 'Eng katta OLED displey va eng yupqa alyuminiy korpus.',
    description: 'Series 10 — keng burchakli OLED ekrani, uyqu apnoesi xavfini aniqlash va 30 daqiqada 80% gacha tez zaryadlash imkoniyati.',
    colors: [
      { name: 'Jet Black', hex: '#1a1a1a' },
      { name: 'Rose Gold', hex: '#e8c6b6' },
      { name: 'Silver', hex: '#dcdde0' }
    ],
    storages: [
      { size: '42 mm', extraPrice: 0 },
      { size: '46 mm', extraPrice: 30 },
      { size: '46 mm + Cellular (LTE)', extraPrice: 130 }
    ],
    specs: [
      'Keng ko‘rish burchagiga ega OLED displey',
      'Apple S10 SiP va 4 yadroli Neural Engine',
      'EKG, qonda kislorod, uyqu apnoesi monitoringi',
      '50 metrgacha suv o‘tkazmaslik (WR50)',
      'Yangi Jet Black yaltiroq alyuminiy korpus'
    ]
  },
  'watch-ultra-2': {
    id: 'watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    category: 'Watch',
    basePrice: 799,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ultra-case-unselect-gallery-1-202409?wid=800&hei=800&fmt=png-alpha',
    headline: 'Qora titan korpus va eng qiyin sinovlarga tayyor quvvat.',
    description: 'Eng mustahkam va baquvvat Apple soati. Ekstremal sportchilar, g‘avvoslar va sayohatchilar uchun 3000 nit displey.',
    colors: [
      { name: 'Black Titanium', hex: '#27282a' },
      { name: 'Natural Titanium', hex: '#b7b3ab' }
    ],
    storages: [
      { size: '49 mm GPS + Cellular', extraPrice: 0 }
    ],
    specs: [
      '3000 nit quyoshda tiniq ko‘rinuvchi sapfir ekran',
      'Aviatsiya toifasidagi chidamli titan korpus',
      'Oddiy rejimda 36 soat, kam quvvatda 72 soat batareya',
      '100 metrgacha suv o‘tkazmaslik va chuqurlik o‘lchagich',
      'Ikki chastotali aniq GPS tizimi'
    ]
  },
  'airpods-pro-2': {
    id: 'airpods-pro-2',
    name: 'AirPods Pro (2-avlod)',
    category: 'AirPods',
    basePrice: 249,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=800&hei=800&fmt=png-alpha',
    headline: '2 karra kuchli shovqinni bekor qilish va eshitish salomatligi.',
    description: 'H2 chipi boshqaruvidagi fazoviy audio, moslashuvchan ovoz rejimi va USB-C MagSafe g‘ilofi.',
    colors: [
      { name: 'White', hex: '#ffffff' }
    ],
    storages: [
      { size: 'Standart (USB-C Case)', extraPrice: 0 }
    ],
    specs: [
      'Apple H2 audio protsessori',
      '2 barobar kuchaytirilgan Faol Shovqinni Yo‘qotish (ANC)',
      'Moslashuvchan shaffoflik va ovoz balandligi nazorati',
      'Bir zaryad bilan 6 soat, g‘ilof bilan 30 soat audio',
      'IP54 chang va suv tomchilariga chidamlilik'
    ]
  },
  'airpods-max': {
    id: 'airpods-max',
    name: 'AirPods Max',
    category: 'AirPods',
    basePrice: 549,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=800&hei=800&fmt=png-alpha',
    headline: 'Hi-Fi akustika, yangi ranglar va USB-C zaryadlash porti.',
    description: 'Har bir qulog‘ingiz uchun alohida H1 chipi, dinamik drayver va eng nozik musiqiy ohanglarni eshitish imkoniyati.',
    colors: [
      { name: 'Midnight', hex: '#1d2228' },
      { name: 'Starlight', hex: '#e6ded4' },
      { name: 'Blue', hex: '#37495b' },
      { name: 'Purple', hex: '#584964' },
      { name: 'Orange', hex: '#c5523b' }
    ],
    storages: [
      { size: 'Standart (USB-C)', extraPrice: 0 }
    ],
    specs: [
      'Apple tomonidan ishlab chiqilgan 40mm dinamik drayver',
      'Pro darajasidagi Faol Shovqinni Bekor Qilish',
      'Bosh harakatlarini kuzatuvchi fazoviy audio (Spatial Audio)',
      'Anodlangan alyuminiy chashkalar va nafas oluvchi to‘r',
      'ANC va fazoviy audio bilan 20 soat tinglash'
    ]
  },
  'airpods-4': {
    id: 'airpods-4',
    name: 'AirPods 4',
    category: 'AirPods',
    basePrice: 179,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-anc-select-202409?wid=800&hei=800&fmt=png-alpha',
    headline: 'Ochiq dizayndagi eng birinchi Faol Shovqinni Bekor Qilish.',
    description: 'Quloqqa mukammal tushadigan anatomik dizayn, H2 chipi va ovozni boshqarish imo-ishoralari.',
    colors: [
      { name: 'White', hex: '#ffffff' }
    ],
    storages: [
      { size: 'ANC modeli', extraPrice: 0 }
    ],
    specs: [
      'Apple H2 protsessori',
      'Faol shovqinni yo‘qotish (ANC) va shaffoflik rejimi',
      'Siri uchun bosh qimirlatish imo-ishoralari',
      'Eng ixcham USB-C zaryadlash g‘ilofi',
      'IP54 himoyasi bilan 30 soatgacha tinglash'
    ]
  }
};

// ==========================================
// 2. SAVATCHA (CART) HOLATI & LOCALSTORAGE
// ==========================================
const CART_STORAGE_KEY = 'apple_store_uz_cart_v1';
let cart = [];

// LocalStorage dan yuklash
function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error('LocalStorage yuklashda xatolik:', e);
    cart = [];
  }
  updateCartUI();
}

// LocalStorage ga saqlash
function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error('LocalStorage saqlashda xatolik:', e);
  }
  updateCartUI();
}

// Savatchaga qo'shish
function addToCart(productId, selectedColorName, selectedStorageSize) {
  const product = PRODUCTS[productId];
  if (!product) return;

  const color = selectedColorName || product.colors[0].name;
  const storageObj = product.storages.find(s => s.size === selectedStorageSize) || product.storages[0];
  const finalPrice = product.basePrice + storageObj.extraPrice;

  // Bir xil mahsulot, rang va xotira bo'lsa sonini oshiramiz
  const existingIndex = cart.findIndex(item => 
    item.productId === productId && 
    item.color === color && 
    item.storage === storageObj.size
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      image: product.image,
      color: color,
      storage: storageObj.size,
      price: finalPrice,
      quantity: 1
    });
  }

  saveCart();
  showToast(`${product.name} savatchaga qo‘shildi!`);
  animateBadge();
}

// Tezkor qo'shish (Kartochkadagi "Savatchaga" tugmasi)
function quickAddToCart(productId) {
  addToCart(productId);
}

// Savatchadan o'chirish
function removeFromCart(index) {
  if (cart[index]) {
    const removedName = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    showToast(`${removedName} savatchadan o‘chirildi`);
  }
}

// Mahsulot sonini o'zgartirish
function updateQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
  }
}

// Savatchani to'liq tozalash
function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Haqiqatan ham savatchani tozalamoqchimisiz?")) {
    cart = [];
    saveCart();
    showToast("Savatcha tozalandi");
  }
}

// Jami summani hisoblash
function calculateTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Savatcha UI ini yangilash
function updateCartUI() {
  const cartCountBadge = document.getElementById('cart-count');
  const cartItemsWrapper = document.getElementById('cart-items-wrapper');
  const cartTotalPrice = document.getElementById('cart-total-price');
  const cartFooter = document.getElementById('cart-footer');

  // Jami mahsulotlar soni
  const totalItemsCount = cart.reduce((count, item) => count + item.quantity, 0);
  if (cartCountBadge) {
    cartCountBadge.textContent = totalItemsCount;
    cartCountBadge.style.display = totalItemsCount > 0 ? 'flex' : 'none';
  }

  if (!cartItemsWrapper) return;

  // Bo'sh savatcha holati
  if (cart.length === 0) {
    cartItemsWrapper.innerHTML = `
      <div class="cart-empty-state">
        <div class="empty-icon">🛍️</div>
        <h4>Savatchangiz bo‘sh</h4>
        <p>Do‘konimizdagi eng sara Apple mahsulotlarini ko‘zdan kechiring va savatchangizga qo‘shing.</p>
        <button class="apple-btn btn-secondary" onclick="closeCartDrawer()">Xaridni boshlash</button>
      </div>
    `;
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  if (cartFooter) cartFooter.style.display = 'block';

  // Savatcha elementlarini chiqarish
  let itemsHtml = '';
  cart.forEach((item, index) => {
    itemsHtml += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <div class="cart-item-variant">${item.color} • ${item.storage}</div>
          <div class="cart-item-price">${(item.price * item.quantity).toLocaleString()} $</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQuantity(${index}, -1)" title="Kamaytirish">−</button>
          <span class="qty-number">${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity(${index}, 1)" title="Ko‘paytirish">+</button>
          <button class="item-remove-btn" onclick="removeFromCart(${index})" title="O‘chirish">✕</button>
        </div>
      </div>
    `;
  });

  cartItemsWrapper.innerHTML = itemsHtml;
  if (cartTotalPrice) {
    cartTotalPrice.textContent = `${calculateTotal().toLocaleString()} $`;
  }
}

// Badge animatsiyasi
function animateBadge() {
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.classList.add('bounce');
    setTimeout(() => badge.classList.remove('bounce'), 300);
  }
}

// Savatchani ochish / yopish
function openCartDrawer() {
  document.getElementById('cart-drawer')?.classList.add('active');
  document.getElementById('cart-drawer-overlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cart-drawer')?.classList.remove('active');
  document.getElementById('cart-drawer-overlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 3. MAHSULOTNING BATAFSIL MODAL OYNASI
// ==========================================
let currentModalProductId = null;
let currentModalColor = null;
let currentModalStorage = null;

function openProductModal(productId) {
  const product = PRODUCTS[productId];
  if (!product) return;

  currentModalProductId = productId;
  currentModalColor = product.colors[0].name;
  currentModalStorage = product.storages[0].size;

  const modalBody = document.getElementById('modal-body-content');
  if (!modalBody) return;

  // Ranglar tugmachalari
  const colorsHtml = product.colors.map((c, i) => `
    <button type="button" class="option-chip ${i === 0 ? 'selected' : ''}" 
            onclick="selectModalColor('${c.name}', this)">
      <span class="color-dot" style="background-color: ${c.hex}; margin-right: 6px;"></span>
      ${c.name}
    </button>
  `).join('');

  // Xotira tugmachalari
  const storagesHtml = product.storages.map((s, i) => `
    <button type="button" class="option-chip ${i === 0 ? 'selected' : ''}" 
            onclick="selectModalStorage('${s.size}', ${s.extraPrice}, this)">
      ${s.size} ${s.extraPrice > 0 ? `(+${s.extraPrice} $)` : ''}
    </button>
  `).join('');

  // Spetsifikatsiyalar
  const specsHtml = product.specs.map(spec => `<li>✓ ${spec}</li>`).join('');

  modalBody.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-image-col">
        <img src="${product.image}" alt="${product.name}" class="modal-product-img" id="modal-display-img">
      </div>
      <div class="modal-info-col">
        <div class="modal-category-tag">${product.category}</div>
        <h2>${product.name}</h2>
        <div class="modal-price-display" id="modal-price-display">${product.basePrice.toLocaleString()} $</div>
        <p style="color: #6e6e73; font-size: 0.9rem; margin-bottom: 1.25rem;">${product.description}</p>
        
        <div class="modal-options-block">
          <span class="options-label">Rangni tanlang:</span>
          <div class="options-group" id="modal-colors-group">${colorsHtml}</div>
        </div>

        <div class="modal-options-block">
          <span class="options-label">Xotira / Variantni tanlang:</span>
          <div class="options-group" id="modal-storages-group">${storagesHtml}</div>
        </div>

        <div class="modal-specs-list">
          <strong style="display:block; margin-bottom: 0.4rem; font-size: 0.85rem;">Texnik xususiyatlari:</strong>
          <ul>${specsHtml}</ul>
        </div>

        <div style="display: flex; gap: 0.75rem;">
          <button class="apple-btn btn-primary" style="flex: 1; padding: 0.8rem;" onclick="addFromModalToCart()">
            Savatchaga qo‘shish
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('product-modal')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectModalColor(colorName, btnElement) {
  currentModalColor = colorName;
  const parent = btnElement.parentElement;
  parent.querySelectorAll('.option-chip').forEach(el => el.classList.remove('selected'));
  btnElement.classList.add('selected');
}

function selectModalStorage(storageSize, extraPrice, btnElement) {
  currentModalStorage = storageSize;
  const parent = btnElement.parentElement;
  parent.querySelectorAll('.option-chip').forEach(el => el.classList.remove('selected'));
  btnElement.classList.add('selected');

  // Narxni yangilash
  const product = PRODUCTS[currentModalProductId];
  if (product) {
    const newPrice = product.basePrice + extraPrice;
    const priceDisplay = document.getElementById('modal-price-display');
    if (priceDisplay) {
      priceDisplay.textContent = `${newPrice.toLocaleString()} $`;
    }
  }
}

function addFromModalToCart() {
  if (currentModalProductId) {
    addToCart(currentModalProductId, currentModalColor, currentModalStorage);
    closeProductModal();
    openCartDrawer();
  }
}

function closeProductModal() {
  document.getElementById('product-modal')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 4. BUYURTMA VA TELEGRAM BOT INTEGRATSIYASI
// ==========================================
// Bot ma'lumotlari:
const TELEGRAM_CONFIG = {
  token: '9067753692:AAFda7aXXbfs4QOPbd5GdU0WwTYbTxKW9no',
  chatId: '-1004400912360'
};

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Savatchangiz bo‘sh!");
    return;
  }
  closeCartDrawer();

  // Buyurtma preview qismini to'ldirish
  const previewBox = document.getElementById('order-preview-box');
  if (previewBox) {
    let rowsHtml = '';
    cart.forEach(item => {
      rowsHtml += `
        <div class="preview-row">
          <span>${item.name} (${item.color}, ${item.storage}) × ${item.quantity}</span>
          <strong>${(item.price * item.quantity).toLocaleString()} $</strong>
        </div>
      `;
    });
    rowsHtml += `
      <div class="preview-row preview-total">
        <span>Jami to‘lov:</span>
        <span>${calculateTotal().toLocaleString()} $</span>
      </div>
    `;
    previewBox.innerHTML = rowsHtml;
  }

  document.getElementById('checkout-modal')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal')?.classList.remove('active');
  document.body.style.overflow = '';
}

// Buyurtmani jo'natish
async function handleOrderSubmit(e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Savatchangiz bo‘sh!");
    return;
  }

  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const addressInput = document.getElementById('customer-address');
  const notesInput = document.getElementById('customer-notes');
  const submitBtn = document.getElementById('submit-order-btn');

  const customerName = nameInput.value.trim();
  const customerPhone = phoneInput.value.trim();
  const customerAddress = addressInput.value.trim();
  const customerNotes = notesInput.value.trim();

  if (!customerName || !customerPhone || !customerAddress) {
    alert("Iltimos, barcha majburiy maydonlarni to‘ldiring!");
    return;
  }

  // Tugmani yuklanish holatiga o'tkazish
  const btnText = submitBtn.querySelector('.btn-text-content');
  const spinner = submitBtn.querySelector('.spinner-loader');
  if (btnText && spinner) {
    btnText.style.display = 'none';
    spinner.style.display = 'inline-block';
    submitBtn.disabled = true;
  }

  // Telegram xabari formatini tayyorlash
  const orderId = 'APL-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const dateStr = now.toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });

  let itemsText = '';
  cart.forEach((item, idx) => {
    itemsText += `${idx + 1}. <b>${item.name}</b>\n`;
    itemsText += `   ▫️ Rangi: ${item.color}\n`;
    itemsText += `   ▫️ Xotirasi: ${item.storage}\n`;
    itemsText += `   ▫️ Miqdori: ${item.quantity} dona\n`;
    itemsText += `   ▫️ Narxi: ${(item.price * item.quantity).toLocaleString()} $\n\n`;
  });

  const totalSum = calculateTotal().toLocaleString();

  const telegramMessage = `
🍎 <b>YANGI APPLE BUYURTMASI!</b> #${orderId}
─────────────────────
👤 <b>Mijoz:</b> ${customerName}
📞 <b>Telefon:</b> ${customerPhone}
📍 <b>Manzil:</b> ${customerAddress}
${customerNotes ? `📝 <b>Izoh:</b> ${customerNotes}\n` : ''}─────────────────────
📦 <b>BUYURTMA TARKIBI:</b>
${itemsText}─────────────────────
💰 <b>JAMI SUMMA:</b> ${totalSum} $
🚚 <b>Yetkazib berish:</b> BEPUL
⏰ <b>Sana:</b> ${dateStr}
─────────────────────
<i>Apple Store O‘zbekiston Rasmiy Tizimi</i>
  `.trim();

  try {
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_CONFIG.token}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.chatId,
        text: telegramMessage,
        parse_mode: 'HTML'
      })
    });

    const result = await response.json();

    if (result.ok) {
      // Muvaffaqiyatli
      cart = [];
      saveCart();
      document.getElementById('order-form').reset();
      closeCheckoutModal();

      showToast("Buyurtmangiz qabul qilindi! Tez orada operator bog‘lanadi.");
      alert(`Rahmat, ${customerName}! Buyurtmangiz #${orderId} muvaffaqiyatli rasmiylashtirildi va Telegram kanalimizga yuborildi. Operatorlarimiz tez orada siz bilan bog‘lanishadi.`);
    } else {
      console.error('Telegram API xatoligi:', result);
      // Agar kanal id noto'g'ri bo'lsa yoki bot kanalga admin qilinmagan bo'lsa
      alert(`Telegram xatoligi: ${result.description || "Xabar yuborilmadi"}. Iltimos, bot kanalda administrator ekanligini tekshiring.`);
    }
  } catch (err) {
    console.error('Tarmoq xatosi:', err);
    alert("Xatolik yuz berdi. Internet aloqangizni tekshiring yoki keyinroq urinib ko‘ring.");
  } finally {
    // Tugmani asl holatiga qaytarish
    if (btnText && spinner) {
      btnText.style.display = 'inline-block';
      spinner.style.display = 'none';
      submitBtn.disabled = false;
    }
  }
}

// ==========================================
// 5. TOAST BILDIRISHNOMASI
// ==========================================
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('active');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}

// ==========================================
// 6. QIDIRUV (SEARCH) TIZIMI
// ==========================================
function initSearch() {
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('site-search-input');
  const searchResults = document.getElementById('search-results');

  if (!searchBtn || !searchOverlay || !searchInput) return;

  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.toggle('active');
    if (searchOverlay.classList.contains('active')) {
      searchInput.focus();
    }
  });

  searchCloseBtn?.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      if (searchResults) searchResults.innerHTML = '';
      return;
    }

    const matches = Object.values(PRODUCTS).filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `<p style="padding: 0.75rem; color: #86868b; font-size: 0.9rem;">Hech narsa topilmadi: "${query}"</p>`;
      return;
    }

    searchResults.innerHTML = matches.map(p => `
      <div class="search-result-item" onclick="openProductModal('${p.id}'); document.getElementById('search-overlay').classList.remove('active');">
        <img src="${p.image}" alt="${p.name}">
        <div class="search-result-info">
          <h4>${p.name}</h4>
          <p>${p.category} • ${p.basePrice.toLocaleString()} $ dan</p>
        </div>
      </div>
    `).join('');
  });
}

// ==========================================
// 7. SCROLL REVEAL ANIMATSIYALARI
// ==========================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Agar brauzerda observer bo'lmasa to'g'ridan to'g'ri ko'rsatamiz
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

// ==========================================
// 8. HODISALAR (EVENT LISTENERS)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Savatchani yuklash
  loadCart();

  // Qidiruvni yoqish
  initSearch();

  // Scroll animatsiyalarini ishga tushirish
  initScrollReveal();

  // Savatcha tugmasi
  document.getElementById('cart-toggle-btn')?.addEventListener('click', openCartDrawer);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cart-drawer-overlay')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cart-clear-btn')?.addEventListener('click', clearCart);

  // Buyurtma formasi
  document.getElementById('checkout-trigger-btn')?.addEventListener('click', openCheckoutModal);
  document.getElementById('checkout-close-btn')?.addEventListener('click', closeCheckoutModal);
  document.getElementById('order-form')?.addEventListener('submit', handleOrderSubmit);

  // Modal oynalar yopilishi
  document.getElementById('modal-close-btn')?.addEventListener('click', closeProductModal);
  document.getElementById('product-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'product-modal') closeProductModal();
  });
  document.getElementById('checkout-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'checkout-modal') closeCheckoutModal();
  });

  // Mobil menyu ochish/yopish
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('active');
    });

    // Mobil havolalar bosilganda yopish
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
      });
    });
  }

  // Escape tugmasi bosilganda modallarni yopish
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCheckoutModal();
      closeCartDrawer();
      document.getElementById('search-overlay')?.classList.remove('active');
      document.getElementById('mobile-nav-drawer')?.classList.remove('active');
    }
  });
});
