<template>
  <section>
    <h1>Váš košík</h1>

    <div v-if="items.length">
      <table class="cart">
        <thead>
          <tr><th>Produkt</th><th>Množstvo</th><th>Cena</th><th></th></tr>
        </thead>
        <tbody>
          <tr v-for="it in detailed" :key="it.product.id">
            <td>{{ it.product.name }}</td>
            <td>
              <input type="number" v-model.number="it.qty" @change="update(it.product.id, it.qty)" min="1" />
            </td>
            <td>{{ it.product.price * it.qty }} €</td>
            <td><button @click="remove(it.product.id)">Odstrániť</button></td>
          </tr>
        </tbody>
      </table>

      <p class="total">Spolu: <strong>{{ totalPrice }} €</strong></p>
      <div class="actions">
        <button @click="checkout" class="btn primary">Prejsť k platbe</button>
        <button @click="clear">Vymazať košík</button>
      </div>
    </div>
    <div v-else>
      <p>Váš košík je prázdny. <router-link to="/katalog">Prejsť do katalógu</router-link></p>
    </div>
  </section>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  name: 'CartView',
  computed: {
    cart() { return useCartStore() },
    items() { return this.cart.items },
    detailed() { return this.cart.detailedItems },
    totalPrice() { return this.cart.totalPrice },
  },
  methods: {
    update(id, qty) { const cart = useCartStore(); cart.setQty(id, qty) },
    remove(id) { const cart = useCartStore(); cart.removeFromCart(id) },
    clear() { const cart = useCartStore(); cart.clearCart() },
    checkout() { alert('Ďakujeme! Toto je demo, platba nie je implementovaná.'); this.clear() },
  },
}
</script>

