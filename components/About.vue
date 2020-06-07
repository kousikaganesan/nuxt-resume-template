<template>
  <v-container
    v-waypoint="{ active: true, callback: onWaypoint }"
    fluid
    class="about"
  >
    <div id="about">
      <div class="section-title">About</div>
      <v-row no-gutters class="content">
        <v-col cols="12" md="6">
          Hi
          <div class="d-flex justify-center follow-section">
            <a
              class="linkedin"
              title="Connect to Kousika Ganesan on Linkedin"
              href="https://in.linkedin.com/in/kousika-ganesan"
            >
              <img class="logo" src="@/assets/images/linkedin.png" />Kousika
              Ganesan
            </a>
            <div>
              <a
                href="https://twitter.com/kousika13?ref_src=twsrc%5Etfw"
                class="twitter-follow-button"
                data-show-count="false"
                >Follow @kousika13</a
              >
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <img class="illustration" src="@/assets/images/coder.svg" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    // onWaypoint({ going }) {
    //   if (going === this.$waypointMap.GOING_IN) {
    //     this.$nextTick(() => {
    //       this.$scrollTo('#about', { easing: 'ease-in' })
    //     })
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.about {
  color: white;
  .illustration {
    width: calc(100% - 56px);
  }
  .content {
    padding: 3rem;
  }
  .follow-section {
    margin-top: 2rem;
    .linkedin {
      background-color: #0e76a8;
      font-size: 11px;
      height: 20px;
      line-height: 20px;
      padding-right: 7px;
      border-radius: 2px;
      font-weight: bold;
      cursor: pointer;
      margin-right: 1rem;
      text-decoration: none;
      color: white;
      white-space: nowrap;

      .logo {
        height: 20px;
        margin-right: 3.5px;
        vertical-align: middle;
      }
    }
  }
}
</style>
