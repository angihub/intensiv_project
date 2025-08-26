<template>
  <div>
    <h2>{{ isLogin ? 'Вход' : 'Регистрация' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div v-if="!isLogin">
        <input v-model="name" placeholder="ФИО" required />
      </div>
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <button type="submit">{{ isLogin ? 'Войти' : 'Зарегистрироваться' }}</button>
    </form>
    <p @click="toggle">{{ isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войти' }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['login'])

const isLogin = ref(true)
const name = ref('')
const email = ref('')
const password = ref('')

function toggle() {
  isLogin.value = !isLogin.value
}

async function handleSubmit() {
  const endpoint = isLogin.value ? 'login' : 'register'
  const payload = isLogin.value
    ? { email: email.value, password: password.value }
    : { name: name.value, email: email.value, password: password.value }

  const res = await fetch(`http://localhost:5000/api/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  const data = await res.json()

  if (data.token) {
    localStorage.setItem('token', data.token)
    emit('login', data.user)
  } else {
    alert(data.error || 'Ошибка входа')
  }
}
</script>
