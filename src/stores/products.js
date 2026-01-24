import { defineStore } from 'pinia'


const IMG_ACOUSTIC = 'https://muztorg.ua/image/cache/catalog/99994/231444/231444_kala_nylon_string_classical_guitar_2-1200x800.jpeg'
const IMG_ELECTRIC = 'https://organology.net/wp-content/uploads/2024/10/electric-guitar.jpg'
const IMG_PIANO = 'https://shop.usa.yamaha.com/media/catalog/product/cache/909274b353c35762b27165617530ca2e/p/-/p-s500_color_b_1f5564b15d77894b403e07c71eca10dd.jpg'
const IMG_DRUMS = 'https://skifmusic.ru/static/article/2173/115-491.webp'
const IMG_SAX = 'https://yamaha.ru/upload/sprint.editor/187/ozrw89blcnou5e1zxcxa53av5m9g97jp/2.jpg'
const IMG_FLUTE = 'https://www.hansonmusic.co.uk/images/products/i/im/img_flute.jpg?width=1998&height=1998&quality=85&mode=pad&format=webp&bgcolor=ffffff'
const IMG_VIOLIN = 'https://dagnamusic.com/wp-content/uploads/2023/11/1-22-scaled.jpg'
const IMG_CABLE = 'https://c1.neweggimages.com/productimage/nb640/BXG6D2501030ZARBQF9.jpg'
const IMG_STAND = 'https://imusicdata.sk/InShop/Catalogue/Products/Pictures/Big/HERCULES-MS201B-01.jpg'
const IMG_MIC = 'https://muzikercdn.com/uploads/products/24/2459/main_3884e5e5.jpg'
const IMG_HEADPHONES = 'https://cdn.lunzo.cz/content/images/product/default/studiove-sluchadla-cierna_774045.jpg'
const IMG_STRINGS = 'https://a.allegroimg.com/original/11bbe0/07d5b0a44c8dad7da6df62945b24/STRUNY-pre-klasicku-gitaru-ZNACKOVE-sada-kompletna-gitarove-struny-x6-Stav-balenia-originalne'
const IMG_CAPO = 'https://r2.gear4music.com/media/117/1175792/600/preview.jpg'
const IMG_TUNER = 'https://img-cdn.heureka.group/v1/847bfbcc-31df-4a85-af80-b6c26c804836.jpg?width=400&height=400'
const IMG_METRONOME = 'https://r2.gear4music.com/media/119/1196809/600/preview.jpg'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [
      { id: 1, name: 'Akustická gitara', price: 199, description: 'Kvalitná akustická gitara pre začiatočníkov aj pokročilých. Ideálna na nácvik rôznych žánrov od bluegrassu po pop.', category: 'Gitary', stock: 5, image: IMG_ACOUSTIC },
      { id: 2, name: 'Elektrická gitara', price: 349, description: 'Elektrická gitara s humbucker snímačmi, skvelá pre rock a blues. Vrátane zásuvky a kábla.', category: 'Gitary', stock: 3, image: IMG_ELECTRIC },
      { id: 3, name: 'Digitálne piano', price: 599, description: 'Prenosné digitálne piano s 88 klávesami a váženým mechanizmom. 128 polytónov a USB pripojenie.', category: 'Klávesy', stock: 4, image: IMG_PIANO },
      { id: 4, name: 'Bicie súprava', price: 429, description: 'Kompletná bicie súprava pre štúdiové nahrávanie aj domáce cvičenie. Vrátane sadí a pedálu.', category: 'Bicie', stock: 2, image: IMG_DRUMS },
      { id: 5, name: 'Saxofón', price: 499, description: 'Altsaxofón s profesionálnym ladením, vhodný do orchestrov aj džezových kapiel.', category: 'Dychové', stock: 1, image: IMG_SAX },
      { id: 6, name: 'Flauta', price: 149, description: 'Kvalitná drevená flauta pre začiatočníkov aj skúsených hudobníkov. Vrátane pouzdra a čistiacich tyčí.', category: 'Dychové', stock: 8, image: IMG_FLUTE },
      { id: 7, name: 'Husľa', price: 279, description: 'Klasické husľa s rezbárskymi detailami. Ideálne pre klasickú hudbu a tradičné ľudové piesne.', category: 'Ľudové', stock: 4, image: IMG_VIOLIN },
      { id: 8, name: 'Hudobný kábel 3m', price: 15, description: 'Odolný nástrojový kábel XLR s kvalitným árnyovaním. Vhodný pre všetky elektrické nástroje.', category: 'Príslušenstvo', stock: 25, image: IMG_CABLE },
      { id: 9, name: 'Mikrofonný stojan', price: 35, description: 'Nastaviteľný mikrofonný stojan s gumovými nožičkami. Stabilný dizajn pre štúdium aj koncerty.', category: 'Príslušenstvo', stock: 12, image: IMG_STAND },
      { id: 10, name: 'Dynamický mikrofón', price: 89, description: 'Profesionálny dynamický mikrofón s jednotným frekvenčným spektrom. Ideálny pre spev a ozvučenie nástrojov.', category: 'Mikrofóny', stock: 6, image: IMG_MIC },
      { id: 11, name: 'Štúdiové slúchadlá', price: 129, description: 'Profesionálne uzavreté slúchadlá s plochom charakteristikou. Pohodlné nosenie a dlhá životnosť.', category: 'Príslušenstvo', stock: 10, image: IMG_HEADPHONES },
      { id: 12, name: 'Gitarové struny', price: 8, description: 'Sada bronzových strún pre akustickú gitaru. Ostrý zvuk s dlhšou životnosťou.', category: 'Príslušenstvo', stock: 30, image: IMG_STRINGS },
      { id: 13, name: 'Gitarové kapo', price: 12, description: 'Kvalitné kapo s gumovým polstrovaním. Bez problémov s laďovaním a pohodlné na ruky.', category: 'Príslušenstvo', stock: 15, image: IMG_CAPO },
      { id: 14, name: 'Digitálny ladičan', price: 19, description: 'Presný digitálny ladičan s LED displejom. Funguje na všetkých typoch nástrojov.', category: 'Príslušenstvo', stock: 20, image: IMG_TUNER },
      { id: 15, name: 'Metrónóm', price: 25, description: 'Digitálny metrónóm s 40-260 BPM. Podpora rôznych taktov a hlasitosťou.', category: 'Príslušenstvo', stock: 14, image: IMG_METRONOME },
    ],
    cartItems: [],
    count: 0,
  }),
  getters: {
    getById: (state) => {
      return (id) => state.items.find((p) => p.id === Number(id))
    },
    totalItems: (state) => state.cartItems.reduce((s, i) => s + i.qty, 0),
    totalPrice: (state) => {
      return state.cartItems.reduce((s, i) => {
        const p = state.items.find(prod => prod.id === i.productId)
        return s + (p ? p.price * i.qty : 0)
      }, 0)
    },
    detailedItems: (state) => {
      return state.cartItems.map((i) => {
        const product = state.items.find(p => p.id === i.productId)
        return { product, qty: i.qty }
      })
    },
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    addToCart(productId, qty = 1) {
      const ex = this.cartItems.find((i) => i.productId === productId)
      if (ex) ex.qty += qty
      else this.cartItems.push({ productId, qty })
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((i) => i.productId !== productId)
    },
    setQty(productId, qty) {
      const it = this.cartItems.find((i) => i.productId === productId)
      if (it) {
        it.qty = qty > 0 ? qty : 0
        if (it.qty === 0) this.removeFromCart(productId)
      }
    },
    clearCart() {
      this.cartItems = []
    },
    increment() {
      this.count++
    },
  },
})
