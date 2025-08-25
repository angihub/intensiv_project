<template>
  <div class="catalog-page">

    <main>
      <section class="catalog-filters">
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

        <div class="filter-section">
          <h4>Price</h4>
          <span>Up to </span>
          <input type="text" v-model="priceRange" min="0" max="1000" style="width: 25%; border-radius: 30px; height: 25px;"> </br>
        </div>
      </section>

      <section class="products-grid">
        <div 
          class="product-card" 
          v-for="product in filteredProducts" 
          :key="product.id"
          @click="goToProduct(product.id)"
        >
          <img :src="product.img" :alt="product.name" class="product-image">
          <br>
          <p>{{ product.name }}</p>
          <p class="price">{{ product.cost }}</p>
          <button class="add-to-cart" @click.stop="addToCart(product)">Add to cart</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const allProducts = ref([
  {
    id: 1,
    img: "/src/assets/catalog/Cream Kelly Twins Bag.jfif",
    name: "Cream Kelly Twins Bag",
    cost: "999$",
    category: "Bags"
  },
  {
    id: 2,
    img: "/src/assets/catalog/Harlee Embroidered Shoulder Bag - Pink.jfif",
    name: "Harlee Embroidered Bag",
    cost: "777$",
    category: "Bags"
  },
  {
    id: 3,
    img: "/src/assets/catalog/Cream Kelly Twins Bag.jfif",
    name: "Cream Kelly Twins Bag 2",
    cost: "999$",
    category: "Bags"
  },
  {
    id: 4,
    img: "/src/assets/catalog/Cream Kelly Twins Bag.jfif",
    name: "Cream Kelly Twins Bag 3",
    cost: "99$",
    category: "Bags"
  },
  {
    id: 5,
    img: "/src/assets/catalog/Cream Kelly Twins Bag.jfif",
    name: "Cream Kelly Twins Bag",
    cost: "999$",
    category: "Bags"
  },
  {
    id: 6,
    img: "/src/assets/catalog/Cream Kelly Twins Bag.jfif",
    name: "Cream Kelly Twins Bag 4",
    cost: "909$",
    category: "Bags"
  },
  
]);

const categories = ['Bags', 'Shoes', 'Accessories'];
const selectedCategories = ref([]);
const priceRange = ref(1000);

const filteredProducts = computed(() => {
  return allProducts.value.filter(product => {
    const matchesCategory = selectedCategories.value.length === 0 || 
      selectedCategories.value.includes(product.category);
    const matchesPrice = parseInt(product.cost) <= priceRange.value;
    return matchesCategory && matchesPrice;
  });
});

function addToCart(product) {
  console.log('Added to cart:', product);
}

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