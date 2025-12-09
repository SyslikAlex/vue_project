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

<style scoped>
.price { font-weight:700; margin:0.25rem 0; color:#0b4a6f }
.product .layout { display:flex; gap:1.25rem; align-items:flex-start }
.product .photo { width:360px; height:260px; background:#fff; display:flex; align-items:center; justify-content:center; border-radius:10px; box-shadow:0 8px 20px rgba(11,59,87,0.06) }
.product .photo img { max-width:100%; max-height:100%; object-fit:contain }
.controls { margin-top:1rem; display:flex; gap:0.5rem; align-items:center }
.btn.primary { background:#0b83c2; color:#fff; border:0; padding:0.6rem 0.9rem; border-radius:8px }
input[type=number] { width:90px; padding:0.4rem }
</style>
