<script>
import ProductCard from '../components/ProductCard.vue'
import { useProductsStore } from '../stores/products'

export default {
  name: 'HomeView',
  components: { ProductCard },
  data() {
    return { }
  },
  computed: {
    featured() {
      const p = useProductsStore()
      return p.items.slice(0, 3)
    },
  },
}
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1>Vitajte v našom obchode s hudobnými nástrojmi</h1>
      <p class="lead">Vyberte si z jednoduchej ponuky nástrojov — všetko pre začiatočníkov aj profesionálov.</p>
      <p style="margin-top:1rem"><router-link to="/katalog" class="green">Zobraziť celý katalóg →</router-link></p>
    </div>
  </section>

  <section class="catalog container">
    <h2>Odporúčané</h2>
    <div class="grid">
      <ProductCard v-for="p in featured" :key="p.id" :product="p" />
    </div>
  </section>
</template>

