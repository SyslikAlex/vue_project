<template>
  <div class="feature">
    <div class="feature-icon">
      <slot name="icon">
        <span>{{ defaultIcon }}</span>
      </slot>
    </div>
    <div class="feature-content">
      <h3 class="feature-title">{{ title }}</h3>
      <p class="feature-description">{{ description }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '⭐',
    },
  },
  computed: {
    defaultIcon() {
      return this.icon
    },
  },
}
</script>

<style scoped>
.feature {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  text-align: center;
  height: 100%;
}

.feature:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: #2c3e50;
  transform: translateY(-2px);
}

.feature-icon {
  flex-shrink: 0;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 8px;
  color: #2c3e50;
  margin: 0 auto;
}

.feature-content {
  flex: 1;
}

.feature-title {
  margin: 0.5rem 0;
  color: #1a1a1a;
  font-size: 1.15rem;
  font-weight: 600;
}

.feature-description {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
