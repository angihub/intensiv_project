<template>
  <div class="catalog-page">
    <main>
      <section class="catalog-filters">
        <!-- Секция сортировки -->
        <div class="sort-section">
          <h4>Sort</h4>
          <select v-model="sortOption">
            <option value="popularity">By popularity</option>
            <option value="price-asc">By price: low to high</option>
            <option value="price-desc">By price: high to low</option>
          </select>
        </div>

        <!-- Секция категорий -->
        <div class="filter-section">
          <h4>Categories</h4>
          <ul>
            <li style="list-style-type: none;" v-for="category in categories" :key="category">
              <label>
                <input type="checkbox" v-model="selectedCategories" :value="category">
                {{ category }}
              </label>
            </li>
          </ul>
        </div>

        <!-- Секция ценового диапазона -->
        <div class="filter-section">
          <h4>Price</h4>
          <span>Up to </span>
          <input type="text" v-model="priceRange" min="0" max="10000" style="width: 25%; border-radius: 30px; height: 25px;">
        </div>
      </section>

      <!-- Секция продуктов -->
      <section class="products-grid">
        <div 
          class="product-card" 
          v-for="product in sortedProducts" 
          :key="product.id"
          @click="goToProduct(product.id)"
        >
          <img :src="product.img ? product.img : '/catalog/default.png'" :alt="product.name" class="product-image">
          <p>{{ product.name }}</p>
          <p class="price">{{ product.price }}₽</p>
          <button class="add-to-cart" @click.stop="addToCart(product)">Add to cart</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Настройки роутера
const router = useRouter();

// Состояние
const products = ref([]);
const categories = ['clothes', 'shoes', 'accessories'];
const selectedCategories = ref([]);
const priceRange = ref(10000);

// Сортировка
const sortOption = ref('popularity');

// Функция для сортировки товаров
const sortedProducts = computed(() => {
  let sortedList = [...filteredProducts.value];

  if (sortOption.value === 'price-asc') {
    sortedList.sort((a, b) => a.price - b.price);
  } else if (sortOption.value === 'price-desc') {
    sortedList.sort((a, b) => b.price - a.price);
  } else if (sortOption.value === 'popularity') {
    sortedList.sort((a, b) => b.popularity - a.popularity); // Нужно иметь поле popularity в данных
  }

  return sortedList;
});

// Загружаем продукты с сервера
onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/products');
    products.value = res.data;
  } catch (error) {
    console.error('Ошибка загрузки товаров:', error.message);
    products.value = [];
  }
});

// Фильтрация продуктов по категориям и цене
const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesCategory = selectedCategories.value.length === 0 ||
      selectedCategories.value.includes(product.category);
    const matchesPrice = Number(product.price) <= priceRange.value;
    return matchesCategory && matchesPrice;
  });
});

// Функция добавления товара в корзину
function addToCart(product) {
  console.log('Added to cart:', product);
}

// Редирект на страницу товара
function goToProduct(id) {
  router.push(`/product/${id}`);
}
</script>

<style scoped>

.catalog-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.sort-section{
  margin-right: 50px;

}

.sort-section select{
  border-radius: 30px;
  height: 25px;
  width: 150px;
}

.catalog-filters {
  display: flex;
  padding: 20px 50px 20px 50px;
  background: #f8f8f8;
  gap: 30px;
}

.filter-section {
  flex: 1;
  max-width: 250px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  padding: 30px;
}

.product-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 30px;
}

.price {
  margin: 0 0 20px 0;
}

.add-to-cart {
  background: #000;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 30px;
  cursor: pointer;
  width: 100%;
}

.add-to-cart:hover {
  background: #333;
}
</style>
