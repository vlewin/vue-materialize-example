<template>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br><br><br><br>
      <h1 class="header center teal-text">Starter Template</h1>
      <div class="row center">
        <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
      </div>

      <div class="row">
        <div class="input-field col s10 m8 offset-m2">
          <i class="material-icons prefix valign" v-bind:class="[isValid ? 'green-text' : 'grey-text']">done_all</i>
          <input type="text" class="validate" v-model="domain" placeholder="domain" length="10" minlength=10 maxlength=140 autofocus/>
          <label class="full-width" data-error="Domain name is too long" data-success="OK">
            Domain
          </label>

        </div>
        <div class="input-field col s2 m2">
          <label for="first_name">.example.com</label>
        </div>
      </div>

      <div class="row center">
        <button class="btn-large waves-effect waves-light hoverable" v-on:click="login" v-bind:class="[isDisabled]">Get Started
          <i class="material-icons right">send</i>
        </button>
      </div>
      <br><br>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import AuthService from '../services/authentication.js'

  export default {
    data: function () {
      return {
        domain: null
      }
    },

    ready: function () {
      $(document).ready(function () {
        $('input[autofocus]').focus()
        // FIXME: http://stackoverflow.com/questions/32552299/materialize-framework-character-count
        $('input, textarea').characterCounter()
      })
    },

    computed: {
      isValid: function () {
        return !!this.domain
      },

      isDisabled: function () {
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
