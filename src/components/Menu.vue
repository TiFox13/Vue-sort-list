<script>
  export default {
    name: 'Menu',
  }
</script>

<template>
  <nav class="menu">
    <button class="button" @click="$router.push({name: 'Home'})">Главная</button>
    <button class="button" @click="$router.push({name: 'Saved'})">Сохраненные</button>
  </nav>
</template>

<style>
  .menu {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 40px;
    box-sizing: border-box;
    padding: 20px 100px;
  }

  .button {
    width: 100%;
    max-width: 120px;
    height: 28px;
    border: 0;
    border-radius: 40px;
    background-color:  #33CCCC;
    transition: 0.3s;
  }

  .button:hover {
    cursor: pointer;
    background-color: #009999;
  }
  
  .button:active {
    background-color: #1D7373;
  }

  .button:disabled {
    background-color: darkgrey;
  }

</style>