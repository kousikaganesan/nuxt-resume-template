<template>
  <v-container fluid>
    <Home />
  </v-container>
</template>

<script>
import Rellax from 'rellax'
import Home from '@/components/Home'

export default {
  components: {
    Home
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const rellax = new Rellax('.rellax')
  }
}
</script>

<style lang="scss" scoped>
.dummy {
  background-color: orangered;
  height: 104rem;
}
</style>
