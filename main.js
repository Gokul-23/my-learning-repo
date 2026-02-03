const products = JSON.parse(document.getElementById('products-data').textContent);
const productsEl = document.getElementById('products');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');

let cart = JSON.parse(localStorage.getItem('cart') || '{}');

function saveCart(){ localStorage.setItem('cart', JSON.stringify(cart)); renderCart(); }

function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
}

function renderProducts(){
  productsEl.innerHTML = '';
  products.forEach(p=>{
    const d = document.createElement('div'); d.className='card';
    d.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <button class="button" data-id="${p.id}">Add</button>
    `;
    productsEl.appendChild(d);
  });
  productsEl.querySelectorAll('button[data-id]').forEach(btn=>{
    btn.addEventListener('click', e=> addToCart(e.target.dataset.id));
  });
}

function renderCart(){
  const ids = Object.keys(cart);
  cartCount.textContent = ids.reduce((s,id)=>s+cart[id],0);
  cartItemsEl.innerHTML = '';
  let total = 0;
  ids.forEach(id=>{
    const p = products.find(x=>x.id==id);
    const qty = cart[id];
    total += p.price * qty;
    const row = document.createElement('div'); row.className='cart-item';
    row.innerHTML = `<div>${p.name} x ${qty}</div><div>$${(p.price*qty).toFixed(2)}</div>`;
    cartItemsEl.appendChild(row);
  });
  cartTotalEl.textContent = total.toFixed(2);
}

document.getElementById('view-cart').addEventListener('click', ()=> cartModal.classList.toggle('hidden'));
document.getElementById('close-cart').addEventListener('click', ()=> cartModal.classList.add('hidden'));
document.getElementById('checkout').addEventListener('click', ()=>{
  alert('Checkout is a mock here. Integrate Stripe/Firebase to process orders.');
});

renderProducts();
renderCart();
