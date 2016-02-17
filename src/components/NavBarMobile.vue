<template>
  <ul id="slide-out" class="side-nav">

    {{#if isAuthenticated}}
      <li><a v-link="{ path: '/b' }">Go to B</a></li>
      <li><a v-on:click="logout">Logout</a></li>

      <li class="no-padding">
        <ul class="collapsible collapsible-accordion">
          <li>
            <a class="collapsible-header">Dropdown<i class="material-icons collapsible-trigger right">arrow_drop_down</i></a>
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

      {{else}}
        <li><a v-on:click="login">Login</a></li>
        <li><a v-link="{ path: '/a' }">Go to A</a></li>
      {{/if}}
  </ul>
</template>
