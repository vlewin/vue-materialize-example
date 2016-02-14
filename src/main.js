require('./assets/stylesheets/application.scss')

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(Vuex)

// Vue components
import App from './App.vue'
import Home from './components/Home.vue'
import A from './components/A.vue'
import B from './components/B.vue'

import AuthService from './services/authentication.js'

// External libraries
import 'materialize-sass-origin/js/bin/materialize.min.js'

import $ from 'jquery'

$(document).ready(function () {
  $('.dropdown-button').dropdown()
})

$(function () {
  $('.button-collapse').sideNav()
  $('.modal-trigger').leanModal()
  $('.dropdown-button').dropdown()
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
  var isAuthenticated = AuthService.isLoggedIn()

  if (transition.to.auth && !isAuthenticated) {
    transition.redirect('/login')
  } else {
    transition.next()
  }
})

router.start(App, 'app')
