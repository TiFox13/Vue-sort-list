<script>

export default {
  name: 'Home',
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
  'Абакан',
  'Красногорск',
  'Красноармейск',
  'Краснодар',
  'Пущино',
  'Псков',
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
        this.mes['search'] = 'Минимальная длина 2 символа';
      } 

    },
    sort(value) {

      this.sortCites =  this.cites.filter(n => n.toLowerCase().startsWith(value.toLowerCase()))
    }
}
}

</script>

<template>
  <div class="home">
    <form name="form">
      <label class="form-label"> Введите город
        <input 
          class="form-item"
          name="search"
          v-model="search"
          type="text" 
          required 
          minlength="2"
        >
      </label>
      <p class="form-error" v-if="mes.search">{{mes.search}}</p>
    </form>
    <ul>
      <li v-for="(city, index) in sortCites" v-bind:key="index">
        <svg @click="this.$store.dispatch('SET_SAVE', city)"
         class="icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 12H19.5" stroke-width="1.5" />
          <path d="M12.5 19V5" stroke-width="1.5" />
        </svg>
        {{ city }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .home {
     display: flex;
     flex-direction: column;
     align-items: center;
  }

  form {
    width: 100%;
    max-width: 300px;
  }

  .form-label {
    color: white;
    width: 100%;
    display: block;
  }

  .form-item {
    width: 100%;
    display: block;
    margin-top: 8px;
  }

  .form-error {
  margin: 4px 0 0;
  font-size: 14px;
  color:  rgb(217, 125, 46);
  }
</style>