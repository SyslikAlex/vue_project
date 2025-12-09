<template>
  <header class="hb">
    <div class="inner">
      <div class="left">
        <router-link to="/" class="brand">Hudobné Nástroje</router-link>
      </div>

      <nav class="nav">
        <router-link to="/katalog">Katalóg</router-link>
        <router-link to="/about">O nás</router-link>
        <router-link to="/kosik" class="cart">Košík <span class="count">{{ totalItems }}</span></router-link>
      </nav>

      <button class="menu-btn" @click="toggleMenu" aria-label="Otvoriť menu">☰</button>
    </div>

    <div class="nav-overlay" :class="{ open: showMenu }" @click.self="toggleMenu">
      <div class="overlay-inner">
        <button class="close" @click="toggleMenu">✕</button>
        <ul>
          <li><router-link to="/" @click.native="toggleMenu">Domov</router-link></li>
          <li><router-link to="/katalog" @click.native="toggleMenu">Katalóg</router-link></li>
          <li><router-link to="/kosik" @click.native="toggleMenu">Košík</router-link></li>
          <li><router-link to="/about" @click.native="toggleMenu">O nás</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  name: 'HeaderBar',
  data() {
    return { showMenu: false }
  },
  computed: {
    totalItems() {
      const cart = useCartStore()
      return cart.totalItems
    },
  },
  methods: {
    toggleMenu() { this.showMenu = !this.showMenu }
  },
}
</script>

<style scoped>
.hb { position:sticky; top:0; left:0; width:100%; z-index:40; background: linear-gradient(90deg,#ffffff,#f8fbff); border-bottom:1px solid rgba(11,59,87,0.06); box-shadow: 0 6px 28px rgba(11,59,87,0.06) }
.hb .inner { max-width:1100px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; padding:0.85rem 1.15rem }
.brand { font-weight:800; color:#0b4a6f; text-decoration:none; letter-spacing:0.2px; font-size:1.05rem }
.nav { display:flex; gap:0.8rem; align-items:center }
.nav a { color:#0b3b57; text-decoration:none; padding:0.45rem 0.7rem; border-radius:8px; font-weight:600 }
.nav a.router-link-active { background:#eef6fb }
.cart { display:flex; align-items:center }
.cart .count { background:#0b83c2; color:#fff; padding:0 0.45rem; border-radius:999px; margin-left:0.4rem; font-weight:700 }
@media (max-width:720px) {
  .hb .inner { flex-direction:column; gap:0.6rem; align-items:flex-start }
  .nav { width:100%; justify-content:space-between }
}

/* fullscreen overlay menu */
.menu-btn { display:inline-block; margin-left:1rem; background:transparent; border:0; font-size:1.25rem; cursor:pointer }
.nav-overlay { position:fixed; inset:0; background:rgba(10,20,30,0.6); display:flex; align-items:center; justify-content:center; opacity:0; pointer-events:none; transform:scale(1.02); transition: all .25s ease }
.nav-overlay.open { opacity:1; pointer-events:auto; transform:scale(1) }
.overlay-inner { background:var(--color-background); padding:2.5rem; border-radius:12px; width:min(900px,92%); box-shadow:0 30px 80px rgba(2,6,23,0.12); position:relative }
.overlay-inner ul { list-style:none; padding:0; margin:0; display:grid; gap:1.15rem }
.overlay-inner a { font-size:1.5rem; color:var(--color-heading); text-decoration:none; font-weight:700 }
.overlay-inner .close { position:absolute; right:14px; top:12px; background:transparent; border:0; font-size:1.25rem; cursor:pointer }
</style>
