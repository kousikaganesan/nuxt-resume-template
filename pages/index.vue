<template>
  <v-layout>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <Header />
        </v-col>
        <v-col cols="12">
          <Main />
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
export default {
  components: {
    Header,
    Main
  }
}
</script>

<style lang="scss" scoped></style>
