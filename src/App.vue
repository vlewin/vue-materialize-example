<template>

    <nav-bar></nav-bar>

    <main>
      <router-view></router-view>
    </main>

    <footer-bar></footer-bar>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
// import $ from 'jquery'
export default {
  ready: function () {
    console.info('ready')
  },

  components: {
    NavBar,
    FooterBar
  }
}
</script>
