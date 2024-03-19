import {resolveComponent} from "vue"
import { createRouter, createWebHistory } from 'vue-router'
import PasswordOptionsAPI from '../views/PasswordOptionsAPI.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
      path: '/:minLength(\\d+)',      
      component: PasswordOptionsAPI,
      props: true
    }, {      
      path: '/composition-api/:minLength(\\d+)',
      component: () => import('../views/PasswordCompositionAPI.vue'),
      props: true
    }, {
      path: '/script-setup/:minLength(\\d+)',
      component: () => import('../views/PasswordScriptSetup.vue'),
      props: true
  }]
})

export default router
