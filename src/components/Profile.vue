<template>
  <div>
    <h2>Привет, {{ user.name }}</h2>
    <qrcode-vue :value="String(user.id)" :size="200" />
    <p>Бонусные баллы: {{ user.bonus }}</p>
  </div>
</template>

<script setup>
    const props = defineProps({ user: Object })
</script>
