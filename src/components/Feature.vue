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
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.feature:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: #d0d0d0;
}

.feature-icon {
  flex-shrink: 0;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #f5f5f5;
  border-radius: 6px;
  color: #2c3e50;
}

.feature-content {
  flex: 1;
}

.feature-title {
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  font-size: 1.1rem;
  font-weight: 600;
}

.feature-description {
  margin: 0;
  color: #424242;
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
