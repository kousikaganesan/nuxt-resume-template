<template>
  <v-container id="skills" fluid class="skills">
    <div>
      <div class="section-title">Skills</div>
      <v-row no-gutters>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img src="@/assets/images/frontend.png" />
          <div class="skill-title">Frontend</div>
          <div class="skill-description">
            Build responsive and cross browser efficient websites by providing
            seamless transition from design to development
          </div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img src="@/assets/images/backend.png" />
          <div class="skill-title">Backend</div>
          <div class="skill-description">
            Maintaining servers including database administration as well as
            scaling applications to handle load changes.
          </div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img src="@/assets/images/mobileapp.png" />
          <div class="skill-title">Hybrid mobile app</div>
          <div class="skill-description">
            Build easily maintainable mobile apps that run on Android, IOS and
            web with single code implementation.
          </div>
        </v-col>
      </v-row>
      <Hireme />
    </div>
  </v-container>
</template>

<script>
import Hireme from '@/components/Hireme'

export default {
  components: {
    Hireme
  }
}
</script>

<style lang="scss" scoped>
.skills {
  color: white;
  margin-top: 3rem;
  .skill-title {
    font-size: 1.4375rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  .skill-description {
    margin-bottom: 3rem;
  }
}
</style>
