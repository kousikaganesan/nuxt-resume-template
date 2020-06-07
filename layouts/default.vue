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
    width: 0px;
    background: transparent;
  }
}
</style>
