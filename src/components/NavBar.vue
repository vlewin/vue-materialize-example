<template>
  <nav class="teal" role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo">LOGO - {{isAuthenticated}} - {{ counter }}</a>

      <ul class="right hide-on-med-and-down">
        <template v-if="isAuthenticated">
          <li><a v-link="{ path: '/b' }"><i class="material-icons">notifications</i></a></li>
          <li>
            <a class="dropdown-button" href="#!" data-activates="dropdown1">
              <img src="http://materializecss.com/images/yuna.jpg" alt="" class="avatar circle">
              <i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
          <ul id='dropdown1' class='dropdown-content'>
            <li><a v-link="{ path: '/a' }">Dashboard</a></li>
            <li><a v-link="{ path: '/b' }">Account</a></li>
            <li><a v-on:click="logout">Logout</a></li>
          </ul>
        </template>

        <template v-else>
          <li><a v-link="{ path: '/a' }"><i class="material-icons">view_module</i></a></li>
          <li><a v-on:click="login"><i class="material-icons left">input</i>Login</a></li>
          <!-- <li><a v-on:click="login"></a>Login</li> -->
        </template>
      </ul>

      <a href="#" data-activates="slide-out" class="button-collapse">
        <i class="material-icons">menu</i>
      </a>
    </div>
  </nav>
</template>

<script>
  import AuthService from '../services/authentication.js'
  import store from '../store.js'

  // window.store = store

  export default {
    data: function () {
      return {
      }
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
