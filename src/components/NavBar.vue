<template>
  <nav class="teal" role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo">Logo</a>

      <ul id="slide-out" class="side-nav">
        <li><a v-on:click="login">Login</a></li>
        <li><a v-on:click="logout">Logout</a></li>

        <li><a v-link="{ path: '/a' }">Go to A</a></li>
        <li><a v-link="{ path: '/b' }">Go to B</a></li>

        <li class="no-padding">
          <ul class="collapsible collapsible-accordion">
            <li>
              <a class="collapsible-header">Dropdown<i class="material-icons right">arrow_drop_down</i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="#!">First</a></li>
                  <li><a href="#!">Second</a></li>
                  <li><a href="#!">Third</a></li>
                  <li><a href="#!">Fourth</a></li>
                </ul>

              </div>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="right hide-on-med-and-down">
        <li><a v-link="{ path: '/a' }"><i class="material-icons">view_module</i></a></li>
        <li><a v-link="{ path: '/b' }"><i class="material-icons">notifications</i></a></li>
        <li>
          <a class="dropdown-button" href="#!" data-activates="dropdown1">
            <img src="http://materializecss.com/images/yuna.jpg" alt="" class="avatar circle">
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </li>
        <ul id='dropdown1' class='dropdown-content'>
          <li><a href="#!">Dashboard</a></li>
          <li><a href="#!">Account</a></li>
          <li><a v-on:click="login">Login</a></li
          <li><a v-on:click="logout">Logout</a></li>
        </ul>
      </ul>

      <a href="#" data-activates="slide-out" class="button-collapse">
        <i class="material-icons">menu</i>
      </a>


      <!-- <ul class="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>

      <ul style="left: -250px;" id="nav-mobile" class="side-nav">
        <li><a v-link="{ path: '/a' }">Go to A</a></li>
        <li><a v-link="{ path: '/b' }">Go to B</a></li>
      </ul>


      <ul id="slide-out" class="side-nav fixed">
        <li><a href="#!">First Sidebar Link</a></li>
        <li><a href="#!">Second Sidebar Link</a></li>
      </ul>

      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a> -->
    </div>
  </nav>
</template>

<script>
  import AuthService from '../services/authentication.js'

  export default {
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
