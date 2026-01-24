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
    <footer class="site-footer">
      <div class="footer-content">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-section">
              <h4>Kategórie</h4>
              <ul>
                <li><router-link to="/katalog">Všetky nástroje</router-link></li>
                <li><router-link to="/katalog">Gitary</router-link></li>
                <li><router-link to="/katalog">Klávesy</router-link></li>
                <li><router-link to="/katalog">Bubny</router-link></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Pomoc</h4>
              <ul>
                <li><router-link to="/about">O nás</router-link></li>
                <li><a href="#">Kontakt</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Doručovanie</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Právne</h4>
              <ul>
                <li><a href="#">Podmienky</a></li>
                <li><a href="#">Ochrana údajov</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Follow Us</h4>
              <ul class="social-links">
                <li><a href="#" title="Facebook">f</a></li>
                <li><a href="#" title="Instagram">@</a></li>
                <li><a href="#" title="Twitter">𝕏</a></li>
                <li><a href="#" title="YouTube">▶</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>© 2026 Hudobné Nástroje — všetky práva vyhradené</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
* { box-sizing: border-box; }
html, body { height: 100%; margin: 0; }
body { background: var(--color-background); color: var(--color-text); font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial }
#app { min-height: 100vh; display: block; }
main { padding: 2.5rem 2rem; margin-top: 96px; width:100% }
@media (max-width: 720px) {
  main { margin-top: 140px; padding: 1rem }
}
</style>
