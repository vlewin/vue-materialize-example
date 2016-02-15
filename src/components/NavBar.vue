<template>
  <nav class="teal" role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo">
        <img src="./../assets/images/cloud-logo.png">
      </a>

      <ul class="right hide-on-med-and-down">
        <template v-if="isAuthenticated">
          <li><a v-link="{ path: '/dashboard' }"><i class="material-icons left">dashboard</i>Dashboard</a></li>
          <li><a v-link="{ path: '/history' }"><i class="material-icons left">history</i>History</a></li>
          <li><a v-link="{ path: '/notifications' }"><i class="material-icons">notifications</i></a></li>

          <li>
            <a class="dropdown-button" v-link="{ path: '/account' }" data-beloworigin="true" data-activates="dropdown1">
              <img src="https://33.media.tumblr.com/avatar_1bfb7ba339ea_128.png" alt="" class="avatar circle">
              Mr. Superman
              <i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
          <ul id='dropdown1' class='dropdown-content'>
            <li><a href="https://manage.auth0.com/#/account" target="_blank"><i class="material-icons left">stars</i>Auth0 Account</a></li>
            <li><a v-on:click="logout"><i class="material-icons left">exit_to_app</i>Logout</a></li>
          </ul>

          <!-- <li>
            <a v-link="{ path: '/account' }">
              <img src="http://materializecss.com/images/yuna.jpg" alt="" class="avatar circle leftleft">
              Miss Universe
            </a>
          </li> -->
          <!-- <li><a v-on:click="logout"><i class="material-icons left">exit_to_app</i>Logout</a></li> -->
        </template>

        <template v-else>
          <li><a v-link="{ path: '/features' }"><i class="material-icons left">fiber_new</i>Features</a></li>
          <li><a v-link="{ path: '/about' }"><i class="material-icons left">explore</i>About</a></li>
          <li><a v-link="{ path: '/support' }"><i class="material-icons left">build</i>Support</a></li>
          <li><a v-link="{ path: '/help' }"><i class="material-icons left">help_outline</i>Help</a></li>
          <li><a v-on:click="login"><i class="material-icons left">input</i>Login</a></li>
        </template>
      </ul>

      <a href="#" data-activates="slide-out" class="button-collapse">
        <i class="material-icons">menu</i>
      </a>
    </div>
  </nav>
</template>

<script>
  import $ from 'jquery'
  import store from '../store.js'
  import AuthService from '../services/authentication.js'

  // window.store = store

  export default {
    data: function () {
      return {
      }
    },

    ready: function () {
      console.log('Dropdown init')
      $('.dropdown-button').dropdown({})
    },

    computed: {
      counter() {
        return store.state.counter
      },

      isAuthenticated: function () {
        return store.state.isAuthenticated
      }
    },

    methods: {
      login() {
        AuthService.login()
      },

      logout() {
        AuthService.logout()
      }
    }
  }
</script>

<style>
  .avatar {
      width: 42px;
      height: 42px;
      left: 15px;
      display: inline-block;
      vertical-align: middle;
      border: 2px solid white;
  }
</style>
