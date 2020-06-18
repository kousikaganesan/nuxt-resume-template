<template>
  <v-container id="works" fluid class="works portfolio-container">
    <div class="px-4">
      <div class="section-title">Recent works</div>
      <!-- <div class="works-description">
        I have worked in 10+ projects in various Javascript technologies by
        collaborating with some incredible teams and also by independently
        handling project that involves agile methodology. All my works comes
        under Squashapps pvt ltd and hence the name cannot be revealed. So, here
        are my recent project's one liners and my contribution to the project.
      </div> -->
      <v-card class="mx-auto" max-width="300" dark elevation="24">
        <v-img
          class="white--text align-end"
          height="300px"
          :src="require('@/assets/images/covid.png')"
        >
          <v-card-text class="text--primary">
            <div>COVID-19 Tracker</div>
            <div>Tech stack: React JS</div>
          </v-card-text>
        </v-img>
      </v-card>
      <v-row no-gutters class="work-trai">
        <v-col class="text-center px-4" cols="12" sm="4">
          <img class="work-img" src="@/assets/images/paint-roller.png" />
          <div class="work-title">Tailored to your needs</div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img class="work-img" src="@/assets/images/design-tool.png" />
          <div class="work-title">Pixel perfect code</div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img class="work-img" src="@/assets/images/like.png" />
          <div class="work-title">Built with love</div>
        </v-col>
      </v-row>
      <div class="works-description"></div>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.works {
  // color: white;
  // margin-top: 3rem;
  .work-img {
    height: 6rem;
  }
  .work-title {
    font-size: 1.4375rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  .works-description {
    font-size: 1.3rem;
    line-height: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
