<template>
  <!-- TODO: add v-waypoint="{ active: true, callback: onWaypoint }" -->
  <v-container fluid class="about portfolio-container">
    <div id="about" class="px-4">
      <div class="section-title">About me</div>
      <div class="quotes text-center">
        <q>
          If you are working on something exciting that you really care about,
          you don't have to be pushed. The vision pulls you.
        </q>
      </div>
      <v-row no-gutters class="content">
        <v-col cols="12" md="6">
          Hi, I'm a Full stack developer specialized in both frontend and
          backend development for building complex scalable web apps. I’ve
          always sought out opportunities and challenges that are meaningful to
          me. Over the past 3 years, I have collaborated with some incredible
          teams and involved in all stages of software development life cycle.
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
          <!-- <img class="illustration" src="@/assets/images/skill.png" /> -->
          <v-progress-linear
            class="mb-5"
            rounded
            height="20"
            active
            value="25"
          />
          <v-progress-linear
            class="mb-5"
            rounded
            height="20"
            active
            value="50"
          />
          <v-progress-linear
            class="mb-5"
            rounded
            height="20"
            active
            value="53"
          />
          <v-progress-linear
            class="mb-5"
            rounded
            height="20"
            active
            value="70"
          />
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
  .quotes {
    margin: 2rem auto;
    font-size: 2rem;
    max-width: 50rem;
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
