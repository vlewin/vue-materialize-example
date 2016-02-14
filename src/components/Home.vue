<template>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center teal-text">Starter Template</h1>
      <div class="row center">
        <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
      </div>

      <div class="row">
        <div class="row">
          <div class="input-field col s10 m8 offset-m2">
            <i class="material-icons prefix grey-text">domain</i>
            <input type="text" class="validate" v-model="domain" length="10" autofocus required>
            <label class="full-width" data-error="Domain name is too long" data-success="OK">
              Domain
            </label>
          </div>
          <div class="input-field col s2 m2">
            <label for="first_name">.domain.com</label>
          </div>
        </div>
      </div>

      <!-- <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div> -->

      <div class="row center">
        <button class="btn-large waves-effect waves-light hoverable" v-on:click="login" v-bind:class="[isValid]">Get Started
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

    computed: {
      isValid: function () {
        return this.domain ? '' : 'disabled'
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
