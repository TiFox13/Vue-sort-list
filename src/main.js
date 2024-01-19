import {createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import { store } from './store';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import Saved from './components/Saved.vue';

import './assets/style.css'

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    { name: 'Home', path: '/', component: HelloWorld },
    { name: 'Saved', path: '/saved', component: Saved }
  ]
});

createApp(App).use(store).use(router).mount('#app')


