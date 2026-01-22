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
import { useProductsStore } from '../stores/products'

export default {
  name: 'ProductCard',
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    add() {
      const store = useProductsStore()
      store.addToCart(this.product.id, 1)
    },
  },
}
</script>

