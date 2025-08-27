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

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const user = ref(null)

const fetchProfile = async () => {
  try {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/authorization")
      return
    }

    const res = await fetch("http://localhost:5000/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (!res.ok) {
      router.push("/authorization")
      return
    }

    user.value = await res.json()
  } catch (err) {
    console.error(err)
  }
}

const logout = () => {
  localStorage.removeItem("token")
  router.push("/authorization")
}

onMounted(fetchProfile)
</script>
