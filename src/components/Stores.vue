<script setup>
</script>

<template>
    <div class="stores-page">
    <main>
        <h4>Addresses of our stores</h4><br/>
        <div style="display: flex; justify-content: center; gap: 40px;">
            <a style="text-decoration: none;" class="address" target="_blank" href="https://yandex.ru/maps/-/CLAjAKjN"><div>
                <img class="address-image" src="/src/assets/mainpage/icons8-pixel-50 (1).png"></img>

                <h4>Kaskad Shopping Center </h4> 
                <p>Address: 20 Prezidentsky Boulevard, Cheboksary, Chuvash Republic</p>
                <p>Mon-Sat: 10:00-21:00 <br/>
                    Sun: 10:00-20:00</p>
            </div></a>
            <a style="text-decoration: none;" class="address" target="_blank" href="https://yandex.ru/maps/-/CLAjA468"><div>
                <img class="address-image" src="/src/assets/mainpage/icons8-pixel-50 (1).png"></img>
                <h4>Madagascar Shopping Center</h4>
                <p>Address: 21A Leninskogo Komsomola Street, Cheboksary, Chuvash Republic</p>
                <p>Mon-Sat: 10:00-21:00 <br/>
                    Sun: 10:00-20:00</p>
            </div></a>
            <a style="text-decoration: none;" class="address" target="_blank" href="https://yandex.ru/maps/-/CLAfr60D"><div>
                <img class="address-image" src="/src/assets/mainpage/icons8-pixel-50 (1).png"></img>
                <h4>Volzhsky Shopping Center</h4>
                <p>Address: 10 Maksim Gorky Avenue, Building 1, Cheboksary, Chuvash Republic</p>
                <p>Mon-Sat: 10:00-21:00 <br/>
                    Sun: 10:00-20:00</p>
            </div></a>
            
            </div>
        <br/>
        
        <div style="position:relative;overflow:hidden;">
            <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=47.245000%2C56.140000&z=14&pt=47.240662,56.135602,pm2orm~47.280469,56.107542,pm2grm~47.196130,56.149206\"
                width="1425" 
                height="500" 
                frameborder="1" 
                allowfullscreen="true"
                style="position:relative; border:0;border-radius:30px; margin:50px;"
                alt="Our store">
            </iframe>
        </div>
    </main>
    </div>    
</template>

<style scoped>
    p{
        padding:25px;
    }
    h4{
        padding: 25px 25px 0px 25px;
        text-align: center;
    }
    .address{
        flex: 0 0 450px;
        color: rgb(0, 0, 0);
        background-color: rgba(127, 127, 127, 0.127);
        border-radius: 30px;
        padding: 20px;
        text-align: center;
        transition: transform 0.2s;
        position: relative;
        z-index: 1;
    }
    .address:hover{
        background-color: rgb(0, 0, 0);
        transform: translateY(-5px);
        color: white;
    }

    .address:hover .address-image{
        content: url("/src/assets/mainpage/icons8-pixel-50.png")
    }

 
</style>