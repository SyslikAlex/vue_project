<template>
  <article class="card">
    <div class="media">
      <img :src="product.image" :alt="product.name" loading="lazy" />
    </div>
    <div class="content">
      <h3>{{ product.name }}</h3>
      <p class="price">{{ product.price }} €</p>
      <p class="desc">{{ product.description }}</p>
      <div class="row">
        <router-link :to="`/produkt/${product.id}`" class="btn muted">Detaily</router-link>
        <button class="btn primary" @click="add">Pridať do košíka</button>
      </div>
    </div>
  </article>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  name: 'ProductCard',
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    add() {
      const cart = useCartStore()
      cart.addToCart(this.product.id, 1)
    },
  },
}
</script>

<style scoped>
.card { border:1px solid rgba(11,59,87,0.06); padding:0; border-radius:12px; background:var(--color-background-soft); overflow:hidden; box-shadow: 0 10px 30px rgba(2,6,23,0.12); display:flex; flex-direction:column; transition: transform .18s ease, box-shadow .18s ease }
.card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(2,6,23,0.16) }
.media { width:100%; height:180px; background:linear-gradient(180deg, #fff, #f6fbff); display:flex; align-items:center; justify-content:center }
.media img { max-width:100%; max-height:100%; object-fit:cover }
.content { padding:1rem }
.price { font-weight:700; margin:0.25rem 0; color:#0b4a6f }
.desc { color:var(--vt-c-text-light-2); font-size:0.95rem; min-height:44px }
.row { display:flex; gap:0.5rem; margin-top:0.75rem }
.btn { border:0; padding:0.55rem 0.9rem; border-radius:10px; cursor:pointer }
.btn.muted { background:#fff; color:#0b3b57; text-decoration:none; border:1px solid rgba(11,59,87,0.06) }
.btn.primary { background:#0b83c2; color:#fff }
</style>
