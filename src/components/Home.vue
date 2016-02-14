<template>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center teal-text">Starter Template</h1>
      <div class="row center">
        <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
      </div>

      <div class="row">
        {{domain}}
        <form class="col s12">
          <div class="row">
            <div class="input-field col s4 offset-s4">
              <input type="text" length="10" class="validate" v-model="domain" required>
              <!-- <label for="first_name">Domain Name</label> -->
              <label for="domain" data-error="Too long" data-success="OK">Domain name</label>
            </div>
            <div class="input-field col s4">
              <label for="first_name">.domain.com</label>
            </div>
          </div>
        </form>
      </div>

      <!-- Modal Trigger -->
      <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>

      <div class="row center">
        <button class="btn-large waves-effect waves-light" type="submit" v-class="loading: isLoading">Get Started
          <i class="material-icons right">send</i>
        </button>
      </div>
      <br><br>
    </div>
  </div>
</template>

<script>
  import AuthService from '../services/authentication.js'

  export default {
    data: function () {
      return {
        domain: null
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
