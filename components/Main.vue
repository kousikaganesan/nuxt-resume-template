<template>
  <v-container fluid>
    <v-navigation-drawer
      fixed
      mini-variant
      permanent
      floating
      class="navigation"
    >
      <Navigation v-if="showMenu" />
    </v-navigation-drawer>
    <div class="portfolio-content">
      <Home v-waypoint="{ active: true, callback: onWaypoint }" />
      <About data-aos="fade-up" data-aos-duration="1000" />
      <Skills data-aos="fade-up" data-aos-duration="1000" />
      <Works data-aos="fade-up" data-aos-duration="1000" />
      <Contact data-aos="fade-up" data-aos-duration="1000" />
    </div>
  </v-container>
</template>

<script>
// import Rellax from 'rellax'
import Navigation from '@/components/Navigation'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import Contact from '@/components/Contact'

export default {
  components: {
    Navigation,
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
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    // const rellax = new Rellax('.rellax')
  },
  methods: {
    onWaypoint({ going, direction }) {
      this.showMenu = going === this.$waypointMap.GOING_OUT
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  background-color: #232020;
}
.portfolio-content {
  margin-left: 56px;
}
</style>
