<script>
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
  },
}
</script>

<template>
  <div id="app">
    <HeaderBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
* { box-sizing: border-box; }
html, body { height: 100%; margin: 0; }
body { background: var(--color-background); color: var(--color-text); font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial }
#app { min-height: 100vh; display: block; }
/* main has top offset to clear sticky header; content uses .container for centering */
main { padding: 2.5rem 2rem; margin-top: 96px; width:100% }
@media (max-width: 720px) {
  main { margin-top: 140px; padding: 1rem }
}
</style>
