<script>
import Article from '../components/Article.vue'
import Feature from '../components/Feature.vue'
import Testimonial from '../components/Testimonial.vue'

export default {
  name: 'AboutView',
  components: { Article, Feature, Testimonial },
}
</script>

<template>
  <div class="about">
    <section class="hero">
      <div class="container">
        <h1>O nás</h1>
        <p class="lead">Pasionálni hudobníci a obchodníci s vyznamením na kvalitu a službu.</p>
      </div>
    </section>

    <section class="container about-section">
      <h2>Naša história</h2>
      <p>Založili sme sa v roku 2015 s jednoduchým cieľom: sprístupniť kvalitné hudobné nástroje každému. Od malého obchodu v centre mesta sme sa rozrástli na online platformu slúžiacu tisícom hudobníkov po celej krajine.</p>
      <p>Dnes máme tím skúsených hudobníkov, ktorí rozumejú potrebám našich zákazníkov. Každý produkt v našom katalógu je starostlivo vybraný a testovaný, aby sme zaručili najlepšiu kvalitu.</p>
    </section>

    <section class="features-section container">
      <h2>Naše prednosti</h2>
      <div class="features-grid">
        <Feature icon="✓" title="Kvalita zaručená" description="Všetky nástroje sú skúšané našimi hudobníkmi pred prúdením do predaja." />
        <Feature icon="🚚" title="Rýchla doprava" description="Poskytujeme bezplatnú dopravu pre objednávky nad 50€ v rámci krajiny." />
        <Feature icon="🔄" title="30-denná záruka" description="Ak nie ste spokojní, môžete vrátiť produkt bez otázok do 30 dní." />
        <Feature icon="💬" title="Odborná podpora" description="Náš tím je vždy pripravený poradiť a pomôcť pri výbere správneho nástroja." />
        <Feature icon="🎵" title="Školenie zadarmo" description="Pravidelne poriádame online kurzy a workshopy pre našich zákazníkov." />
        <Feature icon="🌍" title="Globálny sortiment" description="Predávame nástroje od svetových výrobcov ako Yamaha, Fender a ďalších." />
      </div>
    </section>

    <section class="team-section container">
      <h2>Náš tím</h2>
      <p>Naš tím pozostáva z hudobníkov s rôznymi špecializáciami a skúsenosťami. Všetci máme veľkú vášeň pre hudbu a zanietenie pomáhať ostatným v ich hudobnej ceste.</p>
    </section>

    <section class="testimonials-section container">
      <h2>Čo hovoria naši zákazníci</h2>
      <div class="testimonials-grid">
        <Testimonial 
          name="Ján Kováčik"
          role="Profesionálny huslista"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Jan"
          text="Najlepší online obchod s hudobnými nástrojmi, ktorý som kedy navštívil. Kvalita, služby a ceny sú neporovnateľné."
          :rating="5"
        />
        <Testimonial 
          name="Mária Novotná"
          role="Učiteľka hudby"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
          text="Odporúčam všetkým mojim študentom. Vždy si tam kúpia svojich prvý nástroj s veľkou zľavou."
          :rating="5"
        />
        <Testimonial 
          name="Peter Hollý"
          role="Gitarista v kapele"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Peter"
          text="Profesionálna obsluha, rýchla doprava a kvalitné produkty. Som velmi spokojný."
          :rating="4"
        />
        <Testimonial 
          name="Zuzana Bartošová"
          role="Začiatočnica na klavíri"
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Zuzana"
          text="Personál mi veľmi pomohol pri výbere klavíru pre moje potreby. Ďakujem za úžasný servis!"
          :rating="5"
        />
      </div>
    </section>

    <section class="cta-section container">
      <h2>Chcete začať svoju hudobnú cestu?</h2>
      <p>Návštívte náš katalóg a nájdite ideálny nástroj pre vás.</p>
      <router-link to="/katalog" class="btn primary">Prejsť do katalógu</router-link>
    </section>
  </div>
</template>

<style scoped>
.about {
  background: white;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
}

.hero .lead {
  font-size: 1.2rem;
  opacity: 0.95;
  margin: 0;
}

.about-section {
  margin: 3rem 0;
}

.about-section h2 {
  color: #333;
  margin-bottom: 1.5rem;
}

.about-section p {
  color: #555;
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.features-section {
  margin: 3rem 0;
}

.features-section h2 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.team-section {
  margin: 3rem 0;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
}

.team-section h2 {
  color: #333;
  margin-bottom: 1.5rem;
}

.team-section p {
  color: #555;
  line-height: 1.8;
}

.testimonials-section {
  margin: 3rem 0;
}

.testimonials-section h2 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.cta-section {
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  text-align: center;
}

.cta-section h2 {
  color: white;
  margin-bottom: 0.5rem;
}

.cta-section p {
  margin-bottom: 1.5rem;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 1.8rem;
  }

  .features-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>

