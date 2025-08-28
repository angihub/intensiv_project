<template>
  <div id="app">
    <Header :user="user" @logout="logout" />
    <main>
      <router-view :user="user" @login="setUser" @logout="logout" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import axios from "axios"

export default {
  name: "App",
  components: { Header, Footer },
  data() {
    return {
      user: null
    }
  },
  async created() {
    const token = localStorage.getItem("token")
    if (token) {
      try {
        const res = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.user = res.data
      } catch (err) {
        console.error("Ошибка загрузки профиля:", err)
        this.logout()
      }
    }
  },
  methods: {
    setUser(user) {
      this.user = user
    },
    logout() {
      localStorage.removeItem("token")
      this.user = null
      this.$router.push("/")
    }
  }
}

</script>

<style>
body, html {
  height: 100%;
  margin: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

</style>
