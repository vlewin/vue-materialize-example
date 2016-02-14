<template>

    <nav class="teal" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Logo</a>

        <ul id="slide-out" class="side-nav">
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
          <li><a v-link="{ path: '/a' }">Go to A</a></li>
          <li><a v-link="{ path: '/b' }">Go to B</a></li>
          <li>
            <a class="dropdown-button" href="#!" data-activates="dropdown1">
              Dropdown<i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
          <ul id='dropdown1' class='dropdown-content'>
            <li><a href="#!">First</a></li>
            <li><a href="#!">Second</a></li>
            <li><a href="#!">Third</a></li>
            <li><a href="#!">Fourth</a></li>
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

    <main>
      <router-view></router-view>
    </main>

    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br><br>
        <h1 class="header center teal-text">Starter Template</h1>
        <div class="row center">
          <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        </div>

        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s4 offset-s4">
                <input type="text" length="10" class="validate" required>
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


    <footer class="page-footer teal">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Company Bio</h5>
            <p class="grey-text text-lighten-4">Information block</p>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Settings</h5>
            <ul>
              <li><a class="white-text" href="#!">Link 1</a></li>
            </ul>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Connect</h5>
            <ul>
              <li><a class="white-text" href="#!">Link 1</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
        </div>
      </div>
    </footer>


  <div class="hiddendiv common"></div><div style="left: 0px;" class="drag-target"></div>
</template>

<script>
export default {
}
</script>
