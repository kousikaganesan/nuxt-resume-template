<template>
  <div class="technologies">
    <div class="technologies-title d-flex justify-center align-center">
      Technologies I <img class="heart" src="@/assets/images/heart.png" />
    </div>
    <carousel :autoplay="true" :nav="false" :loop="true" :items="1">
      <div
        v-for="skill in skills"
        :key="skill.name"
        src="@/assets/images/me.jpg"
      >
        <v-card class="tech-card text--primary" flat>
          <v-row>
            <v-col v-for="item in skill.items" :key="item.name" cols="6" md="4">
              <div class="tech">
                <img
                  class="technologies-logo"
                  :src="require(`@/assets/images/logos/${item.image}`)"
                />
                <p>{{ item.name }}</p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </carousel>
  </div>
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
.technologies {
  .technologies-title {
    font-size: 1.4375rem;
    font-weight: bold;
    margin-top: 3rem;
  }
  .technologies-logo {
    height: 3rem;
    width: 3rem;
    object-fit: contain;
    margin: 2rem;
  }
  .tech-card {
    background: #131313;
    .tech {
      flex-direction: column;
      display: flex;
      align-items: center;
      background: #323030;
      border-radius: 4px;
    }
  }
  .heart {
    height: 2.4375rem;
  }
}
</style>
