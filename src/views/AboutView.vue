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
        <h1>About Us</h1>
        <p class="lead">Passionate musicians and traders committed to quality and service.</p>
      </div>
    </section>

    <section class="story-section">
      <div class="container">
        <h2>Our Story</h2>
        <p>We founded our company in 2015 with a simple goal: to provide quality musical instruments to everyone. From a small shop in the city center, we have grown into an online platform serving thousands of musicians across the country.</p>
        <p>Today we have a team of experienced musicians who understand the needs of our customers. Every product in our catalog is carefully selected and tested to ensure the highest quality.</p>
      </div>
    </section>

    <section class="features-section">
      <div class="container">
        <h2>Our Advantages</h2>
        <div class="features-grid">
          <Feature icon="▸" title="Quality Guaranteed" description="All instruments are tested by our musicians before shipping." />
          <Feature icon="▸" title="Fast Shipping" description="We offer free shipping on orders over 50€ within the country." />
          <Feature icon="▸" title="30-Day Warranty" description="If you're not satisfied, you can return the product within 30 days." />
          <Feature icon="▸" title="Expert Support" description="Our team is always ready to advise and help you choose the right tool." />
          <Feature icon="▸" title="Free Training" description="We regularly hold online courses and workshops for our customers." />
          <Feature icon="▸" title="Global Selection" description="We sell instruments from world manufacturers like Yamaha and Fender." />
        </div>
      </div>
    </section>

    <section class="team-section">
      <div class="container">
        <h2>Our Team</h2>
        <p>Our team consists of musicians with various specializations and experience. We are all passionate about music and committed to helping others on their musical journey.</p>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-avatar">J</div>
            <h4>John Smith</h4>
            <p>Guitar Specialist</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">M</div>
            <h4>Maria Garcia</h4>
            <p>Piano Expert</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">P</div>
            <h4>Peter Brown</h4>
            <p>Percussion Specialist</p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials-section">
      <div class="container">
        <h2>What Our Customers Say</h2>
        <div class="testimonials-grid">
          <Testimonial 
            name="John Kovacs"
            role="Professional Violinist"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
            text="The best online music store I've ever visited. Quality, service and prices are unmatched."
            :rating="5"
          />
          <Testimonial 
            name="Mary Wilson"
            role="Music Teacher"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Mary"
            text="I recommend them to all my students. They always get their first instrument with a great discount."
            :rating="5"
          />
          <Testimonial 
            name="Robert Johnson"
            role="Band Guitarist"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"
            text="Professional service, fast shipping and quality products. I'm very satisfied."
            :rating="4"
          />
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Ready to Start Your Musical Journey?</h2>
        <p>Visit our catalog and find the ideal instrument for you.</p>
        <router-link to="/katalog" class="btn primary large">Go to Catalog</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  background: white;
  display: flex;
  flex-direction: column;
}

.about section {
  width: 100%;
}

.hero {
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 4rem 0;
  text-align: center;
}

.hero h1 {
  font-size: 2.8rem;
  margin: 0 0 0.75rem 0;
  color: #1a1a1a;
  font-weight: 700;
}

.hero .lead {
  font-size: 1.1rem;
  color: #424242;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.story-section {
  margin: 3rem 0;
  padding: 3rem 0;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.story-section h2 {
  color: #1a1a1a;
  margin: 0 0 1.5rem 0;
  font-size: 2rem;
  text-align: center;
}

.story-section p {
  color: #424242;
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.features-section {
  margin: 3rem 0;
  padding: 3rem 0;
  background: #f9f9f9;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}

.features-section h2 {
  color: #1a1a1a;
  text-align: center;
  margin: 0 0 2rem 0;
  font-size: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.team-section {
  margin: 3rem 0;
  padding: 3rem 0;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.team-section h2 {
  color: #1a1a1a;
  margin: 0 0 1.5rem 0;
  font-size: 2rem;
  text-align: center;
}

.team-section > .container > p {
  color: #424242;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.team-member {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.team-member:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: #2c3e50;
  transform: translateY(-4px);
}

.member-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 12px rgba(44, 62, 80, 0.2);
}

.team-member h4 {
  color: #1a1a1a;
  margin: 0.5rem 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.team-member p {
  color: #999;
  margin: 0;
  font-size: 0.9rem;
  flex: 1;
}

.testimonials-section {
  margin: 3rem 0;
  padding: 3rem 0;
  background: #f9f9f9;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}

.testimonials-section h2 {
  color: #1a1a1a;
  text-align: center;
  margin: 0 0 2rem 0;
  font-size: 2rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.cta-section {
  margin: 3rem 0;
  padding: 3rem 0;
  text-align: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  border-top: 1px solid #e0e0e0;
}

.cta-section h2 {
  color: #1a1a1a;
  margin: 0 0 0.75rem 0;
  font-size: 2rem;
}

.cta-section p {
  color: #424242;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 2.5rem 0;
  }

  .hero h1 {
    font-size: 1.8rem;
  }

  .hero .lead {
    font-size: 1rem;
  }

  .story-section h2,
  .team-section h2,
  .testimonials-section h2 {
    font-size: 1.5rem;
  }

  .features-grid,
  .team-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .team-member,
  .feature {
    padding: 1.5rem;
  }

  .member-avatar {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }

  .features-section,
  .team-section,
  .testimonials-section {
    padding: 2rem 0;
  }

  .cta-section {
    padding: 2rem 0;
  }
}
</style>

