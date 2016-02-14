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

export default {
  components: {
    NavBar,
    FooterBar
  }
}
</script>
