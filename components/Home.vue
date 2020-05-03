<template>
  <v-container fluid class="text-center">
    <div>
      <h1>Hi</h1>
      <h3>I'm <span class="full-name">Kousika Ganesan</span></h3>
      <vue-typed-js
        class="justify-center"
        :strings="['Full stack developer', 'Tech enthusiast', 'Auto pilot']"
      >
        <h4>I'm a <span class="typing"></span></h4>
      </vue-typed-js>
      <img src="@/assets/images/scroll.gif" class="scroll-gif" />
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.full-name {
  color: #02f3e6;
}
.scroll-gif {
  height: 6rem;
}
</style>
