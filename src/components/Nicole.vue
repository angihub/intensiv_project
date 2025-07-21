<script setup>

</script>
<template>
    <header>
        <nav>
           <ul>
               <li><a href="#">About</a></li>
               <li><a href="#">Catalog</a></li>
               <li><a href="#">Collections</a></li>
               <li><a href="#">Stores</a></li>
           </ul>
       </nav>
       <img id="jacquard24" src="/src/assets/svg/Nicole.svg" alt="Nicole">
       <nav>
           <ul>
               <input type="text">
               <img src="/src/assets/header/Search_Magnifying_Glass.svg" alt="Search">
               <img src="/src/assets/header/User_Card_ID.svg" alt="My account">
               <img src="/src/assets/header/Shopping_Cart_02.svg" alt="Shopping cart">
           </ul>
       </nav>
    </header>
    <br/>
    <main>
        <video autoplay muted loop playsinline>
            <source src="/src/assets/mainpage/sea.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <nav>
            <ul class="catalog">
                <li>
                    <img style="height: 160px; margin-top: 20px; margin-right: 50px;" 
                    src="/src/assets/svg/Chasing Summer ‘25.svg" alt="Chasing Summer ‘25">
                </li>
                <li class="card">
                    <img class="product" src="/src/assets/catalog/Cream Kelly Twins Bag.jfif">
                    <p>Cream Kelly Twins Bag</p>
                </li>
                <li class="card">
                    <img class="product" src="/src/assets/catalog/Harlee Embroidered Shoulder Bag - Pink.jfif">
                    <p>Harlee Embroidered Shoulder Bag</p>
                </li>
                <li class="card">
                    <img class="product" src="/src/assets/catalog/Harlee Sequin Shoulder Bag - Pink.jfif">
                    <p>Harlee Sequin Shoulder Bag</p>
                </li>
            </ul>
        </nav>


        <video style="width: 25%; margin-right: 50px;" autoplay muted loop playsinline>
            <source src="/src/assets/mainpage/mainpage.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        
    </main>
    
    <br/><footer>
        <div><strong>About us</strong><br/>
            Nicole is a luxury brand of clothing, footwear and accessories. 
            We are proud of the quality of our materials, the comfort of our products. 
            Nicole keeps up with the times, while maintaining quality and individuality.
        </div>
        <div><strong>Contact us</strong><br/>
            <a href="" rel="noopener noreferrer" 
            target="_blank"><i color="#000">
                <img class="socials" width="30" height="30" 
                    viewBox="0 0 20 18" fill="none" src="/src/assets/svg/telegram.svg">
                </img></i>
            </a>
            <a href="" rel="noopener noreferrer" 
            target="_blank"><i color="#000">
                <img class="socials" width="30" height="30" 
                    viewBox="0 0 20 18" fill="none" src="/src/assets/svg/instagram.svg">
                </img></i>
            </a>
            <a href="" rel="noopener noreferrer" 
            target="_blank"><i color="#000">
                <img class="socials" width="30" height="30" 
                    viewBox="0 0 30 30" fill="none" src="/src/assets/svg/gmail.svg">
                </img></i>
            </a>
        </div>
        <div>© Nicole | 2025 | All rights reserved</div>
    </footer>
</template>