import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter) 

  import Juego from './components/Juego.vue'

  export const router= new VueRouter ({
      mode: 'history',
      routes: [
          {path:'/', component: Juego},
      ]
  })