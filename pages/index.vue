<template>
  <v-layout>
    <Main />
  </v-layout>
</template>

<script>
import Main from '@/components/Main'
export default {
  components: {
    Main
  },
  head() {
    return {
      title: 'Kousika Ganesan - Fullstack Developer',
      meta: [
        {
          name: 'description',
          hid: 'description',
          content:
            'Experienced in the field of web and hybrid app development using JavaScript and its frameworks. Proficient in building scalable micro services as well.'
        },
        {
          name: 'keywords',
          content:
            'Fullstack Developer, Remote Engineer, Software developer, app development'
        },
        {
          name: 'og:title',
          content: 'Kousika Ganesan - Fullstack Developer'
        },
        {
          name: 'og:description',
          content:
            'Experienced in the field of web and hybrid app development using JavaScript and its frameworks. Proficient in building scalable micro services as well.'
        },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://kousikaganesan.github.io/' },
        {
          name: 'og:image',
          content: require('@/assets/images/logo.png')
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:site',
          content: 'Kousika Ganesan'
        },
        {
          name: 'twitter:title',
          content: 'Kousika Ganesan - Fullstack Developer'
        },
        {
          name: 'twitter:description',
          content:
            'Experienced in the field of web and hybrid app development using JavaScript and its frameworks. Proficient in building scalable micro services as well.'
        },
        {
          name: 'twitter:image',
          content: require('@/assets/images/logo.png')
        },
        {
          name: 'twitter:image:alt',
          content: 'Kousika Ganesan Logo'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
