<template>
  <v-container
    v-waypoint="{ active: true, callback: onWaypoint }"
    fluid
    class="about"
  >
    <div id="about">
      <div class="section-title">About</div>
      <v-row no-gutters class="content">
        <v-col>
          Lorem ipsum dolor sit amet, adipiscing intellegam at eos, pri omnis
          putant accusamus at. Adolescens intellegebat at duo. Postea graeci
          pertinacia ius et, eam ad perfecto quaestio, id vel brute bonorum
          assentior. Quodsi abhorreant ut usu, regione nostrum contentiones usu
          eu. Nec in vide mentitum, nec ea iisque impedit accusata. Eam sonet
          nobis eu. Eu ius putent vivendo reprehendunt, est id libris forensibus
          theophrastus. Ea quod ipsum ullamcorper cum. Verterem adversarium
          theophrastus nec at, eos cu sapientem consulatu neglegentur. Eos minim
          paulo an, te eos audiam option utamur, vero recusabo sit cu. No sale
          volumus urbanitas sed. Malis platonem deterruisset duo ei, pri putant
          recteque complectitur ad.
        </v-col>
        <v-col>
          <img class="illustration" src="@/assets/images/coder.svg" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    onWaypoint({ going }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.$nextTick(() => {
          this.$scrollTo('#about', { easing: 'ease-in' })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  height: 100vh;
  color: white;
  .illustration {
    width: calc(100% - 56px);
  }
  .content {
    padding: 3rem;
  }
}
</style>
