// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import '@/styles/index.scss' // global css

import './permission' // permission control

Vue.config.productionTip = false

Vue.use(ElementUI, {
  // size: 'medium',
  zIndex: 3000
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
