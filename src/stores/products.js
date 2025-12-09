import { defineStore } from 'pinia'

// Используем внешние картинки (Unsplash) по публичным ссылкам — аккуратно подобранные фотки
const IMG_ACOUSTIC = 'https://muztorg.ua/image/cache/catalog/99994/231444/231444_kala_nylon_string_classical_guitar_2-1200x800.jpeg'
const IMG_ELECTRIC = 'https://organology.net/wp-content/uploads/2024/10/electric-guitar.jpg'
const IMG_PIANO = 'https://shop.usa.yamaha.com/media/catalog/product/cache/909274b353c35762b27165617530ca2e/p/-/p-s500_color_b_1f5564b15d77894b403e07c71eca10dd.jpg'
const IMG_DRUMS = 'https://skifmusic.ru/static/article/2173/115-491.webp'
const IMG_SAX = 'https://yamaha.ru/upload/sprint.editor/187/ozrw89blcnou5e1zxcxa53av5m9g97jp/2.jpg'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [
      { id: 1, name: 'Akustická gitara', price: 199, description: 'Kvalitná akustická gitara pre začiatočníkov aj pokročilých.', category: 'Gitary', stock: 5, image: IMG_ACOUSTIC },
      { id: 2, name: 'Elektrická gitara', price: 349, description: 'Elektrická gitara s humbucker snímačmi, skvelá pre rock a blues.', category: 'Gitary', stock: 3, image: IMG_ELECTRIC },
      { id: 3, name: 'Digitálne piano', price: 599, description: 'Prenosné digitálne piano s 88 klávesami a váženým mechanizmom.', category: 'Klávesy', stock: 4, image: IMG_PIANO },
      { id: 4, name: 'Bicie súprava', price: 429, description: 'Kompletná bicie súprava pre štúdiové nahrávanie aj domáce cvičenie.', category: 'Bicie', stock: 2, image: IMG_DRUMS },
      { id: 5, name: 'Saxofón', price: 499, description: 'Altsaxofón s profesionálnym ladením, vhodný do orchestrov aj džezových kapiel.', category: 'Dychové', stock: 1, image: IMG_SAX },
    ],
  }),
  getters: {
    getById: (state) => {
      return (id) => state.items.find((p) => p.id === Number(id))
    },
  },
})
