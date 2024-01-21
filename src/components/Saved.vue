<script>
  export default {
    name: 'Saved',
    computed: {
      saveList() {
        return this.$store.state.saves;
      },
    }
  }
</script>

<template>
  <p v-if="saveList.length === 0">На данный момент ваш список сохраненных городов пуст</p>
  <ul>
    <li v-for="(item, index) in saveList" v-bind:key="index">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped>
  p {
    max-width: 300px;
    text-align: center;
    color: rgb(217, 125, 46);
    margin: 20px auto 0;
  }
</style>