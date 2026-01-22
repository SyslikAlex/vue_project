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

    <section class="container about-section">
      <h2>Our Story</h2>
      <p>We founded our company in 2015 with a simple goal: to provide quality musical instruments to everyone. From a small shop in the city center, we have grown into an online platform serving thousands of musicians across the country.</p>
      <p>Today we have a team of experienced musicians who understand the needs of our customers. Every product in our catalog is carefully selected and tested to ensure the highest quality.</p>
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
          <div class="team-member">
            <div class="member-avatar">S</div>
            <h4>Sarah Williams</h4>
            <p>Customer Support Manager</p>
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
          <Testimonial 
            name="Sophie Taylor"
            role="Piano Beginner"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie"
            text="The staff really helped me choose a piano for my needs. Thank you for the amazing service!"
            :rating="5"
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

.about-section {
  margin: 3rem 0;
  padding: 0 !important;
  max-width: 800px;
}

.about-section h2 {
  color: #1a1a1a;
  margin: 0 0 1.5rem 0;
  font-size: 2rem;
}

.about-section p {
  color: #424242;
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 1.5rem;
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.team-section {
  margin: 3rem 0;
  padding: 3rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.team-section h2 {
  color: #1a1a1a;
  margin: 0 0 1.5rem 0;
  font-size: 2rem;
}

.team-section > .container > p {
  color: #424242;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 700px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.team-member {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.team-member:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: #d0d0d0;
}

.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 auto 1rem;
}

.team-member h4 {
  color: #1a1a1a;
  margin: 0.5rem 0;
  font-size: 1.05rem;
  font-weight: 600;
}

.team-member p {
  color: #999;
  margin: 0;
  font-size: 0.9rem;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.cta-section {
  margin: 3rem 0;
  padding: 3rem 0;
  text-align: center;
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
  .hero h1 {
    font-size: 1.8rem;
  }

  .features-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>

