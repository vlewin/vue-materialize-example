<template>
  <div class="container">
    <h2 class="teal-text">Dashboard</h2>
    <div class="divider"></div>
    <br>

    <ul class="collapsible" data-collapsible="expandable">
      <li>
        <div class="collapsible-header active">
          <i class="material-icons teal-text">check_circle</i>
          First instance
          <i class="material-icons right">more_vert</i>
        </div>
        <div class="collapsible-body">
          <div class="row">
            <div class="input-field col s4">
              <input id="username" type="text" autocomplete="off" class="validate">
              <label for="username">Username</label>
            </div>
            <div class="input-field col s4">
              <input id="password" type="password" autocomplete="off" class="validate">
              <label for="password">Password</label>
            </div>
            <div class="input-field col s3">
              <a class="btn">Change credentials</a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="collapsible-header">
          <i class="material-icons orange-text">warning</i>
          Second instance
          <i class="material-icons right">more_vert</i>
        </div>
        <div class="collapsible-body">
          <div class="row">
            <div class="input-field col s4">
              <input id="username" type="text" autocomplete="off" class="validate">
              <label for="username">Username</label>
            </div>
            <div class="input-field col s4">
              <input id="password" type="password" autocomplete="off" class="validate">
              <label for="password">Password</label>
            </div>
            <div class="input-field col s3">
              <a class="btn">Change credentials</a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="collapsible-header">
          <i class="material-icons red-text">error</i>
          Third instance
          <i class="material-icons right">more_vert</i>
        </div>
        <div class="collapsible-body">
          <div class="row">
            <div class="input-field col s4">
              <input id="username" type="text" autocomplete="off" class="validate">
              <label for="username">Username</label>
            </div>
            <div class="input-field col s4">
              <input id="password" type="password" autocomplete="off" class="validate">
              <label for="password">Password</label>
            </div>
            <div class="input-field col s3">
              <a class="btn">Change credentials</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    ready: function () {
      $('.collapsible').collapsible()
    }
  }
</script>

<style scoped>
  .collapsible-body > .row {
    margin: 10px;
  }
</style>
