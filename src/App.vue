<script setup>
import Menu from './components/Menu.vue'
</script>

<template>
  <div class="app">
    <Menu />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style>
  body {
    background-color: #012020;
  }
  .app {
    max-width: 600px;
    min-height: 635px;
    width: 100%;
    background-color: #006363;
    border-radius: 40px;
    margin: auto;
  }
  .content {
    box-sizing: border-box;
    padding: 0 20px 20px;
  }

  
ul {
  box-sizing: border-box;
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 300px;
  max-height: 500px;
  margin: 20px auto 0;
  text-align: left;

  overflow: scroll;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

ul::-webkit-scrollbar {
  width: 0;
  height: 0;
}

li { 
  margin: 0;
  padding: 5px 0;
  color:  white;
  border-bottom: 1px solid #33CCCC;
  width: 100%;
}

.icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  stroke: burlywood;
}

.icon:hover {
  cursor: pointer;
  stroke: rgb(240, 150, 86);
}

</style>
