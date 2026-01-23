<template>
  <section class="container">
    <h1>Katalóg produktov</h1>
    <p>Všetky dostupné nástroje v prehľadnom zobrazení.</p>

    <div class="grid">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
  </section>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import { useProductsStore } from '../stores/products'

export default {
  name: 'CatalogView',
  components: { ProductCard },
  computed: {
    products() {
      const s = useProductsStore()
      return s.items
    },
  },
}
</script>

<style scoped>
.container {
  padding-top: 1rem;
}

h1 {
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

p {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }
}
</style>

