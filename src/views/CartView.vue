<template>
  <div class="cart-view">
    <div class="container">
      <h1>Your Shopping Cart</h1>

      <div v-if="items.length" class="cart-content">
        <div class="cart-table-wrapper">
          <table class="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="it in detailed" :key="it.product.id" class="cart-item">
                <td class="product-name">
                  <div class="product-info">
                    <p>{{ it.product.name }}</p>
                    <span class="price-per-unit">{{ it.product.price }}€ each</span>
                  </div>
                </td>
                <td class="qty-cell">
                  <div class="qty-input-wrapper">
                    <button @click="update(it.product.id, Math.max(1, it.qty - 1))" class="qty-btn">−</button>
                    <input type="number" v-model.number="it.qty" @change="update(it.product.id, it.qty)" min="1" class="qty-input" />
                    <button @click="update(it.product.id, it.qty + 1)" class="qty-btn">+</button>
                  </div>
                </td>
                <td class="price-cell">
                  <span class="price">{{ (it.product.price * it.qty).toFixed(2) }}€</span>
                </td>
                <td class="action-cell">
                  <button @click="remove(it.product.id)" class="btn-remove" title="Remove item">✕</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="cart-summary">
          <div class="summary-box">
            <h3>Order Summary</h3>
            <div class="summary-row">
              <span>Subtotal:</span>
              <span>{{ totalPrice.toFixed(2) }}€</span>
            </div>
            <div class="summary-row">
              <span>Shipping:</span>
              <span class="free">Free</span>
            </div>
            <div class="summary-row discount" v-if="totalPrice > 50">
              <span>Discount:</span>
              <span>-5%</span>
            </div>
            <div class="summary-row total">
              <span>Total:</span>
              <span>{{ (totalPrice > 50 ? totalPrice * 0.95 : totalPrice).toFixed(2) }}€</span>
            </div>
            <button @click="checkout" class="btn primary large full-width">Proceed to Checkout</button>
            <button @click="clear" class="btn outline full-width">Continue Shopping</button>
          </div>
        </div>
      </div>

      <div v-else class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>No items in your cart yet. Let's find you something great!</p>
        <router-link to="/katalog" class="btn primary large">Explore Catalog</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/products'

export default {
  name: 'CartView',
  computed: {
    store() { return useProductsStore() },
    items() { return this.store.cartItems },
    detailed() { return this.store.detailedItems },
    totalPrice() { return this.store.totalPrice },
  },
  methods: {
    update(id, qty) { const store = useProductsStore(); store.setQty(id, qty) },
    remove(id) { const store = useProductsStore(); store.removeFromCart(id) },
    clear() { this.$router.push('/katalog') },
    checkout() { alert('Thank you! This is a demo, payment is not implemented.'); this.store.clearCart(); this.$router.push('/') },
  },
}
</script>

<style scoped>
.cart-view {
  padding: 2rem 0;
  background: #f9f9f9;
  min-height: 60vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h1 {
  color: #1a1a1a;
  margin: 2rem 0 2.5rem;
  font-size: 2.2rem;
  font-weight: 700;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 2rem;
  margin-bottom: 2rem;
}

.cart-table-wrapper {
  background: white;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table thead {
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
}

.cart-table th {
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 600;
  color: #1a1a1a;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cart-table td {
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  color: #424242;
}

.cart-item:hover {
  background: #f9f9f9;
}

.product-name {
  width: 40%;
}

.product-info p {
  margin: 0;
  color: #1a1a1a;
  font-weight: 500;
}

.price-per-unit {
  display: block;
  font-size: 0.85rem;
  color: #999;
  margin-top: 0.25rem;
}

.qty-cell {
  width: 20%;
}

.qty-input-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 0.25rem;
  width: fit-content;
}

.qty-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  color: #424242;
  font-weight: 600;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.qty-btn:hover {
  background: #f5f5f5;
  color: #1a1a1a;
}

.qty-input {
  width: 50px;
  padding: 0.4rem;
  border: none;
  text-align: center;
  font-weight: 500;
  background: transparent;
  color: #1a1a1a;
}

.qty-input::-webkit-outer-spin-button,
.qty-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.price-cell {
  width: 20%;
}

.price {
  font-weight: 700;
  color: #1a1a1a;
  font-size: 1.05rem;
}

.action-cell {
  width: 5%;
  text-align: center;
}

.btn-remove {
  background: transparent;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  color: #e74c3c;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn-remove:hover {
  background: #e74c3c;
  color: white;
  border-color: #e74c3c;
}

.cart-summary {
  display: flex;
  flex-direction: column;
}

.summary-box {
  background: white;
  padding: 1.5rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 100px;
}

.summary-box h3 {
  margin: 0 0 1.5rem 0;
  color: #1a1a1a;
  font-size: 1.1rem;
  font-weight: 600;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  color: #424242;
  font-size: 0.95rem;
}

.summary-row span:last-child {
  font-weight: 500;
  color: #1a1a1a;
}

.free {
  color: #27ae60;
  font-weight: 600;
}

.discount {
  color: #27ae60;
}

.summary-row.total {
  border-bottom: none;
  border-top: 1px solid #e0e0e0;
  padding: 1rem 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.summary-row.total span:last-child {
  font-size: 1.3rem;
  color: #2c3e50;
}

.full-width {
  width: 100%;
  margin-top: 1rem;
}

.empty-cart {
  background: white;
  border-radius: 6px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 2rem 0;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-cart h2 {
  color: #1a1a1a;
  margin: 0 0 0.75rem 0;
  font-size: 1.8rem;
}

.empty-cart p {
  color: #424242;
  margin-bottom: 2rem;
  font-size: 1rem;
}

@media (max-width: 900px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .summary-box {
    position: static;
  }
}

@media (max-width: 768px) {
  .cart-table {
    font-size: 0.85rem;
  }

  .cart-table th,
  .cart-table td {
    padding: 0.75rem;
  }

  .product-name {
    width: auto;
  }

  .qty-input-wrapper {
    flex-direction: column;
  }

  .qty-input {
    width: 100%;
  }
}
</style>
