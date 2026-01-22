<template>
  <header class="hb">
    <div class="inner">
      <router-link to="/" class="brand">
        <span class="brand-icon">🎸</span>
        <span class="brand-text">Hudobné Nástroje</span>
      </router-link>

      <nav class="nav">
        <router-link to="/katalog" class="nav-link">Katalóg</router-link>
        <router-link to="/objednavky" class="nav-link">Objednávky</router-link>
        <router-link to="/about" class="nav-link">O nás</router-link>
        <router-link to="/kosik" class="cart-link">
          <span class="cart-icon">🛒</span>
          <span class="cart-text">Košík</span>
          <span class="count" v-if="totalItems > 0">{{ totalItems }}</span>
        </router-link>
      </nav>

      <button class="menu-btn" @click="toggleMenu" aria-label="Otvoriť menu">☰</button>
    </div>

    <div class="nav-overlay" :class="{ open: showMenu }" @click.self="toggleMenu">
      <div class="overlay-inner">
        <button class="close" @click="toggleMenu">✕</button>
        <ul>
          <li><router-link to="/" @click.native="toggleMenu">Domov</router-link></li>
          <li><router-link to="/katalog" @click.native="toggleMenu">Katalóg</router-link></li>
          <li><router-link to="/objednavky" @click.native="toggleMenu">Objednávky</router-link></li>
          <li><router-link to="/kosik" @click.native="toggleMenu">Košík</router-link></li>
          <li><router-link to="/about" @click.native="toggleMenu">O nás</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { useProductsStore } from '../stores/products'

export default {
  name: 'HeaderBar',
  data() {
    return { showMenu: false }
  },
  computed: {
    totalItems() {
      const store = useProductsStore()
      return store.totalItems
    },
  },
  methods: {
    toggleMenu() { this.showMenu = !this.showMenu }
  },
}
</script>

