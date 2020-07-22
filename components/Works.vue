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
      <v-row class="px-5">
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          sm="4"
        >
          <Project :project="project" />
        </v-col>
      </v-row>
      <div class="text-center pa-4 ma-4">
        <v-btn color="white" :href="moreProjects" target="_blank" outlined dark>
          View more
        </v-btn>
      </div>
      <!-- <v-row no-gutters class="work-traits">
        <v-col class="text-center px-4" cols="12" sm="4">
          <img alt="tailored" class="work-img" src="@/assets/images/paint-roller.png" />
          <div class="work-title">Tailored to your needs</div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img alt="perfect code" class="work-img" src="@/assets/images/design-tool.png" />
          <div class="work-title">Pixel perfect code</div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img alt="built with love" class="work-img" src="@/assets/images/like.png" />
          <div class="work-title">Built with love</div>
        </v-col>
      </v-row> -->
    </div>
  </v-container>
</template>

<script>
import Project from '@/components/Project'
import Constants from '@/constants'

export default {
  components: {
    Project
  },
  data() {
    return {
      projects: Constants.PROJECTS,
      moreProjects: Constants.GITHUB_LINK
    }
  }
}
</script>

<style lang="scss" scoped>
.works {
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
  .work-traits {
    margin-top: 5rem;
  }
}
</style>
