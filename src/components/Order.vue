<template>
  <div class="order">
    <div class="order-header">
      <div class="order-id">Objednávka #{{ id }}</div>
      <div :class="['status', statusClass]">{{ status }}</div>
    </div>
    <div class="order-date">{{ formatDate(date) }}</div>
    
    <div class="order-items">
      <h4>Položky:</h4>
      <div class="items-list">
        <div v-for="item in items" :key="item.id" class="item">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-qty">x{{ item.qty }}</span>
          <span class="item-price">{{ item.price * item.qty }}€</span>
        </div>
      </div>
    </div>
    
    <div class="order-footer">
      <div class="total">Celkem: <strong>{{ total }}€</strong></div>
      <div v-if="trackingNumber" class="tracking">Sledování: {{ trackingNumber }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    status: {
      type: String,
      default: 'Čeká se',
      validator: (v) => ['Čeká se', 'Zpracování', 'Posláno', 'Doručeno', 'Zrušeno'].includes(v),
    },
    date: {
      type: [String, Date],
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    trackingNumber: {
      type: String,
      default: '',
    },
  },
  computed: {
    statusClass() {
      const map = {
        'Čeká se': 'pending',
        'Zpracování': 'processing',
        'Posláno': 'shipped',
        'Doručeno': 'delivered',
        'Zrušeno': 'cancelled',
      }
      return map[this.status] || 'pending'
    },
  },
  methods: {
    formatDate(date) {
      const d = new Date(date)
      return d.toLocaleDateString('sk-SK', { year: 'numeric', month: 'long', day: 'numeric' })
    },
  },
}
</script>

<style scoped>
.order {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.order:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: #d0d0d0;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  gap: 1rem;
}

.order-id {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
}

.status {
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}

.status.pending {
  background: #f39c12;
}

.status.processing {
  background: #3498db;
}

.status.shipped {
  background: #9b59b6;
}

.status.delivered {
  background: #27ae60;
}

.status.cancelled {
  background: #e74c3c;
}

.order-date {
  color: #999;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.order-items h4 {
  margin: 0 0 0.75rem 0;
  color: #1a1a1a;
  font-size: 0.95rem;
  font-weight: 600;
}

.items-list {
  background: #f9f9f9;
  border-radius: 4px;
  padding: 0.75rem;
  margin-bottom: 1rem;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  color: #424242;
  font-size: 0.9rem;
  border-bottom: 1px solid #e0e0e0;
}

.item:last-child {
  border-bottom: none;
}

.item-name {
  flex: 1;
}

.item-qty, .item-price {
  margin-left: 1rem;
}

.item-price {
  font-weight: 600;
  color: #1a1a1a;
}

.order-footer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.total {
  font-size: 1rem;
  color: #1a1a1a;
  font-weight: 600;
}

.tracking {
  font-size: 0.85rem;
  color: #666;
}
</style>
