<template>
  <v-container id="home" fluid class="text-center home">
    <Header />
    <div
      class="banner d-flex justify-center align-center rellax flex-column"
      data-rellax-speed="-4"
    >
      <div class="banner-text">Hi, I am</div>
      <div class="full-name">Kousika Ganesan</div>
      <vue-typed-js
        class="justify-center"
        :strings="['Full stack developer', 'Tech enthusiast', 'Auto pilot']"
      >
        <div class="sub-text">
          I'm a <span class="typing font-weight-bold"></span>
        </div>
      </vue-typed-js>
    </div>
    <!-- <img src="@/assets/images/scroll.gif" class="scroll-gif" /> -->
    <img
      src="@/assets/images/rect.png"
      class="rellax object-1"
      data-rellax-speed="7"
      data-rellax-percentage="0.5"
    />
    <img
      src="@/assets/images/rect.png"
      class="rellax object-2"
      data-rellax-speed="7"
      data-rellax-percentage="0.5"
    />
    <img
      src="@/assets/images/rect.png"
      class="rellax object-3"
      data-rellax-speed="7"
      data-rellax-percentage="0.5"
    />
    <img
      src="@/assets/images/rect.png"
      class="rellax object-4"
      data-rellax-speed="7"
      data-rellax-percentage="0.5"
    />
  </v-container>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  position: relative;
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
  }
  .banner-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .banner {
    height: calc(100% - 9rem);
    position: absolute;
    width: 100%;
    z-index: 2;
  }
  .sub-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .object-1 {
    // height: 5rem;
    // width: 5rem;
    // background-color: #00f1c9;
    // border-radius: 12px;
    // transform: rotateY(0deg) rotate(45deg);
    position: absolute;
    top: 30rem;
    left: 3rem;
    z-index: 0;
  }
  .object-2 {
    @extend .object-1;
    top: 50rem;
    left: 10rem;
  }
  .object-3 {
    @extend .object-1;
    top: 60rem;
    left: 30rem;
  }
  .object-4 {
    @extend .object-1;
    top: 70rem;
    left: 50rem;
  }
}
</style>
