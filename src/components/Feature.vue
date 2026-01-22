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
  border-radius: 8px;
  border-left: 4px solid #2196f3;
  transition: all 0.3s ease;
}

.feature:hover {
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
  border-left-color: #1976d2;
}

.feature-icon {
  flex-shrink: 0;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(33, 150, 243, 0.1);
  border-radius: 8px;
}

.feature-content {
  flex: 1;
}

.feature-title {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.1rem;
}

.feature-description {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
