<template>
  <div class="table-wrapper">
    <table class="data-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col" @click="sortBy(col)" class="sortable">
            {{ col }}
            <span v-if="sortColumn === col" class="sort-indicator">{{ sortDir === 'asc' ? '▲' : '▼' }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in sortedData" :key="i">
          <td v-for="col in columns" :key="col">{{ row[col] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sortColumn: null,
      sortDir: 'asc',
    }
  },
  computed: {
    sortedData() {
      if (!this.sortColumn) return this.data
      const sorted = [...this.data].sort((a, b) => {
        const aVal = a[this.sortColumn]
        const bVal = b[this.sortColumn]
        if (typeof aVal === 'number') {
          return this.sortDir === 'asc' ? aVal - bVal : bVal - aVal
        }
        const cmp = String(aVal).localeCompare(String(bVal), 'sk')
        return this.sortDir === 'asc' ? cmp : -cmp
      })
      return sorted
    },
  },
  methods: {
    sortBy(col) {
      if (this.sortColumn === col) {
        this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortColumn = col
        this.sortDir = 'asc'
      }
    },
  },
}
</script>

<style scoped>
.table-wrapper {
  overflow-x: auto;
  margin: 1rem 0;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
}

.data-table thead {
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
}

.data-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #1a1a1a;
  cursor: pointer;
  user-select: none;
  font-size: 0.9rem;
}

.sortable:hover {
  background: #eee;
}

.sort-indicator {
  margin-left: 0.5rem;
  font-size: 0.75rem;
}

.data-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e0e0e0;
  color: #424242;
  font-size: 0.9rem;
}

.data-table tbody tr:hover {
  background: #f9f9f9;
}
</style>
