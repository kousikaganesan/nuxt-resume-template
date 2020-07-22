<template>
  <!-- TODO: add v-waypoint="{ active: true, callback: onWaypoint }" -->
  <v-container fluid class="about portfolio-container">
    <div id="about" class="px-4">
      <div class="section-title">About me</div>
      <div class="d-flex justify-center mb-6">
        <div height="250" class="me-img"></div>
      </div>
      <div class="quotes text-center mb-10">
        <q>
          If you are working on something exciting that you really care about,
          you don't have to be pushed. The vision pulls you.
        </q>
        <br />
      </div>
      <!-- <div class="text-right author">- Steve Jobs</div> -->
      <v-row no-gutters class="content">
        <v-col cols="12" md="6">
          <p>
            Hi, I'm a Full stack developer specialized in both frontend and
            backend development for building complex and scalable web apps. I’ve
            always sought out opportunities and challenges that are meaningful
            to me. Over the past 3 years, I have collaborated with incredible
            teams and involved in all stages of software development life cycle.
          </p>
          <p>
            I also love to sketch and do crafts. These skills made me believe in
            "A problem visualized is a problem halved."
          </p>
          <div class="d-flex justify-center follow-section">
            <a
              class="linkedin"
              title="Connect to Kousika Ganesan on Linkedin"
              href="https://in.linkedin.com/in/kousika-ganesan"
            >
              <img
                alt="logo"
                class="logo"
                src="@/assets/images/linkedin.png"
              />Kousika Ganesan
            </a>
            <div>
              <a
                href="https://twitter.com/kousika13?ref_src=twsrc%5Etfw"
                class="twitter-follow-button"
                data-show-count="false"
                >Follow @kousika13</a
              >
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="px-10 skills-percentage">
            <v-progress-linear
              v-for="skill in skills"
              :key="skill.name"
              rounded
              class="mb-5"
              height="25"
              width="50%"
              color="#7e7e7e"
              active
              :value="skill.percentage"
              ><div class="ma-2">{{ skill.name }}</div></v-progress-linear
            >
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      skills: Constants.SKILLS
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  color: white;
  .illustration {
    width: calc(100% - 56px);
  }
  .content {
    padding: 0 3rem;
    p {
      font-size: 1.2rem;
      line-height: 150%;
    }
  }
  .quotes {
    margin: 2rem auto 0;
    font-size: 2rem;
    max-width: 50rem;
  }
  .author {
    margin: 0rem auto 1.5rem;
    max-width: 50rem;
    text-align: right;
    font-size: 1.5rem;
    font-style: italic;
  }
  .me-img {
    background: url('../assets/images/me.jpg') no-repeat;
    width: 200px;
    height: 175px;
    background-size: 200px 180px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }
  .follow-section {
    margin-top: 0.5rem;
    .linkedin {
      background-color: #0e76a8;
      font-size: 11px;
      height: 20px;
      line-height: 20px;
      padding-right: 7px;
      border-radius: 2px;
      font-weight: bold;
      cursor: pointer;
      margin-right: 1rem;
      text-decoration: none;
      color: white;
      white-space: nowrap;

      .logo {
        height: 20px;
        margin-right: 3.5px;
        vertical-align: middle;
      }
    }
  }
  ::v-deep .v-progress-linear__content {
    justify-content: start;
    font-weight: bold;
  }
}

@media screen and (max-width: 767px) {
  .skills-percentage {
    margin-top: 2rem;
  }
}
</style>
