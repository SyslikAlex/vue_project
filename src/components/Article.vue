<template>
  <article class="article">
    <div v-if="image" class="article-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="article-content">
      <h2 class="article-title">{{ title }}</h2>
      <div class="article-meta">
        <span v-if="author" class="author">✍️ {{ author }}</span>
        <span v-if="date" class="date">📅 {{ formatDate(date) }}</span>
      </div>
      <p class="article-excerpt">{{ excerpt }}</p>
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Article',
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: '',
    },
    date: {
      type: [String, Date],
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return ''
      const d = new Date(date)
      return d.toLocaleDateString('sk-SK', { year: 'numeric', month: 'long', day: 'numeric' })
    },
  },
}
</script>

<style scoped>
.article {
  background: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.article:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  border-color: #d0d0d0;
}

.article-image {
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  padding: 1.5rem;
}

.article-title {
  font-size: 1.3rem;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.article-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
}

.author, .date {
  display: inline-flex;
  align-items: center;
}

.article-excerpt {
  color: #424242;
  line-height: 1.6;
  margin: 0;
}
</style>
