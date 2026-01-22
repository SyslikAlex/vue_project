<template>
  <header class="hb">
    <div class="inner">
      <router-link to="/" class="brand">
        <span class="brand-icon">♪</span>
        <span class="brand-text">Music Store</span>
      </router-link>

      <nav class="nav">
        <router-link to="/katalog" class="nav-link">Catalog</router-link>
        <router-link to="/objednavky" class="nav-link">Orders</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/kosik" class="cart-link">
          <span class="cart-icon">🛍</span>
          <span class="cart-text">Cart</span>
          <span class="count" v-if="totalItems > 0">{{ totalItems }}</span>
        </router-link>
      </nav>

      <button class="menu-btn" @click="toggleMenu" aria-label="Menu">☰</button>
    </div>

    <div class="nav-overlay" :class="{ open: showMenu }" @click.self="toggleMenu">
      <div class="overlay-inner">
        <button class="close" @click="toggleMenu">✕</button>
        <ul>
          <li><router-link to="/" @click.native="toggleMenu">Home</router-link></li>
          <li><router-link to="/katalog" @click.native="toggleMenu">Catalog</router-link></li>
          <li><router-link to="/objednavky" @click.native="toggleMenu">Orders</router-link></li>
          <li><router-link to="/kosik" @click.native="toggleMenu">Cart</router-link></li>
          <li><router-link to="/about" @click.native="toggleMenu">About</router-link></li>
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

