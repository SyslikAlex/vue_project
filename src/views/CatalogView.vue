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

