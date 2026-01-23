<template>
  <div class="testimonial">
    <div class="testimonial-header">
      <img :src="avatar" :alt="name" class="avatar" />
      <div class="testimonial-info">
        <h4 class="testimonial-name">{{ name }}</h4>
        <p class="testimonial-role">{{ role }}</p>
      </div>
    </div>
    <div class="testimonial-rating">
      <span v-for="i in rating" :key="i" class="star">★</span>
      <span v-for="i in (5 - rating)" :key="'empty-' + i" class="star empty">★</span>
    </div>
    <p class="testimonial-text">"{{ text }}"</p>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 5,
      validator: (v) => v >= 1 && v <= 5,
    },
  },
}
</script>

<style scoped>
.testimonial {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.testimonial:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: #2c3e50;
  transform: translateY(-4px);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
}

.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f0f0f0;
}

.testimonial-info {
  flex: 1;
}

.testimonial-name {
  margin: 0;
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: 600;
}

.testimonial-role {
  margin: 0.25rem 0 0 0;
  color: #999;
  font-size: 0.85rem;
}

.testimonial-rating {
  margin-bottom: 1rem;
  font-size: 1rem;
}

.star {
  color: #fdb913;
  margin-right: 2px;
}

.star.empty {
  color: #e0e0e0;
}

.testimonial-text {
  color: #424242;
  font-style: italic;
  line-height: 1.7;
  margin: 0;
  flex: 1;
}
</style>
