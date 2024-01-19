<template>
  <header class="header">
    <button class="button" @click="$router.push({name: 'Home'})">Главная</button>
    <button class="button" @click="$router.push({name: 'Saved'})">Сохраненные</button>
  </header>
</template>
<script>

export default {
  name: 'Header',
}
</script>

