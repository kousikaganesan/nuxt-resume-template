<template>
  <div
    class="navigation"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
  >
    <ul class="list d-flex flex-column justify-center align-center fill-height">
      <li v-for="item in sections" :key="item.name">
        <a @click.prevent="navigateTo(item.name)">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      sections: Constants.PORTFOLIO_SECTIONS
    }
  },
  methods: {
    navigateTo(path) {
      this.$router.push(`#${path.toLowerCase()}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  height: 100vh;
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    margin: 1.25rem 0;
    a {
      text-decoration: none;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      color: #c7c0c0a3;
      font-weight: 700;
      &:hover {
        color: #ffffff;
      }
    }
  }
}
</style>
