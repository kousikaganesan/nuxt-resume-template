<template>
  <v-container id="contact" fluid class="contact">
    <div class="section-title">contact</div>
    <v-row no-gutters>
      <v-col class="contact-item" cols="4">
        <div class="contact-card">
          Linked In
        </div>
      </v-col>
      <v-col class="contact-item" cols="4">
        <div class="contact-card">
          Stackoverflow
        </div>
      </v-col>
      <v-col class="contact-item" cols="4">
        <div class="contact-card">
          Medium
        </div>
      </v-col>
      <v-col class="contact-item" cols="4">
        <div class="contact-card">
          Github
        </div>
      </v-col>
      <v-col class="contact-item" cols="4">
        <div class="contact-card">
          Twitter
        </div>
      </v-col>
      <v-col class="contact-item" cols="4">
        <div class="contact-card">
          Email
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact {
  height: 100vh;
  color: white;
  margin-top: 3rem;
  .contact-item {
    text-align: center;
    padding: 1rem;

    .contact-card {
      padding: 3rem;
      border-radius: 10px;
      background: linear-gradient(145deg, #252222, #201d1d);
      box-shadow: 6px 6px 10px rgba(13, 13, 13, 0.25),
        6px 6px 10px rgba(48, 48, 48, 0.25);
    }
  }
}
</style>
