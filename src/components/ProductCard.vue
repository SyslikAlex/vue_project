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

<style scoped>
.card {
  height: 100%;
}

h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.4;
}

.price {
  font-weight: 700;
  margin: 0.5rem 0;
  color: #2c3e50;
  font-size: 1.25rem;
}

.desc {
  flex: 1;
  margin: 0.75rem 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.row {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
}

.btn {
  flex: 1;
  text-align: center;
}
</style>

