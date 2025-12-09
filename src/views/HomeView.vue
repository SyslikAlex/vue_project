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

<style scoped>
.grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap:1rem; margin-top:1rem }
h1 { margin:0 0 0.5rem 0 }

.hero { padding:2.5rem 0; background: linear-gradient(180deg,#ffffff,#fbfdff) }
.hero .lead { max-width:720px; color: rgba(11,59,87,0.8); margin-top:0.5rem }
.catalog { padding-top:1.5rem }
</style>
