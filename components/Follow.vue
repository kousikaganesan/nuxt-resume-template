<template>
  <div class="d-flex justify-center follow-section">
    <a
      class="linkedin"
      title="Connect to Kousika Ganesan on Linkedin"
      href="https://in.linkedin.com/in/kousika-ganesan"
      target="_blank"
    >
      <img alt="logo" class="logo" src="@/assets/images/linkedin.png" />Kousika
      Ganesan
    </a>
    <div>
      <!-- TODO: Fix loading issue -->
      <!-- <a
        href="https://twitter.com/kousika13?ref_src=twsrc%5Etfw"
        class="twitter-follow-button"
        data-show-count="false"
      >
        Follow @kousika13
      </a> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
</style>
