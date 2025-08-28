

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import axios from "axios"

const router = useRouter()
const user = ref(null)

const fetchProfile = async () => {
  try {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/authorization")
      return
    }

    const response = await axios.get("http://localhost:5000/api/profile", {
      headers: { Authorization: `Bearer ${token}` }
    })

    user.value = response.data
  } catch (err) {
    console.error(err)
    if (err.response && err.response.status === 401) {
      router.push("/authorization")
    }
  }
}

const logout = () => {
  localStorage.removeItem("token")
  router.push("/authorization")
}

onMounted(fetchProfile)
</script>

<template>
  <div v-if="user">
    <h2>Привет, {{ user.name }}</h2>
    <p>Email: {{ user.email }}</p>
    <p>Бонусные баллы: {{ user.bonus }}</p>
    <button @click="logout">Выйти</button>
  </div>
  <div v-else>
    <p>Загрузка...</p>
  </div>
</template>

<style scoped>
  div{
    padding: 50px;
  }
  h2{
    padding-bottom: 20px;
  }
  button{
    margin: 10px 0px 
     10px;
    padding: 10px;
    width: 150px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 30px;
  }
</style>