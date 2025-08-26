<template>
    <header class="site-header">
        <nav class="nav-left">
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/stores">Stores</a></li>
        </ul>
        </nav>
        <a href="/homepage" class="logo-link">
        <img class="logo" src="/src/assets/svg/Nicole.svg" alt="Nicole logo" />
        </a>
        <nav class="nav-right">
        <ul>
            <li><input type="text" placeholder="  Search..." style="height: 25px; border-radius: 30px; border: 0;"/></li>
            <li><img href="#" src="/src/assets/header/Search_Magnifying_Glass.svg" alt="Search" /></li>
            <li><a href="/profile"><img src="/src/assets/header/User_Card_ID.svg" alt="My account" /></a></li>
            <li><a href="/cart"><img src="/src/assets/header/Shopping_Cart_02.svg" alt="Shopping cart" /></a></li>
        </ul>
        </nav>
    </header>
    <div class="marquee-container">
        <p class="marquee-content1">
            
            Up to 70% off on all products! &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Free shipping on orders over 1,000!
        </p>
        <img class="marquee-content2" src="/src/assets/svg/N2.svg"></img>
    </div>
</template>    

<style scoped>
    .site-header {
    display: flex;    
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    height: 10vh;
    background-color: #000;
    }
    .nav-left ul,
    .nav-right ul {
    display: flex;
    gap: 15px;
    list-style: none;
    cursor: pointer;
    }
    .nav-left ul li :hover {
    color:rgb(127, 127, 127);
    }
    .nav-right ul li img:hover {
    filter:brightness(0.3)
    }
    .nav-left ul li a{
    color: #ffffff;
    text-decoration: none;
    }

    .marquee-container {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 30px; 
      overflow: hidden;
      background-color: rgb(144,218,238); 
      color: #333; 
      white-space: nowrap;
    }
    .marquee-content1 {
      font-family:Verdana, Geneva, Tahoma, sans-serif;
      position:absolute;
      width: 100%;
      height: 100%;
      padding:0;
      font-size: 15px;
      line-height: 30px; 
      animation: marquee1 30s linear infinite; 
    }
    .marquee-content2 {
      position:absolute;
      width: 100%;
      height: 20px;
      padding:0;
      margin: 5px;
      filter: brightness(0) invert(0);
      line-height: 30px; 
      animation: marquee2 30s linear infinite; 
    }
    @keyframes marquee1 {
      0%   { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
    @keyframes marquee2 {
      0%   { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
</style>