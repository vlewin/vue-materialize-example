require('./assets/stylesheets/application.scss')

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

// Vue settings
Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(Vuex)

// Vue components
import App from './App.vue'
import Home from './components/Home.vue'

// Public Vue components
import About from './components/About.vue'
import Features from './components/Features.vue'
import Help from './components/Help.vue'
import Support from './components/Support.vue'

// Protected Vue components
import Account from './components/protected/Account.vue'
import Dashboard from './components/protected/Dashboard.vue'
import History from './components/protected/History.vue'
import Notifications from './components/protected/Notifications.vue'

// Services
import AuthService from './services/authentication.js'

// External libraries
import $ from 'jquery'
import jQuery from 'jquery'
window.$ = $
window.jQuery = jQuery

import 'materialize-sass-origin/js/jquery.hammer.js'
import 'materialize-sass-origin/js/bin/materialize.min.js'

export var router = new VueRouter()

router.map({
  '/': {
    component: Home
  },

  '/about': {
    component: About
  },

  '/features': {
    component: Features
  },

  '/support': {
    component: Support
  },

  '/help': {
    component: Help
  },

  '/account': {
    component: Account,
    auth: true
  },

  '/dashboard': {
    component: Dashboard,
    auth: true
  },

  '/history': {
    component: History,
    auth: true
  },

  '/notifications': {
    component: Notifications,
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

router.afterEach(function () {
  console.log('After each')
  $('.dropdown-button').dropdown({ beloworigin: true })
  $('.button-collapse').sideNav()
})

router.start(App, 'app')
