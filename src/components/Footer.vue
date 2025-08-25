<template>
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

<style scoped>
    footer{
        background-color: rgba(0, 0, 0);
        display: flex;
        flex-direction: column;
        height: 30vh;
        padding: 50px;
        margin: 0;
        margin-top: auto;
        justify-content: space-between;
        color: #ffffff;
    }

    .socials{
        padding-top: 10px;
        padding-right: 10px;
    }

    .site-footer {
    background-color: #000;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 50px;
    height: 30vh;
    }
    .social-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    }

</style>
