<template>
  <div class="cart-page">
    <h1>Корзина</h1>

    <div v-if="!user">
      <p>Вы не вошли в аккаунт. Корзина хранится только в этом браузере.</p>
    </div>

    <div v-if="cart.length === 0">
      <p>Корзина пуста</p>
    </div>

    <ul v-else>
      <li v-for="item in cart" :key="item.product_id" class="cart-item">
        <img
          :src="item.img || '/public/default.png'"
          alt="product"
          class="cart-img"
        />
        <span>{{ item.name || 'Товар' }}</span>
        <span>{{ item.price || 0 }} ₽ × {{ item.quantity }}</span>
        <button @click="removeFromCart(item.product_id)">Удалить</button>
      </li>
    </ul>

    <div v-if="cart.length > 0" class="cart-total">
      <strong>Итого: {{ total }} ₽</strong>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Cart",
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      cart: []
    }
  },
  computed: {
    total() {
      return this.cart.reduce(
        (sum, item) => sum + (item.price || 0) * item.quantity,
        0
      )
    }
  },
  methods: {
    async loadCart() {
      if (this.user) {
        // Загружаем корзину с сервера
        try {
          const res = await axios.get(
            `http://localhost:5000/api/cart/${this.user.id}`
          )
          this.cart = res.data || []
        } catch (err) {
          console.error("Ошибка загрузки корзины:", err)
        }
      } else {
        // Берем корзину из localStorage
        this.cart = JSON.parse(localStorage.getItem("cart") || "[]")
      }
    },

    async removeFromCart(product_id) {
      if (this.user) {
        try {
          await axios.post("http://localhost:5000/api/cart/remove", {
            user_id: this.user.id,
            product_id
          })
          this.loadCart()
        } catch (err) {
          console.error("Ошибка удаления товара:", err)
        }
      } else {
        this.cart = this.cart.filter(item => item.product_id !== product_id)
        localStorage.setItem("cart", JSON.stringify(this.cart))
      }
    }
  },
  mounted() {
    this.loadCart()
  }
}
</script>

<style scoped>
.cart-page {
  padding: 20px;
}
.cart-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.cart-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.cart-total {
  margin-top: 20px;
  font-size: 18px;
}
</style>
