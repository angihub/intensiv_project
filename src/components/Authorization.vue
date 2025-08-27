<template>
  <div class="auth">
    <h2>{{ isLogin ? "Вход" : "Регистрация" }}</h2>

    <form @submit.prevent="handleSubmit">
      <input v-model="name" v-if="!isLogin" type="text" placeholder="Имя" />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <button type="submit">{{ isLogin ? "Войти" : "Зарегистрироваться" }}</button>
    </form>

    <p @click="isLogin = !isLogin" style="cursor:pointer; color:blue;">
      {{ isLogin ? "Нет аккаунта? Зарегистрируйся" : "Уже есть аккаунт? Войди" }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const isLogin = ref(true)
const name = ref("")
const email = ref("")
const password = ref("")

const handleSubmit = async () => {
  const url = isLogin.value
    ? "http://localhost:5000/api/login"
    : "http://localhost:5000/api/register"

  const body = isLogin.value
    ? { email: email.value, password: password.value }
    : { name: name.value, email: email.value, password: password.value }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    const data = await res.json()
    if (data.token) {
      localStorage.setItem("token", data.token)
      router.push("/profile")
    } else {
      alert(data.error || "Ошибка")
    }
  } catch (err) {
    console.error(err)
  }
}
</script>
