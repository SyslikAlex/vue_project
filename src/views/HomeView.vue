<script>
import ProductCard from '../components/ProductCard.vue'
import Article from '../components/Article.vue'
import Feature from '../components/Feature.vue'
import Testimonial from '../components/Testimonial.vue'
import { useProductsStore } from '../stores/products'

export default {
  name: 'HomeView',
  components: { ProductCard, Article, Feature, Testimonial },
  data() {
    return {
      articles: [
        {
          title: 'Ako vybrať správnu gitaru pre začiatočníkov',
          excerpt: 'Komplexný sprievodca výberom prvej gitary. Dozviete sa o rozdieloch medzi akustickými a elektrickými gitarami a ako vybrať tú správnu pre vaše potreby.',
          author: 'Ján Kováčik',
          date: '2024-01-20',
          image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&h=300&fit=crop',
        },
        {
          title: 'Základy hry na klávesi za 10 minút',
          excerpt: 'Krátky úvod do hry na klávesi. Naučíte sa základné chords a jednoduché melodie, ktoré vás motivujú pokračovať ďalej.',
          author: 'Mária Novotná',
          date: '2024-01-18',
          image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=300&fit=crop',
        },
        {
          title: 'Údržba a starostlivosť o hudobné nástroje',
          excerpt: 'Tipy a triky ako správne starostovať o svojich hudobných nástrojoch, aby vám vydržali čo najdlhšie.',
          author: 'Peter Hollý',
          date: '2024-01-15',
          image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=300&fit=crop',
        },
      ],
    }
  },
  computed: {
    featured() {
      const p = useProductsStore()
      return p.items.slice(0, 6)
    },
  },
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Vitajte v najlepšom obchode s hudobnými nástrojmi</h1>
        <p class="lead">Vyberte si z najväčšej ponuky nástrojov — všetko pre začiatočníkov aj profesionálov.</p>
        <router-link to="/katalog" class="btn primary large">Objaviť katalóg</router-link>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="featured-section">
      <div class="container">
        <h2>Odporúčané produkty</h2>
        <p class="section-subtitle">Vyberte si z našich najobľúbenejších nástrojov</p>
        <div class="grid">
          <ProductCard v-for="p in featured" :key="p.id" :product="p" />
        </div>
        <div class="see-all">
          <router-link to="/katalog" class="btn outline">Zobraziť všetky →</router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-us-section">
      <div class="container">
        <h2>Prečo si vybrať nás?</h2>
        <div class="features-grid">
          <Feature 
            icon="🎯"
            title="Odborní poradcovia"
            description="Náš tím sa skladá z hudobníkov s dlhodobou skúsenosťou. Vždy vám pomôžu vybrať správny nástroj."
          />
          <Feature 
            icon="📦"
            title="Bezplatná doprava"
            description="Pri objednávkach nad 50€ dopravujeme zadarmo. Rýchla a bezpečná dopravu do vášho domu."
          />
          <Feature 
            icon="🔒"
            title="100% Záruka spokojnosti"
            description="Ak nie ste spokojní, vrátime vám peniaze bez otázok do 30 dní."
          />
          <Feature 
            icon="💬"
            title="Neustála podpora"
            description="Kontaktujte nás cez chat, email alebo telefón. Vždy sme tu na pomoc."
          />
        </div>
      </div>
    </section>

    <!-- Blog Articles Section -->
    <section class="articles-section">
      <div class="container">
        <h2>Užitočné články</h2>
        <p class="section-subtitle">Naučte sa viac o hudbe a hudobných nástrojoch</p>
        <div class="articles-grid">
          <Article 
            v-for="(article, index) in articles"
            :key="index"
            :title="article.title"
            :excerpt="article.excerpt"
            :author="article.author"
            :date="article.date"
            :image="article.image"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <h2>Čo hovoria naši zákazníci</h2>
        <div class="testimonials-grid">
          <Testimonial 
            name="Ján Kováčik"
            role="Profesionálny huslista"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=jan"
            text="Najlepší online obchod s hudobnými nástrojmi. Kvalita a služby sú bezkonkurenčné!"
            :rating="5"
          />
          <Testimonial 
            name="Mária Novotná"
            role="Učiteľka hudby"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=maria"
            text="Všetci moji študenti si tu kúpia svoj prvý nástroj. Veľmi ich odporúčam!"
            :rating="5"
          />
          <Testimonial 
            name="Peter Hollý"
            role="Gitarista"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=peter"
            text="Profesionálny pristup a výborné ceny. Som veľmi spokojný s mojou objednávkou!"
            :rating="5"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Začnite svoju hudobnú cestu dnes</h2>
        <p>Vyberte si nástroj a začnite sa učiť. Máme v ponuke nástroje pre všetky úrovne a rozpočty.</p>
        <router-link to="/katalog" class="btn primary large">Prejsť na katalóg</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.hero .lead {
  font-size: 1.3rem;
  margin: 0 0 2rem 0;
  opacity: 0.95;
}

.featured-section {
  padding: 4rem 0;
  background: white;
}

.featured-section h2 {
  color: #333;
  text-align: center;
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
}

.section-subtitle {
  color: #666;
  text-align: center;
  margin: 0 0 2rem 0;
  font-size: 1rem;
}

.see-all {
  text-align: center;
  margin-top: 2rem;
}

.why-us-section {
  padding: 4rem 0;
  background: #f9f9f9;
}

.why-us-section h2 {
  color: #333;
  text-align: center;
  margin: 0 0 2rem 0;
  font-size: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.articles-section {
  padding: 4rem 0;
  background: white;
}

.articles-section h2 {
  color: #333;
  text-align: center;
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.testimonials-section {
  padding: 4rem 0;
  background: #f9f9f9;
}

.testimonials-section h2 {
  color: #333;
  text-align: center;
  margin: 0 0 2rem 0;
  font-size: 2rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.cta-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta-section h2 {
  color: white;
  font-size: 2rem;
  margin: 0 0 1rem 0;
}

.cta-section p {
  font-size: 1.1rem;
  margin: 0 0 2rem 0;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
  }

  .hero h1 {
    font-size: 1.8rem;
  }

  .hero .lead {
    font-size: 1rem;
  }

  .featured-section h2,
  .why-us-section h2,
  .articles-section h2,
  .testimonials-section h2,
  .cta-section h2 {
    font-size: 1.5rem;
  }

  .features-grid,
  .articles-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
