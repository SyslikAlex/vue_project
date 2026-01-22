<script>
import Order from '../components/Order.vue'

export default {
  name: 'OrdersView',
  components: { Order },
  data() {
    return {
      mockOrders: [
        {
          id: 'ORD-2024-001',
          status: 'Doručeno',
          date: '2024-01-15',
          items: [
            { id: 1, name: 'Akustická gitara', qty: 1, price: 199 },
            { id: 8, name: 'Gitarové struny', qty: 2, price: 8 },
          ],
          total: 215,
          trackingNumber: 'SK123456789DE',
        },
        {
          id: 'ORD-2024-002',
          status: 'Posláno',
          date: '2024-01-18',
          items: [
            { id: 3, name: 'Digitálne piano', qty: 1, price: 599 },
          ],
          total: 599,
          trackingNumber: 'SK987654321DE',
        },
        {
          id: 'ORD-2024-003',
          status: 'Zpracování',
          date: '2024-01-20',
          items: [
            { id: 10, name: 'Dynamický mikrofón', qty: 1, price: 89 },
            { id: 9, name: 'Mikrofonný stojan', qty: 1, price: 35 },
          ],
          total: 124,
          trackingNumber: '',
        },
        {
          id: 'ORD-2024-004',
          status: 'Čeká se',
          date: '2024-01-21',
          items: [
            { id: 14, name: 'Digitálny ladičan', qty: 1, price: 19 },
            { id: 15, name: 'Metrónóm', qty: 1, price: 25 },
            { id: 13, name: 'Gitarové kapo', qty: 1, price: 12 },
          ],
          total: 56,
          trackingNumber: '',
        },
        {
          id: 'ORD-2024-005',
          status: 'Doručeno',
          date: '2024-01-10',
          items: [
            { id: 11, name: 'Štúdiové slúchadlá', qty: 1, price: 129 },
          ],
          total: 129,
          trackingNumber: 'SK555666777DE',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="orders-view">
    <section class="container">
      <h1>Moje objednávky</h1>
      <p class="subtitle">Tu si môžete zobraziť históriu všetkých svojich objednávok a sledovať ich stav.</p>

      <div v-if="mockOrders.length > 0" class="orders-list">
        <Order 
          v-for="order in mockOrders" 
          :key="order.id"
          :id="order.id"
          :status="order.status"
          :date="order.date"
          :items="order.items"
          :total="order.total"
          :tracking-number="order.trackingNumber"
        />
      </div>
      <div v-else class="empty-state">
        <p>Zatiaľ ste si nič neobjednali. <router-link to="/katalog">Začnite teraz!</router-link></p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.orders-view {
  min-height: 60vh;
  background: #f5f5f5;
  padding: 2rem 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1 {
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.orders-list {
  background: white;
  border-radius: 8px;
  padding: 2rem;
}

.empty-state {
  background: white;
  border-radius: 8px;
  padding: 3rem;
  text-align: center;
  color: #666;
}

.empty-state a {
  color: #2196f3;
  text-decoration: none;
  font-weight: 600;
}

.empty-state a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .orders-view {
    padding: 1rem 0;
  }

  .orders-list {
    padding: 1rem;
  }

  .empty-state {
    padding: 2rem 1rem;
  }
}
</style>
