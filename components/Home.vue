<template>
  <v-parallax
    height="100vh"
    :src="require('@/assets/images/dark-background.png')"
    alt="Banner"
  >
    <!-- TODO: add v-waypoint="{ active: true, callback: onWaypoint }" -->
    <v-container id="home" fluid class="text-center home">
      <!-- <Header /> -->
      <div class="banner-wrapper">
        <div
          class="banner d-flex justify-center align-center rellax flex-column"
        >
          <div class="banner-text">Hi, I am</div>
          <div class="full-name">Kousika Ganesan</div>
          <vue-typed-js
            class="justify-center"
            :strings="[
              'Full stack developer',
              'Javascript enthusiast',
              'Avid learner'
            ]"
          >
            <div class="sub-text">
              I'm a <span class="typing font-weight-bold"></span>
            </div>
          </vue-typed-js>
        </div>
        <div class="scroll-gif"><img src="@/assets/images/scroll.gif" /></div>
      </div>
    </v-container>
  </v-parallax>
</template>

<script>
// import Header from '@/components/Header'
export default {
  components: {
    // Header
  },
  methods: {
    // onWaypoint({ going }) {
    //   if (going === this.$waypointMap.GOING_IN) {
    //     this.$nextTick(() => {
    //       this.$scrollTo('#home', { easing: 'ease-in' })
    //     })
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  .full-name {
    color: #02f3e6;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom: 1rem;
  }
  .scroll-gif {
    height: 6rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    img {
      height: 5.625rem;
    }
  }
  .banner-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .banner {
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2;
  }
  .sub-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .banner-wrapper {
    position: relative;
    // height: calc(100% - 9rem);
    height: 100%;
  }
  @media screen and (max-width: 767px) {
    .full-name {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
}
</style>
