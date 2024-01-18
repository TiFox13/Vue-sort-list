<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      search: "",
      mes: [],
      sortCites: [],
    cites: [
  'Москва', 
  'Санкт-Петербург', 
  'Пушкино', 
  'Воронеж', 
  'Иваново', 
  'Ялта', 
  'Самара',
  'Сочи', 
  'Ногинск', 
  'Архангельск', 
  'Владивосток', 
  'Ростов', 
  'Александров', 
  'Ржев', 
  'Екатеринбург', 
]
    }
  },
  created: function () {
    // `this` указывает на экземпляр vm
    this.sortCites = this.cites;
  },

  watch: {
    search(value){
      // binding this to the data value in the input
      this.search = value;
      this.validate(value);
 
    },
  },
  methods:{
    validate(value){
      if (value.length >= 2 || value === '') {
        this.mes['search'] = '';
        this.sort(value);
      } else{
        this.mes['search'] = 'Введите город';
      } 

    },
    sort(value) {

      this.sortCites =  this.cites.filter(n => n.toLowerCase().startsWith(value.toLowerCase()))
    }
}
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <label>
      <input 
        name="search"
        v-model="search"
        type="text" 
        required 
        minlength="2"
      >
    </label>
    <p v-if="mes.search">{{mes.search}}</p>
    <ul>
      <li v-for="(city, index) in sortCites" v-bind:key="index">
        <!-- <span class="icon"></span> -->
        <svg  class="icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 12H19.5" stroke-width="1.5" />
          <path d="M12.5 19V5" stroke-width="1.5" />
        </svg>
        {{ city }}
      </li>
    </ul>
  </div>
</template>