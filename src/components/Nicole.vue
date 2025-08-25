<script setup>
    import { reactive, ref } from 'vue';
    const products = reactive([
    {
        img: "/src/assets/catalog/Cream Kelly Twins Bag.jfif",
        name: "Cream Kelly Twins Bag",
        cost: "9$"
    },
    {
        img: "/src/assets/catalog/Harlee Embroidered Shoulder Bag - Pink.jfif",
        name: "Harlee Embroidered Shoulder Bag - Pink",
        cost: "777$"
    },
    {
        img: "/src/assets/catalog/Cream Kelly Twins Bag.jfif",
        name: "Cream Kelly Twins Bag 2",
        cost: "999$"
    },
    {
        img: "/src/assets/catalog/Harlee Sequin Shoulder Bag - Pink.jfif",
        name: "Harlee Sequin Shoulder Bag - Pink",
        cost: "899$"
    },
    {
        img: "/src/assets/catalog/Cream Kelly Twins Bag.jfif",
        name: "Cream Kelly Twins Bag 3",
        cost: "99$"
    },
    {
        img: "/src/assets/catalog/Cream Kelly Twins Bag.jfif",
        name: "Cream Kelly Twins Bag 4",
        cost: "909$"
    },
    
])
        
const currentSlide = ref(0);
const visibleSlides = 4; // Количество видимых слайдов

const nextSlide = () => {
  currentSlide.value = Math.min(currentSlide.value + 1, products.length - visibleSlides);
};

const prevSlide = () => {
  currentSlide.value = Math.max(currentSlide.value - 1, 0);
};

</script>
<template>
       
    <main>
    <section class="banner">
      <video class="banner-video" autoplay muted loop playsinline>
        <source src="/src/assets/mainpage/real_sea.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="banner-overlay">
        <p class="promo-text">Welcome to the</p>
        <img src="/src/assets/svg/Nicole.svg" alt="Promo Icon" class="promo-icon">
      </div>
      </section>
      <section id="catalog" class="catalog-section">
        <section class="in-catalog-section">
        <a href="/collections/chasing-summer-25" class="collection-banner">
            <img src="/src/assets/svg/Chasing Summer ‘25.svg" alt="Chasing Summer ‘25" />
        </a>
        <div class="carousel-container">
      <button class="carousel-control prev" @click="prevSlide"><img src="/src/assets/svg/totheleft.svg"></img></button>
      <div class="carousel">
        <div 
          class="carousel-track" 
          :style="{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }"
        >
          <div class="product-card" v-for="(product, index) in products" :key="index">
            <img :src="product.img" class="product-image" :alt="product.name" />
            <p>{{ product.name }}</p>
            <p>{{ product.cost }}</p>
          </div>
        </div>
      </div>
      <button class="carousel-control next" @click="nextSlide"><img src="/src/assets/svg/totheright.svg"></img></button>
    </div>
        </section>
        <a href="/collections/chasing-summer-25" class="see-all">See full collection →</a>
      </section>
       
      <section style="display: flex; flex-direction: row;">
        <video class="promo-video" autoplay muted loop playsinline>
            <source src="/src/assets/mainpage/mainpage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <p style="max-width: 800px; margin: auto;">Indulge in the pure comfort of 100% natural textiles, lovingly woven in the heart of the South.
            Our fabrics are made from the finest locally sourced cotton and linen, cultivated under the warm sun and crafted with generations of artisan expertise.
            <br><br>
            ◼ Breathable & Gentle – Perfect for sensitive skin and sustainable living.<br>
            ◼ Eco-Friendly & Ethically Made – Supporting local farmers and reducing environmental impact.<br>
            ◼ Timeless Quality – Designed for durability, softness, and effortless elegance.<br>
            <br><br>
            Wrap yourself in the warmth of tradition—where nature meets craftsmanship.
            <br><br>
            Shop now and embrace sustainable luxury!
            <br><br>
            #SlowFashion #NaturalFabrics #SouthernCraftsmanship</p>
      </section>
    </main>  

</template>

