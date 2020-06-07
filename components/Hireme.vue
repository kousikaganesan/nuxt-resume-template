<template>
  <v-parallax
    height="200"
    :src="require('@/assets/images/hire-me.jpg')"
    alt="Hire me"
  >
    <div class="d-flex hire-me px-4">
      <div class="content d-flex flex-wrap">
        <div class="help">
          I'm open for collaborating for your upcoming projects!
        </div>
        <v-btn color="white" :href="mail" target="_blank" outlined dark
          >Hire me</v-btn
        >
      </div>
    </div>
  </v-parallax>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      mail: Constants.HIRE_ME
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-parallax__image {
  object-fit: cover;
}

::v-deep .v-parallax__content {
  background-color: #2320204a;
  padding: 0 !important;
}

.hire-me {
  .content {
    flex-basis: 70%;
  }
  .help {
    font-size: 1.5em;
    margin-right: 1rem;
  }
  @media screen and (max-width: 768px) {
    .content {
      flex-basis: 100%;
      justify-content: center;
    }
    .help {
      margin-bottom: 1rem;
      text-align: center;
    }
  }
}
</style>
