<template>
  <Header></Header>
  <img class="totem" alt="Vue logo" src="./assets/mem.png">
  <HelloWorld msg="Ну типа первые шаги во Vue"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
  }
}
</script>

