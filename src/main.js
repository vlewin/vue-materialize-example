require('./assets/stylesheets/application.scss')

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Vue components
import App from './App.vue'
import Home from './components/Home.vue'
import A from './components/A.vue'
import B from './components/B.vue'

import AuthService from './services/authentication.js'

// External libraries
import 'materialize-sass-origin/js/bin/materialize.js'
import $ from 'jquery'

$(function () {
  $('.button-collapse').sideNav()
  $('.modal-trigger').leanModal()
})

export var router = new VueRouter()

router.map({
  '/': {
    component: Home
  },

  '/a': {
    component: A
  },
  '/b': {
    component: B,
    auth: true
  }
})

router.beforeEach(function (transition) {
  if (transition.to.auth && !AuthService.isLoggedIn()) {
    transition.redirect('/login')
  } else {
    transition.next()
  }
})

router.start(App, 'app')
