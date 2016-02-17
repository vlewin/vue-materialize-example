<template>
  <div class="container">
    <h2 class="teal-text">Dashboard</h2>
    <div class="divider"></div>
    <br>

    <ul class="collapsible" data-collapsible="expandable">
      <li>
        <div class="collapsible-header grey lighten-5 active">
          <i class="material-icons red-text text-lighten-1">error_outline</i>
          First
          <i class="material-icons collapsible-trigger right">more_vert</i>
        </div>
        <div class="collapsible-body">
          <div class="collapsible-container">
            <h4>Alerts</h4>
            <hr>

            <ul class="collection with-header">
             <li class="collection-item">
               <div>Alert<a href="#!" class="secondary-content">
                 <i class="material-icons red-text">remove_circle_outline</i></a>
              </div>
             </li>
             <li class="collection-item">
               <div>Alert<a href="#!" class="secondary-content">
                 <i class="material-icons red-text">remove_circle_outline</i></a>
              </div>
             <li class="collection-item">
               <div>Alert<a href="#!" class="secondary-content">
                 <i class="material-icons red-text">remove_circle_outline</i></a>
              </div>
             </li>
            </ul>

            <br><br>

            <h4>Actions</h4>
            <hr>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <a class="btn waves-effect waves-light"><i class="material-icons left">payment</i>Upgrade</a>
            <a class="modal-trigger waves-effect waves-light btn red lighten-1" href="#modal1"><i class="material-icons left">delete</i>Delete</a>

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

            <br><br>

            <h4>Settings</h4>
            <hr>

            <div class="row">
              <div class="input-field col s12 m4">
                <input id="username" type="text" autocomplete="off" class="validate">
                <label for="username">Username</label>
              </div>
              <div class="input-field col s12 m4">
                <input id="password" type="password" autocomplete="off" class="validate">
                <label for="password">Password</label>
              </div>
              <div class="input-field col s12 m4">
                <a class="btn">Change credentials</a>
              </div>
            </div>

          </div>
        </div>
      </li>
      <li>
        <div class="collapsible-header grey lighten-5">
          <i class="material-icons orange-text">warning</i>
          Second
          <i class="material-icons right">more_vert</i>
        </div>
        <div class="collapsible-body">
          <div class="collapsible-container">
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
        </div>
      </li>
      <li>
        <div class="collapsible-header grey lighten-5">
          <i class="material-icons green-text">check_circle</i>
          Third
          <i class="material-icons right">more_vert</i>
        </div>
        <div class="collapsible-body">
          <div class="collapsible-container">
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
      $('.modal-trigger').leanModal()
    }
  }
</script>

<style scoped>
  .collapsible-container {
    padding: 20px;
  }

  .collapsible-body p {
    padding: 0px;
  }
</style>
