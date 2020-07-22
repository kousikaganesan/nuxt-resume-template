<template>
  <div>
    <div v-if="isMenuOpen" class="menu-container">
      <img
        v-if="data.length === 5"
        class="close"
        alt="toggle"
        data-aos="slide-right"
        src="@/assets/images/close.svg"
        @click="toggleMenu"
      />
      <ul class="menu-item">
        <li
          v-for="item in data"
          :key="item.name"
          data-aos="slide-right"
          class="d-flex justify-center align-center"
        >
          <a @click.prevent="navigateTo(item.name)">
            <div class="text-uppercase name text-center">{{ item.name }}</div>
            <div class="fade-up tag text-center">- {{ item.tagLine }}</div>
          </a>
        </li>
      </ul>
    </div>
    <div v-else class="d-flex justify-end">
      <img
        class="menu"
        alt="menu"
        data-aos="fade"
        src="@/assets/images/menu.svg"
        @click="toggleMenu"
      />
    </div>
  </div>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      isMenuOpen: false,
      data: [],
      items: Constants.PORTFOLIO_SECTIONS
    }
  },
  mounted() {},
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      if (this.isMenuOpen) {
        this.data = []
        this.items.map((item, index) => {
          setTimeout(() => {
            this.data.push(item)
          }, 100 * index)
        })
      }
    },
    navigateTo(path) {
      this.$router.push(`#${path.toLowerCase()}`)
      this.isMenuOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  .close {
    height: 1.5rem;
    top: 1.5rem;
    position: fixed;
    right: 1.5rem;
    cursor: pointer;
    z-index: 6;
  }
  .menu-item {
    list-style: none;
    height: 100%;
    display: flex;
    width: 100%;
    padding: 0rem;

    .name {
      letter-spacing: 4px;
      color: white;
    }

    li {
      flex-basis: 20%;
      cursor: pointer;
      height: 100vh;

      &:nth-of-type(1) {
        background-color: #111111;
      }

      &:nth-of-type(2) {
        background-color: #333333;
      }

      &:nth-of-type(3) {
        background-color: #555555;
      }

      &:nth-of-type(4) {
        background-color: #777777;
      }

      &:nth-of-type(5) {
        background-color: #999999;
      }
      .tag {
        font-style: italic;
        padding: 0 0.5rem;
        font-size: 0.85rem;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 0.5s, opacity 0.5s linear;
        color: white;
      }
      &:hover {
        .tag {
          visibility: visible;
          font-style: italic;
          padding: 0 0.5rem;
          font-size: 0.85rem;
          opacity: 1;
          transition: opacity 0.5s linear;
        }
      }
    }
  }
}
.menu {
  height: 1.5rem;
  margin: 1.5rem 1.5rem 0;
  cursor: pointer;
}
</style>
