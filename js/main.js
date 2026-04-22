/* Ramires Vendas — main.js */

const WPP = '5511917949412';

const PRODUCTS = [
  {
    id: 0,
    name: 'iPhone 17 Pro Max Cartier Edition',
    cat: 'iPhone · Edição Limitada',
    price: 'Consulte',
    img: 'assets/images/iphone-cartier.jpeg',
    desc: 'Banhado a ouro 24KT com pantera de diamantes Cartier e gravações artesanais exclusivas. A mais icônica edição de luxo disponível.',
    features: ['Banhamento em ouro 24KT', 'Pantera de diamantes Cartier', 'iPhone 17 Pro Max original', 'Caixa premium banhada a ouro', 'Certificado de autenticidade']
  },
  {
    id: 1,
    name: 'iPhone 17 Pro Max Classic Arabesque',
    cat: 'iPhone · Edição Clássica',
    price: 'Consulte',
    img: 'assets/images/iphone-arabescos-render.jpeg',
    desc: 'Gravações arabescas simétricas em ouro 24KT com acabamento espelhado e bordas ornamentais de alto requinte.',
    features: ['Banhamento em ouro 24KT', 'Gravações arabescas simétricas', 'Acabamento espelhado premium', 'iPhone 17 Pro Max original', 'Certificado de autenticidade']
  },
  {
    id: 2,
    name: 'iPhone 17 Pro Max Pure Gold',
    cat: 'iPhone · Pure Gold',
    price: 'Consulte',
    img: 'assets/images/iphone-smooth-render.jpeg',
    desc: 'Design minimalista totalmente banhado em ouro 24KT. Sofisticação na forma mais pura, sem ornamentos — apenas ouro.',
    features: ['Banhamento em ouro 24KT', 'Design minimalista exclusivo', 'Acabamento espelhado uniforme', 'iPhone 17 Pro Max original', 'Certificado de autenticidade']
  },
  {
    id: 3,
    name: 'iPhone 16 Pro Royal Edition',
    cat: 'iPhone · Royal Edition',
    price: 'Consulte',
    img: 'assets/images/iphone-royal.jpeg',
    desc: 'Gravação de coroa real com caligrafia árabe personalizada e arabescos florais em ouro 24KT. Peça encomendada para realeza.',
    features: ['Banhamento em ouro 24KT', 'Gravação de coroa real', 'Caligrafia árabe personalizada', 'Arabescos florais premium', 'Certificado de autenticidade']
  },
  {
    id: 4,
    name: 'iPhone 16 Pro Pegasus Edition',
    cat: 'iPhone · Edição Especial',
    price: 'Consulte',
    img: 'assets/images/iphone-pegasus.jpeg',
    desc: 'Imponente gravação do Pégaso alado em alto relevo com molduras ornamentais em ouro 24KT. Arte e tecnologia em uma peça.',
    features: ['Banhamento em ouro 24KT', 'Pégaso em alto relevo', 'Molduras ornamentais gravadas', 'iPhone 16 Pro original', 'Certificado de autenticidade']
  },
  {
    id: 5,
    name: 'iPhone 16 Pro Max Gucci Bee',
    cat: 'iPhone · Gucci Edition',
    price: 'Consulte',
    img: 'assets/images/iphone-gucci.jpeg',
    desc: 'Monograma GG em ouro com abelha central cravejada de diamantes e listras multicoloridas. A fusão do luxo e streetwear.',
    features: ['Banhamento em ouro 24KT', 'Monograma GG gravado', 'Abelha com diamantes', 'Listras multicoloridas', 'Certificado de autenticidade']
  },
  {
    id: 6,
    name: 'iPhone 17 Pro Max Luxury Edition 2026',
    cat: 'iPhone · Luxury 2026',
    price: 'Consulte',
    img: 'assets/images/iphone-luxury-bee.jpeg',
    desc: 'Edição 2026 exclusiva com abelha dourada em relevo e acabamento rose gold com brilho espelhado incomparável.',
    features: ['Acabamento rose gold', 'Abelha dourada em relevo', 'Edição 2026 exclusiva', 'iPhone 17 Pro Max original', 'Certificado de autenticidade']
  },
  {
    id: 7,
    name: 'iPhone 17 Pro Max Kit Gold',
    cat: 'iPhone · Kit Premium',
    price: 'Consulte',
    img: 'assets/images/iphone-caixa-gold.jpeg',
    desc: 'Kit completo com iPhone 17 Pro Max 24KT em caixa premium banhada a ouro e certificado de autenticidade. O presente perfeito.',
    features: ['iPhone 17 Pro Max 24KT', 'Caixa premium banhada a ouro', 'Certificado de autenticidade', 'Embalagem de presente', 'Entrega rastreada']
  },
  {
    id: 8,
    name: 'Apple Watch Ultra Gold Collection',
    cat: 'Apple Watch · 24KT Gold',
    price: 'Consulte',
    img: 'assets/images/watch-colecao.jpeg',
    desc: 'Coleção completa de Apple Watch banhados a ouro 24KT com gravações exclusivas na caixa e pulseira. Elegância no pulso.',
    features: ['Banhamento em ouro 24KT', 'Gravações artesanais', 'Caixa e pulseira douradas', 'Compatível com Apple Watch Ultra', 'Certificado de autenticidade']
  },
  {
    id: 9,
    name: 'Apple Watch Engraved Gold',
    cat: 'Apple Watch · Gravado',
    price: 'Consulte',
    img: 'assets/images/watch-pulso.jpeg',
    desc: 'Pulseira e caixa completamente banhadas a ouro 24KT com detalhes gravados à mão. Elegância total no seu pulso.',
    features: ['Banhamento ouro 24KT', 'Gravações artesanais à mão', 'Caixa e pulseira douradas', 'Padrão floral detalhado', 'Certificado de autenticidade']
  },
  {
    id: 10,
    name: 'Pulseira Apple Watch 24KT Floral',
    cat: 'Apple Watch · Pulseira',
    price: 'Consulte',
    img: 'assets/images/watch-pulseira.jpeg',
    desc: 'Pulseira metálica banhada a ouro 24KT com gravações florais artesanais. Compatível com todas as séries do Apple Watch.',
    features: ['Banhamento ouro 24KT', 'Gravações florais artesanais', 'Compatível com todas as séries', 'Metal premium', 'Acabamento espelhado']
  },
  {
    id: 11,
    name: 'AirPods Max Geração 2',
    cat: 'Acessórios · Semi Novo',
    price: 'R$ 2.399,00',
    img: 'assets/images/airpods-max.jpeg',
    desc: 'AirPods Max Geração 2 semi novo impecável com cancelamento de ruído ativo de última geração. Estado de novo.',
    features: ['AirPods Max Geração 2', 'Semi novo impecável', 'Cancelamento de ruído ativo', 'Áudio espacial', 'Acompanha todos os acessórios']
  }
];

