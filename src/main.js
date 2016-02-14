require('./assets/stylesheets/application.scss')

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Vue components
import App from './App.vue'
import A from './components/A.vue'
import B from './components/B.vue'

// External libraries
import 'materialize-sass-origin/js/bin/materialize.js'
import $ from 'jquery'

$(function () {
  $('.button-collapse').sideNav()
  $('.modal-trigger').leanModal()
})

var router = new VueRouter()

router.map({
  '/a': {
    component: A
  },
  '/b': {
    component: B
  }
})

router.start(App, 'app')
