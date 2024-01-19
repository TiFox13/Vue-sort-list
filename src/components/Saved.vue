<script>
  export default {
    name: 'Saved',
    props: {
      msg: String,
    },
    computed: {
      saveList() {
        return this.$store.state.saves;
      },
    }
  }
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item, index) in saveList" v-bind:key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>