let cart = JSON.parse(localStorage.getItem('rv_cart') || '[]');

/* ---- Header scroll ---- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---- Mobile menu ---- */
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

/* ---- Filter tabs ---- */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ---- Cart ---- */
function updateCartUI() {
  const count = cart.length;
  const countEl = document.getElementById('cartCount');
  countEl.textContent = count;
  countEl.classList.toggle('visible', count > 0);

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (count === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p>Seu carrinho está vazio</p>
      </div>`;
    footerEl.style.display = 'none';
    return;
  }

  footerEl.style.display = 'block';
  itemsEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}" /></div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span>${item.price}</span>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${idx})">×</button>
    </div>
  `).join('');

  const hasPriced = cart.some(i => i.price !== 'Consulte');
  document.getElementById('cartTotal').textContent = hasPriced ? '—' : 'A consultar';

  const names = cart.map(i => `• ${i.name}`).join('%0A');
  document.getElementById('checkoutBtn').href =
    `https://wa.me/${WPP}?text=Olá!%20Tenho%20interesse%20nos%20seguintes%20produtos:%0A${names}`;

  localStorage.setItem('rv_cart', JSON.stringify(cart));
}

function addToCart(id) {
  const product = PRODUCTS[id];
  if (!product) return;
  if (!cart.find(i => i.id === id)) {
    cart.push(product);
    updateCartUI();
    openCartSidebar();
  }
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartUI();
}

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

/* ---- Cart sidebar ---- */
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');

function openCartSidebar() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCartSidebar() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
cartBtn.addEventListener('click', openCartSidebar);
cartClose.addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

/* ---- Product Modal ---- */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
let currentModalId = null;

function openModal(id) {
  const p = PRODUCTS[id];
  if (!p) return;
  currentModalId = id;

  document.getElementById('modalImg').innerHTML = `<img src="${p.img}" alt="${p.name}" />`;
  document.getElementById('modalCat').textContent = p.cat;
  document.getElementById('modalTitle').innerHTML = p.name.replace(/(\w+\s+\w+)$/, '<em>$1</em>');
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalFeatures').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalCartBtn').onclick = () => { addToCart(id); closeModal(); };

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

window.openModal = openModal;
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

/* ---- Intersection Observer: animate on scroll ---- */
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.05}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .feature-item, .gallery-item').forEach(el => {
  observer.observe(el);
});

/* ---- Init ---- */
updateCartUI();
