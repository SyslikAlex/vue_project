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
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #4caf50;
  transition: all 0.3s ease;
}

.testimonial:hover {
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
  transform: translateY(-4px);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #4caf50;
}

.testimonial-info {
  flex: 1;
}

.testimonial-name {
  margin: 0;
  color: #333;
  font-size: 1rem;
}

.testimonial-role {
  margin: 0.25rem 0 0 0;
  color: #999;
  font-size: 0.85rem;
}

.testimonial-rating {
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.star {
  color: #ffc107;
  margin-right: 2px;
}

.star.empty {
  color: #ddd;
}

.testimonial-text {
  color: #555;
  font-style: italic;
  line-height: 1.6;
  margin: 0;
}
</style>
