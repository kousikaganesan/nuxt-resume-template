<template>
  <v-container id="skills" fluid class="skills">
    <div>
      <div class="section-title">Skills</div>
      <v-row no-gutters>
        <v-col class="text-center">Backend</v-col>
        <v-col class="text-center">Frontend</v-col>
        <v-col class="text-center">Others</v-col>
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
  height: 100vh;
  color: white;
  margin-top: 3rem;
}
</style>
