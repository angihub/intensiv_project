<script setup>

</script>
<template>
    <header class="site-header">
        <nav class="nav-left">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#catalog">Catalog</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#stores">Stores</a></li>
        </ul>
        </nav>
        <a href="#" class="logo-link">
        <img class="logo" src="/src/assets/svg/Nicole.svg" alt="Nicole logo" />
        </a>
        <nav class="nav-right">
        <ul>
            <li><input type="text" placeholder="  Search..." style="height: 25px; border-radius: 30px;"/></li>
            <li><img href="#about" src="/src/assets/header/Search_Magnifying_Glass.svg"  alt="Search" /></li>
            <li><img src="/src/assets/header/User_Card_ID.svg" alt="My account" /></li>
            <li><img src="/src/assets/header/Shopping_Cart_02.svg" alt="Shopping cart" /></li>
        </ul>
        </nav>
    </header>
    
    <main>
    <section class="banner">
      <video class="banner-video" autoplay muted loop playsinline>
        <source src="/src/assets/mainpage/swpool.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="banner-overlay">
        <p class="promo-text">Promo Text Here</p>
        <img src="/src/assets/svg/N.svg" alt="Promo Icon" class="promo-icon" />
      </div>
      </section>
      <section id="catalog" class="catalog-section">
        <a href="/collections/chasing-summer-25" class="collection-banner">
            <img src="/src/assets/svg/Chasing Summer ‘25.svg" alt="Chasing Summer ‘25" />
        </a>
        <div class="carousel">
            <div class="carousel-track">
            <div class="product-card" v-for="(product, index) in products" :key="index">
                <img :src="product.img" class="product-image" :alt="product.name" />
                <p>{{ product.name }}</p>
            </div>
            </div>
            <button class="carousel-control prev">&#10094;</button>
            <button class="carousel-control next">&#10095;</button>
        </div>
        <a href="/collections/chasing-summer-25" class="see-all">See full collection →</a>
      </section>
       
      <section>
        <video class="promo-video" autoplay muted loop playsinline>
            <source src="/src/assets/mainpage/mainpage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </section>
    </main>  

    <footer class="site-footer">
        <div class="footer-about">
            <strong>About us</strong><br />
            Nicole is a luxury brand of clothing, footwear and accessories.
            We are proud of the quality of our materials, the comfort of our products.
            Nicole keeps up with the times, while maintaining quality and individuality.
            </div><br />
            <div class="footer-contact">
            <strong>Contact us</strong><br />
            <a href="#" target="_blank" rel="noopener">
                <img class="social-icon" src="/src/assets/svg/telegram.svg" alt="Telegram" />
            </a>
            <a href="#" target="_blank" rel="noopener">
                <img class="social-icon" src="/src/assets/svg/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener">
                <img class="social-icon" src="/src/assets/svg/gmail.svg" alt="Gmail" />
        </a>
            </div><br />
            <div class="footer-copy">© Nicole | 2025 | All rights reserved</div>
        </footer>
</template>