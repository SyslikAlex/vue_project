import { defineStore } from 'pinia'
import { useProductsStore } from './products'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // { productId, qty }
  }),
  getters: {
    totalItems: (state) => state.items.reduce((s, i) => s + i.qty, 0),
    totalPrice: (state) => {
      const products = useProductsStore()
      return state.items.reduce((s, i) => {
        const p = products.getById(i.productId)
        return s + (p ? p.price * i.qty : 0)
      }, 0)
    },
    detailedItems: (state) => {
      const products = useProductsStore()
      return state.items.map((i) => ({ product: products.getById(i.productId), qty: i.qty }))
    },
  },
  actions: {
    addToCart(productId, qty = 1) {
      const ex = this.items.find((i) => i.productId === productId)
      if (ex) ex.qty += qty
      else this.items.push({ productId, qty })
    },
    removeFromCart(productId) {
      this.items = this.items.filter((i) => i.productId !== productId)
    },
    setQty(productId, qty) {
      const it = this.items.find((i) => i.productId === productId)
      if (it) {
        it.qty = qty > 0 ? qty : 0
        if (it.qty === 0) this.removeFromCart(productId)
      }
    },
    clearCart() {
      this.items = []
    },
  },
})
