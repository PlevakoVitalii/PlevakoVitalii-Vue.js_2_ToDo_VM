import Vue from 'Vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      coponent: Home
    }, 
    {
      path:'/todos',
      coponent: ()=>import('./vuews/Todos.vue')
    }
  ]
})