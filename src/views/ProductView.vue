<template>
  <section v-if="product" class="product container">
    <div class="layout">
      <div class="photo"><img :src="product.image" :alt="product.name" loading="lazy" /></div>
      <div class="meta">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price }} €</p>
        <p>{{ product.description }}</p>

        <div class="controls">
          <label>Počet:
            <input type="number" v-model.number="qty" min="1" /></label>
          <button class="btn primary" @click="add">Pridať do košíka</button>
        </div>
      </div>
    </div>
  </section>
  <section v-else>
    <p>Produkt nenájdený.</p>
  </section>
</template>

<script>
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'

export default {
  name: 'ProductView',
  props: ['id'],
  data() {
    return { product: null, qty: 1 }
  },
  created() {
    const ps = useProductsStore()
    this.product = ps.getById(this.$route.params.id)
  },
  methods: {
    add() {
      const cart = useCartStore()
      cart.addToCart(this.product.id, this.qty)
      this.$router.push({ name: 'cart' })
    },
  },
}
</script>

