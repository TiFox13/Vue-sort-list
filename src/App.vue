
<template>
  <div class="app">
    <Header />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>


<!-- // <template>
//   <Header></Header>
//   <img class="totem" alt="Vue logo" src="./assets/mem.png">
//   <HelloWorld msg="Ну типа первые шаги во Vue"/>
// </template>

// <script>
// import HelloWorld from './components/HelloWorld.vue';
// import Header from './components/Header.vue';

// export default {
//   name: 'App',
//   components: {
//     HelloWorld,
//     Header,
//   }
// }
// </script> -->
