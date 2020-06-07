<template>
  <v-container fluid>
    <Home />
    <About />
    <Skills />
    <Works />
    <Contact />
    <!-- <div class="wrapper">
      <v-navigation-drawer
        absolute
        mini-variant
        permanent
        floating
        class="navigation"
      >
        <Navigation />
      </v-navigation-drawer>
      <div class="portfolio-content">
      </div>
    </div> -->
  </v-container>
</template>

<script>
// import Navigation from '@/components/Navigation'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import Contact from '@/components/Contact'

export default {
  components: {
    // Navigation,
    Home,
    About,
    Skills,
    Works,
    Contact
  },
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  background-color: #232020;
}
.portfolio-content {
  // margin-left: 56px;
  // overflow-y: scroll;
  background-color: #232020;
  height: 100vh;
}
.wrapper {
  position: relative;
}
</style>
