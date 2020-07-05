<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto project" max-width="300" dark elevation="24">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require(`@/assets/images/${project.cover}`)"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal hover-content"
          >
            <v-btn
              absolute
              class="ma-2 view-project"
              depressed
              rounded
              large
              color="black"
              elevation="0"
              @click="viewProject"
            >
              View Project
            </v-btn>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="text--primary">
        <h2 class="font-weight-black pb-2">{{ project.title }}</h2>
        <div class="pb-2 tech-stack">{{ project.techStack.join(', ') }}</div>
      </v-card-text>
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="500"
      >
        <v-card class="project-modal">
          <div class="close-btn" @click="closeModal">
            <v-icon>mdi-close</v-icon>
          </div>
          <v-img
            height="250"
            :src="require(`@/assets/images/${project.cover}`)"
          ></v-img>
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>
            <div class="pb-4">
              This project comes under Squashapps pvt ltd and hence the name is
              confidential. So, here is the project's one liners and my
              contribution to the project.
            </div>
            {{ project.description }}
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    viewProject() {
      if (this.project.isConfidential) {
        this.dialog = true
      } else {
        window.open(this.project.url, '_blank')
      }
    },
    closeModal() {
      this.dialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  cursor: pointer;
}
.hover-content {
  height: 100%;
}
.view-project {
  opacity: 1 !important;
  z-index: 2;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  background: #323030e0;
}
.tech-stack {
  height: 2.5rem;
}
.project-modal {
  background: #323030;
  position: relative;
}
.close-btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1;
  height: 30px;
  cursor: pointer;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #323030;
  }
}
</style>
