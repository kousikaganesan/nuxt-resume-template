<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
#app {
  font-family: 'Nunito', sans-serif;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
    // /* Optional: show position indicator in red */
    // ::-webkit-scrollbar-thumb {
    //     background: ;
    // }
  }
}
</style>
