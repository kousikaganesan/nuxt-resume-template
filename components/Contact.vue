<template>
  <v-container id="contact" fluid class="contact portfolio-container">
    <div class="section-title">Contact</div>
    <v-row no-gutters class="social-media">
      <v-col
        v-for="item in socialLinks"
        :key="item.name"
        class="contact-item"
        cols="12"
        sm="6"
        md="4"
      >
        <a class="background" :href="item.link" target="_blank">
          <div class="card">{{ item.name }}</div>
        </a>
      </v-col>
    </v-row>
    <div class="footer">
      <div class="copyright">© 2020 Kousika Ganesan</div>
    </div>
  </v-container>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      socialLinks: Constants.SOCIAL_LINKS
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  .copyright {
    color: grey;
  }

  .social-media {
    margin: 0 2rem;
    // max-height: 30rem;

    .background {
      background: #262626;
      height: 100%;
      width: 100%;
      display: flex;
      padding: 1rem;
      text-decoration: none;
      color: white;
    }

    .card {
      background: #232020;
      margin: auto;
      height: 100%;
      width: 100%;
      padding: 2rem;
      font-size: 18px;
      font-weight: 500;
      border-radius: 10px;
      box-shadow: #262626 0px 0px 2px 2px, #000000 4px 4px 8px,
        #4d4d4d -4px -4px 8px;
    }
  }

  .footer {
    margin: 2rem;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    .card {
      padding: 1rem !important;
    }
  }
}
</style>
